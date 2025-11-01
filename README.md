# probelabs.com

Official website for Probe Labs - home of Probe, Maid, and other developer tools.

## Architecture

This is a **multi-project documentation aggregator**. The website pulls documentation from individual project repositories and builds a unified site.

### Structure

```
probelabs.com (this repo)
├── index.md                    # Portfolio home page
├── probe.md                    # Probe project landing page
├── public/
│   └── maid/                  # Maid standalone site (HTML)
├── scripts/
│   └── sync-docs.js           # Script to sync docs from projects
├── docs/                      # Generated (not committed to git)
│   ├── probe/                # Pulled from probelabs/probe
│   └── maid/                 # Pulled from probelabs/mermaid-lint
└── .vitepress/
    ├── portfolio-theme/      # Custom portfolio theme
    └── theme/                # Docs theme customizations
```

### Projects

Each project maintains its documentation in its own repository:

- **Probe** - `probelabs/probe` → `/docs/probe/`
- **Maid** - Standalone HTML site in `/public/maid/`
- **More projects** - Add to `scripts/sync-docs.js`

## Development

```bash
# Install dependencies
npm install

# Sync docs from project repos + run dev server
npm run dev

# Just sync docs (without starting server)
npm run sync

# Build for production (syncs docs first)
npm run build

# Preview production build
npm run preview
```

## Adding a New Project

1. **Add project configuration** in `scripts/sync-docs.js`:

```javascript
{
  name: 'your-project',
  repo: 'https://github.com/probelabs/your-project.git',
  branch: 'main',
  docsPath: 'docs',           // Path to docs in source repo
  targetPath: 'docs/your-project',  // Where to put in website
  files: ['*.md', 'guides']   // Files/folders to sync
}
```

2. **Create landing page** at `your-project.md`

3. **Update VitePress config** (`.vitepress/config.mts`) to add navigation

4. **Run sync**: `npm run sync`

## How It Works

### Build-Time Sync

The `scripts/sync-docs.js` script:

1. Clones each project repo (shallow clone, specific branch)
2. Copies specified docs to `docs/{project}/`
3. Cleans up temp files

This runs automatically before:
- `npm run dev` - Development server
- `npm run build` - Production build

### Benefits

- ✅ **Single source of truth** - Projects own their docs
- ✅ **Independent updates** - Update docs in project repo
- ✅ **Centralized deployment** - One site, one build
- ✅ **Version control** - Docs live with code
- ✅ **No submodules** - Simple build-time sync

## Deployment

Deployed to Cloudflare Pages at https://probelabs.com

**Build command**: `npm run build`  
**Output directory**: `.vitepress/dist`  
**Node version**: 20

The sync script runs automatically during build, pulling latest docs from each project's main branch.

## Tech Stack

- **VitePress** - Documentation framework
- **Custom Portfolio Theme** - Landing page
- **Node.js sync script** - Documentation aggregation
- **Git shallow clones** - Fast doc syncing

## Contributing

### Website Changes
Make changes directly in this repo for:
- Landing pages
- Themes
- Navigation
- Public assets

### Documentation Changes
Update documentation in the respective project repositories:
- Probe docs → `probelabs/probe/site/`
- Maid docs → `probelabs/mermaid-lint/docs/`

The website will automatically pull the latest docs on next build.
