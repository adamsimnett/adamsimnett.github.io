---
title: "About"
layout: "about"
url: "/about/"
summary: "About me"
background: "aurora"
---

<style>
/* ---- About page specific styles ---- */
.about-hero {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 3rem;
  padding-bottom: 2.5rem;
  border-bottom: 1px solid rgba(255,255,255,0.07);
}

.about-hero img {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(217, 119, 6, 0.4);
  box-shadow: 0 0 0 4px rgba(217, 119, 6, 0.08);
  flex-shrink: 0;
}

.about-hero-text h1 {
  font-size: 1.75rem;
  font-weight: 500;
  margin: 0 0 4px;
  letter-spacing: -0.02em;
}

.about-hero-text .role {
  font-size: 14px;
  color: rgba(255,255,255,0.45);
  margin: 0 0 10px;
}

.about-hero-text p {
  font-size: 14px;
  color: rgba(255,255,255,0.55);
  line-height: 1.65;
  margin: 0 0 14px;
  max-width: 520px;
}

.about-social {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.about-social a {
  font-size: 12px;
  font-family: monospace;
  color: rgba(255,255,255,0.45);
  text-decoration: none;
  border: 1px solid rgba(255,255,255,0.1);
  padding: 4px 12px;
  border-radius: 50px;
  transition: all 0.15s;
}

.about-social a:hover {
  color: #f59e0b;
  border-color: rgba(217,119,6,0.4);
}

/* ---- Section label ---- */
.about-section-label {
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.25);
  font-family: monospace;
  margin: 2.5rem 0 1.75rem;
}

/* ---- Alternating timeline ---- */
.timeline {
  position: relative;
  margin-bottom: 1rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 1px;
  background: rgba(255,255,255,0.07);
  transform: translateX(-50%);
}

.tl-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 2rem;
  position: relative;
}

.tl-item.tl-right { flex-direction: row; }
.tl-item.tl-left  { flex-direction: row-reverse; }

.tl-dot {
  position: absolute;
  left: 50%;
  top: 20px;
  transform: translateX(-50%);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #0f0f0f;
  border: 2px solid rgba(255,255,255,0.2);
  z-index: 1;
  transition: border-color 0.15s;
}

.tl-dot.tl-active {
  border-color: #d97706;
  background: rgba(217,119,6,0.2);
  box-shadow: 0 0 0 3px rgba(217,119,6,0.1);
}

.tl-card {
  width: calc(50% - 28px);
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 12px;
  padding: 1.1rem 1.25rem;
  transition: border-color 0.15s;
}

.tl-card:hover {
  border-color: rgba(217,119,6,0.25);
}

.tl-item.tl-right .tl-card { margin-left: auto; }
.tl-item.tl-left  .tl-card { margin-right: auto; }

.tl-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
}

.tl-date, .tl-location {
  font-size: 11px;
  font-family: monospace;
  color: rgba(255,255,255,0.3);
}

.tl-title {
  font-size: 15px;
  font-weight: 500;
  margin: 0 0 4px;
  color: rgba(255,255,255,0.9);
  line-height: 1.3;
}

.tl-title .at {
  color: rgba(255,255,255,0.4);
  font-weight: 400;
}

.tl-desc {
  font-size: 13px;
  color: rgba(255,255,255,0.45);
  line-height: 1.55;
  margin: 0 0 10px;
}

/* ---- Badges ---- */
.badge {
  display: inline-block;
  font-size: 10px;
  font-family: monospace;
  padding: 3px 9px;
  border-radius: 50px;
  margin-bottom: 8px;
  letter-spacing: 0.03em;
}

.badge-amber {
  background: rgba(217,119,6,0.15);
  color: #f59e0b;
  border: 1px solid rgba(217,119,6,0.3);
}

.badge-blue {
  background: rgba(59,130,246,0.1);
  color: #60a5fa;
  border: 1px solid rgba(59,130,246,0.25);
}

.badge-green {
  background: rgba(16,185,129,0.1);
  color: #34d399;
  border: 1px solid rgba(16,185,129,0.25);
}

/* ---- Skill tags ---- */
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 6px;
}

.tag {
  font-size: 11px;
  font-family: monospace;
  color: rgba(255,255,255,0.35);
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  padding: 3px 8px;
  border-radius: 50px;
}

/* ---- Divider ---- */
.about-divider {
  height: 1px;
  background: rgba(255,255,255,0.07);
  margin: 2.5rem 0;
}

/* ---- Bio section ---- */
.about-bio {
  font-size: 15px;
  color: rgba(255,255,255,0.6);
  line-height: 1.75;
  max-width: 680px;
}

.about-bio p { margin-bottom: 1rem; }

/* ---- Responsive ---- */
@media (max-width: 640px) {
  .timeline::before { left: 16px; }
  .tl-item.tl-right,
  .tl-item.tl-left { flex-direction: row; }
  .tl-dot { left: 16px; top: 16px; }
  .tl-card { width: calc(100% - 40px); margin-left: 40px !important; margin-right: 0 !important; }
  .about-hero { flex-direction: column; align-items: flex-start; gap: 1.25rem; }
}
</style>

<!-- HERO -->
<div class="about-hero">
  <img src="/images/headshot.jpg" alt="Your Name" />
  <div class="about-hero-text">
    <h1>Your Name</h1>
    <p class="role">Azure Engineer · Writer · Builder</p>
    <p>
      Senior cloud engineer based in the UK. I write about infrastructure, platform engineering,
      and the real lessons from building and operating systems at scale.
    </p>
    <div class="about-social">
      <a href="https://github.com/yourusername">github</a>
      <a href="https://linkedin.com/in/yourprofile">linkedin</a>
      <a href="mailto:you@yourdomain.com">email</a>
      <a href="/index.xml">rss</a>
    </div>
  </div>
</div>

<!-- BIO -->
<p class="about-section-label">A bit about me</p>
<div class="about-bio">
  <p>
    I'm a Senior Azure Engineer with a background in systems and infrastructure engineering.
    I've spent the last several years helping organisations move to — and operate well in — the cloud,
    with a particular focus on platform engineering, IaC, and making the lives of developers easier.
  </p>
  <p>
    Outside of work I run a homelab on AMD EPYC hardware, contribute to open source where I can,
    and write here about things I wish someone had written down when I was learning them.
  </p>
</div>

<!-- WHAT I WRITE ABOUT -->
<p class="about-section-label">What I write about</p>
<div class="about-bio">
  <p>
    My posts tend to fall into a few buckets: deep dives on Azure infrastructure and tooling,
    thoughts on platform engineering and developer experience, and the occasional post on
    engineering culture and lessons learned the hard way.
  </p>
  <p>
    I try to write the posts I wish had existed when I was figuring things out myself.
    No fluff, no sponsored content — just what I actually think.
  </p>
</div>

<div class="about-divider"></div>

<!-- CAREER TIMELINE -->
<p class="about-section-label">Career</p>

<div class="timeline">

  <!-- Role 1 — RIGHT -->
  <div class="tl-item tl-right">
    <div class="tl-dot tl-active"></div>
    <div class="tl-card">
      <div class="tl-meta">
        <span class="tl-location">London, UK</span>
        <span class="tl-date">2022 — present</span>
      </div>
      <div class="tl-title">Senior Azure Engineer <span class="at">at Your Current Company</span></div>
      <p class="tl-desc">
        Leading cloud infrastructure strategy across a multi-region Azure estate.
        Driving IaC adoption and platform engineering practices across multiple engineering squads.
      </p>
      <span class="badge badge-amber">current role</span>
      <div class="tags">
        <span class="tag">Azure</span>
        <span class="tag">Terraform</span>
        <span class="tag">Kubernetes</span>
        <span class="tag">CI/CD</span>
        <span class="tag">Platform Eng</span>
        <span class="tag">Bicep</span>
      </div>
    </div>
  </div>

  <!-- Role 2 — LEFT -->
  <div class="tl-item tl-left">
    <div class="tl-dot"></div>
    <div class="tl-card">
      <div class="tl-meta">
        <span class="tl-location">Remote</span>
        <span class="tl-date">2019 — 2022</span>
      </div>
      <div class="tl-title">Cloud Engineer <span class="at">at Previous Company</span></div>
      <p class="tl-desc">
        Built and maintained production infrastructure for a SaaS platform.
        First cloud hire — took the company from on-prem to fully cloud native on Azure.
      </p>
      <span class="badge badge-blue">first cloud role</span>
      <div class="tags">
        <span class="tag">Azure</span>
        <span class="tag">Docker</span>
        <span class="tag">Ansible</span>
        <span class="tag">Python</span>
        <span class="tag">ARM Templates</span>
      </div>
    </div>
  </div>

  <!-- Role 3 — RIGHT -->
  <div class="tl-item tl-right">
    <div class="tl-dot"></div>
    <div class="tl-card">
      <div class="tl-meta">
        <span class="tl-location">Manchester, UK</span>
        <span class="tl-date">2016 — 2019</span>
      </div>
      <div class="tl-title">Systems Engineer <span class="at">at Earlier Company</span></div>
      <p class="tl-desc">
        Infrastructure and systems engineering for a mid-size enterprise.
        Managed on-prem estate while beginning the journey into cloud and automation.
      </p>
      <span class="badge badge-green">where it started</span>
      <div class="tags">
        <span class="tag">Linux</span>
        <span class="tag">VMware</span>
        <span class="tag">Networking</span>
        <span class="tag">PowerShell</span>
        <span class="tag">Windows Server</span>
      </div>
    </div>
  </div>

</div>