---
# Jekyll will process this file
---
/**
 * Project Data - Auto-generated from _projects/*.md
 */
window.ALL_PROJECTS = [
  {% for product in site.products %}
  {
    title: {{ product.title | jsonify }},
    url: {{ product.url | relative_url | jsonify }},
    image: {{ product.image | relative_url | jsonify }},
    description: {{ product.description | jsonify }},
    tags: {{ product.tags | jsonify }},
    categories: {{ product.categories | jsonify }}
  },
  {% endfor %}
  {% for post in site.posts %}
  {
    title: {{ post.title | jsonify }},
    url: {{ post.url | relative_url | jsonify }},
    image: {{ post.image | relative_url | jsonify }},
    description: {{ post.description | jsonify }},
    tags: {{ post.tags | jsonify }},
    categories: {{ post.categories | jsonify }}
  }{% unless forloop.last %},{% endunless %}
  {% endfor %}
];
