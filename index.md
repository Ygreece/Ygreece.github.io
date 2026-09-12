---
layout: home
author_profile: true
pagination:
  enabled: true
---

<section class="firefly-hero">
  <div class="firefly-hero__content">
    <p class="firefly-hero__eyebrow">GREECE · ELECTRONIC INFORMATION ENGINEERING</p>
    <h1>仍在成为。</h1>
    <p class="firefly-hero__quote">把每一次尝试、出错和迭代，留成下一次前进的注脚。</p>
    <div class="firefly-hero__links">
      <a href="/about/">关于我</a>
      <a href="/portfolio/">项目实践</a>
      <a href="https://github.com/Ygreece">GitHub ↗</a>
    </div>
  </div>
  <a class="firefly-hero__scroll" href="#latest">↓ 浏览最新内容</a>
</section>

<section class="firefly-intro" id="latest" aria-labelledby="focus-title">
  <p class="section-kicker">CURRENT FOCUS</p>
  <h2 id="focus-title">记录学习，也记录实践。</h2>
  <p>目前主要探索嵌入式系统、Linux C 开发与机器人电控。这里的文章、项目和代码，会随着学习持续更新。</p>
  <div class="firefly-grid">
    <a class="firefly-card" href="/portfolio/linux-file-server/"><span>LINUX · C</span><strong>多线程文件传输服务器</strong><small>网络编程、线程池与 epoll 的实践</small></a>
    <a class="firefly-card" href="/portfolio/robomaster/"><span>STM32 · CAN</span><strong>RoboMaster 电控</strong><small>控制、通信与真实赛场的联调</small></a>
    <a class="firefly-card" href="/github-projects/"><span>GITHUB</span><strong>开源项目</strong><small>自动同步最近更新的公开项目</small></a>
  </div>
</section>

<section class="firefly-intro firefly-projects" aria-labelledby="projects-title">
  <p class="section-kicker">FROM GITHUB</p>
  <h2 id="projects-title">最近更新的开源项目</h2>
  <div class="firefly-grid">
    {% for project in site.data.github_projects limit: 6 %}
    <a class="firefly-card" href="{{ project.html_url }}">
      <span>{{ project.language | default: "PROJECT" }} · {{ project.updated_at | date: "%Y-%m-%d" }}</span>
      <strong>{{ project.name }}</strong>
      <small>{{ project.description | default: "暂无项目说明。" }}</small>
    </a>
    {% endfor %}
  </div>
  <p class="firefly-more"><a href="/github-projects/">查看全部 GitHub 项目 →</a></p>
</section>
