<template>
  <div class="iv" :data-variant="variant" aria-hidden="true">
    <!-- A: an agent run as a trace, every step carrying its evidence -->
    <div v-if="variant === 'a'" class="iv-trace">
      <p class="iv-head mono"><span>agent run · fix rate limit</span><span>trace 7f3a…c21</span></p>
      <ol>
        <li v-for="(s, i) in trace" :key="s.name" :style="{ '--i': i, '--x': s.x + '%', '--w': s.w + '%' }" :class="{ gate: s.gate }">
          <span class="mono iv-step">{{ s.name }}</span>
          <span class="iv-bar"><span></span></span>
          <span class="mono iv-ev">{{ s.ev }}</span>
        </li>
      </ol>
      <p class="iv-foot mono"><span class="ok">●</span> 7 steps · 7 with evidence · rerunnable</p>
    </div>

    <!-- B: a change set in type, with the proof pinned to the line it touches -->
    <div v-else-if="variant === 'b'" class="iv-diff">
      <p class="mono iv-file">middleware/rate_limit.go</p>
      <pre class="mono"><span v-for="(l, i) in diff" :key="i" :class="l.k" :style="{ '--i': i }">{{ l.t }}</span></pre>
      <div class="iv-note mono">
        <p><b>Intent</b> REQ-114 · burst limit per key</p>
        <p><b>Evidence</b> rate_limit_test.go · 12/12 passed</p>
        <p><b>Rerun</b> go test ./middleware -run Burst</p>
      </div>
      <p class="iv-stamp mono">Verified</p>
    </div>

    <!-- C: the lab's work as a catalogue, one tile per thing we ship -->
    <div v-else class="iv-grid">
      <a v-for="(t, i) in tiles" :key="t.name" :href="t.href" tabindex="-1" :class="['iv-tile', t.tier]" :style="{ '--i': i }">
        <span class="mono iv-kind">{{ t.kind }}</span>
        <span class="iv-name">{{ t.name }}</span>
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps({ variant: { type: String, default: 'a' } })
const trace = [
  { name: 'read intent', x: 0, w: 14, ev: 'REQ-114' },
  { name: 'search code', x: 10, w: 22, ev: 'probe · 6 files' },
  { name: 'plan change', x: 28, w: 12, ev: 'plan.md' },
  { name: 'edit', x: 38, w: 20, ev: 'diff +18 −4' },
  { name: 'run tests', x: 56, w: 24, ev: '12/12 passed' },
  { name: 'review gate', x: 78, w: 10, ev: 'checklist 5/5', gate: true },
  { name: 'record', x: 88, w: 12, ev: 'sha256:9c1e…' }
]
const diff = [
  { k: 'c', t: 'func Limit(key string) bool {' },
  { k: 'del', t: '-  return count[key] < max' },
  { k: 'add', t: '+  b := buckets.For(key)' },
  { k: 'add', t: '+  if !b.Allow(now()) {' },
  { k: 'add', t: '+    trace.Deny(key, b.Level())' },
  { k: 'add', t: '+    return false' },
  { k: 'add', t: '+  }' },
  { k: 'add', t: '+  return true' },
  { k: 'c', t: '}' }
]
const tiles = [
  { name: 'Proof', kind: 'Product', href: '#proof', tier: 'p' },
  { name: 'Oel', kind: 'Product', href: '/oel', tier: 'p' },
  { name: 'Spirit Room', kind: 'Product', href: 'https://spiritroom.app/', tier: 'p' },
  { name: 'Probe', kind: 'Core', href: '/probe', tier: 'c' },
  { name: 'Visor', kind: 'Core', href: '/visor', tier: 'c' },
  { name: 'qc', kind: 'Gate', href: '/qc' },
  { name: 'ste', kind: 'Validator', href: '/ste' },
  { name: 'aeo', kind: 'Benchmark', href: '/aeo' },
  { name: 'Fuzzers', kind: 'Fuzzer', href: '/fuzzers' },
  { name: 'docs-mcp', kind: 'MCP server', href: '/docs-mcp' },
  { name: 'recs', kind: 'CRM', href: '/recs' },
  { name: 'Maid', kind: 'Diagrams', href: '/maid' },
  { name: 'Vow', kind: 'Gates', href: '/vow' }
]
</script>

<style scoped>
.iv { --amber: #d8a25b; --paper: #f3f0e9; --dim: #a8a196; --line: rgba(243,240,233,.18); width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; color: var(--paper); }
.mono { font-family: "Geist Mono", ui-monospace, Menlo, monospace; }
@keyframes rise { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
@keyframes grow { from { transform: scaleX(0); } to { transform: scaleX(1); } }
@keyframes pulse { 0%,100% { opacity: .35; } 50% { opacity: 1; } }

/* A: trace */
.iv-trace { width: min(640px, 100%); border: 1px solid var(--line); background: rgba(20,19,17,.6); padding: 18px 20px; }
.iv-head, .iv-foot { display: flex; justify-content: space-between; margin: 0; font-size: 13px; color: var(--dim); }
.iv-trace ol { list-style: none; margin: 18px 0; padding: 0; display: grid; gap: 16px; }
.iv-trace li { display: grid; grid-template-columns: 8.5rem 1fr 8.5rem; gap: 12px; align-items: center; opacity: 0; animation: rise .5s ease forwards; animation-delay: calc(var(--i) * 260ms); }
.iv-step { font-size: 15px; }
.iv-bar { position: relative; height: 12px; background: rgba(243,240,233,.06); }
.iv-bar span { position: absolute; top: 0; bottom: 0; left: var(--x); width: var(--w); background: var(--paper); transform-origin: left; animation: grow .6s ease forwards; animation-delay: calc(var(--i) * 260ms + 150ms); transform: scaleX(0); }
.gate .iv-bar span, .gate .iv-step { background-color: var(--amber); color: var(--amber); }
.gate .iv-step { background: none; }
.iv-ev { font-size: 14px; color: var(--amber); text-align: right; }
.iv-foot { justify-content: flex-start; gap: 8px; border-top: 1px solid var(--line); padding-top: 12px; color: var(--paper); }
.ok { color: var(--amber); animation: pulse 2s infinite; }

/* B: diff */
.iv-diff { position: relative; width: min(560px, 100%); }
.iv-file { margin: 0 0 10px; font-size: 13px; color: var(--dim); }
.iv-diff pre { margin: 0; font-size: clamp(14px, 1.25vw, 19px); line-height: 1.6; display: flex; flex-direction: column; }
.iv-diff pre span { opacity: 0; animation: rise .4s ease forwards; animation-delay: calc(var(--i) * 140ms); white-space: pre; }
.iv-diff .del { color: #b98b80; text-decoration: line-through; text-decoration-color: rgba(185,139,128,.6); }
.iv-diff .add { color: var(--paper); background: rgba(216,162,91,.12); box-shadow: inset 3px 0 0 var(--amber); }
.iv-diff .c { color: var(--dim); }
.iv-note { margin-top: 18px; border-left: 1px solid var(--amber); padding: 4px 0 4px 14px; font-size: 13px; opacity: 0; animation: rise .5s ease forwards 1.5s; }
.iv-note p { margin: 4px 0; color: var(--paper); }
.iv-note b { display: inline-block; width: 6rem; font-weight: 400; color: var(--amber); text-transform: uppercase; font-size: 11px; letter-spacing: .08em; }
.iv-stamp { position: absolute; right: 0; top: 24px; margin: 0; padding: 6px 12px; border: 2px solid var(--amber); color: var(--amber); font-size: 14px; letter-spacing: .14em; text-transform: uppercase; transform: rotate(-6deg); opacity: 0; animation: rise .4s ease forwards 1.9s; }

/* C: catalogue grid */
.iv-grid { width: min(600px, 100%); display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: var(--line); border: 1px solid var(--line); }
.iv-tile { aspect-ratio: 1 / 1; background: #141311; padding: 12px; display: flex; flex-direction: column; justify-content: space-between; text-decoration: none; color: var(--paper); opacity: 0; animation: rise .4s ease forwards; animation-delay: calc(var(--i) * 70ms); }
.iv-kind { font-size: 10px; letter-spacing: .08em; text-transform: uppercase; color: var(--dim); }
.iv-name { font-size: clamp(16px, 1.5vw, 22px); letter-spacing: -0.02em; }
.iv-tile.p { background: #1f1c18; }
.iv-tile.p .iv-kind { color: var(--amber); }
.iv-tile.p:first-child { grid-column: span 2; grid-row: span 2; aspect-ratio: auto; background: var(--amber); color: #141311; }
.iv-tile.p:first-child .iv-kind { color: #141311; }
.iv-tile.p:first-child .iv-name { font-size: clamp(30px, 3vw, 48px); }
.iv-tile.c .iv-kind { color: var(--paper); }

@media (max-width: 900px) {
  .iv-trace li { grid-template-columns: 6rem 1fr 6.5rem; gap: 8px; }
  .iv-step { font-size: 13px; }
  .iv-ev { font-size: 12px; }
  .iv-trace ol { gap: 12px; }
  .iv-trace { padding: 14px; }
  .iv-diff pre { font-size: 13px; }
  .iv-stamp { top: -4px; }
  .iv-grid { grid-template-columns: repeat(4, 1fr); }
  .iv-tile { padding: 8px; }
  .iv-name { font-size: 13px; }
  .iv-kind { font-size: 8px; }
}
@media (prefers-reduced-motion: reduce) { .iv * { animation: none !important; opacity: 1 !important; transform: none !important; } }
</style>
