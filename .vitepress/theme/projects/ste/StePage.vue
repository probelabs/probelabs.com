<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import ProbeChrome from '../ProbeChrome.vue'
import { copyText } from '../copyText.js'
import { HERO_PAIRS, PAIRS } from './dictionary-subset.js'

const GO = 'go install github.com/probelabs/ste/cmd/ste@latest'
const NPM = 'npm install -g @probelabs/ste'
// Real count from the Issue 9 dictionary, ste 1.2.0 (node/bin/ste.js):
//   cd .vitepress/theme/projects/ste && node <ste.js> check index.md
//   0 errors, 0 warnings, exit 0. ste.yaml in that directory lists technical names.
// Re-run that command if the prose in index.md changes, and put the new total here.
const FINDINGS = 0

const pairIndex = ref(0)
const struck = ref(false)
const copied = ref('')
const draft = ref('Do not utilize the valve. Commence the test.')
let timers = []

const rules = [
  ['approved-words', '1', 'Use only dictionary-approved words with their approved meaning.'],
  ['approved-form', '1', 'Use only the approved forms of an approved word.'],
  ['abbreviation', '1', 'Use only approved abbreviations.'],
  ['numbers', '1', 'Do not start a sentence with a numeral. Put a space before a unit. Use approved units.'],
  ['noun-cluster', '2', 'Do not use a cluster of more than 3 nouns.'],
  ['passive-voice', '3', 'Use the active voice. This heuristic checks for a be-verb with an -ed form.'],
  ['sentence-length', '4', 'Keep sentences short: 20 words for an instruction, 25 for a descriptive sentence.'],
  ['procedure-step', '5', 'Start each procedure step with an approved verb in the imperative form.']
]

const lookup = new Map(PAIRS.map(([word, alt]) => [word, alt]))

const parts = computed(() => splitDraft(draft.value))

function splitDraft(text) {
  const keys = [...lookup.keys()].sort((a, b) => b.length - a.length)
  const out = []
  let i = 0
  const lower = text.toLowerCase()
  while (i < text.length) {
    let hit = null
    for (const key of keys) {
      if (lower.startsWith(key, i)) {
        const before = i === 0 || /[^a-z]/i.test(text[i - 1])
        const after = i + key.length === text.length || /[^a-z]/i.test(text[i + key.length])
        if (before && after) {
          hit = key
          break
        }
      }
    }
    if (hit) {
      out.push({ text: text.slice(i, i + hit.length), alt: lookup.get(hit).toUpperCase() })
      i += hit.length
    } else {
      const last = out[out.length - 1]
      if (last && !last.alt) last.text += text[i]
      else out.push({ text: text[i], alt: '' })
      i += 1
    }
  }
  return out
}

function later(fn, ms) {
  timers.push(setTimeout(fn, ms))
}

function clearTimers() {
  timers.forEach((id) => clearTimeout(id))
  timers = []
}

function showPair(index, animate) {
  pairIndex.value = index
  struck.value = !animate
  if (!animate) return
  later(() => { struck.value = true }, 900)
}

function cycle() {
  clearTimers()
  let index = 0
  const run = () => {
    showPair(index, true)
    index = (index + 1) % HERO_PAIRS.length
    later(run, 3200)
  }
  run()
}

async function copy(text, key) {
  const ok = await copyText(text)
  copied.value = ok ? key : ''
}

const hero = computed(() => HERO_PAIRS[pairIndex.value])

onMounted(() => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduce) showPair(0, false)
  else cycle()
})

onBeforeUnmount(clearTimers)
</script>

<template>
  <ProbeChrome
    class="ste"
    slug="ste"
    bg="#ffffff"
    github="https://github.com/probelabs/ste"
    repo-label="github.com/probelabs/ste"
    license="MIT"
    :style="{ '--bg': '#ffffff', '--ink': '#000000', '--focus': '#000000', colorScheme: 'light' }"
  >
    <header class="hero">
      <p class="label">ASD-STE100 / Issue 9 / Validator</p>
      <div class="specimen">
        <p class="bad" :class="{ 'is-struck': struck }">{{ hero[0] }}</p>
        <p v-if="struck" class="good">{{ hero[1] }}</p>
        <p v-else class="good" hidden>USE</p>
      </div>
      <p class="rule mono">ste check manual.md → 1 finding · suggestion: {{ hero[1].toLowerCase() }}</p>
      <div class="install-row">
        <p><button class="copy" type="button" @click="copy(GO, 'go')">{{ GO }}</button></p>
        <p><button class="copy" type="button" @click="copy(NPM, 'npm')">{{ NPM }}</button></p>
        <p><a class="gh" href="https://github.com/probelabs/ste" target="_blank" rel="noopener noreferrer">GitHub →</a></p>
      </div>
      <p v-if="copied" class="label" role="status">Copied</p>
    </header>

    <section aria-labelledby="s1">
      <p id="s1" class="label sec-label">Check 01</p>
      <table>
        <tbody>
          <tr v-for="row in rules" :key="row[0]">
            <th class="id" scope="row">{{ row[0] }}</th>
            <td class="id">{{ row[1] }}</td>
            <td>{{ row[2] }}</td>
          </tr>
        </tbody>
      </table>
      <p class="prose" style="padding: 12px 24px 0">Operate <span class="mono">ste rules</span>.</p>
      <p class="prose" style="padding: 0 24px">Each item shows its part of ASD-STE100.</p>
      <p class="prose" style="padding: 0 24px">A decision from the <span class="mono">dictionary</span> be an error.</p>
      <p class="prose" style="padding: 0 24px">An item with a <span class="mono">heuristic</span> be a precaution.</p>
    </section>

    <section aria-labelledby="s2">
      <p id="s2" class="label sec-label">Output 02</p>
      <table>
        <tbody>
          <tr>
            <th class="id" scope="row">pretty</th>
            <td><pre>error[approved-words]: "utilize" is not an approved word
 --> manual.md:1:1
  = help: use "use"</pre></td>
          </tr>
          <tr>
            <th class="id" scope="row">json</th>
            <td><pre>{ "schema": "ste-diagnostics/v1",
  "rule": "approved-words",
  "suggestion": "use \"use\"" }</pre></td>
          </tr>
          <tr>
            <th class="id" scope="row">sarif</th>
            <td><pre>{ "version": "2.1.0",
  "$schema": "https://json.schemastore.org/sarif-2.1.0.json" }</pre></td>
          </tr>
        </tbody>
      </table>
      <p class="prose" style="padding: 12px 24px 0">Read the shape of the output in <span class="mono">internal/report</span>.</p>
      <p class="prose" style="padding: 0 24px">This copy shows the shape of the output.</p>
      <p class="prose" style="padding: 0 24px">It be not the output of <span class="mono">ste check</span> on this sheet.</p>
      <p class="prose" style="padding: 0 24px">You can get <span class="mono">pretty</span>, JSON, and SARIF 2.1.0.</p>
    </section>

    <section aria-labelledby="s3">
      <p id="s3" class="label sec-label">Exit code 03</p>
      <table>
        <tbody>
          <tr>
            <th class="id" scope="row">0</th>
            <td>No findings.</td>
          </tr>
          <tr>
            <th class="id" scope="row">1</th>
            <td>Findings.</td>
          </tr>
          <tr>
            <th class="id" scope="row">2</th>
            <td>Execution error.</td>
          </tr>
        </tbody>
      </table>
      <p class="prose" style="padding: 12px 24px 0">The tool writes a <span class="mono">hint</span> on <span class="mono">stderr</span> when <span class="mono">--format</span> be not <span class="mono">pretty</span>, <span class="mono">text</span>, <span class="mono">json</span>, or <span class="mono">sarif</span>.</p>
    </section>

    <section aria-labelledby="s4">
      <p id="s4" class="label sec-label">Go shape and Node.js shape 04</p>
      <div class="split">
        <article>
          <h3>Go</h3>
          <p>The Go shape be a CLI.</p>
          <p>Install the Go shape from the copy above.</p>
          <p>The Node.js shape be a ReqProof copy of the Go source.</p>
          <p>The README shows <span class="mono">proof audit --no-cache</span>.</p>
          <p>The count be 209 check, 0 error, and 0 precaution.</p>
          <p>The README also shows <span class="mono">mirror_complete</span>.</p>
        </article>
        <article>
          <h3>Node.js</h3>
          <p>The Node.js shape contains no <span class="mono">dependencies</span>.</p>
          <p>A count of 18 or more be necessary for Node.js.</p>
          <p>The tool be not a part of ASD.</p>
          <p><span class="mono">npm install -g @probelabs/ste</span></p>
        </article>
      </div>
    </section>

    <section class="try" aria-labelledby="try-title">
      <p id="try-title" class="label">Example 05</p>
      <p class="prose">Write an instruction.</p>
      <p class="prose">This example holds {{ PAIRS.length }} entry from Issue 9.</p>
      <label class="label" for="ste-try">Write an instruction</label>
      <textarea id="ste-try" v-model="draft" spellcheck="false"></textarea>
      <div class="preview" aria-live="polite">
        <template v-for="(part, index) in parts" :key="index">
          <span v-if="part.alt" class="bad is-struck">{{ part.text }}</span>
          <span v-if="part.alt" class="good">{{ part.alt }}</span>
          <template v-else>{{ part.text }}</template>
        </template>
      </div>
      <p class="prose">This example be not <span class="mono">ste check</span>.</p>
    </section>

    <section class="end" aria-labelledby="s5">
      <p id="s5" class="label">Install 06</p>
      <p class="prose" style="padding: 12px 24px 0">Install the tool from the copy above.</p>
      <p class="prose" style="padding: 0 24px 12px">Read the source on GitHub.</p>
      <div class="install-row">
        <p><button class="copy" type="button" @click="copy(GO, 'go2')">{{ GO }}</button></p>
        <p><button class="copy" type="button" @click="copy(NPM, 'npm2')">{{ NPM }}</button></p>
        <p><a class="gh" href="https://github.com/probelabs/ste" target="_blank" rel="noopener noreferrer">GitHub →</a></p>
      </div>
    </section>

    <p class="findings">This page: {{ FINDINGS }} findings · ste check index.md</p>
  </ProbeChrome>
</template>

<style src="./ste.css"></style>
