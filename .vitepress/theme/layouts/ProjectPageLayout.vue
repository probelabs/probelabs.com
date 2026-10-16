<template>
  <div v-if="project" class="lab">
    <a class="lab-skip" href="#content">Skip to content</a>

    <header class="lab-header" :class="{ 'is-open': menuOpen }">
      <div class="lab-header-bar">
        <a class="lab-wordmark" href="/">ProbeLabs</a>
        <nav class="lab-nav" aria-label="Primary">
          <a href="/#proof">Proof</a>
          <a href="/#stack">Core stack</a>
          <a href="/#projects">Projects &amp; experiments</a>
          <a href="/#instruments">Instruments</a>
          <a href="/company/about">About</a>
        </nav>
        <a class="lab-cta" href="https://reqproof.com/demo">Request demo</a>
        <button
          class="lab-menu-btn"
          type="button"
          :aria-expanded="menuOpen ? 'true' : 'false'"
          aria-controls="lab-menu"
          @click="menuOpen = !menuOpen"
        >
          <span class="lab-sr">Menu</span>
          <span></span><span></span><span></span>
        </button>
      </div>
      <div id="lab-menu" class="lab-menu">
        <a href="/#proof" @click="menuOpen = false">Proof</a>
        <a href="/#stack" @click="menuOpen = false">Core stack</a>
        <a href="/#projects" @click="menuOpen = false">Projects &amp; experiments</a>
        <a href="/#instruments" @click="menuOpen = false">Instruments</a>
        <a href="/company/about" @click="menuOpen = false">About</a>
        <a class="lab-cta" href="https://reqproof.com/demo">Request demo</a>
      </div>
    </header>

    <main id="content">
      <header class="pp-hero">
        <div class="pp-hero-grid">
          <div>
            <p class="lab-kicker">{{ project.kicker }}</p>
            <h1>{{ project.name }}</h1>
            <p class="lab-dek">{{ project.pitch }}</p>
            <p class="pp-meta">
              <span v-for="item in project.meta" :key="item">{{ item }}</span>
            </p>
            <div class="pp-hero-actions">
              <template v-if="project.repos">
                <a
                  v-for="repo in project.repos"
                  :key="repo.href"
                  class="pp-textlink"
                  :href="repo.href"
                  target="_blank"
                  rel="noopener noreferrer"
                >{{ repo.label }}</a>
              </template>
              <template v-else>
                <a class="lab-btn" :href="project.github" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a class="pp-textlink" :href="project.github" target="_blank" rel="noopener noreferrer">{{ project.githubLabel }}</a>
              </template>
            </div>
          </div>
          <nav class="pp-index" aria-label="On this page">
            <a v-for="item in toc" :key="item.id" :href="'#' + item.id">{{ item.label }}</a>
          </nav>
        </div>
      </header>

      <section
        v-for="section in project.sections"
        :id="section.id"
        :key="section.id"
        class="pp-section"
        :aria-labelledby="section.id + '-title'"
      >
        <p class="lab-kicker">{{ section.kicker }}</p>
        <h2 :id="section.id + '-title'">{{ section.title }}</h2>
        <div class="lab-prose">
          <p v-for="(para, index) in section.paragraphs" :key="section.id + '-' + index">
            <template v-if="Array.isArray(para)">
              <template v-for="(part, partIndex) in para" :key="partIndex">
                <a
                  v-if="part.href"
                  :href="part.href"
                  :target="isExternal(part.href) ? '_blank' : undefined"
                  :rel="isExternal(part.href) ? 'noopener noreferrer' : undefined"
                >{{ part.text }}</a>
                <template v-else>{{ part.text }}</template>
              </template>
            </template>
            <template v-else>{{ para }}</template>
          </p>
        </div>
        <p v-if="section.note" class="pp-note">{{ section.note }}</p>

        <dl v-if="section.facts" class="pp-facts">
          <div v-for="fact in section.facts" :key="fact.term">
            <dt>{{ fact.term }}</dt>
            <dd>{{ fact.text }}</dd>
          </div>
        </dl>

        <div v-if="section.commands" class="pp-stack">
          <figure v-for="command in section.commands" :key="command.label" class="pp-block">
            <figcaption>{{ command.label }}</figcaption>
            <pre tabindex="0"><code>{{ command.code }}</code></pre>
          </figure>
        </div>

        <div v-if="section.examples" class="pp-stack">
          <figure v-for="example in section.examples" :key="example.caption" class="pp-block">
            <figcaption>{{ example.caption }}</figcaption>
            <pre tabindex="0"><code>{{ example.code }}</code></pre>
          </figure>
        </div>

        <figure v-for="figure in section.figures || []" :key="figure.src" class="pp-figure">
          <div class="pp-frame">
            <img :src="figure.src" :width="figure.width" :height="figure.height" :alt="figure.alt">
          </div>
          <figcaption>{{ figure.caption }}</figcaption>
        </figure>
      </section>

      <section id="related" class="pp-section" :aria-labelledby="'related-title'">
        <p class="lab-kicker">{{ relatedKicker }}</p>
        <h2 id="related-title">Repo, docs, and nearby work</h2>
        <ul class="pp-rows">
          <li v-for="link in closingLinks" :key="link.href + link.label">
            <p class="pp-kind">{{ link.kind }}</p>
            <a
              :href="link.href"
              :target="isExternal(link.href) ? '_blank' : undefined"
              :rel="isExternal(link.href) ? 'noopener noreferrer' : undefined"
            >{{ link.label }}</a>
            <p>{{ link.note }}</p>
          </li>
        </ul>
      </section>
    </main>

    <footer class="lab-footer">
      <div class="lab-footer-brand">
        <p class="lab-wordmark">ProbeLabs</p>
        <p class="lab-footer-emails">
          <a href="mailto:hello@probelabs.com">hello@probelabs.com</a>
          <a href="mailto:hello@reqproof.com">hello@reqproof.com</a>
        </p>
        <a class="lab-mono" href="https://github.com/probelabs">github.com/probelabs</a>
      </div>
      <div class="lab-footer-col">
        <h2>Proof</h2>
        <ul>
          <li><a href="https://reqproof.com">Website</a></li>
          <li><a href="https://reqproof.com/method">Method</a></li>
          <li><a href="https://reqproof.com/product">Product</a></li>
          <li><a href="https://reqproof.com/about">About / register</a></li>
          <li><a href="https://reqproof.com/demo">Request demo</a></li>
        </ul>
      </div>
      <div class="lab-footer-col">
        <h2>Instruments</h2>
        <ul>
          <li><a href="/probe">Probe</a></li>
          <li><a href="/oel">Oel</a></li>
          <li><a href="/visor">Visor</a></li>
          <li><a href="https://goreplay.org">GoReplay</a></li>
          <li><a href="/fuzzers">Fuzzers</a></li>
          <li><a href="/fuzzers#json-fuzz">json-fuzz</a></li>
          <li><a href="/fuzzers#graphql-fuzz">graphql-fuzz</a></li>
          <li><a href="/fuzzers#xml-fuzz">xml-fuzz</a></li>
          <li><a href="https://github.com/probelabs/proof-action">proof-action</a></li>
        </ul>
      </div>
      <div class="lab-footer-col">
        <h2>Projects</h2>
        <ul>
          <li><a href="/qc">qc</a></li>
          <li><a href="/ste">ste</a></li>
          <li><a href="/aeo">aeo</a></li>
          <li><a href="/docs-mcp">docs-mcp</a></li>
          <li><a href="/recs">recs</a></li>
          <li><a href="/maid">Maid</a></li>
          <li><a href="/big-brain">Big Brain</a></li>
          <li><a href="/afk">AFK</a></li>
          <li><a href="/vow">Vow</a></li>
          <li><a href="/memaris">Memaris</a></li>
          <li><a href="/logoscope">Logoscope</a></li>
          <li><a href="/products/memory-layer">Memory Layer</a></li>
        </ul>
      </div>
      <div class="lab-footer-col">
        <h2>Company</h2>
        <ul>
          <li><a href="/company/about">About</a></li>
          <li><a href="/blog/">Blog</a></li>
        </ul>
      </div>
      <div class="lab-footer-col">
        <h2>Legal</h2>
        <ul>
          <li><a href="/privacy">Privacy</a></li>
          <li><a href="/terms">Terms</a></li>
        </ul>
      </div>
      <p class="lab-copy">&copy; {{ year }} GoReplay LLC</p>
    </footer>
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useData } from 'vitepress'
import { projects } from '../project-pages.js'

const { frontmatter } = useData()
const menuOpen = ref(false)
const year = new Date().getFullYear()

const project = computed(() => projects[frontmatter.value.project] || null)

const toc = computed(() => {
  if (!project.value) return []
  const items = project.value.sections.map((section) => ({
    id: section.id,
    label: section.kicker
  }))
  items.push({ id: 'related', label: relatedKicker.value })
  return items
})

const relatedKicker = computed(() => {
  const count = project.value ? project.value.sections.length + 1 : 1
  return String(count).padStart(2, '0') + ' / Related'
})

const closingLinks = computed(() => {
  if (!project.value) return []
  const repoLinks = project.value.repos
    ? project.value.repos.map((repo) => ({ kind: 'Repo', label: repo.label, href: repo.href, note: 'Source repository' }))
    : [{ kind: 'Repo', label: project.value.githubLabel, href: project.value.github, note: 'Source repository' }]
  const docs = (project.value.docs || []).map((doc) => ({
    kind: 'Docs',
    label: doc.label,
    href: doc.href,
    note: doc.note
  }))
  const related = (project.value.related || []).map((item) => ({
    kind: 'Lab',
    label: item.name,
    href: item.href,
    note: item.line
  }))
  return [...repoLinks, ...docs, ...related]
})

function isExternal(href) {
  return /^https?:/.test(href)
}

let observer

function lockLight() {
  const root = document.documentElement
  if (root.classList.contains('dark')) root.classList.remove('dark')
  if (root.style.colorScheme !== 'light') root.style.colorScheme = 'light'
}

function onKeydown(event) {
  if (event.key === 'Escape') menuOpen.value = false
}

onMounted(() => {
  lockLight()
  observer = new MutationObserver(lockLight)
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
  window.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  observer?.disconnect()
  window.removeEventListener('keydown', onKeydown)
  document.documentElement.style.colorScheme = ''
})
</script>

<style scoped>
.lab {
  --bg: #ffffff;
  --text: #0a0a0a;
  --muted: #6b6b6b;
  --line: #e4e4e7;
  --sans: Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
  --mono: "JetBrains Mono", ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace;
  background: var(--bg);
  color: var(--text);
  font-family: var(--sans);
  font-size: 16px;
  line-height: 1.5;
  min-height: 100vh;
  color-scheme: light;
}

.lab * { box-sizing: border-box; }
.lab a { color: inherit; }

.lab-sr {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

.lab a.lab-skip,
.lab a.lab-skip:hover,
.lab a.lab-skip:focus,
.lab a.lab-skip:visited {
  position: absolute;
  left: 16px;
  top: -40px;
  background: var(--text);
  color: #fff;
  padding: 8px 12px;
  z-index: 30;
  text-decoration: none;
}

.lab a.lab-skip:focus { top: 12px; }

.lab-header {
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(255, 255, 255, 0.96);
  border-bottom: 1px solid transparent;
}

.lab-header-bar {
  max-width: 1160px;
  margin: 0 auto;
  padding: 0 28px;
  height: 64px;
  display: flex;
  align-items: center;
  gap: 28px;
}

.lab-wordmark {
  font-weight: 600;
  font-size: 18px;
  letter-spacing: -0.03em;
  text-decoration: none;
  color: var(--text);
}

.lab-nav {
  display: flex;
  align-items: center;
  gap: 22px;
  margin-left: auto;
}

.lab-nav a,
.lab-menu a:not(.lab-cta) {
  color: var(--muted);
  text-decoration: none;
  font-size: 14px;
  letter-spacing: -0.01em;
}

.lab-nav a:hover,
.lab-menu a:not(.lab-cta):hover { color: var(--text); }

.lab a.lab-cta,
.lab a.lab-cta:visited {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 34px;
  padding: 0 12px;
  border: 1px solid var(--text);
  border-radius: 2px;
  background: transparent;
  color: var(--text);
  text-decoration: none;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.01em;
  white-space: nowrap;
}

.lab a.lab-cta:hover,
.lab a.lab-cta:focus,
.lab a.lab-cta:active,
.lab a.lab-cta:visited:hover,
.lab a.lab-cta:visited:focus,
.lab a.lab-cta:visited:active {
  background: var(--text);
  color: #fff;
}

.lab-menu-btn {
  display: none;
  width: 42px;
  height: 42px;
  margin-left: auto;
  border: 0;
  background: transparent;
  padding: 10px;
  position: relative;
  cursor: pointer;
}

.lab-menu-btn span:not(.lab-sr) {
  display: block;
  height: 1px;
  background: var(--text);
  margin: 6px 0;
}

.lab-menu { display: none; }

.lab-kicker,
.lab-mono,
.pp-meta,
.pp-kind,
.pp-block figcaption,
.pp-figure figcaption,
.pp-index a {
  font-family: var(--mono);
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.04em;
  color: var(--muted);
}

.lab-kicker {
  margin: 0 0 22px;
  text-transform: uppercase;
}

.pp-hero,
.pp-section,
.lab-footer {
  max-width: 1160px;
  margin: 0 auto;
  padding-left: 28px;
  padding-right: 28px;
}

.pp-hero { padding-top: 48px; padding-bottom: 64px; }

.pp-hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 240px;
  gap: 48px 36px;
  align-items: end;
}

.pp-hero h1 {
  margin: 0;
  font-size: clamp(3rem, 7vw, 4.75rem);
  font-weight: 600;
  letter-spacing: -0.045em;
  line-height: 0.92;
  text-wrap: balance;
}

.lab-dek {
  margin: 22px 0 0;
  max-width: 38rem;
  font-size: 18px;
  line-height: 1.5;
  text-wrap: pretty;
}

.pp-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 16px;
  margin: 18px 0 0;
  text-transform: uppercase;
}

.pp-hero-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 14px 22px;
  margin-top: 28px;
}

.lab a.lab-btn,
.lab a.lab-btn:visited {
  display: inline-flex;
  align-items: center;
  height: 42px;
  padding: 0 16px;
  background: var(--text);
  color: #fff;
  text-decoration: none;
  border-radius: 2px;
  font-size: 14px;
  font-weight: 500;
}

.lab a.lab-btn:hover,
.lab a.lab-btn:focus,
.lab a.lab-btn:active,
.lab a.lab-btn:visited:hover,
.lab a.lab-btn:visited:focus,
.lab a.lab-btn:visited:active {
  background: #242424;
  color: #fff;
}

.pp-textlink,
.lab-prose a,
.pp-rows a {
  color: var(--text);
  text-decoration: none;
  border-bottom: 1px solid var(--text);
  line-height: 1.3;
  padding-bottom: 1px;
}

.pp-index {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0;
  padding-bottom: 6px;
}

.pp-index a {
  color: var(--muted);
  text-decoration: none;
  text-transform: uppercase;
  line-height: 1.4;
}

.pp-index a:hover { color: var(--text); }

.pp-section {
  padding-top: 88px;
  padding-bottom: 96px;
  border-top: 1px solid var(--line);
  scroll-margin-top: 80px;
}

.pp-section h2 {
  margin: 0;
  font-size: clamp(2rem, 3.4vw, 3rem);
  font-weight: 600;
  letter-spacing: -0.03em;
  line-height: 1.05;
  text-wrap: balance;
}

.lab-prose {
  max-width: 40rem;
  margin-top: 22px;
}

.lab-prose p {
  margin: 0 0 14px;
  font-size: 18px;
  line-height: 1.5;
  text-wrap: pretty;
}

.pp-note {
  margin: 8px 0 0;
  max-width: 40rem;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.5;
  text-wrap: pretty;
}

.pp-facts {
  margin: 36px 0 0;
  padding: 0;
}

.pp-facts div {
  display: grid;
  grid-template-columns: 168px minmax(0, 1fr);
  gap: 8px 28px;
  padding: 18px 0;
  border-top: 1px solid var(--line);
}

.pp-facts div:last-child { border-bottom: 1px solid var(--line); }

.pp-facts dt {
  margin: 0;
  font-family: var(--mono);
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.03em;
  color: var(--muted);
}

.pp-facts dd {
  margin: 0;
  font-size: 16px;
  line-height: 1.5;
  text-wrap: pretty;
}

.pp-stack { margin-top: 8px; }

.pp-block { margin: 28px 0 0; }

.pp-block figcaption,
.pp-figure figcaption {
  margin: 0 0 8px;
  text-transform: uppercase;
}

.pp-block pre {
  margin: 0;
  padding: 16px 18px;
  background: #f4f4f5;
  border: 1px solid var(--line);
  overflow-x: auto;
  font-family: var(--mono);
  font-size: 12.5px;
  line-height: 1.6;
  color: var(--text);
}

.pp-block code { font-family: inherit; }

.pp-figure { margin: 36px 0 0; }

.pp-frame {
  background: #121113;
  border: 1px solid #2a2a2e;
  padding: 10px;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
}

.pp-frame img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 4px;
}

.pp-rows {
  list-style: none;
  margin: 36px 0 0;
  padding: 0;
}

.pp-rows li {
  display: grid;
  grid-template-columns: 72px minmax(140px, 220px) minmax(0, 1fr);
  gap: 12px 24px;
  align-items: baseline;
  padding: 18px 0;
  border-top: 1px solid var(--line);
}

.pp-rows li:last-child { border-bottom: 1px solid var(--line); }

.pp-kind {
  margin: 0;
  text-transform: uppercase;
}

.pp-rows a {
  font-weight: 600;
  letter-spacing: -0.02em;
}

.pp-rows li > p:last-child {
  margin: 0;
  color: var(--muted);
  text-wrap: pretty;
}

.lab-footer {
  display: grid;
  grid-template-columns: 1.25fr repeat(5, 1fr);
  gap: 32px 24px;
  padding-top: 64px;
  padding-bottom: 28px;
  border-top: 1px solid var(--line);
}

.lab-footer-brand .lab-wordmark { display: block; margin: 0 0 14px; }

.lab-footer-emails {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin: 0 0 14px;
}

.lab-footer-emails a,
.lab-footer-brand > a {
  color: var(--muted);
  text-decoration: none;
  font-size: 14px;
}

.lab-footer-emails a:hover,
.lab-footer-brand > a:hover { color: var(--text); }

.lab-footer-col h2 {
  margin: 0 0 12px;
  font-family: var(--mono);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.lab-footer-col ul { list-style: none; margin: 0; padding: 0; }
.lab-footer-col li { margin: 0 0 8px; }

.lab-footer-col a {
  color: var(--muted);
  text-decoration: none;
  font-size: 14px;
}

.lab-footer-col a:hover { color: var(--text); }

.lab-copy {
  grid-column: 1 / -1;
  margin: 12px 0 0;
  padding-top: 18px;
  border-top: 1px solid var(--line);
  color: var(--muted);
  font-family: var(--mono);
  font-size: 12px;
}

.lab a:focus-visible,
.lab button:focus-visible,
.lab pre:focus-visible {
  outline: 2px solid var(--text);
  outline-offset: 3px;
}

@media (max-width: 900px) {
  .lab-nav,
  .lab-header-bar > .lab-cta { display: none; }
  .lab-menu-btn { display: block; }

  .lab-header.is-open .lab-menu {
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: 4px 20px 20px;
    border-bottom: 1px solid var(--line);
  }

  .lab-menu a:not(.lab-cta) {
    display: flex;
    align-items: center;
    min-height: 44px;
    font-size: 16px;
    color: var(--text);
  }

  .lab-menu a.lab-cta,
  .lab-menu a.lab-cta:visited {
    margin-top: 8px;
    height: 44px;
    color: var(--text);
    background: transparent;
  }

  .lab-menu a.lab-cta:hover,
  .lab-menu a.lab-cta:focus,
  .lab-menu a.lab-cta:active,
  .lab-menu a.lab-cta:visited:hover,
  .lab-menu a.lab-cta:visited:focus,
  .lab-menu a.lab-cta:visited:active {
    background: var(--text);
    color: #fff;
  }

  .pp-hero-grid { grid-template-columns: 1fr; gap: 28px; }

  .pp-index {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px 18px;
    padding-bottom: 0;
  }
}

@media (max-width: 560px) {
  .lab-header-bar,
  .pp-hero,
  .pp-section,
  .lab-footer {
    padding-left: 20px;
    padding-right: 20px;
  }

  .pp-hero { padding-top: 32px; padding-bottom: 40px; }
  .pp-section { padding-top: 56px; padding-bottom: 64px; }
  .lab-dek,
  .lab-prose p { font-size: 16px; }

  .pp-facts div,
  .pp-rows li { grid-template-columns: 1fr; gap: 6px; }

  .lab-footer { grid-template-columns: 1fr; }
  .lab-footer-brand { grid-column: 1 / -1; }
}

@media (max-width: 900px) and (min-width: 561px) {
  .lab-footer { grid-template-columns: 1fr 1fr; }
  .lab-footer-brand { grid-column: 1 / -1; }
}

@media (prefers-reduced-motion: reduce) {
  .lab a,
  .lab button { transition: none; }
}
</style>
