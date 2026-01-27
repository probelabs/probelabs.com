<template>
  <nav class="site-nav" :class="{ scrolled: isScrolled }">
    <div class="nav-container">
      <a href="/" class="nav-brand">
        <div class="nav-logo">
          <img src="/probe/logo.png" alt="Probe" class="nav-logo-img">
        </div>
        <span class="nav-title">ProbeLabs</span>
      </a>
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
                        <div class="mega-card-title">Developers & SDK</div>
                        <div class="mega-card-desc">Build custom tooling on Probe</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a href="/docs/" class="nav-link" :class="{ 'nav-link--active': isDocsPage }">Docs</a>
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
        <a href="https://cal.com/leonid-bugaev/30min" class="nav-btn">Book a Demo</a>
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
        <a href="/docs/use-cases/building-ai-tools" class="mobile-sublink">Developers & SDK</a>
      </div>
      <a href="/docs/" class="mobile-link">Docs</a>
      <a href="https://github.com/probelabs" class="mobile-link">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline;vertical-align:middle;margin-right:0.5rem;">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
          <path d="M9 18c-4.51 2-5-2-7-2"/>
        </svg>
        GitHub
      </a>
      <a href="https://cal.com/leonid-bugaev/30min" class="mobile-cta">Book a Demo</a>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const openDropdown = ref(null)

// Check if we're on a docs page
const isDocsPage = computed(() => {
  return route.path.startsWith('/docs')
})

const setDropdown = (name) => {
  openDropdown.value = name
}

const toggleDropdown = (name) => {
  openDropdown.value = openDropdown.value === name ? null : name
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeDropdowns = () => {
  openDropdown.value = null
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  document.addEventListener('click', closeDropdowns)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', closeDropdowns)
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

/* CSS Variables */
.site-nav {
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
  --c-brand-300: #86efac;
  --c-brand-400: #4ade80;
  --c-brand-500: #22c55e;
  --c-brand-600: #16a34a;
  --font-display: 'Space Grotesk', system-ui, sans-serif;
  --font-body: 'Inter', system-ui, sans-serif;
}

/* Navigation */
.site-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 1rem 1.5rem;
  transition: all 0.3s ease;
  background: transparent;
  border-bottom: 1px solid transparent;
  font-family: var(--font-body);
}

.site-nav.scrolled {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  border-bottom-color: var(--c-border);
  padding: 0.75rem 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.site-nav .nav-container {
  max-width: 1600px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 3rem;
}

.site-nav .nav-brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
}

.site-nav .nav-logo {
  width: 32px;
  height: 32px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.site-nav .nav-logo-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.site-nav .nav-title {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.125rem;
  color: var(--c-text);
}

.site-nav .nav-links {
  display: flex;
  align-items: center;
  gap: 2rem;
  flex: 1;
}

.site-nav .nav-link {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--c-text-muted);
  text-decoration: none;
  transition: color 0.2s;
}

.site-nav .nav-link:hover {
  color: var(--c-brand-600);
}

.site-nav .nav-link--active {
  color: var(--c-brand-600);
}

/* Dropdown Navigation */
.site-nav .nav-dropdown {
  position: relative;
}

.site-nav .nav-dropdown-trigger {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  background: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
}

.site-nav .nav-dropdown-arrow {
  transition: transform 0.2s;
}

.site-nav .nav-dropdown-trigger.is-open .nav-dropdown-arrow {
  transform: rotate(180deg);
}

/* Mega Menu */
.site-nav .nav-mega-menu {
  position: absolute;
  top: 100%;
  left: 55%;
  transform: translateX(-42%);
  padding-top: 0.75rem;
  z-index: 100;
}

.site-nav .nav-mega-menu--wide {
  left: 55%;
  transform: translateX(-42%);
}

.site-nav .mega-menu-content {
  background: white;
  border: 1px solid var(--c-border);
  border-radius: 0.75rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12), 0 4px 12px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  min-width: 680px;
}

.site-nav .nav-mega-menu--wide .mega-menu-content {
  min-width: 0;
  width: max-content;
}

.site-nav .mega-menu-columns {
  display: flex;
  gap: 1.5rem;
}

.site-nav .mega-menu-divider-vertical {
  width: 1px;
  background: var(--c-border);
  margin: 0.25rem 0;
}

.site-nav .mega-menu-label {
  font-size: 0.6875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--c-text-subtle);
  margin-bottom: 1rem;
  padding-left: 0.5rem;
}

.site-nav .mega-menu-divider {
  height: 1px;
  background: var(--c-border);
  margin: 1rem 0;
}

.site-nav .mega-menu-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
}

.site-nav .mega-menu-grid--3col {
  grid-template-columns: repeat(3, 1fr);
}

.site-nav .mega-menu-grid--2col {
  grid-template-columns: repeat(2, 1fr);
}

.site-nav .mega-menu-grid--1col {
  grid-template-columns: 1fr;
}

.site-nav .mega-menu-card {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.375rem 0.5rem;
  border-radius: 0.625rem;
  text-decoration: none;
  transition: background 0.15s, transform 0.15s;
  border: 1px solid transparent;
}

.site-nav .mega-menu-card:hover {
  background: var(--c-bg-subtle);
  border-color: var(--c-border);
  transform: translateY(-1px);
}

.site-nav .mega-card-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.625rem;
  flex-shrink: 0;
}

.site-nav .mega-card-icon svg {
  width: 20px;
  height: 20px;
}

/* Icon colors */
.site-nav .mega-card-icon--probe { background: linear-gradient(135deg, #dbeafe, #bfdbfe); color: #2563eb; }
.site-nav .mega-card-icon--visor { background: linear-gradient(135deg, #dcfce7, #bbf7d0); color: #16a34a; }
.site-nav .mega-card-icon--mermaid { background: linear-gradient(135deg, #fef3c7, #fde68a); color: #d97706; }
.site-nav .mega-card-icon--goreplay { background: linear-gradient(135deg, #ffedd5, #fed7aa); color: #c2410c; }
.site-nav .mega-card-icon--bigbrain { background: linear-gradient(135deg, #f3e8ff, #e9d5ff); color: #7c3aed; }
.site-nav .mega-card-icon--afk { background: linear-gradient(135deg, #e0e7ff, #c7d2fe); color: #4f46e5; }
.site-nav .mega-card-icon--vow { background: linear-gradient(135deg, #fee2e2, #fecaca); color: #dc2626; }
.site-nav .mega-card-icon--memaris { background: linear-gradient(135deg, #dcfce7, #bbf7d0); color: #16a34a; }
.site-nav .mega-card-icon--logoscope { background: linear-gradient(135deg, #ccfbf1, #99f6e4); color: #0d9488; }
.site-nav .mega-card-icon--leadership { background: linear-gradient(135deg, #dbeafe, #bfdbfe); color: #2563eb; }
.site-nav .mega-card-icon--platform { background: linear-gradient(135deg, #dcfce7, #bbf7d0); color: #16a34a; }
.site-nav .mega-card-icon--engineers { background: linear-gradient(135deg, #e0e7ff, #c7d2fe); color: #4f46e5; }
.site-nav .mega-card-icon--support { background: linear-gradient(135deg, #fce7f3, #fbcfe8); color: #db2777; }
.site-nav .mega-card-icon--agencies { background: linear-gradient(135deg, #fef3c7, #fde68a); color: #d97706; }
.site-nav .mega-card-icon--enterprise { background: linear-gradient(135deg, #fee2e2, #fecaca); color: #dc2626; }

.site-nav .mega-card-content {
  flex: 1;
  min-width: 0;
}

.site-nav .mega-card-title {
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--c-text);
  margin-bottom: 0.25rem;
}

.site-nav .mega-card-desc {
  font-size: 0.8125rem;
  color: var(--c-text-muted);
  line-height: 1.5;
}

/* Nav Actions */
.site-nav .nav-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.site-nav .nav-github {
  padding: 0.5rem;
  color: var(--c-text-subtle);
  transition: color 0.2s;
  text-decoration: none;
  display: flex;
  align-items: center;
}

.site-nav .nav-github:hover {
  color: var(--c-text);
}

.site-nav .nav-github svg {
  display: block;
}

.site-nav .nav-btn {
  padding: 0.5rem 1rem;
  font-size: 0.8125rem;
  font-weight: 600;
  color: white;
  background: var(--c-text);
  border-radius: 0.5rem;
  text-decoration: none;
  transition: all 0.2s;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.site-nav .nav-btn:hover {
  background: #1e293b;
}

.site-nav .nav-btn-mobile {
  display: none;
  padding: 0.5rem;
  background: transparent;
  border: none;
  color: var(--c-text);
  cursor: pointer;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .site-nav .nav-links {
    display: none;
  }
  .site-nav .nav-github {
    display: none;
  }
  .site-nav .nav-btn {
    display: none;
  }
  .site-nav .nav-btn-mobile {
    display: flex;
  }
}

/* Mobile Menu */
.site-nav .mobile-menu {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border-bottom: 1px solid var(--c-border);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.site-nav .mobile-link {
  color: var(--c-text-muted);
  font-weight: 500;
  text-decoration: none;
  padding: 0.5rem 0;
  transition: color 0.2s;
  display: flex;
  align-items: center;
}

.site-nav .mobile-link:hover {
  color: var(--c-brand-600);
}

.site-nav .mobile-cta {
  width: 100%;
  padding: 0.75rem;
  text-align: center;
  background: var(--c-brand-600);
  color: white;
  font-weight: 700;
  border-radius: 0.5rem;
  text-decoration: none;
}

.site-nav .mobile-section {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.site-nav .mobile-section-label {
  font-size: 0.6875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--c-text-subtle);
  padding: 0.5rem 0 0.25rem;
}

.site-nav .mobile-sublink {
  color: var(--c-text-muted);
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  padding: 0.375rem 0 0.375rem 0.75rem;
  border-left: 2px solid var(--c-border);
  transition: all 0.2s;
}

.site-nav .mobile-sublink:hover {
  color: var(--c-brand-600);
  border-left-color: var(--c-brand-600);
}
</style>
