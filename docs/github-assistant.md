---
title: GitHub Assistant
description: Automated GitHub workflows - auto-answer issues, review PRs, add labels, and have conversations right in your repository
---

# GitHub Assistant

Install the GitHub Assistant to get:

- **PR reviews**: multi-dimensional reviews posted on every pull request
- **Issue auto-responses**: code-grounded answers and triage on new issues
- **Auto-labeling**: consistent tags for PRs and issues based on code analysis
- **Conversational follow-ups**: ask questions in PR/issue threads and get contextual replies

Everything runs inside your GitHub Actions runner, so responses are grounded in your repository. You're in full control: keep the defaults, add new rules, or disable checks you don't want. No required third-party services beyond your chosen LLM provider, and you can use any LLM supported by Visor.

## Quick Start

Add this GitHub Action to your repository:

```yaml
name: Visor
on:
  issues:
    types: [opened]
  pull_request:
    types: [opened, synchronize]
  issue_comment:
    types: [created]

jobs:
  visor:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: probelabs/visor-action@v1
        with:
          github-token: ${{ secrets.GITHUB_TOKEN }}
```

That's it. Visor will now automatically review PRs and respond to issues.

## Defaults and Overrides

The GitHub Assistant uses Visor's default workflow configuration:
[defaults/visor.yaml](https://github.com/probelabs/visor/blob/main/defaults/visor.yaml)

To extend or customize code review steps, see [Intelligent Code Review](/docs/code-review#custom-rules).

## Issue Auto-Response

When users open issues, Visor analyzes your codebase and provides helpful responses grounded in actual code:

<div class="github-preview">
  <div class="gh-issue">
    <div class="gh-issue-header">
      <span class="gh-icon gh-icon-issue"></span>
      <span class="gh-issue-title">Issue #234: How do I configure rate limiting?</span>
      <span class="gh-label gh-label-question">question</span>
    </div>
    <div class="gh-comment gh-comment-user">
      <div class="gh-avatar">U</div>
      <div class="gh-comment-body">
        <div class="gh-comment-meta">@user opened this issue 2 minutes ago</div>
        <p>I'm trying to set up rate limiting for my API endpoints but can't find the configuration options.</p>
      </div>
    </div>
    <div class="gh-comment gh-comment-bot">
      <div class="gh-avatar gh-avatar-bot">V</div>
      <div class="gh-comment-body">
        <div class="gh-comment-meta">visor-bot commented just now</div>
        <p>Rate limiting is configured in <code>config/api.yaml</code>:</p>
        <pre><code>rate_limit:
  enabled: true
  requests_per_minute: 100</code></pre>
        <p>See <a href="#">src/middleware/rate_limiter.go:45</a> for implementation details.</p>
        <div class="gh-related">Related: #189, #201</div>
      </div>
    </div>
  </div>
</div>

## PR Reviews

Multi-dimensional code review covering security, performance, architecture, and code quality - automatically posted to your PRs:

<div class="github-preview">
  <div class="gh-pr">
    <div class="gh-pr-header">
      <span class="gh-icon gh-icon-pr"></span>
      <span class="gh-pr-title">PR #456: Add user authentication</span>
      <span class="gh-pr-stats">+342 -28</span>
    </div>
    <div class="gh-review">
      <div class="gh-review-header">
        <span class="gh-avatar gh-avatar-bot">V</span>
        <span>visor-bot reviewed</span>
      </div>
      <div class="gh-review-section gh-review-pass">
        <h4>Security Review</h4>
        <ul>
          <li>JWT validation properly implemented</li>
          <li>Password hashing uses bcrypt with appropriate cost</li>
          <li>No hardcoded secrets detected</li>
        </ul>
      </div>
      <div class="gh-review-section gh-review-warn">
        <h4>Performance Review</h4>
        <ul>
          <li>Consider caching user lookups (<code>src/auth/user.go:78</code>)</li>
        </ul>
      </div>
      <div class="gh-suggestion">
        <div class="gh-suggestion-header">Suggested change</div>
        <div class="gh-suggestion-file">src/auth/middleware.go:45</div>
        <div class="gh-suggestion-diff">
          <div class="gh-diff-del">- if err != nil { return }</div>
          <div class="gh-diff-add">+ if err != nil { return fmt.Errorf("auth: %w", err) }</div>
        </div>
      </div>
    </div>
  </div>
</div>

For detailed review configuration, see [Intelligent Code Review](/docs/code-review).

## Auto-Labels

Automatically categorize PRs and issues based on code analysis:

<div class="github-preview">
  <div class="gh-pr">
    <div class="gh-pr-header">
      <span class="gh-icon gh-icon-pr"></span>
      <span class="gh-pr-title">PR #457: Fix database connection pooling</span>
    </div>
    <div class="gh-activity">
      <div class="gh-activity-item">
        <span class="gh-avatar gh-avatar-bot">V</span>
        <span>visor-bot added labels:</span>
        <span class="gh-label gh-label-bug">bug</span>
        <span class="gh-label gh-label-db">database</span>
        <span class="gh-label gh-label-perf">performance</span>
      </div>
      <div class="gh-auto-detect">
        <p><strong>Auto-detected:</strong></p>
        <ul>
          <li>Modifies: <code>src/db/pool.go</code>, <code>src/db/connection.go</code></li>
          <li>Impact: High (core infrastructure)</li>
          <li>Reviewers suggested: @db-team</li>
        </ul>
      </div>
    </div>
  </div>
</div>

## Conversational Follow-ups

Mention @visor-bot in any comment to ask questions or get clarification:

<div class="github-preview">
  <div class="gh-conversation">
    <div class="gh-conversation-header">Conversation in PR #456</div>
    <div class="gh-comment gh-comment-user">
      <div class="gh-avatar">D</div>
      <div class="gh-comment-body">
        <div class="gh-comment-meta">@developer</div>
        <p>@visor-bot can you explain why you suggested caching for user lookups?</p>
      </div>
    </div>
    <div class="gh-comment gh-comment-bot">
      <div class="gh-avatar gh-avatar-bot">V</div>
      <div class="gh-comment-body">
        <div class="gh-comment-meta">visor-bot replied</div>
        <p>The <code>GetUser()</code> function is called 3 times per request:</p>
        <ol>
          <li><code>middleware.go:45</code> - auth check</li>
          <li><code>handler.go:78</code> - permission check</li>
          <li><code>response.go:23</code> - user data serialization</li>
        </ol>
        <p>Each call queries the database. A request-scoped cache would reduce DB calls from 3 to 1.</p>
        <p>Example: <a href="#">src/cache/request_cache.go</a></p>
      </div>
    </div>
  </div>
</div>

## GitHub Action Options

```yaml
- uses: probelabs/visor-action@v1
  with:
    # Required
    github-token: ${{ secrets.GITHUB_TOKEN }}

    # Optional - GitHub App auth (better rate limits/permissions)
    app-id: ${{ secrets.PROBE_APP_ID }}
    private-key: ${{ secrets.PROBE_APP_PRIVATE_KEY }}
    installation-id: ${{ secrets.PROBE_APP_INSTALLATION_ID }}

    # Optional - custom config file (default: visor.yaml)
    config-file: .visor.yaml

    # Optional - AI provider (default: anthropic)
    ai-provider: anthropic

    # Optional - fail on critical/error issues (default: true)
    fail-on-issues: true

    # Optional - max parallel steps (default: 4)
    max-parallelism: 4
```

## LLM Provider Configuration

```bash
# Anthropic (Claude)
export ANTHROPIC_API_KEY=your-api-key

# Google (Gemini)
export GOOGLE_API_KEY=your-api-key

# OpenAI (GPT-4)
export OPENAI_API_KEY=your-api-key

# Azure OpenAI
export AZURE_OPENAI_API_KEY=your-api-key
export AZURE_OPENAI_ENDPOINT=https://your-resource.openai.azure.com

# AWS Bedrock
export AWS_ACCESS_KEY_ID=your-access-key
export AWS_SECRET_ACCESS_KEY=your-secret-key
export AWS_REGION=us-east-1

# Self-hosted (OpenAI-compatible)
export OPENAI_API_KEY=your-api-key
export OPENAI_BASE_URL=http://localhost:8080/v1

# GitHub Actions example (pick one provider)
# env:
#   ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}
```

## Next Steps

- [Intelligent Code Review](/docs/code-review) - Local CLI, agentic self-review, visor.yaml configuration
- [Chat with Code](/docs/chat-with-code) - Interactive codebase exploration
- [Visor Product Page](/visor) - Full product overview

<style>
/* GitHub Preview Components */
.github-preview {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  margin: 1.5rem 0;
  overflow: hidden;
}

/* Issue/PR Header */
.gh-issue-header, .gh-pr-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background: var(--vp-c-bg);
  border-bottom: 1px solid var(--vp-c-divider);
  flex-wrap: wrap;
}

.gh-icon {
  font-size: 1.25rem;
}

.gh-icon-issue::before { content: '🐛'; }
.gh-icon-pr::before { content: '🔀'; }

.gh-issue-title, .gh-pr-title {
  font-weight: 600;
  flex: 1;
  min-width: 200px;
}

.gh-pr-stats {
  font-family: var(--vp-font-family-mono);
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
}

/* Labels */
.gh-label {
  display: inline-block;
  padding: 0.125rem 0.5rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
  margin-right: 0.25rem;
}

.gh-label-question { background: #d4c5f9; color: #5319e7; }
.gh-label-bug { background: #fcd5d5; color: #b31d28; }
.gh-label-db { background: #bfdadc; color: #0e8a16; }
.gh-label-perf { background: #fff5b1; color: #735c0f; }

/* Comments */
.gh-comment {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border-bottom: 1px solid var(--vp-c-divider);
}

.gh-comment:last-child {
  border-bottom: none;
}

.gh-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--vp-c-brand);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  flex-shrink: 0;
  font-size: 0.875rem;
}

.gh-avatar-bot {
  background: #0969da;
}

.gh-comment-body {
  flex: 1;
  min-width: 0;
}

.gh-comment-body p {
  margin: 0.5rem 0;
}

.gh-comment-body pre {
  margin: 0.75rem 0;
  padding: 0.75rem;
  background: var(--vp-c-bg-alt);
  border-radius: 6px;
  overflow-x: auto;
}

.gh-comment-body code {
  font-size: 0.85rem;
}

.gh-comment-body ol, .gh-comment-body ul {
  margin: 0.5rem 0;
  padding-left: 1.5rem;
}

.gh-comment-meta {
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  margin-bottom: 0.5rem;
}

/* Review Sections */
.gh-review {
  padding: 0;
}

.gh-review-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  border-bottom: 1px solid var(--vp-c-divider);
  font-weight: 500;
}

.gh-review-section {
  padding: 1rem;
  border-left: 3px solid;
  margin: 0.75rem 1rem;
  background: var(--vp-c-bg);
  border-radius: 0 6px 6px 0;
}

.gh-review-pass {
  border-color: #2da44e;
}

.gh-review-pass h4::before {
  content: '✓ ';
  color: #2da44e;
}

.gh-review-warn {
  border-color: #d29922;
}

.gh-review-warn h4::before {
  content: '⚠ ';
  color: #d29922;
}

.gh-review-section h4 {
  margin: 0 0 0.5rem;
  font-size: 0.9rem;
  font-weight: 600;
}

.gh-review-section ul {
  margin: 0;
  padding-left: 1.25rem;
}

.gh-review-section li {
  font-size: 0.9rem;
  margin: 0.25rem 0;
}

/* Suggestions */
.gh-suggestion {
  margin: 1rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  overflow: hidden;
}

.gh-suggestion-header {
  padding: 0.5rem 1rem;
  background: var(--vp-c-bg);
  border-bottom: 1px solid var(--vp-c-divider);
  font-weight: 500;
  font-size: 0.875rem;
}

.gh-suggestion-header::before {
  content: '📝 ';
}

.gh-suggestion-file {
  padding: 0.5rem 1rem;
  font-family: var(--vp-font-family-mono);
  font-size: 0.8rem;
  background: var(--vp-c-bg-soft);
  border-bottom: 1px solid var(--vp-c-divider);
}

.gh-suggestion-diff {
  font-family: var(--vp-font-family-mono);
  font-size: 0.8rem;
}

.gh-diff-del {
  background: #ffebe9;
  padding: 0.25rem 1rem;
  color: #82071e;
}

.gh-diff-add {
  background: #e6ffec;
  padding: 0.25rem 1rem;
  color: #116329;
}

.dark .gh-diff-del {
  background: rgba(248, 81, 73, 0.15);
  color: #f85149;
}

.dark .gh-diff-add {
  background: rgba(63, 185, 80, 0.15);
  color: #3fb950;
}

/* Related/Activity */
.gh-related {
  margin-top: 0.75rem;
  padding-top: 0.75rem;
  border-top: 1px solid var(--vp-c-divider);
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
}

.gh-related::before {
  content: '📎 ';
}

.gh-activity {
  padding: 1rem;
}

.gh-activity-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.gh-auto-detect {
  margin-top: 1rem;
  padding: 1rem;
  background: var(--vp-c-bg);
  border-radius: 6px;
}

.gh-auto-detect p {
  margin: 0 0 0.5rem;
}

.gh-auto-detect ul {
  margin: 0;
  padding-left: 1.25rem;
}

.gh-auto-detect li {
  font-size: 0.9rem;
  margin: 0.25rem 0;
}

/* Conversation */
.gh-conversation-header {
  padding: 1rem;
  background: var(--vp-c-bg);
  border-bottom: 1px solid var(--vp-c-divider);
  font-weight: 600;
}

.gh-conversation-header::before {
  content: '💬 ';
}

/* Dark mode adjustments */
.dark .gh-label-question { background: rgba(212, 197, 249, 0.2); color: #a371f7; }
.dark .gh-label-bug { background: rgba(252, 213, 213, 0.2); color: #f85149; }
.dark .gh-label-db { background: rgba(191, 218, 220, 0.2); color: #3fb950; }
.dark .gh-label-perf { background: rgba(255, 245, 177, 0.2); color: #d29922; }

/* Responsive */
@media (max-width: 640px) {
  .gh-issue-header, .gh-pr-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .gh-issue-title, .gh-pr-title {
    min-width: auto;
  }

  .gh-comment {
    flex-direction: column;
    gap: 0.5rem;
  }

  .gh-avatar {
    width: 24px;
    height: 24px;
    font-size: 0.75rem;
  }
}
</style>
