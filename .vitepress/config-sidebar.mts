// Sidebar configuration for different paths
export const sidebar = {
  // Sidebar only for /docs/probe/ paths (documentation pages)
  // NOT for /probe which is the home/landing page
  '/docs/probe/': [
    {
      text: 'Core Concepts & Setup',
      collapsed: false,
      items: [
        { text: 'What is Probe?', link: '/docs/probe/features' },
        { text: 'Installation', link: '/docs/probe/installation' },
        { text: 'Quick Start', link: '/docs/probe/quick-start' },
        { text: 'Language Support', link: '/docs/probe/language-support-overview' },
        { text: 'Supported Languages', link: '/docs/probe/supported-languages' },
        { text: 'How It Works', link: '/docs/probe/how-it-works' },
        { text: 'Examples', link: '/docs/probe/examples' }
      ]
    },
    {
      text: 'Use Cases / Workflows',
      collapsed: false,
      items: [
        { text: 'AI Code Editors & MCP', link: '/docs/probe/use-cases/integrating-probe-into-ai-code-editors' },
        { text: 'CLI for AI Workflows', link: '/docs/probe/use-cases/advanced-cli' },
        { text: 'Web Interface for Teams', link: '/docs/probe/use-cases/deploying-probe-web-interface' },
        { text: 'Developers & SDK', link: '/docs/probe/use-cases/building-ai-tools' },
        { text: 'GitHub Actions Integration', link: '/docs/probe/integrations/github-actions' }
      ]
    },
    {
      text: 'Reference Documentation',
      collapsed: false,
      items: [
        { text: 'CLI Reference (Commands & Flags)', link: '/docs/probe/cli-mode' },
        { text: 'AI Integration Overview', link: '/docs/probe/ai-integration' },
        { text: 'AI Chat Mode', link: '/docs/probe/ai-chat' },
        { text: 'Web Interface', link: '/docs/probe/web-interface' },
        { text: 'MCP Protocol & Tools Reference', link: '/docs/probe/mcp-server' },
        { text: 'Node.js SDK API Reference', link: '/docs/probe/nodejs-sdk' },
        { text: 'Output Formats Reference', link: '/docs/probe/output-formats' },
        { text: 'Search Reference', link: '/docs/probe/search-reference' },
        { text: 'Code Extraction', link: '/docs/probe/code-extraction' },
        { text: 'Adding Languages', link: '/docs/probe/adding-languages' },
      ]
    },
    {
      text: 'Contributing',
      collapsed: true,
      items: [
        { text: 'Contributing Guide', link: 'https://github.com/probelabs/probe/blob/main/CONTRIBUTING.md' },
        { text: 'Code of Conduct', link: 'https://github.com/probelabs/probe/blob/main/CODE_OF_CONDUCT.md' },
        { text: 'Documentation Maintenance', link: '/docs/probe/contributing/documentation-maintenance' },
        { text: 'Documentation Structure', link: '/docs/probe/contributing/documentation-structure' },
        { text: 'Documentation Cross-References', link: '/docs/probe/contributing/documentation-cross-references' }
      ]
    },
    {
      text: 'Release Information',
      collapsed: true,
      items: [
        { text: 'Changelog', link: '/docs/probe/changelog' },
        { text: 'Blog', link: '/docs/probe/blog/' },
        { text: 'GitHub Releases', link: 'https://github.com/probelabs/probe/releases' }
      ]
    }
  ]
}
