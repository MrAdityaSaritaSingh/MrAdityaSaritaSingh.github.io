/**
 * Skill Filter Modal
 * Displays projects filtered by skill when a skill is clicked on the homepage
 */

// Skill to tag mapping - dynamically loaded from DOM data attributes
// This is populated from _data/skills.yml via Jekyll templating
let SKILL_TO_TAGS = {};

/**
 * Build skill-to-tag mapping from DOM
 * Reads data-tags attribute from each clickable skill element
 */
function buildSkillMapping() {
  document.querySelectorAll('.clickable-skill').forEach(el => {
    const skillName = el.getAttribute('data-skill');
    const tagsAttr = el.getAttribute('data-tags');
    
    try {
      const tags = tagsAttr ? JSON.parse(tagsAttr) : [];
      SKILL_TO_TAGS[skillName] = tags;
    } catch (e) {
      console.warn(`Failed to parse tags for skill: ${skillName}`, e);
      SKILL_TO_TAGS[skillName] = [];
    }
  });
  
  console.log('Skill mapping loaded:', SKILL_TO_TAGS);
}

// All projects data - loaded from window.ALL_PROJECTS (generated in custom_scripts.html)
const ALL_PROJECTS = window.ALL_PROJECTS || [];

/**
 * Filter projects by skill
 * @param {string} skill - The skill name
 * @returns {Array} - Filtered projects
 */
function filterProjectsBySkill(skill) {
  const relevantTags = SKILL_TO_TAGS[skill] || [];
  
  // If no tag mapping exists, try exact match
  if (relevantTags.length === 0) {
    relevantTags.push(skill);
  }
  
  return ALL_PROJECTS.filter(project => {
    return project.tags.some(tag => 
      relevantTags.some(relevantTag => 
        tag.toLowerCase().includes(relevantTag.toLowerCase()) ||
        relevantTag.toLowerCase().includes(tag.toLowerCase())
      )
    );
  });
}

/**
 * Render projects in the modal
 * @param {Array} projects - Projects to render
 */
function renderModalProjects(projects) {
  const container = document.getElementById('modalProjectsContainer');
  
  if (projects.length === 0) {
    container.innerHTML = `
      <div class="skill-modal__empty">
        <i class="fas fa-folder-open"></i>
        <p>No projects found for this skill yet.</p>
        <a href="/portfolio/" class="cta-button">View All Projects</a>
      </div>
    `;
    return;
  }
  
  const projectsHTML = projects.map(project => `
    <div class="skill-modal__project-card">
      ${project.image ? `
        <div class="skill-modal__project-image">
          <img src="${project.image}" alt="${project.title}" loading="lazy">
        </div>
      ` : ''}
      <div class="skill-modal__project-content">
        <h3 class="skill-modal__project-title">
          <a href="${project.url}" data-track-skill-project="${project.title}">${project.title}</a>
        </h3>
        <p class="skill-modal__project-description">${project.description}</p>
        <div class="skill-modal__project-tags">
          ${project.tags.map(tag => `<span class="skill-tag">${tag}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
  
  container.innerHTML = projectsHTML;
}

/**
 * Open the modal with filtered projects
 * @param {string} skill - The skill name
 */
function openSkillModal(skill) {
  const modal = document.getElementById('skillFilterModal');
  const skillNameSpan = document.getElementById('modalSkillName');
  
  // Set skill name
  skillNameSpan.textContent = skill;
  
  // Filter and render projects
  const filteredProjects = filterProjectsBySkill(skill);
  renderModalProjects(filteredProjects);
  
  // Show modal
  modal.classList.add('active');
  document.body.style.overflow = 'hidden'; // Prevent background scroll
  
  // Track analytics
  if (window.trackEvent) {
    window.trackEvent('Skill Click', { skill, projectCount: filteredProjects.length });
  }
}

/**
 * Close the modal
 */
function closeSkillModal() {
  const modal = document.getElementById('skillFilterModal');
  modal.classList.remove('active');
  document.body.style.overflow = ''; // Restore scroll
}

/**
 * Initialize skill filter functionality
 */
function initSkillFilter() {
  // Build the skill-to-tag mapping from DOM
  buildSkillMapping();
  
  // Add click listeners to all skills
  document.querySelectorAll('.clickable-skill').forEach(skillElement => {
    skillElement.addEventListener('click', function() {
      const skill = this.getAttribute('data-skill');
      openSkillModal(skill);
    });
  });
  
  // Close button
  const closeButton = document.querySelector('.skill-modal__close');
  if (closeButton) {
    closeButton.addEventListener('click', closeSkillModal);
  }
  
  // Close on overlay click
  const overlay = document.querySelector('.skill-modal__overlay');
  if (overlay) {
    overlay.addEventListener('click', closeSkillModal);
  }
  
  // Close on ESC key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      const modal = document.getElementById('skillFilterModal');
      if (modal.classList.contains('active')) {
        closeSkillModal();
      }
    }
  });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSkillFilter);
} else {
  initSkillFilter();
}
