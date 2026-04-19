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
    <p class="role">Cloud Engineer · Tech Enthusiast</p>
    <p>
      Cloud engineer based in the UK. I write about cloud infrastructure, homelabing,
      and the lessons I've learned from working with Azure at scale in the real world.
    </p>
    <div class="about-social">
      <a href="https://linkedin.com/in/adam-simnett">linkedin</a>
      <a href="https://github.com/adamsimnett">github</a>
      <a href="mailto:asimnett@adamsimnett.com">email</a>
      <a href="/index.xml">rss</a>
    </div>
  </div>
</div>

<!-- BIO -->
<p class="about-section-label">A bit about me</p>
<div class="about-bio">
  <p>
    I'm Adam 👋 I'm a Cloud Engineer with a background in infrastructure and platform engineering. I've spent the last 
    4 years focused on Azure, working on Infrastructure as Code, DevOps, and automating all the things!
  </p>
  <p>
    Outside of work you can find me tinkering with my Homelab, centered around my hyperconverged server which hosts 
    numerous services. Other than that I'll be making patches on my many synthesizers or some other music related escapade 🎹
  </p>
</div>

<!-- WHAT I WRITE ABOUT -->
<p class="about-section-label">What I write about</p>
<div class="about-bio">
  <p>
    Honestly, if its tech related then you'll probably find it here at some point. But there will be strong focus on Azure and 
    Infrastructure as Code, as well as tooling and surrounding technology. There's also going to be content around "Homelabbing"
    and why I still think its incredibly benneficial, even in an ever cloud centric world!
  </p>
</div>

<div class="about-divider"></div>

<!-- CAREER TIMELINE -->
<p class="about-section-label">Career</p>

<div class="about-bio">
  <p>
    As mentioned, I'm a cloud engineer by trade. Day to day I mainly deal with Azure infrastructure, landing zone deployments and 
    ongoing maintenance and improvements of highly secure cloud platforms for both government and private organizations.
  </p>
</div>

<div class="timeline">

  <!-- Role 1 — RIGHT -->
  <div class="tl-item tl-right">
    <div class="tl-dot tl-active"></div>
    <div class="tl-card">
      <div class="tl-meta">
        <span class="tl-location">Remote, UK</span>
        <span class="tl-date">2023 — present</span>
      </div>
      <div class="tl-title">Cloud Engineer <span class="at">at LA NET Ltd</span></div>
      <p class="tl-desc">
        Delivering end-to-end cloud infrastyructure projects for public and private sector clients, with a 
        focus on security and automation. Developing infrastructure as code and DevOps pipelines to deploy and
        maintain these envionmentsm, and growing my skills with Terraform, Bicep and the latest infrasturcutre 
        technologies and developments.
      </p>
      <span class="badge badge-amber">Current Role</span>
      <div class="tags">
        <span class="tag">Bicep</span>
        <span class="tag">Terraform</span>
        <span class="tag">DevOps</span>
        <span class="tag">CI/CD</span>
        <span class="tag">AVM + ALZ</span>
        <span class="tag">Architecture</span>
        <span class="tag">Azure Policy</span>
      </div>
    </div>
  </div>

  <!-- Role 2 — LEFT -->
  <div class="tl-item tl-left">
    <div class="tl-dot"></div>
    <div class="tl-card">
      <div class="tl-meta">
        <span class="tl-location">Remote, UK</span>
        <span class="tl-date">2022 — 2023</span>
      </div>
      <div class="tl-title">Junior Cloud Support Engineer <span class="at">at LA NET Ltd</span></div>
      <p class="tl-desc">
        Working across multiple Azure and Microsoft 365 tenancies to support and develop robust cloud baselines
        for customers. Focusing on technical support and infrastructure deployment, I was able to hone my skills
        on Azure, and develop Infrastructure as Code and automation processes for both internal and external use
      </p>
      <span class="badge badge-blue">First Cloud Role</span>
      <div class="tags">
        <span class="tag">Azure</span>
        <span class="tag">M365</span>
        <span class="tag">Defender for Cloud</span>
        <span class="tag">Azure Monitor</span>
        <span class="tag">ARM Templates</span>
      </div>
    </div>
  </div>

  <!-- Role 3 — RIGHT -->
  <div class="tl-item tl-right">
    <div class="tl-dot"></div>
    <div class="tl-card">
      <div class="tl-meta">
        <span class="tl-location">Wisbech, UK</span>
        <span class="tl-date">2019 — 2022</span>
      </div>
      <div class="tl-title">IT Infrastructure Technician <span class="at">at Tamar-IT Ltd</span></div>
      <p class="tl-desc">
        Infrastructure and systems support and setup within a varied MSP supporting local and national businesses.
        Managed on-prem Windows, ADDS, Hyper-V and Windows Clusters, alongside consumer hardware and software support
      </p>
      <span class="badge badge-green">Where I Started</span>
      <div class="tags">
        <span class="tag">M365</span>
        <span class="tag">ADDS</span>
        <span class="tag">Ubiquiti Unifi</span>
        <span class="tag">PowerShell</span>
        <span class="tag">Windows Server Clusters</span>
        <span class="tag">Networking</span>
      </div>
    </div>
  </div>

</div>