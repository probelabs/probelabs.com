import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import { useData, useRouter } from 'vitepress'
import { onMounted, watch } from 'vue'

// Import both themes
import PortfolioTheme from '../portfolio-theme/index.js'

// Import default theme styles and components
import './custom.css'
import './home.css'
import './blog.css'
import './product-solution.css'
import FeatureList from './components/FeatureList.vue'
import CodeEditor from './components/CodeEditor.vue'
import CommandExample from './components/CommandExample.vue'
import BlogPostLayout from './components/BlogPostLayout.vue'
import BlogLayout from './layouts/BlogLayout.vue'
import ProbelabsLanding from './layouts/ProbelabsLanding.vue'
import DocsLayout from './layouts/DocsLayout.vue'
import NewHomepageLayout from './layouts/NewHomepageLayout.vue'
import PricingLayout from './layouts/PricingLayout.vue'
import SolutionsLayout from './layouts/SolutionsLayout.vue'
import SiteFooter from './components/SiteFooter.vue'
import FeatureSection from '../components/FeatureSection.vue'
import SimpleFeatureSection from '../components/SimpleFeatureSection.vue'
import StarsBackground from '../components/StarsBackground.vue'
import HomeFeatures from '../components/HomeFeatures.vue'
import SiteNav from './components/SiteNav.vue'
import SidebarSearch from './components/SidebarSearch.vue'
import Tabs from '../components/Tabs.vue'
import Tab from '../components/Tab.vue'

// Helper to check if current path is in sidebar items
const isPathInSidebar = (currentPath, sidebar) => {
  if (!sidebar) return false

  // Handle object-style sidebar (keyed by path prefix)
  if (typeof sidebar === 'object' && !Array.isArray(sidebar)) {
    for (const prefix of Object.keys(sidebar)) {
      if (currentPath.startsWith(prefix.replace(/\/$/, ''))) {
        return true
      }
    }
    return false
  }

  // Handle array-style sidebar
  if (!Array.isArray(sidebar)) return false

  for (const group of sidebar) {
    if (!group.items) continue
    for (const item of group.items) {
      const itemPath = item.link?.replace(/\.html$/, '').replace(/\/$/, '') || ''
      const checkPath = currentPath.replace(/\.html$/, '').replace(/\/$/, '').replace(/\.md$/, '')
      if (itemPath && (checkPath === itemPath || checkPath.startsWith(itemPath + '/'))) {
        return true
      }
    }
  }
  return false
}

// Theme switcher component
const ThemeSwitcher = {
  setup() {
    const { frontmatter, page, theme } = useData()

    return () => {
      // Use probelabs landing theme for homepage
      if (frontmatter.value?.theme === 'probelabs') {
        return h(ProbelabsLanding)
      }
      // Use new homepage theme if specified
      if (frontmatter.value?.theme === 'new-homepage') {
        return h(NewHomepageLayout)
      }
      // Use pricing theme
      if (frontmatter.value?.theme === 'pricing') {
        return h(PricingLayout)
      }
      // Use solutions theme (new design)
      if (frontmatter.value?.theme === 'solutions') {
        return h(SolutionsLayout)
      }
      // Use portfolio theme if specified
      if (frontmatter.value?.theme === 'portfolio') {
        return h(PortfolioTheme.Layout)
      }

      // Use custom DocsLayout for pages that are in the sidebar (documentation pages)
      const path = page.value?.relativePath || ''
      const currentPath = '/' + path.replace(/\.md$/, '')
      const isDocPage = !frontmatter.value?.layout &&
                       isPathInSidebar(currentPath, theme.value?.sidebar)

      if (isDocPage) {
        return h(DocsLayout)
      }

      // All other pages (company, products, privacy, terms, blog, etc.)
      // use SolutionsLayout for consistent new design with nav + footer
      return h(SolutionsLayout)
    }
  }
}

// Auto-discovered at build time from public/*/index.html (injected via vite define)
const STATIC_APP_PATHS = typeof __STATIC_APP_PATHS__ !== 'undefined' ? __STATIC_APP_PATHS__ : []

export default {
  ...DefaultTheme,
  Layout: ThemeSwitcher,
  enhanceApp({ app, router }) {
    // Register default theme components
    app.component('FeatureList', FeatureList)
    app.component('CodeEditor', CodeEditor)
    app.component('CommandExample', CommandExample)
    app.component('BlogPostLayout', BlogPostLayout)
    app.component('BlogLayout', BlogLayout)
    app.component('FeatureSection', FeatureSection)
    app.component('SimpleFeatureSection', SimpleFeatureSection)
    app.component('StarsBackground', StarsBackground)
    app.component('HomeFeatures', HomeFeatures)
    app.component('SiteFooter', SiteFooter)
    app.component('SiteNav', SiteNav)
    app.component('SidebarSearch', SidebarSearch)
    app.component('Tabs', Tabs)
    app.component('Tab', Tab)

    // Enhance portfolio theme as well
    if (PortfolioTheme.enhanceApp) {
      PortfolioTheme.enhanceApp({ app })
    }

    // Force full page reload for static app paths
    // These are standalone HTML apps that don't use VitePress routing
    if (typeof window !== 'undefined') {
      router.onBeforeRouteChange = (to) => {
        const path = to.split('?')[0].split('#')[0]
        for (const staticPath of STATIC_APP_PATHS) {
          if (path === staticPath || path === staticPath + '/' || path.startsWith(staticPath + '/')) {
            window.location.href = to
            return false // Prevent VitePress navigation
          }
        }
        return true
      }
    }
  }
}
