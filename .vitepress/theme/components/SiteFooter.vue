<template>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
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
        <div class="footer-col">
          <h4>Solutions</h4>
          <ul>
            <li><a href="/solutions/engineering-leadership">Engineering Leadership</a></li>
            <li><a href="/solutions/platform-teams">Platform Teams</a></li>
            <li><a href="/solutions/agencies-v2">Agencies</a></li>
            <li><a href="/solutions/enterprise">Enterprise</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Resources</h4>
          <ul>
            <li><a href="/docs/quick-start">Quick Start</a></li>
            <li><a href="/docs/">Documentation</a></li>
            <li><a href="https://github.com/probelabs/visor/tree/main/examples" target="_blank" rel="noopener">Workflow Examples</a></li>
            <li><a href="https://github.com/probelabs/probe" target="_blank" rel="noopener">GitHub</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="/company/about">About</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-copy">&copy; {{ currentYear }} GoReplay LLC. All rights reserved.</div>
        <div class="footer-legal">
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
/* Footer Styles - with fallbacks for pages without .ps-page wrapper */
.site-footer {
  /* Define fallback values for CSS variables */
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  --space-2xl: 3rem;
  --space-3xl: 4rem;
  --font-display: 'Space Grotesk', system-ui, sans-serif;

  background: #0f172a;
  color: #94a3b8;
  padding: var(--space-3xl) 0 var(--space-xl);
  position: relative;
  z-index: 100;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-xl);
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  gap: var(--space-2xl);
  margin-bottom: var(--space-2xl);
}

.footer-brand-name {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  display: block;
  margin-bottom: var(--space-sm);
}

.footer-tagline {
  font-size: 0.875rem;
  color: #64748b;
  margin: 0 0 var(--space-lg);
  line-height: 1.5;
}

.footer-social {
  display: flex;
  gap: var(--space-md);
}

.footer-social a {
  color: #64748b;
  transition: color 0.2s;
}

.footer-social a:hover {
  color: white;
}

.footer-email {
  display: block;
  margin-top: var(--space-md);
  font-size: 0.875rem;
  color: #94a3b8;
  text-decoration: none;
  transition: color 0.2s;
}

.footer-email:hover {
  color: white;
}

.footer-col h4 {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: white;
  margin: 0 0 var(--space-md);
}

.footer-col ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-col li {
  margin-bottom: var(--space-sm);
}

.footer-col a {
  font-size: 0.9375rem;
  color: #94a3b8;
  text-decoration: none;
  transition: color 0.2s;
}

.footer-col a:hover {
  color: white;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--space-xl);
  border-top: 1px solid #1e293b;
}

.footer-copy {
  font-size: 0.875rem;
  color: #64748b;
}

.footer-legal {
  display: flex;
  gap: var(--space-lg);
}

.footer-legal a {
  font-size: 0.875rem;
  color: #64748b;
  text-decoration: none;
  transition: color 0.2s;
}

.footer-legal a:hover {
  color: white;
}

/* Responsive */
@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-xl);
  }
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .footer-social {
    justify-content: center;
  }

  .footer-bottom {
    flex-direction: column;
    gap: var(--space-md);
    text-align: center;
  }

  .footer-legal {
    justify-content: center;
  }
}
</style>
