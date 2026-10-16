<script setup>
import { onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import ProbeChrome from '../ProbeChrome.vue'
import { copyText } from '../copyText.js'

const INSTALL = 'go install github.com/buger/recs/cmd/recs@latest'
const stage = ref(null)
const active = ref('board')
const column = ref('proposal')
const flash = ref(false)
const modified = ref(false)
const copied = ref(false)
const narrow = ref(false)
const dashboards = ref(7)
const widgets = ref(21)
const spawned = ref([])
const reduce = ref(false)

const wins = reactive({
  finder: { x: 36, y: 390, z: 1 },
  editor: { x: 280, y: 430, z: 2 },
  board: { x: 620, y: 470, z: 3 }
})

const columns = ['lead', 'proposal', 'won']
let zTop = 3
let flashTimer = 0

function focus(id) {
  active.value = id
  if (wins[id]) {
    zTop += 1
    wins[id].z = zTop
  }
}

function onBarDown(event, id) {
  if (narrow.value) return
  if (event.button != null && event.button !== 0) return
  focus(id)
  const win = wins[id]
  const box = stage.value.getBoundingClientRect()
  const startX = event.clientX
  const startY = event.clientY
  const origX = win.x
  const origY = win.y
  const el = event.currentTarget.parentElement
  function move(ev) {
    const maxX = Math.max(0, box.width - el.offsetWidth)
    const maxY = Math.max(0, box.height - 48)
    win.x = Math.min(maxX, Math.max(0, origX + ev.clientX - startX))
    win.y = Math.min(maxY, Math.max(80, origY + ev.clientY - startY))
  }
  function up() {
    window.removeEventListener('pointermove', move)
    window.removeEventListener('pointerup', up)
  }
  window.addEventListener('pointermove', move)
  window.addEventListener('pointerup', up)
}

function moveCard(next) {
  if (!columns.includes(next) || next === column.value) return
  column.value = next
  modified.value = true
  if (reduce.value) {
    flash.value = false
    return
  }
  flash.value = true
  clearTimeout(flashTimer)
  flashTimer = setTimeout(() => { flash.value = false }, 700)
}

function onCardKey(event) {
  const index = columns.indexOf(column.value)
  if (event.key === 'ArrowRight' || event.key === ' ') {
    event.preventDefault()
    moveCard(columns[Math.min(columns.length - 1, index + 1)])
  } else if (event.key === 'ArrowLeft') {
    event.preventDefault()
    moveCard(columns[Math.max(0, index - 1)])
  }
}

function onCardDown(event) {
  if (narrow.value) return
  focus('board')
  const startX = event.clientX
  const origin = column.value
  function move(ev) {
    const dx = ev.clientX - startX
    if (dx > 70) moveCard(columns[Math.min(2, columns.indexOf(origin) + 1)])
    if (dx < -70) moveCard(columns[Math.max(0, columns.indexOf(origin) - 1)])
  }
  function up() {
    window.removeEventListener('pointermove', move)
    window.removeEventListener('pointerup', up)
  }
  window.addEventListener('pointermove', move)
  window.addEventListener('pointerup', up)
}

function addDashboard() {
  dashboards.value += 1
  widgets.value += 3
  if (spawned.value.length < 12) {
    const n = spawned.value.length
    spawned.value.push({
      id: n + 1,
      x: 80 + (n % 6) * 28,
      y: 160 + (n % 5) * 24,
      z: ++zTop
    })
  }
}

async function copy() {
  copied.value = await copyText(INSTALL)
}

function onResize() {
  narrow.value = window.matchMedia('(max-width: 800px)').matches
}

onMounted(() => {
  reduce.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  onResize()
  window.addEventListener('resize', onResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize)
  clearTimeout(flashTimer)
})
</script>

<template>
  <ProbeChrome
    class="desk"
    slug="recs"
    bg="#f1f2f3"
    github="https://github.com/buger/recs"
    repo-label="github.com/buger/recs"
    license="MIT"
    :style="{ '--bg': '#f1f2f3', '--ink': '#111111', '--focus': '#ff5e24', colorScheme: 'light' }"
  >
    <div ref="stage" class="stage">
      <h1>recs</h1>
      <p class="dek">The CRM your agents actually run. Local files. Unlimited dashboards.</p>
      <div class="cta-row">
        <button class="go" type="button" @click="copy">{{ INSTALL }}</button>
        <a class="slate" href="https://github.com/buger/recs" target="_blank" rel="noopener noreferrer">GitHub</a>
        <p v-if="copied" role="status">Copied</p>
      </div>

      <section
        class="win"
        :class="{ 'is-active': active === 'finder' }"
        :style="narrow ? null : { left: wins.finder.x + 'px', top: wins.finder.y + 'px', zIndex: wins.finder.z }"
        @pointerdown="focus('finder')"
      >
        <div class="titlebar" @pointerdown="onBarDown($event, 'finder')">
          <span class="dots" aria-hidden="true"><i></i><i></i><i></i></span>
          <b>Finder: ~/crm/</b>
        </div>
        <div class="body">
          <p class="file"><i class="tab" aria-hidden="true"></i> people/ada-lovelace.md</p>
          <p class="file"><i class="tab" aria-hidden="true"></i> companies/acme.md</p>
          <p class="file"><i class="tab" aria-hidden="true"></i> deals/acme-renewal.md</p>
          <p class="file"><i class="tab" aria-hidden="true"></i> views/pipeline.yaml</p>
          <p class="foot">{{ modified ? 'modified deals/acme-renewal.md · just now' : 'projection of the files' }}</p>
        </div>
      </section>

      <section
        class="win"
        :class="{ 'is-active': active === 'editor' }"
        :style="narrow ? null : { left: wins.editor.x + 'px', top: wins.editor.y + 'px', zIndex: wins.editor.z }"
        @pointerdown="focus('editor')"
      >
        <div class="titlebar" @pointerdown="onBarDown($event, 'editor')">
          <span class="dots" aria-hidden="true"><i></i><i></i><i></i></span>
          <b>deals/acme-renewal.md</b>
        </div>
        <div class="body">
          <pre class="editor">---
id: deal_acme_renewal
type: deal
title: Acme renewal
<span :class="{ flash }">stage: {{ column }}</span>
value: 12000
next: 2026-10-20
---</pre>
        </div>
      </section>

      <section
        class="win"
        :class="{ 'is-active': active === 'board' }"
        :style="narrow ? null : { left: wins.board.x + 'px', top: wins.board.y + 'px', zIndex: wins.board.z, width: narrow ? null : 'min(520px, calc(100% - 32px))' }"
        @pointerdown="focus('board')"
      >
        <div class="titlebar" @pointerdown="onBarDown($event, 'board')">
          <span class="dots" aria-hidden="true"><i></i><i></i><i></i></span>
          <b>pipeline.yaml</b>
        </div>
        <div class="body">
          <div class="cols">
            <div v-for="name in columns" :key="name">
              <h3>{{ name }}</h3>
              <button
                v-if="column === name"
                class="card"
                type="button"
                @pointerdown.stop="onCardDown"
                @keydown="onCardKey"
              >Acme renewal</button>
            </div>
          </div>
        </div>
      </section>

      <button class="more" type="button" @click="addDashboard">
        <b>+ New dashboard</b>
        <span class="count">dashboards: {{ dashboards }} / ∞ · widgets: {{ widgets }} / ∞</span>
      </button>

      <section
        v-for="dash in spawned"
        :key="dash.id"
        class="win is-active"
        :style="narrow ? null : { left: dash.x + 'px', top: dash.y + 'px', zIndex: dash.z, width: '260px' }"
      >
        <div class="titlebar">
          <span class="dots" aria-hidden="true"><i></i><i></i><i></i></span>
          <b>dashboard {{ dash.id }}</b>
        </div>
        <div class="body">
          <div class="mini">
            <div class="widget">metrics</div>
            <div class="widget">list</div>
            <div class="widget">week</div>
          </div>
        </div>
      </section>
    </div>

    <div class="below">
      <section class="win">
        <div class="titlebar"><span class="dots" aria-hidden="true"><i></i><i></i><i></i></span><b>README.md</b></div>
        <div class="body">
          <p>I wanted what the agent-dashboard products tease, without the ceiling. Unlimited dashboards. A CRM that lives next to the repo, not in someone else’s project quota.</p>
          <p>The system of record is files. recs never ships a model, a login, or a cloud sync.</p>
        </div>
      </section>
      <section class="win">
        <div class="titlebar"><span class="dots" aria-hidden="true"><i></i><i></i><i></i></span><b>CLI</b></div>
        <div class="body">
          <pre class="mono">recs --help
recs query 'type=deal status=talking' --json
# failed writes return ok: false, plus the error, the field, and the allowed values</pre>
        </div>
      </section>
      <section class="win">
        <div class="titlebar"><span class="dots" aria-hidden="true"><i></i><i></i><i></i></span><b>workspaces</b></div>
        <div class="body">
          <p class="file"><i class="tab" aria-hidden="true"></i> clients</p>
          <p class="file"><i class="tab" aria-hidden="true"></i> hiring</p>
          <p class="file"><i class="tab" aria-hidden="true"></i> research beat</p>
          <p>No account. No credit pool. No widget cap.</p>
        </div>
      </section>
      <section class="win">
        <div class="titlebar"><span class="dots" aria-hidden="true"><i></i><i></i><i></i></span><b>Install</b></div>
        <div class="body">
          <pre class="mono">go install github.com/buger/recs/cmd/recs@latest
recs serve --root testdata/sample
open http://localhost:7777</pre>
          <p>testdata/sample is a directory in the repository. After a plain go install, that path exists only in a checkout. recs init starts an empty workspace.</p>
          <p><a href="https://github.com/buger/recs">github.com/buger/recs</a></p>
        </div>
      </section>
    </div>
  </ProbeChrome>
</template>

<style src="./recs.css"></style>
