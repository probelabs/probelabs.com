<script setup>
import { computed, onMounted, ref } from 'vue'

import ProbeChrome from '../ProbeChrome.vue'

const reduce = ref(false)

const originals = {
  json: '{"user":{"name":"\\uD800","id":1},"tags":["a","b"]}',
  graphql: 'query { user(id: 1) { name @include(if: true) { a { b { c } } } } }',
  xml: '<?xml version="1.0"?><a href="x"><![CDATA[hi]]><b>text</b></a>'
}

const docs = ref([
  { id: 'json', tag: 'JSON · Go', text: originals.json, caret: 0, op: '', cut: null, panic: false, pixels: [] },
  { id: 'graphql', tag: 'GRAPHQL · Rust', text: originals.graphql, caret: 0, op: '', cut: null, panic: false, pixels: [] },
  { id: 'xml', tag: 'XML · Rust', text: originals.xml, caret: 0, op: '', cut: null, panic: false, pixels: [] }
])

function operator(id, index, text) {
  const ch = text[index] || ''
  const around = text.slice(Math.max(0, index - 4), index + 4)
  if (id === 'json') {
    if (around.includes('\\u')) return 'InjectLoneSurrogate'
    if (ch === ':' || text[index - 1] === ':') return 'TruncateAtValueBoundary'
    if (ch === '{' || ch === '[') return 'TruncateMidStructure'
    if (ch === '"' ) return 'TruncateMidKey'
    if (ch === '\\') return 'TruncateMidEscape'
    if (ch === ',') return 'TruncateMidElement'
    return 'ByteflipAtStructuralByte'
  }
  if (id === 'graphql') {
    if (ch === '{') return 'truncate_at_selection_set'
    if (ch === '(') return 'truncate_at_argument_list'
    if (ch === '@') return 'truncate_at_directive'
    if (around.includes('\\u')) return 'inject_lone_surrogate'
    if (ch === ':') return 'truncate_at_variable_default'
    return 'byteflip_at_structural_byte'
  }
  if (around.includes('CDATA') || around.includes('<![')) return 'inject_unclosed_cdata'
  if (ch === '<') return 'truncate_after_open_angle'
  if (ch === '"') return 'truncate_inside_attr_value'
  if (ch === '>') return 'unbalance_end_tag'
  return 'truncate_inside_tag_name'
}

function pointOp(doc, index) {
  doc.caret = index
  doc.op = operator(doc.id, index, doc.text)
}

function apply(doc) {
  if (doc.caret <= 0) doc.caret = Math.max(1, Math.floor(doc.text.length / 2))
  doc.op = operator(doc.id, doc.caret, doc.text)
  doc.text = doc.text.slice(0, doc.caret)
  doc.cut = doc.caret
  doc.panic = true
  const count = 8 + (doc.caret % 13)
  doc.pixels = Array.from({ length: count }, (_, n) => ({
    dx: `${((n % 5) - 2) * 16}px`,
    dy: `${(Math.floor(n / 5) - 1) * 14}px`
  }))
}

function onKey(event, doc) {
  if (event.key === 'ArrowRight') {
    event.preventDefault()
    pointOp(doc, Math.min(doc.text.length - 1, doc.caret + 1))
  } else if (event.key === 'ArrowLeft') {
    event.preventDefault()
    pointOp(doc, Math.max(0, doc.caret - 1))
  } else if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    apply(doc)
  }
}

function restore(doc) {
  doc.text = originals[doc.id]
  doc.caret = 0
  doc.op = ''
  doc.cut = null
  doc.panic = false
  doc.pixels = []
}

function caretFromEvent(event, doc) {
  const span = event.target?.closest?.('.char')
  if (!span) return doc.caret
  const chars = span.parentElement.querySelectorAll('.char')
  return Math.max(0, [...chars].indexOf(span))
}

const activeOp = computed(() => docs.value.find((doc) => doc.op)?.op || '')

onMounted(() => {
  reduce.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
})
</script>

<template>
  <ProbeChrome
    class="fuzz"
    slug="fuzzers"
    bg="#000000"
    github="https://github.com/probelabs/json-fuzz"
    repo-label="json-fuzz · graphql-fuzz · xml-fuzz"
    license="xml-fuzz MIT; json-fuzz and graphql-fuzz READMEs state MIT"
    :style="{ '--bg': '#000000', '--ink': '#ffffff', '--focus': '#fff500', colorScheme: 'dark' }"
  >
    <div class="stage">
      <pre
        v-for="doc in docs"
        :key="doc.id"
        class="doc"
        tabindex="0"
        :aria-label="doc.tag + '. Arrow keys move. Enter applies the operator at the caret.'"
        @mousemove="pointOp(doc, caretFromEvent($event, doc))"
        @click="apply(doc)"
        @keydown="onKey($event, doc)"
      ><span class="chip">{{ doc.tag }}</span>
<span
          v-for="(ch, index) in doc.text.split('')"
          :key="doc.id + index"
          class="char"
          :class="{ 'is-caret': index === doc.caret }"
          @mouseenter="pointOp(doc, index)"
        >{{ ch }}</span><span v-if="doc.pixels.length && !reduce" class="burst" aria-hidden="true"><i v-for="(px, n) in doc.pixels" :key="doc.id + 'px' + n" :style="{ '--dx': px.dx, '--dy': px.dy }"></i></span></pre>
      <h1>Malformed<span class="pixels" :class="{ 'is-on': docs.some((d) => d.pixels.length) }" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i></span></h1>
      <p class="sub">Grammar first. Then break it exactly where the parser has to decide.</p>
      <div class="actions">
        <a class="pill" href="#three">Pick your fuzzer ↓</a>
        <a class="plain" href="https://github.com/probelabs/json-fuzz" target="_blank" rel="noopener noreferrer">json-fuzz</a>
        <a class="plain" href="https://github.com/probelabs/graphql-fuzz" target="_blank" rel="noopener noreferrer">graphql-fuzz</a>
        <a class="plain" href="https://github.com/probelabs/xml-fuzz" target="_blank" rel="noopener noreferrer">xml-fuzz</a>
      </div>
      <p v-if="activeOp" class="op">{{ activeOp }}</p>
      <p v-if="docs.some((d) => d.panic)" class="panic-line">parser: panic: runtime error: index out of range <span class="mute">· illustrative</span></p>
      <p class="mute">Hover or use the arrow keys. Enter or a tap truncates at that byte. Operator names are from each repo’s mutate module.</p>
      <button
        v-for="doc in docs"
        :key="'r' + doc.id"
        type="button"
        class="plain"
        style="position:relative;z-index:3;background:none;border:0;color:#fff;text-decoration:underline;cursor:pointer;margin-right:12px"
        @click="restore(doc)"
      >Restore {{ doc.id }}</button>
    </div>

    <section class="kill" aria-labelledby="kill-title">
      <h2 id="kill-title">Panic</h2>
      <p>Real bugs json-fuzz found in buger/jsonparser. Six rows from that README.</p>
      <ul>
        <li>EMPTY-KEY PANIC — "" as a key path nil-deref’d at 8 sites</li>
        <li>LONE-SURROGATE SYNTHESIS — \uD800 alone was accepted</li>
        <li>DELETE TRAILING-COMMA — Delete left {"a":1,}</li>
        <li>CROSS-TYPE SET — an array-index path on an object root wrote invalid JSON</li>
        <li>SCALAR-ARRAY DATA LOSS — Set past the array length dropped data</li>
        <li>ARRAYEACH SPURIOUS CALLBACK — a non-array root fired the callback</li>
      </ul>
    </section>

    <section id="three" class="three" aria-label="Three fuzzers">
      <article>
        <h2 class="name">json-fuzz</h2>
        <p class="lang">Go</p>
        <ul class="bugs">
          <li class="chip">empty-key panic</li>
          <li class="chip">lone surrogate</li>
          <li class="chip">trailing comma</li>
          <li class="chip">cross-type Set</li>
        </ul>
        <ul class="gates">
          <li class="chip gate">NoPanic</li>
          <li class="chip gate">OutputValidJSON</li>
          <li class="chip gate">RoundTrip</li>
          <li class="chip gate">Determinism</li>
        </ul>
        <pre>func FuzzMyParser(f *testing.F) {
    jsonfuzz.AddCorpus(f)
    f.Fuzz(func(t *testing.T, data []byte, path []byte) {
        jsonfuzz.RunStructureAware(t, data, path, &amp;myTargetAdapter{})
    })
}</pre>
        <a href="https://github.com/probelabs/json-fuzz">github.com/probelabs/json-fuzz</a>
        <p class="mute">README states MIT. No LICENSE file in the repository root.</p>
      </article>
      <article>
        <h2 class="name">graphql-fuzz</h2>
        <p class="lang">Rust</p>
        <ul class="bugs">
          <li class="chip">UTF-8 / surrogates</li>
          <li class="chip">fragment cycles</li>
          <li class="chip">typeless fragments</li>
          <li class="chip">100+ nesting</li>
        </ul>
        <ul class="gates">
          <li class="chip gate">no_panic</li>
          <li class="chip gate">output_valid</li>
          <li class="chip gate">round_trip</li>
          <li class="chip gate">deep_nesting_safe</li>
          <li class="chip gate">federation_valid</li>
        </ul>
        <pre>let op = gfuzz::gen_operation(&amp;mut rng, 5);
let mutated = gfuzz::apply_mutation(&amp;mut rng, op.as_bytes());
gfuzz::gates::no_panic("parse_operation", || {
    let _ = my_parser::parse_operation(&amp;input);
}).unwrap();</pre>
        <a href="https://github.com/probelabs/graphql-fuzz">github.com/probelabs/graphql-fuzz</a>
        <p class="mute">Targets those classes. The README does not claim a found-bug list. MIT stated in the README. No LICENSE file in the root.</p>
      </article>
      <article>
        <h2 class="name">xml-fuzz</h2>
        <p class="lang">Rust · 28 operators</p>
        <ul class="bugs">
          <li class="chip">unclosed CDATA</li>
          <li class="chip">deep nesting</li>
          <li class="chip">mismatched tags</li>
          <li class="chip">encoding / BOM</li>
        </ul>
        <ul class="gates">
          <li class="chip gate">no-panic</li>
          <li class="chip gate">clean-fail</li>
          <li class="chip gate">determinism</li>
          <li class="chip gate">deep-nesting</li>
          <li class="chip gate">round-trip</li>
          <li class="chip gate">output-valid</li>
        </ul>
        <pre>let doc = xfuzz::gen_document(&amp;mut rng);
let mutated = xfuzz::apply_mutation(&amp;mut rng, &amp;doc);
xfuzz::gates::no_panic("parse", || {
    let _ = target.parse(&amp;mutated);
}).unwrap();</pre>
        <a href="https://github.com/probelabs/xml-fuzz">github.com/probelabs/xml-fuzz</a>
        <p class="mute">MIT license in the repository. MUTATION_OPS has 28 functions.</p>
      </article>
    </section>

    <section aria-label="xml-fuzz gates">
      <h2 class="sr" style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)">xml-fuzz gates</h2>
      <ul class="strip">
        <li class="chip gate">no-panic</li>
        <li class="chip gate">clean-fail</li>
        <li class="chip gate">determinism</li>
        <li class="chip gate">deep-nesting</li>
        <li class="chip gate">round-trip</li>
        <li class="chip gate">output-valid</li>
      </ul>
    </section>

    <section class="why">
      <div>
        <h2 style="font-size:72px;margin:0 0 12px">Why structure-aware</h2>
        <p>A grammar emits valid structure first. Format-aware operators then break that structure where the parser has to change state.</p>
        <p>Blind mutation reaches a cut just after a colon, a truncated escape, or a brace with no closer only after a huge number of trials.</p>
      </div>
      <p class="bytes" aria-label="Bytes with transition points marked">
        7b 22 75 73 65 72 22 <span class="mark">3a</span> 7b 22 6e 61 6d 65 22 <span class="mark">3a</span> 22 5c 75 <span class="mark">44</span> 38 30 30
      </p>
    </section>
  </ProbeChrome>
</template>

<style src="./fuzzers.css"></style>
