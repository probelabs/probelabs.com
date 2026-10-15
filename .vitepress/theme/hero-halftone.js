import { mountStage } from './hero-stage.js'

const CELL = 7

function field(nx, ny, time, pointer) {
  const x = (nx - 0.5) * 2.05 - (pointer.x - 0.68) * 0.18
  const y = (ny - 0.48) * 2.25 - (pointer.y - 0.42) * 0.12
  const turn = time * 0.18
  const ct = Math.cos(turn)
  const st = Math.sin(turn)
  const xr = x * ct - y * st * 0.82
  const yr = x * st * 0.82 + y * ct
  const body = 1.08 - (Math.abs(xr) ** 2.15) * 1.05 - (Math.abs(yr) ** 2.35)
  const lobe = Math.exp(-((xr - 0.28) ** 2 + (yr - 0.12) ** 2) * 5.5) * 0.42
  const lobe2 = Math.exp(-((xr + 0.42) ** 2 + (yr + 0.22) ** 2) * 7.2) * 0.28
  const waist = Math.exp(-(xr * xr) * 3.2 - (yr * yr) * 1.1) * 0.18
  return body + lobe + lobe2 + waist
}

export function mount(canvas) {
  const ctx = canvas.getContext('2d', { alpha: false })
  if (!ctx) return () => {}
  let sized = ''

  const stop = mountStage(canvas, ({ elapsed, pointer, size, reduced }) => {
    const time = reduced ? 1.15 : elapsed
    const dpr = size.dpr
    const bw = Math.max(1, Math.round(size.w * dpr))
    const bh = Math.max(1, Math.round(size.h * dpr))
    const key = bw + 'x' + bh
    if (key !== sized) {
      canvas.width = bw
      canvas.height = bh
      sized = key
    }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.fillStyle = '#f3f0e8'
    ctx.fillRect(0, 0, size.w, size.h)

    const cols = Math.max(8, Math.floor(size.w / CELL))
    const rows = Math.max(8, Math.floor(size.h / CELL))
    const ox = (size.w - cols * CELL) * 0.5
    const oy = (size.h - rows * CELL) * 0.5

    for (let y = 0; y < rows; y++) {
      const stagger = (y % 2) * CELL * 0.45
      for (let x = 0; x < cols; x++) {
        const nx = (x + 0.5) / cols
        const ny = 1 - (y + 0.5) / rows
        const value = field(nx, ny, time, pointer)
        if (value < 0.22) continue
        const amount = Math.max(0, Math.min(1, (value - 0.22) / 0.9))
        const radius = (0.22 + amount * 0.46) * CELL
        const cx = ox + x * CELL + CELL * 0.5 + stagger
        const cy = oy + y * CELL + CELL * 0.5
        const lit = amount > 0.72 && nx > 0.48 && ny > 0.4 && ny < 0.78
        ctx.beginPath()
        ctx.arc(cx, cy, lit ? radius * 0.72 : radius, 0, Math.PI * 2)
        ctx.fillStyle = lit ? '#c47b2a' : '#161513'
        ctx.globalAlpha = lit ? 0.9 : 0.18 + amount * 0.82
        ctx.fill()
      }
    }
    ctx.globalAlpha = 1
  })

  return stop
}
