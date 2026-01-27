/**
 * Core Competencies Dashboard
 * Handles interactive filtering and display of project proofs
 */

// Global state
let SKILL_TO_TAGS = {};
const ALL_PROJECTS = window.ALL_PROJECTS || [];

/**
 * Build skill-to-tag mapping from DOM elements
 * Reads data-tags from .skill-btn elements
 */
function buildSkillMapping() {
  const buttons = document.querySelectorAll('.skill-btn');
  buttons.forEach(btn => {
    const skillName = btn.getAttribute('data-skill');
    const tagsAttr = btn.getAttribute('data-tags');
    
    try {
      const tags = tagsAttr ? JSON.parse(tagsAttr) : [];
      SKILL_TO_TAGS[skillName] = tags;
    } catch (e) {
      console.warn(`Failed to parse tags for skill: ${skillName}`, e);
      SKILL_TO_TAGS[skillName] = [];
    }
  });
}

/**
 * Filter and sort projects by relevance to a skill
 */
function getProjectsForSkill(skillName) {
  const skillTags = SKILL_TO_TAGS[skillName] || [];
  
  // Map projects to match counts
  const scoredProjects = ALL_PROJECTS.map(project => {
    if (!project.tags) return { ...project, matchCount: 0 };
    
    // Count how many project tags match any of the skill tags
    const matchCount = project.tags.filter(pTag => 
      skillTags.some(sTag => sTag.toLowerCase() === pTag.toLowerCase())
    ).length;
    
    return { ...project, matchCount };
  });

  // Filter existing matches and sort by relevance (highest match count first)
  return scoredProjects
    .filter(p => p.matchCount > 0)
    .sort((a, b) => b.matchCount - a.matchCount)
    .slice(0, 2); // Take top 2
}

/**
 * Render projects into the dashboard preview pane
 */
function renderDashboardProjects(projects, skillName) {
  const container = document.getElementById('proof-content');
  if (!container) return;

  // Fade out
  container.style.opacity = '0';

  setTimeout(() => {
    let html = '';
    
    if (projects.length === 0) {
      html = `
        <div class="no-projects">
          <p>No specific case studies uploaded for <strong>${skillName}</strong> yet, but it's a key part of my daily work.</p>
        </div>`;
    } else {
      html = projects.map(p => `
        <a href="${p.url}" class="project-proof-card">
            <div class="card-image" style="background-image: url('${p.image}');"></div>
            <div class="card-details">
                <h4>${p.title}</h4>
                <p>${p.description}</p>
                <div class="card-meta">
                    <span class="project-date"><i class="far fa-calendar"></i> ${p.date || ''}</span>
                    <span class="cta-text">View Case Study →</span>
                </div>
            </div>
        </a>
      `).join('');
    }

    container.innerHTML = html;
    
    // Fade in
    container.style.opacity = '1';
  }, 200);
}

/**
 * Handle skill button click
 */
function handleSkillClick(btn) {
  // Update UI state
  document.querySelectorAll('.skill-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  // Logic
  const skillName = btn.getAttribute('data-skill');
  const projects = getProjectsForSkill(skillName);
  renderDashboardProjects(projects, skillName);
  
  // Optional: Track event
  if (window.trackEvent) {
      window.trackEvent('Skill Click', { skill: skillName });
  }
}

/**
 * Initialize
 */
function initCompetenciesDashboard() {
  buildSkillMapping();

  const buttons = document.querySelectorAll('.skill-btn');
  if (buttons.length === 0) return;

  // Attach listeners
  buttons.forEach(btn => {
    btn.addEventListener('click', () => handleSkillClick(btn));
  });

  // Auto-select first interaction
  handleSkillClick(buttons[0]);
}

// Boot
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCompetenciesDashboard);
} else {
  initCompetenciesDashboard();
}
