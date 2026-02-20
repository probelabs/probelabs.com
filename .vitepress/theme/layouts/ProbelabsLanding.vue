<template>
  <div class="probelabs-landing">
    <!-- Navigation -->
    <nav class="nav" :class="{ scrolled: isScrolled }">
      <div class="nav-container">
        <div class="nav-brand">
          <div class="nav-logo">
            <img src="/probe/logo.png" alt="Probe" class="nav-logo-img">
          </div>
          <span class="nav-title">ProbeLabs</span>
        </div>
        <div class="nav-links">
          <!-- Products Dropdown -->
          <div class="nav-dropdown" @mouseenter="setDropdown('products')" @mouseleave="setDropdown(null)">
            <button class="nav-link nav-dropdown-trigger" :class="{ 'is-open': openDropdown === 'products' }" @click.stop="toggleDropdown('products')">
              Products
              <svg class="nav-dropdown-arrow" width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 4l3 3 3-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
            <div class="nav-mega-menu" v-show="openDropdown === 'products'" @click.stop>
              <div class="mega-menu-content">
                <div class="mega-menu-section">
                  <div class="mega-menu-label">Core Products</div>
                  <div class="mega-menu-grid">
                    <a href="/probe" class="mega-menu-card">
                      <div class="mega-card-icon mega-card-icon--probe">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
                      </div>
                      <div class="mega-card-content">
                        <div class="mega-card-title">Probe</div>
                        <div class="mega-card-desc">AI-native code search across enterprise codebases</div>
                      </div>
                    </a>
                    <a href="/visor" class="mega-menu-card">
                      <div class="mega-card-icon mega-card-icon--visor">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                      </div>
                      <div class="mega-card-content">
                        <div class="mega-card-title">Visor</div>
                        <div class="mega-card-desc">Deterministic workflow engine for agent automation</div>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="mega-menu-divider"></div>
                <div class="mega-menu-section">
                  <div class="mega-menu-label">Labs</div>
                  <div class="mega-menu-grid">
                    <a href="/maid" class="mega-menu-card">
                      <div class="mega-card-icon mega-card-icon--mermaid">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
                      </div>
                    <div class="mega-card-content">
                      <div class="mega-card-title">Maid</div>
                      <div class="mega-card-desc">Fast Mermaid linter with auto-fix</div>
                    </div>
                  </a>
                  <a href="https://goreplay.org" class="mega-menu-card">
                    <div class="mega-card-icon mega-card-icon--goreplay">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <polyline points="4 4 4 10 10 10"/>
                        <path d="M20 12a8 8 0 0 0-14-5"/>
                        <path d="M4 12a8 8 0 0 0 14 5"/>
                      </svg>
                    </div>
                    <div class="mega-card-content">
                      <div class="mega-card-title">GoReplay</div>
                      <div class="mega-card-desc">Open-source traffic replay for testing</div>
                    </div>
                  </a>
                  <a href="/big-brain" class="mega-menu-card">
                    <div class="mega-card-icon mega-card-icon--bigbrain">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2a9 9 0 0 1 9 9c0 3.1-1.5 5.7-4 7.4V20a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-1.6C4.5 16.7 3 14.1 3 11a9 9 0 0 1 9-9z"/><path d="M9 22v-4M15 22v-4M12 2v6"/></svg>
                    </div>
                      <div class="mega-card-content">
                        <div class="mega-card-title">Big Brain</div>
                        <div class="mega-card-desc">Hand off stuck problems to smarter models</div>
                      </div>
                    </a>
                    <a href="/afk" class="mega-menu-card">
                      <div class="mega-card-icon mega-card-icon--afk">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                      </div>
                      <div class="mega-card-content">
                        <div class="mega-card-title">AFK</div>
                        <div class="mega-card-desc">Control Claude Code from your phone</div>
                      </div>
                    </a>
                    <a href="/vow" class="mega-menu-card">
                      <div class="mega-card-icon mega-card-icon--vow">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                      </div>
                      <div class="mega-card-content">
                        <div class="mega-card-title">Vow</div>
                        <div class="mega-card-desc">AI accountability gates for commits</div>
                      </div>
                    </a>
                    <a href="/memaris" class="mega-menu-card">
                      <div class="mega-card-icon mega-card-icon--memaris">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
                      </div>
                      <div class="mega-card-content">
                        <div class="mega-card-title">Memaris</div>
                        <div class="mega-card-desc">Persistent memory from past AI sessions</div>
                      </div>
                    </a>
                    <a href="/logoscope" class="mega-menu-card">
                      <div class="mega-card-icon mega-card-icon--logoscope">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>
                      </div>
                      <div class="mega-card-content">
                        <div class="mega-card-title">Logoscope</div>
                        <div class="mega-card-desc">AI-powered log analysis and insights</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Solutions Dropdown -->
          <div class="nav-dropdown" @mouseenter="setDropdown('solutions')" @mouseleave="setDropdown(null)">
            <button class="nav-link nav-dropdown-trigger" :class="{ 'is-open': openDropdown === 'solutions' }" @click.stop="toggleDropdown('solutions')">
              Solutions
              <svg class="nav-dropdown-arrow" width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 4l3 3 3-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
            <div class="nav-mega-menu nav-mega-menu--wide" v-show="openDropdown === 'solutions'" @click.stop>
              <div class="mega-menu-content">
                <div class="mega-menu-columns">
                  <div class="mega-menu-section">
                    <div class="mega-menu-label">By Role</div>
                    <div class="mega-menu-grid mega-menu-grid--1col">
                      <a href="/solutions/engineering-leadership" class="mega-menu-card">
                        <div class="mega-card-icon mega-card-icon--leadership">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                        </div>
                        <div class="mega-card-content">
                          <div class="mega-card-title">Engineering Leadership</div>
                          <div class="mega-card-desc">Org-wide automation with predictability</div>
                        </div>
                      </a>
                      <a href="/solutions/platform-teams" class="mega-menu-card">
                        <div class="mega-card-icon mega-card-icon--platform">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect width="8" height="8" x="3" y="3" rx="2"/><path d="M7 11v4a2 2 0 0 0 2 2h4"/><rect width="8" height="8" x="13" y="13" rx="2"/></svg>
                        </div>
                        <div class="mega-card-content">
                          <div class="mega-card-title">Platform Teams</div>
                          <div class="mega-card-desc">Build once, run everywhere</div>
                        </div>
                      </a>
                      <a href="/solutions/engineers" class="mega-menu-card">
                        <div class="mega-card-icon mega-card-icon--engineers">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                        </div>
                        <div class="mega-card-content">
                          <div class="mega-card-title">Engineers</div>
                          <div class="mega-card-desc">Full context, any codebase</div>
                        </div>
                      </a>
                      <a href="/solutions/non-technical" class="mega-menu-card">
                        <div class="mega-card-icon mega-card-icon--support">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
                        </div>
                        <div class="mega-card-content">
                          <div class="mega-card-title">Product & Support</div>
                          <div class="mega-card-desc">Engineering-grade context without the bottleneck</div>
                        </div>
                      </a>
                      <a href="/solutions/agencies" class="mega-menu-card">
                        <div class="mega-card-icon mega-card-icon--agencies">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                        </div>
                        <div class="mega-card-content">
                          <div class="mega-card-title">Agencies</div>
                          <div class="mega-card-desc">Repeatable delivery on client codebases</div>
                        </div>
                      </a>
                      <a href="/solutions/enterprise" class="mega-menu-card">
                        <div class="mega-card-icon mega-card-icon--enterprise">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                        </div>
                        <div class="mega-card-content">
                          <div class="mega-card-title">Enterprise</div>
                          <div class="mega-card-desc">Transform legacy codebases at scale</div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="mega-menu-divider-vertical"></div>
                  <div class="mega-menu-section">
                    <div class="mega-menu-label">By Solution</div>
                    <div class="mega-menu-grid mega-menu-grid--1col">
                      <a href="/docs/chat-with-code" class="mega-menu-card">
                        <div class="mega-card-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                        </div>
                        <div class="mega-card-content">
                          <div class="mega-card-title">Chat with Code</div>
                          <div class="mega-card-desc">Grounded answers from your codebase</div>
                        </div>
                      </a>
                      <a href="/docs/code-review" class="mega-menu-card">
                        <div class="mega-card-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="20 6 9 17 4 12"/></svg>
                        </div>
                        <div class="mega-card-content">
                          <div class="mega-card-title">Intelligent Code Review</div>
                          <div class="mega-card-desc">Structured reviews with guardrails</div>
                        </div>
                      </a>
                      <a href="/docs/github-assistant" class="mega-menu-card">
                        <div class="mega-card-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M16 18a4 4 0 0 1-8 0v-1a4 4 0 0 1 8 0v1z"/><circle cx="12" cy="7" r="4"/></svg>
                        </div>
                        <div class="mega-card-content">
                          <div class="mega-card-title">GitHub Assistant</div>
                          <div class="mega-card-desc">Issue and PR automation in GitHub</div>
                        </div>
                      </a>
                      <a href="/docs/use-cases/visor-workflows" class="mega-menu-card">
                        <div class="mega-card-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
                        </div>
                        <div class="mega-card-content">
                          <div class="mega-card-title">Engineering Process Automation</div>
                          <div class="mega-card-desc">Visor workflows for real processes</div>
                        </div>
                      </a>
                      <a href="/docs/use-cases/building-ai-tools" class="mega-menu-card">
                        <div class="mega-card-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>
                        </div>
                        <div class="mega-card-content">
                          <div class="mega-card-title">Developers &amp; SDK</div>
                          <div class="mega-card-desc">Build custom tooling on Probe</div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a href="/pricing" class="nav-link">Pricing</a>
          <a href="/docs" class="nav-link">Docs</a>
        </div>
        <div class="nav-actions">
          <a href="https://github.com/probelabs" target="_blank" rel="noopener noreferrer" class="nav-github" aria-label="GitHub">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
              <path d="M9 18c-4.51 2-5-2-7-2"/>
            </svg>
          </a>
          <button class="nav-btn-mobile" @click="toggleMobileMenu" aria-label="Menu">
            <svg v-if="!isMobileMenuOpen" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>
            </svg>
            <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
            </svg>
          </button>
          <a href="/quick-start" class="nav-btn">Get Started</a>
        </div>
      </div>
      <!-- Mobile Menu -->
      <div v-if="isMobileMenuOpen" class="mobile-menu">
        <!-- Core Products Section -->
        <div class="mobile-section">
          <div class="mobile-section-label">Core Products</div>
          <a href="/probe" class="mobile-sublink">Probe</a>
          <a href="/visor" class="mobile-sublink">Visor</a>
        </div>
        <!-- Labs Section -->
        <div class="mobile-section">
          <div class="mobile-section-label">Labs</div>
          <a href="/maid" class="mobile-sublink">Maid</a>
          <a href="https://goreplay.org" class="mobile-sublink">GoReplay</a>
          <a href="/big-brain" class="mobile-sublink">Big Brain</a>
          <a href="/afk" class="mobile-sublink">AFK</a>
          <a href="/vow" class="mobile-sublink">Vow</a>
          <a href="/memaris" class="mobile-sublink">Memaris</a>
          <a href="/logoscope" class="mobile-sublink">Logoscope</a>
        </div>
        <!-- Solutions Section -->
        <div class="mobile-section">
          <div class="mobile-section-label">Solutions</div>
          <a href="/solutions/engineering-leadership" class="mobile-sublink">Engineering Leadership</a>
          <a href="/solutions/platform-teams" class="mobile-sublink">Platform Teams</a>
          <a href="/solutions/engineers" class="mobile-sublink">Engineers</a>
          <a href="/solutions/non-technical" class="mobile-sublink">Product & Support</a>
          <a href="/solutions/agencies" class="mobile-sublink">Agencies</a>
          <a href="/solutions/enterprise" class="mobile-sublink">Enterprise</a>
        </div>
        <div class="mobile-section">
          <div class="mobile-section-label">Solutions (By Use Case)</div>
          <a href="/docs/chat-with-code" class="mobile-sublink">Chat with Code</a>
          <a href="/docs/code-review" class="mobile-sublink">Intelligent Code Review</a>
          <a href="/docs/github-assistant" class="mobile-sublink">GitHub Assistant</a>
          <a href="/docs/use-cases/visor-workflows" class="mobile-sublink">Engineering Process Automation</a>
          <a href="/docs/use-cases/building-ai-tools" class="mobile-sublink">Developers &amp; SDK</a>
        </div>
        <a href="/pricing" class="mobile-link">Pricing</a>
        <a href="/docs" class="mobile-link">Docs</a>
        <a href="https://github.com/probelabs" class="mobile-link">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline;vertical-align:middle;margin-right:0.5rem;">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
            <path d="M9 18c-4.51 2-5-2-7-2"/>
          </svg>
          GitHub
        </a>
        <a href="/quick-start" class="mobile-cta">Get Started</a>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-bg">
        <div class="hero-gradient"></div>
        <div class="hero-grid"></div>
      </div>

      <div class="hero-container hero-container--stacked">
        <h1 class="hero-title hero-title--fullwidth">
          <span class="hero-title-brand">Code intelligence + workflow automation</span>
        </h1>

        <div class="hero-columns">
          <div class="hero-content">
            <h2 class="hero-subtitle">For product and engineering teams</h2>

            <div class="hero-text">
              <p>Built for multi-million line codebases and complex architectures. AI that actually understands your code — powering search, reviews, and automation across your entire stack.</p>
              <p>PMs and support get answers without interrupting engineers. Reviews run automatically. Processes that used to take days happen in minutes.</p>
            </div>

            <div class="hero-cta">
              <a href="https://cal.com/leonid-bugaev/30min" class="btn btn-blue">
                Book a Demo
                <span class="btn-arrow">→</span>
              </a>
              <a href="#quickwins" class="btn btn-outline">Get started in 10 minutes</a>
            </div>
            <p class="hero-micro">The bottleneck isn't writing code anymore — it's understanding it.</p>
          </div>

          <div class="hero-visual hero-visual--checklist">
            <div class="hero-checklist">
              <a href="/docs/chat-with-code" class="hero-check-item">
                <span class="hero-check-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </span>
                <div class="hero-check-content">
                  <strong>Chat with code</strong>
                  <span>Multi-repo search across millions of lines</span>
                </div>
                <span class="hero-check-arrow">→</span>
              </a>
              <a href="/docs/code-review" class="hero-check-item">
                <span class="hero-check-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </span>
                <div class="hero-check-content">
                  <strong>Intelligent code reviews</strong>
                  <span>Configurable, scalable, context-aware</span>
                </div>
                <span class="hero-check-arrow">→</span>
              </a>
              <a href="/docs/use-cases/visor-workflows" class="hero-check-item">
                <span class="hero-check-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </span>
                <div class="hero-check-content">
                  <strong>Workflow automation</strong>
                  <span>Visor workflows for review, triage, and release pipelines</span>
                </div>
                <span class="hero-check-arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- The Problem Section -->
    <section class="section section-problem">
      <div class="container">
        <!-- Header -->
        <header class="problem-header">
          <h2>Most AI tools don't understand your codebase — they skim it</h2>
          <p class="problem-subhead">
            In small repos, "search a few strings and read a snippet" often works. In enterprise codebases it creates a predictable failure: tools claim understanding too early—and the plan, review, or fix is built on partial context.
          </p>
        </header>

        <!-- Two-Column Comparison -->
        <div class="problem-grid">
          <!-- Left: What most tools do -->
          <div class="problem-card problem-card--bad">
            <div class="problem-card__label">What most tools do <span class="problem-card__label-note">(including Claude Code)</span></div>
            <ul class="problem-card__list">
              <li>Run a few keyword searches over code "as text"</li>
              <li>Grab ~10–30 lines around matches</li>
              <li>Assume the result is enough context</li>
              <li>Proceed confidently ("I understand") even when it's not true</li>
            </ul>
            <div class="problem-card__callout">
              This is a fine strategy for small projects. It's a liability in large ones.
            </div>
          </div>

          <!-- Right: Why it breaks -->
          <div class="problem-card problem-card--why">
            <div class="problem-card__label">Why it breaks at scale</div>
            <ul class="problem-card__list">
              <li>Code isn't plain text — it's symbols, scopes, call paths, and boundaries</li>
              <li>Understanding often requires the big picture (ownership boundaries, cross-repo dependencies)</li>
              <li>Docs aren't plain text either — Markdown has structure (headers, sections, contracts)</li>
              <li>The worst outcome isn't "no answer" — it's a wrong plan with high confidence</li>
            </ul>
            <div class="problem-card__punch">
              If retrieval is shallow, everything downstream becomes guesswork: specs, reviews, triage, and automation.
            </div>
          </div>
        </div>

        <!-- Bottom: Probe - the solution -->
        <div class="problem-solution">
          <h3 class="problem-solution__title">Probe treats your code like a database</h3>
          <p class="problem-solution__intro">
            Instead of searching text, Probe queries your codebase the way you'd query a database — with structure, precision, and speed.
          </p>

          <div class="probe-features">
            <div class="probe-feature">
              <div class="probe-feature__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              </div>
              <div class="probe-feature__content">
                <h4>ElasticSearch-style queries</h4>
                <p>Full query syntax with boolean operators, phrase matching, and field-specific search. Works out of the box; optional indexing for larger repos.</p>
              </div>
            </div>

            <div class="probe-feature">
              <div class="probe-feature__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48 2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48 2.83-2.83"/></svg>
              </div>
              <div class="probe-feature__content">
                <h4>AST-aware parsing</h4>
                <p>Probe understands code structure — functions, classes, scopes, call paths. It returns the smallest useful slice with clear boundaries, not arbitrary line ranges.</p>
              </div>
            </div>

            <div class="probe-feature">
              <div class="probe-feature__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="m10 13-2 2 2 2"/><path d="m14 17 2-2-2-2"/></svg>
              </div>
              <div class="probe-feature__content">
                <h4>LSP + dependency awareness</h4>
                <p>Works with language servers for go-to-definition and references. Reads go.mod, package.json, Cargo.toml — understands what your project actually depends on.</p>
              </div>
            </div>

            <div class="probe-feature">
              <div class="probe-feature__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              </div>
              <div class="probe-feature__content">
                <h4>Fast, local, private</h4>
                <p>Built in Rust with SIMD optimizations — fast enough to search million-line repos locally. Runs entirely on your machine as a single binary. Retrieval runs locally; you control what context is sent to the model.</p>
              </div>
            </div>
          </div>

          <div class="problem-solution__cta">
            <a href="/probe" class="btn btn-blue">See how Probe works <span class="btn-arrow">→</span></a>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="section section-testimonials">
      <div class="container">
        <header class="testimonials-header">
          <span class="section-badge">Customer feedback</span>
          <h2>What teams say after shipping with Probe</h2>
          <p>From product and support to engineering leadership, Probe turns codebases into shared, reliable knowledge.</p>
        </header>

        <div class="testimonials-grid">
          <article class="testimonial-card">
            <div class="testimonial-body">
              <p class="testimonial-quote">
                As a Product Manager, Probe helps me to understand the true behaviour of the software so that I can go beyond the documentation and validate edge case scenarios and answer "what if?" questions as I develop the product roadmap and define new capabilities. This saves a lot of time and disruption to the development teams, as I can provide more fully formed and reasonable proposals to them without having to ask them to check my understanding of the code every five minutes.
              </p>
            </div>
            <div class="testimonial-author">
              <div class="testimonial-author__name">Andy Ost</div>
              <div class="testimonial-author__role">Senior Product Manager at Tyk.io</div>
            </div>
          </article>

          <article class="testimonial-card">
            <div class="testimonial-body">
              <p class="testimonial-quote">
                I'm using Probe Labs tools daily as a technical lead, and they've been adopted across marketing, sales, documentation, product, delivery, and engineering. Probe is useful in every part of the SDLC, and it helps us understand complex features across multi-project dependency chains quickly and efficiently. The YAML-based automation makes it easy to wire in tools like JIRA, Zendesk, and GitHub for agentic flows that actually work from day one.
              </p>
            </div>
            <div class="testimonial-author">
              <div class="testimonial-author__name">Laurentiu Ghiur</div>
              <div class="testimonial-author__role">Technical Lead at Tyk.io</div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Demo Booking Section -->
    <section class="section section-demo-booking">
      <div class="container">
        <div class="demo-booking-grid">
          <!-- Left: Value prop + What to expect -->
          <div class="demo-booking-left">
            <h2 class="demo-booking-title">Technical Knowledge for Everyone<br>Humans and Agents.</h2>
            <p class="demo-booking-intro">In 30 minutes, we'll show you exactly how Probe empowers your entire organization to get answers without waiting for engineering.</p>

            <h3 class="demo-booking-expect-title">Here's what to expect:</h3>
            <ol class="demo-booking-list">
              <li>
                <strong>Deep Code Understanding</strong>
                <span>See how Probe searches and understands your entire codebase — millions of lines, multiple repos, complex architectures.</span>
              </li>
              <li>
                <strong>Live Code Review Demo</strong>
                <span>Watch intelligent, context-aware reviews that actually understand your code patterns and catch real issues.</span>
              </li>
              <li>
                <strong>Workflow Automation</strong>
                <span>Automated issue triage, better specs, faster releases — see processes that used to take days happen in minutes.</span>
              </li>
              <li>
                <strong>Integration Options</strong>
                <span>MCP for AI editors, GitHub Actions, Slack bots, Web UI — we'll show you what fits your stack.</span>
              </li>
              <li>
                <strong>Your Personalized Setup Path</strong>
                <span>Get a tailored plan to have Probe running in your org within 10 minutes of the call ending.</span>
              </li>
            </ol>
          </div>

          <!-- Right: Form -->
          <div class="demo-booking-right">
            <div class="demo-booking-form-card">
              <h3 class="demo-form-title">Tell Us About Your Setup</h3>
              <p class="demo-form-subtitle">This will be an engineer-to-engineer meeting. No sales fluff.</p>

              <form class="demo-form" @submit.prevent="submitDemoForm">
                <div class="demo-form-field">
                  <label for="demo-email">Work email</label>
                  <input type="email" id="demo-email" v-model="demoForm.email" required placeholder="you@company.com" />
                </div>

                <div class="demo-form-field">
                  <label for="demo-codebase">Codebase size</label>
                  <select id="demo-codebase" v-model="demoForm.codebaseSize">
                    <option value="">Select...</option>
                    <option value="<100k">&lt;100K lines</option>
                    <option value="100k-1m">100K - 1M lines</option>
                    <option value="1m-10m">1M - 10M lines</option>
                    <option value="10m+">10M+ lines</option>
                  </select>
                </div>

                <div class="demo-form-field">
                  <label for="demo-team">Engineering team size</label>
                  <select id="demo-team" v-model="demoForm.teamSize">
                    <option value="">Select...</option>
                    <option value="1-10">1-10 engineers</option>
                    <option value="11-50">11-50 engineers</option>
                    <option value="51-200">51-200 engineers</option>
                    <option value="200+">200+ engineers</option>
                  </select>
                </div>

                <div class="demo-form-field">
                  <label for="demo-pain">What slows your team down most?</label>
                  <textarea id="demo-pain" v-model="demoForm.painPoint" rows="3" placeholder="e.g., Onboarding takes weeks, PMs constantly ask engineers for context..."></textarea>
                </div>

                <button type="submit" class="demo-form-submit">Book Demo</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Role Workbench Section -->
    <section id="solutions" class="workbench">
      <div class="workbench__header container">
        <h2>One Platform, Every Team</h2>
        <p>Engineers, leaders, and product teams all get value — in different ways. See what Probe delivers for your role.</p>
      </div>
      <div class="workbench__shell">
        <!-- Mobile role dropdown -->
        <div class="workbench__mobile-select">
          <select
            :value="activeRole"
            @change="setActiveRole($event.target.value)"
            class="role-select"
          >
            <option v-for="role in roles" :key="role.id" :value="role.id">
              {{ role.title }}  - {{ role.subtitle }}
            </option>
          </select>
          <svg class="role-select-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </div>

        <!-- Desktop role tabs -->
        <div class="workbench__roles">
          <button
            v-for="role in roles"
            :key="role.id"
            @click="setActiveRole(role.id)"
            :class="['role-tab', { 'is-active': activeRole === role.id }]"
          >
            <span class="role-tab__title">{{ role.title }}</span>
            <span class="role-tab__subtitle">{{ role.subtitle }}</span>
          </button>
        </div>

        <!-- Role panel -->
        <div class="workbench__panel">
          <header class="role-panel__head">
            <h3>{{ currentRole.title }}</h3>
            <p class="role-panel__oneLiner">{{ currentRole.oneLiner }}</p>
          </header>

          <div class="role-panel__content">
            <div class="block">
              <h4>You get</h4>
              <ul>
                <li v-for="(item, i) in currentRole.youGet" :key="'get-'+i">
                  <strong>{{ item.title }}:</strong> {{ item.desc }}
                </li>
              </ul>
            </div>

            <div class="block">
              <h4>Replaces</h4>
              <ul>
                <li v-for="(item, i) in currentRole.replaces" :key="'rep-'+i">{{ item }}</li>
              </ul>
            </div>

            <div class="block block--full">
              <h4>Example workflows</h4>
              <ul class="workflow-list">
                <li v-for="(item, i) in currentRole.workflows" :key="'wf-'+i">
                  <a href="https://github.com/probelabs/visor/tree/main/examples#visor-examples" class="workflow-link" target="_blank" rel="noopener">{{ item }}</a>
                </li>
              </ul>
            </div>

            <div class="cta-row">
              <a class="btn btn-workbench-primary" :href="currentRole.solutionLink">{{ currentRole.solutionText }} →</a>
              <a class="btn btn-workbench-ghost" href="https://cal.com/leonid-bugaev/30min">Book a demo</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Wins Section -->
    <section id="quickwins" class="section section-quickwins">
      <div class="container">
        <header class="quickwins-header">
          <h2>Get started in 10 minutes</h2>
          <p>Real value, not demos. Pick any of these and have something running before your next meeting.</p>
        </header>

        <!-- Quick Win Tabs -->
        <div class="quickwin-tabs">
          <button
            v-for="(qw, index) in quickWins"
            :key="qw.id"
            @click="activeQuickWin = qw.id"
            :class="['quickwin-tab', { 'is-active': activeQuickWin === qw.id }]"
          >
            <span class="quickwin-tab__number">{{ index + 1 }}</span>
            <span class="quickwin-tab__title">{{ qw.tabTitle }}</span>
            <span class="quickwin-tab__time">{{ qw.time }}</span>
          </button>
        </div>

        <!-- Quick Win Content -->
        <article class="quickwin-block">
          <div class="quickwin-block__left">
            <h3>{{ currentQuickWin.title }}</h3>
            <p>{{ currentQuickWin.desc }}</p>
            <div class="quickwin-block__result">
              <strong>You get:</strong> {{ currentQuickWin.result }}
            </div>
            <a :href="currentQuickWin.link" class="quickwin-block__link">{{ currentQuickWin.linkText }} →</a>
          </div>
          <div class="quickwin-block__right">
            <!-- Probe setup with stacked sections -->
            <div v-if="activeQuickWin === 'probe'" class="quickwin-probe-setup">
              <!-- Section 1: Add to AI Coding Tools -->
              <div class="probe-section">
                <h4 class="probe-section__title">Add to AI Coding Tools</h4>
                <div class="quickwin-code quickwin-code--tabbed">
                  <div class="quickwin-code__tabs">
                    <button
                      v-for="tool in mcpTools"
                      :key="tool.id"
                      @click="activeMcpTool = tool.id"
                      :class="['quickwin-code__tab', { 'is-active': activeMcpTool === tool.id }]"
                    >{{ tool.label }}</button>
                  </div>
                  <div class="quickwin-code__body">
                    <pre><code>{{ currentMcpCode }}</code></pre>
                    <button class="quickwin-code__copy" @click="copyCode(currentMcpCode)" :title="codeCopied ? 'Copied!' : 'Copy to clipboard'">
                      <svg v-if="!codeCopied" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
                      </svg>
                      <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <!-- Section 2: Run Agent Directly -->
              <div class="probe-section">
                <h4 class="probe-section__title">Run Agent Directly <span class="probe-section__hint">Run in your project folder</span></h4>
                <div class="quickwin-code quickwin-code--tabbed">
                  <div class="quickwin-code__tabs">
                    <button
                      v-for="tool in directAgentTools"
                      :key="tool.id"
                      @click="activeDirectTool = tool.id"
                      :class="['quickwin-code__tab', { 'is-active': activeDirectTool === tool.id }]"
                    >
                      <span>{{ tool.label }}</span>
                      <span v-if="tool.desc" class="quickwin-code__tab-desc">{{ tool.desc }}</span>
                    </button>
                  </div>
                  <div class="quickwin-code__body">
                    <pre><code>{{ currentDirectCode }}</code></pre>
                    <button class="quickwin-code__copy" @click="copyCode(currentDirectCode)" :title="codeCopied ? 'Copied!' : 'Copy to clipboard'">
                      <svg v-if="!codeCopied" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
                      </svg>
                      <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- Other quick wins with simple code block -->
            <div v-else class="quickwin-code-stack">
              <div class="quickwin-code">
                <div class="quickwin-code__label">{{ currentQuickWin.codeLabel }}</div>
                <div class="quickwin-code__body">
                  <pre><code>{{ currentQuickWin.code }}</code></pre>
                  <button class="quickwin-code__copy" @click="copyCode(currentQuickWin.code)" :title="codeCopied ? 'Copied!' : 'Copy to clipboard'">
                    <svg v-if="!codeCopied" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
                    </svg>
                    <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </button>
                </div>
              </div>
              <!-- Second code block if exists -->
              <div v-if="currentQuickWin.code2" class="quickwin-code">
                <div class="quickwin-code__label">{{ currentQuickWin.codeLabel2 }}</div>
                <div class="quickwin-code__body">
                  <pre><code>{{ currentQuickWin.code2 }}</code></pre>
                  <button class="quickwin-code__copy" @click="copyCode(currentQuickWin.code2)" :title="codeCopied ? 'Copied!' : 'Copy to clipboard'">
                    <svg v-if="!codeCopied" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
                    </svg>
                    <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- Use Cases Section -->
    <section class="section section-usecases">
      <div class="container">
        <div class="pathway-header">
          <h2 class="pathway-title">Use cases & workflows</h2>
          <p class="pathway-subtitle">Direct entry points for teams, tools, and automation.</p>
        </div>
        <div class="pathway-grid">
          <a v-for="tile in useCaseTiles" :key="tile.title" :href="tile.link" class="pathway-tile">
            <h3>{{ tile.title }}</h3>
            <p>{{ tile.desc }}</p>
            <span class="pathway-link">{{ tile.linkText }} <span class="arrow">→</span></span>
          </a>
        </div>
      </div>
    </section>

    <!-- Visor Section -->
    <section class="section section-visor">
      <div class="container">
        <!-- Header -->
        <header class="visor-header">
          <h2>Visor: the workflow engine for predictable agent automation</h2>
          <p class="visor-subhead">
            CI is great for building, testing, and deploying code. Visor is built for something different: running agent workflows across tools and teams—where you need explicit control flow, validated outputs, and observable runs.
          </p>
          <!-- Badge Row -->
          <div class="visor-badges">
            <span class="visor-badge">On‑prem</span>
            <span class="visor-badge">Any LLM</span>
            <span class="visor-badge">OpenTelemetry</span>
            <span class="visor-badge">Open source</span>
            <span class="visor-badge">MCP tools</span>
          </div>
        </header>

        <!-- What makes Visor different -->
        <h3 class="visor-section-title">What makes Visor workflows different</h3>
        <div class="visor-features-grid">
          <div v-for="feature in visorFeatures" :key="feature.title" class="visor-feature-card">
            <h4>{{ feature.title }}</h4>
            <p>{{ feature.desc }}</p>
          </div>
        </div>

        <!-- CTAs -->
        <div class="visor-cta">
          <a href="/visor" class="btn btn-blue">Explore Visor <span class="btn-arrow">→</span></a>
          <a href="https://github.com/probelabs/visor" class="btn btn-outline" target="_blank">View example workflows</a>
        </div>
      </div>
    </section>

    <!-- Pathway Section -->
    <section class="section section-pathway">
      <div class="container">
        <div class="pathway-header">
          <h2 class="pathway-title">Choose your path</h2>
          <p class="pathway-subtitle">Same foundation for everyone: pipelines (not prompts), scoped context, validated outputs, and observable runs.</p>
        </div>

        <div class="pathway-grid">
          <a v-for="tile in pathwayTiles" :key="tile.title" :href="tile.link" class="pathway-tile">
            <h3>{{ tile.title }}</h3>
            <p>{{ tile.desc }}</p>
            <span class="pathway-link">{{ tile.linkText }} <span class="arrow">→</span></span>
          </a>
        </div>

        <p class="pathway-browse">Not sure? <a href="https://github.com/probelabs/visor/tree/main/examples" target="_blank" rel="noopener">Browse workflow examples →</a></p>

        <div class="pathway-badges">
          <span class="infra-badge">On-prem</span>
          <span class="infra-badge">Any LLM</span>
          <span class="infra-badge">OpenTelemetry</span>
          <span class="infra-badge">Open source core</span>
        </div>
      </div>
    </section>

    <!-- Security & Governance Section -->
    <section class="section section-security">
      <div class="container">
        <div class="security-header">
          <h2 class="security-title">On-prem and governable by design</h2>
          <p class="security-subtitle">Run it in your environment, bring your model, and audit every workflow like infrastructure.</p>
        </div>

        <div class="security-grid">
          <div class="security-col">
            <h3>Control</h3>
            <ul>
              <li><strong>On-prem by default</strong> — your code and data stay in your environment</li>
              <li><strong>Any LLM</strong> — choose per workflow; swap models without rewriting everything</li>
              <li><strong>Explicit tool permissions</strong> — per workflow and per step</li>
              <li><strong>Scoped context retrieval</strong> — pull only what's needed; avoid broad exposure</li>
              <li><strong>Schema validation + policy gates</strong> — for critical steps</li>
              <li><strong>Human approvals</strong> — where required (release gates, risky actions)</li>
            </ul>
          </div>
          <div class="security-col">
            <h3>Governance</h3>
            <ul>
              <li><strong>OpenTelemetry traces + audit trails</strong> — what happened, with what context, why</li>
              <li><strong>Versioned workflows</strong> — reviewed like code (changes are intentional and trackable)</li>
              <li><strong>Org templates + team ownership</strong> — teams customize safely; leadership keeps standards</li>
              <li><strong>Multi-repo + multi-team</strong> — aligned to ownership boundaries</li>
              <li><strong>Deterministic retries + failure reasons</strong> — no silent "AI weirdness"</li>
            </ul>
          </div>
        </div>

        <p class="security-lockin">No vendor lock-in: open-source core + open standards + deploy anywhere.</p>

        <div class="security-cta">
          <a href="/security" class="btn btn-outline">Security & deployment overview →</a>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section section-faq">
      <div class="container">
        <div class="faq-header">
          <h2>Common questions</h2>
        </div>
        <div class="faq-grid">
          <div v-for="item in faqItems" :key="item.q" class="faq-card">
            <h3>{{ item.q }}</h3>
            <p>{{ item.a }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA Section -->
    <section id="contact" class="section section-finalcta">
      <div class="container">
        <div class="finalcta-card">
          <h2>Build workflows you can trust—and prove.</h2>
          <p>If you're moving toward agent-first development, the question isn't whether you'll automate. It's whether your automation will be repeatable, inspectable, and safe—with clear boundaries, validations, and audit trails.</p>
          <div class="finalcta-buttons">
            <a href="https://cal.com/leonid-bugaev/30min" class="btn btn-blue btn-lg">Book a demo</a>
            <a href="https://github.com/probelabs/visor/tree/main/examples" target="_blank" rel="noopener" class="btn btn-outline">View workflow examples →</a>
          </div>
          <p class="finalcta-micro">Prefer bottom-up adoption? Start with one workflow, run it on-prem, then expand into a library.</p>
          <div class="finalcta-demo-preview">
            <span>What you'll see in the demo:</span>
            <ul>
              <li>A real workflow definition (steps + permissions)</li>
              <li>Validated outputs (schema/gates)</li>
              <li>A trace you can audit (OpenTelemetry)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <!-- Brand Column -->
          <div class="footer-brand-col">
            <span class="footer-brand-name">ProbeLabs</span>
            <p class="footer-tagline">The Operating System for Agentic Engineering</p>
            <div class="footer-social">
              <a href="https://github.com/probelabs" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                  <path d="M9 18c-4.51 2-5-2-7-2"/>
                </svg>
              </a>
            </div>
            <a href="mailto:hello@probelabs.com" class="footer-email">hello@probelabs.com</a>
          </div>

          <!-- Products Column -->
          <div class="footer-col">
            <h4>Products</h4>
            <ul>
              <li><a href="/probe">Probe</a></li>
              <li><a href="/visor">Visor</a></li>
              <li><a href="/products/memory-layer">Memory Layer</a></li>
              <li><a href="/maid">Maid</a></li>
              <li><a href="https://goreplay.org">GoReplay</a></li>
            </ul>
          </div>

          <!-- Solutions Column -->
          <div class="footer-col">
            <h4>Solutions</h4>
            <ul>
              <li><a href="/solutions/engineering-leadership">Engineering Leadership</a></li>
              <li><a href="/solutions/platform-teams">Platform Teams</a></li>
              <li><a href="/solutions/agencies">Agencies</a></li>
              <li><a href="/solutions/enterprise">Enterprise</a></li>
            </ul>
          </div>

          <!-- Resources Column -->
          <div class="footer-col">
            <h4>Resources</h4>
            <ul>
              <li><a href="/quick-start">Quick Start</a></li>
              <li><a href="/docs">Documentation</a></li>
              <li><a href="https://github.com/probelabs/visor/tree/main/examples" target="_blank" rel="noopener">Workflow Examples</a></li>
              <li><a href="https://github.com/probelabs/probe" target="_blank" rel="noopener">GitHub</a></li>
            </ul>
          </div>

          <!-- Company Column -->
          <div class="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="/company/about">About</a></li>
            </ul>
          </div>
        </div>

        <!-- Footer Bottom -->
        <div class="footer-bottom">
          <div class="footer-copy">© {{ currentYear }} ProbeLabs Inc. All rights reserved.</div>
          <div class="footer-legal">
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const openDropdown = ref(null)

// Toggle dropdown menu (click-based)
const setDropdown = (name) => {
  openDropdown.value = name
}

const toggleDropdown = (name) => {
  openDropdown.value = openDropdown.value === name ? null : name
}

const activeRole = ref('cto')
const activeQuickWin = ref('probe')
const activeMcpTool = ref('claude-code')
const codeCopied = ref(false)

// Demo booking form
const demoForm = ref({
  email: '',
  codebaseSize: '',
  teamSize: '',
  painPoint: ''
})

const submitDemoForm = () => {
  const params = new URLSearchParams()
  if (demoForm.value.email) params.append('email', demoForm.value.email)
  const notes = [
    demoForm.value.codebaseSize ? `Codebase: ${demoForm.value.codebaseSize}` : '',
    demoForm.value.teamSize ? `Team: ${demoForm.value.teamSize}` : '',
    demoForm.value.painPoint ? `Pain point: ${demoForm.value.painPoint}` : ''
  ].filter(Boolean).join(' | ')
  if (notes) params.append('notes', notes)

  window.open(`https://cal.com/leonid-bugaev/30min?${params.toString()}`, '_blank')
}

// Quick Wins data
const quickWins = [
  {
    id: 'probe',
    tabTitle: 'Understand Complex Code',
    time: '~2 min',
    title: 'Add Probe to Your AI Coding Tool',
    desc: 'Get enterprise-grade code understanding in your existing workflow. Probe auto-detects Claude Code and Codex auth, or works with any LLM API. One command - your AI actually understands your architecture.',
    result: 'A specialized AI agent for code search and analysis, powered by Probe\'s code search engine - finds the right context and reduces wrong answers with bounded, structured retrieval.',
    link: '/docs/chat-with-code',
    linkText: 'Chat with code guide'
  },
  {
    id: 'github',
    tabTitle: 'Automate PR Reviews',
    time: '~5 min',
    title: 'Add Visor GitHub Action',
    desc: 'Add a reusable GitHub Action for automated issue triage and code review. On new issues: categorizes and answers from codebase context. On PRs: reviews security, performance, quality with inline comments.',
    result: 'Every issue triaged automatically. Every PR gets a first-pass review. Follow up in comments to dig deeper.',
    link: '/docs/github-assistant',
    linkText: 'GitHub Assistant docs',
    codeLabel: '.github/workflows/visor.yml',
    code: `name: Visor Code Review
on:
  pull_request:
    types: [opened, synchronize]
  issues:
    types: [opened]
  issue_comment:
    types: [created]

jobs:
  visor:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: probelabs/visor@main
        env:
          ANTHROPIC_API_KEY: \${{ secrets.ANTHROPIC_API_KEY }}`
  },
  {
    id: 'slack',
    tabTitle: 'Build Slack Bot',
    time: '~10 min',
    title: 'Deploy a Codebase-Aware Slack Bot',
    desc: 'Create a Slack bot that answers questions about your codebase using Visor. Your team can ask questions in Slack and get intelligent answers grounded in your actual code.',
    result: 'A Slack bot your team can query about your codebase. Run locally to test, then deploy anywhere.',
    link: '/docs/guides/slack-bot',
    linkText: 'Full setup guide (with Slack app manifest)',
    codeLabel: 'slack.yaml',
    code: `steps:
  ask:
    type: human-input
    prompt: |
      Hi! Ask me something.

  checkout:
    type: git-checkout
    depends_on: [ask]
    ref: "main"
    repository: "probelabs/probe"

  answer:
    type: ai
    depends_on: [ask, checkout]
    prompt: |
      User asked: {{ outputs['ask'].text }}
      Repo path: {{ outputs['checkout'].path }}
      Reply in 1–3 sentences.`,
    codeLabel2: 'Run it',
    code2: 'npx -y @probelabs/visor@latest --config slack.yaml --slack'
  }
]

const currentQuickWin = computed(() => quickWins.find(qw => qw.id === activeQuickWin.value) || quickWins[0])

// Probe setup categories
const activeProbeCategory = ref('mcp')

const probeCategories = [
  { id: 'mcp', label: 'Add to AI Coding Tools', desc: 'Integrate with Claude Code, Codex, etc.' },
  { id: 'direct', label: 'Run Agent Directly', desc: 'Web UI or CLI - no setup required' }
]

const mcpTools = [
  { id: 'claude-code', label: 'Claude Code' },
  { id: 'json', label: 'JSON Config' },
  { id: 'codex', label: 'Codex' },
  { id: 'opencode', label: 'OpenCode' }
]

const directAgentTools = [
  { id: 'web', label: 'Web UI', desc: 'Best for non-technical users' },
  { id: 'cli', label: 'CLI Agent', desc: 'Terminal-based agent' }
]

const activeDirectTool = ref('web')

const mcpCodeSnippets = {
  'claude-code': 'claude mcp add probe -- npx -y @probelabs/probe@latest agent --mcp',
  'json': `{
  "mcpServers": {
    "probe": {
      "command": "npx",
      "args": ["-y", "@probelabs/probe@latest", "agent", "--mcp"]
    }
  }
}`,
  'codex': `# ~/.codex/config.toml
# Auto-detects Codex auth
[mcp_servers.probe]
command = "npx"
args = ["-y", "@probelabs/probe@latest", "agent", "--mcp"]`,
  'opencode': `# opencode.json (or run: opencode mcp add)
{
  "mcp": {
    "probe": {
      "type": "local",
      "command": "npx",
      "args": ["-y", "@probelabs/probe@latest", "agent", "--mcp"]
    }
  }
}`
}

const directAgentSnippets = {
  'web': `# Opens a web browser with the Probe agent UI
npx -y @probelabs/probe-chat@latest --web`,
  'cli': `# Runs the agent directly in your terminal
npx -y @probelabs/probe-chat@latest`
}

const currentDirectCode = computed(() => directAgentSnippets[activeDirectTool.value])

const currentMcpCode = computed(() => mcpCodeSnippets[activeMcpTool.value])

const copyCode = async (code) => {
  try {
    await navigator.clipboard.writeText(code)
    codeCopied.value = true
    setTimeout(() => { codeCopied.value = false }, 2000)
  } catch (err) {
    console.error('Failed to copy:', err)
  }
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const setActiveRole = (roleId) => {
  activeRole.value = roleId
}

const roles = [
  {
    id: 'cto',
    title: 'CTO / Founder',
    subtitle: 'What works today',
    oneLiner: 'Three things that work right now: chat with your entire codebase, intelligent code reviews that scale, and workflow automation that runs itself.',
    solutionLink: '/solutions/engineering-leadership',
    solutionText: 'Full solution details',
    youGet: [
      { title: 'Chat with code across your entire architecture', desc: 'Everyone - engineers, PMs, support, sales - can query millions of lines across repos, docs, and history. No more "ask engineering" loops. No more tribal knowledge bottlenecks.' },
      { title: 'Intelligent code reviews that scale with your org', desc: 'Powered by Probe\'s deep code understanding, with configurable rules per team. Consistent quality gates across all repos, all teams - without slowing anyone down.' },
      { title: 'Workflow automation that runs without you', desc: 'Issue triage, spec generation, release gates - processes that used to require manual intervention now run automatically. Better specs, smoother releases, fewer interrupts.' }
    ],
    replaces: [
      'PMs and support constantly interrupting engineers for context',
      'Inconsistent code review quality that depends on who\'s available',
      'Manual issue triage that burns engineering time',
      'Specs that get rewritten because they missed technical constraints',
      'Release processes that require heroics every time'
    ],
    workflows: [
      'Intelligent code review: Probe-powered analysis with team-specific rules, scales across hundreds of PRs',
      'Issue triage automation: tickets enriched with code context, owners identified, routed automatically',
      'Spec-to-plan pipeline: PM drafts become implementation-ready specs grounded in your actual architecture',
      'Release readiness gates: automated checks, evidence collection, approval workflows'
    ],
    badges: ['On-prem', 'Any LLM', 'OpenTelemetry', 'Open source', 'Schema validation', 'Traceable runs']
  },
  {
    id: 'platform',
    title: 'Platform team',
    subtitle: 'Ship the paved road',
    oneLiner: 'Give every team the same three capabilities: codebase chat, intelligent reviews, and workflow automation - as managed platform services.',
    solutionLink: '/solutions/platform-teams',
    solutionText: 'Platform team solutions',
    youGet: [
      { title: 'Code search as a platform service', desc: 'Deploy Probe once, give every team multi-repo search across millions of lines. Engineers, PMs, and support all get answers without filing tickets.' },
      { title: 'Code review infrastructure that scales', desc: 'Configure review rules centrally, let teams customize per repo. Consistent quality without platform team becoming a bottleneck.' },
      { title: 'Workflow automation without custom glue', desc: 'Issue triage, release gates, spec generation - define once in YAML, run everywhere: CI, Slack, API, local dev.' }
    ],
    replaces: [
      'Custom scripts that only work in one environment',
      'Different teams reinventing the same workflows',
      'Black-box AI with no observability or governance',
      'Platform team bottleneck for every automation request'
    ],
    workflows: [
      'Shared code review pipeline: central rules + team customization, Probe-powered analysis',
      'GitOps workflow management: YAML definitions, version controlled, deployed through CI',
      'Multi-surface automation: same workflow runs as CI job, Slack bot, API endpoint, or CLI',
      'Platform-grade observability: OpenTelemetry traces for every AI workflow step'
    ],
    badges: ['Build once, run everywhere', 'Composable blocks', 'GitOps-native', 'OpenTelemetry', 'On-prem', 'Any LLM', 'Open source']
  },
  {
    id: 'eng',
    title: 'Engineers',
    subtitle: 'Full context, fewer interrupts',
    oneLiner: 'Chat with millions of lines of code. Get reviews that catch real issues. Automate the repetitive parts of your workflow.',
    solutionLink: 'https://github.com/probelabs/visor/tree/main/examples',
    solutionText: 'View examples',
    youGet: [
      { title: 'Chat with your entire codebase', desc: 'Search across repos, understand dependencies, trace codepaths - without digging through files. Multi-repo search that actually works at scale.' },
      { title: 'Code reviews that catch what matters', desc: 'Intelligent reviews powered by Probe understand your code structure. Custom rules per repo. Catches architectural issues, not just style nits.' },
      { title: 'Less time on repetitive work', desc: 'Issue triage, impact analysis, root-cause investigation - workflows that used to take hours now take minutes. Fewer interrupts from PMs and support asking for context.' }
    ],
    replaces: [
      'Hours spent onboarding to unfamiliar codebases',
      'Waiting for review feedback on obvious issues',
      'Constant interruptions from non-engineers asking "how does this work?"',
      'Manual impact analysis before every change'
    ],
    workflows: [
      'Intelligent code review: AST-aware analysis with custom rules per repo',
      'Impact analysis: "what breaks if I change X?" across repos and services',
      'Root-cause triage: symptoms → suspect codepaths → related changes → next steps',
      'Auto-remediation: fix → validate → escalate if still failing'
    ],
    badges: ['AST-aware', 'Multi-repo', 'Test integration', 'IDE plugins']
  },
  {
    id: 'qa',
    title: 'QA & Operations',
    subtitle: 'Quality without bottlenecks',
    oneLiner: 'Chat with the codebase like engineers do. Intelligent reviews catch issues early. Automated triage and test planning.',
    solutionLink: 'https://github.com/probelabs/visor/tree/main/examples',
    solutionText: 'View examples',
    youGet: [
      { title: 'Chat with code - no engineering required', desc: 'Ask questions about architecture, edge cases, dependencies, release history. Get answers grounded in code, not tribal knowledge. No need to interrupt engineers.' },
      { title: 'Intelligent reviews catch issues before you do', desc: 'Code reviews powered by Probe understand impact and risk. Quality gates that run automatically on every PR, every release.' },
      { title: 'Automated test planning and triage', desc: 'Turn diffs into risk maps and test plans. Turn tickets into structured investigations with owners, evidence, and next steps.' }
    ],
    replaces: [
      'Asking engineers to explain how things work',
      'Manual test planning that misses edge cases',
      'Escalations with no technical evidence',
      'Slow "who changed what?" investigation loops'
    ],
    workflows: [
      'Diff → risk map → test plan: automated regression scope and test parameters',
      'Ticket → escalation packet: owners, suspected component, related changes, evidence',
      'Intelligent code review: quality gates that catch issues before QA',
      'Release readiness: automated checks, approvals, evidence collection'
    ],
    badges: ['Impact analysis', 'Root cause', 'Release gates', 'Evidence trails', 'No-code queries']
  },
  {
    id: 'agency',
    title: 'Agencies',
    subtitle: 'Onboard fast, deliver consistent',
    oneLiner: 'Chat with client codebases on day one. Consistent code reviews across all projects. Automated workflows that run on their infrastructure.',
    solutionLink: '/solutions/agencies',
    solutionText: 'Agency solutions',
    youGet: [
      { title: 'Chat with any codebase immediately', desc: 'Query multi-repo codebases to understand architecture, ownership, dependencies, and "what\'s safe to change" - without weeks of ramp-up or back-and-forth with client engineers.' },
      { title: 'Consistent code reviews across all projects', desc: 'Intelligent reviews powered by Probe with configurable rules per client. Same quality bar whether you have 2 engineers or 20 on a project.' },
      { title: 'Automated workflows on client infrastructure', desc: 'Issue triage, spec generation, release gates - workflows that run on-prem, any LLM, fully auditable. Clients trust what they can inspect.' }
    ],
    replaces: [
      'Week-long ramp-up tax on each new client codebase',
      'Inconsistent PR quality across distributed teams',
      'Endless back-and-forth to collect context from client engineers'
    ],
    workflows: [
      'Codebase onboarding: architecture + ownership + dependencies in hours, not weeks',
      'Intelligent code review: client-specific rules, consistent quality across projects',
      'Spec → plan → test cases: grounded in the actual client stack',
      'Issue triage: evidence + suspected component + next steps'
    ],
    badges: ['On-prem', 'Any LLM', 'Open source', 'OpenTelemetry', 'Schema validation', 'Traceable runs']
  },
  {
    id: 'pm',
    title: 'Product Manager',
    subtitle: 'Specs without the back-and-forth',
    oneLiner: 'Chat with the codebase to understand constraints. Generate specs that engineers can execute. No more interrupting engineering for context.',
    solutionLink: 'https://github.com/probelabs/visor/tree/main/examples',
    solutionText: 'View examples',
    youGet: [
      { title: 'Chat with code - stop interrupting engineers', desc: 'Ask questions about architecture, dependencies, and constraints. Get accurate answers from the codebase without waiting for engineers to explain.' },
      { title: 'Specs that engineers can actually execute', desc: 'Generate specs grounded in your real architecture - with constraints, dependencies, edge cases, and test cases. No more rewrites when hidden constraints surface.' },
      { title: 'Automated issue triage and enrichment', desc: 'Customer issues become engineering-ready tickets with context, suspected components, and acceptance criteria. Better specs mean smoother handoffs.' }
    ],
    replaces: [
      'Constantly interrupting engineers with "how does this work?"',
      'Specs rewritten because hidden constraints surface late',
      'Back-and-forth to add missing acceptance criteria and test cases',
      'Inconsistent ticket quality across PMs'
    ],
    workflows: [
      'PRD → implementation-ready spec grounded in actual architecture',
      'Customer issue → enriched ticket with code context and acceptance criteria',
      'Spec quality gate: automated check for structure, scope, dependencies',
      'Release readiness: definition of done, rollout steps, monitoring plan'
    ],
    badges: ['Architecture-aware', 'Effort estimation', 'Test scenarios', 'Dependency mapping']
  }
]

const currentRole = computed(() => {
  return roles.find(r => r.id === activeRole.value) || roles[0]
})

const pathwayTiles = [
  { title: 'CTOs & VPs Engineering', desc: 'Make AI execution predictable across teams—without forcing one workflow on everyone.', link: '/solutions/engineering-leadership', linkText: 'Engineering leadership' },
  { title: 'Platform / DevEx', desc: 'Ship "paved roads" for agent workflows: permissions, templates, audit trails, and standards.', link: '/solutions/platform-teams', linkText: 'Platform teams' },
  { title: 'Engineers & agentic builders', desc: 'Get answers grounded in your stack—and turn repeatable work into versioned pipelines.', link: '/solutions/engineers', linkText: 'Engineers' },
  { title: 'Agencies & delivery partners', desc: 'Onboard faster to unfamiliar codebases with context packs + repeatable workflow templates.', link: '/solutions/agencies', linkText: 'Agencies' },
  { title: 'Product & Support', desc: 'Resolve tickets and write specs using source-of-truth context—without blocking engineering.', link: '/solutions/non-technical', linkText: 'Product & Support' }
]

const useCaseTiles = [
  { title: 'Chat with Code', desc: 'Ask questions across large codebases with grounded context.', link: '/docs/chat-with-code', linkText: 'Chat with code' },
  { title: 'GitHub Assistant', desc: 'Issue + PR automation inside GitHub Actions.', link: '/docs/github-assistant', linkText: 'GitHub Assistant' },
  { title: 'Team Chat with Code', desc: 'Shared context for PMs, support, and engineering.', link: '/docs/use-cases/team-chat', linkText: 'Team chat' },
  { title: 'CLI for AI Workflows', desc: 'Shell-first pipelines for large repos and automation.', link: '/docs/use-cases/cli-ai-workflows', linkText: 'CLI workflows' },
  { title: 'Engineering Process Automation', desc: 'Visor workflows for real product + engineering processes.', link: '/docs/use-cases/visor-workflows', linkText: 'Process automation' },
  { title: 'AI Code Editors (MCP/ACP)', desc: 'Integrations with Claude Code, Codex, and IDEs.', link: '/docs/chat-with-code', linkText: 'Chat with code' },
  { title: 'Building AI Tools', desc: 'Custom tooling on top of Probe context.', link: '/docs/use-cases/building-ai-tools', linkText: 'Build tools' },
  { title: 'Node.js SDK Use Case', desc: 'Programmatic workflows in JavaScript.', link: '/docs/use-cases/nodejs-sdk', linkText: 'Node.js SDK' }
]

const faqItems = [
  { q: 'What do you mean by "pipelines, not prompts"?', a: 'Prompts are instructions. Pipelines are defined systems: explicit steps, constrained tools, validated outputs, retries, and feedback loops—so behavior is repeatable and governable.' },
  { q: "Isn't AI inherently nondeterministic?", a: "Model outputs can vary. The workflow doesn't have to. Visor makes execution deterministic through constraints, schemas, validation, retries, and auditability—so outcomes are governable." },
  { q: 'Can we run this on-prem and use our own model?', a: 'Yes. Deploy in your environment and choose the LLM per workflow. You can switch models without rewriting your entire workflow strategy.' },
  { q: 'How do you avoid vendor lock-in?', a: 'Open-source core, deploy anywhere, model-agnostic execution, and open standards like OpenTelemetry for observability.' },
  { q: 'Why not one powerful agent with access to everything?', a: "Because it's hard to trust, debug, and govern. Many specialized agents inside explicit pipelines are predictable and scalable." },
  { q: 'Is this just "chat with your repo"?', a: 'No. Probe retrieves the right context deeply across enterprise codebases and docs, and Visor turns that context into validated, observable execution.' }
]

// Lucide SVG icons (matching reference PipelineVisualizer.tsx)
const icons = {
  cpu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>',
  gitPullRequest: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6h3a2 2 0 0 1 2 2v7"/><line x1="6" x2="6" y1="9" y2="21"/></svg>',
  workflow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="8" x="3" y="3" rx="2"/><path d="M7 11v4a2 2 0 0 0 2 2h4"/><rect width="8" height="8" x="13" y="13" rx="2"/></svg>',
  activity: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/></svg>',
  shieldCheck: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>',
  database: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>',
  layers: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></svg>',
  code2: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>',
  bot: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>',
  server: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg>',
  github: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>',
  share2: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>',
  boxes: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"/><path d="m7 16.5-4.74-2.85"/><path d="m7 16.5 5-3"/><path d="M7 16.5v5.17"/><path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"/><path d="m17 16.5-5-3"/><path d="m17 16.5 4.74-2.85"/><path d="M17 16.5v5.17"/><path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"/><path d="M12 8 7.26 5.15"/><path d="m12 8 4.74-2.85"/><path d="M12 13.5V8"/></svg>',
  puzzle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z"/></svg>',
  fileCode: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 12.5 8 15l2 2.5"/><path d="m14 12.5 2 2.5-2 2.5"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"/></svg>',
  zap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>',
  globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>',
  terminal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/></svg>',
  checkCircle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>'
}

// Visor Section Data
const visorFeatures = [
  { title: 'Workflow as code', desc: 'Steps, prompts, schemas, routing, outputs—all defined in YAML. No hidden glue, no magic.' },
  { title: 'Multi-provider runs', desc: 'AI + GitHub + HTTP + shell + MCP tools + memory in one workflow.' },
  { title: 'Schema validation', desc: 'Enforce structured outputs. Stable results for PR comments, reports, and downstream systems.' },
  { title: 'Observable by default', desc: 'OpenTelemetry traces + log correlation built in. Debug agent workflows like any production system.' },
  { title: 'Safe control flow', desc: 'Bounded retries, deterministic routing, approval gates. Predictable behavior, not improvisation.' },
  { title: 'Testable workflows', desc: 'Fixtures and mocks validate behavior before production. Run the same workflow locally, in CI, or via API.' }
]

// Hex grid data
const hexNodes = computed(() => {
  const nodes = [
    { id: 'core', q: 0, r: 0, iconKey: 'cpu', label: 'Core Logic', colorClass: 'hex-brand', classes: 'hex-core' },
    { id: 'plan', q: 0, r: -1, iconKey: 'gitPullRequest', label: 'Planning', sublabel: 'AST Context', colorClass: 'hex-purple' },
    { id: 'proc', q: 1, r: -1, iconKey: 'workflow', label: 'Process', sublabel: 'Orchestration', colorClass: 'hex-blue' },
    { id: 'mon', q: 1, r: 0, iconKey: 'activity', label: 'Monitor', sublabel: 'Observability', colorClass: 'hex-amber' },
    { id: 'val', q: 0, r: 1, iconKey: 'shieldCheck', label: 'Validate', sublabel: 'Guardrails', colorClass: 'hex-emerald' },
    { id: 'ctx', q: -1, r: 1, iconKey: 'database', label: 'Context', sublabel: 'Memory', colorClass: 'hex-rose' },
    { id: 'top', q: -1, r: 0, iconKey: 'layers', label: 'Topology', sublabel: 'Graph', colorClass: 'hex-indigo' },
    { id: 'code', q: 0, r: -2, iconKey: 'code2', label: 'Code', sublabel: 'Source', colorClass: 'hex-slate', classes: 'hex-faded' },
    { id: 'claude', q: 1, r: -2, iconKey: 'bot', label: 'Claude', sublabel: 'Agentic AI', colorClass: 'hex-orange' },
    { id: 'srv', q: 2, r: -2, iconKey: 'server', label: 'Server', colorClass: 'hex-slate', classes: 'hex-faded-more' },
    { id: 'oss', q: 2, r: -1, iconKey: 'github', label: 'OSS', sublabel: 'Open Source', colorClass: 'hex-slate', classes: 'hex-faded' },
    { id: 'api', q: 2, r: 0, iconKey: 'share2', label: 'API', colorClass: 'hex-slate', classes: 'hex-faded-more' },
    { id: 'pkg', q: 1, r: 1, iconKey: 'boxes', label: 'Pkgs', sublabel: 'Modules', colorClass: 'hex-slate', classes: 'hex-faded' },
    { id: 'int', q: 0, r: 2, iconKey: 'puzzle', label: 'Plugins', sublabel: 'Integrations', colorClass: 'hex-cyan' },
    { id: 'file', q: -1, r: 2, iconKey: 'fileCode', label: 'Files', colorClass: 'hex-slate', classes: 'hex-faded-more' },
    { id: 'evt', q: -2, r: 2, iconKey: 'zap', label: 'Events', colorClass: 'hex-slate', classes: 'hex-faded' },
    { id: 'web', q: -2, r: 1, iconKey: 'globe', label: 'Web', sublabel: 'Client', colorClass: 'hex-slate', classes: 'hex-faded' },
    { id: 'cli', q: -2, r: 0, iconKey: 'terminal', label: 'CLI', colorClass: 'hex-slate', classes: 'hex-faded' },
    { id: 'bg1', q: -1, r: -1, colorClass: 'hex-slate', classes: 'hex-faded-more' },
    // Background hexes
    { id: 'bg2', q: 0, r: -3, colorClass: 'hex-slate', classes: 'hex-bg' },
    { id: 'bg3', q: 1, r: -3, colorClass: 'hex-slate', classes: 'hex-bg' },
    { id: 'bg4', q: 2, r: -3, colorClass: 'hex-slate', classes: 'hex-bg' },
    { id: 'bg5', q: 3, r: -3, colorClass: 'hex-slate', classes: 'hex-bg-more' },
    { id: 'bg6', q: 3, r: -2, colorClass: 'hex-slate', classes: 'hex-bg' },
    { id: 'bg7', q: 3, r: -1, colorClass: 'hex-slate', classes: 'hex-bg' },
    { id: 'bg8', q: 3, r: 0, colorClass: 'hex-slate', classes: 'hex-bg-more' },
    { id: 'bg9', q: 2, r: 1, colorClass: 'hex-slate', classes: 'hex-bg' },
    { id: 'bg10', q: 1, r: 2, colorClass: 'hex-slate', classes: 'hex-bg' },
    { id: 'bg11', q: 0, r: 3, colorClass: 'hex-slate', classes: 'hex-bg-more' },
    { id: 'bg12', q: -1, r: 3, colorClass: 'hex-slate', classes: 'hex-bg' },
    { id: 'bg13', q: -2, r: 3, colorClass: 'hex-slate', classes: 'hex-bg' },
    { id: 'bg14', q: -3, r: 3, colorClass: 'hex-slate', classes: 'hex-bg-more' },
    { id: 'bg15', q: -3, r: 2, colorClass: 'hex-slate', classes: 'hex-bg' },
    { id: 'bg16', q: -3, r: 1, colorClass: 'hex-slate', classes: 'hex-bg' },
    { id: 'bg17', q: -3, r: 0, colorClass: 'hex-slate', classes: 'hex-bg-more' },
    { id: 'bg18', q: -2, r: -1, colorClass: 'hex-slate', classes: 'hex-bg' },
    { id: 'bg19', q: -1, r: -2, colorClass: 'hex-slate', classes: 'hex-bg' },
  ]

  return nodes.map(n => ({
    ...n,
    icon: n.iconKey ? icons[n.iconKey] : null,
    style: `--q:${n.q}; --r:${n.r};`
  }))
})

// Dynamic year for footer
const currentYear = computed(() => new Date().getFullYear())

onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
  }
  window.addEventListener('scroll', handleScroll)
  handleScroll()

  // Close dropdown when clicking outside
  document.addEventListener('click', () => {
    openDropdown.value = null
  })
})

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

.probelabs-landing {
  --c-bg: #f8fafc;
  --c-bg-white: #ffffff;
  --c-bg-subtle: #f1f5f9;
  --c-border: #e2e8f0;
  --c-border-hover: #cbd5e1;
  --c-text: #0f172a;
  --c-text-muted: #475569;
  --c-text-subtle: #64748b;
  --c-brand-50: #f0fdf4;
  --c-brand-100: #dcfce7;
  --c-brand-200: #bbf7d0;
  --c-brand-400: #4ade80;
  --c-brand-500: #22c55e;
  --c-brand-600: #16a34a;
  --c-brand-700: #15803d;
  --c-blue-500: #3b82f6;
  --c-blue-600: #2563eb;
  --c-purple-500: #a855f7;
  --c-amber-500: #f59e0b;
  --c-emerald-500: #10b981;
  --c-rose-500: #f43f5e;
  --c-indigo-500: #6366f1;
  --c-cyan-500: #06b6d4;
  --c-orange-500: #f97316;
  --font-display: 'Space Grotesk', system-ui, sans-serif;
  --font-body: 'Inter', system-ui, sans-serif;
  --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-family: var(--font-body);
  background: var(--c-bg);
  color: var(--c-text);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}
.probelabs-landing h1, .probelabs-landing h2, .probelabs-landing h3, .probelabs-landing h4 { font-family: var(--font-display); }
.probelabs-landing .container { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; }
.text-brand { color: var(--c-brand-600); }

/* Navigation */
.nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; padding: 1.5rem 0; transition: all 0.3s ease; background: transparent; border-bottom: 1px solid transparent; }
.nav.scrolled { background: rgba(255,255,255,0.9); backdrop-filter: blur(12px); border-bottom-color: var(--c-border); padding: 0.75rem 0; box-shadow: 0 1px 3px rgba(0,0,0,0.05); }
.nav-container { max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; }
.nav-brand { display: flex; align-items: center; gap: 0.5rem; }
.nav-logo { width: 32px; height: 32px; border-radius: 6px; display: flex; align-items: center; justify-content: center; overflow: hidden; }
.nav-logo-img { width: 100%; height: 100%; object-fit: contain; }
.nav-title { font-family: var(--font-display); font-weight: 700; font-size: 1.25rem; color: var(--c-text); }
.nav-links { display: flex; align-items: center; gap: 2rem; }
.nav-link { font-size: 0.8125rem; font-weight: 600; color: var(--c-text-muted); text-decoration: none; transition: color 0.2s; }
.nav-link:hover { color: var(--c-brand-600); }

/* Dropdown Navigation */
.nav-dropdown { position: relative; }
.nav-dropdown-trigger { display: inline-flex; align-items: center; gap: 0.25rem; background: none; border: none; cursor: pointer; font-family: inherit; }
.nav-dropdown-arrow { transition: transform 0.2s; }
.nav-dropdown-trigger.is-open .nav-dropdown-arrow { transform: rotate(180deg); }

/* Mega Menu */
.nav-mega-menu {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  padding-top: 0.75rem;
  z-index: 100;
}
.nav-mega-menu--wide {
  left: 50%;
  transform: translateX(-50%);
}
.mega-menu-content {
  background: white;
  border: 1px solid var(--c-border);
  border-radius: 0.75rem;
  box-shadow: 0 20px 40px rgba(0,0,0,0.12), 0 4px 12px rgba(0,0,0,0.08);
  padding: 2rem;
  min-width: 680px;
}
.nav-mega-menu--wide .mega-menu-content {
  min-width: 0;
  width: max-content;
}
.mega-menu-columns {
  display: flex;
  gap: 1.5rem;
}
.mega-menu-divider-vertical {
  width: 1px;
  background: var(--c-border);
  margin: 0.25rem 0;
}
.mega-menu-label {
  font-size: 0.6875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--c-text-subtle);
  margin-bottom: 1rem;
  padding-left: 0.5rem;
}
.mega-menu-divider {
  height: 1px;
  background: var(--c-border);
  margin: 1rem 0;
}
.mega-menu-section + .mega-menu-divider + .mega-menu-section {
  margin-top: 0;
}
.mega-menu-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
}
.mega-menu-grid--3col {
  grid-template-columns: repeat(3, 1fr);
}
.mega-menu-grid--2col {
  grid-template-columns: repeat(2, 1fr);
}
.mega-menu-grid--1col {
  grid-template-columns: 1fr;
}
.mega-menu-card {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.375rem 0.5rem;
  border-radius: 0.625rem;
  text-decoration: none;
  transition: background 0.15s, transform 0.15s;
  border: 1px solid transparent;
}
.mega-menu-card:hover {
  background: var(--c-bg-subtle);
  border-color: var(--c-border);
  transform: translateY(-1px);
}
.mega-card-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.625rem;
  flex-shrink: 0;
}
.mega-card-icon svg {
  width: 20px;
  height: 20px;
}
.mega-card-icon--probe { background: linear-gradient(135deg, #dbeafe, #bfdbfe); color: #2563eb; }
.mega-card-icon--visor { background: linear-gradient(135deg, #dcfce7, #bbf7d0); color: #16a34a; }
.mega-card-icon--mermaid { background: linear-gradient(135deg, #fef3c7, #fde68a); color: #d97706; }
.mega-card-icon--goreplay { background: linear-gradient(135deg, #ffedd5, #fed7aa); color: #c2410c; }
.mega-card-icon--memory { background: linear-gradient(135deg, #f3e8ff, #e9d5ff); color: #9333ea; }
.mega-card-icon--leadership { background: linear-gradient(135deg, #dbeafe, #bfdbfe); color: #2563eb; }
.mega-card-icon--platform { background: linear-gradient(135deg, #dcfce7, #bbf7d0); color: #16a34a; }
.mega-card-icon--engineers { background: linear-gradient(135deg, #e0e7ff, #c7d2fe); color: #4f46e5; }
.mega-card-icon--support { background: linear-gradient(135deg, #fce7f3, #fbcfe8); color: #db2777; }
.mega-card-icon--agencies { background: linear-gradient(135deg, #fef3c7, #fde68a); color: #d97706; }
.mega-card-icon--enterprise { background: linear-gradient(135deg, #fee2e2, #fecaca); color: #dc2626; }
.mega-card-content { flex: 1; min-width: 0; }
.mega-card-title {
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--c-text);
  margin-bottom: 0.25rem;
}
.mega-card-desc {
  font-size: 0.8125rem;
  color: var(--c-text-muted);
  line-height: 1.5;
}

.nav-actions { display: flex; align-items: center; gap: 1rem; }
.nav-github { padding: 0.5rem; color: var(--c-text-subtle); transition: color 0.2s; text-decoration: none; display: flex; align-items: center; }
.nav-github:hover { color: var(--c-text); }
.nav-github svg { display: block; }
.nav-btn { padding: 0.5rem 1rem; font-size: 0.8125rem; font-weight: 600; color: white; background: var(--c-text); border-radius: 0.5rem; text-decoration: none; transition: all 0.2s; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
.nav-btn:hover { background: #1e293b; }
.nav-btn-mobile { display: none; padding: 0.5rem; background: transparent; border: none; color: var(--c-text); cursor: pointer; }
@media (max-width: 768px) {
  .nav-links { display: none; }
  .nav-github { display: none; }
  .nav-btn { display: none; }
  .nav-btn-mobile { display: flex; }
}

/* Mobile Menu */
.mobile-menu { position: absolute; top: 100%; left: 0; right: 0; background: white; border-bottom: 1px solid var(--c-border); padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem; box-shadow: 0 10px 15px rgba(0,0,0,0.1); }
.mobile-link { color: var(--c-text-muted); font-weight: 500; text-decoration: none; padding: 0.5rem 0; transition: color 0.2s; display: flex; align-items: center; }
.mobile-link:hover { color: var(--c-brand-600); }
.mobile-cta { width: 100%; padding: 0.75rem; text-align: center; background: var(--c-brand-600); color: white; font-weight: 700; border-radius: 0.5rem; text-decoration: none; }
.mobile-section { display: flex; flex-direction: column; gap: 0.25rem; }
.mobile-section-label { font-size: 0.6875rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: var(--c-text-subtle); padding: 0.5rem 0 0.25rem; }
.mobile-sublink { color: var(--c-text-muted); font-size: 0.875rem; font-weight: 500; text-decoration: none; padding: 0.375rem 0 0.375rem 0.75rem; border-left: 2px solid var(--c-border); transition: all 0.2s; }
.mobile-sublink:hover { color: var(--c-brand-600); border-left-color: var(--c-brand-600); }

/* Hero */
.hero { position: relative; padding: 7rem 1.5rem 4rem; overflow: hidden; background: var(--c-bg); }
.hero-bg { position: absolute; inset: 0; background: var(--c-bg-white); }
.hero-gradient { position: absolute; inset: 0; background: radial-gradient(circle at top right, var(--c-brand-50), white, white); }
.hero-grid { position: absolute; inset: 0; background-image: radial-gradient(#cbd5e1 1px, transparent 1px); background-size: 24px 24px; opacity: 0.4; }
.hero-container { position: relative; z-index: 10; max-width: 1200px; margin: 0 auto; display: flex; flex-direction: column; align-items: center; gap: 2rem; }
@media (min-width: 1024px) { .hero-container { flex-direction: row; gap: 3rem; } }

/* Stacked hero layout - full-width title above columns */
.hero-container--stacked { flex-direction: column; align-items: stretch; gap: 2rem; }
@media (min-width: 1024px) { .hero-container--stacked { flex-direction: column; gap: 2.5rem; } }
.hero-title--fullwidth { text-align: center; margin-bottom: 0; }
@media (min-width: 1024px) { .hero-title--fullwidth { text-align: left; } }
.hero-columns { display: flex; flex-direction: column; gap: 2rem; }
@media (min-width: 1024px) { .hero-columns { flex-direction: row; gap: 3rem; align-items: flex-start; } }
.hero-columns .hero-content { flex: 1; text-align: center; }
@media (min-width: 1024px) { .hero-columns .hero-content { text-align: left; } }
.hero-columns .hero-visual { flex: 1; }
.hero-subtitle { font-family: var(--font-display); font-size: 1.5rem; font-weight: 600; color: var(--c-text); margin: 0 0 1.25rem; line-height: 1.3; }
@media (min-width: 1024px) { .hero-subtitle { font-size: 1.75rem; } }
.hero-content { flex: 1; text-align: center; padding-top: 0; position: relative; z-index: 30; }
@media (min-width: 1024px) { .hero-content { text-align: left; } }
.hero-title { font-family: var(--font-display); font-size: clamp(2.25rem, 4.5vw, 3.75rem); font-weight: 700; line-height: 1.1; letter-spacing: -0.02em; color: var(--c-text); margin: 0 0 1.5rem; padding-top: 2rem; }
.hero-title-line { display: block; }
@media (min-width: 1024px) { .hero-title-line { white-space: normal; } }
.hero-title-brand { color: var(--c-brand-600); }
.hero-text { max-width: 720px; margin: 0 auto 2rem; }
@media (min-width: 1024px) { .hero-text { margin: 0 0 2rem; } }
.hero-text p { font-size: 1.125rem; color: var(--c-text-muted); line-height: 1.7; font-weight: 500; margin: 0 0 1.5rem; }
.hero-text strong { color: var(--c-text); font-weight: 600; }
.hero-bridge { font-weight: 600; color: var(--c-text); font-size: 1rem; margin-top: 0.5rem; }
.hero-micro { font-size: 0.875rem; color: var(--c-text-subtle); margin-top: 1rem; }
.hero-text-secondary { font-size: 1rem !important; color: var(--c-text-subtle) !important; padding-top: 0.5rem; }
.hero-link { color: var(--c-brand-600); font-weight: 700; text-decoration: none; transition: color 0.2s; }
.hero-link:hover { color: var(--c-brand-700); text-decoration: underline; }
.hero-cta { display: flex; flex-direction: column; gap: 1rem; width: 100%; }
@media (min-width: 640px) { .hero-cta { flex-direction: row; justify-content: center; width: auto; } }
@media (min-width: 1024px) { .hero-cta { justify-content: flex-start; } }
.btn { display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem; padding: 1rem 2rem; font-family: var(--font-body); font-size: 1rem; font-weight: 700; border-radius: 0.75rem; text-decoration: none; transition: all 0.2s; cursor: pointer; border: none; }
.btn-blue { color: white; background: var(--c-blue-500); box-shadow: 0 10px 15px rgba(59,130,246,0.2); }
.btn-blue:hover { background: var(--c-blue-600); box-shadow: 0 10px 15px rgba(59,130,246,0.3); }
.btn-outline { color: var(--c-text-muted); background: var(--c-bg-white); border: 1px solid var(--c-border); box-shadow: 0 1px 2px rgba(0,0,0,0.05); }
.btn-outline:hover { border-color: var(--c-border-hover); box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
.btn-arrow { font-size: 1.125rem; }

/* Hero Tagline */
.hero-tagline { font-size: 1.25rem; color: var(--c-text-muted); font-weight: 500; margin: 0; }
@media (min-width: 1024px) { .hero-tagline { font-size: 1.375rem; } }

/* Hero Checklist */
.hero-visual.hero-visual--checklist { height: auto; padding: 0; display: flex; flex-direction: column; align-items: center; justify-content: flex-start; }
@media (min-width: 1024px) { .hero-visual.hero-visual--checklist { height: auto; margin-left: 0; padding: 0; align-items: flex-start; justify-content: flex-start; } }
.hero-checklist-title { font-family: var(--font-display); font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: var(--c-text-subtle); margin: 0.5rem 0 1.25rem; }
.hero-checklist { display: flex; flex-direction: column; gap: 1rem; width: 100%; max-width: 480px; }
.hero-check-item { display: flex; align-items: flex-start; gap: 1rem; padding: 1.25rem 1.5rem; background: var(--c-bg-white); border: 1px solid var(--c-border); border-radius: 0.875rem; text-decoration: none; transition: all 0.2s; cursor: pointer; box-shadow: 0 2px 8px rgba(0,0,0,0.04); }
.hero-check-item:hover { border-color: var(--c-brand-400); box-shadow: 0 8px 20px rgba(34,197,94,0.12); transform: translateY(-3px); }
.hero-check-icon { flex-shrink: 0; width: 2rem; height: 2rem; background: var(--c-brand-100); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--c-brand-600); }
.hero-check-content { flex: 1; min-width: 0; }
.hero-check-content strong { display: block; font-size: 1.0625rem; font-weight: 700; color: var(--c-text); margin-bottom: 0.25rem; }
.hero-check-content span { display: block; font-size: 0.9375rem; color: var(--c-text-muted); line-height: 1.5; }
.hero-check-arrow { flex-shrink: 0; color: var(--c-text-subtle); font-size: 1.125rem; opacity: 0; transition: opacity 0.2s, transform 0.2s; }
.hero-check-item:hover .hero-check-arrow { opacity: 1; transform: translateX(2px); }

/* Hex Grid */
.hero-visual { flex: 1; position: relative; height: 350px; display: flex; align-items: center; justify-content: center; }
@media (min-width: 640px) { .hero-visual { height: 500px; } }
@media (min-width: 1024px) { .hero-visual { height: 650px; margin-left: -2rem; } }
.hero-visual-fade { position: absolute; inset: 0; pointer-events: none; z-index: 20; background: radial-gradient(circle at center, transparent 30%, white 100%); }
@media (min-width: 1024px) { .hero-visual-fade { background: radial-gradient(circle at center, transparent 60%, #f8fafc 100%); } }
.hex-grid { position: relative; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; transform: scale(0.45); transform-origin: center; }
@media (min-width: 640px) { .hex-grid { transform: scale(0.75); } }
@media (min-width: 768px) { .hex-grid { transform: scale(0.9); } }
@media (min-width: 1024px) { .hex-grid { transform: scale(1); } }
.hex { --size: 65px; --gap: 4px; --width: calc(1.732 * var(--size)); --height: calc(2 * var(--size)); position: absolute; width: var(--width); height: var(--height); left: 50%; top: 50%; transform: translate(calc(-50% + (var(--size) + var(--gap)/2) * (1.732 * var(--q) + 0.866 * var(--r))), calc(-50% + (var(--size) + var(--gap)/2) * 1.5 * var(--r))); transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); cursor: pointer; }
.hex:hover { transform: translate(calc(-50% + (var(--size) + var(--gap)/2) * (1.732 * var(--q) + 0.866 * var(--r))), calc(-50% + (var(--size) + var(--gap)/2) * 1.5 * var(--r))) scale(1.1); z-index: 50; }
.hex-inner { width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%); transition: all 0.3s ease; padding: 0.5rem; }
.hex-icon { width: 24px; height: 24px; margin-bottom: 2px; display: flex; align-items: center; justify-content: center; }
.hex-icon svg { width: 100%; height: 100%; }
.hex-label { font-size: 9px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; text-align: center; line-height: 1.2; }
.hex-sublabel { font-size: 7px; font-weight: 500; opacity: 0.9; margin-top: 2px; }
.hex-brand { background: var(--c-brand-500); color: var(--c-brand-50); }
.hex-purple { background: var(--c-purple-500); color: #faf5ff; }
.hex-blue { background: var(--c-blue-500); color: #eff6ff; }
.hex-amber { background: var(--c-amber-500); color: #fffbeb; }
.hex-emerald { background: var(--c-emerald-500); color: #ecfdf5; }
.hex-rose { background: var(--c-rose-500); color: #fff1f2; }
.hex-indigo { background: var(--c-indigo-500); color: #eef2ff; }
.hex-cyan { background: var(--c-cyan-500); color: #ecfeff; }
.hex-orange { background: var(--c-orange-500); color: #fff7ed; }
.hex-slate { background: #f1f5f9; color: var(--c-text-subtle); border: 1px solid var(--c-border); }
.hex-faded { opacity: 0.6; }
.hex-faded-more { opacity: 0.5; }
.hex-bg { opacity: 0.2; }
.hex-bg-more { opacity: 0.1; }
.hex-core .hex-inner { box-shadow: 0 0 30px rgba(34,197,94,0.4); }
.hex-core .hex-icon { width: 28px; height: 28px; }

/* Sections */
.section { padding: 6rem 0; position: relative; }
.section-header { text-align: center; margin-bottom: 4rem; }
.section-badge { display: inline-block; padding: 0.25rem 0.75rem; margin-bottom: 1rem; font-size: 0.75rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--c-brand-600); background: var(--c-brand-50); border-radius: 9999px; }
.section-title { font-size: clamp(1.75rem, 4vw, 2.5rem); font-weight: 700; letter-spacing: -0.02em; line-height: 1.3; margin: 0 0 1rem; color: var(--c-text); }
.section-desc { font-size: 1.125rem; color: var(--c-text-muted); max-width: 600px; margin: 0 auto; line-height: 1.7; }

/* Role Workbench Section */
.workbench { background: var(--c-bg-white); padding: 5rem 0; border-top: 1px solid var(--c-border); }
.workbench__header { max-width: 1200px; margin: 0 auto 3rem; padding: 0 1.5rem; }
.workbench__header h2 { font-family: var(--font-display); font-size: clamp(1.75rem, 4vw, 2.5rem); font-weight: 700; color: var(--c-text); margin: 0 0 0.75rem; line-height: 1.3; }
.workbench__header p { margin: 0 0 2rem; color: var(--c-text-muted); line-height: 1.6; font-size: 1.125rem; white-space: nowrap; }

.workbench__shell { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; }

/* Mobile role dropdown */
.workbench__mobile-select { display: block; position: relative; margin-bottom: 2rem; }
.role-select { width: 100%; appearance: none; background: var(--c-bg-white); border: 1px solid var(--c-border); border-radius: 0.5rem; padding: 1rem 2.5rem 1rem 1rem; font-family: var(--font-body); font-size: 1rem; font-weight: 600; color: var(--c-text); cursor: pointer; transition: all 0.2s; }
.role-select:hover { border-color: var(--c-brand-300); }
.role-select:focus { outline: none; border-color: var(--c-brand-500); box-shadow: 0 0 0 3px var(--c-brand-100); }
.role-select-arrow { position: absolute; right: 1rem; top: 50%; transform: translateY(-50%); color: var(--c-text-subtle); pointer-events: none; }
@media (min-width: 768px) { .workbench__mobile-select { display: none; } }

/* Desktop role tabs */
.workbench__roles { display: none; gap: 0.5rem; margin-bottom: 2.5rem; }
@media (min-width: 768px) { .workbench__roles { display: flex; } }

.role-tab { background: transparent; border: none; border-bottom: 2px solid transparent; border-radius: 0; padding: 0.75rem 1.25rem; min-width: auto; text-align: left; cursor: pointer; transition: all 0.2s; flex-shrink: 0; }
.role-tab:hover { border-bottom-color: var(--c-border-hover); }
.role-tab.is-active { border-bottom-color: var(--c-brand-500); }
.role-tab__title { display: block; font-weight: 600; font-size: 1.0625rem; color: var(--c-text-muted); margin-bottom: 0.125rem; white-space: nowrap; }
.role-tab__subtitle { display: block; color: var(--c-text-subtle); font-size: 0.75rem; line-height: 1.3; max-width: 25ch; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.role-tab.is-active .role-tab__title { color: var(--c-text); }
.role-tab.is-active .role-tab__subtitle { color: var(--c-text-muted); }

.workbench__panel { }
.role-panel__head { margin-bottom: 2rem; }
.role-panel__head h3 { margin: 0 0 0.5rem; font-size: 1.5rem; font-weight: 700; color: var(--c-text); }
.role-panel__oneLiner { margin: 0; color: var(--c-text-muted); line-height: 1.6; font-size: 1.125rem; max-width: 800px; }

.role-panel__content { display: grid; grid-template-columns: 1fr; gap: 2rem; align-items: start; }
@media (min-width: 768px) { .role-panel__content { grid-template-columns: 1fr 1fr; align-items: stretch; } }

.block { margin-bottom: 0; display: flex; flex-direction: column; }
.block--full { grid-column: 1 / -1; margin-left: 0; margin-right: 0; }
.block h4 { margin: 0 0 0.75rem; font-size: 0.8125rem; letter-spacing: 0.03em; text-transform: uppercase; color: var(--c-text-subtle); font-weight: 700; }
.block ul { margin: 0; padding-left: 1.25rem; color: var(--c-text-muted); line-height: 1.6; font-size: 1rem; }
.block ul li { margin-bottom: 0.75rem; }
.block ul li:last-child { margin-bottom: 0; }
.block ul li strong { color: var(--c-text); font-weight: 600; }

.workflow-list { padding: 0 !important; margin: 0 !important; list-style: none; display: grid; grid-template-columns: 1fr; gap: 0.75rem; }
@media (min-width: 768px) { .workflow-list { grid-template-columns: 1fr 1fr; grid-auto-rows: 1fr; } }
.workflow-list li { margin: 0 !important; padding: 0 !important; display: flex; }
.workflow-link { display: flex; align-items: center; padding: 0.875rem 1rem; background: var(--c-bg-subtle); border: 1px solid var(--c-border); border-radius: 0.5rem; color: var(--c-text); text-decoration: none; font-weight: 500; line-height: 1.5; transition: all 0.2s; width: 100%; }
.workflow-link:hover { border-color: var(--c-brand-300); background: var(--c-bg-white); color: var(--c-brand-600); }

.cta-row { display: flex; gap: 0.75rem; flex-wrap: wrap; margin-top: 2rem; grid-column: 1 / -1; }
.btn-workbench-primary { display: inline-block; padding: 0.75rem 1.5rem; border-radius: 0.5rem; border: none; background: var(--c-brand-500); color: white; text-decoration: none; font-weight: 600; font-size: 0.9375rem; transition: all 0.2s; }
.btn-workbench-primary:hover { background: var(--c-brand-600); }
.btn-workbench-ghost { display: inline-block; padding: 0.75rem 1.5rem; border-radius: 0.5rem; border: 1px solid var(--c-border); background: transparent; color: var(--c-text-muted); text-decoration: none; font-weight: 600; font-size: 0.9375rem; transition: all 0.2s; }
.btn-workbench-ghost:hover { border-color: var(--c-text-subtle); color: var(--c-text); }

/* Quick Wins Section */
.section-quickwins { background: var(--c-text); padding: 6rem 0; }
.quickwins-header { max-width: 600px; margin: 0 auto 2.5rem; text-align: center; }
.quickwins-header h2 { font-family: var(--font-display); font-size: clamp(2rem, 4vw, 2.75rem); font-weight: 700; color: white; margin: 0 0 1rem; letter-spacing: -0.02em; line-height: 1.3; }
.quickwins-header p { font-size: 1.125rem; color: #94a3b8; line-height: 1.6; margin: 0; }

/* Quick Win Tabs */
.quickwin-tabs { display: flex; gap: 0.5rem; margin-bottom: 2rem; flex-wrap: wrap; }
@media (min-width: 768px) { .quickwin-tabs { gap: 0.75rem; } }
.quickwin-tab { display: flex; align-items: center; gap: 0.75rem; padding: 0.875rem 1.25rem; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 0.75rem; cursor: pointer; transition: all 0.2s; flex: 1; min-width: 0; }
@media (min-width: 768px) { .quickwin-tab { flex: none; } }
.quickwin-tab:hover { background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.15); }
.quickwin-tab.is-active { background: #1e293b; border-color: var(--c-brand-500); }
.quickwin-tab__number { width: 1.75rem; height: 1.75rem; border-radius: 9999px; background: rgba(255,255,255,0.1); color: #94a3b8; font-weight: 700; font-size: 0.8125rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.quickwin-tab.is-active .quickwin-tab__number { background: var(--c-brand-500); color: white; }
.quickwin-tab__title { font-weight: 600; font-size: 0.9375rem; color: #94a3b8; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.quickwin-tab.is-active .quickwin-tab__title { color: white; }
.quickwin-tab__time { display: none; padding: 0.125rem 0.5rem; background: rgba(255,255,255,0.08); border-radius: 9999px; font-size: 0.6875rem; font-weight: 600; color: #64748b; margin-left: auto; }
@media (min-width: 768px) { .quickwin-tab__time { display: block; } }
.quickwin-tab.is-active .quickwin-tab__time { color: #94a3b8; }

/* Quick Win Block */
.quickwin-block { display: flex; flex-direction: column; gap: 1.5rem; background: #1e293b; border: 1px solid #334155; border-radius: 1rem; padding: 2rem; transition: all 0.3s; }
@media (min-width: 768px) { .quickwin-block { flex-direction: row; gap: 3rem; padding: 2.5rem; } }

.quickwin-block__left { flex: 1; display: flex; flex-direction: column; }
.quickwin-block h3 { font-size: 1.375rem; font-weight: 700; color: white; margin: 0 0 0.75rem; line-height: 1.3; }
.quickwin-block__left > p { font-size: 1rem; color: #94a3b8; line-height: 1.7; margin: 0 0 1.25rem; }
.quickwin-block__result { padding: 1rem 1.25rem; background: rgba(34,197,94,0.08); border: 1px solid rgba(34,197,94,0.2); border-radius: 0.5rem; font-size: 0.9375rem; color: #cbd5e1; line-height: 1.6; margin-bottom: 1rem; }
.quickwin-block__result strong { color: var(--c-brand-400); }
.quickwin-block__result code { padding: 0.125rem 0.375rem; background: rgba(0,0,0,0.3); border-radius: 0.25rem; font-family: var(--font-mono); font-size: 0.8125rem; color: #e2e8f0; }
.quickwin-block__link { font-size: 0.9375rem; font-weight: 600; color: white; text-decoration: none; transition: opacity 0.2s; margin-top: auto; }
.quickwin-block__link:hover { opacity: 0.8; }

.quickwin-block__right { flex-shrink: 0; width: 100%; }
@media (min-width: 768px) { .quickwin-block__right { width: 400px; } }
@media (min-width: 1024px) { .quickwin-block__right { width: 480px; } }

.quickwin-code { border-radius: 0.5rem; overflow: hidden; background: #0f172a; border: 1px solid #1e293b; }
.quickwin-code__label { padding: 0.5rem 1rem; background: rgba(255,255,255,0.03); border-bottom: 1px solid #1e293b; font-size: 0.6875rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; }
.quickwin-code__body { position: relative; }
.quickwin-code pre { margin: 0; padding: 1rem 1.25rem; padding-right: 3rem; overflow-x: auto; }
.quickwin-code code { font-family: var(--font-mono); font-size: 0.8125rem; line-height: 1.7; color: #e2e8f0; white-space: pre; }
.quickwin-code__copy { position: absolute; top: 0.625rem; right: 0.625rem; width: 2rem; height: 2rem; display: flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 0.375rem; color: #64748b; cursor: pointer; transition: all 0.2s; }
.quickwin-code__copy:hover { background: rgba(255,255,255,0.1); color: #94a3b8; }
.quickwin-code__copy svg { display: block; }

/* Stacked code blocks */
.quickwin-code-stack { display: flex; flex-direction: column; gap: 1rem; }

/* Tabbed code block */
.quickwin-code--tabbed { }
.quickwin-code__tabs { display: flex; flex-wrap: wrap; gap: 0; background: rgba(255,255,255,0.03); border-bottom: 1px solid #1e293b; }
.quickwin-code__tab { padding: 0.625rem 1rem; background: transparent; border: none; border-bottom: 2px solid transparent; font-family: var(--font-body); font-size: 0.8125rem; font-weight: 500; color: #64748b; cursor: pointer; transition: all 0.2s; margin-bottom: -1px; }
.quickwin-code__tab:hover { color: #94a3b8; }
.quickwin-code__tab.is-active { color: var(--c-brand-400); border-bottom-color: var(--c-brand-500); background: rgba(34,197,94,0.05); }
.quickwin-code__tab-desc { display: block; font-size: 0.625rem; color: #64748b; font-weight: 400; margin-top: 0.125rem; }
.quickwin-code__tab.is-active .quickwin-code__tab-desc { color: var(--c-brand-400); }

/* Probe Setup Stacked Sections */
.quickwin-probe-setup { display: flex; flex-direction: column; gap: 1.5rem; }
.probe-section { }
.probe-section__title { font-size: 0.8125rem; font-weight: 600; color: #94a3b8; margin: 0 0 0.625rem; display: flex; align-items: center; gap: 0.5rem; }
.probe-section__badge { font-size: 0.625rem; font-weight: 500; color: var(--c-brand-400); background: rgba(34,197,94,0.15); padding: 0.125rem 0.5rem; border-radius: 9999px; }
.probe-section__hint { font-size: 0.6875rem; font-weight: 400; color: #64748b; font-style: italic; }

/* How It Works Section */
.section-how { background: var(--c-bg); border-top: 1px solid var(--c-border); padding: 6rem 0; }

/* How Header */
.how-header { max-width: 720px; margin: 0 auto 4rem; text-align: center; }
.how-header h2 { font-family: var(--font-display); font-size: clamp(2rem, 4vw, 2.75rem); font-weight: 700; color: var(--c-text); margin: 0 0 1.25rem; letter-spacing: -0.02em; line-height: 1.3; }
.how-header > p { font-size: 1.125rem; color: var(--c-text-muted); line-height: 1.7; margin: 0 0 2rem; }

/* Flow Text */
.how-flow-text { display: flex; align-items: center; justify-content: center; flex-wrap: wrap; gap: 0.5rem; font-size: 0.9375rem; font-weight: 500; color: var(--c-text-muted); }
@media (min-width: 640px) { .how-flow-text { gap: 0.75rem; font-size: 1rem; } }
.flow-item { padding: 0.375rem 0.75rem; background: var(--c-bg-subtle); border-radius: 0.375rem; color: var(--c-text-muted); }
.flow-item--highlight { background: var(--c-brand-50); color: var(--c-brand-700); font-weight: 600; }
.flow-sep { color: var(--c-text-subtle); }

/* Step Cards - 2 column layout */
.steps-grid { display: grid; grid-template-columns: 1fr; gap: 2rem; margin-bottom: 4rem; }
@media (min-width: 768px) { .steps-grid { grid-template-columns: repeat(2, 1fr); gap: 2.5rem; } }

.step-card { padding: 2rem 2.5rem; border-radius: 1rem; background: var(--c-bg-white); border: 1px solid var(--c-border); transition: all 0.3s; display: flex; flex-direction: column; }
.step-card:hover { border-color: var(--c-brand-200); box-shadow: 0 8px 24px rgba(0,0,0,0.04); }
.step-card__head { display: flex; align-items: flex-start; gap: 1rem; margin-bottom: 1.25rem; }
.step-card__number { flex-shrink: 0; width: 2.25rem; height: 2.25rem; border-radius: 9999px; background: var(--c-brand-500); color: white; font-weight: 700; font-size: 1rem; display: flex; align-items: center; justify-content: center; }
.step-card__head h3 { font-size: 1.25rem; font-weight: 700; color: var(--c-text); margin: 0; line-height: 1.35; padding-top: 0.125rem; }
.step-card > p { font-size: 1rem; color: var(--c-text-muted); line-height: 1.7; margin: 0; flex: 1; }
.step-card__footer { margin-top: 1.5rem; padding-top: 1.25rem; border-top: 1px solid var(--c-border); font-size: 0.9375rem; color: var(--c-text-muted); line-height: 1.5; }
.step-card__footer strong { color: var(--c-brand-600); font-weight: 600; }

/* Callout Boxes */
.callouts-row { display: grid; grid-template-columns: 1fr; gap: 1.5rem; margin-bottom: 3.5rem; }
@media (min-width: 768px) { .callouts-row { grid-template-columns: repeat(2, 1fr); gap: 2rem; } }
.callout-box { padding: 2rem 2.5rem; border-radius: 1rem; background: var(--c-bg-white); border: 1px solid var(--c-border); }
.callout-box h4 { font-size: 1.125rem; font-weight: 700; color: var(--c-text); margin: 0 0 0.75rem; }
.callout-box p { font-size: 1rem; color: var(--c-text-muted); margin: 0; line-height: 1.7; }

/* How CTA */
.how-cta { display: flex; flex-direction: column; gap: 1rem; align-items: center; }
@media (min-width: 640px) { .how-cta { flex-direction: row; justify-content: center; } }

/* The Problem Section */
.section-problem { background: var(--c-bg-white); border-top: 1px solid var(--c-border); padding: 6rem 0; }

.problem-header { max-width: 800px; margin: 0 auto 4rem; text-align: center; }
.problem-header h2 { font-family: var(--font-display); font-size: clamp(1.75rem, 4vw, 2.5rem); font-weight: 700; color: var(--c-text); margin: 0 0 1.5rem; letter-spacing: -0.02em; line-height: 1.2; }
.problem-subhead { font-size: 1.125rem; color: var(--c-text-muted); line-height: 1.7; margin: 0; }

/* Two-Column Grid */
.problem-grid { display: grid; grid-template-columns: 1fr; gap: 2rem; margin-bottom: 4rem; }
@media (min-width: 768px) { .problem-grid { grid-template-columns: 1fr 1fr; } }

.problem-card { padding: 2rem; border-radius: 1rem; }
.problem-card--bad { background: #fef2f2; border: 1px solid #fecaca; }
.problem-card--why { background: #fffbeb; border: 1px solid #fde68a; }

.problem-card__label { font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 1.25rem; }
.problem-card__label-note { font-weight: 500; text-transform: none; letter-spacing: 0; opacity: 0.85; }
.problem-card--bad .problem-card__label { color: #dc2626; }
.problem-card--why .problem-card__label { color: #d97706; }

.problem-card__list { list-style: none; margin: 0 0 1.5rem; padding: 0; }
.problem-card__list li { position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem; font-size: 0.9375rem; color: var(--c-text-muted); line-height: 1.5; }
.problem-card__list li::before { content: ''; position: absolute; left: 0; top: 0.5rem; width: 6px; height: 6px; border-radius: 50%; }
.problem-card--bad .problem-card__list li::before { background: #ef4444; }
.problem-card--why .problem-card__list li::before { background: #f59e0b; }

.problem-card__callout { font-size: 0.875rem; font-style: italic; color: #991b1b; padding-top: 1rem; border-top: 1px solid #fecaca; }
.problem-card__punch { font-size: 0.9375rem; font-weight: 600; color: #92400e; padding-top: 1rem; border-top: 1px solid #fde68a; }

/* Solution Section */
.problem-solution { background: var(--c-brand-50); border: 1px solid var(--c-brand-200); border-radius: 1rem; padding: 2.5rem; }
.problem-solution__title { font-family: var(--font-display); font-size: 1.5rem; font-weight: 700; color: var(--c-text); margin: 0 0 0.75rem; text-align: center; }
.problem-solution__intro { font-size: 1.0625rem; color: var(--c-text-muted); text-align: center; max-width: 640px; margin: 0 auto 2.5rem; line-height: 1.6; }

/* Probe Features Grid */
.probe-features { display: grid; grid-template-columns: 1fr; gap: 1.5rem; margin-bottom: 2rem; }
@media (min-width: 768px) { .probe-features { grid-template-columns: 1fr 1fr; } }

.probe-feature { display: flex; gap: 1rem; padding: 1.25rem; background: var(--c-bg-white); border: 1px solid var(--c-border); border-radius: 0.75rem; }
.probe-feature__icon { width: 2.5rem; height: 2.5rem; flex-shrink: 0; background: var(--c-brand-100); border-radius: 0.5rem; display: flex; align-items: center; justify-content: center; color: var(--c-brand-600); }
.probe-feature__icon svg { width: 1.25rem; height: 1.25rem; }
.probe-feature__content h4 { font-size: 1rem; font-weight: 700; color: var(--c-text); margin: 0 0 0.375rem; }
.probe-feature__content p { font-size: 0.875rem; color: var(--c-text-muted); margin: 0; line-height: 1.5; }

/* Scale callout */
.probe-scale { background: var(--c-bg-white); border: 1px solid var(--c-border); border-left: 3px solid var(--c-brand-500); border-radius: 0.5rem; padding: 1.25rem 1.5rem; margin-bottom: 2rem; }
.probe-scale h4 { font-size: 1rem; font-weight: 700; color: var(--c-text); margin: 0 0 0.5rem; }
.probe-scale p { font-size: 0.9375rem; color: var(--c-text-muted); margin: 0; line-height: 1.6; }

.problem-solution__cta { display: flex; flex-direction: column; gap: 1rem; align-items: center; }
@media (min-width: 640px) { .problem-solution__cta { flex-direction: row; justify-content: center; } }

/* Testimonials Section */
.section-testimonials {
  background: var(--c-bg-white);
  border-top: 1px solid var(--c-border);
  padding: 6rem 0;
}

.testimonials-header {
  max-width: 720px;
  margin: 0 auto 3rem;
  text-align: center;
}

.testimonials-header .section-badge {
  margin-bottom: 0.75rem;
}

.testimonials-header h2 {
  font-family: var(--font-display);
  font-size: clamp(1.4rem, 3.2vw, 2.25rem);
  font-weight: 700;
  color: var(--c-text);
  margin: 0 0 1rem;
  letter-spacing: -0.02em;
  line-height: 1.3;
  white-space: nowrap;
}

.testimonials-header p {
  font-size: 1.0625rem;
  color: var(--c-text-muted);
  line-height: 1.7;
  margin: 0;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}
@media (min-width: 1024px) {
  .testimonials-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
  }
}

.testimonial-card {
  position: relative;
  background: var(--c-bg-white);
  border: 1px solid var(--c-border);
  border-radius: 1.25rem;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  box-shadow: 0 12px 32px rgba(15, 23, 42, 0.08);
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.testimonial-card::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--c-brand-500), var(--c-blue-500));
}

.testimonial-card:hover {
  transform: translateY(-4px);
  border-color: var(--c-brand-200);
  box-shadow: 0 18px 44px rgba(15, 23, 42, 0.12);
}

.testimonial-body {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.testimonial-quote {
  margin: 0;
  font-size: 1rem;
  line-height: 1.75;
  color: var(--c-text);
}

.testimonial-quote::before {
  content: '“';
  display: block;
  font-size: 2.25rem;
  line-height: 1;
  color: var(--c-brand-400);
  margin-bottom: 0.75rem;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.testimonial-author__name {
  font-weight: 700;
  color: var(--c-text);
  font-size: 1rem;
}

.testimonial-author__role {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--c-brand-700);
  background: var(--c-brand-50);
  border: 1px solid var(--c-brand-200);
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
}

/* ========================================
   Demo Booking Section
   ======================================== */
.section-demo-booking {
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%);
  padding: 6rem 0;
  border-top: 1px solid var(--c-border);
}

.demo-booking-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: start;
}
@media (min-width: 1024px) {
  .demo-booking-grid {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
}

.demo-booking-left {}

.demo-booking-title {
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  line-height: 1.2;
  color: var(--c-text);
  margin: 0 0 1.5rem;
}

.demo-booking-intro {
  font-size: 1.125rem;
  color: var(--c-text-muted);
  line-height: 1.7;
  margin: 0 0 2rem;
}

.demo-booking-expect-title {
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 700;
  color: var(--c-text);
  margin: 0 0 1.25rem;
}

.demo-booking-list {
  list-style: none;
  counter-reset: demo-list;
  margin: 0;
  padding: 0;
}

.demo-booking-list li {
  counter-increment: demo-list;
  position: relative;
  padding-left: 2.5rem;
  margin-bottom: 1.25rem;
}

.demo-booking-list li::before {
  content: counter(demo-list);
  position: absolute;
  left: 0;
  top: 0;
  width: 1.75rem;
  height: 1.75rem;
  background: var(--c-brand-100);
  color: var(--c-brand-700);
  border-radius: 50%;
  font-size: 0.8125rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}

.demo-booking-list li strong {
  display: block;
  font-size: 1rem;
  font-weight: 700;
  color: var(--c-text);
  margin-bottom: 0.25rem;
}

.demo-booking-list li span {
  font-size: 0.9375rem;
  color: var(--c-text-muted);
  line-height: 1.5;
}

/* Form Card */
.demo-booking-form-card {
  background: var(--c-bg-white);
  border: 1px solid var(--c-border);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
}

.demo-form-title {
  font-family: var(--font-display);
  font-size: 1.375rem;
  font-weight: 700;
  color: var(--c-text);
  margin: 0 0 0.5rem;
  text-align: center;
}

.demo-form-subtitle {
  font-size: 0.9375rem;
  color: var(--c-text-muted);
  text-align: center;
  margin: 0 0 1.5rem;
}

.demo-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.demo-form-field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.demo-form-field label {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--c-text);
}

.demo-form-field input,
.demo-form-field select,
.demo-form-field textarea {
  padding: 0.875rem 1rem;
  border: 1px solid var(--c-border);
  border-radius: 0.5rem;
  font-family: var(--font-body);
  font-size: 1rem;
  color: var(--c-text);
  background: var(--c-bg-white);
  transition: border-color 0.2s, box-shadow 0.2s;
}

.demo-form-field input:focus,
.demo-form-field select:focus,
.demo-form-field textarea:focus {
  outline: none;
  border-color: var(--c-brand-400);
  box-shadow: 0 0 0 3px var(--c-brand-100);
}

.demo-form-field input::placeholder,
.demo-form-field textarea::placeholder {
  color: var(--c-text-subtle);
}

.demo-form-field select {
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  padding-right: 2.5rem;
}

.demo-form-field textarea {
  resize: vertical;
  min-height: 160px;
}

.demo-form-submit {
  width: 100%;
  padding: 1rem 2rem;
  background: var(--c-brand-600);
  color: white;
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 700;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background 0.2s, box-shadow 0.2s;
  box-shadow: 0 4px 12px rgba(34,197,94,0.25);
}

.demo-form-submit:hover {
  background: var(--c-brand-700);
  box-shadow: 0 6px 16px rgba(34,197,94,0.35);
}

/* ========================================
   Visor Section
   ======================================== */
.section-visor {
  background: var(--c-bg-subtle);
  border-top: 1px solid var(--c-border);
  padding: 6rem 0;
}

/* Visor Header */
.visor-header {
  max-width: 900px;
  margin: 0 auto 4rem;
  text-align: center;
}

.visor-header h2 {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 700;
  color: var(--c-text);
  margin: 0 0 1.25rem;
  letter-spacing: -0.02em;
  line-height: 1.3;
}

.visor-subhead {
  font-size: 1.125rem;
  color: var(--c-text-muted);
  line-height: 1.7;
  margin: 0 0 2rem;
}

/* Badge Row */
.visor-badges {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.visor-badge {
  display: inline-flex;
  align-items: center;
  padding: 0.375rem 0.875rem;
  background: var(--c-bg-white);
  border: 1px solid var(--c-border);
  border-radius: 9999px;
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--c-text-muted);
}

/* Visor Section Title */
.visor-section-title {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--c-text);
  text-align: center;
  margin: 0 0 2rem;
}

/* Visor Features Grid */
.visor-features-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 3rem;
}
@media (min-width: 768px) {
  .visor-features-grid {
    grid-template-columns: 1fr 1fr;
  }
}
@media (min-width: 1024px) {
  .visor-features-grid {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

.visor-feature-card {
  background: var(--c-bg-white);
  border: 1px solid var(--c-border);
  border-radius: 0.75rem;
  padding: 1.5rem;
  transition: all 0.2s ease;
}

.visor-feature-card:hover {
  border-color: var(--c-brand-300);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.visor-feature-card h4 {
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 700;
  color: var(--c-text);
  margin: 0 0 0.5rem;
}

.visor-feature-card p {
  font-size: 0.9375rem;
  color: var(--c-text-muted);
  line-height: 1.6;
  margin: 0;
}

/* Visor CTAs */
.visor-cta {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}
@media (min-width: 640px) {
  .visor-cta {
    flex-direction: row;
    justify-content: center;
  }
}

/* Pathway Section */
.section-pathway { background: var(--c-bg-white); border-top: 1px solid var(--c-border); padding: 6rem 0; }
.pathway-header { text-align: center; max-width: 800px; margin: 0 auto 3rem; }
.pathway-title { font-size: clamp(1.75rem, 4vw, 2.5rem); font-weight: 700; color: var(--c-text); margin: 0 0 1rem; line-height: 1.2; }
.pathway-subtitle { font-size: 1.125rem; color: var(--c-text-muted); margin: 0; max-width: 700px; margin: 0 auto; line-height: 1.7; }
.pathway-grid { display: grid; grid-template-columns: 1fr; gap: 1.25rem; margin-bottom: 2rem; }
@media (min-width: 640px) { .pathway-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .pathway-grid { grid-template-columns: repeat(3, 1fr); } }
.pathway-tile { padding: 1.5rem; border-radius: 0.75rem; background: var(--c-bg-subtle); border: 1px solid var(--c-border); text-decoration: none; transition: all 0.3s; display: block; }
.pathway-tile:hover { border-color: var(--c-brand-300); box-shadow: 0 8px 20px rgba(0,0,0,0.06); transform: translateY(-2px); }
.pathway-tile h3 { font-size: 1rem; font-weight: 700; color: var(--c-text); margin: 0 0 0.5rem; }
.pathway-tile p { font-size: 0.875rem; color: var(--c-text-muted); margin: 0 0 1rem; line-height: 1.6; }
.pathway-link { font-size: 0.8125rem; font-weight: 600; color: var(--c-brand-600); display: flex; align-items: center; gap: 0.25rem; }
.pathway-link .arrow { transition: transform 0.2s; }
.pathway-tile:hover .pathway-link .arrow { transform: translateX(3px); }
.pathway-browse { text-align: center; font-size: 0.9375rem; color: var(--c-text-muted); margin: 0 0 2rem; }
.pathway-browse a { color: var(--c-brand-600); font-weight: 500; text-decoration: none; }
.pathway-browse a:hover { text-decoration: underline; }
.pathway-badges { display: flex; justify-content: center; gap: 0.75rem; flex-wrap: wrap; }
.infra-badge { font-size: 0.75rem; font-weight: 600; color: var(--c-text-subtle); padding: 0.375rem 0.875rem; background: var(--c-bg); border: 1px solid var(--c-border); border-radius: 9999px; }

/* Security & Governance Section */
.section-security { background: var(--c-bg); border-top: 1px solid var(--c-border); padding: 6rem 0; }
.security-header { text-align: center; max-width: 800px; margin: 0 auto 3rem; }
.security-title { font-size: clamp(1.75rem, 4vw, 2.5rem); font-weight: 700; color: var(--c-text); margin: 0 0 1rem; line-height: 1.2; }
.security-subtitle { font-size: 1.125rem; color: var(--c-text-muted); margin: 0; line-height: 1.7; }
.security-grid { display: grid; grid-template-columns: 1fr; gap: 2rem; max-width: 1000px; margin: 0 auto 2rem; }
@media (min-width: 768px) { .security-grid { grid-template-columns: repeat(2, 1fr); } }
.security-col { padding: 2rem; background: var(--c-bg-white); border: 1px solid var(--c-border); border-radius: 1rem; }
.security-col h3 { font-size: 1.25rem; font-weight: 700; color: var(--c-text); margin: 0 0 1.25rem; padding-bottom: 0.75rem; border-bottom: 2px solid var(--c-brand-500); }
.security-col ul { list-style: none; padding: 0; margin: 0; }
.security-col li { font-size: 0.9375rem; color: var(--c-text-muted); line-height: 1.6; padding: 0.5rem 0; padding-left: 1.25rem; position: relative; }
.security-col li::before { content: ''; position: absolute; left: 0; top: 0.875rem; width: 6px; height: 6px; background: var(--c-brand-500); border-radius: 50%; }
.security-col li strong { color: var(--c-text); font-weight: 600; }
.security-lockin { text-align: center; font-size: 1rem; font-weight: 500; color: var(--c-text); margin: 0 0 2rem; padding: 1rem 1.5rem; background: var(--c-brand-50); border: 1px solid var(--c-brand-200); border-radius: 0.5rem; max-width: 600px; margin: 0 auto 2rem; }
.security-cta { display: flex; justify-content: center; }

/* Final CTA Section */
.section-finalcta { background: var(--c-bg-white); border-top: 1px solid var(--c-border); padding: 6rem 0; }
.finalcta-card { max-width: 800px; margin: 0 auto; text-align: center; padding: 3rem; background: linear-gradient(135deg, var(--c-brand-50) 0%, rgba(22, 163, 74, 0.05) 100%); border: 1px solid var(--c-brand-200); border-radius: 1.5rem; }
.finalcta-card h2 { font-size: clamp(1.5rem, 3vw, 2rem); font-weight: 700; color: var(--c-text); margin: 0 0 1rem; line-height: 1.3; }
.finalcta-card > p { font-size: 1.0625rem; color: var(--c-text-muted); margin: 0 0 2rem; line-height: 1.7; max-width: 600px; margin-left: auto; margin-right: auto; margin-bottom: 2rem; }
.finalcta-buttons { display: flex; flex-direction: column; gap: 1rem; justify-content: center; margin-bottom: 1.5rem; }
@media (min-width: 480px) { .finalcta-buttons { flex-direction: row; } }
.finalcta-micro { font-size: 0.875rem; color: var(--c-text-subtle); font-style: italic; margin: 0 0 2rem; }
.finalcta-demo-preview { text-align: left; padding: 1.25rem 1.5rem; background: var(--c-bg-white); border: 1px solid var(--c-border); border-radius: 0.75rem; max-width: 400px; margin: 0 auto; }
.finalcta-demo-preview > span { font-size: 0.8125rem; font-weight: 600; color: var(--c-text); display: block; margin-bottom: 0.75rem; }
.finalcta-demo-preview ul { list-style: none; padding: 0; margin: 0; }
.finalcta-demo-preview li { font-size: 0.8125rem; color: var(--c-text-muted); padding: 0.25rem 0; padding-left: 1rem; position: relative; }
.finalcta-demo-preview li::before { content: '•'; position: absolute; left: 0; color: var(--c-brand-500); }

/* FAQ Section */
.section-faq { background: var(--c-bg); border-top: 1px solid var(--c-border); padding: 6rem 0; }
.faq-header { text-align: center; margin-bottom: 3rem; }
.faq-header h2 { font-size: clamp(1.75rem, 4vw, 2.5rem); font-weight: 700; color: var(--c-text); margin: 0; }
.faq-grid { display: grid; grid-template-columns: 1fr; gap: 1.25rem; max-width: 900px; margin: 0 auto; }
@media (min-width: 768px) { .faq-grid { grid-template-columns: repeat(2, 1fr); } }
.faq-card { padding: 1.5rem; background: var(--c-bg-white); border: 1px solid var(--c-border); border-radius: 0.75rem; }
.faq-card h3 { font-size: 1rem; font-weight: 600; color: var(--c-text); margin: 0 0 0.75rem; line-height: 1.4; }
.faq-card p { font-size: 0.9375rem; color: var(--c-text-muted); margin: 0; line-height: 1.6; }

/* Footer */
.footer { background: var(--c-text); color: var(--c-text-subtle); padding: 4rem 0 2rem; border-top: 1px solid #1e293b; position: relative; z-index: 100; }
.footer-grid { display: grid; grid-template-columns: 1fr; gap: 2.5rem; margin-bottom: 3rem; }
@media (min-width: 768px) { .footer-grid { grid-template-columns: 2fr 1fr 1fr 1fr 1fr; gap: 3rem; } }
.footer-brand-col { }
.footer-brand-name { font-family: var(--font-display); font-size: 1.5rem; font-weight: 700; color: white; display: block; margin-bottom: 0.75rem; }
.footer-tagline { font-size: 0.875rem; color: #94a3b8; margin: 0 0 1.25rem; line-height: 1.5; }
.footer-social { display: flex; gap: 1rem; }
.footer-social a { color: #64748b; transition: color 0.2s; }
.footer-social a:hover { color: white; }
.footer-email { display: block; margin-top: 1rem; font-size: 0.875rem; color: #94a3b8; text-decoration: none; transition: color 0.2s; }
.footer-email:hover { color: white; }
.footer-col h4 { font-size: 0.8125rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: white; margin: 0 0 1rem; }
.footer-col ul { list-style: none; padding: 0; margin: 0; }
.footer-col li { margin-bottom: 0.625rem; }
.footer-col a { font-size: 0.9375rem; color: #94a3b8; text-decoration: none; transition: color 0.2s; }
.footer-col a:hover { color: white; }
.footer-bottom { display: flex; flex-direction: column; gap: 1rem; padding-top: 2rem; border-top: 1px solid #1e293b; text-align: center; }
@media (min-width: 768px) { .footer-bottom { flex-direction: row; justify-content: space-between; align-items: center; text-align: left; } }
.footer-copy { font-size: 0.875rem; color: #64748b; }
.footer-legal { display: flex; gap: 1.5rem; }
.footer-legal a { font-size: 0.875rem; color: #64748b; text-decoration: none; transition: color 0.2s; }
.footer-legal a:hover { color: white; }
</style>
