import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'

// Import portfolio theme
import PortfolioTheme from '../portfolio-theme/index.js'

// Import default theme styles and components
import './custom.css'
import './home.css'
import './blog.css'
import FeatureList from './components/FeatureList.vue'
import CodeEditor from './components/CodeEditor.vue'
import CommandExample from './components/CommandExample.vue'
import BlogPostLayout from './components/BlogPostLayout.vue'
import BlogLayout from './layouts/BlogLayout.vue'
import FeatureSection from '../components/FeatureSection.vue'
import SimpleFeatureSection from '../components/SimpleFeatureSection.vue'
import StarsBackground from '../components/StarsBackground.vue'
import HomeFeatures from '../components/HomeFeatures.vue'

export default {
  extends: DefaultTheme,
  Layout() {
    const { frontmatter } = useData()
    
    // Use portfolio theme only for pages with theme: portfolio
    if (frontmatter.value?.theme === 'portfolio') {
      return h(PortfolioTheme.Layout)
    }
    
    // For all other pages, use the default VitePress theme
    // This will include proper sidebar rendering
    return h(DefaultTheme.Layout, null, {
      'home-features-after': () => h(FeatureList)
    })
  },
  enhanceApp({ app }) {
    // Register custom components
    app.component('FeatureList', FeatureList)
    app.component('CodeEditor', CodeEditor)
    app.component('CommandExample', CommandExample)
    app.component('BlogPostLayout', BlogPostLayout)
    app.component('BlogLayout', BlogLayout)
    app.component('FeatureSection', FeatureSection)
    app.component('SimpleFeatureSection', SimpleFeatureSection)
    app.component('StarsBackground', StarsBackground)
    app.component('HomeFeatures', HomeFeatures)

    // Enhance portfolio theme as well
    if (PortfolioTheme.enhanceApp) {
      PortfolioTheme.enhanceApp({ app })
    }
  }
}
