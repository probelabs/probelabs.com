const DPR_CAP = 1.5

export function mountStage(canvas, render) {
  const reduceQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  let reduce = reduceQuery.matches
  let raf = 0
  let looping = false
  let visible = false
  let destroyed = false
  let elapsed = 0
  let last = 0
  const pointer = { x: 0.72, y: 0.46 }
  const target = { x: 0.72, y: 0.46 }
  let influence = 0
  let influenceTarget = 0
  let size = { w: 1, h: 1, dpr: 1 }

  function measure() {
    const rect = canvas.getBoundingClientRect()
    const dpr = Math.min(window.devicePixelRatio || 1, DPR_CAP)
    const w = Math.max(1, rect.width)
    const h = Math.max(1, rect.height)
    size = { w, h, dpr }
  }

  function paint(dt) {
    pointer.x += (target.x - pointer.x) * 0.04
    pointer.y += (target.y - pointer.y) * 0.04
    influence += (influenceTarget - influence) * 0.028
    render({
      elapsed,
      pointer,
      influence: reduce ? 0 : influence,
      size,
      dt,
      reduced: reduce
    })
  }

  function frame(now) {
    if (!looping || destroyed) return
    const dt = last ? Math.min(0.033, (now - last) / 1000) : 0.016
    last = now
    if (!reduce) elapsed += dt
    measure()
    paint(dt)
    raf = requestAnimationFrame(frame)
  }

  function start() {
    if (destroyed || reduce || looping || !visible) return
    looping = true
    last = 0
    raf = requestAnimationFrame(frame)
  }

  function stop() {
    looping = false
    cancelAnimationFrame(raf)
  }

  function still() {
    measure()
    paint(0)
  }

  const observer = new IntersectionObserver((entries) => {
    visible = entries.some((entry) => entry.isIntersecting)
    if (!visible) stop()
    else if (reduce) still()
    else start()
  }, { threshold: 0.04 })

  const resizeObserver = new ResizeObserver(() => {
    if (destroyed || looping) return
    still()
  })

  function onPointer(event) {
    if (event.pointerType === 'touch') return
    const rect = canvas.getBoundingClientRect()
    const width = Math.max(1, rect.width)
    const height = Math.max(1, rect.height)
    target.x = (event.clientX - rect.left) / width
    target.y = 1 - (event.clientY - rect.top) / height
    influenceTarget = 1
  }

  function onLeave() {
    influenceTarget = 0
  }

  function onReduce() {
    reduce = reduceQuery.matches
    if (reduce) {
      stop()
      still()
    } else if (visible) start()
  }

  const host = canvas.closest('.lab-hero') || canvas
  observer.observe(canvas)
  resizeObserver.observe(canvas)
  host.addEventListener('pointermove', onPointer, { passive: true })
  host.addEventListener('pointerleave', onLeave)
  host.addEventListener('pointercancel', onLeave)
  reduceQuery.addEventListener('change', onReduce)
  still()

  return function unmount() {
    destroyed = true
    stop()
    observer.disconnect()
    resizeObserver.disconnect()
    host.removeEventListener('pointermove', onPointer)
    host.removeEventListener('pointerleave', onLeave)
    host.removeEventListener('pointercancel', onLeave)
    reduceQuery.removeEventListener('change', onReduce)
  }
}
