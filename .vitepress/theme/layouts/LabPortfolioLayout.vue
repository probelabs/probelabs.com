<template>
  <div class="lab">
    <a class="lab-skip" href="#content">Skip to content</a>

    <header class="lab-header" :class="{ 'is-open': menuOpen }">
      <div class="lab-header-bar">
        <a class="lab-wordmark" href="/">ProbeLabs</a>
        <nav class="lab-nav" aria-label="Primary">
          <a href="#products">Products</a>
          <a href="#stack">Core stack</a>
          <a href="#projects">Projects</a>
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
        <a href="#products" @click="closeAndGo($event, 'products')">Products</a>
        <a href="#stack" @click="closeAndGo($event, 'stack')">Core stack</a>
        <a href="#projects" @click="closeAndGo($event, 'projects')">Projects</a>
        <a href="/company/about" @click="menuOpen = false">About</a>
        <a class="lab-cta" href="https://reqproof.com/demo">Request demo</a>
      </div>
    </header>

    <main id="content">
      <section class="lab-hero">
        <div class="lab-hero-copy">
          <p class="lab-wordmark lab-hero-mark">ProbeLabs</p>
          <h1>Making agents trustworthy on real software.</h1>
          <p class="lab-dek">
            ProbeLabs is a research lab for engineering craft in the agentic era. We build the instruments that turn agent work into recoverable intent and rerunnable evidence.
          </p>
          <div class="lab-tools">
            <a class="lab-tool is-primary" href="https://reqproof.com">Proof</a>
            <a class="lab-tool" href="/oel">Oel</a>
            <a class="lab-tool" href="https://spiritroom.app/">Spirit Room</a>
          </div>
        </div>
        <div class="lab-hero-visual">
          <canvas ref="heroCanvas" aria-hidden="true"></canvas>
        </div>
      </section>

      <div class="lab-band">
        <section class="lab-section lab-products" id="products">
          <div class="lab-tier">
            <h2 class="lab-kicker">01 / Products</h2>
            <span class="lab-chip is-commercial">Commercial</span>
          </div>
          <p class="lab-dek lab-products-intro">The products you can book. Open instruments and research follow.</p>

          <article class="lab-flagship" id="proof">
            <div class="lab-section-head">
              <h3>Proof</h3>
              <div class="lab-prose">
                <p>
                  Proof is AI-native software assurance for changes made by humans and by coding agents. It reduces the work between a software change and the evidence required to trust it.
                </p>
                <p>
                  The Software Intent Graph connects approved requirements, code, dependencies, risks, and checks, so reviewers look at evidence instead of reconstructing it.
                </p>
              </div>
            </div>
            <figure class="lab-frame">
              <img
                src="/images/portfolio/proof.png"
                width="1440"
                height="900"
                alt="Proof homepage: From prompt to production, with Start with a change and See the evidence."
              >
            </figure>
            <div class="lab-linkrow">
              <a class="lab-btn" href="https://reqproof.com">Proof website</a>
              <a href="https://reqproof.com/demo">Request demo</a>
              <a href="https://reqproof.com/method">Method</a>
              <a href="https://reqproof.com/product">Product</a>
              <a href="https://reqproof.com/about">Public register</a>
            </div>
          </article>

          <div class="lab-product-pair">
            <article class="lab-product-card">
              <a class="lab-frame" href="/oel">
                <img
                  src="/images/portfolio/oel.png"
                  width="1440"
                  height="616"
                  alt="Oel page: The code-grounded company brain, with Book a demo and an answer that cites middleware/rate_limit.go."
                >
              </a>
              <div class="lab-piece-text">
                <h3><a href="/oel">Oel</a></h3>
                <p class="lab-pitch">The code-grounded company brain.</p>
                <p>Ask across code, Jira, Zendesk, Confluence, Slack, docs, CI, and observability. Every answer shows its evidence. Every action runs as a governed workflow on your infrastructure.</p>
                <div class="lab-product-cta">
                  <a class="lab-btn" href="/oel#demo">Book a demo</a>
                </div>
              </div>
            </article>
            <article class="lab-product-card">
              <a class="lab-frame" href="https://spiritroom.app/">
                <img
                  src="/images/portfolio/spirit-room.png"
                  width="1440"
                  height="640"
                  alt="Spirit Room homepage: Optimise your MCP, CLI or API for AI agents, with Book a pilot and Get updates."
                >
              </a>
              <div class="lab-piece-text">
                <h3><a href="https://spiritroom.app/">Spirit Room</a></h3>
                <p class="lab-pitch">Optimise your MCP, CLI or API for AI agents.</p>
                <p>You give us the jobs agents need to get right. We run every major agent through hundreds of simulations, trying new tool descriptions, help text, errors and combined tools. The result: agents finish your jobs in fewer steps, with fewer mistakes, even on cheaper models.</p>
                <div class="lab-product-cta">
                  <a class="lab-btn" href="https://spiritroom.app/#contact">Book a pilot</a>
                </div>
              </div>
            </article>
          </div>
        </section>
      </div>

      <section class="lab-section" id="stack">
        <p class="lab-kicker">02 / Core stack</p>
        <div class="lab-section-head">
          <h2>Core stack</h2>
          <p class="lab-dek">Probe walks code and corpus. Visor runs agent work as a traced workflow. Both sit beside Proof.</p>
        </div>
        <div class="lab-stack">
          <article v-for="item in coreStack" :key="item.name" class="lab-stack-piece">
            <a class="lab-frame" :href="item.href">
              <img :src="item.image" width="1440" height="900" :alt="item.alt">
            </a>
            <div class="lab-piece-text">
              <h3><a :href="item.href">{{ item.name }}</a></h3>
              <p>{{ item.line }}</p>
              <p class="lab-why">{{ item.why }}</p>
              <p class="lab-piece-meta">
                <span class="lab-chip" :class="'is-' + item.chipKind">{{ item.chip }}</span>
                <span class="lab-mono">{{ item.meta }}</span>
                <a :href="item.href">{{ item.linkLabel }}</a>
                <a
                  v-for="link in item.links"
                  :key="link.href"
                  :href="link.href"
                  :target="link.external ? '_blank' : undefined"
                  :rel="link.external ? 'noopener noreferrer' : undefined"
                >{{ link.label }}</a>
              </p>
            </div>
          </article>
        </div>
      </section>

      <section class="lab-section" id="projects">
        <p class="lab-kicker">03 / Projects</p>
        <div class="lab-section-head">
          <h2>Projects &amp; experiments</h2>
          <p class="lab-dek">
            Small tools for accountability, memory, remote control, diagrams, and logs — experiments around the same problem: keeping agents useful without losing control. Live pages, captured as they ship.
          </p>
        </div>
        <div class="lab-grid">
          <article v-for="item in projects" :key="item.name" class="lab-piece">
            <a class="lab-shot" :href="item.href" :target="item.external ? '_blank' : undefined" :rel="item.external ? 'noopener noreferrer' : undefined">
              <img :src="item.image" width="1440" height="900" :alt="item.alt" loading="lazy">
            </a>
            <div class="lab-piece-text">
              <h3>
                <a :href="item.href" :target="item.external ? '_blank' : undefined" :rel="item.external ? 'noopener noreferrer' : undefined">{{ item.name }}</a>
              </h3>
              <p>{{ item.line }}</p>
              <p class="lab-piece-meta">
                <span v-if="item.chip" class="lab-chip" :class="'is-' + item.chipKind">{{ item.chip }}</span>
                <span class="lab-mono">{{ item.meta }}</span>
                <a
                  v-for="link in item.links"
                  :key="link.href"
                  :href="link.href"
                  :target="link.external ? '_blank' : undefined"
                  :rel="link.external ? 'noopener noreferrer' : undefined"
                >{{ link.label }}</a>
              </p>
            </div>
          </article>
        </div>
      </section>

      <section class="lab-section" id="instruments">
        <p class="lab-kicker">04 / Infrastructure</p>
        <div class="lab-section-head">
          <h2>Instruments behind the audits</h2>
          <blockquote class="lab-quote">
            <p>We build the instruments we audit with.</p>
            <footer>
              <cite><a href="https://reqproof.com/engine">Proof — the instruments that produce the evidence</a></cite>
            </footer>
          </blockquote>
          <p class="lab-dek">
            Structure-aware fuzzers pressure parsers. The gate re-runs in your CI.
          </p>
        </div>
        <ul class="lab-rows">
          <li v-for="item in infrastructure" :key="item.name">
            <div class="lab-row-name">
              <a :href="item.href" :target="item.external ? '_blank' : undefined" :rel="item.external ? 'noopener noreferrer' : undefined">{{ item.name }}</a>
              <span v-if="item.chip" class="lab-chip" :class="'is-' + item.chipKind">{{ item.chip }}</span>
            </div>
            <p>{{ item.line }}</p>
            <p class="lab-row-meta">{{ item.meta }}</p>
          </li>
        </ul>
        <p class="lab-note">
          Proof plans to release the quality-engineering harness as open source. That release is not out yet. The dashboard and factory orchestration remain proprietary.
        </p>
      </section>
    </main>

    <footer class="lab-footer" id="contact">
      <div class="lab-footer-brand">
        <p class="lab-wordmark">ProbeLabs</p>
        <p class="lab-footer-emails">
          <a href="mailto:hello@probelabs.com">hello@probelabs.com</a>
          <a href="mailto:hello@reqproof.com">hello@reqproof.com</a>
        </p>
        <a class="lab-mono" href="https://github.com/probelabs">github.com/probelabs</a>
      </div>
      <div class="lab-footer-col">
        <h2>Products</h2>
        <ul>
          <li><a href="https://reqproof.com">Proof</a></li>
          <li><a href="https://reqproof.com/method">Method</a></li>
          <li><a href="https://reqproof.com/product">Product</a></li>
          <li><a href="https://reqproof.com/about">About / register</a></li>
          <li><a href="https://reqproof.com/demo">Request demo</a></li>
          <li><a href="/oel">Oel</a></li>
          <li><a href="https://spiritroom.app/">Spirit Room</a></li>
        </ul>
      </div>
      <div class="lab-footer-col">
        <h2>Instruments</h2>
        <ul>
          <li><a href="/probe">Probe</a></li>
          <li><a href="/visor">Visor</a></li>
          <li><a href="https://goreplay.org">GoReplay</a></li>
          <li><a href="https://github.com/probelabs/json-fuzz">json-fuzz</a></li>
          <li><a href="https://github.com/probelabs/graphql-fuzz">graphql-fuzz</a></li>
          <li><a href="https://github.com/probelabs/proof-action">proof-action</a></li>
        </ul>
      </div>
      <div class="lab-footer-col">
        <h2>Projects</h2>
        <ul>
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
import { nextTick, onMounted, onUnmounted, ref } from 'vue'

const menuOpen = ref(false)
const year = new Date().getFullYear()
const heroCanvas = ref(null)
let unmountHero = null
let heroCancelled = false

const infrastructure = [
  {
    name: 'json-fuzz',
    href: 'https://github.com/probelabs/json-fuzz',
    external: true,
    line: 'Structure-aware JSON fuzzer. A grammar-based generator, JSON-aware mutations, and correctness gates for differential testing of JSON parsers.',
    meta: 'Go',
    chip: 'Published',
    chipKind: 'open'
  },
  {
    name: 'graphql-fuzz',
    href: 'https://github.com/probelabs/graphql-fuzz',
    external: true,
    line: 'Structure-aware GraphQL fuzzer. Grammar-based query, operation, and schema generators, with correctness gates for differential testing of GraphQL parsers.',
    meta: 'Rust',
    chip: 'Published',
    chipKind: 'open'
  },
  {
    name: 'proof-action',
    href: 'https://github.com/probelabs/proof-action',
    external: true,
    line: 'GitHub Action that runs a ReqProof verification audit on a repository and reports the result in the job summary.',
    meta: 'Action',
    chip: 'Public repo',
    chipKind: 'neutral'
  }
]

const coreStack = [
  {
    name: 'Probe',
    href: '/probe',
    linkLabel: 'Open Probe',
    image: '/images/portfolio/probe.png',
    alt: 'Probe homepage: context retrieval that understands code, marked open source and local.',
    line: 'Semantic code search over large trees. Ripgrep speed, with tree-sitter structure.',
    why: 'Proof engagements use it to walk code and corpus in one pass.',
    meta: 'Rust',
    chip: 'Open source',
    chipKind: 'open',
    links: [
      { label: 'Oel', href: '/oel' },
      { label: 'GitHub', href: 'https://github.com/probelabs/probe', external: true }
    ]
  },
  {
    name: 'Visor',
    href: '/visor',
    linkLabel: 'Open Visor',
    image: '/images/portfolio/visor.png',
    alt: 'Visor homepage: predictable agent workflows defined in YAML.',
    line: 'YAML workflows with validation, approvals, fallbacks, and an OpenTelemetry trace for every run.',
    why: 'It keeps an agent run visible: the same steps, the same gates, and an OpenTelemetry trace. Proof’s CI/CD orchestrator is a separate instrument, and is not identified as Visor.',
    meta: 'YAML',
    chip: 'Instrument',
    chipKind: 'neutral',
    links: [
      { label: 'GitHub', href: 'https://github.com/probelabs/visor', external: true }
    ]
  }
]

const projects = [
  {
    name: 'Maid',
    href: '/maid',
    image: '/images/portfolio/maid.png',
    alt: 'Maid homepage: Meet Maid, a Mermaid.js diagram assistant.',
    line: 'Lightning-fast Mermaid linter with auto-fix, for the CLI, CI, and agents.',
    meta: 'Diagrams',
    chip: 'Experiment',
    chipKind: 'neutral',
    experiment: true,
    links: [
      { label: 'GitHub', href: 'https://github.com/probelabs/maid', external: true }
    ]
  },
  {
    name: 'GoReplay',
    href: 'https://goreplay.org',
    external: true,
    image: '/images/portfolio/goreplay.png',
    alt: 'GoReplay homepage: capture and replay HTTP traffic.',
    line: 'Capture live HTTP traffic and replay it against an isolated target.',
    meta: 'HTTP',
    chip: 'Open source',
    chipKind: 'open',
    links: [
      { label: 'GitHub', href: 'https://github.com/probelabs/goreplay', external: true }
    ]
  },
  {
    name: 'Big Brain',
    href: '/big-brain',
    image: '/images/portfolio/big-brain.png',
    alt: 'Big Brain homepage: hand a stuck problem to a stronger model.',
    line: 'An MCP server that packages code context so a stuck problem can be handed to a stronger model.',
    meta: 'MCP',
    chip: 'Experiment',
    chipKind: 'neutral',
    experiment: true,
    links: [
      { label: 'GitHub', href: 'https://github.com/probelabs/big-brain', external: true }
    ]
  },
  {
    name: 'AFK',
    href: '/afk',
    image: '/images/portfolio/afk.png',
    alt: 'AFK homepage: stay in control of Claude Code from Telegram.',
    line: 'Remote control and approval for Claude Code via Telegram.',
    meta: 'Telegram',
    chip: 'Experiment',
    chipKind: 'neutral',
    experiment: true,
    links: [
      { label: 'GitHub', href: 'https://github.com/probelabs/afk', external: true }
    ]
  },
  {
    name: 'Vow',
    href: '/vow',
    image: '/images/portfolio/vow.png',
    alt: 'Vow homepage: accountability gates before an agent commits or acts.',
    line: 'Accountability gates: an agent must self-review before commits and actions.',
    meta: 'Gates',
    chip: 'Experiment',
    chipKind: 'neutral',
    experiment: true,
    links: [
      { label: 'GitHub', href: 'https://github.com/probelabs/vow', external: true }
    ]
  },
  {
    name: 'Memaris',
    href: '/memaris',
    image: '/images/portfolio/memaris.png',
    alt: 'Memaris homepage: turn past Claude Code sessions into persistent memory.',
    line: 'Turns past Claude Code sessions into persistent memory.',
    meta: 'Memory',
    chip: 'Experiment',
    chipKind: 'neutral',
    experiment: true,
    links: [
      { label: 'GitHub', href: 'https://github.com/probelabs/memaris', external: true }
    ]
  },
  {
    name: 'Logoscope',
    href: '/logoscope',
    image: '/images/portfolio/logoscope.png',
    alt: 'Logoscope homepage: distill logs into structured intelligence.',
    line: 'Distills logs into structured, AI-ready patterns.',
    meta: 'Logs',
    chip: 'Experiment',
    chipKind: 'neutral',
    experiment: true,
    links: [
      { label: 'GitHub', href: 'https://github.com/probelabs/logoscope', external: true }
    ]
  },
  {
    name: 'Memory Layer',
    href: '/products/memory-layer',
    image: '/images/portfolio/memory-layer.png',
    alt: 'Memory Layer page: a waitlist for extracting institutional knowledge from PRs, tickets, and Slack.',
    line: 'Extracts institutional knowledge from PRs, tickets, Slack, and documentation.',
    meta: 'Waitlist',
    chip: 'Waitlist',
    chipKind: 'neutral',
    experiment: true,
    links: []
  }
]

let observer

function lockLight() {
  const root = document.documentElement
  if (root.classList.contains('dark')) root.classList.remove('dark')
  if (root.style.colorScheme !== 'light') root.style.colorScheme = 'light'
}

function onKeydown(event) {
  if (event.key === 'Escape') menuOpen.value = false
}

function closeAndGo(event, id) {
  event.preventDefault()
  menuOpen.value = false
  nextTick(() => {
    requestAnimationFrame(() => {
      const el = document.getElementById(id)
      if (!el) return
      el.scrollIntoView({ block: 'start', behavior: 'instant' })
      history.pushState(null, '', `#${id}`)
    })
  })
}

onMounted(() => {
  lockLight()
  observer = new MutationObserver(lockLight)
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
  window.addEventListener('keydown', onKeydown)
  nextTick(() => {
    import('../hero-specimen.js').then((mod) => {
      if (heroCancelled || !heroCanvas.value) return
      unmountHero = mod.mount(heroCanvas.value)
    })
  })
})

onUnmounted(() => {
  heroCancelled = true
  unmountHero?.()
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
  --frame: #121113;
  --status: #366740;
  --status-line: #71d083;
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

.lab-section,
.lab-footer {
  max-width: 1160px;
  margin: 0 auto;
  padding-left: 28px;
  padding-right: 28px;
}

.lab-hero {
  position: relative;
  width: 100%;
  max-width: none;
  height: 72vh;
  max-height: 75vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background: #141311;
  color: #f6f3ec;
}

.lab-hero-visual {
  position: absolute;
  inset: 0;
  z-index: 0;
  background: #141311;
}

.lab-hero-visual canvas {
  display: block;
  width: 100%;
  height: 100%;
}

.lab-hero-copy {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  width: min(520px, 46%);
  min-height: 100%;
  margin-left: max(28px, calc((100% - 1160px) / 2 + 28px));
  padding: 28px 56px 28px 0;
  background: linear-gradient(90deg, rgba(20, 19, 17, 0.9) 0%, rgba(20, 19, 17, 0.62) 58%, rgba(20, 19, 17, 0) 100%);
}

.lab-hero-mark {
  display: block;
  margin: 0 0 16px;
  font-size: 15px;
  color: #f6f3ec;
}

.lab-eyebrow,
.lab-kicker,
.lab-mono {
  font-family: var(--mono);
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.04em;
  color: var(--muted);
}

.lab-eyebrow { margin: 0 0 28px; }

.lab-hero h1 {
  margin: 0;
  font-size: clamp(1.85rem, 2.8vw, 2.65rem);
  font-weight: 600;
  letter-spacing: -0.035em;
  line-height: 1.08;
  text-wrap: balance;
  max-width: 18ch;
  color: #f7f4ee;
}

.lab-dek {
  margin: 28px 0 0;
  max-width: 38rem;
  font-size: 18px;
  line-height: 1.5;
  color: var(--text);
  text-wrap: pretty;
}

.lab-hero .lab-dek {
  margin-top: 14px;
  font-size: 16px;
  line-height: 1.45;
  max-width: 36rem;
  color: rgba(247, 244, 238, 0.78);
}

.lab-tools {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  margin-top: 22px;
}

.lab a.lab-tool,
.lab a.lab-tool:visited {
  display: inline-flex;
  align-items: center;
  height: 34px;
  padding: 0 12px;
  border: 1px solid var(--text);
  border-radius: 2px;
  background: transparent;
  color: var(--text);
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.01em;
}

.lab a.lab-tool.is-primary,
.lab a.lab-tool.is-primary:visited {
  height: 40px;
  padding: 0 16px;
  background: var(--text);
  color: #fff;
  font-weight: 600;
}

.lab a.lab-tool:hover,
.lab a.lab-tool:focus,
.lab a.lab-tool:active,
.lab a.lab-tool:visited:hover,
.lab a.lab-tool:visited:focus,
.lab a.lab-tool:visited:active {
  background: var(--text);
  color: #fff;
}

.lab a.lab-tool.is-primary:hover,
.lab a.lab-tool.is-primary:focus,
.lab a.lab-tool.is-primary:active,
.lab a.lab-tool.is-primary:visited:hover,
.lab a.lab-tool.is-primary:visited:focus,
.lab a.lab-tool.is-primary:visited:active {
  background: #242424;
  color: #fff;
}

.lab .lab-hero a.lab-tool,
.lab .lab-hero a.lab-tool:visited {
  border-color: rgba(246, 243, 236, 0.82);
  background: transparent;
  color: #f6f3ec;
}

.lab .lab-hero a.lab-tool.is-primary,
.lab .lab-hero a.lab-tool.is-primary:visited {
  background: #f4f1ea;
  border-color: #f4f1ea;
  color: #141311;
}

.lab .lab-hero a.lab-tool:hover,
.lab .lab-hero a.lab-tool:focus,
.lab .lab-hero a.lab-tool:active,
.lab .lab-hero a.lab-tool:visited:hover,
.lab .lab-hero a.lab-tool:visited:focus,
.lab .lab-hero a.lab-tool:visited:active,
.lab .lab-hero a.lab-tool.is-primary:hover,
.lab .lab-hero a.lab-tool.is-primary:focus,
.lab .lab-hero a.lab-tool.is-primary:active,
.lab .lab-hero a.lab-tool.is-primary:visited:hover,
.lab .lab-hero a.lab-tool.is-primary:visited:focus,
.lab .lab-hero a.lab-tool.is-primary:visited:active {
  background: #f4f1ea;
  border-color: #f4f1ea;
  color: #141311;
}

.lab .lab-hero a:focus-visible {
  outline-color: #f4f1ea;
}

.lab-hero-actions,
.lab-linkrow {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 14px 22px;
  margin-top: 36px;
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

.lab-textlink,
.lab-linkrow a:not(.lab-btn) {
  color: var(--text);
  text-decoration: none;
  font-size: 14px;
  border-bottom: 1px solid var(--text);
  line-height: 1.2;
  padding-bottom: 1px;
}

.lab-section {
  padding-top: 88px;
  padding-bottom: 96px;
  border-top: 1px solid var(--line);
  scroll-margin-top: 80px;
}

.lab-band {
  background: #f4f4f5;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.lab-products { border-top: 0; }

.lab-band + .lab-section { border-top: 0; }

.lab-tier {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px 12px;
}

.lab-tier .lab-kicker { margin: 0; }

.lab-products-intro {
  margin-top: 16px;
  max-width: 34rem;
}

.lab-flagship { margin-top: 40px; }

.lab-kicker {
  margin: 0 0 22px;
  text-transform: uppercase;
  scroll-margin-top: 80px;
}

.lab-section-head h2,
.lab-flagship h3 {
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

.lab-quote {
  margin: 28px 0 0;
  padding: 0;
  border: 0;
  max-width: 40rem;
}

.lab-quote p {
  margin: 0;
  font-size: clamp(1.5rem, 2.4vw, 2rem);
  font-weight: 600;
  letter-spacing: -0.03em;
  line-height: 1.2;
}

.lab-quote footer {
  margin-top: 12px;
  font-family: var(--mono);
  font-size: 12px;
  font-style: normal;
  color: var(--muted);
}

.lab-quote a { color: var(--muted); }

.lab-frame {
  display: block;
  margin: 40px 0 0;
  background: var(--frame);
  border: 1px solid #2a2a2e;
  padding: 10px;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
  text-decoration: none;
  color: inherit;
}

.lab-stack .lab-frame,
.lab-product-card .lab-frame { margin: 0; }

.lab-product-pair {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px 32px;
  margin-top: 72px;
}

.lab-product-card {
  display: flex;
  flex-direction: column;
}

.lab-product-card .lab-piece-text {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.lab-product-card h3 {
  margin: 0 0 8px;
  font-size: 26px;
  font-weight: 600;
  letter-spacing: -0.03em;
  text-wrap: balance;
}

.lab-piece-text > p.lab-pitch {
  margin: 0 0 8px;
  color: var(--text);
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.02em;
  line-height: 1.35;
  text-wrap: balance;
}

.lab-product-cta {
  margin-top: auto;
  padding-top: 18px;
}

.lab-stack {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px 32px;
  margin-top: 36px;
}

.lab-why {
  margin: 8px 0 0;
  color: var(--muted);
  font-size: 15px;
  line-height: 1.5;
  text-wrap: pretty;
}

.lab-frame img,
.lab-shot img {
  display: block;
  width: 100%;
  height: auto;
}

.lab-frame img { border-radius: 4px; }

.lab-rows,
.lab-register {
  list-style: none;
  margin: 36px 0 0;
  padding: 0;
}

.lab-rows li {
  display: grid;
  grid-template-columns: minmax(160px, 200px) minmax(0, 1fr) auto;
  gap: 18px 28px;
  align-items: baseline;
  padding: 22px 0;
  border-top: 1px solid var(--line);
}

.lab-rows li:last-child { border-bottom: 1px solid var(--line); }

.lab-row-name {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 10px;
}

.lab-row-name a,
.lab-register-name,
.lab-piece h3 a,
.lab-product-card h3 a {
  color: var(--text);
  text-decoration: none;
  font-weight: 600;
  letter-spacing: -0.02em;
}

.lab-row-name a:hover,
.lab-register-name:hover,
.lab-piece h3 a:hover,
.lab-product-card h3 a:hover { text-decoration: underline; text-underline-offset: 3px; }

.lab-rows p,
.lab-register p,
.lab-piece-text > p {
  margin: 0;
  color: var(--text);
  text-wrap: pretty;
}

.lab-row-meta { color: var(--muted); font-family: var(--mono); font-size: 12px; }

.lab-note {
  margin: 18px 0 0;
  max-width: 44rem;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.5;
  text-wrap: pretty;
}

.lab-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px 36px;
  margin-top: 40px;
}

.lab-shot {
  display: block;
  border: 1px solid var(--line);
  background: #f4f4f5;
}

.lab-shot:hover { border-color: var(--text); }

.lab-piece-text { padding-top: 14px; }

.lab-piece h3 {
  margin: 0 0 6px;
  font-size: 22px;
  font-weight: 600;
  letter-spacing: -0.03em;
}

.lab-piece-text > p { color: var(--muted); font-size: 15px; }

.lab-piece-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 14px;
  margin-top: 12px;
}

.lab-piece-meta a {
  font-family: var(--mono);
  font-size: 12px;
  color: var(--text);
  text-decoration: none;
  border-bottom: 1px solid var(--text);
}

.lab-chip {
  display: inline-flex;
  align-items: center;
  height: 20px;
  padding: 0 6px;
  border: 1px solid var(--line);
  border-radius: 2px;
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.02em;
  color: var(--muted);
  white-space: nowrap;
}

.lab-chip.is-open {
  color: var(--status);
  border-color: var(--status-line);
  background: transparent;
}

.lab-chip.is-commercial {
  color: #fff;
  background: var(--text);
  border-color: var(--text);
}

.lab-register li {
  display: grid;
  grid-template-columns: 36px minmax(140px, 180px) minmax(0, 1fr) auto;
  gap: 12px 20px;
  align-items: baseline;
  padding: 16px 0;
  border-top: 1px solid var(--line);
}

.lab-register li:last-child { border-bottom: 1px solid var(--line); }

.lab-index { padding-top: 4px; }

.lab-footer {
  display: grid;
  grid-template-columns: 1.25fr repeat(5, 1fr);
  gap: 32px 24px;
  padding-top: 64px;
  padding-bottom: 28px;
  border-top: 1px solid var(--line);
  scroll-margin-top: 80px;
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
.lab button:focus-visible {
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

  .lab-hero {
    height: 75vh;
    max-height: 75vh;
  }

  .lab-hero-copy {
    width: auto;
    min-height: 0;
    margin-left: 0;
    padding: 28px 20px 72px;
    justify-content: flex-start;
    background: linear-gradient(180deg, rgba(20, 19, 17, 0.92) 0%, rgba(20, 19, 17, 0.78) 62%, rgba(20, 19, 17, 0) 100%);
  }

  .lab-stack,
  .lab-grid,
  .lab-product-pair { grid-template-columns: 1fr; gap: 40px; }

  .lab-product-pair { margin-top: 56px; }

  .lab-rows li,
  .lab-register li {
    grid-template-columns: 1fr;
    gap: 6px;
  }

  .lab-footer { grid-template-columns: 1fr 1fr; }
  .lab-footer-brand { grid-column: 1 / -1; }
}

@media (max-width: 560px) {
  .lab-header-bar,
  .lab-section,
  .lab-footer {
    padding-left: 20px;
    padding-right: 20px;
  }
  .lab-section { padding-top: 56px; padding-bottom: 64px; }
  .lab-dek,
  .lab-prose p { font-size: 16px; }
  .lab-footer { grid-template-columns: 1fr; }
}

@media (prefers-reduced-motion: reduce) {
  .lab a,
  .lab button { transition: none; }
}
</style>
