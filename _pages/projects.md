---
title: Projects
permalink: /projects/ 
---

<div class="grid">
  {% for project in site.projects %}
    <div class="grid__item">
      <div class="project-card">
        {% if project.image %}
          <img src="{{ project.image }}" alt="{{ project.title }}">
        {% endif %}
        <h3><a href="{{ project.url }}">{{ project.title }}</a></h3> {# Link to project page #}
        <p>{{ project.description }}</p>
         <div class="project-meta">
          {% if project.categories %}
            <span class="project-category">{{ project.categories | join: ", " }}</span>
          {% endif %}
        </div>
      </div>
    </div>
  {% endfor %}
</div>