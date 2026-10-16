<template>
  <div class="rec">
    <a class="skip" href="#content">Skip to content</a>

    <header class="bar">
      <a class="word" href="/">ProbeLabs</a>
      <span class="mono counter">RECORD PL-01—PL-{{ pad(total) }}</span>
      <nav class="nav" aria-label="Primary">
        <a href="#products">Products</a>
        <a href="#stack">Stack</a>
        <a href="#projects">Projects</a>
        <a href="#instruments">Instruments</a>
        <a href="#about">About</a>
        <a href="https://github.com/probelabs" target="_blank" rel="noopener noreferrer">GitHub</a>
      </nav>
    </header>

    <main id="content">
      <section
        class="hero"
        aria-labelledby="thesis"
        @pointerleave="leave"
        @focusout="onFocusOut"
      >
        <p class="mono meta-line">PROBELABS — RESEARCH LAB — ENGINEERING CRAFT IN THE AGENTIC ERA</p>
        <h1 id="thesis" class="thesis">
          Making agents trustworthy on real software. We build the instruments that turn agent work into recoverable intent and rerunnable evidence — shipped as
          <a
            class="ghost"
            href="https://reqproof.com"
            data-world="proof"
            data-takeover
            @pointerenter="enter('proof', { pointer: true })"
            @focus="enter('proof')"
          >Proof</a>,
          <a
            class="ghost"
            href="/oel"
            data-world="oel"
            data-takeover
            @pointerenter="enter('oel', { pointer: true })"
            @focus="enter('oel')"
          >Oel</a>
          and
          <a
            class="ghost"
            href="https://spiritroom.app/"
            data-world="spirit-room"
            data-takeover
            @pointerenter="enter('spirit-room', { pointer: true })"
            @focus="enter('spirit-room')"
          >Spirit Room</a>.
        </h1>
        <div class="hero-foot">
          <p class="hero-num">{{ total }}</p>
          <p class="mono hero-cap">
            works on the record.
            <a href="#products">{{ counts.products }} products</a>
            · <a href="#stack">{{ counts.core }} core</a>
            · <a href="#projects">{{ counts.projects }} projects</a>
            · <a href="#experiments">{{ counts.experiments }} experiments</a>
            · <a href="#instruments">{{ counts.instruments }} instruments</a>
          </p>
        </div>
      </section>

      <section
        id="products"
        class="chapter"
        aria-labelledby="products-title"
        @pointerleave="leave"
        @focusout="onFocusOut"
      >
        <div class="rule"></div>
        <div class="chapter-head">
          <p class="mega" aria-hidden="true">01</p>
          <div class="titles">
            <h2 id="products-title">Products</h2>
            <p class="mono desc">Our products. Open instruments and research follow.</p>
          </div>
        </div>

        <article
          class="proof"
          data-world="proof"
          data-takeover
          @pointerenter="enter('proof', { pointer: true })"
          @focusin="enter('proof')"
        >
          <a class="frame ratio-proof" href="https://reqproof.com">
            <img
              src="/images/portfolio/proof.png"
              width="1440"
              height="900"
              alt="Proof homepage: From prompt to production, with Start with a change and See the evidence."
            >
          </a>
          <div class="proof-copy">
            <p class="mono kicker">PL-01 · PRODUCT · reqproof.com</p>
            <h3>Proof</h3>
            <p class="pitch">From prompt to production. Proof brings NASA-grade rigor to your AI workflow: review the evidence, spend less time reconstructing it.</p>
            <a class="textlink" href="https://reqproof.com">reqproof.com ↗</a>
            <p class="mono sublinks">
              <a href="https://reqproof.com/method">Method</a>
              <a href="https://reqproof.com/product">Product</a>
              <a href="https://reqproof.com/about">Public register</a>
            </p>
          </div>
        </article>

        <article
          v-for="item in productRows"
          :key="item.world"
          class="pair"
          :data-world="item.world"
          data-takeover
          @pointerenter="enter(item.world, { pointer: true })"
          @focusin="enter(item.world)"
        >
          <a class="frame ratio-row" :href="item.href">
            <img :src="item.image" :width="item.width" :height="item.height" :alt="item.alt" loading="lazy">
          </a>
          <div class="pair-copy">
            <p class="mono kicker">{{ item.id }} · PRODUCT · {{ item.where }}</p>
            <h3><a :href="item.href">{{ item.name }}</a></h3>
            <p class="pitch">{{ item.pitch }}</p>
            <p>{{ item.body }}</p>
            <a class="textlink" :href="item.href">{{ item.link }}</a>
          </div>
        </article>
      </section>

      <section
        id="stack"
        class="chapter core"
        aria-labelledby="stack-title"
        @pointerleave="leave"
        @focusout="onFocusOut"
      >
        <div class="rule"></div>
        <div class="chapter-head">
          <p class="mega" aria-hidden="true">02</p>
          <div class="titles">
            <h2 id="stack-title">Core stack</h2>
            <p class="mono desc">Probe walks code and corpus. Visor runs agent work as a traced workflow. Both sit beside Proof.</p>
          </div>
        </div>
        <div class="halves">
          <article
            v-for="item in core"
            :key="item.world"
            class="half"
            :data-world="item.world"
            data-takeover
            @pointerenter="enter(item.world, { pointer: true })"
            @focusin="enter(item.world)"
          >
            <p class="mega half-num">{{ item.num }}</p>
            <h3><a :href="item.href">{{ item.name }}</a></h3>
            <p>{{ item.line }}</p>
            <p class="why">{{ item.why }}</p>
            <p class="mono sublinks">
              <a :href="item.href">{{ item.path }}</a>
              <a
                v-for="link in item.links"
                :key="link.href"
                :href="link.href"
                :target="link.external ? '_blank' : undefined"
                :rel="link.external ? 'noopener noreferrer' : undefined"
              >{{ link.label }}</a>
            </p>
            <img
              class="mini"
              :src="item.image"
              width="1440"
              height="900"
              :alt="item.alt"
              loading="lazy"
            >
          </article>
        </div>
      </section>

      <section
        id="projects"
        class="chapter"
        aria-labelledby="projects-title"
        @pointerleave="leave"
        @focusout="onFocusOut"
      >
        <div class="rule"></div>
        <div class="chapter-head">
          <p class="mega" aria-hidden="true">03</p>
          <div class="titles">
            <h2 id="projects-title">Projects</h2>
            <p class="mono desc">Live pages, captured as they ship.</p>
          </div>
        </div>

        <div class="proj">
          <div class="ledger">
            <div class="row cols" aria-hidden="true">
              <span>№</span>
              <span>Name</span>
              <span>Kind</span>
              <span>Entry</span>
              <span></span>
            </div>
            <article
              v-for="item in projects"
              :key="item.world"
              class="row"
              :class="{ 'is-on': activeKey === item.world }"
              :data-world="item.world"
              data-takeover
              @pointerenter="enter(item.world, { pointer: true, poster: item.world })"
              @pointerleave="leave"
              @focusin="enter(item.world, { poster: item.world })"
            >
              <span class="no">{{ item.num }}</span>
              <a class="nm" :href="item.href">{{ item.name }}</a>
              <span class="kind">{{ item.kind }}</span>
              <p class="entry">
                <span>{{ item.line }}</span>
                <a
                  v-for="link in item.links"
                  :key="link.href"
                  class="inline"
                  :href="link.href"
                  target="_blank"
                  rel="noopener noreferrer"
                >{{ link.label }}</a>
              </p>
              <a class="go" :href="item.href" :aria-label="'Open ' + item.name" tabindex="-1">↗</a>
              <a class="m-shot frame" :href="item.href" tabindex="-1">
                <img :src="item.image" width="1200" height="630" :alt="item.alt" loading="lazy">
              </a>
            </article>
          </div>

          <aside class="window-wrap" aria-live="polite">
            <div class="window">
              <img
                :src="poster.a"
                :class="{ show: poster.showA }"
                :alt="poster.showA ? poster.alt : ''"
                :aria-hidden="poster.showA ? 'false' : 'true'"
                width="1200"
                height="630"
              >
              <img
                :src="poster.b"
                :class="{ show: !poster.showA }"
                :alt="poster.showA ? '' : poster.alt"
                :aria-hidden="poster.showA ? 'true' : 'false'"
                width="1200"
                height="630"
              >
            </div>
            <p class="mono caption">{{ poster.caption }}</p>
          </aside>
        </div>

        <div class="sheet">
          <a
            v-for="item in projects"
            :key="'sheet-' + item.world"
            class="cell"
            :href="item.href"
            :data-world="item.world"
            data-takeover
            @pointerenter="enter(item.world, { pointer: true, poster: item.world })"
            @pointerleave="leave"
            @focus="enter(item.world, { poster: item.world })"
          >
            <span class="frame ratio-og">
              <img :src="item.image" width="1200" height="630" alt="" loading="lazy">
            </span>
            <span class="mono caption">{{ item.id }} {{ item.name }} — {{ item.sheet }}</span>
          </a>
        </div>
      </section>

      <section
        id="experiments"
        class="chapter"
        aria-labelledby="experiments-title"
        @pointerleave="hideFloat"
        @focusout="onFocusOut"
      >
        <div class="rule"></div>
        <div class="chapter-head">
          <p class="mega" aria-hidden="true">04</p>
          <div class="titles">
            <h2 id="experiments-title">Experiments</h2>
            <p class="mono desc">Small tools around the same problem: keeping agents useful without losing control.</p>
          </div>
        </div>
        <div class="ledger ledger-full">
          <div class="row cols exp-row" aria-hidden="true">
            <span>№</span>
            <span>Name</span>
            <span>Kind</span>
            <span>Entry</span>
            <span>Repo</span>
          </div>
          <article
            v-for="item in experiments"
            :key="item.name"
            class="row exp-row"
            @pointerenter="showFloat($event, item)"
            @pointermove="moveFloat"
            @pointerleave="hideFloat"
          >
            <span class="no">{{ item.num }}</span>
            <a class="nm" :href="item.href" :target="item.external ? '_blank' : undefined" :rel="item.external ? 'noopener noreferrer' : undefined">{{ item.name }}</a>
            <span class="kind">{{ item.kind }}</span>
            <p class="entry">{{ item.line }}</p>
            <a
              v-if="item.repo"
              class="repo"
              :href="item.repo.href"
              target="_blank"
              rel="noopener noreferrer"
            >{{ item.repo.label }}</a>
            <span v-else class="repo">—</span>
          </article>
        </div>
      </section>

      <section id="instruments" class="chapter tight" aria-labelledby="instruments-title">
        <div class="rule"></div>
        <div class="chapter-head">
          <p class="mega" aria-hidden="true">05</p>
          <div class="titles">
            <h2 id="instruments-title">Instruments</h2>
            <p class="mono desc">Structure-aware fuzzers pressure parsers. The gate re-runs in your CI.</p>
          </div>
        </div>
        <blockquote class="quote">
          <p>We build the instruments we audit with.</p>
          <footer>
            <cite><a href="https://reqproof.com/engine">Proof — the instruments that produce the evidence</a></cite>
          </footer>
        </blockquote>
        <ul class="inst">
          <li v-for="item in instruments" :key="item.name">
            <a :href="item.href" :target="item.external ? '_blank' : undefined" :rel="item.external ? 'noopener noreferrer' : undefined">{{ item.id }} {{ item.name }}</a>
            <span class="status">{{ item.meta }}<template v-if="item.chip"> · {{ item.chip }}</template></span>
            <span class="inst-line">{{ item.line }}</span>
          </li>
        </ul>
        <p class="note">Proof plans to release the quality-engineering harness as open source. That release is not out yet. The dashboard and factory orchestration remain proprietary.</p>
      </section>
    </main>

    <footer id="about" class="chapter tight about">
      <div class="rule"></div>
      <div class="chapter-head">
        <p class="mega" aria-hidden="true">06</p>
        <div class="titles">
          <h2>About</h2>
          <p class="mono desc">Research lab for engineering craft in the agentic era.</p>
        </div>
      </div>
      <div class="bleed-crop">
        <p class="mark-crop">ProbeLabs</p>
      </div>
      <div class="about-grid">
        <div class="about-copy">
          <p>We build deterministic agent workflows for real engineering organizations.</p>
          <p>AI is changing how software gets built. Code is getting cheaper. Understanding, planning, and governance are becoming the bottlenecks. We're building the infrastructure that helps teams extract the truth from complex systems and run AI workflows that are repeatable, inspectable, and safe.</p>
        </div>
        <ul class="mono contact">
          <li><a href="mailto:hello@probelabs.com">hello@probelabs.com</a></li>
          <li><a href="mailto:hello@reqproof.com">hello@reqproof.com</a></li>
          <li><a href="https://github.com/probelabs" target="_blank" rel="noopener noreferrer">github.com/probelabs</a></li>
          <li><a href="/company/about">/company/about</a></li>
          <li><a href="/privacy">Privacy</a></li>
          <li><a href="/terms">Terms</a></li>
        </ul>
      </div>
      <p class="mono colophon">© ProbeLabs · RECORD PL-01—PL-{{ pad(total) }} · updated {{ updated }}</p>
    </footer>

    <div
      v-show="float.on"
      class="float"
      :style="{ left: float.x + 'px', top: float.y + 'px' }"
      aria-hidden="true"
    >
      <img :src="float.src" width="240" height="150" alt="">
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, reactive, ref } from 'vue'

const updated = '16 Oct 2026'

// Colours checked against source, not the brief's estimates.
// proof: reqproof.com :root --forest / --paper / wordmark span (styles.css, theme-color).
// oel: /oel has no --bg/--ink/--accent (new-homepage.css). Brief fallback.
// spirit-room: spiritroom.app site.css --bg/--ink and chamber.js orbit rgba(239,138,0).
// qc, ste, aeo, fuzzers, docs-mcp, recs: each page's CSS background/color plus the accent used on that page.
const WORLDS = {
  proof: { bg: '#1b2823', ink: '#f3f0e9', accent: '#7fa34e', onAccent: '#1b2823', chip: false, faint: false, ring: '#7fa34e', scheme: 'dark' },
  oel: { bg: '#0d0d0d', ink: '#f2f2f2', accent: '#ff7a1a', onAccent: '#0d0d0d', chip: false, faint: false, ring: '#ff7a1a', scheme: 'dark' },
  'spirit-room': { bg: '#fafafa', ink: '#171717', accent: '#ef8a00', onAccent: '#171717', chip: true, faint: true, ring: '#171717', scheme: 'light' },
  probe: { bg: '#ffffff', ink: '#000000', accent: '#000000', onAccent: '#ffffff', chip: false, faint: false, ring: '#000000', scheme: 'light' },
  visor: { bg: '#000000', ink: '#ffffff', accent: '#ffffff', onAccent: '#000000', chip: false, faint: false, ring: '#ffffff', scheme: 'dark' },
  qc: { bg: '#f3f3f3', ink: '#151515', accent: '#fff824', onAccent: '#151515', chip: true, faint: true, ring: '#151515', scheme: 'light' },
  ste: { bg: '#ffffff', ink: '#000000', accent: '#000000', onAccent: '#ffffff', chip: false, faint: false, ring: '#000000', scheme: 'light' },
  aeo: { bg: '#008fff', ink: '#ffffff', accent: '#ffe400', onAccent: '#111111', chip: true, faint: true, ring: '#ffffff', scheme: 'light' },
  fuzzers: { bg: '#000000', ink: '#ffffff', accent: '#00fb34', onAccent: '#000000', chip: false, faint: false, ring: '#00fb34', scheme: 'dark' },
  'docs-mcp': { bg: '#043f2e', ink: '#fcfcfc', accent: '#c8f169', onAccent: '#043f2e', chip: false, faint: false, ring: '#c8f169', scheme: 'dark' },
  recs: { bg: '#f1f2f3', ink: '#111111', accent: '#ff5e24', onAccent: '#111111', chip: true, faint: true, ring: '#111111', scheme: 'light' }
}

const PAPER = { bg: '#ffffff', ink: '#000000', accent: '#000000', onAccent: '#ffffff', ring: '#000000' }

function pad(n) {
  return String(n).padStart(2, '0')
}

const products = [
  {
    world: 'proof',
    name: 'Proof',
    pitch: 'From prompt to production. Proof brings NASA-grade rigor to your AI workflow: review the evidence, spend less time reconstructing it.'
  }
]

const productRows = [
  {
    world: 'oel',
    name: 'Oel',
    href: '/oel',
    where: '/oel',
    link: '/oel →',
    image: '/images/portfolio/oel-gitops.png',
    width: 1440,
    height: 616,
    alt: 'Oel page: the GitOps-friendly, security-first company brain, with an answer that cites middleware/rate_limit.go.',
    pitch: 'The security-first company brain.',
    body: 'GitOps-friendly and self-hosted, with scoped permissions, an audit trail and answers grounded in your code.'
  },
  {
    world: 'spirit-room',
    name: 'Spirit Room',
    href: 'https://spiritroom.app/',
    where: 'spiritroom.app',
    link: 'spiritroom.app ↗',
    image: '/images/portfolio/spirit-room.png',
    width: 1440,
    height: 640,
    alt: 'Spirit Room homepage: Optimise your MCP, CLI or API for AI agents.',
    pitch: 'Optimise your MCP, CLI or API for AI agents.',
    body: 'We run every major agent through hundreds of simulations, trying new tool descriptions, help text, errors and combined tools. The result: agents finish your jobs in fewer steps, with fewer mistakes, even on cheaper models.'
  }
]

const core = [
  {
    world: 'probe',
    name: 'Probe',
    href: '/probe',
    path: '/probe',
    image: '/images/portfolio/probe.png',
    alt: 'Probe homepage: context retrieval that understands code, marked open source and local.',
    line: 'Semantic code search over large trees. Ripgrep speed, with tree-sitter structure.',
    why: 'Proof engagements use it to walk code and corpus in one pass.',
    links: [
      { label: 'Oel', href: '/oel' },
      { label: 'GitHub', href: 'https://github.com/probelabs/probe', external: true }
    ]
  },
  {
    world: 'visor',
    name: 'Visor',
    href: '/visor',
    path: '/visor',
    image: '/images/portfolio/visor.png',
    alt: 'Visor homepage: predictable agent workflows defined in YAML.',
    line: 'YAML workflows with validation, approvals, fallbacks, and an OpenTelemetry trace for every run.',
    why: 'It keeps an agent run visible: the same steps, the same gates, and an OpenTelemetry trace. Proof’s CI/CD orchestrator is a separate instrument, and is not identified as Visor.',
    links: [
      { label: 'GitHub', href: 'https://github.com/probelabs/visor', external: true }
    ]
  }
]

const projects = [
  {
    world: 'qc',
    name: 'qc',
    href: '/qc',
    kind: 'Gate',
    sheet: 'Inspection Sheet',
    image: '/images/projects/qc-og.png',
    alt: 'qc inspection sheet on grey paper: giant QC, a hazard-yellow highlight, and a CLEARED stamp.',
    line: 'Deterministic checklist gate. Evidenced answers stay bound to file hashes, and the gate stays closed until every item is answered.',
    links: [{ label: 'GitHub', href: 'https://github.com/probelabs/qc' }]
  },
  {
    world: 'ste',
    name: 'ste',
    href: '/ste',
    kind: 'Validator',
    sheet: 'Specification Sheet',
    image: '/images/projects/ste-og.png',
    alt: 'ste specification sheet: UTILIZE struck through, USE set in a black block on white.',
    line: 'ASD-STE100 Simplified Technical English validator, with matching Go and Node CLIs and JSON output.',
    links: [{ label: 'GitHub', href: 'https://github.com/probelabs/ste' }]
  },
  {
    world: 'aeo',
    name: 'aeo',
    href: '/aeo',
    kind: 'Benchmark',
    sheet: 'Scoreboard',
    image: '/images/projects/aeo-og.png',
    alt: 'aeo scoreboard on electric blue, with say your name on a yellow block and an example board.',
    line: 'Measures whether Claude Code, Codex, and Grok mention your product, with search off and with search on.',
    links: [{ label: 'GitHub', href: 'https://github.com/probelabs/aeo' }]
  },
  {
    world: 'fuzzers',
    name: 'Fuzzers',
    href: '/fuzzers',
    kind: 'Fuzzer',
    sheet: 'Malformed',
    image: '/images/projects/fuzzers-og.png',
    alt: 'Malformed on black, cut by green blocks, over JSON, GraphQL, and XML documents.',
    line: 'Structure-aware fuzzers for JSON, GraphQL, and XML. Grammar generators, format-aware mutations, and correctness gates.',
    links: [
      { label: 'json-fuzz', href: 'https://github.com/probelabs/json-fuzz' },
      { label: 'graphql-fuzz', href: 'https://github.com/probelabs/graphql-fuzz' },
      { label: 'xml-fuzz', href: 'https://github.com/probelabs/xml-fuzz' }
    ]
  },
  {
    world: 'docs-mcp',
    name: 'docs-mcp',
    href: '/docs-mcp',
    kind: 'MCP server',
    sheet: 'Reading Room',
    image: '/images/projects/docs-mcp-og.png',
    alt: 'docs-mcp reading room: forest green field, a paper sheet, and a lime copy button.',
    line: 'Turns any GitHub repository into an MCP server so an assistant can search its code or docs.',
    links: [{ label: 'GitHub', href: 'https://github.com/probelabs/docs-mcp' }]
  },
  {
    world: 'recs',
    name: 'recs',
    href: '/recs',
    kind: 'CRM',
    sheet: 'Desktop',
    image: '/images/projects/recs-og.png',
    alt: 'recs desktop: grey field, overlapping windows, and an orange install button.',
    line: 'A file-based CRM for agents. Markdown records, YAML dashboards, and a local UI over the same files.',
    links: [{ label: 'GitHub', href: 'https://github.com/buger/recs' }]
  }
]

const experiments = [
  {
    name: 'Maid',
    href: '/maid',
    kind: 'Diagrams',
    image: '/images/portfolio/maid.png',
    alt: 'Maid homepage: Meet Maid, a Mermaid.js diagram assistant.',
    line: 'Lightning-fast Mermaid linter with auto-fix, for the CLI, CI, and agents.',
    repo: { label: 'GitHub', href: 'https://github.com/probelabs/maid' }
  },
  {
    name: 'GoReplay',
    href: 'https://goreplay.org',
    external: true,
    kind: 'HTTP',
    image: '/images/portfolio/goreplay.png',
    alt: 'GoReplay homepage: capture and replay HTTP traffic.',
    line: 'Capture live HTTP traffic and replay it against an isolated target.',
    repo: { label: 'GitHub', href: 'https://github.com/probelabs/goreplay' }
  },
  {
    name: 'Big Brain',
    href: '/big-brain',
    kind: 'MCP',
    image: '/images/portfolio/big-brain.png',
    alt: 'Big Brain homepage: hand a stuck problem to a stronger model.',
    line: 'An MCP server that packages code context so a stuck problem can be handed to a stronger model.',
    repo: { label: 'GitHub', href: 'https://github.com/probelabs/big-brain' }
  },
  {
    name: 'AFK',
    href: '/afk',
    kind: 'Telegram',
    image: '/images/portfolio/afk.png',
    alt: 'AFK homepage: stay in control of Claude Code from Telegram.',
    line: 'Remote control and approval for Claude Code via Telegram.',
    repo: { label: 'GitHub', href: 'https://github.com/probelabs/afk' }
  },
  {
    name: 'Vow',
    href: '/vow',
    kind: 'Gates',
    image: '/images/portfolio/vow.png',
    alt: 'Vow homepage: accountability gates before an agent commits or acts.',
    line: 'Accountability gates: an agent must self-review before commits and actions.',
    repo: { label: 'GitHub', href: 'https://github.com/probelabs/vow' }
  },
  {
    name: 'Memaris',
    href: '/memaris',
    kind: 'Memory',
    image: '/images/portfolio/memaris.png',
    alt: 'Memaris homepage: turn past Claude Code sessions into persistent memory.',
    line: 'Turns past Claude Code sessions into persistent memory.',
    repo: { label: 'GitHub', href: 'https://github.com/probelabs/memaris' }
  },
  {
    name: 'Logoscope',
    href: '/logoscope',
    kind: 'Logs',
    image: '/images/portfolio/logoscope.png',
    alt: 'Logoscope homepage: distill logs into structured intelligence.',
    line: 'Distills logs into structured, AI-ready patterns.',
    repo: { label: 'GitHub', href: 'https://github.com/probelabs/logoscope' }
  },
  {
    name: 'Memory Layer',
    href: '/products/memory-layer',
    kind: 'Waitlist',
    image: '/images/portfolio/memory-layer.png',
    alt: 'Memory Layer page: a waitlist for extracting institutional knowledge from PRs, tickets, and Slack.',
    line: 'Extracts institutional knowledge from PRs, tickets, Slack, and documentation.',
    repo: null
  }
]

const instruments = [
  {
    name: 'Fuzzers',
    href: '/fuzzers',
    line: 'Structure-aware fuzzers for JSON, GraphQL, and XML. Grammar generators, format-aware mutations, and correctness gates.',
    meta: 'Go · Rust',
    chip: 'Published'
  },
  {
    name: 'json-fuzz',
    href: '/fuzzers#json-fuzz',
    line: 'Structure-aware JSON fuzzer. A grammar-based generator, JSON-aware mutations, and correctness gates for differential testing of JSON parsers.',
    meta: 'Go',
    chip: 'Published'
  },
  {
    name: 'graphql-fuzz',
    href: '/fuzzers#graphql-fuzz',
    line: 'Structure-aware GraphQL fuzzer. Grammar-based query, operation, and schema generators, with correctness gates for differential testing of GraphQL parsers.',
    meta: 'Rust',
    chip: 'Published'
  },
  {
    name: 'xml-fuzz',
    href: '/fuzzers#xml-fuzz',
    line: 'Structure-aware XML fuzzer. Grammar-based documents, XML-aware mutations, and correctness gates, with optional libxml2 harnesses.',
    meta: 'Rust',
    chip: 'Published'
  },
  {
    name: 'proof-action',
    href: 'https://github.com/probelabs/proof-action',
    external: true,
    line: 'GitHub Action that runs a ReqProof verification audit on a repository and reports the result in the job summary.',
    meta: 'Action',
    chip: 'Public repo'
  }
]

const counts = {
  products: 1 + productRows.length,
  core: core.length,
  projects: projects.length,
  experiments: experiments.length,
  instruments: instruments.length
}
const total = counts.products + counts.core + counts.projects + counts.experiments + counts.instruments

let cursor = 1
products.forEach((item) => {
  item.num = pad(cursor)
  item.id = `PL-${item.num}`
  cursor += 1
})
productRows.forEach((item) => {
  item.num = pad(cursor)
  item.id = `PL-${item.num}`
  cursor += 1
})
core.forEach((item) => {
  item.num = pad(cursor)
  item.id = `PL-${item.num}`
  cursor += 1
})
projects.forEach((item) => {
  item.num = pad(cursor)
  item.id = `PL-${item.num}`
  cursor += 1
})
experiments.forEach((item) => {
  item.num = pad(cursor)
  item.id = `PL-${item.num}`
  cursor += 1
})
instruments.forEach((item) => {
  item.num = pad(cursor)
  item.id = `PL-${item.num}`
  cursor += 1
})

const byWorld = Object.fromEntries(projects.map((item) => [item.world, item]))

const activeKey = ref('')
const reduced = ref(false)
const fineHover = ref(true)
const poster = reactive({
  a: projects[0].image,
  b: projects[0].image,
  showA: true,
  alt: projects[0].alt,
  caption: captionFor(projects[0])
})
const float = reactive({ on: false, x: 0, y: 0, src: experiments[0].image })

let leaveTimer = 0
let posterTimer = 0
let observer = null
let classObserver = null
let fineQuery
let motionQuery
let onFine
let onMotion

function captionFor(item) {
  const world = WORLDS[item.world]
  return `${item.id} ${item.name} — bg ${world.bg} / accent ${world.accent}`
}

function paint(key) {
  const root = document.documentElement
  const world = key ? WORLDS[key] : null
  if (!world) {
    root.style.setProperty('--bg', PAPER.bg)
    root.style.setProperty('--ink', PAPER.ink)
    root.style.setProperty('--accent', PAPER.accent)
    root.style.setProperty('--on-accent', PAPER.onAccent)
    root.style.setProperty('--ring', PAPER.ring)
    root.removeAttribute('data-world')
    root.removeAttribute('data-chip')
    root.removeAttribute('data-faint')
    root.style.colorScheme = 'light'
    return
  }
  root.style.setProperty('--bg', world.bg)
  root.style.setProperty('--ink', world.ink)
  root.style.setProperty('--accent', world.accent)
  root.style.setProperty('--on-accent', world.onAccent)
  root.style.setProperty('--ring', world.ring)
  root.dataset.world = key
  if (world.chip) root.dataset.chip = '1'
  else root.removeAttribute('data-chip')
  if (world.faint) root.dataset.faint = '1'
  else root.removeAttribute('data-faint')
  root.style.colorScheme = world.scheme
}

function showPoster(worldKey) {
  const item = byWorld[worldKey]
  if (!item) return
  poster.alt = item.alt
  poster.caption = captionFor(item)
  const current = poster.showA ? poster.a : poster.b
  if (current === item.image) return
  window.clearTimeout(posterTimer)
  if (poster.showA) poster.b = item.image
  else poster.a = item.image
  const flip = () => { poster.showA = !poster.showA }
  if (reduced.value) flip()
  else posterTimer = window.setTimeout(flip, 32)
}

function enter(key, opts = {}) {
  if (!key || !WORLDS[key]) return
  if (opts.pointer && !fineHover.value) return
  window.clearTimeout(leaveTimer)
  activeKey.value = key
  if (opts.poster) showPoster(opts.poster)
  requestAnimationFrame(() => paint(key))
}

function focusedWorld(root) {
  const el = document.activeElement
  if (!el || !el.closest) return ''
  const zone = el.closest('[data-world]')
  if (!zone || (root && !root.contains(zone))) return ''
  return zone.dataset.world || ''
}

function leave() {
  window.clearTimeout(leaveTimer)
  const delay = reduced.value ? 0 : 120
  leaveTimer = window.setTimeout(() => {
    const key = focusedWorld()
    if (key) {
      activeKey.value = key
      paint(key)
      return
    }
    activeKey.value = ''
    requestAnimationFrame(() => paint(null))
  }, delay)
}

function onFocusOut(event) {
  const next = event.relatedTarget
  if (next && event.currentTarget.contains(next)) return
  leave()
}

function showFloat(event, item) {
  if (!fineHover.value || window.innerWidth < 1024) return
  float.src = item.image
  moveFloat(event)
  float.on = true
}

function moveFloat(event) {
  if (!float.on) return
  const maxX = window.innerWidth - 240 - 8
  const maxY = window.innerHeight - 150 - 8
  float.x = Math.max(8, Math.min(event.clientX + 16, maxX))
  float.y = Math.max(8, Math.min(event.clientY + 16, maxY))
}

function hideFloat() {
  float.on = false
}

function lockLight() {
  const root = document.documentElement
  if (root.classList.contains('dark')) root.classList.remove('dark')
}

function mountScroll() {
  if (observer) {
    observer.disconnect()
    observer = null
  }
  if (reduced.value || fineHover.value) return
  const nodes = [...document.querySelectorAll('[data-takeover][data-world]')]
  const seen = new Map()
  observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) seen.set(entry.target, entry.intersectionRatio)
      else seen.delete(entry.target)
    }
    if (!seen.size) {
      activeKey.value = ''
      paint(null)
      return
    }
    const bandTop = window.innerHeight * 0.45
    const bandBot = window.innerHeight * 0.55
    let best = null
    let overlap = -1
    for (const el of seen.keys()) {
      const rect = el.getBoundingClientRect()
      const height = Math.min(rect.bottom, bandBot) - Math.max(rect.top, bandTop)
      if (height > overlap) {
        overlap = height
        best = el
      }
    }
    const key = best?.dataset.world
    if (!key) return
    activeKey.value = key
    if (byWorld[key]) showPoster(key)
    paint(key)
  }, { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] })
  nodes.forEach((node) => observer.observe(node))
}

function useWorld() {
  return { activeKey, reduced, fineHover, enter, leave, onFocusOut, paint }
}

useWorld()

onMounted(() => {
  lockLight()
  paint(null)
  classObserver = new MutationObserver(lockLight)
  classObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })

  motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  fineQuery = window.matchMedia('(hover: hover) and (pointer: fine)')
  reduced.value = motionQuery.matches
  fineHover.value = fineQuery.matches
  onMotion = () => {
    reduced.value = motionQuery.matches
    mountScroll()
  }
  onFine = () => {
    fineHover.value = fineQuery.matches
    if (!fineHover.value) hideFloat()
    mountScroll()
  }
  motionQuery.addEventListener('change', onMotion)
  fineQuery.addEventListener('change', onFine)
  mountScroll()
})

onUnmounted(() => {
  window.clearTimeout(leaveTimer)
  window.clearTimeout(posterTimer)
  observer?.disconnect()
  classObserver?.disconnect()
  motionQuery?.removeEventListener('change', onMotion)
  fineQuery?.removeEventListener('change', onFine)
  const root = document.documentElement
  root.style.colorScheme = ''
  root.removeAttribute('data-world')
  root.removeAttribute('data-chip')
  root.removeAttribute('data-faint')
})
</script>

<style scoped>
.rec {
  --ash: #8c8c8c;
  --ash-strong: #6b6b6b;
  --sans: Geist, "Geist Sans", ui-sans-serif, system-ui, sans-serif;
  --mono: "Geist Mono", ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace;
  --ease: cubic-bezier(.2, .7, .1, 1);
  --t-mega: clamp(220px, 34vw, 640px);
  --t-display: clamp(44px, 4.4vw, 84px);
  --t-h2: clamp(32px, 3vw, 56px);
  --t-chapter: clamp(140px, 18vw, 340px);
  --t-row: 24px;
  --t-body: 17px;
  --t-meta: 12px;
  --gutter: 16px;
  --gap: 96px;
  background: var(--bg, #fff);
  color: var(--ink, #000);
  font-family: var(--sans);
  font-weight: 400;
  font-size: var(--t-body);
  line-height: 1.4;
  letter-spacing: -0.02em;
  min-height: 100vh;
  color-scheme: light;
}

.rec,
.rec *,
.rec *::before,
.rec *::after { box-sizing: border-box; border-radius: 0; }

.rec :where(h1, h2, h3, p, ul, blockquote) { margin: 0; }

.rec a { color: inherit; }

.mono {
  font-family: var(--mono);
  font-weight: 400;
  font-size: var(--t-meta);
  line-height: 1.25;
  letter-spacing: 0;
  font-variant-numeric: tabular-nums;
}

.skip {
  position: absolute;
  left: 16px;
  top: -48px;
  z-index: 80;
  background: var(--ink, #000);
  color: var(--bg, #fff);
  padding: 8px 12px;
  text-decoration: none;
}

.skip:focus { top: 8px; }

.bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 40;
  height: 40px;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0 var(--gutter);
  background: var(--bg, #fff);
  color: var(--ink, #000);
  border-bottom: 1px solid var(--ink, #000);
}

.word {
  font-weight: 500;
  font-size: 16px;
  letter-spacing: -0.02em;
  text-decoration: none;
  color: var(--ink, #000);
  flex: 0 0 auto;
}

.counter {
  color: var(--ash-strong);
  flex: 0 0 auto;
}

:global(html[data-world]) .counter,
:global(html[data-world]) .nav a { color: var(--ink); }

.nav {
  display: flex;
  align-items: center;
  gap: 18px;
  margin-left: auto;
  min-width: 0;
}

.nav a {
  color: var(--ash-strong);
  text-decoration: none;
  font-size: 14px;
  letter-spacing: -0.02em;
  white-space: nowrap;
}

.nav a:hover,
.nav a:focus-visible { color: var(--ink, #000); }

.hero,
.chapter {
  scroll-margin-top: 56px;
}

.hero {
  display: flex;
  flex-direction: column;
  padding: 56px var(--gutter) 28px;
}

.meta-line {
  margin: 0;
  max-width: 70ch;
  color: var(--ash-strong);
}

:global(html[data-world]) .meta-line,
:global(html[data-world]) .desc,
:global(html[data-world]) .caption,
:global(html[data-world]) .hero-cap,
:global(html[data-world]) .entry,
:global(html[data-world]) .why,
:global(html[data-world]) .note,
:global(html[data-world]) .kicker { color: var(--ink); }

.thesis {
  max-width: 66.666%;
  margin-top: 18px;
  font-size: var(--t-display);
  font-weight: 300;
  line-height: 1.05;
  letter-spacing: -0.02em;
  text-wrap: pretty;
}

.ghost {
  display: inline;
  border: 1px solid var(--ink, #000);
  padding: 0 0.12em;
  text-decoration: none;
  color: inherit;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
}

.hero-foot {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  margin-top: 28px;
}

.hero-num {
  margin: 0;
  font-size: var(--t-mega);
  font-weight: 300;
  line-height: 0.8;
  letter-spacing: -0.045em;
  color: var(--ink, #000);
}

.hero-cap {
  max-width: 36ch;
  margin: 0 0 0.6em;
  text-align: right;
  color: var(--ash-strong);
}

.hero-cap a {
  color: inherit;
  text-decoration: none;
  border-bottom: 1px solid currentColor;
}

.chapter { padding: var(--gap) var(--gutter) 0; }
.chapter.tight { --gap: 72px; }

.rule {
  height: 0;
  border: 0;
  border-top: 1px solid var(--ink, #000);
  margin: 0 calc(var(--gutter) * -1) 8px;
}

.chapter-head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  padding-bottom: 20px;
}

.mega {
  margin: 0;
  font-size: var(--t-chapter);
  font-weight: 300;
  line-height: 0.8;
  letter-spacing: -0.045em;
  color: var(--ink, #000);
}

.titles { max-width: 36ch; text-align: right; }

.titles h2,
.proof-copy h3,
.pair-copy h3,
.half h3 {
  font-size: var(--t-h2);
  font-weight: 300;
  line-height: 1;
  letter-spacing: -0.02em;
  text-wrap: balance;
}

.desc {
  margin-top: 8px;
  color: var(--ash-strong);
}

.proof {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 24px;
  align-items: stretch;
}

.proof .ratio-proof { grid-column: 1 / 9; height: 70vh; min-height: 420px; }
.proof-copy { grid-column: 9 / 13; max-width: 62ch; display: flex; flex-direction: column; gap: 14px; }

.frame {
  display: block;
  position: relative;
  overflow: hidden;
  border: 1px solid var(--ink, #000);
  background: #111;
  text-decoration: none;
  color: inherit;
}

.frame img,
.window img,
.m-shot img,
.mini {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
}

.kicker { color: var(--ash-strong); }

.pitch,
.pair-copy p,
.half p,
.about-copy p,
.dek,
.note,
.entry {
  max-width: 62ch;
  text-wrap: pretty;
}

.pair-copy,
.proof-copy { font-size: var(--t-body); }

.textlink {
  align-self: flex-start;
  color: var(--ink, #000);
  text-underline-offset: 0.18em;
  text-decoration-thickness: 1px;
}

.sublinks {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 16px;
  color: var(--ash-strong);
}

.sublinks a { color: inherit; }

:global(html[data-world]) .sublinks,
:global(html[data-world]) .sublinks a { color: var(--ink); }

.pair {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 24px;
  align-items: center;
  margin-top: 28px;
  padding-top: 28px;
  border-top: 1px solid var(--ink, #000);
}

.pair .frame { grid-column: 1 / 7; aspect-ratio: 16 / 9; }
.pair-copy { grid-column: 7 / 13; display: flex; flex-direction: column; gap: 12px; max-width: 62ch; }
.pair-copy h3 a,
.half h3 a { text-decoration: none; }
.pair-copy h3 a:hover,
.half h3 a:hover { text-decoration: underline; text-underline-offset: 0.12em; }

.core {
  --bg: #000000;
  --ink: #ffffff;
  --accent: #ffffff;
  --ring: #ffffff;
  background: #000000;
  color: #ffffff;
}

.core .desc,
.core .sublinks { color: var(--ash); }

:global(html[data-world]) .core {
  --bg: unset;
  --ink: unset;
  --accent: unset;
  --ring: unset;
  background: var(--bg);
  color: var(--ink);
}

.halves {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-top: 1px solid currentColor;
}

.half { padding: 28px 28px 36px; min-width: 0; }
.half + .half { border-left: 1px solid currentColor; }
.half-num { font-size: clamp(100px, 12vw, 220px); }
.half h3 { margin-top: 8px; }
.half p { margin-top: 12px; }
.why { color: inherit; }
.half .sublinks { margin-top: 16px; }
.half .sublinks a { border-bottom: 1px solid currentColor; text-decoration: none; }

.mini {
  width: 33%;
  height: auto;
  aspect-ratio: 16 / 10;
  margin-top: 28px;
  border: 1px solid currentColor;
  filter: grayscale(1) contrast(1.1);
}

.half:hover .mini,
.half:focus-within .mini { filter: none; }

.proj {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 28px;
  align-items: start;
}

.ledger { grid-column: 1 / 8; min-width: 0; }
.ledger-full { grid-column: 1 / -1; }

.row {
  display: grid;
  grid-template-columns: 3rem max-content minmax(6.5rem, 8.75rem) minmax(0, 1fr) auto;
  column-gap: 16px;
  align-items: baseline;
  padding: 5px 0 8px;
  border-bottom: 1px solid var(--ink, #000);
}

.cols {
  color: var(--ash-strong);
  font-family: var(--mono);
  font-size: 12px;
  letter-spacing: 0;
  border-bottom: 1px solid var(--ink, #000);
}

.no {
  font-family: var(--mono);
  font-size: 13px;
  letter-spacing: 0;
  font-variant-numeric: tabular-nums;
  color: var(--ink, #000);
}

.row.is-on .no { color: var(--accent, #000); }

:global(html[data-chip]) .row.is-on .no {
  background: var(--accent);
  color: var(--on-accent);
  padding: 0 0.28em;
}

.nm {
  font-size: var(--t-row);
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.02em;
  text-decoration: none;
  white-space: nowrap;
  color: var(--ink, #000);
}

.row.is-on .nm {
  text-decoration: underline;
  text-underline-offset: 0.14em;
  text-decoration-thickness: 1px;
  text-decoration-color: var(--accent, currentColor);
}

:global(html[data-faint]) .row.is-on .nm { text-decoration-color: var(--ink); }

.kind {
  font-family: var(--mono);
  font-size: 12px;
  letter-spacing: 0;
  color: var(--ink, #000);
}

.entry {
  margin: 0;
  color: var(--ash-strong);
  font-size: var(--t-body);
  line-height: 1.35;
}

.row:hover .entry,
.row:focus-within .entry { color: var(--ink, #000); }

.entry .inline {
  margin-left: 0.7em;
  font-family: var(--mono);
  font-size: 12px;
  letter-spacing: 0;
  color: inherit;
}

.go,
.repo {
  font-family: var(--mono);
  font-size: 13px;
  letter-spacing: 0;
  text-decoration: none;
  color: var(--ink, #000);
}

.exp-row { grid-template-columns: 3rem max-content minmax(6rem, 8rem) minmax(0, 1fr) auto; }

.m-shot { display: none; }

.window-wrap {
  grid-column: 8 / 13;
  position: sticky;
  top: 64px;
  align-self: start;
}

.window {
  position: relative;
  width: min(100%, calc(78vh * 0.8));
  aspect-ratio: 4 / 5;
  max-height: 78vh;
  margin-left: auto;
  border: 1px solid var(--ink, #000);
  background: #111;
  overflow: hidden;
}

:global(html[data-world]) .window { border-color: var(--accent); }
:global(html[data-faint]) .window { border-color: var(--ink); }

.window img {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 160ms var(--ease);
}

.window img.show { opacity: 1; }

.caption {
  margin: 8px 0 0;
  color: var(--ash-strong);
}

.window-wrap .caption { text-align: right; }

.sheet {
  display: grid;
  grid-template-columns: 1fr;
  margin: 48px calc(var(--gutter) * -1) 0;
  border-top: 1px solid var(--ink, #000);
  border-left: 1px solid var(--ink, #000);
}

.cell {
  display: flex;
  flex-direction: column;
  min-width: 0;
  text-decoration: none;
  color: inherit;
  border-right: 1px solid var(--ink, #000);
  border-bottom: 1px solid var(--ink, #000);
}

.cell .frame { border: 0; aspect-ratio: 1200 / 630; }
.ratio-og { aspect-ratio: 1200 / 630; }
.cell .caption { padding: 8px 10px 10px; }

.quote {
  margin: 8px 0 0;
  padding: 0;
  border: 0;
  max-width: 62ch;
}

.quote p {
  font-size: var(--t-h2);
  font-weight: 300;
  line-height: 1;
  letter-spacing: -0.02em;
}

.quote footer {
  margin-top: 12px;
  font-family: var(--mono);
  font-size: 12px;
  font-style: normal;
  letter-spacing: 0;
}

.quote a { color: inherit; }

.dek { margin-top: 18px; max-width: 62ch; }

.inst {
  list-style: none;
  margin: 28px 0 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 32px;
}

.inst li {
  padding: 6px 0 8px;
  border-top: 1px solid var(--ink, #000);
  font-family: var(--mono);
  font-size: 13px;
  line-height: 1.35;
  letter-spacing: 0;
}

.inst a { color: inherit; text-decoration: none; }
.inst a:hover { text-decoration: underline; text-underline-offset: 0.15em; }
.inst .status { display: block; color: var(--ash-strong); margin-top: 2px; }
:global(html[data-world]) .inst .status { color: var(--ink); }
.inst-line { display: block; margin-top: 4px; font-family: var(--sans); font-size: 13px; letter-spacing: -0.02em; }

.note { margin-top: 18px; max-width: 62ch; color: var(--ash-strong); font-size: 14px; }

.bleed-crop {
  margin: 0 calc(var(--gutter) * -1);
  padding-left: var(--gutter);
  overflow: hidden;
}

.mark-crop {
  margin: 0;
  font-size: var(--t-mega);
  font-weight: 300;
  line-height: 0.8;
  letter-spacing: -0.045em;
  white-space: nowrap;
  color: var(--ink, #000);
}

.about-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(0, 0.7fr);
  gap: 32px 48px;
  margin-top: 28px;
}

.about-copy { display: flex; flex-direction: column; gap: 14px; max-width: 62ch; }

.contact {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.contact a { color: var(--ash-strong); text-decoration: none; }
.contact a:hover,
:global(html[data-world]) .contact a { color: var(--ink); }

.colophon {
  margin: 48px calc(var(--gutter) * -1) 0;
  padding: 14px var(--gutter) 20px;
  border-top: 1px solid var(--ink, #000);
  color: var(--ash-strong);
}

:global(html[data-world]) .colophon { color: var(--ink); }

.float {
  position: fixed;
  z-index: 50;
  width: 240px;
  height: 150px;
  border: 1px solid var(--ink, #000);
  background: #111;
  pointer-events: none;
  overflow: hidden;
}

.float img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
}

.rec a:focus-visible {
  outline: 2px solid var(--ring, #000);
  outline-offset: 3px;
}

:global(html),
:global(body),
:global(#app) {
  background: var(--bg, #ffffff);
  color: var(--ink, #000000);
  margin: 0;
}

:global(html) {
  transition: background-color 220ms cubic-bezier(.2, .7, .1, 1), color 220ms cubic-bezier(.2, .7, .1, 1);
}

.rec,
.bar,
.rule,
.row,
.pair,
.halves,
.half,
.cell,
.frame,
.window,
.inst li,
.colophon,
.ghost,
.nav a,
.counter,
.entry,
.caption,
.meta-line,
.desc,
.hero-num,
.mega,
.nm,
.no,
.textlink {
  transition: background-color 220ms var(--ease), color 220ms var(--ease), border-color 220ms var(--ease), outline-color 220ms var(--ease), text-decoration-color 220ms var(--ease);
}

@media (min-width: 768px) {
  .rec { --gutter: 24px; }
}

@media (min-width: 1024px) {
  .sheet { grid-template-columns: 1fr 1fr; }
}

@media (min-width: 1280px) {
  .rec { --gap: 160px; }
  .chapter.tight { --gap: 120px; }
  .hero {
    height: 100vh;
    padding-bottom: 0;
    overflow: hidden;
  }
  .hero-foot { margin-top: auto; }
  .hero-num { transform: translateY(18%); }
  .sheet { grid-template-columns: 1fr 1fr 1fr; }
}

@media (min-width: 1920px) {
  .rec { --gutter: 32px; }
}

@media (max-width: 1279px) {
  .hero-num { font-size: clamp(140px, 28vw, 280px); }
}

@media (max-width: 1023px) {
  .proj { display: block; }
  .window-wrap { display: none; }
  .ledger { grid-column: auto; }
  .cols { display: none; }
  .row,
  .exp-row {
    grid-template-columns: auto minmax(0, 1fr);
    grid-template-areas:
      "no name"
      "kind kind"
      "entry entry"
      "go go"
      "shot shot";
    row-gap: 4px;
    align-items: baseline;
  }
  .no { grid-area: no; }
  .nm { grid-area: name; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .kind { grid-area: kind; }
  .entry { grid-area: entry; }
  .go, .repo { grid-area: go; justify-self: start; }
  .m-shot {
    display: block;
    grid-area: shot;
    aspect-ratio: 16 / 10;
    margin-top: 8px;
  }
  .exp-row .m-shot { display: none; }
  .float { display: none; }
}

@media (max-width: 800px) {
  .rec {
    --t-mega: 140px;
    --t-display: 36px;
    --t-h2: 28px;
    --t-chapter: 140px;
    --t-row: 20px;
    --t-body: 16px;
  }
  .bar {
    height: auto;
    min-height: 40px;
    flex-wrap: wrap;
    padding-top: 8px;
    padding-bottom: 8px;
    row-gap: 4px;
  }
  .nav {
    order: 3;
    width: 100%;
    margin-left: 0;
    overflow-x: auto;
    padding-bottom: 2px;
  }
  .hero { padding-top: 88px; }
  .thesis { max-width: none; }
  .hero-foot { flex-direction: column; align-items: flex-start; }
  .hero-cap { text-align: left; margin: 0; max-width: 62ch; }
  .chapter-head { flex-direction: column; align-items: flex-start; }
  .titles { text-align: left; }
  .proof,
  .pair { grid-template-columns: 1fr; gap: 16px; }
  .proof .ratio-proof,
  .proof-copy,
  .pair .frame,
  .pair-copy { grid-column: auto; }
  .proof .ratio-proof { height: auto; min-height: 0; aspect-ratio: 4 / 5; }
  .pair .frame { aspect-ratio: 16 / 10; }
  .halves { grid-template-columns: 1fr; }
  .half + .half { border-left: 0; border-top: 1px solid currentColor; }
  .mini { width: 66%; }
  .inst,
  .about-grid { grid-template-columns: 1fr; }
}

@media (prefers-reduced-motion: reduce) {
  :global(html),
  .rec,
  .rec *,
  .window img { transition: none !important; }
  :global(html) { scroll-behavior: auto; }
}
</style>
