---
title: "分类"
layout: single
permalink: /categories/
author_profile: true
---

{% assign all_categories = "" | split: "" %}
{% for post in site.posts %}
  {% for cat in post.categories %}
    {% unless all_categories contains cat %}
      {% assign all_categories = all_categories | push: cat %}
    {% endunless %}
  {% endfor %}
{% endfor %}
{% assign sorted_categories = all_categories | sort %}

{% for cat in sorted_categories %}
{% assign cat_count = 0 %}
{% for post in site.posts %}
  {% if post.categories contains cat %}
    {% assign cat_count = cat_count | plus: 1 %}
  {% endif %}
{% endfor %}

<h2 id="{{ cat }}">{{ cat }} ({{ cat_count }})</h2>
<ul>
{% for post in site.posts %}
  {% if post.categories contains cat %}
  <li>
    <span class="post-date">{{ post.date | date: "%Y-%m-%d" }}</span>
    <a href="{{ post.url }}">{{ post.title }}</a>
  </li>
  {% endif %}
{% endfor %}
</ul>
{% endfor %}

<style>
.post-date {
  color: #888;
  margin-right: 0.8em;
  font-size: 0.9em;
}
</style>
