import Layout from './Layout.vue'
import PortfolioGrid from './components/PortfolioGrid.vue'

export default {
  Layout,
  enhanceApp({ app }) {
    // Register portfolio-specific components
    app.component('PortfolioGrid', PortfolioGrid)
  }
}
