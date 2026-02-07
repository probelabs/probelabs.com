<template>
  <div class="new-homepage">
    <!-- Navigation -->
    <nav class="nh-nav" :class="{ scrolled: isScrolled }">
      <div class="nh-nav-inner">
        <a href="/" class="nh-logo">
          <img src="/probe/logo.png" alt="Probe" class="nh-logo-img">
          <span class="nh-logo-text">Probe</span>
        </a>
        <div class="nh-nav-links">
          <!-- Platform Dropdown -->
          <div class="nh-dropdown" @mouseenter="openDropdown = 'platform'" @mouseleave="openDropdown = null">
            <button class="nh-nav-link" :class="{ active: openDropdown === 'platform' }">
              Platform
              <svg class="nh-dropdown-arrow" width="10" height="10" viewBox="0 0 10 10"><path d="M2 4l3 3 3-3" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>
            </button>
            <div class="nh-dropdown-menu" v-show="openDropdown === 'platform'">
              <div class="nh-dropdown-section">
                <div class="nh-dropdown-label">Engine</div>
                <a href="/probe" class="nh-dropdown-item">
                  <strong>Probe</strong>
                  <span>AI-native code search across enterprise codebases</span>
                </a>
                <a href="/visor" class="nh-dropdown-item">
                  <strong>Visor</strong>
                  <span>Deterministic workflow engine for agent automation</span>
                </a>
              </div>
              <div class="nh-dropdown-section">
                <div class="nh-dropdown-label">Tools</div>
                <a href="/maid" class="nh-dropdown-item">
                  <strong>Maid</strong>
                  <span>Fast Mermaid linter with auto-fix</span>
                </a>
                <a href="https://goreplay.org" class="nh-dropdown-item">
                  <strong>GoReplay</strong>
                  <span>Open-source traffic replay for testing</span>
                </a>
                <a href="/big-brain" class="nh-dropdown-item">
                  <strong>Big Brain</strong>
                  <span>Hand off stuck problems to smarter models</span>
                </a>
                <a href="/afk" class="nh-dropdown-item">
                  <strong>AFK</strong>
                  <span>Control Claude Code from your phone</span>
                </a>
                <a href="/vow" class="nh-dropdown-item">
                  <strong>Vow</strong>
                  <span>AI accountability gates for commits</span>
                </a>
                <a href="/memaris" class="nh-dropdown-item">
                  <strong>Memaris</strong>
                  <span>Persistent memory from past AI sessions</span>
                </a>
                <a href="/logoscope" class="nh-dropdown-item">
                  <strong>Logoscope</strong>
                  <span>AI-powered log analysis and insights</span>
                </a>
              </div>
            </div>
          </div>
          <!-- Solutions Dropdown -->
          <div class="nh-dropdown" @mouseenter="openDropdown = 'solutions'" @mouseleave="openDropdown = null">
            <button class="nh-nav-link" :class="{ active: openDropdown === 'solutions' }">
              Solutions
              <svg class="nh-dropdown-arrow" width="10" height="10" viewBox="0 0 10 10"><path d="M2 4l3 3 3-3" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>
            </button>
            <div class="nh-dropdown-menu nh-dropdown-menu--wide" v-show="openDropdown === 'solutions'">
              <div class="nh-dropdown-cols">
                <div class="nh-dropdown-section">
                  <div class="nh-dropdown-label">By Role</div>
                  <a href="/solutions/engineering-leadership" class="nh-dropdown-item">Engineering Leadership</a>
                  <a href="/solutions/platform-teams" class="nh-dropdown-item">Platform Teams</a>
                  <a href="/solutions/engineers" class="nh-dropdown-item">Engineers</a>
                  <a href="/solutions/non-technical" class="nh-dropdown-item">Product & Support</a>
                  <a href="/solutions/agencies" class="nh-dropdown-item">Agencies</a>
                  <a href="/solutions/enterprise" class="nh-dropdown-item">Enterprise</a>
                </div>
                <div class="nh-dropdown-section">
                  <div class="nh-dropdown-label">By Solution</div>
                  <a href="/docs/chat-with-code" class="nh-dropdown-item">Chat with Code</a>
                  <a href="/docs/code-review" class="nh-dropdown-item">Intelligent Code Review</a>
                  <a href="/docs/github-assistant" class="nh-dropdown-item">GitHub Assistant</a>
                  <a href="/docs/use-cases/visor-workflows" class="nh-dropdown-item">Workflow Automation</a>
                </div>
              </div>
            </div>
          </div>
          <a href="/pricing" class="nh-nav-link">Pricing</a>
          <a href="/docs" class="nh-nav-link">Docs</a>
        </div>
        <div class="nh-nav-actions">
          <a href="/docs/quick-start" class="nh-nav-link nh-nav-link--highlight">Quick Start</a>
          <a href="#demo-booking" class="nh-nav-btn">Book Demo</a>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <div class="nh-hero-wrapper">
    <section class="nh-hero">
      <div class="nh-hero-left">
        <h1>AI agent for your product</h1>
        <p class="nh-hero-sub">
          Your product lives across code, tickets, docs, and a dozen tools.
          Too much context for any one person.
        </p>
        <p class="nh-hero-sub nh-hero-punch">
          Probe holds the full picture.
          <span class="nh-hero-verbs">Chat. Debug. Plan. Review. Automate.</span>
        </p>
        <div class="nh-hero-ctas">
          <a href="#how" class="nh-btn filled">Why Probe &rarr;</a>
          <a href="https://cal.com/leonid-bugaev/30min" class="nh-btn">Talk to a human</a>
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
        <h2>What teams actually ask Probe</h2>
        <p>Real prompts. Real answers. From a production deployment across engineering, product, QA, support, legal, and HR. DM it, invite it to channels and threads, or mention it anywhere your team already works.</p>
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
      <div class="nh-chats-scroll" v-if="!activeChatFilter">
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

    <!-- Testimonials Section (Enhanced) -->
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

    <!-- Demo Booking Section -->
    <section class="nh-demo-booking nh-reveal" id="demo-booking">
      <div class="nh-demo-booking-wrapper">
        <div class="nh-demo-booking-content">
          <div class="nh-demo-booking-left">
            <h2>Book a technical demo</h2>
            <p>30 minutes, engineer-to-engineer. No sales fluff.</p>
            <ol class="nh-demo-agenda">
              <li>
                <strong>Live on your codebase</strong>
                <span>We'll run Probe against your actual repos—so you see real results, not canned demos.</span>
              </li>
              <li>
                <strong>Integration fit</strong>
                <span>MCP for AI editors, GitHub Actions, Slack bots, Web UI—we'll show what fits your stack.</span>
              </li>
              <li>
                <strong>Your setup path</strong>
                <span>Get a tailored plan to have Probe running in your org within 10 minutes of the call.</span>
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

    <!-- Why Probe Section -->
    <section class="nh-why nh-reveal" id="how">
      <div class="nh-why-wrapper">
        <div class="nh-why-header">
          <h2>Why Probe feels different</h2>
          <p>Probe isn't a finished product in the classical sense. It's an agent you co-own with your team — backed by process, not promises. Think OpenClaw, except built on enterprise-grade security standards and designed to scale across your whole org.</p>
        </div>
        <div class="nh-why-principles">
          <div class="nh-why-principle">
            <span class="nh-why-num">01</span>
            <div class="nh-why-content">
              <h3>Co-owned, not consumed</h3>
              <p>Probe isn't a product you subscribe to and hope works. It's a framework your team shapes — YAML workflows, custom integrations, your rules. Probe even knows how to extend itself. Under your control.</p>
            </div>
          </div>
          <div class="nh-why-principle">
            <span class="nh-why-num">02</span>
            <div class="nh-why-content">
              <h3>Process over trust</h3>
              <p>You can't trust AI. You can't trust humans either. So you turn everything into a process. Every process starts with accurate data and the right question. Probe helps with both.</p>
            </div>
          </div>
          <div class="nh-why-principle">
            <span class="nh-why-num">03</span>
            <div class="nh-why-content">
              <h3>Connects, then acts</h3>
              <p>It starts with your data sources — code, tickets, docs, Slack, wikis. Then it acts on your behalf — PRs, ticket updates, reviews, deployments. Claude Code? Just one building block of your master plan.</p>
            </div>
          </div>
          <div class="nh-why-principle">
            <span class="nh-why-num">04</span>
            <div class="nh-why-content">
              <h3>Accurate at any scale</h3>
              <p>Powered by a unique context engine that actually works on large projects. Million-line repos, hundreds of users. No scale limit, no accuracy trade-off.</p>
            </div>
          </div>
          <div class="nh-why-principle">
            <span class="nh-why-num">05</span>
            <div class="nh-why-content">
              <h3>Built for the AI age</h3>
              <p>A new type of product — designed to be used not just by humans but by other agents too. Your CI pipelines, Slack bots, and AI editors all talk to Probe as a first-class interface.</p>
            </div>
          </div>
          <div class="nh-why-principle">
            <span class="nh-why-num">06</span>
            <div class="nh-why-content">
              <h3>Enterprise-grade by default</h3>
              <p>On-prem deployment, any LLM provider, no vendor lock-in. GitOps workflows, OpenTelemetry traces, fault tolerance, governance, and security controls — not afterthoughts bolted on, but how it was built from day one.</p>
            </div>
          </div>
        </div>
        <div class="nh-why-footer">
          <div class="nh-why-tags">
            <span class="nh-why-tag">Open source foundation</span>
            <span class="nh-why-tag">Any LLM provider</span>
            <span class="nh-why-tag">No vendor lock-in</span>
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
          <h2>Different roles, same source of truth</h2>
          <p>Engineers, platform teams, QA, product, and leadership all get value — in different ways.</p>
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
      </div>
    </section>

    <!-- Use Cases Section -->
    <section class="nh-usecases nh-reveal">
      <div class="nh-usecases-wrapper">
        <div class="nh-usecases-header">
          <h2>Use cases & workflows</h2>
          <p>Direct entry points for teams, tools, and automation.</p>
        </div>
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
          <a href="/docs/use-cases/building-ai-tools" class="nh-usecase-tile">
            <h3>Developers & SDK</h3>
            <p>Build custom tooling on Probe. MCP server, CLI, and programmatic access.</p>
            <span class="nh-usecase-link">Learn more &rarr;</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Quick Wins Section -->
    <section class="nh-quickwins nh-reveal" id="quickwins">
      <div class="nh-quickwins-wrapper">
        <div class="nh-quickwins-header">
          <h2>Get started in 10 minutes</h2>
          <p>Real value, not demos. Pick any of these and have something running before your next meeting.</p>
        </div>
        <div class="nh-quickwin-tabs">
          <button
            v-for="(qw, index) in quickWins"
            :key="qw.id"
            @click="activeQuickWin = qw.id"
            :class="['nh-quickwin-tab', { active: activeQuickWin === qw.id }]"
          >
            <span class="nh-qw-num">{{ index + 1 }}</span>
            <span class="nh-qw-title">{{ qw.tabTitle }}</span>
            <span class="nh-qw-time">{{ qw.time }}</span>
          </button>
        </div>
        <div class="nh-quickwin-content">
          <div class="nh-quickwin-left">
            <h3>{{ currentQuickWin.title }}</h3>
            <p>{{ currentQuickWin.desc }}</p>
            <div class="nh-quickwin-result">
              <strong>You get:</strong> {{ currentQuickWin.result }}
            </div>
            <a :href="currentQuickWin.link" class="nh-quickwin-link">{{ currentQuickWin.linkText }} &rarr;</a>
          </div>
          <div class="nh-quickwin-right">
            <div class="nh-quickwin-code">
              <div class="nh-code-label">{{ currentQuickWin.codeLabel }}</div>
              <div class="nh-code-body">
                <pre><code>{{ currentQuickWin.code }}</code></pre>
                <button class="nh-code-copy" @click="copyCode(currentQuickWin.code)">
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
          <a href="#how" class="nh-btn filled">Why Probe &rarr;</a>
          <a href="https://cal.com/leonid-bugaev/30min" class="nh-btn">Talk to a human</a>
        </div>
      </section>
    </div>

    <!-- Footer -->
    <footer class="nh-footer">
      <div class="nh-footer-grid">
        <!-- Brand Column -->
        <div class="nh-footer-brand">
          <span class="nh-footer-brand-name">ProbeLabs</span>
          <p class="nh-footer-tagline">The Operating System for Agentic Engineering</p>
          <div class="nh-footer-social">
            <a href="https://github.com/probelabs" target="_blank" aria-label="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
          </div>
          <a href="mailto:hello@probelabs.com" class="nh-footer-email">hello@probelabs.com</a>
        </div>
        <!-- Platform Column -->
        <div class="nh-footer-col">
          <h4>Platform</h4>
          <ul>
            <li><a href="/probe">Probe</a></li>
            <li><a href="/visor">Visor</a></li>
            <li><a href="/maid">Maid</a></li>
            <li><a href="https://goreplay.org">GoReplay</a></li>
            <li><a href="/big-brain">Big Brain</a></li>
            <li><a href="/afk">AFK</a></li>
            <li><a href="/vow">Vow</a></li>
            <li><a href="/memaris">Memaris</a></li>
            <li><a href="/logoscope">Logoscope</a></li>
          </ul>
        </div>
        <!-- Solutions Column -->
        <div class="nh-footer-col">
          <h4>Solutions</h4>
          <ul>
            <li><a href="/solutions/engineering-leadership">Engineering Leadership</a></li>
            <li><a href="/solutions/platform-teams">Platform Teams</a></li>
            <li><a href="/solutions/engineers">Engineers</a></li>
            <li><a href="/solutions/agencies">Agencies</a></li>
            <li><a href="/solutions/enterprise">Enterprise</a></li>
          </ul>
        </div>
        <!-- Resources Column -->
        <div class="nh-footer-col">
          <h4>Resources</h4>
          <ul>
            <li><a href="/docs/quick-start">Quick Start</a></li>
            <li><a href="/docs">Documentation</a></li>
            <li><a href="https://github.com/probelabs/visor/tree/main/examples" target="_blank">Workflow Examples</a></li>
            <li><a href="https://github.com/probelabs/probe" target="_blank">GitHub</a></li>
          </ul>
        </div>
        <!-- Company Column -->
        <div class="nh-footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="/company/about">About</a></li>
            <li><a href="/pricing">Pricing</a></li>
          </ul>
        </div>
      </div>
      <!-- Footer Bottom -->
      <div class="nh-footer-bottom">
        <div class="nh-footer-copy">&copy; {{ currentYear }} ProbeLabs Inc. All rights reserved.</div>
        <div class="nh-footer-legal">
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { onMounted, ref, onUnmounted, computed } from 'vue'

const heroCanvas = ref(null)
const finalCanvas = ref(null)
const terminalRef = ref(null)

let heroEngine = null
let finalAnimation = null
let observer = null
let termObserver = null

// Navigation state
const isScrolled = ref(false)
const openDropdown = ref(null)
const currentYear = new Date().getFullYear()

// Interactive state
const activeRole = ref('cto')
const activeQuickWin = ref('probe')
const codeCopied = ref(false)

// Chat filter state
const activeChatFilter = ref(null)

const allChatTags = computed(() => {
  const tags = new Set()
  const exclude = new Set(['All', 'Anyone'])
  ;[...chatExamplesRow1, ...chatExamplesRow2].forEach(c => c.tags.forEach(t => { if (!exclude.has(t)) tags.add(t) }))
  const first = ['Engineering', 'Product', 'QA', 'Platform']
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
    tags: ['Sales', 'Legal'],
    prompt: 'Answer this 47-question RFP security questionnaire — search Confluence, docs, and code for evidence',
    response: 'Systematically searching Confluence, docs, and codebase. Compiled answers for 43/47 questions with source references. 4 questions flagged for manual review. Estimated 12 hours of work reduced to 20 minutes...'
  },
  {
    tags: ['Engineering', 'QA'],
    prompt: 'Assess our test coverage for certificate filtering by comparing open bugs to existing tests',
    response: 'CRITICAL: No acceptance criteria defined for certificate statuses. CRITICAL: Available filter states not documented. ERROR: Non-functional requirements like performance not specified. WARNING: Edge cases for expired certificates not covered...'
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
    tags: ['Compliance', 'Legal'],
    prompt: 'List every GPL and AGPL dependency across all repos — flag anything in production code',
    response: 'Scanning all dependency manifests and lock files across 47 repos. Found: 23 GPL-licensed dependencies (12 are test-only), 4 AGPL packages requiring legal review, 156 Apache-2.0 (no action needed). Flagged: 2 transitive AGPL deps in production code...'
  },
  {
    tags: ['HR'],
    prompt: 'I need the remote work policy and the process for requesting a new laptop — find both',
    response: 'Remote work policy: Confluence > People Ops > Remote Work Guidelines (last updated Oct 2024). Equipment requests: submit through ServiceNow portal > IT Hardware > New Equipment Request. Standard approval takes 2-3 business days, expedited available for new hires...'
  },
  {
    tags: ['Finance'],
    prompt: 'Pull engineering effort data from Jira for Project X this quarter — we need it for R&D tax credit filing',
    response: 'Project X, Q4 2024: 847 tickets completed across 12 engineers. 2,340 story points delivered. Breakdown by category: New feature development (62%), bug fixes (18%), infrastructure (12%), documentation (8%). Qualifying R&D activities: 74% of total effort...'
  },
  {
    tags: ['IT'],
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
  }
]

// Role data
const roles = [
  {
    id: 'cto',
    title: 'Engineering Leadership',
    subtitle: 'CTOs & VPs',
    oneLiner: 'Org-wide AI with predictability, governance, and full visibility.',
    youGet: [
      { title: 'One source of truth for everyone', desc: 'Engineers, PMs, support, legal — all query the same codebase. No more "ask engineering" loops.' },
      { title: 'Architecture oversight at scale', desc: 'Review proposed designs for feasibility and risks. Catch missing SLA requirements and capacity plans before they ship.' },
      { title: 'Automated governance', desc: 'License audits, security scans, RFP questionnaires answered in minutes with evidence from code and docs.' }
    ],
    replaces: ['Tribal knowledge silos', 'Manual compliance questionnaires', 'Blind spots across teams'],
    workflows: [
      'Review architecture epics for feasibility and risks',
      'Answer RFP security questionnaires from code evidence',
      'Audit GPL/AGPL dependencies across all repos',
      'Weekly technical decision digests from Slack and RFCs',
      'Release readiness gates with automated checks',
      'R&D effort tracking for tax credit filings'
    ],
    solutionLink: '/solutions/engineering-leadership',
    solutionText: 'Engineering Leadership'
  },
  {
    id: 'platform',
    title: 'Platform / DevEx',
    subtitle: 'Infra & CI/CD',
    oneLiner: 'Debug pipelines, trace infrastructure, and give every team self-serve tooling.',
    youGet: [
      { title: 'CI/CD debugging', desc: 'Analyze GitHub Actions failures, find intermittent patterns across runs, and propose fixes — not just surface the error.' },
      { title: 'Observability meets code', desc: 'Correlate Datadog spikes, Grafana charts, and Loki logs with the exact PR and code change that caused them.' },
      { title: 'Infrastructure auditing', desc: 'Map Terraform resources to services, find orphaned infra, audit all repos for health checks and structured logging.' }
    ],
    replaces: ['Manually reading CI logs', 'Guessing which deploy broke metrics', 'Spreadsheets tracking service ownership'],
    workflows: [
      'Debug intermittent GitHub Actions failures across runs',
      'Correlate latency spikes with recent deploys and config changes',
      'Trace memory leaks through metrics, logs, and git history',
      'Audit microservices for health checks and graceful shutdown',
      'Map Terraform resources to dependent services and teams',
      'Optimize CI matrix builds — find bottlenecks, propose caching'
    ],
    solutionLink: '/solutions/platform-teams',
    solutionText: 'Platform Teams'
  },
  {
    id: 'engineers',
    title: 'Engineers',
    subtitle: 'ICs & Leads',
    oneLiner: 'Full codebase context. Trace bugs, understand systems, ship faster.',
    youGet: [
      { title: 'Deep code understanding', desc: 'Trace request lifecycles across services. Understand auth flows, caching logic, rate limiters — in minutes, not hours.' },
      { title: 'Root-cause analysis', desc: 'Find exactly which PR broke CI, which code change caused the memory leak, why the rate limiter returns 429 for authenticated users.' },
      { title: 'Sprint intelligence', desc: 'Check your sprint tickets, pending PRs, and review comments — get a standup-ready summary with action items.' }
    ],
    replaces: ['Grep + guesswork', 'Hours reading unfamiliar code', 'Constant "who knows how this works?" interruptions'],
    workflows: [
      'Trace API authentication lifecycle across the codebase',
      'Find which PR broke CI and when was the last green build',
      'Pinpoint root cause of caching bugs with exact code fix',
      'Deduplicate related tickets by tracing shared code paths',
      'Pre-standup sprint review: tickets, PRs, blockers',
      'Save deployment runbooks to team knowledge base'
    ],
    solutionLink: '/solutions/engineers',
    solutionText: 'Engineers'
  },
  {
    id: 'qa',
    title: 'QA & Testing',
    subtitle: 'Quality Engineers',
    oneLiner: 'Generate test cases from specs. Find coverage gaps. Validate tickets before they reach engineering.',
    youGet: [
      { title: 'Spec-to-test generation', desc: 'Read a ticket, trace the original spec, and generate positive, negative, and edge case tests mapped to acceptance criteria.' },
      { title: 'Coverage gap analysis', desc: 'Compare open bugs against existing tests. Find what\'s missing in automated coverage, across unit and integration.' },
      { title: 'Ticket completeness validation', desc: 'Evaluate tickets for missing acceptance criteria, error handling specs, and non-functional requirements before work starts.' }
    ],
    replaces: ['Writing tests without context', 'Manually checking ticket quality', 'Finding gaps only after bugs ship'],
    workflows: [
      'Evaluate ticket completeness — flag missing AC and edge cases',
      'Generate TDD test stubs from acceptance criteria',
      'Trace ticket to original spec, then generate full test cases',
      'Assess test coverage by comparing bugs to existing tests',
      'Write unit and integration tests that prove AC for a ticket',
      'Verify bug fix with suggested regression tests'
    ],
    solutionLink: '/solutions/engineers',
    solutionText: 'QA & Testing'
  },
  {
    id: 'product',
    title: 'Product & Support',
    subtitle: 'PMs, CS & Writers',
    oneLiner: 'Engineering-grade answers without the engineering bottleneck.',
    youGet: [
      { title: 'Understand your product deeply', desc: 'Ask about edge cases, architecture, and real behavior — validated against code, not just docs.' },
      { title: 'Ticket refinement at scale', desc: 'Break epics into tasks with story points, generate solution designs and functional AC, estimate complexity from codebase analysis.' },
      { title: 'Cross-source intelligence', desc: 'Pull insights from Zendesk, Jira, Confluence, Slack, and code — all in one query. RFPs, release notes, customer research.' }
    ],
    replaces: ['Waiting days for engineering answers', 'Guessing at effort estimates', 'Manual release notes compilation'],
    workflows: [
      'Break refined tickets into engineering tasks with story points',
      'Estimate tasks using Fibonacci points from codebase complexity',
      'Generate solution design with functional and non-functional AC',
      'Build release notes from merged PRs and Jira tickets',
      'Pull customer interest data from Zendesk, Jira, and docs',
      'Diff job specs or design docs — find gaps and differences'
    ],
    solutionLink: '/solutions/non-technical',
    solutionText: 'Product & Support'
  }
]

const currentRole = computed(() => roles.find(r => r.id === activeRole.value) || roles[0])

// Quick Wins data
const quickWins = [
  {
    id: 'probe',
    tabTitle: 'Add to AI Editor',
    time: '~2 min',
    title: 'Add Probe to Your AI Coding Tool',
    desc: 'Get enterprise-grade code understanding in your existing workflow. Probe auto-detects Claude Code and Codex auth, or works with any LLM API.',
    result: 'A specialized AI agent for code search and analysis, powered by Probe\'s code search engine.',
    link: '/docs/integrations/ai-code-editors',
    linkText: 'AI code editor setup',
    codeLabel: 'Add to Claude Code',
    code: 'claude mcp add probe -- npx -y @probelabs/probe@latest agent --mcp'
  },
  {
    id: 'github',
    tabTitle: 'Automate PR Reviews',
    time: '~5 min',
    title: 'Add Visor GitHub Action',
    desc: 'Add a reusable GitHub Action for automated issue triage and code review. Every issue triaged automatically. Every PR gets a first-pass review.',
    result: 'Automated issue categorization and context-aware PR reviews on every commit.',
    link: '/docs/github-assistant',
    linkText: 'GitHub Assistant docs',
    codeLabel: '.github/workflows/visor.yml',
    code: `name: Visor Review
on: [pull_request]
jobs:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: probelabs/visor-action@v1
        with:
          workflow: code-review`
  },
  {
    id: 'slack',
    tabTitle: 'Slack Bot',
    time: '~5 min',
    title: 'Deploy a Code-Aware Slack Bot',
    desc: 'Answer codebase questions directly in Slack. Teams can query architecture, debug issues, and get grounded answers without leaving their workflow.',
    result: 'A Slack bot that answers questions with full codebase context.',
    link: '/docs/slack-integration',
    linkText: 'Slack integration docs',
    codeLabel: 'Deploy with Docker',
    code: `docker run -d \\
  -e SLACK_TOKEN=xoxb-... \\
  -e ANTHROPIC_API_KEY=sk-... \\
  probelabs/probe-slack:latest`
  },
  {
    id: 'web',
    tabTitle: 'Web Chat',
    time: '~1 min',
    title: 'Run the Web Chat UI',
    desc: 'Spin up a local web interface to chat with your codebase. Great for exploration, onboarding, and sharing context with non-technical teammates.',
    result: 'A browser-based chat interface connected to your local codebase.',
    link: '/docs/web-chat',
    linkText: 'Web chat docs',
    codeLabel: 'Run locally',
    code: 'npx -y @probelabs/probe-chat@latest --web'
  }
]

const currentQuickWin = computed(() => quickWins.find(qw => qw.id === activeQuickWin.value) || quickWins[0])

// FAQ data
const faqItems = [
  { q: 'What is Probe exactly?', a: 'Probe is an AI agent that connects to your codebase, tickets, docs, Slack, and other tools — then answers questions, automates workflows, and takes actions like opening PRs or updating tickets. Think of it as a team member that holds the full context of your product.' },
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

// Scroll handler
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  // Scroll listener for nav
  window.addEventListener('scroll', handleScroll)
  handleScroll()

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
  window.removeEventListener('scroll', handleScroll)
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
