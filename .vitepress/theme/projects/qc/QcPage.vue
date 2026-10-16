<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import ProbeChrome from '../ProbeChrome.vue'
import { copyText } from '../copyText.js'

const INSTALL = 'curl -fsSL https://raw.githubusercontent.com/probelabs/qc/main/scripts/install.sh | sh'
const PS1 = 'irm https://raw.githubusercontent.com/probelabs/qc/main/scripts/install.ps1 | iex'

const HASH = {
  '01': 'ae4b452d419da2ca',
  '02': 'b10d6c84ed8dc304',
  '03': 'f0cc13a01a5f994b',
  '03b': '0554676868980c1d',
  '04': '488f10a19902a9c3',
  '05': '0c6c7bdbe783b284'
}

const rows = ref([
  { id: '01', item: 'Tests cover the changed path', path: 'src/gate_test.c', hash: '', state: 'wait' },
  { id: '02', item: 'Migration is reversible', path: 'db/migrate.sql', hash: '', state: 'wait' },
  { id: '03', item: 'Docs updated', path: 'README.md', hash: '', state: 'wait' },
  { id: '04', item: 'Evidence names a real path', path: 'qc/docs.qcl', hash: '', state: 'wait' },
  { id: '05', item: 'Human items stay with a person', path: 'qc/release.qcl', hash: '', state: 'wait' }
])

const active = ref(-1)
const cleared = ref(false)
const dirty = ref(false)
const copied = ref('')
const reduce = ref(false)
let timers = []

const ledger = [
  { cmd: 'qc init', effect: 'Vendors the APE into the repo as qc/qc.' },
  { cmd: 'qc mark <ref> --pass -m "…"', effect: 'Records an evidenced answer. The README rejects applause such as lgtm.' },
  { cmd: 'qc verify', effect: 'Reads scratch plus committed state. Exit 0 is clear, 1 is open, 2 is config or parse.' },
  { cmd: 'qc seal --staged', effect: 'Promotes matching scratch. qc verify --ci is the read-only gate of record.' }
]

function later(fn, ms) {
  const id = setTimeout(fn, ms)
  timers.push(id)
}

function clearTimers() {
  timers.forEach((id) => clearTimeout(id))
  timers = []
}

function showEnd() {
  rows.value.forEach((row) => {
    row.hash = HASH[row.id]
    row.state = 'ok'
  })
  dirty.value = false
  active.value = -1
  cleared.value = true
}

function play() {
  clearTimers()
  rows.value.forEach((row) => {
    row.hash = ''
    row.state = 'wait'
  })
  dirty.value = false
  cleared.value = false
  let index = 0
  const step = () => {
    if (index >= rows.value.length) {
      active.value = -1
      cleared.value = true
      return
    }
    active.value = index
    const row = rows.value[index]
    row.state = 'live'
    const full = HASH[row.id]
    let count = 0
    const type = () => {
      count += 1
      row.hash = full.slice(0, count)
      if (count < full.length) later(type, 16)
      else {
        row.state = 'ok'
        index += 1
        later(step, 160)
      }
    }
    type()
  }
  step()
}

async function digest(text) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text))
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('').slice(0, 16)
}

async function toggleFile() {
  const row = rows.value[2]
  dirty.value = !dirty.value
  const bytes = dirty.value ? 'Install with the shell script!\n' : 'Install with the shell script.\n'
  const hash = await digest(bytes)
  row.hash = hash
  row.state = dirty.value ? 'stale' : 'ok'
  active.value = dirty.value ? 2 : -1
  cleared.value = rows.value.every((item) => item.state === 'ok')
}

async function copy(text, key) {
  const ok = await copyText(text)
  copied.value = ok ? key : ''
  if (ok) later(() => { if (copied.value === key) copied.value = '' }, 1600)
}

onMounted(() => {
  reduce.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduce.value) showEnd()
  else play()
})

onBeforeUnmount(clearTimers)
</script>

<template>
  <ProbeChrome
    class="qc"
    slug="qc"
    bg="#f3f3f3"
    github="https://github.com/probelabs/qc"
    repo-label="github.com/probelabs/qc"
    :style="{ '--bg': '#f3f3f3', '--ink': '#151515', '--focus': '#fff824', colorScheme: 'light' }"
  >
    <header class="hero">
      <div class="hero-top">
        <div>
          <h1>QC</h1>
          <p class="kicker">Deterministic checklist gate for AI-driven development</p>
        </div>
        <div class="stamp" :class="{ 'is-cleared': cleared }" aria-live="polite">
          <svg viewBox="0 0 320 180" role="img" :aria-label="cleared ? 'CLEARED' : 'NOT CLEARED'">
            <rect x="10" y="10" width="300" height="160" :fill="cleared ? '#fff824' : 'none'" stroke="#151515" :stroke-width="cleared ? 2 : 6" />
            <rect x="22" y="22" width="276" height="136" fill="none" stroke="#151515" stroke-width="2" />
            <text class="stamp-word" x="160" y="108" text-anchor="middle" fill="#151515">{{ cleared ? 'CLEARED' : 'NOT CLEARED' }}</text>
          </svg>
        </div>
      </div>
      <div class="actions">
        <button class="pill" type="button" @click="copy(INSTALL, 'unix')">
          <span>{{ INSTALL }}</span>
          <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
            <rect x="5" y="5" width="9" height="9" fill="none" stroke="currentColor" stroke-width="1.5" />
            <rect x="2" y="2" width="9" height="9" fill="#000" stroke="currentColor" stroke-width="1.5" />
          </svg>
          <span class="sr">Copy install command</span>
        </button>
        <a class="textlink" href="https://github.com/probelabs/qc" target="_blank" rel="noopener noreferrer">GitHub →</a>
        <p v-if="copied === 'unix'" class="status" role="status">Copied</p>
      </div>
    </header>

    <table>
      <caption>Inspection sheet · demonstration rows, not a sealed run</caption>
      <tbody>
        <tr
          v-for="(row, index) in rows"
          :key="row.id"
          :class="{ 'is-active': active === index, 'is-stale': row.state === 'stale' }"
        >
          <th class="num" scope="row">{{ row.id }}</th>
          <td class="item">
            {{ row.item }}
            <button v-if="row.id === '03'" type="button" @click="toggleFile">
              {{ dirty ? 'Restore file' : 'Edit file' }}
            </button>
          </td>
          <td class="ev">
            <template v-if="row.state === 'stale'">— stale —</template>
            <template v-else-if="row.state === 'wait'">— missing —</template>
            <template v-else>sha256:{{ row.hash }}<br>{{ row.path }}</template>
          </td>
        </tr>
      </tbody>
    </table>
    <p class="note">Evidence is bound to bytes. Change the file, lose the clearance.</p>

    <section aria-labelledby="why-title">
      <h2 id="why-title" class="sr">Why</h2>
      <div class="why">
        <p>Agents are non-deterministic.</p>
        <p>A content-addressed attestation is not.</p>
      </div>
    </section>

    <table>
      <caption>How it runs</caption>
      <tbody>
        <tr v-for="(row, index) in ledger" :key="row.cmd">
          <th class="num" scope="row">0{{ index + 1 }}</th>
          <td class="cmd">{{ row.cmd }}</td>
          <td class="effect">{{ row.effect }}</td>
        </tr>
      </tbody>
    </table>

    <section aria-labelledby="binary-title">
      <h2 id="binary-title" class="sr">One binary</h2>
      <div class="installs">
        <div>
          <h3>macOS / Linux</h3>
          <pre>{{ INSTALL }}</pre>
        </div>
        <div>
          <h3>Windows PowerShell</h3>
          <pre>{{ PS1 }}</pre>
        </div>
        <div>
          <h3>Git Bash</h3>
          <pre>{{ INSTALL }}</pre>
        </div>
      </div>
      <p class="note">One Cosmopolitan APE file. Linux, macOS, and Windows from a shell. Do not open it from a GUI file manager. The installer needs no root. The repository has no LICENSE file.</p>
    </section>

    <section class="end" aria-labelledby="install-title">
      <h2 id="install-title" class="sr">Install</h2>
      <div class="actions">
        <button class="pill" type="button" @click="copy(INSTALL, 'end')">
          <span>{{ INSTALL }}</span>
          <span class="sr">Copy install command</span>
        </button>
        <a class="textlink" href="https://github.com/probelabs/qc" target="_blank" rel="noopener noreferrer">GitHub →</a>
        <p v-if="copied === 'end'" class="status" role="status">Copied</p>
      </div>
    </section>
  </ProbeChrome>
</template>

<style src="./qc.css"></style>
