---
title: "标签"
layout: single
permalink: /tags/
author_profile: true
---

{% capture tags %}
  {% for post in site.posts %}{% for tag in post.tags %}{{ tag }},{% endfor %}{% endfor %}
{% endcapture %}
{% assign unique_tags = tags | split: ',' | uniq | sort %}

<div class="tag-cloud">
{% for tag in unique_tags %}
  {% if tag != "" %}
    <span class="tag-item">
      <a href="#{{ tag | slugify }}">{{ tag }}</a>
    </span>
  {% endif %}
{% endfor %}
</div>

{% for tag in unique_tags %}
  {% if tag != "" %}
    <h2 id="{{ tag | slugify }}">{{ tag }}</h2>
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
  {% endif %}
{% endfor %}

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
