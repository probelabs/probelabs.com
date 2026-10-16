<template>
  <div class="iv" aria-hidden="true">
    <!-- C: the lab's work as a catalogue, one tile per thing we ship -->
    <div class="iv-grid">
      <a v-for="(t, i) in tiles" :key="t.name" :href="t.href" tabindex="-1" :class="['iv-tile', t.tier]" :style="{ '--i': i }">
        <span class="mono iv-kind">{{ t.kind }}</span>
        <span class="iv-name">{{ t.name }}</span>
      </a>
    </div>
  </div>
</template>

<script setup>
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

/* C: catalogue grid */
.iv-grid { width: min(680px, 100%); display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: var(--line); border: 1px solid var(--line); }
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
  .iv-grid { grid-template-columns: repeat(4, 1fr); }
  .iv-tile { padding: 8px; }
  .iv-name { font-size: 13px; }
  .iv-kind { font-size: 8px; }
}
@media (prefers-reduced-motion: reduce) { .iv * { animation: none !important; opacity: 1 !important; transform: none !important; } }
</style>
