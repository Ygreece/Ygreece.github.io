---
title: "分类"
layout: single
permalink: /categories/
author_profile: true
---

<div id="category-container"></div>

<script>
(function() {
  var posts = [
    {% for post in site.posts %}
    {
      "title": {{ post.title | jsonify }},
      "url": "{{ post.url }}",
      "date": "{{ post.date | date: '%Y-%m-%d' }}",
      "categories": {{ post.categories | jsonify }}
    }{% unless forloop.last %},{% endunless %}
    {% endfor %}
  ];

  var catMap = {};
  posts.forEach(function(post) {
    (post.categories || []).forEach(function(cat) {
      if (!catMap[cat]) catMap[cat] = [];
      catMap[cat].push(post);
    });
  });

  var container = document.getElementById('category-container');
  var html = '';

  Object.keys(catMap).sort().forEach(function(cat) {
    html += '<h2 id="' + cat + '">' + cat + ' (' + catMap[cat].length + ')</h2><ul>';
    catMap[cat].forEach(function(post) {
      html += '<li><span class="post-date">' + post.date + '</span><a href="' + post.url + '">' + post.title + '</a></li>';
    });
    html += '</ul>';
  });

  container.innerHTML = html;
})();
</script>

<style>
.post-date {
  color: #888;
  margin-right: 0.8em;
  font-size: 0.9em;
}
</style>
