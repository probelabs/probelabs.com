<template>
  <div ref="host" class="pf" :class="'is-' + variant" role="img" :aria-label="label">
    <canvas ref="canvas" aria-hidden="true"></canvas>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { POSTER_TIME, paint } from '../project-field.mjs'

const props = defineProps({
  scene: { type: String, required: true },
  variant: { type: String, default: 'panel' },
  label: { type: String, required: true }
})

const host = ref(null)
const canvas = ref(null)
let teardown = () => {}

onMounted(() => {
  const hostEl = host.value
  const canvasEl = canvas.value
  const ctx = canvasEl.getContext('2d', { alpha: false })
  const reduceQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  let reduce = reduceQuery.matches
  let raf = 0
  let looping = false
  let visible = false
  let elapsed = POSTER_TIME
  let last = 0
  let sized = ''

  function draw(time) {
    const rect = hostEl.getBoundingClientRect()
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
    const w = Math.max(1, rect.width)
    const h = Math.max(1, rect.height)
    const key = Math.round(w * dpr) + 'x' + Math.round(h * dpr)
    if (key !== sized) {
      canvasEl.width = Math.round(w * dpr)
      canvasEl.height = Math.round(h * dpr)
      sized = key
    }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    paint(ctx, w, h, props.scene, time, props.variant === 'hero' ? 'hero' : 'frame')
  }

  function frame(now) {
    if (!looping) return
    const dt = last ? Math.min(0.033, (now - last) / 1000) : 0.016
    last = now
    if (!reduce) elapsed += dt
    draw(reduce ? POSTER_TIME : elapsed)
    raf = requestAnimationFrame(frame)
  }

  function start() {
    if (reduce || looping || !visible) return
    looping = true
    last = 0
    raf = requestAnimationFrame(frame)
  }

  function halt() {
    looping = false
    cancelAnimationFrame(raf)
  }

  const io = new IntersectionObserver((entries) => {
    visible = entries.some((entry) => entry.isIntersecting)
    if (!visible) halt()
    else if (reduce) draw(POSTER_TIME)
    else start()
  }, { threshold: 0.04 })

  const ro = new ResizeObserver(() => {
    if (looping) return
    draw(reduce ? POSTER_TIME : elapsed)
  })

  function onReduce() {
    reduce = reduceQuery.matches
    if (reduce) {
      halt()
      draw(POSTER_TIME)
    } else if (visible) start()
  }

  io.observe(hostEl)
  ro.observe(hostEl)
  reduceQuery.addEventListener('change', onReduce)
  draw(POSTER_TIME)

  teardown = () => {
    halt()
    io.disconnect()
    ro.disconnect()
    reduceQuery.removeEventListener('change', onReduce)
  }
})

onUnmounted(() => teardown())
</script>

<style scoped>
.pf {
  background: #141311;
  overflow: hidden;
}

.pf.is-hero {
  position: absolute;
  inset: 0;
}

.pf.is-panel,
.pf.is-strip {
  position: relative;
  width: 100%;
}

.pf.is-panel { aspect-ratio: 16 / 10; }
.pf.is-strip { aspect-ratio: 16 / 9; }

.pf canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
}

@media (min-width: 800px) {
  .pf.is-panel { aspect-ratio: 16 / 7; }
  .pf.is-strip { aspect-ratio: 2.5 / 1; }
}

@media (prefers-reduced-motion: reduce) {
  .pf canvas { transition: none; }
}
</style>
