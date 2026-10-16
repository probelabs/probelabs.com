// Builds homepage card SVGs and 1200×630 OG PNGs from the shared field.
// Run: node scripts/render-project-posters.mjs
// Preview sheets (not committed): node scripts/render-project-posters.mjs --preview /tmp/fields

import { spawnSync } from 'node:child_process'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { CARD_SCENES, POSTER_TIME, renderSVG } from '../.vitepress/theme/project-field.mjs'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const chrome = process.env.CHROME || '/opt/google/chrome/chrome'
const work = join(tmpdir(), 'probelabs-posters')
mkdirSync(work, { recursive: true })
const profile = join(work, 'chrome-profile')

function pngSize(path) {
  const buf = readFileSync(path)
  return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20), buf }
}

function raster(svg, width, height, name) {
  const htmlPath = join(work, `${name}.html`)
  const shot = join(work, `${name}.png`)
  const html = `<!doctype html><meta charset="utf-8"><style>
    html,body{margin:0;background:#141311;width:${width}px;height:${height}px;overflow:hidden}
    svg{display:block;width:${width}px;height:${height}px}
  </style>${svg}`
  writeFileSync(htmlPath, html)
  const result = spawnSync(chrome, [
    '--headless=new',
    '--no-sandbox',
    '--disable-gpu',
    '--disable-dev-shm-usage',
    '--hide-scrollbars',
    '--force-device-scale-factor=1',
    `--user-data-dir=${profile}`,
    `--window-size=${width},${height}`,
    `--screenshot=${shot}`,
    `file://${htmlPath}`
  ], { encoding: 'utf8' })
  if (result.status !== 0) {
    throw new Error(result.stderr || result.stdout || `chrome exited ${result.status}`)
  }
  return shot
}

const previewDir = process.argv.includes('--preview')
  ? process.argv[process.argv.indexOf('--preview') + 1]
  : ''

if (previewDir) {
  mkdirSync(previewDir, { recursive: true })
  const sheets = [
    { scene: 'qc', name: 'qc' },
    { scene: 'qc-specimen', name: 'qc-specimen' },
    { scene: 'ste', name: 'ste' },
    { scene: 'ste-lexicon', name: 'ste-lexicon' },
    { scene: 'aeo', name: 'aeo' },
    { scene: 'aeo-arms', name: 'aeo-arms' },
    { scene: 'fuzzers', name: 'fuzzers' },
    { scene: 'fuzzers-strip', name: 'fuzzers-strip' },
    { scene: 'docs', name: 'docs' },
    { scene: 'docs-hits', name: 'docs-hits' },
    { scene: 'recs', name: 'recs' },
    { scene: 'recs-links', name: 'recs-links' }
  ]
  for (const item of sheets) {
    const hero = renderSVG(item.scene, 1280, 560, POSTER_TIME, 'hero')
    const mobile = renderSVG(item.scene, 390, 640, POSTER_TIME, 'hero')
    const panel = renderSVG(item.scene, 1100, 480, POSTER_TIME, 'frame')
    const card = renderSVG(item.scene, 800, 500, POSTER_TIME, 'frame')
    writeFileSync(join(previewDir, `${item.name}-hero.svg`), hero)
    const heroPng = raster(hero, 1280, 560, `${item.name}-hero`)
    const mobilePng = raster(mobile, 390, 640, `${item.name}-mobile`)
    const panelPng = raster(panel, 1100, 480, `${item.name}-panel`)
    const cardPng = raster(card, 800, 500, `${item.name}-card`)
    for (const [src, dest] of [
      [heroPng, `${item.name}-hero.png`],
      [mobilePng, `${item.name}-mobile.png`],
      [panelPng, `${item.name}-panel.png`],
      [cardPng, `${item.name}-card.png`]
    ]) {
      writeFileSync(join(previewDir, dest), readFileSync(src))
    }
    console.log('preview', item.name)
  }
  process.exit(0)
}

const outDir = join(root, 'public/images/projects')
mkdirSync(outDir, { recursive: true })

for (const item of CARD_SCENES) {
  const card = renderSVG(item.scene, 1600, 1000, POSTER_TIME, 'frame')
  writeFileSync(join(outDir, `${item.file}-card.svg`), card)
  const og = renderSVG(item.scene, 1200, 630, POSTER_TIME, 'og', item.name)
  const shot = raster(og, 1200, 630, `${item.file}-og`)
  const png = pngSize(shot)
  if (png.width !== 1200 || png.height !== 630) {
    throw new Error(`${item.file} og is ${png.width}x${png.height}, expected 1200x630`)
  }
  writeFileSync(join(outDir, `${item.file}-og.png`), png.buf)
  console.log(`${item.file}: card ${card.length} bytes, og ${png.width}x${png.height} ${png.buf.length} bytes`)
}
