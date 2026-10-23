<script setup>
import { onMounted, ref } from 'vue'
import ProbeChrome from '../ProbeChrome.vue'
import { copyText } from '../copyText.js'

const INIT = 'python3 -m aeo init --from-example xerj --out aeo.config.json'
const copied = ref(false)
const reduce = ref(false)
const paused = ref(false)
const hover = ref(false)

const queries = [
  {
    engine: 'Codex',
    arm: 'SEARCH',
    text: 'ripgrep vs Recoll vs DocFetcher local folder search'
  },
  {
    engine: 'Codex',
    arm: 'SEARCH',
    text: 'best desktop search Recoll DocFetcher 2026'
  }
]

const engines = [
  {
    name: 'Claude Code',
    knowledge: 'mention ✗ · searched no',
    search: 'mention ✗ · searched no'
  },
  {
    name: 'Codex',
    knowledge: 'mention ✗ · searched no',
    search: 'mention ✗ · searched yes ⚠'
  },
  {
    name: 'Grok',
    knowledge: 'mention ✗ · searched no',
    search: 'mention ✗ · searched no'
  }
]

const steps = [
  'measure',
  'ship one URL per cluster',
  'check live and indexed',
  're-run affected seeds',
  'board'
]

function parts(text) {
  const names = ['ripgrep', 'Recoll', 'DocFetcher']
  const re = new RegExp(`(${names.join('|')})`, 'gi')
  return text.split(re).filter(Boolean).map((bit) => ({
    bit,
    flag: names.some((name) => name.toLowerCase() === bit.toLowerCase())
  }))
}

async function copy() {
  copied.value = await copyText(INIT)
}

onMounted(() => {
  reduce.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
})
</script>

<template>
  <ProbeChrome
    class="aeo"
    slug="aeo"
    bg="#008fff"
    status="Currently in private development"
    :style="{ '--bg': '#008fff', '--ink': '#ffffff', '--focus': '#ffe400', colorScheme: 'light' }"
  >
    <header class="hero">
      <h1>Do coding agents ever <span class="hi">say your name</span>?</h1>
      <div class="panel">
        <p class="example-flag">Example board</p>
        <h2>examples/xerj · one watch question</h2>
        <div class="bracket" role="table" aria-label="Example board for folder-by-content">
          <article v-for="engine in engines" :key="engine.name">
            <h3 class="eng">{{ engine.name }}</h3>
            <p class="cell"><strong>KNOWLEDGE</strong>{{ engine.knowledge }}</p>
            <p class="cell"><strong>SEARCH</strong>{{ engine.search }}</p>
          </article>
        </div>
        <p class="src">Question: “What’s the best way to search through a folder of files by content?” Call: trap. Prebelief in the Codex search: ripgrep, recoll, docfetcher. Source file says it is an example fixture, not a live CLI capture.</p>
      </div>
      <div class="cta-row">
        <button class="cta" type="button" @click="copy">{{ INIT }}</button>
        <p class="private-note">Currently in private development</p>
        <p v-if="copied" role="status">Copied</p>
      </div>
    </header>

    <div
      v-if="!reduce"
      class="ticker"
      :class="{ 'is-paused': paused }"
      @mouseenter="hover = true"
      @mouseleave="hover = false"
      @focusin="hover = true"
      @focusout="hover = false"
    >
      <div class="track">
        <p v-for="n in 2" :key="n" class="q">
          <template v-for="query in queries" :key="query.text + n">
            <span v-for="(part, index) in parts(query.text)" :key="query.text + index + n" :class="{ flag: part.flag }">{{ part.bit }}</span>
            <span> · </span>
          </template>
        </p>
      </div>
      <button type="button" @click="paused = !paused">{{ paused ? 'Play queries' : 'Pause queries' }}</button>
      <p v-if="hover" class="who">Codex · SEARCH</p>
    </div>
    <ul v-else class="static">
      <li v-for="query in queries" :key="query.text">
        <span v-for="(part, index) in parts(query.text)" :key="index" :class="{ flag: part.flag }">{{ part.bit }}</span>
        — Codex · SEARCH
      </li>
    </ul>
    <p class="caption">They typed the incumbent before they searched. That’s confirmation, not discovery.</p>

    <section class="arms" aria-label="Two arms">
      <div class="arm">
        <h2 class="arm-word">Knowledge</h2>
        <p>What the model already believes, with search forced off. A new brand almost never wins this path in year one. Measure it anyway.</p>
      </div>
      <div class="split" aria-hidden="true"></div>
      <div class="arm">
        <h2 class="arm-word">Search</h2>
        <p>Whether the engine searched, and the verbatim query. Most search is confirmation of an incumbent already named in the query, not discovery of you.</p>
      </div>
    </section>

    <section class="number" aria-labelledby="rate">
      <p class="example-flag">Example</p>
      <p id="rate" class="num">0.00</p>
      <p>Search-arm mention rate on the example fixture <span style="font-family: var(--mono)">examples/xerj/aeo-data/example-run.json</span>. One watch question. Not a live capture. Knowledge mention rate on that file is also 0.00. Search rate is 0.33 because Codex searched.</p>
    </section>

    <section aria-labelledby="loop-title">
      <h2 id="loop-title" class="sr" style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)">Operating loop</h2>
      <ol class="loop">
        <template v-for="(step, index) in steps" :key="step">
          <li class="step"><b>0{{ index + 1 }}</b> {{ step }}</li>
          <span v-if="index < steps.length - 1" class="arrow" aria-hidden="true">→</span>
        </template>
      </ol>
    </section>

    <section class="run" aria-labelledby="run-title">
      <h2 id="run-title">Run it</h2>
      <pre>python3 -m aeo init --brand Acme --domain acme.example --out aeo.config.json
python3 -m aeo init --from-example xerj --out aeo.config.json
python3 -m aeo run --config aeo.config.json --engine all --arm both
python3 -m aeo board aeo-data/runs/&lt;run_id&gt;.json</pre>
      <p>Python 3.11+. Standard library only. Runs on your own machine, not a VPS or datacenter. aeo is currently in private development, so these commands show how a run works rather than a public install.</p>
    </section>
  </ProbeChrome>
</template>

<style src="./aeo.css"></style>
