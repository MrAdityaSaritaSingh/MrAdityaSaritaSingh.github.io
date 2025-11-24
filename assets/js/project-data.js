---
# Jekyll will process this file
---
/**
 * Project Data - Auto-generated from _projects/*.md
 */
window.ALL_PROJECTS = [
  {% for project in site.projects %}
  {
    title: {{ project.title | jsonify }},
    url: {{ project.url | relative_url | jsonify }},
    image: {{ project.image | relative_url | jsonify }},
    description: {{ project.description | jsonify }},
    tags: {{ project.tags | jsonify }},
    categories: {{ project.categories | jsonify }}
  }{% unless forloop.last %},{% endunless %}
  {% endfor %}
];
