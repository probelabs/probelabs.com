---
layout: page
title: Visor - Predictable Agent Workflows
---

<div class="ps-page">

<!-- Hero Section -->
<section class="hero">
  <div class="hero-bg">
    <div class="hero-gradient"></div>
    <div class="hero-grid"></div>
  </div>
  <div class="hero-container">
    <div class="hero-content">
      <div class="hero-badge"><span class="badge-dot"></span> Workflow Engine</div>
      <h1 class="hero-title">
        <span class="hero-title-main">Visor</span>
        <span class="hero-title-sub">Predictable agent automation</span>
      </h1>
      <p class="hero-subtitle">Define workflows in YAML and run them as graphs: branching, fan-out/fan-in, routing, bounded loops, and human-in-the-loop. Mix deterministic steps and AI steps, enforce schemas and quality gates, and trace every run with OpenTelemetry.</p>
      <div class="hero-badges">
        <span class="guarantee-badge">On-prem</span>
        <span class="guarantee-badge">Any Model</span>
        <span class="guarantee-badge">OpenTelemetry</span>
        <span class="guarantee-badge">MCP Tools</span>
        <span class="guarantee-badge">Open Source</span>
      </div>
      <div class="hero-cta">
        <a href="https://github.com/probelabs/visor/tree/main/examples" class="btn btn-primary"><span>View Examples</span> <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3.33 8h9.34M8.67 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
        <a href="https://github.com/probelabs/visor" class="btn btn-secondary">Read Docs</a>
      </div>
      <p class="hero-microcopy">Predictable means workflow behavior: same steps, same gates, same visibility—across teams and repos.</p>
    </div>
    <div class="hero-visual">
      <div class="workflow-diagram">
        <div class="diagram-header">
          <span class="diagram-dot"></span>
          <span class="diagram-dot"></span>
          <span class="diagram-dot"></span>
          <span class="diagram-title">workflow.yaml</span>
        </div>
        <div class="diagram-content">
          <div class="diagram-section">
            <div class="diagram-label">Trigger</div>
            <div class="diagram-code"><code>PR opened, Slack thread, webhook, schedule</code></div>
          </div>
          <div class="diagram-arrow"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
          <div class="diagram-section diagram-section-agent">
            <div class="diagram-label">Execute Steps</div>
            <div class="diagram-code"><code>AI + MCP + GitHub + HTTP + shell</code><code>Schema validation + quality gates</code></div>
          </div>
          <div class="diagram-arrow"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
          <div class="diagram-section diagram-section-output">
            <div class="diagram-label">Observable Output</div>
            <div class="diagram-metrics">
              <div class="metric"><span class="metric-icon"><svg viewBox="0 0 16 16" fill="none"><path d="M13.5 2.5l-7 7-3-3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span>Traced</span></div>
              <div class="metric"><span class="metric-icon"><svg viewBox="0 0 16 16" fill="none"><path d="M13.5 2.5l-7 7-3-3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span>Validated</span></div>
              <div class="metric"><span class="metric-icon"><svg viewBox="0 0 16 16" fill="none"><path d="M13.5 2.5l-7 7-3-3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span>Reproducible</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- What You Can Build Section -->
<section class="section section-usecases">
  <div class="container">
    <div class="section-header">
      <span class="section-label">Use Cases</span>
      <h2>Workflows You Can Ship—Not Prompts You Hope Behave</h2>
    </div>
    <div class="usecases-grid">
      <div class="usecase-card">
        <div class="usecase-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6h3a2 2 0 0 1 2 2v7"/><line x1="6" y1="9" x2="6" y2="21"/></svg></div>
        <h3>PR Automation</h3>
        <p>Structured PR overview, architecture/security review, labels/comments—schema validated, repeatable.</p>
      </div>
      <div class="usecase-card">
        <div class="usecase-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></div>
        <h3>Issue Triage</h3>
        <p>Auto-categorize issues, propose answers, ask follow-up questions, route to the right workflow.</p>
      </div>
      <div class="usecase-card">
        <div class="usecase-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div>
        <h3>Slack Assistant</h3>
        <p>Support/PM/QA can query source-of-truth context, generate escalation packets, and follow runbooks.</p>
      </div>
      <div class="usecase-card">
        <div class="usecase-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg></div>
        <h3>Webhooks + Control Plane</h3>
        <p>Run workflows from inbound endpoints (deploy hooks, incident hooks)—not only GitHub events.</p>
      </div>
      <div class="usecase-card">
        <div class="usecase-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg></div>
        <h3>Cross-Repo Analysis</h3>
        <p>Fan out to multiple repos/services, run per-repo analysis, aggregate results, enforce policy gates.</p>
      </div>
      <div class="usecase-card">
        <div class="usecase-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
        <h3>Scheduled Audits</h3>
        <p>Nightly security audits and periodic health checks with consistent reporting and traceability.</p>
      </div>
    </div>
  </div>
</section>

<!-- Core Primitives Section -->
<section class="section section-primitives">
  <div class="container">
    <div class="section-header">
      <span class="section-label">Core Primitives</span>
      <h2>How Visor Stays Predictable</h2>
    </div>
    <div class="primitives-intro">
      <p>Visor is built around explicit control. You define what can happen, what can be called, what outputs must look like, and what happens when a step fails. No hidden glue code.</p>
    </div>
    <div class="primitives-grid">
      <div class="primitive-card">
        <h3>Config-first workflows</h3>
        <p>One YAML defines steps, routing, schemas, templates, and outputs.</p>
      </div>
      <div class="primitive-card">
        <h3>Graph execution</h3>
        <p>Dependencies, fan-out, fan-in, routing, and bounded loops are first-class.</p>
      </div>
      <div class="primitive-card">
        <h3>Deterministic artifacts</h3>
        <p>Schemas + templates produce stable outputs for humans and machines.</p>
      </div>
      <div class="primitive-card">
        <h3>Multi-provider steps</h3>
        <p>AI, GitHub, HTTP, shell, MCP tools, memory, and reusable sub-workflows.</p>
      </div>
      <div class="primitive-card">
        <h3>Stateful runs</h3>
        <p>Built-in memory namespaces and isolated run state without external DBs.</p>
      </div>
      <div class="primitive-card">
        <h3>Observability by default</h3>
        <p>OpenTelemetry traces + log correlation (trace_id/span_id).</p>
      </div>
      <div class="primitive-card">
        <h3>Testable workflows</h3>
        <p>Validate behavior with fixtures/mocks before rolling workflows out.</p>
      </div>
    </div>
    <p class="primitives-callout">AI is a step—not the system.</p>
  </div>
</section>

<!-- Why Visor vs CI Section -->
<section class="section section-comparison">
  <div class="container">
    <div class="section-header">
      <span class="section-label">The Difference</span>
      <h2>CI Is Great for Builds. Visor Is Built for Agent Workflows.</h2>
    </div>
    <div class="comparison-intro">
      <p>CI tools are optimized for building, testing, and deploying code. Visor is optimized for governed automation across teams and tools—where you need routing, human-in-loop, validated outputs, and auditable runs.</p>
    </div>
    <div class="comparison-grid">
      <div class="comparison-col comparison-common">
        <h3>CI Pipelines</h3>
        <ul>
          <li>Optimized for build/test/deploy</li>
          <li>Linear or matrix execution</li>
          <li>Exit codes as signals</li>
          <li>Logs for debugging</li>
        </ul>
      </div>
      <div class="comparison-col comparison-visor">
        <h3>Visor Workflows</h3>
        <ul>
          <li>Control flow is explicit: routing and loops are defined and bounded</li>
          <li>Outputs are guaranteed: schemas enforce structure</li>
          <li>Frontends are first-class: GitHub, Slack, webhooks, schedules</li>
          <li>Tool usage is auditable: tools are declared and traceable</li>
          <li>Runs are reproducible: state is isolated, testable like code</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- Example Walkthrough Section -->
<section class="section section-example">
  <div class="container">
    <div class="section-header">
      <span class="section-label">Example</span>
      <h2>A Single YAML That Demonstrates the Core Benefits</h2>
      <p class="section-desc">This example shows composition, observability, state, frontends, safe loops, MCP tools, GitHub automation, and more—all in one file.</p>
    </div>
    <div class="example-layout">
      <div class="example-yaml">
        <div class="yaml-block">
          <div class="yaml-header">
            <span class="yaml-dot"></span>
            <span class="yaml-dot"></span>
            <span class="yaml-dot"></span>
            <span class="yaml-title">pr-review.yaml</span>
          </div>
          <div class="yaml-content"><pre><code><span class="yk">extends:</span> <span class="yv">[default, ./environments/prod.yaml]</span>
<span class="yk">telemetry:</span> <span class="yv">{ enabled: true }</span>
<span class="yk">routing:</span> <span class="yv">{ max_loops: 6 }</span>
<span class="yk">slack:</span> <span class="yv">{ threads: required }</span>
<span class="yk">steps:</span>
  <span class="yk">pr-overview:</span>
    <span class="yk">type:</span> <span class="yv">ai</span>
    <span class="yk">on:</span> <span class="yv">[pr_opened, pr_updated]</span>
    <span class="yk">schema:</span> <span class="yv">overview</span>
    <span class="yk">prompt:</span> <span class="yv">Summarize the PR in 5 bullets.</span>
  <span class="yk">lint-fix:</span>
    <span class="yk">type:</span> <span class="yv">command</span>
    <span class="yk">exec:</span> <span class="yv">"npm run lint -- --fix"</span>
    <span class="yk">on_fail:</span> <span class="yv">{ run: [lint-remediate] }</span>
  <span class="yk">lint-remediate:</span>
    <span class="yk">type:</span> <span class="yv">claude-code</span>
    <span class="yk">depends_on:</span> <span class="yv">[lint-fix]</span>
    <span class="yk">allowedTools:</span> <span class="yv">[Read, Edit]</span>
    <span class="yk">maxTurns:</span> <span class="yv">3</span>
    <span class="yk">prompt:</span> <span class="yv">|</span>
      <span class="yv">Fix the lint errors below:</span>
      <span class="yv">&#123;&#123; outputs['lint-fix'].stderr &#125;&#125;</span>
  <span class="yk">security-scan:</span>
    <span class="yk">type:</span> <span class="yv">mcp</span>
    <span class="yk">command:</span> <span class="yv">npx</span>
    <span class="yk">args:</span> <span class="yv">["-y", "@semgrep/mcp"]</span>
    <span class="yk">method:</span> <span class="yv">scan</span>
  <span class="yk">trusted-note:</span>
    <span class="yk">type:</span> <span class="yv">github</span>
    <span class="yk">if:</span> <span class="yv">"hasMinPermission('MEMBER')"</span>
    <span class="yk">op:</span> <span class="yv">comment.create</span>
  <span class="yk">nightly-audit:</span>
    <span class="yk">type:</span> <span class="yv">ai</span>
    <span class="yk">schedule:</span> <span class="yv">"0 2 * * *"</span>
    <span class="yk">schema:</span> <span class="yv">code-review</span></code></pre></div>
        </div>
      </div>
      <div class="example-callouts">
        <div class="callout-card">
          <div class="callout-number">1</div>
          <h4>Composition + environments</h4>
          <p><code>extends</code> layers org defaults, team overrides, and env-specific config.</p>
        </div>
        <div class="callout-card">
          <div class="callout-number">2</div>
          <h4>MCP tool integration</h4>
          <p>Native Semgrep, custom tools, and any MCP server—declared and auditable.</p>
        </div>
        <div class="callout-card">
          <div class="callout-number">3</div>
          <h4>Permission gating</h4>
          <p><code>hasMinPermission('MEMBER')</code> restricts steps to trusted contributors.</p>
        </div>
        <div class="callout-card">
          <div class="callout-number">4</div>
          <h4>Scheduled + event-driven</h4>
          <p>PR events, Slack threads, webhooks, and cron schedules in one workflow.</p>
        </div>
        <div class="callout-card">
          <div class="callout-number">5</div>
          <h4>Schema-validated AI</h4>
          <p>AI steps return structured JSON that validates against <code>schema: overview</code>.</p>
        </div>
        <div class="callout-card">
          <div class="callout-number">6</div>
          <h4>Safe remediation loops</h4>
          <p><code>on_fail</code> triggers Claude Code with linter output—bounded tools, max turns, traceable.</p>
        </div>
      </div>
    </div>
    <div class="example-cta">
      <a href="https://github.com/probelabs/visor/tree/main/examples" class="btn btn-secondary">Open Full Example YAML</a>
      <a href="https://github.com/probelabs/visor/tree/main/examples" class="btn btn-ghost">See More Examples</a>
    </div>
  </div>
</section>

<!-- Safety & Governance Section -->
<section class="section section-governance">
  <div class="container">
    <div class="section-header">
      <span class="section-label">Governance</span>
      <h2>Teams Own Workflows. Leadership Owns Predictability.</h2>
    </div>
    <div class="governance-intro">
      <p>Visor is designed for organizations where different teams own different services—and still need to execute as one system.</p>
    </div>
    <div class="governance-grid">
      <div class="governance-card">
        <h3>Org-wide standards via composition</h3>
        <p>Keep defaults in one place; override per team/env via <code>extends</code>.</p>
      </div>
      <div class="governance-card">
        <h3>Policy gates for critical workflows</h3>
        <p>Fail fast on violations (<code>fail_if</code>), route failures deterministically, require human approval when needed.</p>
      </div>
      <div class="governance-card">
        <h3>Permission-aware automation</h3>
        <p>Gate actions (<code>hasMinPermission('MEMBER')</code>) so workflows stay safe.</p>
      </div>
      <div class="governance-card">
        <h3>Bounded control plane</h3>
        <p>Retries and loops are capped; "self-healing" is deterministic and observable.</p>
      </div>
    </div>
    <p class="governance-callout">This is how you scale automation without centralizing every decision.</p>
  </div>
</section>

<!-- Observability Section -->
<section class="section section-observability">
  <div class="container">
    <div class="section-header">
      <span class="section-label">Observability</span>
      <h2>Every Run Is Traceable</h2>
    </div>
    <div class="observability-content">
      <p class="observability-intro">Visor emits OpenTelemetry traces and correlates logs for every step. You can answer "what happened?" with evidence, not guesswork.</p>
      <div class="trace-preview">
        <div class="trace-header">
          <span class="trace-title">Run Trace</span>
          <span class="trace-id">run_id: abc-123-def</span>
        </div>
        <div class="trace-list">
          <div class="trace-item trace-ok">
            <span class="trace-name">pr-review.checkout</span>
            <span class="trace-time">1.2s</span>
            <span class="trace-status">ok</span>
          </div>
          <div class="trace-item trace-ok">
            <span class="trace-name">pr-review.analyze</span>
            <span class="trace-time">3.4s</span>
            <span class="trace-status">ok</span>
          </div>
          <div class="trace-item trace-ok">
            <span class="trace-name">pr-review.review</span>
            <span class="trace-time">8.7s</span>
            <span class="trace-status">ok</span>
          </div>
          <div class="trace-item trace-retry">
            <span class="trace-name">pr-review.validate</span>
            <span class="trace-time">0.3s</span>
            <span class="trace-status">retry</span>
          </div>
          <div class="trace-item trace-ok">
            <span class="trace-name">pr-review.validate (retry)</span>
            <span class="trace-time">0.2s</span>
            <span class="trace-status">ok</span>
          </div>
          <div class="trace-item trace-ok">
            <span class="trace-name">pr-review.post</span>
            <span class="trace-time">0.8s</span>
            <span class="trace-status">ok</span>
          </div>
        </div>
      </div>
      <ul class="observability-list">
        <li>Workflow version + run_id</li>
        <li>Step timings + retries + loop iterations</li>
        <li>Tool/MCP invocations (what was allowed vs used)</li>
        <li>Schema validation pass/fail</li>
        <li>Produced artifacts (PR comments, labels, webhook payloads)</li>
      </ul>
    </div>
  </div>
</section>

<!-- Testing & CI Section -->
<section class="section section-testing">
  <div class="container">
    <div class="section-header">
      <span class="section-label">Testing</span>
      <h2>Built-in Test Framework—Tests Live With Your Workflows</h2>
    </div>
    <div class="testing-content">
      <p>Visor includes an integration test framework. Write tests in the same YAML as your workflows, run them in CI, and catch regressions before they hit production.</p>
      <div class="testing-layout">
        <div class="testing-example">
          <div class="yaml-block">
            <div class="yaml-header">
              <span class="yaml-dot"></span>
              <span class="yaml-dot"></span>
              <span class="yaml-dot"></span>
              <span class="yaml-title">pr-review.test.yaml</span>
            </div>
            <div class="yaml-content"><pre><code><span class="yk">tests:</span>
  <span class="yk">pr-overview-returns-schema:</span>
    <span class="yk">trigger:</span>
      <span class="yk">event:</span> <span class="yv">pr_opened</span>
      <span class="yk">fixture:</span> <span class="yv">./fixtures/small-pr.json</span>
    <span class="yk">mock:</span>
      <span class="yk">ai:</span> <span class="yv">./mocks/overview-response.json</span>
    <span class="yk">assert:</span>
      <span class="yv">- "outputs['pr-overview'].bullets.length === 5"</span>
      <span class="yv">- "outputs['pr-overview'].risk != null"</span>
  <span class="yk">lint-fix-retries-on-fail:</span>
    <span class="yk">trigger:</span>
      <span class="yk">event:</span> <span class="yv">pr_opened</span>
    <span class="yk">mock:</span>
      <span class="yk">command:</span> <span class="yv">{ exitCode: 1, then: 0 }</span>
    <span class="yk">assert:</span>
      <span class="yv">- "steps['lint-fix'].retries === 1"</span>
      <span class="yv">- "steps['lint-fix'].status === 'ok'"</span></code></pre></div>
          </div>
        </div>
        <div class="testing-features">
          <div class="testing-card">
            <h3>Fixtures + mocks</h3>
            <p>Simulate PR payloads, AI responses, and command outputs without calling real services.</p>
          </div>
          <div class="testing-card">
            <h3>Assertions on outputs</h3>
            <p>Verify schema shapes, step statuses, retry counts, and routing decisions.</p>
          </div>
          <div class="testing-card">
            <h3>Run in CI</h3>
            <p><code>visor test ./workflows/</code> runs all tests and fails the build on regressions.</p>
          </div>
          <div class="testing-card">
            <h3>Replay production runs</h3>
            <p>Capture real inputs, replay them in tests, and assert the same outputs.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Providers Section -->
<section class="section section-providers">
  <div class="container">
    <div class="section-header">
      <span class="section-label">Integrations</span>
      <h2>Mix Providers in One Workflow</h2>
    </div>
    <div class="providers-intro">
      <p>In your YAML you're already combining multiple "providers" (step types) in a single run.</p>
    </div>
    <div class="providers-grid">
      <div class="provider-chip">
        <span class="provider-icon">AI</span>
        <span class="provider-name">ai</span>
        <span class="provider-desc">Schema outputs, session reuse</span>
      </div>
      <div class="provider-chip">
        <span class="provider-icon">CC</span>
        <span class="provider-name">claude-code</span>
        <span class="provider-desc">Tool-scoped reasoning</span>
      </div>
      <div class="provider-chip">
        <span class="provider-icon">MCP</span>
        <span class="provider-name">mcp</span>
        <span class="provider-desc">Semgrep, internal servers</span>
      </div>
      <div class="provider-chip">
        <span class="provider-icon">GH</span>
        <span class="provider-name">github</span>
        <span class="provider-desc">Labels, comments, PR ops</span>
      </div>
      <div class="provider-chip">
        <span class="provider-icon">HTTP</span>
        <span class="provider-name">http</span>
        <span class="provider-desc">Webhooks + polling</span>
      </div>
      <div class="provider-chip">
        <span class="provider-icon">CMD</span>
        <span class="provider-name">command</span>
        <span class="provider-desc">Deterministic shell steps</span>
      </div>
      <div class="provider-chip">
        <span class="provider-icon">GIT</span>
        <span class="provider-name">git-checkout</span>
        <span class="provider-desc">Isolated repo checkouts</span>
      </div>
      <div class="provider-chip">
        <span class="provider-icon">HI</span>
        <span class="provider-name">human-input</span>
        <span class="provider-desc">Supervised flows via Slack/CLI</span>
      </div>
      <div class="provider-chip">
        <span class="provider-icon">MEM</span>
        <span class="provider-name">memory</span>
        <span class="provider-desc">State without external DB</span>
      </div>
      <div class="provider-chip">
        <span class="provider-icon">WF</span>
        <span class="provider-name">workflow</span>
        <span class="provider-desc">Import and reuse workflows</span>
      </div>
    </div>
    <p class="providers-callout">You can keep AI steps narrow and predictable—most reliability comes from the workflow design.</p>
  </div>
</section>

<!-- Get Started Section -->
<section class="section section-getstarted">
  <div class="container">
    <div class="section-header">
      <span class="section-label">Get Started</span>
      <h2>Try Visor Locally, Then Deploy the Same YAML</h2>
    </div>
    <div class="getstarted-grid">
      <div class="getstarted-card">
        <div class="getstarted-number">1</div>
        <h3>Run the example YAML</h3>
        <p>Clone the repo and run <code>examples/pr-review.yaml</code> locally.</p>
      </div>
      <div class="getstarted-card">
        <div class="getstarted-number">2</div>
        <h3>Turn on GitHub automation</h3>
        <p>Enable issues + PR workflows with a GitHub App.</p>
      </div>
      <div class="getstarted-card">
        <div class="getstarted-number">3</div>
        <h3>Run a Slack bot locally</h3>
        <p>Same pipeline, easier debugging.</p>
      </div>
    </div>
    <div class="getstarted-cta">
      <a href="https://github.com/probelabs/visor/tree/main/examples" class="btn btn-primary"><span>View Examples</span> <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3.33 8h9.34M8.67 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
      <a href="https://github.com/probelabs/visor" class="btn btn-secondary">Read Docs</a>
    </div>
  </div>
</section>

<!-- FAQ Section -->
<section class="section section-faq">
  <div class="container">
    <div class="section-header">
      <span class="section-label">FAQ</span>
      <h2>Common Questions</h2>
    </div>
    <div class="faq-grid">
      <div class="faq-item">
        <h3>Is Visor "deterministic AI"?</h3>
        <p>No. Visor makes the workflow behavior deterministic: explicit steps, constrained tools, validated outputs, bounded loops, and traceability. AI is a controlled step inside that system.</p>
      </div>
      <div class="faq-item">
        <h3>Does this replace CI?</h3>
        <p>Not necessarily. CI is still great for builds/tests/deploys. Visor complements CI when you need routing, human-in-loop, multi-provider automation, schema outputs, and observable agent workflows.</p>
      </div>
      <div class="faq-item">
        <h3>How do you prevent "one mega-agent with 100 tools"?</h3>
        <p>Workflows declare tools and MCP servers explicitly. AI steps can disable tools entirely or run with allowlists. Tool usage is auditable.</p>
      </div>
      <div class="faq-item">
        <h3>How do teams customize without breaking standards?</h3>
        <p>Use <code>extends</code> and imports: org defaults live centrally, teams override per environment or repo. Policy gates enforce what must remain true.</p>
      </div>
      <div class="faq-item">
        <h3>Can we run this on-prem and use our preferred model?</h3>
        <p>Yes—Visor is designed to run on your infrastructure and to support provider/model choice (the workflow defines what you use).</p>
      </div>
      <div class="faq-item">
        <h3>How do we observe and debug runs?</h3>
        <p>OpenTelemetry tracing + log correlation are built-in (<code>telemetry.enabled</code>). You can inspect step timings, retries, loop iterations, and validation outcomes.</p>
      </div>
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="section section-cta">
  <div class="container">
    <div class="cta-card">
      <h2>Build Workflows You Can Trust—and Prove</h2>
      <p>If you're moving toward agent-first development, Visor gives you the control plane: explicit steps, schemas, bounded loops, and full observability—so automation scales without chaos.</p>
      <div class="cta-buttons">
        <a href="https://github.com/probelabs/visor/tree/main/examples" class="btn btn-primary btn-lg"><span>View Examples</span><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3.33 8h9.34M8.67 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
        <a href="https://cal.com/leonid-bugaev/30min" class="btn btn-secondary">Book a Demo</a>
        <a href="https://github.com/probelabs/visor" class="btn btn-ghost">Read Docs</a>
      </div>
    </div>
  </div>
</section>

</div>

<style>
/* ========================================
   Visor Page - Page-Specific Styles
   Shared styles come from product-solution.css
   ======================================== */

/* VitePress Overrides */
.VPContent.has-sidebar {
  padding-left: 0 !important;
  padding-right: 0 !important;
}

.VPDoc.has-sidebar .content-container {
  max-width: 100% !important;
}

/* ========================================
   Page-Specific: Use Cases Section
   ======================================== */

.ps-page .section-usecases {
  background: var(--c-bg-subtle);
}

/* ========================================
   Page-Specific: Primitives Section
   ======================================== */

.ps-page .section-primitives {
  background: var(--c-bg);
}

.ps-page .primitives-intro {
  text-align: center;
  max-width: 700px;
  margin: 0 auto var(--space-2xl);
}

.ps-page .primitives-intro p {
  font-size: 1.125rem;
  color: var(--c-text-muted);
  line-height: 1.7;
}

.ps-page .primitives-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-lg);
  margin-bottom: var(--space-2xl);
}

.ps-page .primitive-card {
  padding: var(--space-lg);
  background: var(--c-bg-subtle);
  border: 1px solid var(--c-border);
  border-radius: var(--radius-md);
  transition: border-color 0.2s;
}

.ps-page .primitive-card:hover {
  border-color: var(--c-primary-border);
}

.ps-page .primitive-card h3 {
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--c-text);
  margin: 0 0 var(--space-sm);
}

.ps-page .primitive-card p {
  font-size: 0.875rem;
  color: var(--c-text-muted);
  margin: 0;
  line-height: 1.5;
}

.ps-page .primitives-callout {
  text-align: center;
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--c-primary);
}

/* ========================================
   Page-Specific: Comparison Section
   ======================================== */

.ps-page .section-comparison {
  background: var(--c-bg-subtle);
}

.ps-page .comparison-intro {
  text-align: center;
  max-width: 700px;
  margin: 0 auto var(--space-2xl);
}

.ps-page .comparison-intro p {
  font-size: 1.125rem;
  color: var(--c-text-muted);
  line-height: 1.7;
}

.ps-page .comparison-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-xl);
  max-width: 900px;
  margin: 0 auto;
}

.ps-page .comparison-col {
  padding: var(--space-xl);
  border-radius: var(--radius-lg);
}

.ps-page .comparison-common {
  background: var(--c-bg);
  border: 1px solid var(--c-border);
}

.ps-page .comparison-visor {
  background: var(--c-primary-bg);
  border: 1px solid var(--c-primary-border);
}

.ps-page .comparison-col h3 {
  font-size: 1rem;
  font-weight: 600;
  color: var(--c-text);
  margin: 0 0 var(--space-lg);
}

.ps-page .comparison-col ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.ps-page .comparison-col li {
  font-size: 0.9375rem;
  color: var(--c-text-muted);
  padding: var(--space-sm) 0;
  padding-left: 1.25rem;
  position: relative;
  line-height: 1.5;
}

.ps-page .comparison-col li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.75em;
  width: 6px;
  height: 6px;
  border-radius: 50%;
}

.ps-page .comparison-common li::before {
  background: var(--c-border);
}

.ps-page .comparison-visor li::before {
  background: var(--c-primary);
}

/* ========================================
   Page-Specific: Example Section
   ======================================== */

.ps-page .section-example {
  background: var(--c-bg);
}

.ps-page .example-layout {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: var(--space-2xl);
  align-items: start;
}

.ps-page .yaml-block {
  background: var(--c-bg);
  border: 1px solid var(--c-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
}

.ps-page .yaml-header {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0.75rem 1rem;
  background: var(--c-bg-muted);
  border-bottom: 1px solid var(--c-border);
}

.ps-page .yaml-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.ps-page .yaml-dot:nth-child(1) { background: #ff5f57; }
.ps-page .yaml-dot:nth-child(2) { background: #febc2e; }
.ps-page .yaml-dot:nth-child(3) { background: #28c840; }

.ps-page .yaml-title {
  margin-left: auto;
  font-size: 0.75rem;
  font-family: var(--font-mono);
  color: var(--c-text-subtle);
}

.ps-page .yaml-content {
  padding: var(--space-lg);
  overflow-x: auto;
}

.ps-page .yaml-content pre {
  margin: 0;
  background: transparent;
}

.ps-page .yaml-content code {
  font-family: var(--font-mono);
  font-size: 0.8125rem;
  line-height: 1.7;
}

/* YAML syntax highlighting */
.ps-page .yk { color: var(--c-primary); }
.ps-page .yv { color: var(--c-text-muted); }

.ps-page .example-callouts {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.ps-page .example-cta {
  text-align: center;
  margin-top: var(--space-2xl);
  display: flex;
  justify-content: center;
  gap: var(--space-md);
}

/* ========================================
   Page-Specific: Governance Section
   ======================================== */

.ps-page .section-governance {
  background: var(--c-bg-subtle);
}

.ps-page .governance-intro {
  text-align: center;
  max-width: 700px;
  margin: 0 auto var(--space-2xl);
}

.ps-page .governance-intro p {
  font-size: 1.125rem;
  color: var(--c-text-muted);
  line-height: 1.7;
}

.ps-page .governance-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-lg);
  max-width: 900px;
  margin: 0 auto var(--space-2xl);
}

.ps-page .governance-card {
  padding: var(--space-xl);
  background: var(--c-bg);
  border: 1px solid var(--c-border);
  border-radius: var(--radius-lg);
}

.ps-page .governance-card h3 {
  font-size: 1rem;
  font-weight: 600;
  color: var(--c-text);
  margin: 0 0 var(--space-sm);
}

.ps-page .governance-card p {
  font-size: 0.9375rem;
  color: var(--c-text-muted);
  margin: 0;
  line-height: 1.6;
}

.ps-page .governance-callout {
  text-align: center;
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--c-primary);
}

/* ========================================
   Page-Specific: Observability Section
   ======================================== */

.ps-page .section-observability {
  background: var(--c-bg);
}

.ps-page .observability-content {
  max-width: 800px;
  margin: 0 auto;
}

.ps-page .observability-intro {
  font-size: 1.125rem;
  color: var(--c-text-muted);
  text-align: center;
  margin-bottom: var(--space-2xl);
  line-height: 1.7;
}

.ps-page .trace-preview {
  background: var(--c-bg-subtle);
  border: 1px solid var(--c-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  margin-bottom: var(--space-2xl);
}

.ps-page .trace-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-md) var(--space-lg);
  background: var(--c-bg-muted);
  border-bottom: 1px solid var(--c-border);
}

.ps-page .trace-title {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--c-text);
}

.ps-page .trace-id {
  font-size: 0.75rem;
  font-family: var(--font-mono);
  color: var(--c-text-subtle);
}

.ps-page .trace-list {
  padding: var(--space-md);
}

.ps-page .trace-item {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  padding: var(--space-sm) var(--space-md);
  border-radius: var(--radius-sm);
  margin-bottom: var(--space-xs);
}

.ps-page .trace-item:last-child {
  margin-bottom: 0;
}

.ps-page .trace-ok {
  background: var(--c-primary-bg);
}

.ps-page .trace-retry {
  background: #fef3c7;
}

.ps-page .trace-name {
  flex: 1;
  font-size: 0.8125rem;
  font-family: var(--font-mono);
  color: var(--c-text);
}

.ps-page .trace-time {
  font-size: 0.75rem;
  font-family: var(--font-mono);
  color: var(--c-text-subtle);
}

.ps-page .trace-status {
  font-size: 0.6875rem;
  font-weight: 600;
  text-transform: uppercase;
  padding: 2px 8px;
  border-radius: 4px;
}

.ps-page .trace-ok .trace-status {
  background: var(--c-primary);
  color: white;
}

.ps-page .trace-retry .trace-status {
  background: #f59e0b;
  color: white;
}

.ps-page .observability-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-sm);
}

.ps-page .observability-list li {
  font-size: 0.9375rem;
  color: var(--c-text-muted);
  padding-left: 1.25rem;
  position: relative;
}

.ps-page .observability-list li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.5em;
  width: 6px;
  height: 6px;
  background: var(--c-primary);
  border-radius: 50%;
}

/* ========================================
   Page-Specific: Testing Section
   ======================================== */

.ps-page .section-testing {
  background: var(--c-bg-subtle);
}

.ps-page .testing-content {
  max-width: 1000px;
  margin: 0 auto;
}

.ps-page .testing-content > p {
  text-align: center;
  font-size: 1.125rem;
  color: var(--c-text-muted);
  margin-bottom: var(--space-2xl);
  line-height: 1.7;
}

.ps-page .testing-layout {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: var(--space-2xl);
  align-items: start;
}

.ps-page .testing-features {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-md);
}

.ps-page .testing-card {
  padding: var(--space-lg);
  background: var(--c-bg);
  border: 1px solid var(--c-border);
  border-radius: var(--radius-md);
}

.ps-page .testing-card h3 {
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--c-text);
  margin: 0 0 var(--space-xs);
}

.ps-page .testing-card p {
  font-size: 0.875rem;
  color: var(--c-text-muted);
  margin: 0;
  line-height: 1.5;
}

/* ========================================
   Page-Specific: Providers Section
   ======================================== */

.ps-page .section-providers {
  background: var(--c-bg);
}

.ps-page .providers-intro {
  text-align: center;
  max-width: 600px;
  margin: 0 auto var(--space-2xl);
}

.ps-page .providers-intro p {
  font-size: 1.125rem;
  color: var(--c-text-muted);
}

.ps-page .providers-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: var(--space-md);
  margin-bottom: var(--space-2xl);
}

.ps-page .provider-chip {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: var(--space-lg);
  background: var(--c-bg-subtle);
  border: 1px solid var(--c-border);
  border-radius: var(--radius-md);
  transition: border-color 0.2s;
}

.ps-page .provider-chip:hover {
  border-color: var(--c-primary-border);
}

.ps-page .provider-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--c-primary);
  color: white;
  font-size: 0.75rem;
  font-weight: 700;
  border-radius: var(--radius-sm);
  margin-bottom: var(--space-sm);
}

.ps-page .provider-name {
  font-size: 0.8125rem;
  font-weight: 600;
  font-family: var(--font-mono);
  color: var(--c-text);
  margin-bottom: var(--space-xs);
}

.ps-page .provider-desc {
  font-size: 0.75rem;
  color: var(--c-text-muted);
  line-height: 1.4;
}

.ps-page .providers-callout {
  text-align: center;
  font-size: 1rem;
  color: var(--c-text-muted);
  font-style: italic;
}

/* ========================================
   Page-Specific: Get Started Section
   ======================================== */

.ps-page .section-getstarted {
  background: var(--c-bg-subtle);
}

.ps-page .getstarted-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-lg);
  margin-bottom: var(--space-2xl);
}

.ps-page .getstarted-card {
  padding: var(--space-xl);
  background: var(--c-bg);
  border: 1px solid var(--c-border);
  border-radius: var(--radius-lg);
  text-align: center;
}

.ps-page .getstarted-number {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--c-primary);
  color: white;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 50%;
  margin: 0 auto var(--space-lg);
}

.ps-page .getstarted-card h3 {
  font-size: 1rem;
  font-weight: 600;
  color: var(--c-text);
  margin: 0 0 var(--space-sm);
}

.ps-page .getstarted-card p {
  font-size: 0.9375rem;
  color: var(--c-text-muted);
  margin: 0;
  line-height: 1.6;
}

.ps-page .getstarted-cta {
  text-align: center;
  display: flex;
  justify-content: center;
  gap: var(--space-md);
}

/* ========================================
   Page-Specific: FAQ Section
   ======================================== */

.ps-page .section-faq {
  background: var(--c-bg);
}

/* ========================================
   Page-Specific: CTA Section
   ======================================== */

.ps-page .section-cta {
  background: var(--c-bg-subtle);
}

.ps-page .cta-card {
  text-align: center;
  padding: var(--space-3xl);
  background: var(--c-primary-bg);
  border: 1px solid var(--c-primary-border);
  border-radius: var(--radius-xl);
}

.ps-page .cta-card h2 {
  font-family: var(--font-display);
  font-size: 1.75rem;
  font-weight: 700;
  margin: 0 0 var(--space-md);
  color: var(--c-text);
}

.ps-page .cta-card > p {
  font-size: 1.125rem;
  color: var(--c-text-muted);
  margin: 0 0 var(--space-xl);
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.7;
}

/* ========================================
   Page-Specific: Responsive
   ======================================== */

@media (max-width: 1024px) {
  .ps-page .primitives-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .ps-page .comparison-grid {
    grid-template-columns: 1fr;
  }

  .ps-page .example-layout {
    grid-template-columns: 1fr;
  }

  .ps-page .testing-layout {
    grid-template-columns: 1fr;
  }

  .ps-page .providers-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .ps-page .getstarted-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .ps-page .primitives-grid {
    grid-template-columns: 1fr;
  }

  .ps-page .governance-grid {
    grid-template-columns: 1fr;
  }

  .ps-page .observability-list {
    grid-template-columns: 1fr;
  }

  .ps-page .providers-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .ps-page .example-cta {
    flex-direction: column;
    align-items: center;
  }

  .ps-page .getstarted-cta {
    flex-direction: column;
    align-items: center;
  }

  .ps-page .cta-card {
    padding: var(--space-xl);
  }
}
</style>
