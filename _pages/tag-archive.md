---
title: "标签"
layout: single
permalink: /tags/
author_profile: true
---

<div id="tag-container"></div>

<script>
(function() {
  var posts = [
    {% for post in site.posts %}
    {
      "title": {{ post.title | jsonify }},
      "url": "{{ post.url }}",
      "date": "{{ post.date | date: '%Y-%m-%d' }}",
      "tags": {{ post.tags | jsonify }}
    }{% unless forloop.last %},{% endunless %}
    {% endfor %}
  ];

  var tagMap = {};
  posts.forEach(function(post) {
    (post.tags || []).forEach(function(tag) {
      if (!tagMap[tag]) tagMap[tag] = [];
      tagMap[tag].push(post);
    });
  });

  var container = document.getElementById('tag-container');

  var cloudHtml = '<div class="tag-cloud">';
  Object.keys(tagMap).sort().forEach(function(tag) {
    cloudHtml += '<span class="tag-item"><a href="#' + tag + '">' + tag + ' (' + tagMap[tag].length + ')</a></span>';
  });
  cloudHtml += '</div>';

  var listHtml = '';
  Object.keys(tagMap).sort().forEach(function(tag) {
    listHtml += '<h2 id="' + tag + '">' + tag + '</h2><ul>';
    tagMap[tag].forEach(function(post) {
      listHtml += '<li><span class="post-date">' + post.date + '</span><a href="' + post.url + '">' + post.title + '</a></li>';
    });
    listHtml += '</ul>';
  });

  container.innerHTML = cloudHtml + listHtml;
})();
</script>

<style>
.tag-cloud {
  margin: 1em 0 2em;
  line-height: 2.5;
}
.tag-item {
  display: inline-block;
  margin-right: 0.5em;
  margin-bottom: 0.5em;
}
.tag-item a {
  text-decoration: none;
  padding: 0.3em 0.8em;
  border-radius: 4px;
  background: rgba(100, 100, 180, 0.15);
  transition: background 0.2s;
  font-size: 0.95em;
}
.tag-item a:hover {
  background: rgba(100, 100, 180, 0.35);
}
.post-date {
  color: #888;
  margin-right: 0.8em;
  font-size: 0.9em;
}
</style>
