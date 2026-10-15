/**
 * Evidence graph scene. Client-only: imported from onMounted.
 * One animation loop. Edges draw in over ~8s, then a slow pulse.
 * Reduced motion paints the final frame and does not loop.
 */

const INK = '#161513'
const PAPER = '#f3f0e8'
const MUTED = '#8a8478'
const AMBER = '#c47b2a'

const NODES = [
  { id: 'requirement', label: 'Requirement', x: 0.16, y: 0.22 },
  { id: 'change', label: 'Change', x: 0.74, y: 0.16 },
  { id: 'check', label: 'Check', x: 0.8, y: 0.74 },
  { id: 'evidence', label: 'Evidence', x: 0.2, y: 0.76, accent: true }
]

const EDGES = [
  { a: 'requirement', b: 'change', bend: 0.14 },
  { a: 'change', b: 'check', bend: -0.16 },
  { a: 'check', b: 'evidence', bend: 0.12 },
  { a: 'requirement', b: 'evidence', bend: -0.2 },
  { a: 'change', b: 'evidence', bend: 0.05 }
]

const DRAW_MS = 8000
const STAGGER = 0.15
const EACH = 1 - STAGGER * (EDGES.length - 1)

export function mountEvidenceGraph(canvas) {
  const ctx = canvas.getContext('2d')
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const reduceQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

  let raf = 0
  let looping = false
  let visible = false
  let destroyed = false
  let hovered = null
  let reduceMotion = reduced
  const started = performance.now()
  let points = []

  function nodeById(id) {
    return NODES.find((node) => node.id === id)
  }

  function resize() {
    const rect = canvas.getBoundingClientRect()
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const width = Math.max(1, rect.width)
    const height = Math.max(1, rect.height)
    const bw = Math.max(1, Math.round(width * dpr))
    const bh = Math.max(1, Math.round(height * dpr))
    if (canvas.width !== bw || canvas.height !== bh) {
      canvas.width = bw
      canvas.height = bh
    }
    return { width, height, dpr }
  }

  function place(node, metrics) {
    const padX = Math.max(36, metrics.width * 0.08)
    const padY = Math.max(32, metrics.height * 0.12)
    return {
      x: padX + node.x * (metrics.width - padX * 2),
      y: padY + node.y * (metrics.height - padY * 2)
    }
  }

  function edgeAmount(t, index) {
    const start = index * STAGGER
    return clamp((t - start) / EACH, 0, 1)
  }

  function quad(a, c, b, t) {
    const u = 1 - t
    return {
      x: u * u * a.x + 2 * u * t * c.x + t * t * b.x,
      y: u * u * a.y + 2 * u * t * c.y + t * t * b.y
    }
  }

  function control(a, b, bend, metrics) {
    const dx = b.x - a.x
    const dy = b.y - a.y
    const len = Math.hypot(dx, dy) || 1
    const mag = Math.min(metrics.width, metrics.height) * bend
    return {
      x: (a.x + b.x) / 2 + (-dy / len) * mag,
      y: (a.y + b.y) / 2 + (dx / len) * mag
    }
  }

  function connected(nodeId) {
    if (!hovered) return false
    if (hovered === nodeId) return true
    return EDGES.some((edge) =>
      (edge.a === hovered && edge.b === nodeId) ||
      (edge.b === hovered && edge.a === nodeId)
    )
  }

  function edgeHot(edge) {
    return !hovered || edge.a === hovered || edge.b === hovered
  }

  function paint(now) {
    if (destroyed) return
    const metrics = resize()
    const { width, height, dpr } = metrics
    const elapsed = reduceMotion ? DRAW_MS : Math.max(0, now - started)
    const t = Math.min(1, elapsed / DRAW_MS)
    const idle = t >= 1 && !reduceMotion
    const pulse = idle ? 0.5 + 0.5 * Math.sin((elapsed - DRAW_MS) / 980) : 0

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.clearRect(0, 0, width, height)
    ctx.fillStyle = PAPER
    ctx.fillRect(0, 0, width, height)

    points = NODES.map((node) => ({ ...node, ...place(node, metrics) }))

    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    EDGES.forEach((edge, index) => {
      const amount = edgeAmount(t, index)
      if (amount <= 0) return
      const from = points.find((node) => node.id === edge.a)
      const to = points.find((node) => node.id === edge.b)
      const c = control(from, to, edge.bend, metrics)
      const hot = edgeHot(edge)
      ctx.beginPath()
      const steps = Math.max(8, Math.ceil(28 * amount))
      for (let i = 0; i <= steps; i++) {
        const p = quad(from, c, to, (i / steps) * amount)
        if (i === 0) ctx.moveTo(p.x, p.y)
        else ctx.lineTo(p.x, p.y)
      }
      ctx.strokeStyle = INK
      ctx.globalAlpha = hot ? (idle ? 0.55 + 0.45 * pulse : 0.9) : 0.14
      ctx.lineWidth = 1.25
      ctx.stroke()
      ctx.globalAlpha = 1
    })

    const labelSize = width < 420 ? 11 : 12
    ctx.font = `500 ${labelSize}px "JetBrains Mono", ui-monospace, Menlo, Consolas, monospace`
    ctx.textBaseline = 'middle'

    points.forEach((node) => {
      const hot = !hovered || connected(node.id)
      const show = node.id === hovered
      const base = node.accent ? 6.5 : 4.75
      const r = base + (node.accent && idle ? 1.4 * pulse : 0)
      ctx.globalAlpha = hot ? 1 : 0.16
      ctx.beginPath()
      ctx.arc(node.x, node.y, r, 0, Math.PI * 2)
      ctx.fillStyle = node.accent ? AMBER : INK
      ctx.fill()
      if (node.accent) {
        ctx.beginPath()
        ctx.arc(node.x, node.y, r + 4 + (idle ? 2.5 * pulse : 0), 0, Math.PI * 2)
        ctx.strokeStyle = AMBER
        ctx.globalAlpha = hot ? (idle ? 0.35 + 0.4 * pulse : 0.55) : 0.12
        ctx.lineWidth = 1
        ctx.stroke()
      }
      ctx.globalAlpha = 1
      if (!show) return
      const text = node.label
      const tw = ctx.measureText(text).width
      let x = node.x - tw / 2
      let y = node.y - r - 16
      if (y < 14) y = node.y + r + 16
      x = clamp(x, 8, width - tw - 8)
      ctx.fillStyle = PAPER
      ctx.fillRect(x - 4, y - 8, tw + 8, 16)
      ctx.fillStyle = INK
      ctx.fillText(text, x, y)
    })

    ctx.globalAlpha = hovered ? 0.35 : 0.7
    ctx.fillStyle = MUTED
    ctx.font = `400 ${labelSize}px "JetBrains Mono", ui-monospace, Menlo, Consolas, monospace`
    ctx.textBaseline = 'top'
    ctx.fillText('Evidence graph', 12, 12)
    ctx.globalAlpha = 1
  }

  function hitTest(event) {
    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    let found = null
    let best = 18
    points.forEach((node) => {
      const d = Math.hypot(node.x - x, node.y - y)
      if (d < best) {
        best = d
        found = node.id
      }
    })
    return found
  }

  function onPointerMove(event) {
    const next = hitTest(event)
    canvas.style.cursor = next ? 'pointer' : 'default'
    if (next === hovered) return
    hovered = next
    if (!looping) paint(performance.now())
  }

  function onPointerLeave() {
    canvas.style.cursor = 'default'
    if (!hovered) return
    hovered = null
    if (!looping) paint(performance.now())
  }

  function onPointerDown(event) {
    hovered = hitTest(event)
    canvas.style.cursor = hovered ? 'pointer' : 'default'
    if (!looping) paint(performance.now())
  }

  function startLoop() {
    if (destroyed || reduceMotion || looping || !visible) return
    looping = true
    raf = requestAnimationFrame(tick)
  }

  function stopLoop() {
    looping = false
    cancelAnimationFrame(raf)
  }

  function tick(now) {
    if (!looping) return
    paint(now)
    raf = requestAnimationFrame(tick)
  }

  function onVisible(isVisible) {
    visible = isVisible
    if (!visible) {
      stopLoop()
      return
    }
    if (reduceMotion) paint(performance.now())
    else startLoop()
  }

  function onReduceChange() {
    reduceMotion = reduceQuery.matches
    if (reduceMotion) {
      stopLoop()
      paint(performance.now())
    } else if (visible) {
      startLoop()
    }
  }

  const observer = new IntersectionObserver((entries) => {
    onVisible(entries.some((entry) => entry.isIntersecting))
  }, { threshold: 0.08 })

  observer.observe(canvas)
  canvas.addEventListener('pointermove', onPointerMove)
  canvas.addEventListener('pointerleave', onPointerLeave)
  canvas.addEventListener('pointerdown', onPointerDown)
  reduceQuery.addEventListener('change', onReduceChange)

  const resizeObserver = new ResizeObserver(() => {
    if (!looping) paint(performance.now())
  })
  resizeObserver.observe(canvas)

  paint(performance.now())
  document.fonts?.ready?.then(() => {
    if (!destroyed && !looping) paint(performance.now())
  })

  return function unmount() {
    destroyed = true
    stopLoop()
    observer.disconnect()
    resizeObserver.disconnect()
    canvas.removeEventListener('pointermove', onPointerMove)
    canvas.removeEventListener('pointerleave', onPointerLeave)
    canvas.removeEventListener('pointerdown', onPointerDown)
    reduceQuery.removeEventListener('change', onReduceChange)
  }
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value))
}
