---
title: "分类"
layout: single
permalink: /categories/
author_profile: true
---

{% capture cats %}
  {% for post in site.posts %}{% for cat in post.categories %}{{ cat }},{% endfor %}{% endfor %}
{% endcapture %}
{% assign unique_cats = cats | split: ',' | uniq | sort %}

{% for cat in unique_cats %}
  {% if cat != "" %}
    <h2 id="{{ cat | slugify }}">{{ cat }}</h2>
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
  {% endif %}
{% endfor %}

<style>
.post-date {
  color: #888;
  margin-right: 0.8em;
  font-size: 0.9em;
}
</style>
