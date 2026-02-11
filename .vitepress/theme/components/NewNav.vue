<template>
  <!-- Navigation -->
  <nav class="nh-nav" :class="{ scrolled: isScrolled }">
    <div class="nh-nav-inner">
      <a href="/" class="nh-logo">
        <img src="/probe/logo.png" alt="Probe" class="nh-logo-img">
        <span class="nh-logo-text">Probe</span>
      </a>
      <div class="nh-nav-links">
        <!-- Platform Dropdown -->
        <div class="nh-dropdown" @mouseenter="openDropdown = 'platform'" @mouseleave="openDropdown = null">
          <button class="nh-nav-link" :class="{ active: openDropdown === 'platform' }">
            Platform
            <svg class="nh-dropdown-arrow" width="10" height="10" viewBox="0 0 10 10"><path d="M2 4l3 3 3-3" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>
          </button>
          <div class="nh-dropdown-menu nh-dropdown-menu--wide" v-show="openDropdown === 'platform'">
            <div class="nh-dropdown-cols">
              <div class="nh-dropdown-section">
                <div class="nh-dropdown-label">Engine</div>
                <a href="/probe" class="nh-dropdown-item">
                  <strong>Probe</strong>
                  <span>AI-native code search across enterprise codebases</span>
                </a>
                <a href="/visor" class="nh-dropdown-item">
                  <strong>Visor</strong>
                  <span>Deterministic workflow engine for agent automation</span>
                </a>
              </div>
              <div class="nh-dropdown-section">
                <div class="nh-dropdown-label">Tools</div>
                <a href="/maid" class="nh-dropdown-item">
                  <strong>Maid</strong>
                  <span>Fast Mermaid linter with auto-fix</span>
                </a>
                <a href="https://goreplay.org" class="nh-dropdown-item">
                  <strong>GoReplay</strong>
                  <span>Open-source traffic replay for testing</span>
                </a>
                <a href="/big-brain" class="nh-dropdown-item">
                  <strong>Big Brain</strong>
                  <span>Hand off stuck problems to smarter models</span>
                </a>
                <a href="/afk" class="nh-dropdown-item">
                  <strong>AFK</strong>
                  <span>Control Claude Code from your phone</span>
                </a>
                <a href="/vow" class="nh-dropdown-item">
                  <strong>Vow</strong>
                  <span>AI accountability gates for commits</span>
                </a>
                <a href="/memaris" class="nh-dropdown-item">
                  <strong>Memaris</strong>
                  <span>Persistent memory from past AI sessions</span>
                </a>
                <a href="/logoscope" class="nh-dropdown-item">
                  <strong>Logoscope</strong>
                  <span>AI-powered log analysis and insights</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <!-- Solutions Dropdown -->
        <div class="nh-dropdown" @mouseenter="openDropdown = 'solutions'" @mouseleave="openDropdown = null">
          <button class="nh-nav-link" :class="{ 'nh-nav-link--active': activeNav === 'solutions', active: openDropdown === 'solutions' }">
            Solutions
            <svg class="nh-dropdown-arrow" width="10" height="10" viewBox="0 0 10 10"><path d="M2 4l3 3 3-3" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>
          </button>
          <div class="nh-dropdown-menu nh-dropdown-menu--wide" v-show="openDropdown === 'solutions'">
            <div class="nh-dropdown-cols">
              <div class="nh-dropdown-section">
                <div class="nh-dropdown-label">By Role</div>
                <a href="/solutions/engineering-leadership" class="nh-dropdown-item">Engineering Leadership</a>
                <a href="/solutions/platform-teams" class="nh-dropdown-item">Platform Teams</a>
                <a href="/solutions/engineers" class="nh-dropdown-item">Engineers</a>
                <a href="/solutions/non-technical" class="nh-dropdown-item">Product & Support</a>
                <a href="/solutions/agencies" class="nh-dropdown-item">Agencies</a>
                <a href="/solutions/enterprise" class="nh-dropdown-item">Enterprise</a>
              </div>
              <div class="nh-dropdown-section">
                <div class="nh-dropdown-label">By Solution</div>
                <a href="/solutions/code-review" class="nh-dropdown-item">AI Code Review</a>
                <a href="/solutions/codebase-understanding" class="nh-dropdown-item">Codebase Understanding</a>
                <a href="/solutions/workflow-automation" class="nh-dropdown-item">Workflow Automation</a>
                <a href="/solutions/developer-onboarding" class="nh-dropdown-item">Developer Onboarding</a>
                <a href="/solutions/support-operations" class="nh-dropdown-item">Support Operations</a>
              </div>
            </div>
          </div>
        </div>
        <a href="/pricing" class="nh-nav-link" :class="{ 'nh-nav-link--active': activeNav === 'pricing' }">Pricing</a>
        <a href="/docs" class="nh-nav-link">Docs</a>
      </div>
      <div class="nh-nav-actions">
        <a href="/docs/quick-start" class="nh-nav-link nh-nav-link--highlight">Quick Start</a>
        <a :href="bookDemoHref" class="nh-nav-btn">Book Demo</a>
      </div>
      <button class="nh-hamburger" :class="{ open: mobileMenuOpen }" @click="mobileMenuOpen = !mobileMenuOpen" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>

  <!-- Mobile Menu -->
  <div class="nh-mobile-menu" :class="{ open: mobileMenuOpen }">
    <div class="nh-mobile-menu-inner">
      <div class="nh-mobile-dropdown">
        <button class="nh-mobile-dropdown-toggle" @click="mobileDropdown = mobileDropdown === 'platform' ? null : 'platform'">
          Platform
          <svg class="nh-dropdown-arrow" :class="{ rotated: mobileDropdown === 'platform' }" width="10" height="10" viewBox="0 0 10 10"><path d="M2 4l3 3 3-3" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>
        </button>
        <div class="nh-mobile-dropdown-content" v-show="mobileDropdown === 'platform'">
          <div class="nh-mobile-dropdown-label">Engine</div>
          <a href="/probe" class="nh-mobile-link" @click="mobileMenuOpen = false">Probe</a>
          <a href="/visor" class="nh-mobile-link" @click="mobileMenuOpen = false">Visor</a>
          <div class="nh-mobile-dropdown-label">Tools</div>
          <a href="/maid" class="nh-mobile-link" @click="mobileMenuOpen = false">Maid</a>
          <a href="https://goreplay.org" class="nh-mobile-link" @click="mobileMenuOpen = false">GoReplay</a>
          <a href="/big-brain" class="nh-mobile-link" @click="mobileMenuOpen = false">Big Brain</a>
          <a href="/afk" class="nh-mobile-link" @click="mobileMenuOpen = false">AFK</a>
          <a href="/vow" class="nh-mobile-link" @click="mobileMenuOpen = false">Vow</a>
          <a href="/memaris" class="nh-mobile-link" @click="mobileMenuOpen = false">Memaris</a>
          <a href="/logoscope" class="nh-mobile-link" @click="mobileMenuOpen = false">Logoscope</a>
        </div>
      </div>
      <div class="nh-mobile-dropdown">
        <button class="nh-mobile-dropdown-toggle" @click="mobileDropdown = mobileDropdown === 'solutions' ? null : 'solutions'">
          Solutions
          <svg class="nh-dropdown-arrow" :class="{ rotated: mobileDropdown === 'solutions' }" width="10" height="10" viewBox="0 0 10 10"><path d="M2 4l3 3 3-3" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>
        </button>
        <div class="nh-mobile-dropdown-content" v-show="mobileDropdown === 'solutions'">
          <div class="nh-mobile-dropdown-label">By Role</div>
          <a href="/solutions/engineering-leadership" class="nh-mobile-link" @click="mobileMenuOpen = false">Engineering Leadership</a>
          <a href="/solutions/platform-teams" class="nh-mobile-link" @click="mobileMenuOpen = false">Platform Teams</a>
          <a href="/solutions/engineers" class="nh-mobile-link" @click="mobileMenuOpen = false">Engineers</a>
          <a href="/solutions/non-technical" class="nh-mobile-link" @click="mobileMenuOpen = false">Product & Support</a>
          <a href="/solutions/agencies" class="nh-mobile-link" @click="mobileMenuOpen = false">Agencies</a>
          <a href="/solutions/enterprise" class="nh-mobile-link" @click="mobileMenuOpen = false">Enterprise</a>
          <div class="nh-mobile-dropdown-label">By Solution</div>
          <a href="/solutions/code-review" class="nh-mobile-link" @click="mobileMenuOpen = false">AI Code Review</a>
          <a href="/solutions/codebase-understanding" class="nh-mobile-link" @click="mobileMenuOpen = false">Codebase Understanding</a>
          <a href="/solutions/workflow-automation" class="nh-mobile-link" @click="mobileMenuOpen = false">Workflow Automation</a>
          <a href="/solutions/developer-onboarding" class="nh-mobile-link" @click="mobileMenuOpen = false">Developer Onboarding</a>
          <a href="/solutions/support-operations" class="nh-mobile-link" @click="mobileMenuOpen = false">Support Operations</a>
        </div>
      </div>
      <a href="/pricing" class="nh-mobile-link nh-mobile-link--top" @click="mobileMenuOpen = false">Pricing</a>
      <a href="/docs" class="nh-mobile-link nh-mobile-link--top" @click="mobileMenuOpen = false">Docs</a>
      <div class="nh-mobile-actions">
        <a href="/docs/quick-start" class="nh-mobile-link nh-mobile-link--highlight" @click="mobileMenuOpen = false">Quick Start</a>
        <a :href="bookDemoHref" class="nh-nav-btn" @click="mobileMenuOpen = false">Book Demo</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  activeNav: {
    type: String,
    default: null
  },
  bookDemoHref: {
    type: String,
    default: 'https://cal.com/leonid-bugaev/30min'
  }
})

const isScrolled = ref(false)
const openDropdown = ref(null)
const mobileMenuOpen = ref(false)
const mobileDropdown = ref(null)

const onScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>
