---
title: "标签"
layout: single
permalink: /tags/
author_profile: true
---

<div class="tag-cloud">
{% assign all_tags = "" | split: "" %}
{% for post in site.posts %}
  {% for tag in post.tags %}
    {% unless all_tags contains tag %}
      {% assign all_tags = all_tags | push: tag %}
    {% endunless %}
  {% endfor %}
{% endfor %}
{% assign sorted_tags = all_tags | sort %}

{% for tag in sorted_tags %}
  {% assign tag_count = 0 %}
  {% for post in site.posts %}
    {% if post.tags contains tag %}
      {% assign tag_count = tag_count | plus: 1 %}
    {% endif %}
  {% endfor %}
  <span class="tag-item" style="font-size: {{ tag_count | times: 0.5 | plus: 1 }}em;">
    <a href="#{{ tag }}">{{ tag }} ({{ tag_count }})</a>
  </span>
{% endfor %}
</div>

{% for tag in sorted_tags %}
<h2 id="{{ tag }}">{{ tag }}</h2>
<ul>
{% for post in site.posts %}
  {% if post.tags contains tag %}
  <li>
    <span class="post-date">{{ post.date | date: "%Y-%m-%d" }}</span>
    <a href="{{ post.url }}">{{ post.title }}</a>
  </li>
  {% endif %}
{% endfor %}
</ul>
{% endfor %}

<style>
.tag-cloud {
  margin: 1em 0 2em;
  line-height: 2.2;
}
.tag-item {
  margin-right: 0.8em;
}
.tag-item a {
  text-decoration: none;
  padding: 0.2em 0.6em;
  border-radius: 4px;
  background: rgba(100, 100, 180, 0.15);
  transition: background 0.2s;
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
