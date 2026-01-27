<template>
  <div class="portfolio-layout">
    <!-- Custom minimal navigation -->
    <nav class="portfolio-nav">
      <a href="/probe" class="nav-link">Probe Docs</a>
      <a href="https://github.com/buger" target="_blank" class="nav-link">GitHub</a>
      <a href="https://x.com/buger" target="_blank" class="nav-link">Twitter</a>
    </nav>

    <!-- Main content -->
    <main class="portfolio-main">
      <Content />
    </main>

    <!-- Footer -->
    <footer class="portfolio-footer">
      <p>© {{ currentYear }} Leonid Bugaev</p>
    </footer>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style>
/* Reset all VitePress styles - completely standalone */
.portfolio-layout,
.portfolio-layout * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.portfolio-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  color: #1a1a1a;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  .portfolio-layout {
    background: #0a0a0a;
    color: #e0e0e0;
  }
}

.portfolio-nav {
  position: fixed;
  top: 0;
  right: 0;
  padding: 2.5rem 3rem;
  display: flex;
  gap: 2.5rem;
  z-index: 1000;
  mix-blend-mode: difference;
}

.nav-link {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #ffffff;
  text-decoration: none;
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 1px;
  background: #ffffff;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-link:hover {
  opacity: 0.6;
}

.nav-link:hover::after {
  width: 100%;
}

.portfolio-main {
  flex: 1;
  width: 100%;
  padding-top: 0;
}

.portfolio-footer {
  text-align: center;
  padding: 4rem 2rem;
  font-size: 0.875rem;
  color: #999;
  border-top: 1px solid #e0e0e0;
  margin-top: 10rem;
  position: relative;
  z-index: 100;
}

@media (prefers-color-scheme: dark) {
  .portfolio-footer {
    color: #666;
    border-top-color: #2a2a2a;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .portfolio-nav {
    position: relative;
    padding: 1.5rem;
    justify-content: center;
    mix-blend-mode: normal;
    background: #ffffff;
    border-bottom: 1px solid #e0e0e0;
  }

  @media (prefers-color-scheme: dark) {
    .portfolio-nav {
      background: #0a0a0a;
      border-bottom-color: #2a2a2a;
    }
  }

  .nav-link {
    color: #1a1a1a;
    font-size: 0.75rem;
  }

  @media (prefers-color-scheme: dark) {
    .nav-link {
      color: #e0e0e0;
    }
  }

  .nav-link::after {
    background: #1a1a1a;
  }

  @media (prefers-color-scheme: dark) {
    .nav-link::after {
      background: #e0e0e0;
    }
  }

  .portfolio-footer {
    margin-top: 5rem;
    padding: 2.5rem 1.5rem;
  }
}

/* Custom scrollbar */
.portfolio-layout ::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.portfolio-layout ::-webkit-scrollbar-track {
  background: transparent;
}

.portfolio-layout ::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 4px;
}

.portfolio-layout ::-webkit-scrollbar-thumb:hover {
  background: #999;
}

@media (prefers-color-scheme: dark) {
  .portfolio-layout ::-webkit-scrollbar-thumb {
    background: #333;
  }

  .portfolio-layout ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
}
</style>
