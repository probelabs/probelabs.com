<template>
  <div class="docs-layout">
    <!-- Top Navigation -->
    <SiteNav />

    <!-- VitePress Local Search -->
    <VPLocalSearchBox v-if="showSearch" @close="showSearch = false" />

    <div class="docs-container">
      <!-- Left Sidebar -->
      <aside class="docs-sidebar">
        <div class="sidebar-search">
          <div class="sidebar-search-wrapper">
            <svg class="sidebar-search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
            <input
              type="text"
              class="sidebar-search-input"
              placeholder="Search docs..."
              readonly
              @click="openSearch"
            />
            <span class="sidebar-search-shortcut">{{ shortcutKey }}</span>
          </div>
        </div>

        <nav class="sidebar-nav">
          <div v-for="group in sidebar" :key="group.text" class="sidebar-group">
            <button
              class="sidebar-group-title"
              :class="{ collapsed: collapsedGroups[group.text] }"
              @click="toggleGroup(group.text)"
            >
              {{ group.text }}
              <svg class="sidebar-arrow" width="12" height="12" viewBox="0 0 12 12">
                <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </button>
            <ul v-show="!collapsedGroups[group.text]" class="sidebar-links">
              <li v-for="item in group.items" :key="item.link">
                <a
                  :href="item.link"
                  class="sidebar-link"
                  :class="{ active: isActive(item.link) }"
                >
                  {{ item.text }}
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </aside>

      <!-- Main Content -->
      <main class="docs-content">
        <div class="vp-doc">
          <Content />
        </div>
      </main>

      <!-- Right Outline -->
      <aside class="docs-outline" v-if="headers.length > 0">
        <div class="outline-content">
          <div class="outline-marker" ref="marker"></div>
          <div class="outline-title">On this page</div>
          <nav class="outline-nav" ref="container">
            <a
              v-for="heading in headers"
              :key="heading.link"
              :href="heading.link"
              class="outline-link"
              :class="[
                `outline-link--h${heading.level}`,
                { active: activeId === heading.link.slice(1) }
              ]"
              @click="scrollToHeading($event, heading.link)"
            >
              {{ heading.text }}
            </a>
          </nav>
        </div>
      </aside>
    </div>
    <NewFooter />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick, watch, defineAsyncComponent } from 'vue'
import { useData, useRoute, onContentUpdated } from 'vitepress'
import SiteNav from '../components/SiteNav.vue'
import NewFooter from '../components/NewFooter.vue'

// Load VitePress local search component asynchronously
const VPLocalSearchBox = defineAsyncComponent(() =>
  import('vitepress/dist/client/theme-default/components/VPLocalSearchBox.vue')
)

const showSearch = ref(false)

const { theme, frontmatter } = useData()
const route = useRoute()

// Get sidebar from theme config (handle object-style sidebar)
const sidebar = computed(() => {
  const sidebarConfig = theme.value.sidebar
  if (!sidebarConfig) return []

  // If sidebar is an object (keyed by path), find the matching sidebar
  if (typeof sidebarConfig === 'object' && !Array.isArray(sidebarConfig)) {
    const currentPath = route.path
    for (const prefix of Object.keys(sidebarConfig)) {
      if (currentPath.startsWith(prefix.replace(/\/$/, ''))) {
        return sidebarConfig[prefix] || []
      }
    }
    return []
  }

  return sidebarConfig || []
})

// Track collapsed state per group
const collapsedGroups = ref({})

// Check if link is active
const isActive = (link) => {
  const currentPath = route.path
  return currentPath === link || currentPath === link + '.html'
}

// Toggle group collapse
const toggleGroup = (groupText) => {
  collapsedGroups.value[groupText] = !collapsedGroups.value[groupText]
}

// Get headers from DOM after content renders
const headers = ref([])
const activeId = ref('')

const getHeaders = () => {
  const outlineLevel = frontmatter.value?.outline ?? theme.value?.outline?.level ?? [2, 3]
  const levels = Array.isArray(outlineLevel) ? outlineLevel : [2, outlineLevel]

  const headingElements = document.querySelectorAll('.vp-doc h2, .vp-doc h3')
  const result = []

  headingElements.forEach((el) => {
    const level = parseInt(el.tagName[1])
    if (level >= levels[0] && level <= levels[1]) {
      result.push({
        text: el.textContent?.replace(/\s*#\s*$/, '') || '',
        link: `#${el.id}`,
        level
      })
    }
  })

  return result
}

onContentUpdated(() => {
  headers.value = getHeaders()
})

// Active heading tracking
const container = ref(null)
const marker = ref(null)

let observer = null

const updateActiveHeading = () => {
  if (typeof window === 'undefined') return

  const headings = headers.value.map(h => document.getElementById(h.link.slice(1)))
  const scrollY = window.scrollY
  const viewportHeight = window.innerHeight

  let current = ''

  for (let i = headings.length - 1; i >= 0; i--) {
    const el = headings[i]
    if (el) {
      const top = el.getBoundingClientRect().top + scrollY
      if (scrollY >= top - 100) {
        current = el.id
        break
      }
    }
  }

  activeId.value = current
}

// Keyboard shortcut for search
const handleKeydown = (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault()
    showSearch.value = true
  }
}

onMounted(() => {
  headers.value = getHeaders()

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', updateActiveHeading, { passive: true })
    window.addEventListener('keydown', handleKeydown)
    updateActiveHeading()
  }
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('scroll', updateActiveHeading)
    window.removeEventListener('keydown', handleKeydown)
  }
})

// Smooth scroll to heading
const scrollToHeading = (e, link) => {
  e.preventDefault()
  const id = link.slice(1)
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
    history.pushState(null, '', link)
  }
}

// Search functionality
const isMac = typeof navigator !== 'undefined' && /Mac|iPod|iPhone|iPad/.test(navigator.platform)
const shortcutKey = computed(() => isMac ? '⌘K' : 'Ctrl K')

const openSearch = () => {
  showSearch.value = true
}
</script>

<style scoped>
.docs-layout {
  --sidebar-width: 272px;
  --outline-width: 336px;
  --nav-height: 64px;
  --content-max-width: 768px;

  min-height: 100vh;
  background: var(--vp-c-bg);
}

.docs-container {
  display: flex;
  margin-top: var(--nav-height);
  min-height: calc(100vh - var(--nav-height));
}

/* Left Sidebar */
.docs-sidebar {
  flex-shrink: 0;
  width: var(--sidebar-width);
  padding: 24px 24px 32px;
  border-right: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  position: sticky;
  top: var(--nav-height);
  max-height: calc(100vh - var(--nav-height));
  overflow-y: auto;
  align-self: flex-start;
}

/* Search */
.sidebar-search {
  margin-bottom: 24px;
}

.sidebar-search-wrapper {
  position: relative;
}

.sidebar-search-icon {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  color: var(--vp-c-text-3);
  pointer-events: none;
}

.sidebar-search-input {
  width: 100%;
  padding: 7px 60px 7px 32px;
  font-size: 13px;
  font-family: var(--vp-font-family-base);
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  color: var(--vp-c-text-1);
  outline: none;
  cursor: pointer;
  transition: border-color 0.15s, background-color 0.15s;
}

.sidebar-search-input:hover {
  border-color: var(--vp-c-brand-1);
}

.sidebar-search-input::placeholder {
  color: var(--vp-c-text-3);
}

.sidebar-search-shortcut {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 11px;
  font-weight: 500;
  color: var(--vp-c-text-3);
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-border);
  border-radius: 4px;
  padding: 2px 6px;
  pointer-events: none;
}

/* Sidebar Navigation */
.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.sidebar-group {
  margin-bottom: 8px;
}

.sidebar-group-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 6px 0;
  font-size: 13px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
}

.sidebar-group-title:hover {
  color: var(--vp-c-brand-1);
}

.sidebar-arrow {
  transition: transform 0.2s;
}

.sidebar-group-title.collapsed .sidebar-arrow {
  transform: rotate(-90deg);
}

.sidebar-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar-link {
  display: block;
  padding: 5px 0 5px 12px;
  font-size: 13px;
  color: var(--vp-c-text-2);
  text-decoration: none;
  border-left: 2px solid transparent;
  transition: color 0.15s, border-color 0.15s;
}

.sidebar-link:hover {
  color: var(--vp-c-brand-1);
}

.sidebar-link.active {
  color: var(--vp-c-brand-1);
  border-left-color: var(--vp-c-brand-1);
  font-weight: 500;
}

/* Main Content */
.docs-content {
  flex: 0 1 auto;
  min-width: 0;
  width: 900px;
  max-width: 900px;
  padding: 32px 0 64px 48px;
}

.docs-content :deep(.vp-doc) {
  max-width: 100%;
}

/* Right Outline */
.docs-outline {
  flex-shrink: 0;
  width: var(--outline-width);
  padding: 32px 24px 32px 48px;
  background: var(--vp-c-bg);
  position: sticky;
  top: var(--nav-height);
  max-height: calc(100vh - var(--nav-height));
  overflow-y: auto;
  align-self: flex-start;
}

.outline-content {
  position: relative;
}

.outline-marker {
  display: none;
}

.outline-title {
  font-size: 14px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  line-height: 32px;
  margin-bottom: 4px;
}

.outline-nav {
  display: flex;
  flex-direction: column;
}

.outline-link {
  font-size: 13px;
  color: var(--vp-c-text-2);
  text-decoration: none;
  padding: 4px 0 4px 12px;
  transition: color 0.15s, border-color 0.15s;
  line-height: 1.4;
  border-left: 2px solid transparent;
}

.outline-link:hover {
  color: var(--vp-c-brand-1);
}

.outline-link.active {
  color: var(--vp-c-brand-1);
  border-left-color: var(--vp-c-brand-1);
  font-weight: 500;
}

.outline-link--h3 {
  padding-left: 24px;
  font-size: 12px;
}

/* Responsive */
@media (max-width: 1280px) {
  .docs-outline {
    display: none;
  }

  .docs-content {
    flex: 1;
    width: auto;
    max-width: none;
    padding: 32px 48px 64px;
  }

  .docs-content :deep(.vp-doc) {
    max-width: 900px;
  }
}

@media (max-width: 960px) {
  .docs-sidebar {
    display: none;
  }

  .docs-content {
    padding: 24px;
  }
}
</style>
