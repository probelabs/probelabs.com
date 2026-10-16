// Generative point fields for the six project pages.
// Same palette and point language as the homepage specimen:
// stone on #141311, one amber accent. Coordinates are CSS pixels.

export const BG = '#141311'
export const STONE = [224, 214, 194]
export const DIM = [158, 150, 138]
export const AMBER = [219, 128, 41]
export const POSTER_TIME = 4.6

export const CARD_SCENES = [
  { scene: 'qc', file: 'qc', name: 'qc' },
  { scene: 'ste', file: 'ste', name: 'ste' },
  { scene: 'aeo', file: 'aeo', name: 'aeo' },
  { scene: 'fuzzers', file: 'fuzzers', name: 'fuzzers' },
  { scene: 'docs', file: 'docs-mcp', name: 'docs-mcp' },
  { scene: 'recs', file: 'recs', name: 'recs' }
]

function hash(n) {
  const x = Math.sin(n * 127.1 + 311.7) * 43758.5453
  return x - Math.floor(x)
}

function rng(seed) {
  let s = seed >>> 0
  return () => {
    s = (s + 0x6d2b79f5) >>> 0
    let t = Math.imul(s ^ (s >>> 15), 1 | s)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function rgba(rgb, a) {
  const alpha = Math.max(0, Math.min(1, a))
  return `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${alpha.toFixed(3)})`
}

function qpoint(x0, y0, cx, cy, x1, y1, t) {
  const mt = 1 - t
  return {
    x: mt * mt * x0 + 2 * mt * t * cx + t * t * x1,
    y: mt * mt * y0 + 2 * mt * t * cy + t * t * y1
  }
}

function smooth(x) {
  const t = Math.max(0, Math.min(1, x))
  return t * t * (3 - 2 * t)
}

function make(w, h) {
  const marks = []
  const u = Math.min(w, h) / 340
  function dot(x, y, r, c, a) {
    if (r <= 0.2) return
    marks.push({ k: 'd', x, y, r, c, a })
  }
  function line(x, y, x2, y2, c, a, width) {
    marks.push({ k: 'l', x, y, x2, y2, c, a, w: width })
  }
  function quad(x, y, cx, cy, x2, y2, c, a, width) {
    marks.push({ k: 'q', x, y, cx, cy, x2, y2, c, a, w: width })
  }
  function along(x0, y0, x1, y1, step, r, c, a, jitter = 0, seed = 1) {
    const len = Math.hypot(x1 - x0, y1 - y0)
    const n = Math.max(2, Math.round(len / Math.max(1.5, step)))
    for (let i = 0; i < n; i++) {
      const p = n === 1 ? 0 : i / (n - 1)
      const j = (hash(seed + i * 1.7) - 0.5) * jitter
      const jx = (hash(seed + i * 3.1) - 0.5) * jitter
      dot(
        x0 + (x1 - x0) * p + jx,
        y0 + (y1 - y0) * p + j,
        r * (0.82 + hash(seed + i) * 0.36),
        c,
        a * (0.72 + hash(seed + i * 2) * 0.28)
      )
    }
  }
  function ring(cx, cy, rad, n, r, c, a, spin = 0) {
    for (let i = 0; i < n; i++) {
      const ang = (i / n) * Math.PI * 2 + spin
      dot(cx + Math.cos(ang) * rad, cy + Math.sin(ang) * rad, r, c, a * (0.75 + hash(i + rad) * 0.25))
    }
  }
  return { marks, u, dot, line, quad, along, ring }
}

function dust(m, w, h, mode) {
  const divisor = mode === 'hero' ? 1700 : 3000
  const count = Math.round((w * h) / divisor)
  const rnd = rng(0x51ed)
  for (let i = 0; i < count; i++) {
    const big = rnd() > 0.955
    const r = (big ? 1.7 + rnd() * 1.3 : 0.55 + rnd() * 0.75) * m.u
    const a = big ? 0.22 + rnd() * 0.18 : 0.07 + rnd() * 0.16
    m.dot(rnd() * w, rnd() * h, r, big ? STONE : DIM, a)
  }
}

function frameOf(w, h, mode) {
  const aspect = w / Math.max(1, h)
  if (mode === 'hero' && aspect >= 1.2) {
    const bw = w * 0.6
    const bh = h * 0.84
    return { x: w - bw - w * 0.035, y: (h - bh) / 2, w: bw, h: bh }
  }
  if (mode === 'hero') {
    const bw = w * 0.9
    const bh = h * 0.5
    return { x: (w - bw) / 2, y: h - bh - h * 0.05, w: bw, h: bh }
  }
  if (mode === 'og') {
    return { x: w * 0.34, y: h * 0.11, w: w * 0.6, h: h * 0.78 }
  }
  const mgn = Math.min(w, h) * 0.075
  return { x: mgn, y: mgn, w: w - mgn * 2, h: h - mgn * 2 }
}

function sceneQc(m, box, t) {
  const { u } = m
  const rows = box.h > box.w * 0.72 ? 8 : 6
  const openA = 2
  const openB = rows - 2
  const left = box.x + box.w * 0.02
  const right = box.x + box.w * 0.8
  const gateX = box.x + box.w * 0.91
  const top = box.y + box.h * 0.04
  const span = box.h * 0.92
  const r = 1.28 * u

  for (let i = 0; i < rows; i++) {
    const y = top + ((i + 0.5) / rows) * span
    const open = i === openA || i === openB
    const n = 36
    for (let k = 0; k < n; k++) {
      const p = k / (n - 1)
      if (open && p > 0.46 && p < 0.62) continue
      const x = left + p * (right - left)
      let yy = y + (hash(i * 41 + k) - 0.5) * u * 1.1
      let col = STONE
      let a = 0.5 + hash(k * 3 + i) * 0.42
      if (open && p > 0.34 && p < 0.74) {
        yy += Math.sin(t * 0.65 + k * 0.45) * u * 2.4
        yy += (p - 0.54) * u * 7
        col = DIM
        a = 0.4
      }
      m.dot(x, yy, r * (0.8 + hash(k + i * 9) * 0.45), col, a)
    }
    if (!open) {
      const rad = 4.4 * u
      m.ring(gateX, y, rad, 13, r * 0.62, AMBER, 0.9, t * 0.04 + i)
      m.dot(gateX, y, r * 0.5, AMBER, 0.95)
    }
  }

  const gateN = Math.max(12, Math.round(span / (5.5 * u)))
  for (let i = 0; i < gateN; i++) {
    const p = i / (gateN - 1)
    const y = top + p * span
    const rowH = span / rows
    let blocked = false
    for (const ri of [openA, openB]) {
      const ry = top + ((ri + 0.5) / rows) * span
      if (Math.abs(y - ry) < rowH * 0.28) blocked = true
    }
    if (blocked) continue
    m.dot(gateX + (hash(i + 4) - 0.5) * u * 0.6, y, r * 0.55, DIM, 0.32)
  }
}

function sceneQcSpecimen(m, box, t) {
  const { u } = m
  const rows = box.h > box.w * 0.55 ? 5 : 4
  const broken = 2
  const left = box.x + box.w * 0.06
  const right = box.x + box.w * 0.9
  const top = box.y + box.h * 0.08
  const span = box.h * 0.84

  for (let i = 0; i < rows; i++) {
    const y = top + ((i + 0.5) / rows) * span
    const open = i === broken
    const hx = left + 10 * u
    const scatter = open ? 7.5 * u : 3.1 * u
    for (let k = 0; k < 9; k++) {
      const ang = hash(i * 20 + k) * Math.PI * 2
      const rad = scatter * (0.35 + hash(k + i * 3) * 0.75)
      const drift = open ? Math.sin(t * 0.7 + k) * u * 1.6 : 0
      m.dot(
        hx + Math.cos(ang) * rad + drift,
        y + Math.sin(ang) * rad * 0.72,
        (open ? 1.35 : 1.15) * u,
        open ? AMBER : STONE,
        open ? 0.8 : 0.72
      )
    }
    const x0 = left + 28 * u
    const n = 22
    for (let k = 0; k < n; k++) {
      const p = k / (n - 1)
      if (open && p > 0.55) continue
      m.dot(
        x0 + p * (right - x0 - 18 * u),
        y + (hash(i + k * 2) - 0.5) * u,
        1.2 * u,
        STONE,
        open ? 0.35 : 0.62
      )
    }
    if (!open) {
      m.ring(right, y, 4.6 * u, 14, 0.85 * u, AMBER, 0.92, i)
      m.dot(right, y, 0.7 * u, AMBER, 1)
    } else {
      m.dot(right + Math.sin(t * 0.8) * u, y, 1.1 * u, DIM, 0.35)
    }
  }
}

function steWords(line) {
  const pattern = [
    [4, 7, 3, 6],
    [5, 3, 6, 4],
    [3, 6, 4, 5, 3],
    [6, 4, 3, 7],
    [4, 5, 6, 3],
    [5, 4, 7],
    [3, 5, 4, 6]
  ]
  const lens = pattern[line % pattern.length]
  return lens.map((n, i) => ({
    n,
    bad: (line === 1 && i === 2) || (line === 3 && i === 1) || (line === 5 && i === 0)
  }))
}

function drawSentence(m, x, y, width, t, line, alphaScale) {
  const { u } = m
  const parts = steWords(line)
  const slots = parts.reduce((sum, part) => sum + part.n, 0) + (parts.length - 1) * 1.45
  const gap = width / slots
  let cursor = x
  parts.forEach((part, pi) => {
    const lift = part.bad ? (9.5 + Math.sin(t * 0.5 + line + pi) * 2.2) * u : 0
    for (let k = 0; k < part.n; k++) {
      const px = cursor + k * gap
      const py = y - lift + (hash(line * 17 + pi * 5 + k) - 0.5) * u * 0.7
      m.dot(
        px,
        py,
        (part.bad ? 1.45 : 1.2) * u,
        part.bad ? AMBER : STONE,
        (part.bad ? 0.92 : 0.7) * alphaScale
      )
    }
    if (part.bad) {
      const sx = cursor + ((part.n - 1) / 2) * gap
      m.ring(sx, y, 3.3 * u, 8, 0.65 * u, DIM, 0.55 * alphaScale)
      m.line(sx, y - lift + 2.2 * u, sx, y - 3.6 * u, AMBER, 0.4 * alphaScale, Math.max(0.7, u * 0.75))
    }
    cursor += part.n * gap + gap * 1.45
  })
}

function sceneSte(m, box, t) {
  const { u } = m
  const cols = box.w > box.h * 0.95 ? 2 : 1
  const lines = Math.max(4, Math.min(7, Math.round(box.h / (16 * u))))
  const colGap = box.w * 0.06
  const colW = cols === 2 ? (box.w - colGap) / 2 : box.w
  for (let c = 0; c < cols; c++) {
    const x = box.x + c * (colW + colGap)
    for (let i = 0; i < lines; i++) {
      const y = box.y + ((i + 0.5) / lines) * box.h
      drawSentence(m, x, y, colW * 0.96, t, i + c * 2, 1)
    }
  }
  if (cols === 2) {
    const x = box.x + colW + colGap / 2
    m.along(x, box.y + box.h * 0.04, x, box.y + box.h * 0.96, 7 * u, 0.7 * u, DIM, 0.28, u * 0.4, 12)
  }
}

function sceneLexicon(m, box, t) {
  const { u } = m
  const cell = Math.max(16 * u, Math.min(box.w / 11, box.h / 4.2))
  const cols = Math.max(7, Math.floor(box.w / cell))
  const rows = Math.max(3, Math.floor(box.h / cell))
  const gridW = cols * cell
  const gridH = rows * cell
  const ox = box.x + (box.w - gridW) / 2
  const oy = box.y + (box.h - gridH) / 2
  const empty = new Set(['2,1', '6,2', '9,0', '4,3'])
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const cx = ox + (c + 0.5) * cell
      const cy = oy + (r + 0.5) * cell
      if (empty.has(`${c},${r}`)) {
        m.ring(cx, cy, cell * 0.16, 7, 0.62 * u, DIM, 0.4)
      } else {
        for (let k = 0; k < 4; k++) {
          const ang = hash(c * 13 + r * 9 + k) * Math.PI * 2
          const rad = hash(k + c + r * 3) * cell * 0.18
          m.dot(cx + Math.cos(ang) * rad, cy + Math.sin(ang) * rad, 1.05 * u, STONE, 0.5 + hash(k + r) * 0.4)
        }
      }
    }
  }
  const wanderers = [
    { c: 2, r: 1, ox: -0.95, oy: -0.72 },
    { c: 6, r: 2, ox: 0.9, oy: 0.7 },
    { c: 9, r: 0, ox: 0.15, oy: -0.95 }
  ]
  for (const item of wanderers) {
    if (item.c >= cols || item.r >= rows) continue
    const cx = ox + (item.c + 0.5) * cell
    const cy = oy + (item.r + 0.5) * cell
    const wx = cx + item.ox * cell
    const wy = cy + item.oy * cell + Math.sin(t * 0.55 + item.c) * u * 1.4
    m.line(wx, wy, cx, cy, AMBER, 0.38, Math.max(0.7, u * 0.7))
    m.dot(wx, wy, 1.8 * u, AMBER, 0.95)
  }
}

function sceneAeo(m, box, t) {
  const { u } = m
  const xs = [0.2, 0.5, 0.8].map((p) => box.x + box.w * p)
  const split = box.y + box.h * 0.46
  m.along(box.x, split, box.x + box.w, split, 8 * u, 0.7 * u, DIM, 0.28, u * 0.3, 4)

  xs.forEach((x, ci) => {
    const topN = 8
    for (let i = 0; i < topN; i++) {
      const y = box.y + box.h * 0.06 + ((i + 0.5) / topN) * (split - box.y - box.h * 0.1)
      const jx = (hash(ci * 50 + i) - 0.5) * 10 * u
      const know = ci === 2 && i === 3
      m.dot(
        x + jx,
        y,
        know ? 2 * u : 1.25 * u,
        know ? AMBER : STONE,
        know ? 0.72 + Math.sin(t * 1.1) * 0.18 : 0.28 + hash(i + ci) * 0.18
      )
    }
    const botN = 9
    for (let i = 0; i < botN; i++) {
      const y = split + box.h * 0.05 + ((i + 0.5) / botN) * (box.y + box.h - split - box.h * 0.08)
      const jx = (hash(ci * 80 + i) - 0.5) * 8 * u
      const mention = ci === 0 && i === 5
      m.dot(
        x + jx,
        y,
        mention ? 2.15 * u : 1.22 * u,
        mention ? AMBER : STONE,
        mention ? 0.85 + Math.sin(t * 1.3) * 0.12 : ci === 1 ? 0.55 : 0.26
      )
    }
  })

  const x0 = xs[1]
  const y0 = split + box.h * 0.28
  const x1 = box.x + box.w * 0.98
  const y1 = box.y + box.h * 0.14
  const cx = box.x + box.w * 0.78
  const cy = split + box.h * 0.02
  const samples = 26
  const travel = (t * 0.09) % 1
  for (let i = 0; i < samples; i++) {
    const p = i / (samples - 1)
    const pos = qpoint(x0, y0, cx, cy, x1, y1, p)
    const near = Math.abs(p - travel) < 0.07
    m.dot(pos.x, pos.y, near ? 1.7 * u : 0.85 * u, AMBER, near ? 0.95 : 0.42)
  }
  for (const p of [0.32, 0.52, 0.7]) {
    const pos = qpoint(x0, y0, cx, cy, x1, y1, p)
    m.dot(pos.x, pos.y, 2.3 * u, STONE, 0.92)
    for (let k = 0; k < 4; k++) {
      const ang = hash(k + p * 20) * Math.PI * 2
      m.dot(pos.x + Math.cos(ang) * 4 * u, pos.y + Math.sin(ang) * 4 * u, 0.85 * u, DIM, 0.55)
    }
  }
}

function disk(m, cx, cy, rad, count, seed, alpha) {
  const rnd = rng(seed)
  for (let i = 0; i < count; i++) {
    const ang = rnd() * Math.PI * 2
    const rr = Math.sqrt(rnd()) * rad
    m.dot(
      cx + Math.cos(ang) * rr,
      cy + Math.sin(ang) * rr * 0.88,
      (0.75 + rnd() * 0.7) * m.u,
      STONE,
      alpha * (0.45 + rnd() * 0.55)
    )
  }
}

function sceneArms(m, box, t) {
  const { u } = m
  const rad = Math.min(box.w * 0.2, box.h * 0.36)
  const y = box.y + box.h * 0.52
  const left = box.x + box.w * 0.27
  const right = box.x + box.w * 0.73
  disk(m, left, y, rad, 90, 11, 0.7)
  disk(m, right, y, rad, 70, 29, 0.55)
  for (let i = 0; i < 6; i++) {
    const ang = -1.05 + i * 0.42
    const samples = 14
    const travel = ((t * 0.1) + i * 0.13) % 1
    for (let k = 0; k < samples; k++) {
      const p = 0.42 + (k / (samples - 1)) * 0.85
      const near = Math.abs(k / samples - travel) < 0.09
      m.dot(
        right + Math.cos(ang) * rad * p,
        y + Math.sin(ang) * rad * p * 0.88,
        near ? 1.6 * u : 0.8 * u,
        AMBER,
        near ? 0.95 : 0.38
      )
    }
  }
  m.dot(right + rad * 0.15, y - rad * 0.08, 2 * u, AMBER, 0.85)
}

function rectPoints(m, x, y, w, h, step, r, damage, t, seed) {
  const { u } = m
  const segs = [
    [x, y, x + w, y],
    [x + w, y, x + w, y + h],
    [x + w, y + h, x, y + h],
    [x, y + h, x, y]
  ]
  let i = 0
  for (const [x0, y0, x1, y1] of segs) {
    const len = Math.hypot(x1 - x0, y1 - y0)
    const n = Math.max(2, Math.round(len / step))
    for (let k = 0; k < n; k++) {
      const p = k / n
      let px = x0 + (x1 - x0) * p
      let py = y0 + (y1 - y0) * p
      const band = py > y + h * 0.35 && py < y + h * 0.72 && px > x + w * 0.45
      const hit = band && damage > 0.02
      if (hit) {
        const mag = damage * (6 + hash(seed + i) * 16) * u
        px += (hash(seed + i * 1.3) - 0.35) * mag
        py += (hash(seed + i * 2.1) - 0.5) * mag * 0.65
        py += Math.sin(t * 0.85 + i) * damage * 2.2 * u
      }
      const amber = hit && damage > 0.4 && hash(seed + i * 4) > 0.62
      m.dot(px, py, r * (amber ? 1.25 : 1), amber ? AMBER : STONE, amber ? 0.9 : 0.62)
      i++
    }
  }
}

function drawJson(m, box, damage, t) {
  const { u } = m
  const pad = Math.min(box.w, box.h) * 0.08
  const x = box.x + pad
  const y = box.y + pad
  const w = box.w - pad * 2
  const h = box.h - pad * 2
  rectPoints(m, x, y, w, h, 5.2 * u, 1.15 * u, damage, t, 3)
  const ix = x + w * 0.16
  const iy = y + h * 0.22
  const iw = w * 0.68
  const ih = h * 0.56
  rectPoints(m, ix, iy, iw, ih, 5.4 * u, 1.05 * u, damage * 0.85, t, 19)
  const ky = iy + ih * 0.38
  m.along(ix + iw * 0.12, ky, ix + iw * 0.4, ky, 3.4 * u, 1.05 * u, STONE, 0.7, u * 0.4, 8)
  m.along(ix + iw * 0.52, ky, ix + iw * (damage > 0.55 ? 0.7 : 0.86), ky, 3.4 * u, 1.05 * u, damage > 0.7 ? AMBER : STONE, 0.65, damage * 4 * u, 15)
}

function drawGraph(m, box, damage, t) {
  const { u } = m
  const cx = box.x + box.w * 0.5
  const cy = box.y + box.h * 0.52
  const rad = Math.min(box.w, box.h) * 0.32
  const nodes = [{ x: cx, y: cy }]
  for (let i = 0; i < 5; i++) {
    const ang = -Math.PI / 2 + (i / 5) * Math.PI * 2
    nodes.push({ x: cx + Math.cos(ang) * rad, y: cy + Math.sin(ang) * rad * 0.9 })
  }
  const broken = 3
  nodes.forEach((node, i) => {
    if (i === 0) return
    const target = i === broken
      ? {
          x: node.x + damage * 10 * u,
          y: node.y + damage * 8 * u + Math.sin(t * 0.7) * damage * 2 * u
        }
      : node
    const steps = 8
    for (let s = 1; s < steps; s++) {
      const p = s / steps
      if (i === broken && damage > 0.35 && p > 0.45 && p < 0.7) continue
      m.dot(
        nodes[0].x + (target.x - nodes[0].x) * p,
        nodes[0].y + (target.y - nodes[0].y) * p,
        0.75 * u,
        i === broken && damage > 0.35 ? AMBER : DIM,
        0.4
      )
    }
  })
  nodes.forEach((node, i) => {
    let x = node.x
    let y = node.y
    let col = STONE
    if (i === broken) {
      x += damage * 10 * u
      y += damage * 8 * u + Math.sin(t * 0.7) * damage * 2 * u
      if (damage > 0.45) col = AMBER
    }
    m.ring(x, y, 4.2 * u, 10, 0.85 * u, col, 0.85)
    m.dot(x, y, 1.1 * u, col, 0.8)
  })
}

function chevron(m, cx, cy, size, dir, r, c, a, seed) {
  const n = 8
  for (let i = 0; i < n; i++) {
    const v = (i / (n - 1)) * 2 - 1
    m.dot(
      cx + dir * size * (1 - Math.abs(v)) * 0.85,
      cy + v * size,
      r * (0.85 + hash(seed + i) * 0.3),
      c,
      a
    )
  }
}

function drawXml(m, box, damage, t) {
  const { u } = m
  const cx = box.x + box.w * 0.48
  const cy = box.y + box.h * 0.5
  const layers = 3
  for (let i = 0; i < layers; i++) {
    const size = Math.min(box.w, box.h) * (0.16 + i * 0.12)
    const spread = size * 0.95
    chevron(m, cx - spread, cy, size * 0.55, 1, 1.1 * u, STONE, 0.7, i + 1)
    const missing = i === 0 && damage > 0.2
    if (!missing) {
      chevron(m, cx + spread, cy, size * 0.55, -1, 1.1 * u, STONE, 0.7, i + 8)
    } else {
      for (let k = 0; k < 6; k++) {
        const ang = hash(k + 4) * Math.PI * 2
        const mag = (4 + damage * 10) * u
        m.dot(
          cx + spread + Math.cos(ang) * mag + Math.sin(t * 0.8 + k) * damage * u,
          cy + Math.sin(ang) * mag * 0.6,
          1.15 * u,
          AMBER,
          0.75
        )
      }
    }
  }
}

function split3(box) {
  const wide = box.w >= box.h * 1.05
  if (wide) {
    const g = box.w * 0.035
    const w = (box.w - g * 2) / 3
    return [0, 1, 2].map((i) => ({ x: box.x + i * (w + g), y: box.y, w, h: box.h }))
  }
  const g = box.h * 0.04
  const h = (box.h - g * 2) / 3
  return [0, 1, 2].map((i) => ({ x: box.x, y: box.y + i * (h + g), w: box.w, h }))
}

function sceneFuzzers(m, box, t) {
  const parts = split3(box)
  drawJson(m, parts[0], 0.55, t)
  drawGraph(m, parts[1], 0.7, t)
  drawXml(m, parts[2], 0.65, t)
}

function sceneStrip(m, box, t) {
  const damages = [0, 0.14, 0.3, 0.5, 0.72, 1]
  const g = box.w * 0.028
  const w = (box.w - g * (damages.length - 1)) / damages.length
  damages.forEach((damage, i) => {
    const panel = { x: box.x + i * (w + g), y: box.y, w, h: box.h }
    drawJson(m, panel, damage, t + i * 0.2)
  })
}

function fileStack(m, x, y, w, h, t, hits) {
  const { u } = m
  const files = Math.max(7, Math.min(13, Math.floor(h / (7.2 * u))))
  const indents = [0, 1, 2, 2, 1, 2, 3, 1, 0, 1, 2, 2, 0]
  for (let i = 0; i < files; i++) {
    const yy = y + ((i + 0.5) / files) * h
    const indent = indents[i % indents.length] * 7 * u
    const len = w * (0.38 + hash(i * 6.5) * 0.55) - indent
    const hit = hits.has(i)
    const n = Math.max(4, Math.round(len / (3.3 * u)))
    for (let k = 0; k < n; k++) {
      m.dot(
        x + indent + (k / (n - 1)) * len,
        yy + (hash(i * 3 + k) - 0.5) * u * 0.7,
        (hit ? 1.3 : 1.1) * u,
        hit ? AMBER : STONE,
        hit ? 0.78 : 0.42 + hash(k + i) * 0.28
      )
    }
  }
  return files
}

function sceneDocs(m, box, t) {
  const { u } = m
  const wide = box.w > box.h * 0.95
  if (!wide) {
    const fileH = box.h * 0.62
    fileStack(m, box.x, box.y, box.w, fileH, t, new Set([1, 4, 7]))
    const y0 = box.y + fileH
    const y1 = box.y + box.h * 0.78
    const x = box.x + box.w * 0.5
    const packet = (t * 0.11) % 1
    for (let i = 0; i < 10; i++) {
      const p = i / 9
      const near = Math.abs(p - packet) < 0.12
      m.dot(x, y0 + (y1 - y0) * p, near ? 1.8 * u : 0.8 * u, AMBER, near ? 0.95 : 0.3)
    }
    disk(m, x, box.y + box.h * 0.9, Math.min(box.w, box.h) * 0.1, 28, 21, 0.8)
    return
  }
  const fileW = box.w * 0.46
  fileStack(m, box.x, box.y, fileW, box.h, t, new Set([2, 6, 9]))
  const x0 = box.x + fileW + 6 * u
  const x1 = box.x + box.w * 0.7
  const y = box.y + box.h * 0.5
  const packet = (t * 0.11) % 1
  const samples = 16
  for (let i = 0; i < samples; i++) {
    const p = i / (samples - 1)
    const near = Math.abs(p - packet) < 0.08
    m.dot(x0 + (x1 - x0) * p, y + Math.sin(p * 3.2) * 1.6 * u, near ? 1.9 * u : 0.8 * u, AMBER, near ? 0.95 : 0.32)
  }
  const cx = box.x + box.w * 0.86
  disk(m, cx, y, Math.min(box.w * 0.11, box.h * 0.32), 46, 21, 0.85)
}

function sceneHits(m, box, t) {
  const { u } = m
  fileStack(m, box.x, box.y, box.w * 0.92, box.h, t, new Set([1, 4, 8]))
  const y = box.y + box.h * (0.18 + ((t * 0.07) % 0.7))
  m.along(box.x, y, box.x + box.w * 0.92, y, 4 * u, 0.7 * u, AMBER, 0.28, 0, 3)
  m.dot(box.x + box.w * (0.15 + ((t * 0.06) % 0.7)), y, 1.8 * u, AMBER, 0.9)
}

function drawCard(m, x, y, w, h, color, alpha, seed) {
  const { u } = m
  const rnd = rng((seed || 1) + Math.round(x) * 17 + Math.round(y) * 3)
  const count = Math.max(22, Math.round((w * h) / (42 * u * u)))
  for (let i = 0; i < count; i++) {
    const px = x + (0.08 + rnd() * 0.84) * w
    const py = y + (0.1 + rnd() * 0.8) * h
    const edge = Math.min(px - x, x + w - px, py - y, y + h - py) / Math.max(1, u)
    const edgeBoost = edge < 2.2 ? 1 : 0.55
    m.dot(px, py, (0.65 + rnd() * 0.7) * u, color, alpha * edgeBoost * (0.55 + rnd() * 0.45))
  }
}

function transit(t) {
  const cycle = 14
  const u = ((t % cycle) + cycle) % cycle
  if (u < 3.2) return { p: 0, moving: false }
  if (u < 6.4) return { p: smooth((u - 3.2) / 3.2), moving: true }
  if (u < 9.6) return { p: 1, moving: false }
  return { p: 1 - smooth((u - 9.6) / 4.4), moving: true }
}

function sceneRecs(m, box, t, canvas) {
  const { u } = m
  const strata = 8
  for (let i = 0; i < strata; i++) {
    const y = ((i + 0.5) / strata) * canvas.h
    m.along(0, y, canvas.w, y, 9 * u, 0.65 * u, DIM, 0.1, u * 0.4, i + 30)
  }
  const cols = box.w > box.h * 0.8 ? 4 : 3
  const gap = box.w * 0.04
  const colW = (box.w - gap * (cols - 1)) / cols
  const cardH = Math.min(box.h * 0.28, colW * 0.85)
  const cardW = colW * 0.78
  const positions = []
  for (let c = 0; c < cols; c++) {
    const count = c === 2 ? 2 : 3
    for (let i = 0; i < count; i++) {
      if (c === 0 && i === 1) continue
      const x = box.x + c * (colW + gap) + (colW - cardW) / 2
      const y = box.y + box.h * 0.06 + i * (cardH + box.h * 0.04)
      drawCard(m, x, y, cardW, cardH, STONE, 0.78, c * 10 + i)
    }
  }
  const move = transit(t)
  const x0 = box.x + (colW - cardW) / 2
  const x1 = box.x + (colW + gap) + (colW - cardW) / 2
  const y = box.y + box.h * 0.06 + (cardH + box.h * 0.04)
  const x = x0 + (x1 - x0) * move.p
  if (move.moving) {
    for (let i = 1; i <= 4; i++) {
      const px = x - (x1 - x0) * 0.08 * i * Math.sign(move.p - 0.5 || 1)
      m.dot(px, y + cardH * 0.5, 0.8 * u, AMBER, 0.18 * (5 - i) / 4)
    }
  }
  drawCard(m, x, y, cardW, cardH, move.moving ? AMBER : STONE, move.moving ? 0.95 : 0.82, 99)
}

function sceneLinks(m, box, t) {
  const { u } = m
  const rows = box.h > box.w * 0.45 ? 5 : 4
  const lines = []
  for (let i = 0; i < rows; i++) {
    const y = box.y + ((i + 0.5) / rows) * box.h
    const x0 = box.x + box.w * (0.04 + hash(i) * 0.06)
    const x1 = box.x + box.w * (0.72 + hash(i + 2) * 0.22)
    m.along(x0, y, x1, y, 3.6 * u, 1.15 * u, STONE, 0.62, u * 0.45, i + 4)
    lines.push({ x0, x1, y })
  }
  const links = [
    [0, 2, 0.3, 0.55, false],
    [1, 3, 0.6, 0.25, true],
    [2, 4, 0.4, 0.7, false]
  ]
  for (const [a, b, pa, pb, amber] of links) {
    if (a >= lines.length || b >= lines.length) continue
    const A = lines[a]
    const B = lines[b]
    const xA = A.x0 + (A.x1 - A.x0) * pa
    const xB = B.x0 + (B.x1 - B.x0) * pb
    const lift = (18 + Math.sin(t * 0.4 + a) * 2) * u * Math.sign(a - b || 1)
    const col = amber ? AMBER : DIM
    const samples = 12
    for (let i = 0; i <= samples; i++) {
      const p = i / samples
      const pos = qpoint(xA, A.y, (xA + xB) / 2, (A.y + B.y) / 2 - lift, xB, B.y, p)
      m.dot(pos.x, pos.y, amber ? 1.05 * u : 0.75 * u, col, amber ? 0.75 : 0.4)
    }
  }
}

const SCENES = {
  qc: sceneQc,
  'qc-specimen': sceneQcSpecimen,
  ste: sceneSte,
  'ste-lexicon': sceneLexicon,
  aeo: sceneAeo,
  'aeo-arms': sceneArms,
  fuzzers: sceneFuzzers,
  'fuzzers-strip': sceneStrip,
  docs: sceneDocs,
  'docs-hits': sceneHits,
  recs: sceneRecs,
  'recs-links': sceneLinks
}

export function collect(scene, w, h, time, mode) {
  const draw = SCENES[scene]
  if (!draw) return []
  const m = make(w, h)
  dust(m, w, h, mode)
  const box = frameOf(w, h, mode)
  if (scene === 'recs') draw(m, box, time, { w, h })
  else draw(m, box, time)
  return m.marks
}

export function paint(ctx, w, h, scene, time, mode) {
  ctx.fillStyle = BG
  ctx.fillRect(0, 0, w, h)
  const marks = collect(scene, w, h, time, mode)
  for (const mark of marks) {
    if (mark.k === 'd') {
      ctx.beginPath()
      ctx.fillStyle = rgba(mark.c, mark.a)
      ctx.arc(mark.x, mark.y, mark.r, 0, Math.PI * 2)
      ctx.fill()
    } else if (mark.k === 'l') {
      ctx.beginPath()
      ctx.strokeStyle = rgba(mark.c, mark.a)
      ctx.lineWidth = mark.w
      ctx.lineCap = 'round'
      ctx.moveTo(mark.x, mark.y)
      ctx.lineTo(mark.x2, mark.y2)
      ctx.stroke()
    } else if (mark.k === 'q') {
      ctx.beginPath()
      ctx.strokeStyle = rgba(mark.c, mark.a)
      ctx.lineWidth = mark.w
      ctx.lineCap = 'round'
      ctx.moveTo(mark.x, mark.y)
      ctx.quadraticCurveTo(mark.cx, mark.cy, mark.x2, mark.y2)
      ctx.stroke()
    }
  }
}

function num(v) {
  return (Math.round(v * 10) / 10).toString()
}

export function renderSVG(scene, w, h, time, mode, label) {
  const marks = collect(scene, w, h, time, mode)
  const parts = [
    `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img">`,
    `<rect width="${w}" height="${h}" fill="${BG}"/>`
  ]
  if (label) {
    parts.push(`<title>${label}</title>`)
  }
  for (const mark of marks) {
    if (mark.k === 'd') {
      parts.push(
        `<circle cx="${num(mark.x)}" cy="${num(mark.y)}" r="${num(mark.r)}" fill="${rgba(mark.c, mark.a)}"/>`
      )
    } else if (mark.k === 'l') {
      parts.push(
        `<line x1="${num(mark.x)}" y1="${num(mark.y)}" x2="${num(mark.x2)}" y2="${num(mark.y2)}" stroke="${rgba(mark.c, mark.a)}" stroke-width="${num(mark.w)}" stroke-linecap="round"/>`
      )
    }
  }
  if (label) {
    const nameY = Math.round(h * 0.56)
    parts.push(
      `<text x="56" y="${nameY - 28}" fill="rgba(224,214,194,0.62)" font-family="JetBrains Mono, Liberation Mono, monospace" font-size="15" letter-spacing="3.2">PROBE LABS</text>`,
      `<text x="56" y="${nameY + 24}" fill="#f4f1ea" font-family="Inter, Liberation Sans, Helvetica, Arial, sans-serif" font-size="54" font-weight="600" letter-spacing="-1.5">${label}</text>`
    )
  }
  parts.push('</svg>')
  return parts.join('')
}
