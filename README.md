# probelabs.com

Official website for Probe Labs - home of Probe, Maid, and other developer tools.

## Projects

- **Probe** - AI-friendly semantic code search tool
- **Maid** - Your Mermaid.js diagram assistant
- **GoReplay** - HTTP traffic capture and replay
- **Conductor** - Mac app for parallel AI coding agents

## Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Tech Stack

- VitePress for documentation
- Custom portfolio theme
- Static HTML pages for standalone tools (Maid)

## Structure

- `/` - Portfolio home page (custom theme)
- `/probe` - Probe documentation (VitePress theme)
- `/maid` - Maid standalone site (static HTML)
- `/.vitepress/portfolio-theme/` - Custom portfolio theme
- `/.vitepress/theme/` - Default VitePress theme customizations

## Deployment

Site is deployed to Cloudflare Pages at https://probelabs.com

Build command: `npm run build`
Output directory: `.vitepress/dist`
