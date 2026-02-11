---
layout: page
title: Probe - Code Intelligence for AI
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
      <div class="hero-badge"><span class="badge-dot"></span> Context Retrieval Engine</div>
      <h1 class="hero-title">
        <span class="hero-title-main">Probe</span>
        <span class="hero-title-sub">Context retrieval that understands code</span>
      </h1>
      <p class="hero-subtitle">Most tools do text search + a few surrounding lines. Probe understands functions, symbols, and document structure, ranks results, and extracts only the relevant scope.</p>
      <div class="hero-badges">
        <span class="guarantee-badge">50+ Languages</span>
        <span class="guarantee-badge">100% Local</span>
        <span class="guarantee-badge">Open Source</span>
        <span class="guarantee-badge">No Indexing</span>
      </div>
      <div class="hero-cta">
        <a href="/quick-start" class="btn btn-primary"><span>Get Started</span> <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3.33 8h9.34M8.67 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
        <a href="https://github.com/buger/probe" class="btn btn-secondary"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg> GitHub</a>
      </div>
    </div>
    <div class="hero-visual">
      <div class="workflow-diagram">
        <div class="diagram-header">
          <span class="diagram-dot"></span>
          <span class="diagram-dot"></span>
          <span class="diagram-dot"></span>
          <span class="diagram-title">probe search</span>
        </div>
        <div class="diagram-content">
          <div class="diagram-section">
            <div class="diagram-label">Query</div>
            <div class="diagram-code"><code><span class="code-key">$</span> probe "auth flow" ./src</code></div>
          </div>
          <div class="diagram-arrow"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
          <div class="diagram-section diagram-section-agent">
            <div class="diagram-label">Structure-Aware Search</div>
            <div class="diagram-code"><code>AST parsing → Symbol matching</code><code>BM25 ranking → Scope detection</code></div>
          </div>
          <div class="diagram-arrow"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
          <div class="diagram-section diagram-section-output">
            <div class="diagram-label">Scoped Context</div>
            <div class="diagram-metrics">
              <div class="metric"><span class="metric-icon"><svg viewBox="0 0 16 16" fill="none"><path d="M13.5 2.5l-7 7-3-3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span>Ranked</span></div>
              <div class="metric"><span class="metric-icon"><svg viewBox="0 0 16 16" fill="none"><path d="M13.5 2.5l-7 7-3-3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span>Bounded</span></div>
              <div class="metric"><span class="metric-icon"><svg viewBox="0 0 16 16" fill="none"><path d="M13.5 2.5l-7 7-3-3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span>Expandable</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Why Probe Exists Section -->
<section class="section section-pain">
  <div class="container">
    <div class="section-header">
      <span class="section-label">The Problem</span>
      <h2>Why Most "AI Code Understanding" Breaks at Enterprise Scale</h2>
    </div>
    <div class="pain-content">
      <p>In small repos, "search a few strings and read 20 lines around it" works. In large codebases it fails because understanding requires structure, boundaries, and the big picture—not just matching text.</p>
      <ul class="pain-bullets">
        <li><strong>Code isn't text.</strong> It's symbols, scopes, call paths, and ownership boundaries.</li>
        <li><strong>Docs aren't text.</strong> They're sections, headings, and contracts.</li>
        <li><strong>The failure mode is predictable:</strong> tools say "I understand" too early.</li>
      </ul>
      <p class="pain-closer">Probe is built to make "I understand" mean something.</p>
    </div>
  </div>
</section>

<!-- Core Messaging Pillars -->
<section class="section section-pillars">
  <div class="container">
    <div class="section-header">
      <span class="section-label">Core Capabilities</span>
      <h2>How Probe Works</h2>
    </div>
    <div class="pillars-grid">
      <div class="pillar-card">
        <div class="pillar-number">01</div>
        <h3>Structure-aware retrieval</h3>
        <p class="pillar-tagline">Search like you understand the language, not like you're scanning strings</p>
        <ul class="pillar-bullets">
          <li>Understands functions, variables, and scopes (not just matching lines)</li>
          <li>Markdown-aware: respects headers, sections, and document structure</li>
          <li>Agent mode respects repo guidance (AGENTS.md, ARCHITECTURE.md, AgentSkills)</li>
          <li>Returns results with file paths + line numbers + clear boundaries</li>
        </ul>
      </div>
      <div class="pillar-card">
        <div class="pillar-number">02</div>
        <h3>Elastic depth</h3>
        <p class="pillar-tagline">Start narrow, expand only when needed</p>
        <ul class="pillar-bullets">
          <li>Extracts only the scope you need (signature / key lines / relevant block)</li>
          <li>Shows where a function starts and ends, so the agent can decide to expand</li>
          <li>"Go deeper" is deliberate: pull the full function body or related blocks only when required</li>
        </ul>
        <p class="pillar-closer">Stop shipping entire files into prompts just to answer one question.</p>
      </div>
      <div class="pillar-card">
        <div class="pillar-number">03</div>
        <h3>Precise extraction</h3>
        <p class="pillar-tagline">Precision tools beat "read the whole file"</p>
        <ul class="pillar-bullets">
          <li>Extract by line range, symbol/function name, or section</li>
          <li>Produce consistent "context artifacts" that workflows can reuse</li>
          <li>Token-efficient: one Probe query can replace many "search/open/scroll" steps</li>
        </ul>
        <p class="pillar-closer">Better retrieval → better plans → better automation.</p>
      </div>
    </div>
  </div>
</section>

<!-- Quick Start Section -->
<section class="section section-quickstart">
  <div class="container">
    <div class="section-header">
      <span class="section-label">Quick Start</span>
      <h2>Get Started in Seconds</h2>
      <p class="section-desc">Choose your preferred way to integrate Probe into your workflow.</p>
    </div>
    <div class="quickstart-grid">
      <div class="quickstart-card quickstart-featured">
        <div class="quickstart-header">
          <div class="quickstart-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg></div>
          <h3>Command Line</h3>
        </div>
        <p>Search any codebase instantly with a single command. No installation required - just run via npx.</p>
        <div class="terminal-block">
          <div class="terminal-header">
            <span class="terminal-dot"></span>
            <span class="terminal-dot"></span>
            <span class="terminal-dot"></span>
            <span class="terminal-title">Terminal</span>
          </div>
          <div class="terminal-content">
            <div class="terminal-line"><span class="terminal-prompt">$</span> npx -y @probelabs/probe@latest "authentication flow" ./src</div>
          </div>
        </div>
        <div class="quickstart-flow">
          <span class="flow-step">Run command</span>
          <span class="flow-arrow">then</span>
          <span class="flow-step">Get ranked results</span>
          <span class="flow-arrow">then</span>
          <span class="flow-step">Extract context</span>
        </div>
      </div>
      <div class="quickstart-card">
        <div class="quickstart-header">
          <div class="quickstart-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div>
          <h3>AI Chat Mode</h3>
        </div>
        <p>Interactive chat interface for exploring code with AI assistance. Opens in your browser.</p>
        <div class="terminal-block terminal-small">
          <div class="terminal-header">
            <span class="terminal-dot"></span>
            <span class="terminal-dot"></span>
            <span class="terminal-dot"></span>
          </div>
          <div class="terminal-content">
            <div class="terminal-line"><span class="terminal-prompt">$</span> npx -y @probelabs/probe-chat@latest --web</div>
          </div>
        </div>
      </div>
      <div class="quickstart-card">
        <div class="quickstart-header">
          <div class="quickstart-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg></div>
          <h3>MCP Server</h3>
        </div>
        <p>Connect to Claude Code, Cursor, Codex, or any MCP-compatible AI editor.</p>
        <div class="mcp-tabs">
          <input type="radio" name="mcp-tab" id="mcp-claude" checked>
          <input type="radio" name="mcp-tab" id="mcp-json">
          <input type="radio" name="mcp-tab" id="mcp-codex">
          <div class="mcp-tabs-nav">
            <label for="mcp-claude">Claude Code</label>
            <label for="mcp-json">JSON Config</label>
            <label for="mcp-codex">Codex</label>
          </div>
          <div class="mcp-tabs-content">
            <div class="mcp-tab-panel" id="panel-claude">
              <div class="terminal-block terminal-small">
                <div class="terminal-header">
                  <span class="terminal-dot"></span>
                  <span class="terminal-dot"></span>
                  <span class="terminal-dot"></span>
                </div>
                <div class="terminal-content">
                  <div class="terminal-line">claude mcp add probe -- npx -y @probelabs/probe@latest agent --mcp</div>
                </div>
              </div>
            </div>
            <div class="mcp-tab-panel" id="panel-json">
              <div class="terminal-block terminal-small">
                <div class="terminal-header">
                  <span class="terminal-dot"></span>
                  <span class="terminal-dot"></span>
                  <span class="terminal-dot"></span>
                  <span class="terminal-title">mcp_config.json</span>
                </div>
                <div class="terminal-content">
                  <div class="terminal-line terminal-json">{</div>
                  <div class="terminal-line terminal-json">  "mcpServers": {</div>
                  <div class="terminal-line terminal-json">    "probe": {</div>
                  <div class="terminal-line terminal-json">      "command": "npx",</div>
                  <div class="terminal-line terminal-json">      "args": ["-y", "@probelabs/probe@latest", "mcp"]</div>
                  <div class="terminal-line terminal-json">    }</div>
                  <div class="terminal-line terminal-json">  }</div>
                  <div class="terminal-line terminal-json">}</div>
                </div>
              </div>
            </div>
            <div class="mcp-tab-panel" id="panel-codex">
              <div class="terminal-block terminal-small">
                <div class="terminal-header">
                  <span class="terminal-dot"></span>
                  <span class="terminal-dot"></span>
                  <span class="terminal-dot"></span>
                  <span class="terminal-title">~/.codex/config.toml</span>
                </div>
                <div class="terminal-content">
                  <div class="terminal-line terminal-comment"># Auto-detects Codex auth</div>
                  <div class="terminal-line">[mcp_servers.probe]</div>
                  <div class="terminal-line">command = "npx"</div>
                  <div class="terminal-line">args = ["-y", "@probelabs/probe@latest", "mcp"]</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="quickstart-card">
        <div class="quickstart-header">
          <div class="quickstart-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg></div>
          <h3>Node.js SDK</h3>
        </div>
        <p>Programmatic access for building custom integrations and workflows.</p>
        <div class="terminal-block terminal-small">
          <div class="terminal-header">
            <span class="terminal-dot"></span>
            <span class="terminal-dot"></span>
            <span class="terminal-dot"></span>
          </div>
          <div class="terminal-content">
            <div class="terminal-line"><span class="terminal-prompt">$</span> npm install @anthropic-ai/claude-code</div>
          </div>
        </div>
      </div>
    </div>
    <div class="quickstart-cta">
      <a href="/quick-start" class="btn btn-secondary"><span>View Full Documentation</span> <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3.33 8h9.34M8.67 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
    </div>
  </div>
</section>

<!-- How It's Different Section -->
<section class="section section-comparison">
  <div class="container">
    <div class="section-header">
      <span class="section-label">The Difference</span>
      <h2>Most Systems Treat Code as Text. Probe Treats It as a Codebase.</h2>
    </div>
    <div class="comparison-grid">
      <div class="comparison-col comparison-common">
        <h3>Common approach</h3>
        <ul>
          <li>Run 2–3 text queries</li>
          <li>Grab a few lines around matches</li>
          <li>Assume it's enough context</li>
          <li>Move on confidently (often wrong)</li>
        </ul>
      </div>
      <div class="comparison-col comparison-probe">
        <h3>Probe approach</h3>
        <ul>
          <li>Build a ranked set of structural hits</li>
          <li>Extract scoped, minimal context with boundaries</li>
          <li>Highlight the important identifiers</li>
          <li>Expand intentionally when deeper context is needed</li>
        </ul>
      </div>
    </div>
    <p class="comparison-closer">It's not about "more context." It's about the right context, delivered efficiently.</p>
  </div>
</section>
<!-- Features Section -->
<section class="section section-features">
  <div class="container">
    <div class="section-header">
      <span class="section-label">Capabilities</span>
      <h2>Powerful Query Syntax—Without Heavyweight Indexing</h2>
    </div>
    <p class="features-intro">Probe supports advanced, search-engine style queries and runs fast on large repos without requiring an external indexing service.</p>
    <div class="features-grid">
      <div class="feature-card">
        <h3>Familiar Query Operators</h3>
        <p>Boolean operators, phrase matching, and fuzzy search—a query syntax you already know.</p>
      </div>
      <div class="feature-card">
        <h3>Code + Markdown</h3>
        <p>Works across source files and documentation with structural awareness for both.</p>
      </div>
      <div class="feature-card">
        <h3>Local / On-Prem Ready</h3>
        <p>Designed for use in real enterprise repos. Retrieval runs locally; you control what context is sent to the model.</p>
      </div>
      <div class="feature-card">
        <h3>50+ Languages</h3>
        <p>Support for all major programming languages with accurate AST parsing.</p>
      </div>
      <div class="feature-card">
        <h3>MCP + SDK</h3>
        <p>Built-in MCP server for Claude and Cursor. Node.js SDK for custom integrations.</p>
      </div>
      <div class="feature-card">
        <h3>Open Source</h3>
        <p>Apache 2.0 licensed. Run it, modify it, embed it in your workflows.</p>
      </div>
    </div>
  </div>
</section>

<!-- Docs Section -->
<section class="section section-docs">
  <div class="container">
    <div class="section-header">
      <span class="section-label">Resources</span>
      <h2>Documentation</h2>
    </div>
    <div class="docs-grid">
      <a href="/quick-start" class="doc-card">
        <h3>Quick Start</h3>
        <p>Get up and running in minutes</p>
        <span class="doc-link">Read guide <svg width="12" height="12" viewBox="0 0 12 12"><path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
      </a>
      <a href="/features" class="doc-card">
        <h3>Features</h3>
        <p>Explore all capabilities</p>
        <span class="doc-link">Learn more <svg width="12" height="12" viewBox="0 0 12 12"><path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
      </a>
      <a href="/mcp-server" class="doc-card">
        <h3>MCP Server</h3>
        <p>Integrate with AI editors</p>
        <span class="doc-link">View docs <svg width="12" height="12" viewBox="0 0 12 12"><path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
      </a>
      <a href="/cli-mode" class="doc-card">
        <h3>CLI Reference</h3>
        <p>Command line usage</p>
        <span class="doc-link">See commands <svg width="12" height="12" viewBox="0 0 12 12"><path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
      </a>
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="section section-cta">
  <div class="container">
    <div class="cta-card">
      <p class="cta-power">Probe makes context retrieval deterministic: scoped, ranked, expandable.</p>
      <h2>Turn Your Repo Into a Queryable Knowledge System</h2>
      <p>Open source and free to use. Single binary, no dependencies.</p>
      <div class="cta-buttons">
        <a href="/quick-start" class="btn btn-primary btn-lg"><span>Get Started</span><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3.33 8h9.34M8.67 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
        <a href="https://cal.com/leonid-bugaev/30min" class="btn btn-secondary">Book a Demo</a>
        <a href="https://github.com/buger/probe" class="btn btn-ghost">GitHub</a>
      </div>
    </div>
  </div>
</section>

</div>

<style>
/* ========================================
   Probe Page - Specific Styles
   Base styles come from product-solution.css
   ======================================== */

/* Code key for diagram */
.ps-page .code-key {
  color: var(--c-primary);
}

/* Pain section background */
.ps-page .section-pain {
  background: var(--c-bg-subtle);
}

/* Pillars section background */
.ps-page .section-pillars {
  background: var(--c-bg);
}

/* Pillar card overrides */
.ps-page .pillar-card {
  background: var(--c-bg-subtle);
}

.ps-page .pillar-card:hover {
  transform: translateY(-2px);
}

.ps-page .pillar-number {
  font-size: 0.875rem;
  opacity: 1;
}

.ps-page .pillar-tagline {
  font-style: italic;
}

.ps-page .pillar-closer {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--c-primary);
  margin: 0;
  padding-top: var(--space-md);
  border-top: 1px solid var(--c-border);
}

/* Comparison Section (Column Layout) */
.ps-page .section-comparison {
  background: var(--c-bg-subtle);
}

.ps-page .comparison-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-xl);
  max-width: 900px;
  margin: 0 auto var(--space-xl);
}

.ps-page .comparison-col {
  padding: var(--space-xl);
  background: var(--c-bg);
  border: 1px solid var(--c-border);
  border-radius: var(--radius-lg);
}

.ps-page .comparison-col h3 {
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 var(--space-lg);
  color: var(--c-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.ps-page .comparison-col ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.ps-page .comparison-col ul li {
  font-size: 0.9375rem;
  color: var(--c-text-muted);
  line-height: 1.6;
  margin-bottom: var(--space-md);
  padding-left: var(--space-lg);
  position: relative;
}

.ps-page .comparison-common ul li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 8px;
  width: 6px;
  height: 6px;
  background: var(--c-text-subtle);
  border-radius: 50%;
}

.ps-page .comparison-probe {
  border-color: var(--c-primary-border);
  background: var(--c-primary-bg);
}

.ps-page .comparison-probe h3 {
  color: var(--c-primary);
}

.ps-page .comparison-probe ul li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 8px;
  width: 6px;
  height: 6px;
  background: var(--c-primary);
  border-radius: 50%;
}

.ps-page .comparison-closer {
  text-align: center;
  font-size: 1.125rem;
  font-weight: 500;
  color: var(--c-text);
  margin: 0;
}

/* Quick Start Section */
.ps-page .section-quickstart {
  background: var(--c-bg);
}

.ps-page .quickstart-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-lg);
}

.ps-page .quickstart-card {
  padding: var(--space-xl);
  background: var(--c-bg-subtle);
  border: 1px solid var(--c-border);
  border-radius: var(--radius-lg);
  transition: all 0.3s ease;
}

.ps-page .quickstart-card:hover {
  border-color: var(--c-primary-border);
}

.ps-page .quickstart-featured {
  grid-column: span 2;
  background: var(--c-primary-bg);
  border-color: var(--c-primary-border);
}

.ps-page .quickstart-header {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  margin-bottom: var(--space-md);
}

.ps-page .quickstart-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--c-primary);
  border-radius: var(--radius-sm);
}

.ps-page .quickstart-icon svg {
  width: 20px;
  height: 20px;
  color: #fff;
}

.ps-page .quickstart-header h3 {
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0;
  color: var(--c-text);
}

.ps-page .quickstart-card > p {
  font-size: 0.9375rem;
  color: var(--c-text-muted);
  margin: 0 0 var(--space-lg);
  line-height: 1.6;
}

.ps-page .quickstart-flow {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  flex-wrap: wrap;
  margin-top: var(--space-lg);
}

.ps-page .flow-step {
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--c-text);
  background: var(--c-bg);
  border: 1px solid var(--c-border);
  padding: var(--space-xs) var(--space-sm);
  border-radius: 4px;
}

.ps-page .flow-arrow {
  font-size: 0.6875rem;
  color: var(--c-text-subtle);
  font-style: italic;
}

.ps-page .quickstart-cta {
  text-align: center;
  margin-top: var(--space-2xl);
}

/* Terminal Blocks */
.ps-page .terminal-block {
  background: var(--c-bg);
  border: 1px solid var(--c-border);
  border-radius: var(--radius-lg);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
  overflow: hidden;
  margin-bottom: var(--space-lg);
}

.ps-page .terminal-header {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0.75rem 1rem;
  background: var(--c-bg-muted);
  border-bottom: 1px solid var(--c-border);
}

.ps-page .terminal-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--c-border);
}

.ps-page .terminal-dot:nth-child(1) { background: #ff5f57; }
.ps-page .terminal-dot:nth-child(2) { background: #febc2e; }
.ps-page .terminal-dot:nth-child(3) { background: #28c840; }

.ps-page .terminal-title {
  margin-left: auto;
  font-size: 0.75rem;
  font-family: var(--font-mono);
  color: var(--c-text-subtle);
}

.ps-page .terminal-content {
  padding: var(--space-lg);
  background: #0f172a;
}

.ps-page .terminal-line {
  font-family: var(--font-mono);
  font-size: 0.875rem;
  color: #e2e8f0;
  line-height: 1.6;
}

.ps-page .terminal-prompt {
  color: var(--c-primary-light);
  margin-right: var(--space-sm);
}

.ps-page .terminal-small .terminal-content {
  padding: var(--space-md);
}

.ps-page .terminal-small .terminal-line {
  font-size: 0.8125rem;
}

.ps-page .terminal-json {
  white-space: pre;
}

.ps-page .terminal-comment {
  color: #6b7280;
}

/* MCP Tabs */
.ps-page .mcp-tabs {
  position: relative;
}

.ps-page .mcp-tabs input[type="radio"] {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.ps-page .mcp-tabs-nav {
  display: flex;
  gap: 2px;
  margin-bottom: var(--space-sm);
  background: var(--c-bg-muted);
  border-radius: var(--radius-sm);
  padding: 2px;
}

.ps-page .mcp-tabs-nav label {
  flex: 1;
  padding: var(--space-xs) var(--space-sm);
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--c-text-muted);
  text-align: center;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.2s ease;
}

.ps-page .mcp-tabs-nav label:hover {
  color: var(--c-text);
}

.ps-page #mcp-claude:checked ~ .mcp-tabs-nav label[for="mcp-claude"],
.ps-page #mcp-json:checked ~ .mcp-tabs-nav label[for="mcp-json"],
.ps-page #mcp-codex:checked ~ .mcp-tabs-nav label[for="mcp-codex"] {
  background: var(--c-bg);
  color: var(--c-primary);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

.ps-page .mcp-tabs-content {
  position: relative;
}

.ps-page .mcp-tab-panel {
  display: none;
}

.ps-page #mcp-claude:checked ~ .mcp-tabs-content #panel-claude,
.ps-page #mcp-json:checked ~ .mcp-tabs-content #panel-json,
.ps-page #mcp-codex:checked ~ .mcp-tabs-content #panel-codex {
  display: block;
}

.ps-page .mcp-tab-panel .terminal-block {
  margin-bottom: 0;
}

/* Features Section */
.ps-page .section-features {
  background: var(--c-bg);
}

.ps-page .features-intro {
  text-align: center;
  max-width: 700px;
  margin: 0 auto var(--space-2xl);
  font-size: 1.125rem;
  color: var(--c-text-muted);
}

.ps-page .features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-lg);
}

.ps-page .feature-card {
  padding: var(--space-lg);
  background: var(--c-bg-subtle);
  border: 1px solid var(--c-border);
  border-radius: var(--radius-lg);
  transition: all 0.3s ease;
}

.ps-page .feature-card:hover {
  border-color: var(--c-border-hover);
}

.ps-page .feature-card h3 {
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 var(--space-sm);
  color: var(--c-text);
}

.ps-page .feature-card p {
  font-size: 0.875rem;
  color: var(--c-text-muted);
  margin: 0;
}

/* Docs Section */
.ps-page .section-docs {
  background: var(--c-bg-subtle);
}

.ps-page .docs-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-lg);
}

.ps-page .doc-card {
  display: flex;
  flex-direction: column;
  padding: var(--space-lg);
  background: var(--c-bg);
  border: 1px solid var(--c-border);
  border-radius: var(--radius-lg);
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
}

.ps-page .doc-card:hover {
  border-color: var(--c-primary);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  transform: none;
}

.ps-page .doc-card h3 {
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 var(--space-xs);
  color: var(--c-text);
}

.ps-page .doc-card p {
  font-size: 0.875rem;
  color: var(--c-text-muted);
  margin: 0 0 var(--space-md);
  flex-grow: 1;
}

.ps-page .doc-link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--c-primary);
  transition: color 0.2s ease;
}

.ps-page .doc-card:hover .doc-link {
  color: #333333;
}

/* CTA Card */
.ps-page .cta-card {
  text-align: center;
  padding: var(--space-3xl);
  background: transparent;
  border: 1px solid var(--c-primary-border);
  border-radius: var(--radius-xl);
}

.ps-page .cta-power {
  font-size: 1rem;
  font-weight: 500;
  color: var(--c-primary);
  margin: 0 0 var(--space-md);
  letter-spacing: 0.01em;
}

.ps-page .cta-card h2 {
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 var(--space-md);
}

.ps-page .cta-card > p:not(.cta-power) {
  font-size: 1.125rem;
  color: var(--c-text-muted);
  margin: 0 0 var(--space-xl);
}

/* Responsive overrides */
@media (max-width: 1024px) {
  .ps-page .features-grid,
  .ps-page .docs-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .ps-page .quickstart-featured {
    grid-column: span 2;
  }
}

@media (max-width: 768px) {
  .ps-page .comparison-grid,
  .ps-page .quickstart-grid,
  .ps-page .features-grid,
  .ps-page .docs-grid {
    grid-template-columns: 1fr;
  }

  .ps-page .quickstart-featured {
    grid-column: span 1;
  }

  .ps-page .cta-card {
    padding: var(--space-xl);
  }

  .ps-page .mcp-tabs-nav {
    flex-wrap: wrap;
  }

  .ps-page .mcp-tabs-nav label {
    flex: none;
    padding: var(--space-xs) var(--space-md);
  }
}

</style>
