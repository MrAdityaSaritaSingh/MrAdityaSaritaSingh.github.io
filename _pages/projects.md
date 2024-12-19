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

<style>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
  grid-gap: 20px;
}

.grid__item {
  display: flex;
}

.project-card {
  border: 1px solid #eee;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.project-card img {
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
}

.project-meta {
  margin-top: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.project-category{
  font-size: small;
  background-color: #eee;
  padding: 0.2rem 0.5rem;
  border-radius: 5px;
}
</style>