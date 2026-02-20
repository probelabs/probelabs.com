<template>
  <div class="new-homepage">
    <NewNav bookDemoHref="#demo-booking" />

    <!-- Hero Section -->
    <div class="nh-hero-wrapper">
    <section class="nh-hero">
      <div class="nh-hero-left">
        <h1>AI agent for product teams</h1>
        <p class="nh-hero-value">Search, understand, and act across every system your team uses.</p>
        <p class="nh-hero-sub">
          Half your team's time goes to finding things that already exist.
          In code, in tickets, in docs, in someone's head.
          Probe knows your entire product. Ask it anything. Let it handle the rest.
          <span class="nh-hero-verbs">Learn. Debug. Plan. Review. Automate.</span>
        </p>
        <div class="nh-hero-ctas">
          <a href="#demo-booking" class="nh-btn filled">Book a demo &rarr;</a>
        </div>
      </div>
      <div class="nh-hero-right">
        <canvas ref="heroCanvas" id="hero-canvas"></canvas>
      </div>
    </section>
    </div>

    <!-- Real Use Cases - Chat Examples -->
    <section class="nh-chats">
      <div class="nh-chats-header">
        <h2>See Probe in the wild</h2>
        <p>Real prompts and real answers from production deployments. DM it, invite it to channels, or mention it anywhere your team already works.</p>
        <div class="nh-chats-filters">
          <button
            class="nh-chats-filter"
            :class="{ active: !activeChatFilter }"
            @click="activeChatFilter = null"
          >All</button>
          <button
            v-for="tag in allChatTags"
            :key="tag"
            class="nh-chats-filter"
            :class="[
              'nh-chats-filter--' + tag.toLowerCase().replace(/[^a-z]/g, ''),
              { active: activeChatFilter === tag }
            ]"
            @click="activeChatFilter = activeChatFilter === tag ? null : tag"
          >{{ tag }}</button>
        </div>
      </div>
      <!-- Marquee mode (no filter) -->
      <div class="nh-chats-scroll" :class="{ 'nh-chats-scroll--stopped': marqueeStoppedByTouch }" v-if="!activeChatFilter" @touchstart="onMarqueeTouchStart">
        <div class="nh-chats-row nh-chats-row--1">
          <div class="nh-chat-card" v-for="chat in chatExamplesRow1" :key="chat.prompt">
            <div class="nh-chat-tags">
              <span class="nh-chat-tag" v-for="tag in chat.tags" :key="tag" :class="'nh-chat-tag--' + tag.toLowerCase().replace(/[^a-z]/g, '')">{{ tag }}</span>
            </div>
            <div class="nh-chat-prompt">{{ chat.prompt }}</div>
            <div class="nh-chat-response">{{ chat.response }}</div>
          </div>
          <!-- Duplicate for seamless loop -->
          <div class="nh-chat-card" v-for="chat in chatExamplesRow1" :key="'dup1-'+chat.prompt">
            <div class="nh-chat-tags">
              <span class="nh-chat-tag" v-for="tag in chat.tags" :key="tag" :class="'nh-chat-tag--' + tag.toLowerCase().replace(/[^a-z]/g, '')">{{ tag }}</span>
            </div>
            <div class="nh-chat-prompt">{{ chat.prompt }}</div>
            <div class="nh-chat-response">{{ chat.response }}</div>
          </div>
        </div>
        <div class="nh-chats-row nh-chats-row--2">
          <div class="nh-chat-card" v-for="chat in chatExamplesRow2" :key="chat.prompt">
            <div class="nh-chat-tags">
              <span class="nh-chat-tag" v-for="tag in chat.tags" :key="tag" :class="'nh-chat-tag--' + tag.toLowerCase().replace(/[^a-z]/g, '')">{{ tag }}</span>
            </div>
            <div class="nh-chat-prompt">{{ chat.prompt }}</div>
            <div class="nh-chat-response">{{ chat.response }}</div>
          </div>
          <!-- Duplicate for seamless loop -->
          <div class="nh-chat-card" v-for="chat in chatExamplesRow2" :key="'dup2-'+chat.prompt">
            <div class="nh-chat-tags">
              <span class="nh-chat-tag" v-for="tag in chat.tags" :key="tag" :class="'nh-chat-tag--' + tag.toLowerCase().replace(/[^a-z]/g, '')">{{ tag }}</span>
            </div>
            <div class="nh-chat-prompt">{{ chat.prompt }}</div>
            <div class="nh-chat-response">{{ chat.response }}</div>
          </div>
        </div>
      </div>
      <!-- Filtered grid mode -->
      <div class="nh-chats-filtered" v-else>
        <div class="nh-chat-card" v-for="chat in filteredChatExamples" :key="'f-'+chat.prompt">
          <div class="nh-chat-tags">
            <span class="nh-chat-tag" v-for="tag in chat.tags" :key="tag" :class="'nh-chat-tag--' + tag.toLowerCase().replace(/[^a-z]/g, '')">{{ tag }}</span>
          </div>
          <div class="nh-chat-prompt">{{ chat.prompt }}</div>
          <div class="nh-chat-response">{{ chat.response }}</div>
        </div>
      </div>
    </section>

    <!-- Why Probe Section -->
    <section class="nh-why nh-reveal" id="how">
      <div class="nh-why-wrapper">
        <div class="nh-why-header">
          <h2>Why Probe works</h2>
          <p>An agent you co-own with your team — backed by process, governed like infrastructure. Think of it as OpenClaw, built on enterprise-grade security standards and designed to scale across your whole org.</p>
        </div>
        <div class="nh-why-principles">
          <div class="nh-why-principle">
            <span class="nh-why-num">01</span>
            <div class="nh-why-content">
              <h3>Shaped by your team</h3>
              <p>A framework your team shapes — YAML workflows, custom integrations, your rules. Probe knows how to extend itself. Under your control.</p>
            </div>
          </div>
          <div class="nh-why-principle">
            <span class="nh-why-num">02</span>
            <div class="nh-why-content">
              <h3>Quality gates, built in</h3>
              <p>Every workflow has quality gates. Every process starts with accurate data and the right question. Probe helps with both.</p>
            </div>
          </div>
          <div class="nh-why-principle">
            <span class="nh-why-num">03</span>
            <div class="nh-why-content">
              <h3>Connects, then acts</h3>
              <p>Starts with your data sources — code, tickets, docs, Slack, wikis. Then acts on your behalf — PRs, ticket updates, reviews, deployments. Claude Code is one building block of your master plan.</p>
            </div>
          </div>
          <div class="nh-why-principle">
            <span class="nh-why-num">04</span>
            <div class="nh-why-content">
              <h3>Accurate at any scale</h3>
              <p>Powered by a unique context engine built for large projects. Million-line repos, hundreds of users. Full accuracy at any scale.</p>
            </div>
          </div>
          <div class="nh-why-principle">
            <span class="nh-why-num">05</span>
            <div class="nh-why-content">
              <h3>First-class interface for agents</h3>
              <p>Designed for humans and agents alike. Your CI pipelines, Slack bots, and AI editors all talk to Probe as a first-class interface.</p>
            </div>
          </div>
          <div class="nh-why-principle">
            <span class="nh-why-num">06</span>
            <div class="nh-why-content">
              <h3>Enterprise-grade by default</h3>
              <p>On-prem deployment, any LLM provider, zero vendor lock-in. GitOps workflows, OpenTelemetry traces, fault tolerance, governance, and security controls — all built in from day one.</p>
            </div>
          </div>
        </div>
        <div class="nh-why-footer">
          <div class="nh-why-tags">
            <span class="nh-why-tag">Open source foundation</span>
            <span class="nh-why-tag">Any LLM provider</span>
            <span class="nh-why-tag">No vendor lock-in</span>
            <span class="nh-why-tag">Scheduled jobs & reminders</span>
            <span class="nh-why-tag">Multi-team with boundaries</span>
            <span class="nh-why-tag">Audit trails & governance</span>
            <span class="nh-why-tag">On-prem deployment</span>
          </div>
          <a href="/probe" class="nh-btn filled">See how the engine works &rarr;</a>
        </div>
      </div>
    </section>

    <!-- Role Workbench Section -->
    <section class="nh-workbench nh-reveal" id="solutions">
      <div class="nh-workbench-wrapper">
        <div class="nh-workbench-header">
          <h2>Roles and workflows</h2>
          <p>Engineers, platform teams, QA, product, and leadership all get value — through the same entry points.</p>
        </div>
        <div class="nh-workbench-tabs">
          <button
            v-for="role in roles"
            :key="role.id"
            @click="activeRole = role.id"
            :class="['nh-role-tab', { active: activeRole === role.id }]"
          >
            <span class="nh-role-title">{{ role.title }}</span>
            <span class="nh-role-subtitle">{{ role.subtitle }}</span>
          </button>
        </div>
        <div class="nh-workbench-dropdown">
          <select :value="activeRole" @change="activeRole = $event.target.value">
            <option v-for="role in roles" :key="role.id" :value="role.id">{{ role.title }} — {{ role.subtitle }}</option>
          </select>
        </div>
        <div class="nh-workbench-panel">
          <div class="nh-panel-header">
            <h3>{{ currentRole.title }}</h3>
            <p>{{ currentRole.oneLiner }}</p>
          </div>
          <div class="nh-panel-content">
            <div class="nh-panel-block">
              <h4>You get</h4>
              <ul>
                <li v-for="(item, i) in currentRole.youGet" :key="'get-'+i">
                  <strong>{{ item.title }}:</strong> {{ item.desc }}
                </li>
              </ul>
            </div>
            <div class="nh-panel-block">
              <h4>Replaces</h4>
              <ul>
                <li v-for="(item, i) in currentRole.replaces" :key="'rep-'+i">{{ item }}</li>
              </ul>
            </div>
            <div class="nh-panel-block nh-panel-block--full">
              <h4>How Probe helps</h4>
              <ul class="nh-workflow-list">
                <li v-for="(item, i) in currentRole.workflows" :key="'wf-'+i">
                  <span class="nh-workflow-item">{{ item }}</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="nh-panel-cta">
            <a :href="currentRole.solutionLink" class="nh-btn filled">{{ currentRole.solutionText }} &rarr;</a>
            <a href="https://cal.com/leonid-bugaev/30min" class="nh-btn">Talk to a human</a>
          </div>
        </div>
        <h3 class="nh-usecases-inline-header">Direct entry points</h3>
        <div class="nh-usecases-grid">
          <a href="/docs/chat-with-code" class="nh-usecase-tile">
            <h3>Chat with Code</h3>
            <p>Grounded answers from your codebase. Multi-repo search across millions of lines.</p>
            <span class="nh-usecase-link">Learn more &rarr;</span>
          </a>
          <a href="/docs/code-review" class="nh-usecase-tile">
            <h3>Intelligent Code Review</h3>
            <p>Structured reviews with guardrails. Configurable, scalable, context-aware.</p>
            <span class="nh-usecase-link">Learn more &rarr;</span>
          </a>
          <a href="/docs/github-assistant" class="nh-usecase-tile">
            <h3>GitHub Assistant</h3>
            <p>Issue and PR automation in GitHub. Auto-triage and first-pass reviews.</p>
            <span class="nh-usecase-link">Learn more &rarr;</span>
          </a>
          <a href="/docs/use-cases/visor-workflows" class="nh-usecase-tile">
            <h3>Workflow Automation</h3>
            <p>Visor workflows for real processes — review, triage, and release pipelines.</p>
            <span class="nh-usecase-link">Learn more &rarr;</span>
          </a>
          <a href="/docs/guides/slack-bot" class="nh-usecase-tile">
            <h3>Scheduled Jobs & Reminders</h3>
            <p>Daily digests, thread follow-ups, recurring checks, and Jira→Zendesk enrichment — from Slack or YAML.</p>
            <span class="nh-usecase-link">Learn more &rarr;</span>
          </a>
          <a href="/docs/use-cases/building-ai-tools" class="nh-usecase-tile">
            <h3>Developers & SDK</h3>
            <p>Build custom tooling on Probe. MCP server, CLI, and programmatic access.</p>
            <span class="nh-usecase-link">Learn more &rarr;</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Demo Booking Section -->
    <section class="nh-demo-booking nh-reveal" id="demo-booking">
      <div class="nh-demo-booking-wrapper">
        <div class="nh-demo-booking-content">
          <div class="nh-demo-booking-left">
            <h2>Book a demo</h2>
            <p>30 minutes. Real questions, real answers. No slideware.</p>
            <ol class="nh-demo-agenda">
              <li>
                <strong>See it on a real codebase</strong>
                <span>We'll walk through Probe on a production-scale environment — multi-repo, real integrations, real complexity.</span>
              </li>
              <li>
                <strong>Map it to your stack</strong>
                <span>AI editors, GitHub Actions, Slack, Web UI — we'll figure out what fits your team and workflow.</span>
              </li>
              <li>
                <strong>Walk away with a plan</strong>
                <span>A clear path to getting Probe running in your org. Most teams are live within a day.</span>
              </li>
            </ol>
          </div>
          <div class="nh-demo-booking-right">
            <div class="nh-demo-form-card">
              <h3>Tell us about your setup</h3>
              <form class="nh-demo-form" @submit.prevent="submitDemoForm">
                <div class="nh-demo-field">
                  <label for="nh-demo-email">Work email</label>
                  <input type="email" id="nh-demo-email" v-model="demoForm.email" required placeholder="you@company.com" />
                </div>
                <div class="nh-demo-field">
                  <label for="nh-demo-codebase">Codebase size</label>
                  <select id="nh-demo-codebase" v-model="demoForm.codebaseSize">
                    <option value="">Select...</option>
                    <option value="<100k">&lt;100K lines</option>
                    <option value="100k-1m">100K - 1M lines</option>
                    <option value="1m-10m">1M - 10M lines</option>
                    <option value="10m+">10M+ lines</option>
                  </select>
                </div>
                <div class="nh-demo-field">
                  <label for="nh-demo-team">Engineering team size</label>
                  <select id="nh-demo-team" v-model="demoForm.teamSize">
                    <option value="">Select...</option>
                    <option value="1-10">1-10 engineers</option>
                    <option value="11-50">11-50 engineers</option>
                    <option value="51-200">51-200 engineers</option>
                    <option value="200+">200+ engineers</option>
                  </select>
                </div>
                <div class="nh-demo-field">
                  <label for="nh-demo-pain">What slows your team down most?</label>
                  <textarea id="nh-demo-pain" v-model="demoForm.painPoint" rows="3" placeholder="e.g., Onboarding takes weeks, PMs constantly ask engineering..."></textarea>
                </div>
                <button type="submit" class="nh-demo-submit">Book Demo</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="nh-testimonials nh-reveal">
      <div class="nh-testimonials-wrapper">
        <div class="nh-testimonials-header">
          <span class="nh-testimonials-badge">Customer feedback</span>
          <h2>What teams say after shipping with Probe</h2>
        </div>
        <div class="nh-testimonials-grid">
          <div class="nh-testimonial-card">
            <p class="nh-testimonial-quote">"As a Product Manager, Probe helps me to understand the true behaviour of the software so that I can go beyond the documentation and validate edge case scenarios and answer 'what if?' questions as I develop the product roadmap. This saves a lot of time and disruption to the development teams."</p>
            <div class="nh-testimonial-author">
              <strong>Andy Ost</strong>
              <span>Senior Product Manager at Tyk.io</span>
            </div>
          </div>
          <div class="nh-testimonial-card">
            <p class="nh-testimonial-quote">"I'm using Probe Labs tools daily as a technical lead, and they've been adopted across marketing, sales, documentation, product, delivery, and engineering. The YAML-based automation makes it easy to wire in tools like JIRA, Zendesk, and GitHub for agentic flows that actually work from day one."</p>
            <div class="nh-testimonial-author">
              <strong>Laurentiu Ghiur</strong>
              <span>Technical Lead at Tyk.io</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Build Your AI Assistant Section -->
    <section class="nh-quickwins nh-reveal" id="quickwins">
      <div class="nh-quickwins-wrapper">
        <div class="nh-quickwins-header">
          <h2>Build your AI assistant in 10 minutes</h2>
          <p>Clone the quickstart, set an API key, and get a working assistant with skills, tools, and knowledge — all defined in YAML.</p>
        </div>
        <div class="nh-quickwin-content">
          <div class="nh-quickwin-left">
            <h3>What you get</h3>
            <ul class="nh-assistant-features">
              <li><strong>Intent classification</strong> — routes requests to the right skill automatically</li>
              <li><strong>Code exploration</strong> — search and understand code across repos</li>
              <li><strong>Knowledge injection</strong> — inline docs or loaded from files</li>
              <li><strong>Tool orchestration</strong> — bash, MCP servers, workflow tools</li>
              <li><strong>Slack-ready</strong> — connect to your workspace with one flag</li>
            </ul>
            <a href="/docs/quick-start" class="nh-quickwin-link">Quick start guide &rarr;</a>
          </div>
          <div class="nh-quickwin-right">
            <div class="nh-quickwin-code">
              <div class="nh-code-label">Clone & run</div>
              <div class="nh-code-body">
                <pre><code>{{ assistantCode }}</code></pre>
                <button class="nh-code-copy" @click="copyCode(assistantCode)">
                  <svg v-if="!codeCopied" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="14" height="14" x="8" y="8" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                  <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Security & Governance Section -->
    <section class="nh-security nh-reveal">
      <div class="nh-security-wrapper">
        <div class="nh-security-header">
          <h2>On-prem and governable by design</h2>
          <p>Run it in your environment, bring your model, and audit every workflow like infrastructure.</p>
        </div>
        <div class="nh-security-grid">
          <div class="nh-security-col">
            <h3>Control</h3>
            <ul>
              <li><strong>On-prem by default</strong> — your code and data stay in your environment</li>
              <li><strong>Any LLM</strong> — choose per workflow; swap models without rewriting</li>
              <li><strong>Explicit tool permissions</strong> — per workflow and per step</li>
              <li><strong>Scoped context retrieval</strong> — pull only what's needed</li>
              <li><strong>Schema validation + policy gates</strong> — for critical steps</li>
            </ul>
          </div>
          <div class="nh-security-col">
            <h3>Governance</h3>
            <ul>
              <li><strong>OpenTelemetry traces + audit trails</strong> — what happened, with what context</li>
              <li><strong>Versioned workflows</strong> — reviewed like code</li>
              <li><strong>Org templates + team ownership</strong> — teams customize safely</li>
              <li><strong>Multi-repo + multi-team</strong> — aligned to ownership boundaries</li>
              <li><strong>Deterministic retries</strong> — no silent "AI weirdness"</li>
            </ul>
          </div>
        </div>
        <p class="nh-security-note">No vendor lock-in: open-source core + open standards + deploy anywhere.</p>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="nh-faq nh-reveal">
      <div class="nh-faq-wrapper">
        <h2>Questions we get asked</h2>
        <div class="nh-faq-grid">
          <div class="nh-faq-item" v-for="faq in faqItems" :key="faq.q">
            <h3>{{ faq.q }}</h3>
            <p>{{ faq.a }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA Section -->
    <div class="nh-final-wrapper">
      <section class="nh-final">
        <canvas ref="finalCanvas" id="final-canvas"></canvas>
        <div class="nh-final-left">
          <h2>Workflows, not prompts.</h2>
          <p>Deep code understanding. Workflow automation. Predictable, auditable, on-prem.</p>
        </div>
        <div class="nh-final-right">
          <a href="#demo-booking" class="nh-btn filled">Book a demo &rarr;</a>
          <a href="#quickwins" class="nh-btn">Get started in 10 minutes &rarr;</a>
        </div>
      </section>
    </div>

    <NewFooter />
  </div>
</template>

<script setup>
import { onMounted, ref, onUnmounted, computed } from 'vue'
import NewNav from '../components/NewNav.vue'
import NewFooter from '../components/NewFooter.vue'

const heroCanvas = ref(null)
const finalCanvas = ref(null)
const terminalRef = ref(null)

let heroEngine = null
let finalAnimation = null
let observer = null
let termObserver = null

// Interactive state
const activeRole = ref('cto')
const codeCopied = ref(false)

// Chat filter state
const activeChatFilter = ref(null)
const marqueeStoppedByTouch = ref(false)

const onMarqueeTouchStart = () => {
  if (!marqueeStoppedByTouch.value) {
    marqueeStoppedByTouch.value = true
  }
}

const allChatTags = computed(() => {
  const tags = new Set()
  const exclude = new Set(['All', 'Anyone'])
  ;[...chatExamplesRow1, ...chatExamplesRow2].forEach(c => c.tags.forEach(t => { if (!exclude.has(t)) tags.add(t) }))
  const first = ['Engineering', 'Product', 'QA', 'Platform', 'Automation', 'Business Ops']
  const rest = [...tags].filter(t => !first.includes(t)).sort()
  return [...first.filter(t => tags.has(t)), ...rest]
})

const filteredChatExamples = computed(() => {
  if (!activeChatFilter.value) return [...chatExamplesRow1, ...chatExamplesRow2]
  return [...chatExamplesRow1, ...chatExamplesRow2].filter(c => c.tags.includes(activeChatFilter.value))
})

// Demo booking form
const demoForm = ref({
  email: '',
  codebaseSize: '',
  teamSize: '',
  painPoint: ''
})

const submitDemoForm = () => {
  const params = new URLSearchParams()
  if (demoForm.value.email) params.append('email', demoForm.value.email)
  const notes = [
    demoForm.value.codebaseSize ? `Codebase: ${demoForm.value.codebaseSize}` : '',
    demoForm.value.teamSize ? `Team: ${demoForm.value.teamSize}` : '',
    demoForm.value.painPoint ? `Pain point: ${demoForm.value.painPoint}` : ''
  ].filter(Boolean).join(' | ')
  if (notes) params.append('notes', notes)
  window.open(`https://cal.com/leonid-bugaev/30min?${params.toString()}`, '_blank')
}

// Chat examples data - real use cases from production
const chatExamplesRow1 = [
  {
    tags: ['Product', 'QA'],
    prompt: '@Probe evaluate ticket PROJ-15792 for completeness',
    response: 'Status: NOT READY — There are blockers that must be addressed before implementation. Issues Found (16): missing acceptance criteria, no error handling spec, incomplete edge cases, no performance requirements defined...'
  },
  {
    tags: ['Engineering'],
    prompt: 'Upstream cache control is not working as described in the ticket — is this actually a bug?',
    response: 'Yes, this is a bug in the response caching logic. The issue lies in how the gateway handles the absence of upstream cache control headers. The problematic code is in gateway/res_cache.go — it incorrectly defaults to caching...'
  },
  {
    tags: ['Engineering', 'QA'],
    prompt: 'If I adopt your fix, what tests should I write to prove it?',
    response: '1. Test Case: Cache Control Enabled, Header ABSENT (Verifies the Bug Fix)\n2. Test Case: Header PRESENT (Verifies Correct Behavior)\n3. Test Case: Control Disabled (Verifies No Regression)'
  },
  {
    tags: ['Engineering'],
    prompt: 'How does the developer portal connect to the admin dashboard, and how are API keys created?',
    response: '1. Portal-Dashboard Connection: The Portal acts as a client to the Dashboard API via REST. 2. API Key Creation Flow: When a developer requests a key through the portal UI, it sends a request to the Dashboard API, which generates the key object and stores it in Redis...'
  },
  {
    tags: ['Product', 'UX'],
    prompt: 'Which customers are interested in JWT authentication? Pull from Zendesk, Jira, and onboarding docs.',
    response: 'Acme Corp: Looking to migrate to JWT long term. GlobalTech: Uses JWT with tokens minted by Auth0. MegaSoft: JWT listed as a potential auth method. DataFlow Inc: Strategy is JWT Auth with Okta and EntralD...'
  },
  {
    tags: ['Engineering'],
    prompt: 'Memory consumption increased between v5.8.2 and v5.8.5 — what could cause it?',
    response: 'Based on the code changes between v5.8.2 and v5.8.5, here are PRs that might be related: PR #2847 modified buffer handling in the request pipeline, PR #2891 changed connection pooling defaults, PR #2903 added eager-loading...'
  },
  {
    tags: ['Product'],
    prompt: 'Break this refined ticket down into small engineering tasks with story point estimates',
    response: 'Task 1: Fix the cache control logic in gateway/res_cache.go\n• Estimated Effort: 1 Point (one-line code change)\nTask 2: Add regression tests for cache behavior\n• Estimated Effort: 3 Points\nTask 3: Update API docs\n• Estimated Effort: 1 Point'
  },
  {
    tags: ['Technical Writer'],
    prompt: 'Build release notes for v5.10.1 from the merged PRs and Jira tickets',
    response: 'Release Notes for v5.10.1\n\nChanged: Upgraded Go version to enhance security.\nFixed: Addressed high-impact CVEs. Fixed critical issue where Hybrid mode would hang. Patched "Zip Slip" vulnerability in bundle decompression...'
  },
  {
    tags: ['Engineering'],
    prompt: 'Propose a fix for this caching bug — show me the exact code change needed',
    response: 'The bug can be fixed by ensuring that cacheThisRequest is explicitly set to false when upstream cache control is enabled and the required header is missing. Change the logic in gateway/res_cache.go:\n  cacheThisRequest = res.Header.Get(upstreamCacheHeader) != ""'
  },
  {
    tags: ['Business Ops'],
    prompt: 'Answer this 47-question RFP security questionnaire — search Confluence, docs, and code for evidence',
    response: 'Systematically searching Confluence, docs, and codebase. Compiled answers for 43/47 questions with source references. 4 questions flagged for manual review. Estimated 12 hours of work reduced to 20 minutes...'
  },
  {
    tags: ['Engineering', 'QA'],
    prompt: 'Assess our test coverage for certificate filtering by comparing open bugs to existing tests',
    response: 'CRITICAL: No acceptance criteria defined for certificate statuses. CRITICAL: Available filter states not documented. ERROR: Non-functional requirements like performance not specified. WARNING: Edge cases for expired certificates not covered...'
  },
  {
    tags: ['UX', 'Engineering'],
    prompt: 'I\'m designing a real-time collaborative editor for the dashboard — is that technically feasible with our current architecture?',
    response: 'Short answer: not without significant changes. The dashboard uses REST polling on a 30s interval (dashboard/api/poller.ts). There\'s no WebSocket infrastructure — the backend has no pub/sub layer. Real-time collab would require: 1. Adding a WebSocket gateway (estimate: 3-5 weeks). 2. Conflict resolution (OT or CRDT). 3. Redis pub/sub for state sync. Alternative: you could do near-real-time with optimistic UI + 2s polling, which works within current architecture. That\'s a 1-week effort.'
  },
  {
    tags: ['UX'],
    prompt: 'Can the settings page support drag-and-drop reordering? The design assumes it but I want to check before we finalize mocks.',
    response: 'The settings page renders items from a static config object in settings/config.ts — there\'s no sort order field in the database. Drag-and-drop would require: 1. Adding a "position" column to the settings table. 2. A new API endpoint for reorder (PATCH /settings/reorder). 3. Frontend: the current list uses v-for with no key tracking — needs refactoring. Estimated effort: 2-3 days backend, 1-2 days frontend. The simpler option: alphabetical or category-based sorting, which needs zero backend changes.'
  },
  {
    tags: ['Engineering'],
    prompt: 'CI tests are failing — can you pinpoint which change broke them and when was the last green build?',
    response: 'The failures began on November 5th, immediately following the merge of pull request #143. This PR updated the GitHub Actions runner from ubuntu-22.04 to ubuntu-24.04. The operating system upgrade is the direct cause of the CI failures...'
  },
  {
    tags: ['Engineering'],
    prompt: 'Why does the rate limiter return 429 for authenticated users even when they\'re under quota?',
    response: 'Found the issue in middleware/rate_limit.go:142. The token bucket lookup uses client IP instead of API key when the X-Forwarded-For header is present. Authenticated users behind a shared proxy hit the same bucket. Fix: use the session key as primary identifier...'
  },
  {
    tags: ['QA', 'Engineering'],
    prompt: 'Read ticket PROJ-8410, then find the original task and spec it was built from. Think like QA — cover positive, negative, and edge cases. Update the ticket with detailed test cases, then check tests/ for gaps in automated coverage.',
    response: 'Done. Read PROJ-8410 (webhook retry logic). Traced back to PROJ-7201 (original spec) and RFC-031 (design doc). Generated 14 test cases: 5 positive (successful retry, backoff timing, max retries), 4 negative (malformed payload, timeout, auth failure), 5 edge (concurrent retries, partial failure, clock skew). Updated PROJ-8410 with all cases. Gap analysis: tests/webhook_test.go covers 6/14 — missing timeout, concurrent, and all edge cases.'
  },
  {
    tags: ['Engineering'],
    prompt: 'Nightly CI failed on main — analyze the failure, identify root cause, and post a summary to #engineering with steps to fix',
    response: 'Build #4721 failed at 03:12 UTC. Root cause: integration test test_api_gateway_timeout depends on external sandbox endpoint that returned 503. Not a code regression — infrastructure issue. Posted to #engineering: "Nightly build failed — external sandbox was down. Tests are green when sandbox is healthy. Recommend: add retry logic to integration suite or mock the external dependency. Created INFRA-892 for the sandbox team."'
  },
  {
    tags: ['QA', 'Engineering'],
    prompt: '@Probe analyze ticket PROJ-16554 and compare its acceptance criteria with PR #7745. Provide a list of test cases and edge cases.',
    response: 'Analyzed PROJ-16554 (rate limit policy per API key) and PR #7745 (38 files changed). AC comparison: 3/7 acceptance criteria fully covered by PR. Missing: per-key quota reset behavior, concurrent request handling under burst, and error response format for 429s. Generated 18 test cases: 8 positive (basic rate limiting, quota tracking, key rotation), 6 negative (expired keys, malformed headers, zero-quota edge), 4 edge (burst at quota boundary, clock skew between nodes, race condition on counter increment).'
  },
  {
    tags: ['Product', 'Engineering'],
    prompt: '@Probe quantify the cost to deliver PROJ-15859 — time in each kanban state, time on PRs and tests in GitHub, number of people involved and for how long',
    response: 'PROJ-15859 (SSO integration): Total cycle time: 34 days. Breakdown: Backlog → In Dev: 8 days (waited for sprint). In Dev: 14 days across 3 engineers (2 PRs: #6201 primary, #6240 hotfix). PR review time: 6.2 days avg (first review comment after 2.1 days). QA: 4 days (failed first pass, 2 days to fix, 1 day re-test). Done: deployed day 34. GitHub effort: 847 lines added, 312 removed, 23 review comments. People: 3 engineers (1 primary, 2 reviewers), 1 QA, 1 PM. Estimated cost at blended rate: ~$18,400.'
  },
  {
    tags: ['Product'],
    prompt: '@Probe for PROJ-15859 — focus on refinement. What was missed in the original spec, what was added during dev, what AC would you recommend, and how did this influence coding time?',
    response: 'Refinement gaps: Original spec had 4 AC — missing: session timeout handling, multi-IdP fallback, SAML vs OIDC toggle behavior, and error states for expired assertions. During dev: 3 unplanned items added (SCIM provisioning hook, group mapping, audit log entries) — these added ~6 days. Recommended AC that would have caught this: 1. Define supported IdP protocols upfront. 2. Specify session lifecycle (creation, refresh, timeout, revocation). 3. Include admin UI states for config errors. 4. Define audit log schema for SSO events. Impact: ~40% of coding time was spent on requirements discovered mid-development.'
  },
  {
    tags: ['Product'],
    prompt: 'Review the proposed architecture in epic PROJ-220 — give me your honest opinion on feasibility, risks, and what\'s missing from the spec',
    response: 'Epic PROJ-220 (event-driven notification system): Feasibility: 7/10. The proposed Kafka-based architecture is sound but over-engineered for current throughput (200 events/sec). Risks: 1. No fallback if Kafka goes down. 2. Schema evolution strategy is undefined. 3. Consumer lag monitoring not addressed. Missing: SLA requirements, capacity planning, rollback strategy, data retention policy. Recommendation: start with Redis Streams, migrate to Kafka when you hit 10k events/sec.'
  },
  {
    tags: ['Platform'],
    prompt: 'Our deploy workflow in GitHub Actions started failing intermittently — find the pattern and root cause across recent runs',
    response: 'Analyzed last 40 runs of deploy.yml. Failures correlate with runs triggered between 02:00-04:00 UTC — the container registry rate-limits pulls during that window. 12/15 failures show "429 Too Many Requests" in the docker pull step. Fix: add registry mirror as fallback, or switch to pre-cached base images. Created OPS-1847 with details.'
  },
  {
    tags: ['Automation', 'Product'],
    prompt: '@Probe remind me every Monday 9am: check Zendesk tickets tagged "churn-risk" and cross-reference with open Jira bugs for those accounts',
    response: 'Scheduled. Every Monday at 9:00 AM I\'ll pull Zendesk tickets tagged "churn-risk," match them to customer accounts in Jira, and DM you a summary: which accounts have open bugs, severity, and how long they\'ve been waiting. First report arrives this Monday.'
  },
  {
    tags: ['Automation', 'Engineering'],
    prompt: '@Probe follow up on this thread tomorrow — check if the hotfix was deployed and the error rate dropped in Datadog',
    response: 'Got it. Tomorrow at 10:00 AM I\'ll check: 1. Whether PR #1847 was merged and deployed to production. 2. The error rate for /api/checkout in Datadog over the last 24h. I\'ll reply in this thread with the status. If the error rate is still elevated, I\'ll flag it in #engineering.'
  },
  {
    tags: ['Automation', 'QA'],
    prompt: '@Probe every Friday 4pm: check all tickets moved to "Ready for QA" this week — flag any missing acceptance criteria or test cases',
    response: 'Scheduled weekly QA gate check. Every Friday at 4:00 PM I\'ll scan all tickets moved to "Ready for QA" during the week, evaluate each for: acceptance criteria completeness, defined edge cases, and linked test cases. Tickets that fail get flagged with comments and a summary posted to #qa-team. First run this Friday.'
  },
  {
    tags: ['Automation', 'Product'],
    prompt: '@Probe every hour: check newly created Jira tickets, find related Zendesk cases, classify the issue, and add early analysis as a comment',
    response: 'Hourly ticket enrichment active. Every hour I\'ll scan Jira for tickets created in the last 60 minutes, search Zendesk for related customer cases by keyword and account, classify each issue (bug, feature request, regression, config error), and post a comment with: related Zendesk tickets, affected customers, preliminary root cause from the codebase, and suggested priority. Already processed 4 new tickets — PROJ-4210 linked to 3 Zendesk cases from the same customer, classified as regression in the billing module.'
  },
  {
    tags: ['Automation'],
    prompt: '@Probe set up a daily standup digest for #backend-team: open PRs, blocking issues, tickets in review, and anything stale for 3+ days',
    response: 'Daily standup digest configured for #backend-team at 9:15 AM. Each morning I\'ll post: open PRs with review status, tickets blocked or waiting on external teams, items in code review for 2+ days, and anything in "In Progress" with no activity for 3+ days. Team members can reply to the digest thread with updates.'
  },
  {
    tags: ['Platform', 'Engineering'],
    prompt: 'Correlate the Datadog spike in p99 latency with recent deployments and config changes — what went out in the last 6 hours?',
    response: 'Latency spike began at 14:22 UTC. Timeline: 13:45 — PR #892 merged (added request logging middleware). 14:10 — deploy to prod completed. 14:22 — p99 jumped from 120ms to 890ms. The new middleware calls JSON.stringify on every request body including file uploads. Confirmed: disabling the middleware in staging restores normal latency. Recommend: skip serialization for multipart requests.'
  },
  {
    tags: ['Platform'],
    prompt: 'We have 14 microservices — which ones are missing health checks, structured logging, or graceful shutdown? Audit all repos.',
    response: 'Scanned all 14 service repos. Missing health checks: payment-service, notification-worker, analytics-ingest (3/14). Missing structured logging: legacy-api, pdf-generator still use fmt.Println (2/14). Missing graceful shutdown: notification-worker, batch-processor, analytics-ingest — all exit immediately on SIGTERM (3/14). Priority: analytics-ingest fails all 3 checks. Created PLAT-320 through PLAT-327 with per-service remediation steps.'
  }
]

const chatExamplesRow2 = [
  {
    tags: ['Product'],
    prompt: 'Give me solution design, functional AC, and non-functional AC for this ticket',
    response: 'Solution Design: Configure the container registry to reject pushes to existing tags and update the CI/CD pipeline to use unique tags per build.\nFunctional: All Docker images tagged with Git commit SHA. Deployment processes updated to use new tags.\nNon-functional: Image publishing must not be significantly slowed...'
  },
  {
    tags: ['QA'],
    prompt: 'Write unit and integration tests that prove the acceptance criteria for PROJ-4521',
    response: '9 tests across 3 categories. Unit: verify tag uniqueness validation, test rejection of duplicate tags, validate rollback on failure. Integration: end-to-end pipeline with unique tag generation. Cross-project: dependency resolution with new tagging scheme...'
  },
  {
    tags: ['Engineering'],
    prompt: 'Are these two bugs related? Jira PROJ-9234 and Zendesk ticket #17962',
    response: 'Based on analysis, these are NOT related. PROJ-9234 is about the runtime behavior of the gateway process (how it stops). Zendesk #17962 is about data representation in the dashboard UI (how session tokens are displayed). Completely different subsystems and problem areas...'
  },
  {
    tags: ['Product'],
    prompt: 'Estimate these 5 tasks using Fibonacci points — factor in codebase complexity and cross-service deps',
    response: 'Based on code analysis and historical PRs of similar scope: Task 1: 1 point (single-file config change). Task 2: 3 points (touches 4 files across 2 services). Task 3: 2 points. Task 4: 5 points (requires migration). Task 5: 3 points. Total: 14 points.'
  },
  {
    tags: ['Engineering'],
    prompt: 'These 4 tickets look similar — trace the code and tell me if they share a root cause. Can we fix them in one PR?',
    response: 'After tracing the code paths: 3 of the 4 tickets share the same root cause — a race condition in the session store when Redis connections reset. PROJ-8821 is unrelated (UI rendering issue). The 3 related bugs can be fixed in one effort by adding a mutex in storage/redis.go...'
  },
  {
    tags: ['Engineering'],
    prompt: 'Show me where API authentication lives in the codebase and walk me through the request lifecycle',
    response: 'Authentication lives in middleware/auth_check.go. The request lifecycle: 1. Listener accepts connection (server/http.go) 2. Router matches endpoint (mux/router.go) 3. Middleware chain executes: rate-limit → auth → transform → proxy 4. Response flows back through the chain...'
  },
  {
    tags: ['All'],
    prompt: 'Give me a digest of key technical decisions from last week — pull from Slack, RFCs, and design docs',
    response: 'Week of Jan 27: 1. Platform team decided to migrate from Redis 6 to Redis 7 (thread in #platform). 2. RFC-042 approved: new circuit breaker pattern for upstream calls. 3. Decision to deprecate v1 REST API by Q3. 4. Security team flagged OpenSSL upgrade as P1...'
  },
  {
    tags: ['UX', 'Engineering'],
    prompt: 'The new design has inline editing for all table cells. Before I push back on scope — what does the current table component actually support?',
    response: 'The DataTable component (components/DataTable.vue) supports: read-only rendering, column sorting, pagination, and row selection. No inline editing — cells are plain <span> elements. The component doesn\'t emit cell-level events, only row-level (row-click, row-select). Adding inline editing means: new cell renderer, per-field validation, debounced auto-save, and undo support. Easier path: an "Edit" button per row that opens a side panel — the SidePanel component already exists and handles form state.'
  },
  {
    tags: ['UX', 'Product'],
    prompt: 'Design wants to show "time since last activity" on user profiles — do we even track that? What data is available?',
    response: 'Partially. The users table has "last_login_at" (updated on auth) and "updated_at" (updated on profile changes). But there\'s no general activity tracking — no page views, no click events, no session duration. The closest thing: audit_log table records API calls with user_id and timestamp, but it\'s write-heavy actions only (create, update, delete). For the design: you can show "Last login: 3 days ago" today. Showing "Last active" would need a new activity tracking service — that\'s a separate project.'
  },
  {
    tags: ['Engineering'],
    prompt: 'Run a first-pass security scan — find hardcoded secrets, deprecated crypto, and SQL injection risks',
    response: 'Found: 3 instances of hardcoded API keys in config files (config/test_fixtures.go). 7 uses of deprecated crypto/md5 for hashing (should use SHA-256). 2 instances of SQL string concatenation in reporting module. 1 use of eval() in template engine...'
  },
  {
    tags: ['Engineering'],
    prompt: 'List every public function in pkg/api/handler.go that\'s missing from our API reference docs',
    response: 'Comparing handler.go exports with docs/api-reference/: 4 undocumented endpoints found: HandleBatchRequest(), HandleWebhookCallback(), HandleGraphQLPlayground(), HandleMetricsExport(). All added after v5.8 release — docs were not updated...'
  },
  {
    tags: ['Product'],
    prompt: 'Diff these two job spec drafts in Confluence — what\'s different, what\'s missing from each?',
    response: 'Key differences: Spec A requires 5+ years experience, Spec B requires 3+. Spec A includes on-call rotation, Spec B doesn\'t mention it. 4 items in Spec A missing from Spec B: security clearance requirement, travel expectations, budget ownership, team size...'
  },
  {
    tags: ['Business Ops'],
    prompt: 'List every GPL and AGPL dependency across all repos — flag anything in production code',
    response: 'Scanning all dependency manifests and lock files across 47 repos. Found: 23 GPL-licensed dependencies (12 are test-only), 4 AGPL packages requiring legal review, 156 Apache-2.0 (no action needed). Flagged: 2 transitive AGPL deps in production code...'
  },
  {
    tags: ['Business Ops'],
    prompt: 'I need the remote work policy and the process for requesting a new laptop — find both',
    response: 'Remote work policy: Confluence > People Ops > Remote Work Guidelines (last updated Oct 2024). Equipment requests: submit through ServiceNow portal > IT Hardware > New Equipment Request. Standard approval takes 2-3 business days, expedited available for new hires...'
  },
  {
    tags: ['Business Ops'],
    prompt: 'Pull engineering effort data from Jira for Project X this quarter — we need it for R&D tax credit filing',
    response: 'Project X, Q4 2024: 847 tickets completed across 12 engineers. 2,340 story points delivered. Breakdown by category: New feature development (62%), bug fixes (18%), infrastructure (12%), documentation (8%). Qualifying R&D activities: 74% of total effort...'
  },
  {
    tags: ['Business Ops'],
    prompt: 'User can\'t access staging — check known issues, recent infra changes, and open a ticket if needed',
    response: 'Checked: 1. No active incidents in #status channel. 2. Found: VPN config was updated yesterday (Jira OPS-2341) — new certificate required. 3. Resolution: User needs to re-download VPN profile from portal. Created ticket OPS-2387 to update the onboarding docs...'
  },
  {
    tags: ['Engineering'],
    prompt: 'Check tickets assigned to me in this sprint for project TT. Analyze status, comments, and pending PRs — tell me what needs my attention before standup',
    response: 'Sprint "TT-24.3": You have 6 tickets. 2 need action: PROJ-3341 (In Review) — reviewer left 3 comments yesterday, 1 blocking change requested in auth module. PROJ-3358 (In Progress) — blocked by PROJ-3290 which was merged 2h ago, you can unblock now. PRs: #487 approved and ready to merge. #491 has failing CI — same sandbox issue from last night. Suggestion: merge #487, rebase #491, then address review comments on PROJ-3341.'
  },
  {
    tags: ['Technical Writer', 'Engineering'],
    prompt: 'Ticket PROJ-6100 changed the webhook retry logic — update the docs, open a PR, and link it back to the Jira ticket',
    response: 'Done. Read PROJ-6100 and the merged PR #672. Changes: max retries increased from 3 to 5, backoff changed from fixed to exponential, new X-Retry-Count header added. Updated docs/webhooks/retry-policy.md with new behavior table and code examples. Opened PR #701 "Update webhook retry docs for PROJ-6100". Linked PR back to PROJ-6100 in Jira. Also flagged: the API changelog needs an entry — created PROJ-6105 for that.'
  },
  {
    tags: ['Engineering'],
    prompt: 'I just taught you how our deployment pipeline works. Save this as a runbook so you can help the whole team with deployments going forward.',
    response: 'Saved to knowledge base as "Deployment Runbook — Production Pipeline". Contents: 1. Pre-deploy checklist (migrations, feature flags, config). 2. Deploy steps (merge to main → CI → staging canary → prod rolling). 3. Rollback procedure (revert commit, re-run pipeline, verify health checks). 4. Common issues and fixes. This is now available to all team members who ask about deployments.'
  },
  {
    tags: ['QA', 'Engineering'],
    prompt: 'Generate TDD-style test stubs for the acceptance criteria in PROJ-5500 — I want to write tests before I write the implementation',
    response: 'Generated 11 test stubs from PROJ-5500 acceptance criteria. Organized into 3 files: test_rate_limit_policy.go (4 tests: applies correct limit per tier, rejects over-quota, resets at window boundary, handles concurrent requests), test_rate_limit_api.go (4 tests: CRUD for policies, validation errors, conflict detection), test_rate_limit_integration.go (3 tests: end-to-end with Redis, failover behavior, metrics emission). All stubs have descriptive names and TODO comments mapping back to specific AC items.'
  },
  {
    tags: ['Product', 'QA'],
    prompt: '@Probe analyze Zendesk tickets updated this week. Summarize by severity, resolution type (product fix vs environment issue vs docs gap). For product issues — suggest test cases. For docs issues — suggest fixes. Delegate each ticket analysis individually.',
    response: 'Analyzed 47 Zendesk tickets updated this week. Summary: 12 Critical (3 product bugs, 7 environment/config, 2 docs gaps). 19 High (5 product, 9 environment, 5 docs). 16 Medium/Low. Product bugs (8 total): ZD-29841 — race condition in webhook delivery, suggested 3 regression tests. ZD-29903 — pagination broken on filtered results, 2 test cases covering offset+filter combo. ZD-29877 — API returns 500 on empty array body, 1 negative test. Docs gaps (7): ZD-29856 — migration guide missing step for Redis 7 upgrade. ZD-29901 — rate limit headers undocumented. Created 8 Jira tickets for product fixes and 7 docs PRs drafted.'
  },
  {
    tags: ['Engineering', 'Product'],
    prompt: '@Probe check the In Dev time for PROJ-15859. What were the blockers? When was the first human PR review (ignore bot comments)? How long from In Dev to QA? How long to fix when QA failed? Show me the cycles and reaction times.',
    response: 'PROJ-15859 flow analysis: In Dev entered: Jan 12. First commit: Jan 12 (same day). PR #6201 opened: Jan 18 (6 days coding). First human review comment: Jan 20 — 2 days wait (3 bot comments before that filtered out). Review cycles: Round 1: 4 comments, 2 blocking — fixed in 1 day. Round 2: approved Jan 22. Moved to QA: Jan 23 (11 days In Dev). QA failed: Jan 24 — edge case in group mapping. Fix PR #6240: opened Jan 25, merged Jan 26. QA re-test passed: Jan 27. Blockers: 2-day wait for first review, 1 day for QA feedback. Reaction times: avg 1 day to respond to review comments, same-day QA fix turnaround. Total QA cycle: 4 days (including 1 failure + retest).'
  },
  {
    tags: ['Platform'],
    prompt: 'Our GitHub Actions matrix build takes 47 minutes — analyze the workflow, find bottlenecks, and propose how to cut it in half',
    response: 'Analyzed ci.yml and last 20 runs. Bottlenecks: 1. Docker layer cache miss on every run — no cache-from configured (adds 8min). 2. Integration tests run sequentially across 3 DBs — can parallelize with matrix strategy (saves 12min). 3. Linting runs after build instead of concurrently (wastes 4min). 4. npm ci re-downloads every time — add actions/cache for node_modules (saves 3min). Proposed workflow cuts build from 47min to ~20min. PR draft ready for review.'
  },
  {
    tags: ['Platform', 'Engineering'],
    prompt: 'Grafana shows memory climbing on the API pods until OOMKill every 18 hours — trace the leak through logs, metrics, and recent code changes',
    response: 'Cross-referenced Grafana memory charts, Loki container logs, and git history. The leak started 5 days ago after PR #1204 merged — it added an in-memory response cache with no TTL eviction. Cache grows unbounded: 200MB after 6h, 1.2GB at OOMKill. The cache key includes query params, so unique API calls generate unique entries forever. Fix: add TTL-based eviction (already implemented in cache/lru.go but not wired up). One-line fix in api/middleware.go:89.'
  },
  {
    tags: ['Platform'],
    prompt: 'Map our Terraform infrastructure to the services that depend on it — which resources are used by which teams and repos?',
    response: 'Scanned 8 Terraform modules and cross-referenced with service configs, Dockerfiles, and env vars across all repos. Mapping: RDS cluster → used by 4 services (user-api, billing, analytics, admin). ElastiCache → 3 services (session-store, rate-limiter, user-api). SQS queues → 5 services across 2 teams. Orphaned resources found: 2 unused S3 buckets (last write 8 months ago), 1 idle NAT gateway costing $32/day. Owner gaps: 3 Lambda functions have no team tag. Created spreadsheet and PLAT-412 for cleanup.'
  },
  {
    tags: ['Automation', 'Product'],
    prompt: '@Probe every time a Zendesk ticket is tagged "feature-request" — find the related Jira epic, add customer context, and update the epic with the request',
    response: 'Automation active. When a Zendesk ticket gets tagged "feature-request," I\'ll: 1. Extract the feature area and match it to existing Jira epics. 2. Add the customer name, plan tier, and request details as a comment on the epic. 3. If no matching epic exists, I\'ll create a new one in the Product Backlog and DM you. Already processed 3 tickets from today — linked to EPIC-142 and EPIC-89.'
  },
  {
    tags: ['Automation', 'Engineering'],
    prompt: '@Probe check this PR every 6 hours — when all reviewers approve and CI is green, merge it and post to #releases',
    response: 'Watching PR #2104. I\'ll check every 6 hours for: all requested reviewers approved, CI pipeline passing, no merge conflicts. Once all conditions are met, I\'ll merge to main and post a summary to #releases with the changelog. If anything blocks it, I\'ll reply here with what\'s still pending.'
  },
  {
    tags: ['Automation', 'Platform'],
    prompt: '@Probe every morning: check Datadog for any service with error rate above 1% or p99 above 500ms in the last 12 hours — post findings to #on-call',
    response: 'Morning health check scheduled for 8:00 AM daily. I\'ll query Datadog for services exceeding thresholds, correlate any anomalies with recent deploys from GitHub, and post a summary to #on-call. If everything is healthy, I\'ll post a green status. If issues are found, I\'ll include: affected service, metric values, likely cause, and link to the relevant deploy or config change.'
  },
  {
    tags: ['Automation'],
    prompt: '@Probe personal digest every morning: my open PRs, tickets assigned to me, any threads I was mentioned in yesterday, and upcoming deadlines this week',
    response: 'Personal daily digest configured. Every morning at 8:30 AM I\'ll DM you: 1. Your open PRs — review status and CI results. 2. Assigned tickets — any status changes or new comments overnight. 3. Slack mentions from yesterday you haven\'t responded to. 4. Tickets with due dates this week. Digest arrives as a single message you can scan in 30 seconds.'
  }
]

// Role data
const roles = [
  {
    id: 'cto',
    title: 'Engineering Leadership',
    subtitle: 'CTOs & VPs',
    oneLiner: 'Stop being the bottleneck. Give every team self-serve access to engineering context.',
    youGet: [
      { title: 'One source of truth for everyone', desc: 'Engineers, PMs, support, legal — all query the same codebase. No more "ask engineering" loops.' },
      { title: 'Problems get handled when they arise', desc: 'Issues triaged, context gathered, first response drafted — automatically, the moment something breaks. Your response times shrink without adding headcount.' },
      { title: 'Repeatable processes without the overhead', desc: 'Build workflows once — compliance checks, release gates, onboarding — and they run every time. No chasing people.' }
    ],
    replaces: ['Tribal knowledge locked in senior engineers\' heads', '"Can someone from engineering answer this?" in Slack', 'Processes that only work when the right person remembers'],
    workflows: [
      'Automate issue triage — categorize, assign, and add context before a human touches it',
      'Enforce release readiness gates across all teams before every deploy',
      'Schedule hourly Jira→Zendesk enrichment — new tickets get customer context and classification automatically',
      'Surface cross-team risks and blockers in a weekly digest from Slack and RFCs',
      'Onboard new hires faster with self-serve codebase walkthroughs',
      'Set up recurring compliance checks — license audits, security scans, R&D tracking — that run on schedule'
    ],
    solutionLink: '/solutions/engineering-leadership',
    solutionText: 'Engineering Leadership'
  },
  {
    id: 'platform',
    title: 'Platform / DevEx',
    subtitle: 'Infra & CI/CD',
    oneLiner: 'Stop being the human router. Give every team answers about builds, deploys, and infra without filing a ticket.',
    youGet: [
      { title: 'You stop being the bottleneck', desc: 'Teams get answers about failed builds, deploy status, and infra questions themselves. Your Slack DMs go quiet.' },
      { title: 'Institutional knowledge that doesn\'t quit', desc: 'Every runbook, post-mortem, and tribal fix lives in one place that actually responds when asked. On-call rotations stop being hazing rituals.' },
      { title: 'Observability you can interrogate', desc: 'Metrics, logs, traces, and git history wired together. Ask "why is latency up" and get the PR, not a dashboard.' }
    ],
    replaces: ['Being the human router for every broken build', 'Grep-ing through CI logs at 11pm', '"Hey do you know why staging is down" in your DMs'],
    workflows: [
      'Debug intermittent GitHub Actions failures across runs — find the pattern, not just the error',
      'Correlate a Datadog latency spike to the exact deploy and config change that caused it',
      'Schedule daily health checks — error rates, p99 latency, OOM events — posted to #on-call every morning',
      'Map Terraform resources to owning teams and flag orphaned infra',
      'Trace a memory leak through metrics, logs, and git history without context-switching between tools',
      'Set up thread follow-ups: "check if the hotfix deployed and error rate dropped by tomorrow"'
    ],
    solutionLink: '/solutions/platform-teams',
    solutionText: 'Platform Teams'
  },
  {
    id: 'engineers',
    title: 'Engineers',
    subtitle: 'ICs & Leads',
    oneLiner: 'Stop reading code you didn\'t write. Start shipping code that works.',
    youGet: [
      { title: 'Instant codebase fluency', desc: 'Any repo, any service, any team\'s code — understand it in minutes. No more half-day ramp-ups just to review a PR in an unfamiliar service.' },
      { title: 'Fewer interruptions, both ways', desc: 'Stop pinging other teams to explain their code. Stop getting pinged to explain yours. Probe answers the "how does this work?" questions for everyone.' },
      { title: 'Debugging without the archeology', desc: 'Go from symptom to root cause without manually tracing through 15 files across 4 repos. Get the full picture — what broke, when, and why.' }
    ],
    replaces: ['Jumping between repos, tabs, and Slack threads trying to connect the dots', '"Does anyone know how this works?" in Slack', 'Context-switching between debugging and actual feature work'],
    workflows: [
      'Trace a request lifecycle across services — auth, caching, error handling',
      'Find which commit introduced a regression and what it broke downstream',
      'Get up to speed on an unfamiliar service before a PR review',
      'Pinpoint why a flaky test fails — exact conditions, exact code path',
      'Get a personal morning digest: open PRs, assigned tickets, Slack mentions, deadlines',
      'Draft a PR description with full context on what changed and why'
    ],
    solutionLink: '/solutions/engineers',
    solutionText: 'Engineers'
  },
  {
    id: 'qa',
    title: 'QA & Testing',
    subtitle: 'Quality Engineers',
    oneLiner: 'Full codebase context for every test you write. Catch gaps before they become bugs.',
    youGet: [
      { title: 'Test with full system understanding', desc: 'Know how the code actually works — data flows, edge cases, failure modes — before writing a single test. No more guessing.' },
      { title: 'Shift quality left, permanently', desc: 'Catch missing AC, untested paths, and spec gaps before engineering starts. QA stops being the last line of defense.' },
      { title: 'Coverage confidence at scale', desc: 'See exactly where your test suite has blind spots — mapped to real bugs, recent changes, and risk areas across the whole codebase.' }
    ],
    replaces: ['Writing tests blind to how the code actually works', 'Reviewing tickets too late to fix bad specs', 'Tracking coverage in spreadsheets and gut feel'],
    workflows: [
      'Generate test cases from a ticket — positive, negative, and edge cases mapped to AC',
      'Schedule weekly QA gates — auto-flag tickets moved to "Ready for QA" with missing AC or test cases',
      'Compare open bugs against existing tests to find coverage gaps',
      'Trace a bug fix through the codebase and suggest targeted regression tests',
      'Write unit and integration test stubs grounded in actual code paths',
      'Audit a feature area for untested branches and boundary conditions'
    ],
    solutionLink: '/solutions/engineers',
    solutionText: 'QA & Testing'
  },
  {
    id: 'product',
    title: 'Product & Support',
    subtitle: 'PMs, CS & Writers',
    oneLiner: 'Stop waiting on engineers. Get answers from the source.',
    youGet: [
      { title: 'Self-serve technical answers', desc: 'Ask how anything works — edge cases, real behavior, why it was built that way — and get answers validated against code, not tribal knowledge.' },
      { title: 'Ship decisions faster', desc: 'Scope work, estimate effort, and write specs grounded in what the codebase actually looks like. No more back-and-forth with engineering just to plan.' },
      { title: 'One query across everything', desc: 'Pull from code, tickets, docs, Slack, and support history in a single question. No more tab-switching and manual synthesis.' }
    ],
    replaces: ['Pinging engineers and waiting days for context', 'Writing specs based on outdated docs and assumptions', 'Manually stitching together info from six different tools'],
    workflows: [
      'Ask "how does X actually work?" and get a code-backed answer in seconds',
      'Break epics into engineering tasks with story points based on codebase complexity',
      'Generate release notes from merged PRs and linked tickets',
      'Auto-enrich new Jira tickets with related Zendesk cases and customer context',
      'Draft solution designs with acceptance criteria grounded in existing architecture',
      'Compare design docs or job specs — surface gaps and contradictions'
    ],
    solutionLink: '/solutions/non-technical',
    solutionText: 'Product & Support'
  }
]

const currentRole = computed(() => roles.find(r => r.id === activeRole.value) || roles[0])

// Build Your AI Assistant code block
const assistantCode = `git clone https://github.com/probelabs/visor-quickstart.git
cd visor-quickstart && cp .env.example .env
# Set your LLM API key in .env (Anthropic, OpenAI, or Google)
npx -y @probelabs/visor@latest run assistant.yaml --tui`

// FAQ data
const faqItems = [
  { q: 'What is Probe exactly?', a: 'Probe is an AI agent that connects to your codebase, tickets, docs, Slack, and other tools — then answers questions, automates workflows, and takes actions like opening PRs or updating tickets. It also runs scheduled jobs: daily digests, thread follow-ups, recurring checks, and cross-tool automations like enriching Jira tickets with Zendesk context. Think of it as a team member that holds the full context of your product — and never forgets to follow up.' },
  { q: 'Does my code stay private?', a: 'Yes. Code indexing and retrieval run locally or on your own infrastructure. You control what context is sent to the LLM. Full on-prem deployment is available — bring any LLM provider, no vendor lock-in.' },
  { q: 'Who uses Probe?', a: 'Engineers, platform teams, QA, product managers, support, legal, HR, and finance. Anyone who needs answers from your codebase or connected tools. It\'s deployed across entire orgs, not just engineering.' },
  { q: 'How is this different from ChatGPT or Copilot?', a: 'ChatGPT and Copilot work with what you paste in. Probe connects to your actual systems — code repos, Jira, Zendesk, Confluence, Slack — and reasons across all of them. It also takes actions: opens PRs, updates tickets, posts summaries.' },
  { q: 'Can I use my own LLM?', a: 'Yes. Probe works with any LLM provider — OpenAI, Anthropic, Google, or your own self-hosted models. Switch providers anytime with no lock-in.' },
  { q: 'How long does setup take?', a: 'Most teams are running Probe within 10 minutes. Add it to your AI editor, connect a Slack bot, or deploy the GitHub Action. YAML-based workflows mean no custom code required.' }
]

// Copy code helper
const copyCode = async (code) => {
  try {
    await navigator.clipboard.writeText(code)
    codeCopied.value = true
    setTimeout(() => { codeCopied.value = false }, 2000)
  } catch (err) {
    console.error('Failed to copy:', err)
  }
}

// System config helper
function S(label, sub, a, b, spd, off, tilt) {
  return { label, sub, a, b, spd, off, tilt, _ia: 0, _ir: 0 }
}

// Orrery Engine class
class OrreryEngine {
  constructor(canvas, opts = {}) {
    this.canvas = canvas
    this.ctx = canvas.getContext('2d')
    this.dark = opts.dark !== false
    this.systems = opts.systems || []
    this.probes = []
    this.dust = []
    this.comets = []
    this.shootingStars = []
    this.stars = []
    this.nebulae = []
    this.microDebris = []
    this.time = 0
    this.coreRadius = opts.coreRadius || 18
    this.cyOffset = opts.cyOffset || 0
    this.cxOffset = opts.cxOffset || 0
    this.extraWidth = opts.extraWidth || 0
    this.corePulse = 0
    this.spawnRate = opts.spawnRate || 0.01
    this.running = true
    this._resize()
    this._boundResize = () => this._resize()
    window.addEventListener('resize', this._boundResize)
    this._loop()
  }

  destroy() {
    this.running = false
    window.removeEventListener('resize', this._boundResize)
  }

  _resize() {
    const parent = this.canvas.parentElement
    if (!parent) return
    const r = parent.getBoundingClientRect()
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    this.w = r.width + this.extraWidth
    this.h = r.height
    this.canvas.width = this.w * dpr
    this.canvas.height = this.h * dpr
    this.canvas.style.width = this.w + 'px'
    this.canvas.style.height = this.h + 'px'
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    this.cx = this.w / 2 + this.cxOffset
    this.cy = this.h / 2 + this.cyOffset

    const scale = Math.min(this.w, this.h) / 620
    this.systems.forEach(s => {
      s._a = s.a * scale
      s._b = s.b * scale
    })

    // Stars
    this.stars = []
    if (this.dark) {
      for (let i = 0; i < 250; i++) {
        this.stars.push({
          x: Math.random() * this.w,
          y: Math.random() * this.h,
          r: Math.random() * 1.2 + 0.15,
          a: Math.random() * 0.45 + 0.08,
          p: Math.random() * Math.PI * 2,
          s: 0.002 + Math.random() * 0.008
        })
      }
    }

    // Cosmic dust
    this.dust = []
    const dc = this.dark ? 180 : 90
    for (let i = 0; i < dc; i++) {
      const ang = Math.random() * Math.PI * 2
      const dist = 25 + Math.random() * Math.max(this.w, this.h) * 0.55
      this.dust.push({
        ang, dist, rd: dist,
        r: Math.random() * 0.7 + 0.15,
        a: Math.random() * 0.25 + 0.04,
        os: 0.00008 + Math.random() * 0.0005,
        dr: 0.004 + Math.random() * 0.018
      })
    }

    // Micro debris
    this.microDebris = []
    const md = this.dark ? 100 : 40
    for (let i = 0; i < md; i++) {
      this.microDebris.push({
        x: Math.random() * this.w,
        y: Math.random() * this.h,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.1,
        r: Math.random() * 0.4 + 0.1,
        a: Math.random() * 0.12 + 0.02,
        p: Math.random() * Math.PI * 2,
        ps: 0.003 + Math.random() * 0.006
      })
    }

    // Nebula haze
    this.nebulae = []
    if (this.dark) {
      for (let i = 0; i < 3; i++) {
        this.nebulae.push({
          x: this.w * (0.15 + Math.random() * 0.7),
          y: this.h * (0.15 + Math.random() * 0.7),
          r: 70 + Math.random() * 110,
          a: 0.012 + Math.random() * 0.015,
          d: Math.random() * Math.PI * 2,
          ds: 0.0004 + Math.random() * 0.0008
        })
      }
    }

    this.comets = []
    this.shootingStars = []
  }

  _epos(sys, t) {
    const ang = t + sys.off
    const r = (sys._a * sys._b) / Math.sqrt((sys._b * Math.cos(ang)) ** 2 + (sys._a * Math.sin(ang)) ** 2)
    const x = r * Math.cos(ang), y = r * Math.sin(ang)
    const ti = sys.tilt || 0
    return {
      x: this.cx + x * Math.cos(ti) - y * Math.sin(ti),
      y: this.cy + x * Math.sin(ti) + y * Math.cos(ti)
    }
  }

  _spawnProbe(sys) {
    const t = this._epos(sys, this.time * sys.spd)
    this.probes.push({
      ph: 'out', pr: 0, sp: 0.003 + Math.random() * 0.0025,
      sx: this.cx, sy: this.cy, tx: t.x, ty: t.y,
      sys, x: this.cx, y: this.cy, trail: [], sz: 1.4 + Math.random() * 1.2
    })
  }

  _spawnComet() {
    const e = Math.random()
    let sx, sy, a
    if (e < 0.25) { sx = -10; sy = Math.random() * this.h; a = Math.random() * 0.8 - 0.4 }
    else if (e < 0.5) { sx = this.w + 10; sy = Math.random() * this.h; a = Math.PI + Math.random() * 0.8 - 0.4 }
    else if (e < 0.75) { sx = Math.random() * this.w; sy = -10; a = Math.PI / 2 + Math.random() * 0.8 - 0.4 }
    else { sx = Math.random() * this.w; sy = this.h + 10; a = -Math.PI / 2 + Math.random() * 0.8 - 0.4 }
    this.comets.push({
      x: sx, y: sy,
      vx: Math.cos(a) * (1 + Math.random() * 1.5),
      vy: Math.sin(a) * (1 + Math.random() * 1.5),
      life: 1, decay: 0.003 + Math.random() * 0.004,
      trail: [], sz: 0.7 + Math.random() * 0.8
    })
  }

  _spawnStar() {
    const x = Math.random() * this.w, y = Math.random() * this.h * 0.5
    const a = Math.PI * 0.12 + Math.random() * 0.35, sp = 3 + Math.random() * 3
    this.shootingStars.push({
      x, y,
      vx: Math.cos(a) * sp,
      vy: Math.sin(a) * sp,
      trail: [], life: 1, decay: 0.012 + Math.random() * 0.01
    })
  }

  _loop() {
    if (!this.running) return
    this.time += 0.0025
    this.corePulse += 0.014
    const ctx = this.ctx
    ctx.clearRect(0, 0, this.w, this.h)
    const col = this.dark ? '255,255,255' : '17,17,17'
    const cf = `rgba(${col},`

    // Nebula haze
    for (const n of this.nebulae) {
      n.d += n.ds
      const ox = Math.sin(n.d) * 18, oy = Math.cos(n.d * 0.7) * 14
      const g = ctx.createRadialGradient(n.x + ox, n.y + oy, 0, n.x + ox, n.y + oy, n.r)
      g.addColorStop(0, `rgba(180,180,210,${n.a})`)
      g.addColorStop(1, 'transparent')
      ctx.fillStyle = g
      ctx.fillRect(0, 0, this.w, this.h)
    }

    // Stars
    for (const s of this.stars) {
      s.p += s.s
      ctx.beginPath()
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(255,255,255,${s.a * (0.3 + Math.sin(s.p) * 0.7)})`
      ctx.fill()
    }

    // Cosmic dust
    for (const d of this.dust) {
      d.ang += d.os
      d.dist -= d.dr
      if (d.dist < 18) { d.dist = d.rd; d.a = 0 }
      if (d.a < 0.2) d.a += 0.0008
      ctx.beginPath()
      ctx.arc(this.cx + Math.cos(d.ang) * d.dist, this.cy + Math.sin(d.ang) * d.dist, d.r, 0, Math.PI * 2)
      ctx.fillStyle = `${cf}${d.a})`
      ctx.fill()
    }

    // Micro debris
    for (const m of this.microDebris) {
      m.x += m.vx
      m.y += m.vy
      m.p += m.ps
      if (m.x < -5) m.x = this.w + 5
      if (m.x > this.w + 5) m.x = -5
      if (m.y < -5) m.y = this.h + 5
      if (m.y > this.h + 5) m.y = -5
      ctx.beginPath()
      ctx.arc(m.x, m.y, m.r, 0, Math.PI * 2)
      ctx.fillStyle = `${cf}${m.a * (0.4 + Math.sin(m.p) * 0.6)})`
      ctx.fill()
    }

    // Shooting stars
    if (this.dark && Math.random() < 0.0025) this._spawnStar()
    for (let i = this.shootingStars.length - 1; i >= 0; i--) {
      const ss = this.shootingStars[i]
      ss.x += ss.vx
      ss.y += ss.vy
      ss.life -= ss.decay
      ss.trail.push({ x: ss.x, y: ss.y })
      if (ss.trail.length > 22) ss.trail.shift()
      for (let j = 0; j < ss.trail.length - 1; j++) {
        const a = (j / ss.trail.length) * ss.life * 0.35
        ctx.beginPath()
        ctx.moveTo(ss.trail[j].x, ss.trail[j].y)
        ctx.lineTo(ss.trail[j + 1].x, ss.trail[j + 1].y)
        ctx.strokeStyle = `rgba(255,255,255,${a})`
        ctx.lineWidth = 1
        ctx.stroke()
      }
      ctx.beginPath()
      ctx.arc(ss.x, ss.y, 1.3, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(255,255,255,${ss.life * 0.6})`
      ctx.fill()
      if (ss.life <= 0) this.shootingStars.splice(i, 1)
    }

    // Comets
    if (Math.random() < 0.004) this._spawnComet()
    for (let i = this.comets.length - 1; i >= 0; i--) {
      const c = this.comets[i]
      c.x += c.vx
      c.y += c.vy
      c.life -= c.decay
      c.trail.push({ x: c.x, y: c.y })
      if (c.trail.length > 22) c.trail.shift()
      for (let j = 0; j < c.trail.length - 1; j++) {
        const a = (j / c.trail.length) * 0.14 * c.life
        ctx.beginPath()
        ctx.moveTo(c.trail[j].x, c.trail[j].y)
        ctx.lineTo(c.trail[j + 1].x, c.trail[j + 1].y)
        ctx.strokeStyle = `${cf}${a})`
        ctx.lineWidth = c.sz * (j / c.trail.length)
        ctx.stroke()
      }
      ctx.beginPath()
      ctx.arc(c.x, c.y, c.sz, 0, Math.PI * 2)
      ctx.fillStyle = `${cf}${0.45 * c.life})`
      ctx.fill()
      if (c.life <= 0) this.comets.splice(i, 1)
    }

    // Orbit paths
    this.systems.forEach(sys => {
      ctx.beginPath()
      for (let i = 0; i <= 128; i++) {
        const ang = (i / 128) * Math.PI * 2
        const r = (sys._a * sys._b) / Math.sqrt((sys._b * Math.cos(ang)) ** 2 + (sys._a * Math.sin(ang)) ** 2)
        const x = r * Math.cos(ang), y = r * Math.sin(ang)
        const ti = sys.tilt || 0
        const px = this.cx + x * Math.cos(ti) - y * Math.sin(ti)
        const py = this.cy + x * Math.sin(ti) + y * Math.cos(ti)
        i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py)
      }
      ctx.closePath()
      ctx.setLineDash([4, 7])
      ctx.strokeStyle = `${cf}${this.dark ? '0.07' : '0.06'})`
      ctx.lineWidth = 0.7
      ctx.stroke()
      ctx.setLineDash([])
    })

    // Faint center lines
    this.systems.forEach(sys => {
      const pos = this._epos(sys, this.time * sys.spd)
      ctx.beginPath()
      ctx.moveTo(this.cx, this.cy)
      ctx.lineTo(pos.x, pos.y)
      ctx.setLineDash([2, 10])
      ctx.strokeStyle = `${cf}0.025)`
      ctx.lineWidth = 0.4
      ctx.stroke()
      ctx.setLineDash([])
    })

    // System bodies
    this.systems.forEach(sys => {
      const pos = this._epos(sys, this.time * sys.spd)
      sys._cx = pos.x
      sys._cy = pos.y

      ctx.beginPath()
      ctx.arc(pos.x, pos.y, 3.5, 0, Math.PI * 2)
      ctx.fillStyle = `${cf}0.4)`
      ctx.fill()

      ctx.font = '600 11px "Space Mono",monospace'
      const tw = ctx.measureText(sys.label).width
      const lx = pos.x + 10, ly = pos.y - 6
      const lh = sys.sub ? 34 : 18
      ctx.fillStyle = this.dark ? 'rgba(0,0,0,0.55)' : 'rgba(247,245,240,0.88)'
      ctx.fillRect(lx - 5, ly - 11, tw + 10, lh)
      ctx.strokeStyle = `${cf}${this.dark ? '0.1' : '0.07'})`
      ctx.lineWidth = 0.4
      ctx.strokeRect(lx - 5, ly - 11, tw + 10, lh)
      ctx.fillStyle = `${cf}${this.dark ? '0.6' : '0.55'})`
      ctx.fillText(sys.label, lx, ly + 2)
      if (sys.sub) {
        ctx.font = '300 9.5px "IBM Plex Mono",monospace'
        ctx.fillStyle = `${cf}${this.dark ? '0.25' : '0.25'})`
        ctx.fillText(sys.sub, lx, ly + 16)
      }

      if (sys._ia > 0) {
        ctx.beginPath()
        ctx.arc(pos.x, pos.y, sys._ir || 8, 0, Math.PI * 2)
        ctx.strokeStyle = `${cf}${sys._ia})`
        ctx.lineWidth = 0.7
        ctx.stroke()
        sys._ir += 0.5
        sys._ia -= 0.004
      }
    })

    // Spawn probes
    if (Math.random() < this.spawnRate) {
      this._spawnProbe(this.systems[Math.floor(Math.random() * this.systems.length)])
    }

    // Update & draw probes
    for (let i = this.probes.length - 1; i >= 0; i--) {
      const p = this.probes[i]
      p.pr += p.sp
      if (p.ph === 'out') {
        const t = this._epos(p.sys, this.time * p.sys.spd)
        p.tx = t.x
        p.ty = t.y
        const e = 1 - Math.pow(1 - p.pr, 2.5) // ease-out
        p.x = p.sx + (p.tx - p.sx) * e
        p.y = p.sy + (p.ty - p.sy) * e
        p.trail.push({ x: p.x, y: p.y })
        if (p.trail.length > 28) p.trail.shift()
        if (p.pr >= 1) {
          p.ph = 'ret'
          p.pr = 0
          p.sx = p.tx
          p.sy = p.ty
          p.tx = this.cx
          p.ty = this.cy
          p.trail = []
          p.sys._ia = 0.3
          p.sys._ir = 6
        }
      } else {
        const e = p.pr * p.pr * p.pr // ease-in (accelerate home)
        p.x = p.sx + (p.tx - p.sx) * e
        p.y = p.sy + (p.ty - p.sy) * e
        p.trail.push({ x: p.x, y: p.y })
        if (p.trail.length > 22) p.trail.shift()
        if (p.pr >= 1) {
          this.probes.splice(i, 1)
          continue
        }
      }

      for (let j = 0; j < p.trail.length - 1; j++) {
        const a = (j / p.trail.length) * (p.ph === 'ret' ? 0.18 : 0.1)
        ctx.beginPath()
        ctx.moveTo(p.trail[j].x, p.trail[j].y)
        ctx.lineTo(p.trail[j + 1].x, p.trail[j + 1].y)
        ctx.strokeStyle = `${cf}${a})`
        ctx.lineWidth = 0.7
        ctx.stroke()
      }
      const glow = p.ph === 'ret' ? 0.55 : 0.35
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.sz + 3, 0, Math.PI * 2)
      ctx.fillStyle = `${cf}${glow * 0.12})`
      ctx.fill()
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.sz, 0, Math.PI * 2)
      ctx.fillStyle = `${cf}${glow})`
      ctx.fill()
    }

    // Core
    const cg = 0.07 + Math.sin(this.corePulse) * 0.035
    ctx.beginPath()
    ctx.arc(this.cx, this.cy, this.coreRadius + 15, 0, Math.PI * 2)
    ctx.fillStyle = `${cf}${cg * 0.5})`
    ctx.fill()
    ctx.beginPath()
    ctx.arc(this.cx, this.cy, this.coreRadius + 5, 0, Math.PI * 2)
    ctx.strokeStyle = `${cf}${0.05 + Math.sin(this.corePulse) * 0.025})`
    ctx.lineWidth = 0.7
    ctx.stroke()

    if (this.dark) {
      const g = ctx.createRadialGradient(this.cx - 4, this.cy - 4, 2, this.cx, this.cy, this.coreRadius)
      g.addColorStop(0, 'rgba(255,255,255,0.9)')
      g.addColorStop(0.25, 'rgba(200,200,200,0.7)')
      g.addColorStop(0.6, 'rgba(120,120,120,0.5)')
      g.addColorStop(1, 'rgba(50,50,50,0.3)')
      ctx.beginPath()
      ctx.arc(this.cx, this.cy, this.coreRadius, 0, Math.PI * 2)
      ctx.fillStyle = g
      ctx.fill()
    } else {
      const g = ctx.createRadialGradient(this.cx - 3, this.cy - 3, 2, this.cx, this.cy, this.coreRadius)
      g.addColorStop(0, '#f7f5f0')
      g.addColorStop(0.25, '#ccc')
      g.addColorStop(0.6, '#888')
      g.addColorStop(1, '#444')
      ctx.beginPath()
      ctx.arc(this.cx, this.cy, this.coreRadius, 0, Math.PI * 2)
      ctx.fillStyle = g
      ctx.fill()
      ctx.strokeStyle = 'rgba(17,17,17,0.18)'
      ctx.lineWidth = 1.5
      ctx.stroke()
    }

    ctx.font = '700 10px "Space Mono",monospace'
    ctx.fillStyle = `${cf}${this.dark ? '0.38' : '0.38'})`
    ctx.textAlign = 'center'
    ctx.fillText('PROBE', this.cx, this.cy + this.coreRadius + 20)
    const n = this.probes.length
    if (n > 0) {
      ctx.font = '300 8.5px "IBM Plex Mono",monospace'
      ctx.fillStyle = `${cf}${this.dark ? '0.18' : '0.15'})`
      ctx.fillText(`${n} probe${n > 1 ? 's' : ''} active`, this.cx, this.cy + this.coreRadius + 33)
    }
    ctx.textAlign = 'start'

    requestAnimationFrame(() => this._loop())
  }
}

// Initialize final canvas animation
function initFinalCanvas(canvas) {
  if (!canvas) return null
  const ctx = canvas.getContext('2d')
  let stars = []
  let dust = []
  let running = true

  function resize() {
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
    stars = []
    dust = []
    for (let i = 0; i < 130; i++) {
      stars.push({
        x: Math.random() * canvas.width, y: Math.random() * canvas.height,
        r: Math.random() * 0.9 + 0.2, a: Math.random() * 0.35 + 0.08,
        p: Math.random() * Math.PI * 2, s: 0.004 + Math.random() * 0.008
      })
    }
    for (let i = 0; i < 70; i++) {
      dust.push({
        x: Math.random() * canvas.width, y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.12, vy: (Math.random() - 0.5) * 0.08,
        r: Math.random() * 0.5 + 0.12, a: Math.random() * 0.12 + 0.02
      })
    }
  }

  function draw() {
    if (!running) return
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (const s of stars) {
      s.p += s.s
      ctx.beginPath()
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(255,255,255,${s.a * (0.3 + Math.sin(s.p) * 0.7)})`
      ctx.fill()
    }
    for (const d of dust) {
      d.x += d.vx
      d.y += d.vy
      if (d.x < 0) d.x = canvas.width
      if (d.x > canvas.width) d.x = 0
      if (d.y < 0) d.y = canvas.height
      if (d.y > canvas.height) d.y = 0
      ctx.beginPath()
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(255,255,255,${d.a})`
      ctx.fill()
    }
    requestAnimationFrame(draw)
  }

  const resizeHandler = () => resize()
  window.addEventListener('resize', resizeHandler)
  resize()
  draw()

  return {
    destroy() {
      running = false
      window.removeEventListener('resize', resizeHandler)
    }
  }
}

onMounted(() => {
  // Initialize Hero orrery
  if (heroCanvas.value) {
    heroEngine = new OrreryEngine(heroCanvas.value, {
      dark: true,
      coreRadius: 24,
      spawnRate: 0.012,
      cyOffset: 10,
      cxOffset: -25,
      extraWidth: 50,
      systems: [
        S('Codebase', '47 repos', 200, 145, 0.44, 0, 0.18),
        S('Zendesk', '12.8k tickets', 190, 155, 0.31, 1.4, -0.12),
        S('Jira', '3.2k issues', 210, 135, 0.48, 2.8, 0.22),
        S('Slack', 'Bot + threads', 195, 150, 0.27, 4.1, -0.08),
        S('Sentry', 'Error tracking', 215, 138, 0.42, 5.4, 0.14),
        S('Plane', 'Project tracking', 205, 148, 0.35, 3.5, 0.16),
        S('Architecture', '', 290, 210, 0.17, 0.6, -0.2),
        S('Test Suites', '8.4k cases', 310, 225, 0.13, 2.2, 0.1),
        S('Docs & RFCs', '1.2k pages', 300, 230, 0.21, 3.8, -0.15),
        S('Notion', 'Wiki pages', 315, 205, 0.10, 5.2, 0.08)
      ]
    })
  }

  // Initialize final canvas
  if (finalCanvas.value) {
    finalAnimation = initFinalCanvas(finalCanvas.value)
  }

  // Scroll reveal observer
  observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible')
    })
  }, { threshold: 0.1 })

  document.querySelectorAll('.nh-reveal').forEach(el => observer.observe(el))

  // Terminal replay observer
  if (terminalRef.value) {
    termObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.nh-tl').forEach(l => {
            l.style.animation = 'none'
            l.offsetHeight // Force reflow
            l.style.animation = ''
          })
        }
      })
    }, { threshold: 0.3 })
    termObserver.observe(terminalRef.value)
  }
})

onUnmounted(() => {
  if (heroEngine) heroEngine.destroy()
  if (finalAnimation) finalAnimation.destroy()
  if (observer) observer.disconnect()
  if (termObserver) termObserver.disconnect()
})
</script>

<style>
/* Import the CSS file */
@import '../new-homepage.css';
</style>
