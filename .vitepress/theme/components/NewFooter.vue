<template>
  <footer class="nh-footer">
    <div class="nh-footer-grid">
      <div class="nh-footer-brand">
        <span class="nh-footer-brand-name">ProbeLabs</span>
        <p class="nh-footer-tagline">The Operating System for Agentic Engineering</p>
        <div class="nh-footer-social">
          <a href="https://github.com/probelabs" target="_blank" aria-label="GitHub">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          </a>
        </div>
        <a href="mailto:hello@probelabs.com" class="nh-footer-email">hello@probelabs.com</a>
      </div>
      <div class="nh-footer-col">
        <h4>Platform</h4>
        <ul>
          <li><a href="/probe">Probe</a></li>
          <li><a href="/visor">Visor</a></li>
          <li><a href="/maid">Maid</a></li>
          <li><a href="https://goreplay.org">GoReplay</a></li>
          <li><a href="/big-brain">Big Brain</a></li>
          <li><a href="/afk">AFK</a></li>
          <li><a href="/vow">Vow</a></li>
          <li><a href="/memaris">Memaris</a></li>
          <li><a href="/logoscope">Logoscope</a></li>
        </ul>
      </div>
      <div class="nh-footer-col">
        <h4>By Role</h4>
        <ul>
          <li><a href="/solutions/engineering-leadership">Engineering Leadership</a></li>
          <li><a href="/solutions/platform-teams">Platform Teams</a></li>
          <li><a href="/solutions/engineers">Engineers</a></li>
          <li><a href="/solutions/agencies">Agencies</a></li>
          <li><a href="/solutions/enterprise">Enterprise</a></li>
          <li><a href="/solutions/non-technical">Product & Support</a></li>
        </ul>
      </div>
      <div class="nh-footer-col">
        <h4>By Solution</h4>
        <ul>
          <li><a href="/solutions/code-review">AI Code Review</a></li>
          <li><a href="/solutions/codebase-understanding">Codebase Understanding</a></li>
          <li><a href="/solutions/workflow-automation">Workflow Automation</a></li>
          <li><a href="/solutions/developer-onboarding">Developer Onboarding</a></li>
          <li><a href="/solutions/support-operations">Support Operations</a></li>
        </ul>
      </div>
      <div class="nh-footer-col">
        <h4>Resources</h4>
        <ul>
          <li><a href="/docs/quick-start">Quick Start</a></li>
          <li><a href="/docs">Documentation</a></li>
          <li><a href="https://github.com/probelabs/visor/tree/main/examples" target="_blank">Workflow Examples</a></li>
          <li><a href="https://github.com/probelabs/probe" target="_blank">GitHub</a></li>
          <li><a href="/company/about">About</a></li>
          <li><a href="/pricing">Pricing</a></li>
        </ul>
      </div>
    </div>
    <div class="nh-footer-bottom">
      <div class="nh-footer-copy">&copy; {{ currentYear }} GoReplay LLC. All rights reserved.</div>
      <div class="nh-footer-legal">
        <a href="/privacy">Privacy</a>
        <a href="/terms">Terms</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.nh-footer {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem 2rem;
  border-top: 1px solid var(--vp-c-divider);
}

.nh-footer-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
}

.nh-footer-brand {
  padding-right: 2rem;
}

.nh-footer-brand-name {
  font-weight: 700;
  font-size: 1.1rem;
  display: block;
  margin-bottom: 0.6rem;
  color: var(--vp-c-text-1);
}

.nh-footer-tagline {
  font-size: 0.75rem;
  color: var(--vp-c-text-2);
  font-weight: 400;
  line-height: 1.6;
  margin-bottom: 1.2rem;
}

.nh-footer-social {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.nh-footer-social a {
  color: var(--vp-c-text-1);
  opacity: 0.5;
  transition: opacity 0.3s;
}

.nh-footer-social a:hover {
  opacity: 1;
}

.nh-footer-email {
  font-size: 0.72rem;
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition: color 0.3s;
}

.nh-footer-email:hover {
  color: var(--vp-c-text-1);
}

.nh-footer-col h4 {
  font-weight: 700;
  font-size: 0.75rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--vp-c-text-1);
}

.nh-footer-col ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nh-footer-col li {
  margin-bottom: 0.6rem;
}

.nh-footer-col a {
  font-size: 0.75rem;
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition: color 0.3s;
  font-weight: 400;
}

.nh-footer-col a:hover {
  color: var(--vp-c-text-1);
}

.nh-footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid var(--vp-c-divider);
}

.nh-footer-copy {
  font-size: 0.68rem;
  color: var(--vp-c-text-2);
}

.nh-footer-legal {
  display: flex;
  gap: 1.5rem;
}

.nh-footer-legal a {
  font-size: 0.68rem;
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition: color 0.3s;
}

.nh-footer-legal a:hover {
  color: var(--vp-c-text-1);
}

/* Tablet */
@media (max-width: 1024px) {
  .nh-footer-grid {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem 1.5rem;
  }
  .nh-footer-brand {
    grid-column: span 3;
    padding-right: 0;
    margin-bottom: 1rem;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .nh-footer { padding: 3rem 1.5rem 2rem; }
  .nh-footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 2rem 1.5rem;
  }
  .nh-footer-brand {
    grid-column: span 2;
    text-align: center;
    padding-right: 0;
    margin-bottom: 1rem;
  }
  .nh-footer-social {
    justify-content: center;
  }
  .nh-footer-bottom {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
  .nh-footer-legal {
    justify-content: center;
  }
}
</style>
