<template>
  <div class="oel">
    <a class="oel-skip" href="#content">Skip to content</a>

    <header class="oel-header" :class="{ 'is-open': menuOpen }">
      <div class="oel-header-bar">
        <p class="oel-brand">
          <a class="oel-home" href="/">ProbeLabs</a>
          <span class="oel-slash" aria-hidden="true">/</span>
          <a class="oel-wordmark" href="/oel" aria-current="page">Oel</a>
        </p>
        <nav class="oel-nav" aria-label="Primary">
          <a href="#answers">Answers</a>
          <a href="#sources">Sources</a>
          <a href="#trust">Trust</a>
          <a href="#automations">Automations</a>
          <a href="#proof">Tyk</a>
        </nav>
        <a class="oel-cta" href="#demo">Book a demo</a>
        <button
          class="oel-menu-btn"
          type="button"
          :aria-expanded="menuOpen ? 'true' : 'false'"
          aria-controls="oel-menu"
          @click="menuOpen = !menuOpen"
        >
          <span class="oel-sr">Menu</span>
          <span></span><span></span><span></span>
        </button>
      </div>
      <div id="oel-menu" class="oel-menu">
        <a href="#answers" @click="menuOpen = false">Answers</a>
        <a href="#sources" @click="menuOpen = false">Sources</a>
        <a href="#trust" @click="menuOpen = false">Trust</a>
        <a href="#automations" @click="menuOpen = false">Automations</a>
        <a href="#proof" @click="menuOpen = false">Tyk</a>
        <a class="oel-cta" href="#demo" @click="menuOpen = false">Book a demo</a>
      </div>
    </header>

    <main id="content">
      <section class="oel-hero">
        <div class="oel-hero-copy">
          <p class="oel-hero-kicker">by ProbeLabs</p>
          <h1>Oel</h1>
          <p class="oel-hero-lead">The code-grounded company brain.</p>
          <p class="oel-hero-dek">
            Ask across code, Jira, Zendesk, Confluence, Slack, docs, CI, and observability. Every answer shows its evidence. Every action runs as a governed workflow on your infrastructure.
          </p>
          <p class="oel-powered">
            Powered by <a href="/probe">Probe</a> &amp; <a href="/visor">Visor</a>
          </p>
          <div class="oel-hero-actions">
            <a class="oel-hero-btn" href="#demo">Book a demo</a>
            <a class="oel-hero-text" href="#demo">Run it in 10 minutes</a>
          </div>
        </div>
        <div class="oel-hero-card">
          <p class="oel-card-kicker">Answer</p>
          <p class="oel-card-q">{{ hero.prompt }}</p>
          <p class="oel-card-a">{{ hero.response }}</p>
          <div class="oel-chips" role="group" aria-label="Evidence">
            <button
              v-for="(chip, index) in hero.evidence"
              :key="chip.label"
              type="button"
              class="oel-chip is-on-dark"
              :aria-expanded="openHeroChip === index ? 'true' : 'false'"
              @click="openHeroChip = openHeroChip === index ? null : index"
            >{{ chip.label }}</button>
          </div>
          <p v-if="activeHeroEvidence" class="oel-evidence">{{ activeHeroEvidence.detail }}</p>
        </div>
      </section>

      <section class="oel-section" id="answers">
        <p class="oel-kicker">01 / Answers</p>
        <div class="oel-section-head">
          <h2>What it answers</h2>
          <p class="oel-dek">
            An AI teammate for product and engineering teams. These are questions the installation already takes, with the sources left on the reply.
          </p>
        </div>
        <div class="oel-filters" role="toolbar" aria-label="Filter examples">
          <button
            v-for="group in groups"
            :key="group"
            type="button"
            class="oel-filter"
            :aria-pressed="activeGroup === group ? 'true' : 'false'"
            @click="activeGroup = group"
          >{{ group }}</button>
        </div>
        <ul class="oel-answers">
          <li v-for="item in visibleAnswers" :key="item.prompt" class="oel-answer">
            <p class="oel-answer-group">{{ item.group }}</p>
            <h3>{{ item.prompt }}</h3>
            <p>{{ item.response }}</p>
            <div class="oel-chips">
              <button
                v-for="(chip, index) in item.evidence"
                :key="chip.label"
                type="button"
                class="oel-chip"
                :aria-expanded="openAnswerKey === item.prompt + index ? 'true' : 'false'"
                @click="toggleAnswerChip(item.prompt, index)"
              >{{ chip.label }}</button>
            </div>
            <p v-if="answerDetail(item)" class="oel-evidence is-light">{{ answerDetail(item) }}</p>
          </li>
        </ul>
      </section>

      <section class="oel-section" id="sources">
        <p class="oel-kicker">02 / Sources and surfaces</p>
        <div class="oel-section-head">
          <h2>Where it reads, and where it shows up</h2>
          <p class="oel-dek">
            Code, tickets, docs, chat, CI, and observability. Then Slack, GitHub, editors, the CLI, and the web UI.
          </p>
        </div>
        <h3 class="oel-subhead">Reads</h3>
        <ul class="oel-rows">
          <li v-for="source in sources" :key="source.name">
            <p class="oel-row-name">{{ source.name }}</p>
            <p>{{ source.line }}</p>
          </li>
        </ul>
        <h3 class="oel-subhead">Shows up in</h3>
        <ul class="oel-rows">
          <li v-for="surface in surfaces" :key="surface.name">
            <p class="oel-row-name">{{ surface.name }}</p>
            <p>{{ surface.line }}</p>
          </li>
        </ul>
      </section>

      <section class="oel-section" id="trust">
        <p class="oel-kicker">03 / Trust</p>
        <div class="oel-section-head">
          <h2>Grounded in the code, so the answer can be checked</h2>
          <blockquote class="oel-quote">
            <p>A search index returns documents. Oel returns an answer with the file, the pull request, and the ticket attached.</p>
          </blockquote>
          <p class="oel-dek">
            That is the lab thesis applied to a company brain: making agents trustworthy on real software. The engine underneath is <a href="/probe">Probe</a>. The workflow underneath is <a href="/visor">Visor</a>.
          </p>
        </div>
        <ul class="oel-rows oel-rows--trust">
          <li v-for="item in trust" :key="item.name">
            <p class="oel-row-name">{{ item.name }}</p>
            <p>{{ item.line }}</p>
          </li>
        </ul>
      </section>

      <section class="oel-section" id="automations">
        <p class="oel-kicker">04 / Automations</p>
        <div class="oel-section-head">
          <h2>It answers, then it acts</h2>
          <p class="oel-dek">
            Opens pull requests, updates and creates Jira tickets, posts to Slack, merges when the conditions are met, drafts docs pull requests, and saves runbooks into a knowledge base. Scheduled work is YAML on Visor: digests, enrichment, and watchers.
          </p>
        </div>
        <ul class="oel-schedule">
          <li v-for="job in jobs" :key="job.when">
            <p class="oel-when">{{ job.when }}</p>
            <p>{{ job.line }}</p>
          </li>
        </ul>
        <div class="oel-roles">
          <div class="oel-role-tabs" role="tablist" aria-label="Who it serves">
            <button
              v-for="role in roles"
              :key="role.id"
              type="button"
              role="tab"
              class="oel-role-tab"
              :id="'role-tab-' + role.id"
              :aria-selected="activeRole === role.id ? 'true' : 'false'"
              :aria-controls="'role-panel-' + role.id"
              @click="activeRole = role.id"
            >{{ role.title }}</button>
          </div>
          <div
            class="oel-role-panel"
            role="tabpanel"
            :id="'role-panel-' + currentRole.id"
            :aria-labelledby="'role-tab-' + currentRole.id"
          >
            <h3>{{ currentRole.title }}</h3>
            <p>{{ currentRole.line }}</p>
            <ul>
              <li v-for="item in currentRole.workflows" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
        <p class="oel-note">
          The quickstart is <a href="https://github.com/probelabs/visor-quickstart">probelabs/visor-quickstart</a>: intent classification, skills, knowledge injection, and tool orchestration, defined in YAML.
        </p>
      </section>

      <section class="oel-section" id="proof">
        <p class="oel-kicker">05 / Reference</p>
        <div class="oel-section-head">
          <h2>Tyk</h2>
          <p class="oel-dek">
            The reference installation is at Tyk. Leonid calls that installation Oel. The quotes below are from the people who use it, in the words they used.
          </p>
        </div>
        <figure class="oel-testimonial" v-for="quote in quotes" :key="quote.name">
          <blockquote>
            <p>{{ quote.text }}</p>
          </blockquote>
          <figcaption>
            <strong>{{ quote.name }}</strong>
            <span>{{ quote.role }}</span>
          </figcaption>
        </figure>
      </section>

      <section class="oel-section" id="demo">
        <p class="oel-kicker">06 / Demo</p>
        <div class="oel-demo">
          <div>
            <h2>Ask your codebase a real question in 30 minutes.</h2>
            <p class="oel-dek">Thirty minutes. Real questions, real answers. No slideware.</p>
            <ol class="oel-agenda">
              <li>
                <strong>See it on a real codebase</strong>
                <span>A production-scale environment: multi-repo, real integrations, real complexity.</span>
              </li>
              <li>
                <strong>Map it to your stack</strong>
                <span>AI editors, GitHub Actions, Slack, or the web UI.</span>
              </li>
              <li>
                <strong>Walk away with a plan</strong>
                <span>A path to running Oel in your org. Most teams are live within a day.</span>
              </li>
            </ol>
          </div>
          <form class="oel-form" @submit.prevent="submitDemoForm">
            <h3>Tell us about your setup</h3>
            <div class="oel-field">
              <label for="oel-email">Work email</label>
              <input id="oel-email" v-model="demoForm.email" type="email" required autocomplete="email" placeholder="you@company.com">
            </div>
            <div class="oel-field">
              <label for="oel-codebase">Codebase size</label>
              <select id="oel-codebase" v-model="demoForm.codebaseSize">
                <option value="">Select…</option>
                <option value="<100k">&lt;100K lines</option>
                <option value="100k-1m">100K–1M lines</option>
                <option value="1m-10m">1M–10M lines</option>
                <option value="10m+">10M+ lines</option>
              </select>
            </div>
            <div class="oel-field">
              <label for="oel-team">Engineering team size</label>
              <select id="oel-team" v-model="demoForm.teamSize">
                <option value="">Select…</option>
                <option value="1-10">1–10 engineers</option>
                <option value="11-50">11–50 engineers</option>
                <option value="51-200">51–200 engineers</option>
                <option value="200+">200+ engineers</option>
              </select>
            </div>
            <div class="oel-field">
              <label for="oel-pain">What slows your team down most?</label>
              <textarea id="oel-pain" v-model="demoForm.painPoint" rows="3" placeholder="Onboarding takes weeks. PMs wait on engineering for answers."></textarea>
            </div>
            <button class="oel-submit" type="submit">Book a demo</button>
          </form>
        </div>

        <div class="oel-quick">
          <div>
            <h3>Or run it in 10 minutes</h3>
            <p>Clone the quickstart, set an API key, and get a working assistant. Most teams are running within 10 minutes.</p>
            <ul>
              <li>Intent classification routes a request to the right skill</li>
              <li>Code exploration across repos</li>
              <li>Knowledge injection from inline docs or files</li>
              <li>Tool orchestration: bash, MCP servers, workflow tools</li>
              <li>Slack, with one flag</li>
            </ul>
            <a class="oel-textlink" href="/docs/quick-start">Quick start guide</a>
          </div>
          <div class="oel-code">
            <p class="oel-card-kicker">Clone and run</p>
            <pre><code>{{ assistantCode }}</code></pre>
            <button class="oel-copy" type="button" @click="copyCode">{{ codeCopied ? 'Copied' : 'Copy' }}</button>
          </div>
        </div>

        <h3 class="oel-subhead">Questions</h3>
        <dl class="oel-faq">
          <div v-for="faq in faqs" :key="faq.q">
            <dt>{{ faq.q }}</dt>
            <dd>{{ faq.a }}</dd>
          </div>
        </dl>
      </section>
    </main>

    <footer class="oel-footer">
      <div>
        <p class="oel-wordmark">Oel</p>
        <p class="oel-footer-line">by ProbeLabs</p>
        <p class="oel-footer-line">Powered by <a href="/probe">Probe</a> &amp; <a href="/visor">Visor</a></p>
      </div>
      <div>
        <h2>Oel</h2>
        <ul>
          <li><a href="#answers">Answers</a></li>
          <li><a href="#sources">Sources</a></li>
          <li><a href="#trust">Trust</a></li>
          <li><a href="#automations">Automations</a></li>
          <li><a href="#proof">Tyk</a></li>
          <li><a href="#demo">Book a demo</a></li>
        </ul>
      </div>
      <div>
        <h2>Lab</h2>
        <ul>
          <li><a href="/">ProbeLabs</a></li>
          <li><a href="/probe">Probe</a></li>
          <li><a href="/visor">Visor</a></li>
          <li><a href="https://reqproof.com">Proof</a></li>
          <li><a href="/docs/quick-start">Quick start</a></li>
          <li><a href="/company/about">About</a></li>
        </ul>
      </div>
      <div>
        <h2>Legal</h2>
        <ul>
          <li><a href="/privacy">Privacy</a></li>
          <li><a href="/terms">Terms</a></li>
          <li><a href="mailto:hello@probelabs.com">hello@probelabs.com</a></li>
        </ul>
      </div>
      <p class="oel-copy">&copy; {{ year }} GoReplay LLC</p>
    </footer>
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'

const menuOpen = ref(false)
const year = new Date().getFullYear()
const openHeroChip = ref(0)
const openAnswerKey = ref(null)
const activeGroup = ref('All')
const activeRole = ref('engineering')
const codeCopied = ref(false)

const demoForm = ref({
  email: '',
  codebaseSize: '',
  teamSize: '',
  painPoint: ''
})

const hero = {
  prompt: 'Why does the rate limiter return 429 for authenticated users even when they are under quota?',
  response: 'The token bucket lookup uses the client IP instead of the API key when X-Forwarded-For is present. Authenticated users behind a shared proxy hit the same bucket.',
  evidence: [
    {
      label: 'middleware/rate_limit.go:142',
      detail: 'The token bucket lookup uses client IP instead of API key when the X-Forwarded-For header is present.'
    },
    {
      label: 'Fix',
      detail: 'Use the session key as the primary identifier.'
    }
  ]
}

const answers = [
  {
    group: 'Product',
    prompt: 'Evaluate ticket PROJ-15792 for completeness.',
    response: 'Not ready. Blockers include missing acceptance criteria, no error-handling spec, incomplete edge cases, and no performance requirements.',
    evidence: [
      { label: 'Jira PROJ-15792', detail: 'Sixteen issues found before implementation should start.' }
    ]
  },
  {
    group: 'Product',
    prompt: 'Break this ticket into engineering tasks with story points.',
    response: 'Fix the cache-control logic in gateway/res_cache.go (1 point). Add regression tests (3 points). Update the API docs (1 point).',
    evidence: [
      { label: 'gateway/res_cache.go', detail: 'The code change is a one-line fix. The tests carry the rest of the estimate.' }
    ]
  },
  {
    group: 'Product',
    prompt: 'Which customers are interested in JWT authentication?',
    response: 'Pulled from Zendesk, Jira, and onboarding docs: Acme Corp wants to migrate to JWT, GlobalTech uses Auth0, MegaSoft lists JWT as a candidate, DataFlow’s strategy is JWT with Okta.',
    evidence: [
      { label: 'Zendesk', detail: 'Customer notes on JWT migration and current identity providers.' },
      { label: 'Jira', detail: 'Tickets that name JWT as a requirement or a candidate.' },
      { label: 'Docs', detail: 'Onboarding documents that record the auth strategy.' }
    ]
  },
  {
    group: 'Engineering',
    prompt: 'Upstream cache control is not working as the ticket describes. Is this a bug?',
    response: 'Yes. The gateway caches when upstream cache-control headers are absent. The code is in gateway/res_cache.go.',
    evidence: [
      { label: 'gateway/res_cache.go', detail: 'Set cacheThisRequest to false when upstream cache control is enabled and the required header is missing: cacheThisRequest = res.Header.Get(upstreamCacheHeader) != "".' }
    ]
  },
  {
    group: 'Engineering',
    prompt: 'CI tests are failing. Which change broke them, and when was the last green build?',
    response: 'Failures began on November 5, immediately after pull request #143. That pull request moved the GitHub Actions runner from ubuntu-22.04 to ubuntu-24.04.',
    evidence: [
      { label: 'PR #143', detail: 'The runner upgrade is the direct cause of the CI failures.' },
      { label: 'GitHub Actions', detail: 'The last green build is the run before the November 5 merge.' }
    ]
  },
  {
    group: 'Engineering',
    prompt: 'Memory consumption increased between v5.8.2 and v5.8.5. What could cause it?',
    response: 'Pull requests in that range: #2847 changed buffer handling, #2891 changed connection-pool defaults, and #2903 added eager loading.',
    evidence: [
      { label: 'PR #2847', detail: 'Modified buffer handling in the request pipeline.' },
      { label: 'PR #2891', detail: 'Changed connection pooling defaults.' },
      { label: 'PR #2903', detail: 'Added eager loading.' }
    ]
  },
  {
    group: 'QA',
    prompt: 'Compare the acceptance criteria in PROJ-16554 with pull request #7745.',
    response: 'Three of seven acceptance criteria are covered. Missing: per-key quota reset, concurrent requests under burst, and the 429 error format. Eighteen test cases follow from the gap.',
    evidence: [
      { label: 'Jira PROJ-16554', detail: 'Rate-limit policy per API key.' },
      { label: 'PR #7745', detail: 'Thirty-eight files changed. The pull request does not cover reset, burst, or the 429 body.' }
    ]
  },
  {
    group: 'QA',
    prompt: 'Read PROJ-8410, find the original spec, and write the test cases.',
    response: 'Traced to PROJ-7201 and RFC-031. Fourteen cases: five positive, four negative, five edge. tests/webhook_test.go covers six of the fourteen.',
    evidence: [
      { label: 'PROJ-8410', detail: 'Webhook retry logic. The ticket was updated with the cases.' },
      { label: 'RFC-031', detail: 'The design doc the original task was built from.' },
      { label: 'tests/webhook_test.go', detail: 'Covers 6 of 14 cases. Timeout, concurrent retries, and the edge cases are missing.' }
    ]
  },
  {
    group: 'Platform',
    prompt: 'Correlate the Datadog p99 spike with recent deploys.',
    response: 'The spike started at 14:22 UTC. Pull request #892 merged at 13:45 and the deploy finished at 14:10. The new middleware serializes every request body, including uploads.',
    evidence: [
      { label: 'Datadog', detail: 'p99 moved from 120ms to 890ms at 14:22 UTC.' },
      { label: 'PR #892', detail: 'Added request-logging middleware. Skipping serialization for multipart requests restores latency in staging.' }
    ]
  },
  {
    group: 'Platform',
    prompt: 'Grafana shows memory climbing until the API pods are OOMKilled. Where is the leak?',
    response: 'It started five days ago, after pull request #1204. An in-memory response cache has no TTL. The eviction already exists in cache/lru.go and is not wired up. The call site is api/middleware.go:89.',
    evidence: [
      { label: 'Grafana / Loki', detail: 'About 200MB after six hours, 1.2GB at the OOMKill, every 18 hours.' },
      { label: 'PR #1204', detail: 'Added the cache. The key includes query params, so unique calls never expire.' },
      { label: 'api/middleware.go:89', detail: 'Wire the TTL eviction that already lives in cache/lru.go.' }
    ]
  },
  {
    group: 'Ops',
    prompt: 'Answer this security questionnaire from Confluence, docs, and code.',
    response: 'Forty-three of forty-seven questions compiled with source references. Four flagged for a person to review.',
    evidence: [
      { label: 'Confluence', detail: 'Policy pages used as the source for the answered questions.' },
      { label: 'Docs', detail: 'Published docs checked against the questionnaire.' },
      { label: 'Code', detail: 'Implementation checked where the docs were not enough. Four questions left for manual review.' }
    ]
  },
  {
    group: 'Ops',
    prompt: 'List every GPL and AGPL dependency, and flag anything in production code.',
    response: 'Across the dependency manifests: 23 GPL dependencies, 12 of them test-only; 4 AGPL packages that need legal review; 2 transitive AGPL dependencies in production code.',
    evidence: [
      { label: 'Dependency manifests', detail: 'Lockfiles across the repos. Apache-2.0 dependencies need no action.' }
    ]
  }
]

const groups = ['All', 'Product', 'Engineering', 'QA', 'Platform', 'Ops']

const sources = [
  { name: 'Code', line: 'Multi-repo trees, including million-line codebases. AST-aware semantic search, with ripgrep and tree-sitter, through Probe.' },
  { name: 'GitHub', line: 'Pull requests, reviews, and Actions runs.' },
  { name: 'Jira', line: 'Tickets, epics, cycle time, and the comments on them.' },
  { name: 'Zendesk', line: 'Support cases, tags, and the customer behind a ticket.' },
  { name: 'Confluence', line: 'RFCs, design docs, wikis, and policy pages.' },
  { name: 'Slack', line: 'DMs, channels, threads, and @mentions.' },
  { name: 'Docs', line: 'Published docs, plus a knowledge base it can save runbooks into.' },
  { name: 'Datadog', line: 'Metrics such as error rate and p99 latency, tied back to a deploy.' },
  { name: 'Grafana / Loki', line: 'Charts and container logs, read next to git history.' },
  { name: 'Terraform', line: 'Modules mapped to the services and repos that use them.' },
  { name: 'MCP', line: 'The same context, exposed to AI editors through an MCP server.' }
]

const surfaces = [
  { name: 'Slack', line: 'DM, channels, and @mention.' },
  { name: 'GitHub', line: 'A GitHub Action and the GitHub Assistant.' },
  { name: 'AI editors', line: 'Through the MCP server.' },
  { name: 'CLI / SDK', line: 'Terminal workflows and programmatic access.' },
  { name: 'Web', line: 'A web UI for the same questions.' }
]

const trust = [
  { name: 'Citations', line: 'An answer names the file and line, the pull request, the ticket, or the thread it used. The evidence chips on this page are that habit.' },
  { name: 'Visor', line: 'Workflows are versioned YAML, reviewed like code. Tool permissions are explicit per workflow and per step. Retrieval is scoped. Critical steps pass schema validation and policy gates. Retries are deterministic.' },
  { name: 'OpenTelemetry', line: 'Every run can emit an OpenTelemetry trace and an audit trail: what happened, and with what context.' },
  { name: 'On-prem', line: 'On-prem by default, any LLM provider, and an open-source core. Code indexing and retrieval run locally or on your own infrastructure. You control what context is sent to the model.' }
]

const jobs = [
  { when: 'Daily', line: 'Standup digest for a channel: open pull requests, blockers, tickets in review, and work stale for three or more days.' },
  { when: 'Daily', line: 'A personal digest: open pull requests, assigned tickets, threads you were mentioned in, and deadlines this week.' },
  { when: 'Morning', line: 'Datadog health check. Services with error rate above 1% or p99 above 500ms in the last 12 hours, posted to #on-call, with the recent deploy when there is one.' },
  { when: 'Hourly', line: 'New Jira tickets enriched with related Zendesk cases, a classification, and an early comment.' },
  { when: 'Monday 9:00', line: 'Zendesk tickets tagged churn-risk, cross-referenced with open Jira bugs for those accounts.' },
  { when: 'Friday 16:00', line: 'Tickets moved to Ready for QA that week, flagged when acceptance criteria or test cases are missing.' },
  { when: 'Every 6 hours', line: 'Watch a pull request. Merge it when reviewers have approved and CI is green, then post to the releases channel.' },
  { when: 'Follow-up', line: 'Return to a thread to check whether a hotfix deployed and whether the Datadog error rate dropped.' }
]

const roles = [
  {
    id: 'engineering',
    title: 'Engineering',
    line: 'Trace a change across services, find the commit that introduced a regression, and get a morning digest of your own queue.',
    workflows: [
      'Trace a request lifecycle across services: auth, caching, and error handling.',
      'Find which commit introduced a regression, and what it broke downstream.',
      'Pinpoint a failing CI run: the change, the last green build, and the step that broke.',
      'Personal morning digest of open pull requests, assigned tickets, mentions, and deadlines.'
    ]
  },
  {
    id: 'platform',
    title: 'Platform',
    line: 'Builds, deploys, and infra, without being the person everyone DMs when something is red.',
    workflows: [
      'Debug intermittent GitHub Actions failures across runs and find the pattern.',
      'Correlate a Datadog latency spike with the deploy and config change that caused it.',
      'Trace a memory leak through Grafana, Loki, and git history.',
      'Map Terraform resources to owning teams and flag orphaned infrastructure.'
    ]
  },
  {
    id: 'product',
    title: 'Product & QA',
    line: 'Specs, estimates, and test cases checked against the code, not against whoever is free in Slack.',
    workflows: [
      'Evaluate a ticket for missing acceptance criteria before engineering starts.',
      'Generate positive, negative, and edge cases from a ticket and the spec it came from.',
      'Break an epic into tasks with story points based on the code it will touch.',
      'Weekly QA gate: flag Ready for QA tickets that have no acceptance criteria or tests.'
    ]
  },
  {
    id: 'leadership',
    title: 'Leadership',
    line: 'The same codebase for engineering, product, support, legal, HR, and finance, plus the recurring checks that should not depend on someone remembering.',
    workflows: [
      'Release notes from merged pull requests and linked Jira tickets.',
      'License audits across repos, with production copy flagged.',
      'RFP security questionnaires answered from Confluence, docs, and code, with sources.',
      'Recurring compliance checks: license audits, security scans, and R&D effort from Jira.'
    ]
  }
]

const quotes = [
  {
    name: 'Andy Ost',
    role: 'Senior Product Manager at Tyk.io',
    text: 'As a Product Manager, Probe helps me to understand the true behaviour of the software so that I can go beyond the documentation and validate edge case scenarios and answer \'what if?\' questions as I develop the product roadmap. This saves a lot of time and disruption to the development teams.'
  },
  {
    name: 'Laurentiu Ghiur',
    role: 'Technical Lead at Tyk.io',
    text: 'I\'m using Probe Labs tools daily as a technical lead, and they\'ve been adopted across marketing, sales, documentation, product, delivery, and engineering. The YAML-based automation makes it easy to wire in tools like JIRA, Zendesk, and GitHub for agentic flows that actually work from day one.'
  }
]

const faqs = [
  {
    q: 'What is Oel?',
    a: 'Oel is an AI teammate that connects to your codebase, tickets, docs, Slack, CI, and observability, then answers questions and takes actions: opening pull requests, updating tickets, posting to Slack, and running scheduled digests. It runs on Probe’s code engine and Visor workflows.'
  },
  {
    q: 'Does my code stay private?',
    a: 'Yes. Code indexing and retrieval run locally or on your own infrastructure. You control what context is sent to the model. Full on-prem deployment is available, with any LLM provider.'
  },
  {
    q: 'Who is it for?',
    a: 'Engineers, platform teams, QA, product managers, support, and also legal, HR, and finance. Anyone who needs an answer from the codebase or the tools connected to it.'
  },
  {
    q: 'How is this different from pasting context into a chat?',
    a: 'A general chat works with what you paste in. Oel connects to the systems themselves — repos, Jira, Zendesk, Confluence, Slack, CI, and observability — and can act: open a pull request, update a ticket, post a summary, or run the same check again as a Visor workflow.'
  },
  {
    q: 'Can I use my own model?',
    a: 'Yes. Any LLM provider, including a self-hosted model. Switch providers without rewriting the workflow.'
  },
  {
    q: 'How long does setup take?',
    a: 'The quickstart is a clone, an API key, and a YAML file: most teams are running within 10 minutes. Add it to an AI editor, connect Slack, or deploy the GitHub Action.'
  }
]

const assistantCode = `git clone https://github.com/probelabs/visor-quickstart.git
cd visor-quickstart && cp .env.example .env
# Set your LLM API key in .env (Anthropic, OpenAI, or Google)
npx -y @probelabs/visor@latest run assistant.yaml --tui`

const activeHeroEvidence = computed(() => (
  openHeroChip.value === null ? null : hero.evidence[openHeroChip.value]
))

const visibleAnswers = computed(() => (
  activeGroup.value === 'All'
    ? answers
    : answers.filter((item) => item.group === activeGroup.value)
))

const currentRole = computed(() => roles.find((role) => role.id === activeRole.value) || roles[0])

function toggleAnswerChip(prompt, index) {
  const key = prompt + index
  openAnswerKey.value = openAnswerKey.value === key ? null : key
}

function answerDetail(item) {
  if (!openAnswerKey.value || !openAnswerKey.value.startsWith(item.prompt)) return ''
  const index = Number(openAnswerKey.value.slice(item.prompt.length))
  return item.evidence[index]?.detail || ''
}

function submitDemoForm() {
  const params = new URLSearchParams()
  if (demoForm.value.email) params.set('email', demoForm.value.email)
  const notes = [
    demoForm.value.codebaseSize ? `Codebase: ${demoForm.value.codebaseSize}` : '',
    demoForm.value.teamSize ? `Team: ${demoForm.value.teamSize}` : '',
    demoForm.value.painPoint ? `Pain point: ${demoForm.value.painPoint}` : ''
  ].filter(Boolean).join(' | ')
  if (notes) params.set('notes', notes)
  window.open(`https://cal.com/leonid-bugaev/30min?${params.toString()}`, '_blank', 'noopener')
}

async function copyCode() {
  try {
    await navigator.clipboard.writeText(assistantCode)
    codeCopied.value = true
    setTimeout(() => { codeCopied.value = false }, 2000)
  } catch (err) {
    console.error('Failed to copy:', err)
  }
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
.oel {
  --bg: #ffffff;
  --text: #0a0a0a;
  --muted: #6b6b6b;
  --line: #e4e4e7;
  --ink: #141311;
  --cream: #f6f3ec;
  --cream-dim: rgba(246, 243, 236, 0.72);
  --sans: Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
  --mono: "JetBrains Mono", ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace;
  background: var(--bg);
  color: var(--text);
  font-family: var(--sans);
  font-size: 16px;
  line-height: 1.5;
  min-height: 100vh;
  color-scheme: light;
  overflow-x: hidden;
}

.oel * { box-sizing: border-box; }

.oel a { color: inherit; }

.oel h1,
.oel h2,
.oel h3,
.oel p { overflow-wrap: break-word; }

.oel-sr {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

.oel a.oel-skip,
.oel a.oel-skip:hover,
.oel a.oel-skip:focus,
.oel a.oel-skip:visited {
  position: absolute;
  left: 16px;
  top: -40px;
  background: var(--text);
  color: #fff;
  padding: 8px 12px;
  z-index: 40;
  text-decoration: none;
}

.oel a.oel-skip:focus { top: 12px; }

.oel-header {
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(255, 255, 255, 0.96);
  border-bottom: 1px solid transparent;
}

.oel-header-bar {
  max-width: 1160px;
  margin: 0 auto;
  padding: 0 28px;
  height: 64px;
  display: flex;
  align-items: center;
  gap: 28px;
}

.oel-brand {
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin: 0;
  min-width: 0;
}

.oel-home,
.oel-wordmark {
  font-weight: 600;
  letter-spacing: -0.03em;
  text-decoration: none;
  color: var(--text);
}

.oel-home { font-size: 14px; color: var(--muted); font-weight: 500; }
.oel-home:hover { color: var(--text); }
.oel-wordmark { font-size: 18px; }
.oel-slash { color: var(--line); }

.oel-nav {
  display: flex;
  align-items: center;
  gap: 22px;
  margin-left: auto;
}

.oel-nav a,
.oel-menu a:not(.oel-cta) {
  color: var(--muted);
  text-decoration: none;
  font-size: 14px;
  letter-spacing: -0.01em;
}

.oel-nav a:hover,
.oel-menu a:not(.oel-cta):hover { color: var(--text); }

.oel a.oel-cta,
.oel a.oel-cta:visited {
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
  white-space: nowrap;
}

.oel a.oel-cta:hover,
.oel a.oel-cta:focus,
.oel a.oel-cta:active,
.oel a.oel-cta:visited:hover,
.oel a.oel-cta:visited:focus,
.oel a.oel-cta:visited:active {
  background: var(--text);
  color: #fff;
}

.oel-menu-btn {
  display: none;
  width: 42px;
  height: 42px;
  margin-left: auto;
  border: 0;
  background: transparent;
  padding: 10px;
  cursor: pointer;
}

.oel-menu-btn span:not(.oel-sr) {
  display: block;
  height: 1px;
  background: var(--text);
  margin: 6px 0;
}

.oel-menu { display: none; }

.oel-hero {
  background: var(--ink);
  color: var(--cream);
}

.oel-hero,
.oel-section,
.oel-footer {
  max-width: 1160px;
  margin: 0 auto;
  padding-left: 28px;
  padding-right: 28px;
}

.oel-hero {
  max-width: none;
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(280px, 0.95fr);
  gap: 48px;
  align-items: center;
  padding-top: 72px;
  padding-bottom: 72px;
  padding-left: max(28px, calc((100% - 1160px) / 2 + 28px));
  padding-right: max(28px, calc((100% - 1160px) / 2 + 28px));
}

.oel-hero-kicker,
.oel-card-kicker,
.oel-kicker,
.oel-answer-group,
.oel-when,
.oel-powered,
.oel-footer h2 {
  font-family: var(--mono);
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.04em;
}

.oel-hero-kicker {
  margin: 0 0 18px;
  color: var(--cream-dim);
  text-transform: uppercase;
}

.oel-hero h1 {
  margin: 0;
  font-size: clamp(3.5rem, 8vw, 6.5rem);
  font-weight: 600;
  letter-spacing: -0.045em;
  line-height: 0.9;
  color: var(--cream);
}

.oel-hero-lead {
  margin: 14px 0 0;
  font-size: clamp(1.35rem, 2vw, 1.75rem);
  font-weight: 600;
  letter-spacing: -0.03em;
  line-height: 1.2;
  text-wrap: balance;
  max-width: 18ch;
  color: var(--cream);
}

.oel-hero-dek {
  margin: 18px 0 0;
  max-width: 38rem;
  font-size: 16px;
  line-height: 1.5;
  color: var(--cream-dim);
  text-wrap: pretty;
}

.oel-powered {
  margin: 18px 0 0;
  color: var(--cream-dim);
  text-transform: uppercase;
}

.oel-powered a {
  color: var(--cream);
  text-decoration: none;
  border-bottom: 1px solid rgba(246, 243, 236, 0.45);
}

.oel-hero-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 14px 22px;
  margin-top: 28px;
}

.oel a.oel-hero-btn,
.oel a.oel-hero-btn:visited {
  display: inline-flex;
  align-items: center;
  height: 42px;
  padding: 0 16px;
  background: #f4f1ea;
  color: var(--ink);
  text-decoration: none;
  border-radius: 2px;
  font-size: 14px;
  font-weight: 600;
}

.oel a.oel-hero-btn:hover,
.oel a.oel-hero-btn:focus,
.oel a.oel-hero-btn:active,
.oel a.oel-hero-btn:visited:hover,
.oel a.oel-hero-btn:visited:focus,
.oel a.oel-hero-btn:visited:active {
  background: #fff;
  color: var(--ink);
}

.oel a.oel-hero-text,
.oel a.oel-hero-text:visited {
  color: var(--cream);
  text-decoration: none;
  font-size: 14px;
  border-bottom: 1px solid var(--cream);
  line-height: 1.2;
  padding-bottom: 1px;
}

.oel-hero-card {
  border: 1px solid #2a2926;
  background: #1c1b19;
  padding: 22px 22px 20px;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06);
}

.oel-card-kicker {
  margin: 0 0 14px;
  color: var(--cream-dim);
  text-transform: uppercase;
}

.oel-card-q {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.35;
  text-wrap: balance;
  color: var(--cream);
}

.oel-card-a {
  margin: 12px 0 0;
  color: var(--cream-dim);
  font-size: 15px;
  text-wrap: pretty;
}

.oel-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
}

.oel-chip {
  appearance: none;
  border: 1px solid var(--line);
  background: transparent;
  color: var(--text);
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.01em;
  line-height: 1.3;
  padding: 6px 8px;
  border-radius: 2px;
  cursor: pointer;
  text-align: left;
  max-width: 100%;
}

.oel-chip.is-on-dark {
  border-color: rgba(246, 243, 236, 0.28);
  color: var(--cream);
}

.oel-chip[aria-expanded="true"] {
  background: var(--text);
  border-color: var(--text);
  color: #fff;
}

.oel-chip.is-on-dark[aria-expanded="true"] {
  background: var(--cream);
  border-color: var(--cream);
  color: var(--ink);
}

.oel-evidence {
  margin: 12px 0 0;
  padding-top: 12px;
  border-top: 1px solid rgba(246, 243, 236, 0.16);
  color: var(--cream);
  font-family: var(--mono);
  font-size: 12px;
  line-height: 1.55;
}

.oel-evidence.is-light {
  border-top-color: var(--line);
  color: var(--text);
}

.oel-section {
  padding-top: 88px;
  padding-bottom: 96px;
  border-top: 1px solid var(--line);
  scroll-margin-top: 80px;
}

.oel-section:first-of-type { border-top: 0; }

.oel-kicker {
  margin: 0 0 22px;
  color: var(--muted);
  text-transform: uppercase;
}

.oel-section h2,
.oel-demo h2 {
  margin: 0;
  font-size: clamp(2rem, 3.4vw, 3rem);
  font-weight: 600;
  letter-spacing: -0.03em;
  line-height: 1.05;
  text-wrap: balance;
  max-width: 26ch;
}

.oel-dek {
  margin: 18px 0 0;
  max-width: 40rem;
  font-size: 18px;
  line-height: 1.5;
  text-wrap: pretty;
}

.oel-dek a,
.oel-note a,
.oel-textlink,
.oel-footer a {
  color: inherit;
}

.oel-quote {
  margin: 28px 0 0;
  padding: 0;
  border: 0;
  max-width: 36rem;
}

.oel-quote p {
  margin: 0;
  font-size: clamp(1.35rem, 2.2vw, 1.75rem);
  font-weight: 600;
  letter-spacing: -0.03em;
  line-height: 1.25;
  text-wrap: balance;
}

.oel-subhead {
  margin: 36px 0 0;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.oel-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 28px;
}

.oel-filter,
.oel-role-tab {
  appearance: none;
  min-height: 36px;
  padding: 0 12px;
  border: 1px solid var(--line);
  border-radius: 2px;
  background: transparent;
  color: var(--muted);
  font: inherit;
  font-size: 14px;
  cursor: pointer;
}

.oel-filter[aria-pressed="true"],
.oel-role-tab[aria-selected="true"] {
  background: var(--text);
  border-color: var(--text);
  color: #fff;
}

.oel-answers,
.oel-rows,
.oel-schedule,
.oel-faq {
  list-style: none;
  margin: 8px 0 0;
  padding: 0;
}

.oel-answers {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 40px;
  margin-top: 12px;
}

.oel-answer,
.oel-rows li,
.oel-schedule li,
.oel-faq div {
  padding: 22px 0;
  border-top: 1px solid var(--line);
}

.oel-answer h3 {
  margin: 6px 0 0;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.3;
  text-wrap: balance;
}

.oel-answer p,
.oel-rows p,
.oel-schedule p,
.oel-role-panel li,
.oel-agenda span,
.oel-faq dd,
.oel-quick li {
  margin: 8px 0 0;
  color: var(--text);
  font-size: 15px;
  text-wrap: pretty;
}

.oel-answer-group,
.oel-when {
  margin: 0;
  color: var(--muted);
  text-transform: uppercase;
}

.oel-rows li,
.oel-schedule li {
  display: grid;
  grid-template-columns: minmax(140px, 200px) minmax(0, 1fr);
  gap: 12px 28px;
  align-items: baseline;
}

.oel-rows li:last-child,
.oel-schedule li:last-child { border-bottom: 1px solid var(--line); }

.oel-row-name,
.oel-when {
  margin: 0;
  font-weight: 600;
  letter-spacing: -0.02em;
}

.oel-when {
  font-family: var(--mono);
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.03em;
}

.oel-rows p { margin: 0; }
.oel-schedule p { margin: 0; }

.oel-rows--trust { margin-top: 28px; }

.oel-roles {
  display: grid;
  grid-template-columns: 200px minmax(0, 1fr);
  gap: 28px;
  margin-top: 36px;
  padding-top: 28px;
  border-top: 1px solid var(--line);
}

.oel-role-tabs {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 8px;
}

.oel-role-tab { text-align: left; }

.oel-role-panel h3 {
  margin: 0;
  font-size: 22px;
  letter-spacing: -0.03em;
}

.oel-role-panel ul {
  margin: 14px 0 0;
  padding: 0;
  list-style: none;
}

.oel-role-panel li {
  margin: 0;
  padding: 12px 0;
  border-top: 1px solid var(--line);
}

.oel-note {
  margin: 22px 0 0;
  max-width: 44rem;
  color: var(--muted);
  font-size: 14px;
}

.oel-note a,
.oel-textlink,
.oel-footer a {
  text-underline-offset: 3px;
}

.oel-testimonial {
  margin: 36px 0 0;
  padding-top: 28px;
  border-top: 1px solid var(--line);
}

.oel-testimonial blockquote {
  margin: 0;
  padding: 0;
  border: 0;
}

.oel-testimonial p {
  margin: 0;
  max-width: 46rem;
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  font-weight: 600;
  letter-spacing: -0.03em;
  line-height: 1.35;
  text-wrap: pretty;
}

.oel-testimonial figcaption {
  display: flex;
  flex-wrap: wrap;
  gap: 6px 14px;
  margin-top: 16px;
  font-family: var(--mono);
  font-size: 12px;
  color: var(--muted);
}

.oel-testimonial strong {
  color: var(--text);
  font-weight: 500;
}

.oel-demo {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(280px, 0.9fr);
  gap: 48px;
  align-items: start;
}

.oel-agenda {
  margin: 28px 0 0;
  padding: 0;
  list-style: none;
  counter-reset: agenda;
}

.oel-agenda li {
  counter-increment: agenda;
  padding: 16px 0;
  border-top: 1px solid var(--line);
}

.oel-agenda strong {
  display: block;
  font-size: 16px;
  letter-spacing: -0.02em;
}

.oel-agenda strong::before {
  content: counter(agenda, decimal-leading-zero);
  display: inline-block;
  margin-right: 10px;
  font-family: var(--mono);
  font-size: 12px;
  font-weight: 400;
  color: var(--muted);
}

.oel-agenda span { display: block; color: var(--muted); }

.oel-form {
  border: 1px solid var(--line);
  padding: 22px;
}

.oel-form h3,
.oel-quick h3 {
  margin: 0;
  font-size: 18px;
  letter-spacing: -0.02em;
}

.oel-field { margin-top: 14px; }

.oel-field label {
  display: block;
  margin-bottom: 6px;
  font-size: 13px;
  color: var(--muted);
}

.oel-field input,
.oel-field select,
.oel-field textarea {
  width: 100%;
  border: 1px solid var(--line);
  border-radius: 2px;
  background: #fff;
  color: var(--text);
  font: inherit;
  font-size: 15px;
  padding: 10px 12px;
  min-height: 44px;
}

.oel-field textarea { min-height: 96px; resize: vertical; }

.oel-submit,
.oel-copy {
  appearance: none;
  border: 0;
  border-radius: 2px;
  cursor: pointer;
  font: inherit;
  font-size: 14px;
  font-weight: 600;
}

.oel-submit {
  margin-top: 16px;
  height: 44px;
  padding: 0 16px;
  background: var(--text);
  color: #fff;
}

.oel-submit:hover,
.oel-submit:focus { background: #242424; }

.oel-quick {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: 28px;
  margin-top: 48px;
  padding: 22px;
  background: var(--ink);
  color: var(--cream);
}

.oel-quick p,
.oel-quick li { color: var(--cream-dim); font-size: 15px; }

.oel-quick ul {
  margin: 12px 0 0;
  padding: 0;
  list-style: none;
}

.oel-quick li {
  margin: 0;
  padding: 8px 0;
  border-top: 1px solid rgba(246, 243, 236, 0.14);
}

.oel a.oel-textlink,
.oel a.oel-textlink:visited {
  display: inline-block;
  margin-top: 16px;
  color: var(--cream);
  text-decoration: none;
  border-bottom: 1px solid var(--cream);
  font-size: 14px;
}

.oel-code { position: relative; min-width: 0; }

.oel-code pre {
  margin: 12px 0 0;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  font-family: var(--mono);
  font-size: 12px;
  line-height: 1.6;
  color: var(--cream);
}

.oel-copy {
  margin-top: 12px;
  height: 32px;
  padding: 0 10px;
  background: transparent;
  color: var(--cream);
  border: 1px solid rgba(246, 243, 236, 0.4);
}

.oel-faq { margin-top: 8px; }

.oel-faq dt {
  font-weight: 600;
  letter-spacing: -0.02em;
}

.oel-faq dd { margin: 8px 0 0; color: var(--muted); }

.oel-footer {
  display: grid;
  grid-template-columns: 1.3fr repeat(3, 1fr);
  gap: 28px 24px;
  padding-top: 64px;
  padding-bottom: 28px;
  border-top: 1px solid var(--line);
}

.oel-footer-line {
  margin: 8px 0 0;
  color: var(--muted);
  font-size: 14px;
}

.oel-footer h2 {
  margin: 0 0 12px;
  color: var(--muted);
  font-weight: 500;
  text-transform: uppercase;
}

.oel-footer ul { list-style: none; margin: 0; padding: 0; }
.oel-footer li { margin: 0 0 8px; }

.oel-footer a {
  color: var(--muted);
  text-decoration: none;
  font-size: 14px;
}

.oel-footer a:hover { color: var(--text); }

.oel-copy {
  grid-column: 1 / -1;
  margin: 12px 0 0;
  padding-top: 18px;
  border-top: 1px solid var(--line);
  color: var(--muted);
  font-family: var(--mono);
  font-size: 12px;
}

.oel a:focus-visible,
.oel button:focus-visible,
.oel input:focus-visible,
.oel select:focus-visible,
.oel textarea:focus-visible {
  outline: 2px solid var(--text);
  outline-offset: 3px;
}

.oel-hero a:focus-visible,
.oel-hero button:focus-visible,
.oel-quick a:focus-visible,
.oel-quick button:focus-visible {
  outline-color: #f4f1ea;
}

@media (max-width: 980px) {
  .oel-nav,
  .oel-header-bar > .oel-cta { display: none; }
  .oel-menu-btn { display: block; }

  .oel-header.is-open .oel-menu {
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: 4px 20px 20px;
    border-bottom: 1px solid var(--line);
    background: #fff;
  }

  .oel-menu a:not(.oel-cta) {
    display: flex;
    align-items: center;
    min-height: 44px;
    font-size: 16px;
    color: var(--text);
  }

  .oel-menu a.oel-cta,
  .oel-menu a.oel-cta:visited {
    margin-top: 8px;
    height: 44px;
    color: var(--text);
    background: transparent;
  }

  .oel-hero,
  .oel-answers,
  .oel-demo,
  .oel-quick,
  .oel-roles,
  .oel-footer {
    grid-template-columns: 1fr;
  }

  .oel-hero { gap: 32px; padding-top: 48px; padding-bottom: 48px; }
  .oel-rows li,
  .oel-schedule li { grid-template-columns: 1fr; gap: 6px; }
}

@media (max-width: 560px) {
  .oel-header-bar,
  .oel-section,
  .oel-footer {
    padding-left: 20px;
    padding-right: 20px;
  }

  .oel-hero {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 36px;
    padding-bottom: 36px;
  }

  .oel-section { padding-top: 56px; padding-bottom: 64px; }
  .oel-dek { font-size: 16px; }
  .oel-hero h1 { font-size: 4.25rem; }
  .oel-filter,
  .oel-role-tab,
  .oel-chip { min-height: 44px; }
  .oel-form,
  .oel-quick { padding: 16px; }
  .oel-footer { grid-template-columns: 1fr; }
}

@media (prefers-reduced-motion: reduce) {
  .oel a,
  .oel button { transition: none; }
}
</style>
