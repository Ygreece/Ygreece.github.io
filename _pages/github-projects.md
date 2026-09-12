---
title: "开源项目"
layout: "single"
permalink: /github-projects/
author_profile: true
---

这里展示 GitHub 上最近更新的公开、非 Fork 项目。列表由 GitHub Actions 定期同步。

<div class="home-grid">
{% for project in site.data.github_projects %}
  <article class="home-card home-card--project">
    <p class="home-card__meta">{{ project.language | default: "PROJECT" }} · 更新于 {{ project.updated_at | date: "%Y-%m-%d" }}</p>
    <h3><a href="{{ project.html_url }}">{{ project.name }}</a></h3>
    <p>{{ project.description | default: "暂无项目说明。" }}</p>
    {% if project.topics.size > 0 %}<p class="home-card__topics">{{ project.topics | join: " · " }}</p>{% endif %}
  </article>
{% endfor %}
</div>
