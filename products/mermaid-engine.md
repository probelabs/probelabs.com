---
layout: page
title: Mermaid Engine - System Visualization
---

<div class="mermaid-page">

<!-- Hero Section -->
<section class="hero">
  <div class="hero-bg">
    <div class="hero-gradient"></div>
    <div class="hero-grid"></div>
  </div>
  <div class="hero-content">
    <div class="hero-badge">
      <span class="badge-dot"></span>
      System Visualization
    </div>
    <h1 class="hero-title">
      <span class="gradient-text">Mermaid Engine</span>
    </h1>
    <p class="hero-tagline">Living documentation that's always accurate.</p>
    <p class="hero-subtitle">Browser-free diagram generation for AI-to-AI communication. Generate perfect diagrams without browser dependencies. 100% deterministic output.</p>
    <div class="hero-cta">
      <a href="/maid/" class="btn btn-primary">
        <span>Try It Now</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3.33 8h9.34M8.67 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </a>
      <a href="/" class="btn btn-secondary">Explore Probe Labs</a>
    </div>
    <div class="hero-stats">
      <div class="stat">
        <span class="stat-value">100%</span>
        <span class="stat-label">Deterministic</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat">
        <span class="stat-value">No</span>
        <span class="stat-label">Browser</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat">
        <span class="stat-value">AI</span>
        <span class="stat-label">Native</span>
      </div>
    </div>
  </div>
</section>

<!-- Pain Section -->
<section class="section section-pain">
  <div class="container">
    <div class="section-header">
      <span class="section-label">The Problem</span>
      <h2>No One Understands How Systems Connect</h2>
    </div>
    <div class="pain-content">
      <p>Documentation is always outdated. Architecture diagrams were accurate six months ago. The only people who know how things really work are too busy to explain. And AI-generated diagrams fail because they need browser runtimes that don't exist in your CI pipeline.</p>
    </div>
  </div>
</section>

<!-- Solution Section -->
<section class="section section-solution">
  <div class="container">
    <div class="section-header">
      <span class="section-label">The Solution</span>
      <h2>Diagrams That Generate Anywhere</h2>
    </div>
    <div class="solution-grid">
      <div class="solution-card">
        <div class="card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
            <line x1="8" y1="21" x2="16" y2="21"/>
            <line x1="12" y1="17" x2="12" y2="21"/>
          </svg>
        </div>
        <h3>No Browser Required</h3>
        <p>Pure engine that generates diagrams without Puppeteer, Chrome, or any browser runtime. Works in CI/CD pipelines, serverless functions, and air-gapped environments.</p>
      </div>
      <div class="solution-card">
        <div class="card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
            <polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
        </div>
        <h3>100% Deterministic</h3>
        <p>Same input always produces the same output. Perfect for AI workflows where consistency matters. No rendering variations, no font issues.</p>
      </div>
      <div class="solution-card">
        <div class="card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <polygon points="12 2 2 7 12 12 22 7 12 2"/>
            <polyline points="2 17 12 22 22 17"/>
            <polyline points="2 12 12 17 22 12"/>
          </svg>
        </div>
        <h3>AI-Native Design</h3>
        <p>Built for AI-to-AI communication. Generate diagrams from code analysis, architecture descriptions, or workflow definitions programmatically.</p>
      </div>
      <div class="solution-card">
        <div class="card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
            <line x1="16" y1="13" x2="8" y2="13"/>
            <line x1="16" y1="17" x2="8" y2="17"/>
          </svg>
        </div>
        <h3>Multiple Formats</h3>
        <p>Output to SVG, PNG, or PDF. Embed in documentation, Slack messages, or CI reports. Quality output for every use case.</p>
      </div>
    </div>
  </div>
</section>

<!-- Demo Section -->
<section class="section section-demo">
  <div class="container">
    <div class="section-header">
      <span class="section-label">Live Demo</span>
      <h2>See It In Action</h2>
    </div>
    <div class="demo-card">
      <div class="demo-preview">
        <div class="demo-code">
          <div class="code-header">
            <span class="code-dot"></span>
            <span class="code-dot"></span>
            <span class="code-dot"></span>
            <span class="code-title">mermaid</span>
          </div>
          <pre><code>graph TD
    A[User Request] --> B{Auth Check}
    B -->|Valid| C[Process Request]
    B -->|Invalid| D[Return 401]
    C --> E[Send Response]</code></pre>
        </div>
        <div class="demo-arrow">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </div>
        <div class="demo-output">
          <div class="output-placeholder">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <path d="M9 9h6M9 13h4M9 17h6"/>
            </svg>
            <span>Diagram Output</span>
          </div>
        </div>
      </div>
      <a href="/maid/" class="btn btn-primary btn-lg demo-btn">
        <span>Open Mermaid Engine</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3.33 8h9.34M8.67 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </a>
    </div>
  </div>
</section>

<!-- Features Section -->
<section class="section section-features">
  <div class="container">
    <div class="section-header">
      <span class="section-label">Capabilities</span>
      <h2>Diagram Types</h2>
    </div>
    <div class="features-grid">
      <div class="feature-card">
        <h3>Flowcharts</h3>
        <p>Process flows, decision trees, and user journeys.</p>
      </div>
      <div class="feature-card">
        <h3>Sequence Diagrams</h3>
        <p>API interactions and system communication.</p>
      </div>
      <div class="feature-card">
        <h3>Class Diagrams</h3>
        <p>Object models and inheritance hierarchies.</p>
      </div>
      <div class="feature-card">
        <h3>State Diagrams</h3>
        <p>State machines and lifecycle flows.</p>
      </div>
      <div class="feature-card">
        <h3>Entity Relations</h3>
        <p>Database schemas and data models.</p>
      </div>
      <div class="feature-card">
        <h3>Gantt Charts</h3>
        <p>Project timelines and schedules.</p>
      </div>
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="section section-cta">
  <div class="container">
    <div class="cta-card">
      <h2>Visualize Your Systems</h2>
      <p>Generate accurate, consistent diagrams for your architecture documentation.</p>
      <div class="cta-buttons">
        <a href="/maid/" class="btn btn-primary btn-lg">
          <span>Try Mermaid Engine</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3.33 8h9.34M8.67 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
        <a href="https://cal.com/leonid-bugaev/30min" class="btn btn-secondary">Book a Demo</a>
        <a href="/" class="btn btn-ghost">Explore Probe Labs</a>
      </div>
    </div>
  </div>
</section>

</div>

<style>
/* ========================================
   Design System - Matching Homepage
   ======================================== */

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

.mermaid-page {
  /* Colors */
  --c-bg: transparent;
  --c-bg-subtle: #eeece6;
  --c-bg-muted: #e8e5df;
  --c-border: rgba(0,0,0,0.12);
  --c-border-hover: rgba(0,0,0,0.2);
  --c-text: #111111;
  --c-text-muted: #666666;
  --c-text-subtle: #999999;
  --c-primary: #111111;
  --c-primary-light: #333333;
  --c-primary-bg: #eeece6;
  --c-primary-border: rgba(0,0,0,0.12);
  --c-accent: #06b6d4;
  --c-green: #22c55e;

  /* Gradients */
  --g-primary: linear-gradient(135deg, #111 0%, #444 100%);

  /* Typography */
  --font-display: 'Space Mono', monospace;
  --font-body: 'IBM Plex Mono', monospace;
  --font-mono: 'IBM Plex Mono', monospace;

  /* Spacing */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  --space-2xl: 3rem;
  --space-3xl: 4rem;
  --space-4xl: 6rem;

  /* Radius */
  --radius-sm: 2px;
  --radius-md: 2px;
  --radius-lg: 2px;
  --radius-xl: 2px;

  /* Shadows */
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.3);
  --shadow-md: 0 8px 30px rgba(0, 0, 0, 0.4);
  --shadow-glow: none;

  /* Base */
  font-family: 'IBM Plex Mono', monospace;
  background: transparent;
  color: var(--c-text);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

.mermaid-page .container { max-width: 1200px; margin: 0 auto; padding: 0 var(--space-xl); }

/* Hero */
.mermaid-page .hero {
  position: relative;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: var(--space-4xl) var(--space-xl);
  overflow: hidden;
}

.mermaid-page .hero-bg { position: absolute; inset: 0; }

.mermaid-page .hero-gradient {
  position: absolute;
  top: -50%;
  left: 50%;
  transform: translateX(-50%);
  width: 150%;
  height: 100%;
  background: transparent;
}

.mermaid-page .hero-grid {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse at center, black 20%, transparent 70%);
}

.mermaid-page .hero-content { position: relative; max-width: 800px; z-index: 1; }

.mermaid-page .hero-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--c-text-muted);
  background: transparent;
  border: 1px solid var(--c-border);
  padding: var(--space-sm) var(--space-md);
  border-radius: 2px;
  margin-bottom: var(--space-xl);
}

.mermaid-page .badge-dot {
  width: 6px;
  height: 6px;
  background: #111111;
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }

.mermaid-page .hero-title {
  font-size: clamp(2.25rem, 4.5vw, 3.75rem);
  font-weight: 700;
  line-height: 1;
  margin: 0 0 var(--space-lg);
}

.mermaid-page .gradient-text {
  background: none;
  -webkit-background-clip: unset;
  -webkit-text-fill-color: #111111;
  background-clip: unset;
}

.mermaid-page .hero-tagline {
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0 0 var(--space-md);
  color: var(--c-text);
}

.mermaid-page .hero-subtitle {
  font-size: 1.125rem;
  color: var(--c-text-muted);
  max-width: 600px;
  margin: 0 auto var(--space-2xl);
}

.mermaid-page .hero-cta { display: flex; gap: var(--space-md); justify-content: center; flex-wrap: wrap; margin-bottom: var(--space-3xl); }

.mermaid-page .hero-stats { display: flex; align-items: center; justify-content: center; gap: var(--space-2xl); }
.mermaid-page .stat { text-align: center; }
.mermaid-page .stat-value { display: block; font-size: 1.5rem; font-weight: 700; color: var(--c-text); }
.mermaid-page .stat-label { font-size: 0.8125rem; color: var(--c-text-subtle); }
.mermaid-page .stat-divider { width: 1px; height: 40px; background: var(--c-border); }

/* Buttons */
.mermaid-page .btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-sm);
  padding: 0.875rem 1.5rem;
  font-family: var(--font);
  font-size: 0.9375rem;
  font-weight: 500;
  border-radius: var(--radius-md);
  text-decoration: none;
  transition: all 0.2s ease;
  border: none;
}

.mermaid-page .btn-primary {
  color: #fff;
  background: #111111;
  box-shadow: none;
}

.mermaid-page .btn-primary:hover {
  background: #333333;
  box-shadow: none;
  transform: none;
}

.mermaid-page .btn-secondary {
  color: var(--c-text);
  background: var(--c-bg-muted);
  border: 1px solid var(--c-border);
}

.mermaid-page .btn-secondary:hover { background: var(--c-bg-subtle); border-color: var(--c-border-hover); }
.mermaid-page .btn-lg { padding: 1rem 2rem; font-size: 1rem; }

/* Sections */
.mermaid-page .section { padding: var(--space-4xl) 0; }

.mermaid-page .section-header { text-align: center; margin-bottom: var(--space-3xl); }

.mermaid-page .section-label {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #333333;
  margin-bottom: var(--space-md);
}

.mermaid-page .section-header h2 {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: 0;
  color: var(--c-text);
}

/* Pain Section */
.mermaid-page .section-pain { background: transparent; }
.mermaid-page .pain-content { max-width: 700px; margin: 0 auto; text-align: center; }
.mermaid-page .pain-content p { font-size: 1.125rem; color: var(--c-text-muted); line-height: 1.7; margin: 0; }

/* Solution Cards */
.mermaid-page .section-solution { background: transparent; }
.mermaid-page .solution-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--space-lg); }

.mermaid-page .solution-card {
  padding: var(--space-xl);
  background: var(--c-bg-subtle);
  border: 1px solid var(--c-border);
  border-radius: var(--radius-lg);
  transition: all 0.3s ease;
}

.mermaid-page .solution-card:hover { border-color: var(--c-border-hover); transform: translateY(-2px); }

.mermaid-page .card-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 1px solid rgba(0,0,0,0.12);
  border-radius: var(--radius-md);
  margin-bottom: var(--space-lg);
}

.mermaid-page .card-icon svg { width: 24px; height: 24px; color: #333333; }
.mermaid-page .solution-card h3 { font-size: 1.125rem; font-weight: 600; margin: 0 0 var(--space-sm); color: var(--c-text); }
.mermaid-page .solution-card p { font-size: 0.9375rem; color: var(--c-text-muted); margin: 0; line-height: 1.6; }

/* Demo Section */
.mermaid-page .section-demo { background: transparent; }

.mermaid-page .demo-card {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.mermaid-page .demo-preview {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: var(--space-lg);
  align-items: center;
  margin-bottom: var(--space-2xl);
}

.mermaid-page .demo-code {
  background: #0f172a;
  border: 1px solid var(--c-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  text-align: left;
}

.mermaid-page .code-header {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-md) var(--space-lg);
  background: #1e293b;
}

.mermaid-page .code-dot { width: 10px; height: 10px; border-radius: 50%; background: #334155; }
.mermaid-page .code-dot:nth-child(1) { background: #ef4444; }
.mermaid-page .code-dot:nth-child(2) { background: #eab308; }
.mermaid-page .code-dot:nth-child(3) { background: #22c55e; }

.mermaid-page .code-title { margin-left: auto; font-size: 0.75rem; color: #64748b; }

.mermaid-page .demo-code pre { margin: 0; padding: var(--space-lg); overflow-x: auto; }
.mermaid-page .demo-code code { color: var(--c-green); font-family: var(--font-mono); font-size: 0.875rem; white-space: pre; }

.mermaid-page .demo-arrow { color: var(--c-text-subtle); }
.mermaid-page .demo-arrow svg { width: 32px; height: 32px; }

.mermaid-page .demo-output {
  background: transparent;
  border: 1px solid var(--c-border);
  border-radius: var(--radius-lg);
  padding: var(--space-3xl);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-md);
}

.mermaid-page .output-placeholder { display: flex; flex-direction: column; align-items: center; gap: var(--space-sm); color: var(--c-text-muted); }
.mermaid-page .output-placeholder svg { width: 48px; height: 48px; }
.mermaid-page .output-placeholder span { font-size: 0.875rem; }

.mermaid-page .demo-btn { display: inline-flex; }

/* Features Section */
.mermaid-page .section-features { background: transparent; }
.mermaid-page .features-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-lg); }

.mermaid-page .feature-card {
  padding: var(--space-lg);
  background: var(--c-bg-subtle);
  border: 1px solid var(--c-border);
  border-radius: var(--radius-lg);
  transition: all 0.3s ease;
}

.mermaid-page .feature-card:hover { border-color: var(--c-border-hover); }
.mermaid-page .feature-card h3 { font-size: 1rem; font-weight: 600; margin: 0 0 var(--space-sm); color: var(--c-text); }
.mermaid-page .feature-card p { font-size: 0.875rem; color: var(--c-text-muted); margin: 0; }

/* CTA Section */
.mermaid-page .section-cta { background: transparent; padding: var(--space-4xl) 0; }

.mermaid-page .cta-card {
  text-align: center;
  padding: var(--space-3xl);
  background: transparent;
  border: 1px solid rgba(0,0,0,0.12);
  border-radius: var(--radius-xl);
}

.mermaid-page .cta-card h2 { font-size: 2rem; font-weight: 700; margin: 0 0 var(--space-md); }
.mermaid-page .cta-card > p { font-size: 1.125rem; color: var(--c-text-muted); margin: 0 0 var(--space-xl); }
.mermaid-page .cta-buttons { display: flex; gap: var(--space-md); justify-content: center; flex-wrap: wrap; }

/* Responsive */
@media (max-width: 1024px) {
  .mermaid-page .features-grid { grid-template-columns: repeat(2, 1fr); }
  .mermaid-page .demo-preview { grid-template-columns: 1fr; gap: var(--space-md); }
  .mermaid-page .demo-arrow { transform: rotate(90deg); }
}

@media (max-width: 768px) {
  .mermaid-page .hero { min-height: auto; padding: var(--space-3xl) var(--space-md); }
  .mermaid-page .hero-title { font-size: 2.25rem; }
  .mermaid-page .hero-stats { flex-direction: column; gap: var(--space-lg); }
  .mermaid-page .stat-divider { display: none; }
  .mermaid-page .solution-grid, .mermaid-page .features-grid { grid-template-columns: 1fr; }
  .mermaid-page .section { padding: var(--space-3xl) 0; }
  .mermaid-page .container { padding: 0 var(--space-md); }
  .mermaid-page .cta-card { padding: var(--space-xl); }
}

/* Light Mode */
html:not(.dark) .mermaid-page {
  --c-bg: transparent;
  --c-bg-subtle: #eeece6;
  --c-bg-muted: #e8e5df;
  --c-border: rgba(0, 0, 0, 0.12);
  --c-border-hover: rgba(0, 0, 0, 0.2);
  --c-text: #111111;
  --c-text-muted: #666666;
  --c-text-subtle: #999999;
}

html:not(.dark) .mermaid-page .hero-gradient { background: transparent; }
html:not(.dark) .mermaid-page .hero-grid { background-image: linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px); }
html:not(.dark) .mermaid-page .btn-primary { box-shadow: none; }
html:not(.dark) .mermaid-page .card-icon { background: transparent; border-color: rgba(0,0,0,0.12); }
html:not(.dark) .mermaid-page .cta-card { background: transparent; border-color: rgba(0,0,0,0.12); }
html:not(.dark) .mermaid-page .demo-output { background: transparent; }
</style>
