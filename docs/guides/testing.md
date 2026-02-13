# The Art of Testing AI Workflows: A Practical Guide

**Here's the uncomfortable truth about AI applications:** they're notoriously hard to test. Your LLM gives different responses to the same prompt. Your API integrations return live data that changes daily. Your workflow routing depends on classification models that drift over time. Traditional unit testing falls apart when your system's behavior is fundamentally non-deterministic.

Teams typically face two extremes:
- **Static mocks everywhere** - Fast and deterministic, but they drift from reality. Your tests pass while production breaks.
- **Full integration testing** - Tests against real APIs, but slow, expensive, and flaky. Non-deterministic AI responses make assertions nearly impossible.

**Visor offers a middle ground.**

This guide shows you how to build a testing strategy that combines the best of both approaches. You'll learn to capture real behavior, create deterministic test suites, detect drift before users do, and maintain a living list of use cases that must work 100% of the time.

The secret? **Test-driven development for AI**, where you let the AI agent itself help you build tests from real-world behavior.

> **New to Visor testing?** Start with the [Getting Started guide](https://github.com/probelabs/visor/blob/main/docs/testing/getting-started.md) for a quick introduction, then return here for advanced patterns.

---

## Where Tests Live

Tests can live in the same file as your workflow (convenient for small projects) or in a separate file (better for larger projects with many use cases):

```yaml
# Option 1: Same file (assistant.yaml)
version: "1.0"

steps:
  classify:
    type: ai
    prompt: "Classify: {{ question }}"

tests:
  cases:
    - name: jira-routing
      # ...
```

```yaml
# Option 2: Separate file (assistant.tests.yaml)
# Reference: visor test --config assistant.yaml --tests assistant.tests.yaml
tests:
  cases:
    - name: jira-routing
      # ...
```

**Pro tip:** Your test cases serve as a living specification of use cases that must work 100% of the time. When product requirements change, update the test cases first - they become your source of truth for expected behavior.

---

## The Testing Problem with AI Apps

Consider a simple AI assistant that routes user questions to different skills:

```
User: "Get ticket TT-9234"
     ↓
[Intent Classification] → detects "jira" skill needed
     ↓
[Jira API Call] → fetches real ticket data
     ↓
[Response Generation] → "TT-9234: Graceful shutdown of Gateway..."
```

What makes this hard to test?

1. **Non-deterministic AI** - The intent classifier might return `{skills: ["jira"]}` or `{skills: ["jira", "support"]}` depending on model temperature
2. **Live API data** - The Jira ticket has new comments since yesterday
3. **Chained dependencies** - The response generation depends on both classification AND API results
4. **Nested workflows** - Intent routing calls sub-workflows that call other sub-workflows

The two traditional extremes both fall short here:
- **Static mocking** is fast but fictional - your mocks become stale within weeks
- **Live API testing** is real but fragile - every test run gives different results

What you need is a way to:
1. Capture real behavior automatically
2. Run fast, deterministic tests daily
3. Detect when mocks drift from reality
4. Test specific integration points in isolation

That's exactly what Visor's testing framework provides.

> **Deep dive:** See the [DSL Reference](https://github.com/probelabs/visor/blob/main/docs/testing/dsl-reference.md) for the complete testing syntax and options.

---

## The Evolution: From Chaos to Confidence

Let me tell you how we evolved our testing strategy, step by step.

### Stage 1: No Tests

Does this look familiar? A workflow that works in development, deployed to production with manual spot-checks:

```yaml
# Our first assistant - zero tests
checks:
  chat:
    type: workflow
    workflow: assistant
    args:
      question: "{{ conversation.current.text }}"
      system_prompt: "You are a helpful assistant."
      intents:
        - name: chat
          description: "General conversation"
        - name: code_help
          description: "Questions about code"
      skills:
        - name: jira
          description: "Jira ticket lookup"
        - name: code-explorer
          description: "Code search and exploration"
```

**The pain:**
- How do you know if a prompt change broke something?
- How do you verify routing still works after adding a new skill?
- How do you debug when users report "it used to work"?

### Stage 2: Basic Mocks

The natural first step - add mocked tests for fast CI (see [Fixtures and Mocks documentation](https://github.com/probelabs/visor/blob/main/docs/testing/fixtures-and-mocks.md) for full details):

```yaml
tests:
  cases:
    - name: basic-jira-routing
      flow:
        - name: test-flow
          execution_context:
            conversation:
              current: { text: "Get ticket TT-123" }
          mocks:
            chat[]:
              - text: "Here is ticket TT-123."
              - intent: chat
              - skills: [jira]
          expect:
            calls:
              - step: chat
                exactly: 1
```

**What you gain:**
- Fast, deterministic CI runs
- Catches obvious regressions

**The new pain:**
- How do you know if mocks reflect reality?
- When was the last time you updated them?
- Tests pass, but production behaves differently - why?

### Stage 3: The No-Mocks Revelation

Then we discovered `--no-mocks` mode:

```bash
visor test --config assistant.yaml --no-mocks
```

Output:
```
🔴 NO-MOCKS MODE: Running with real providers

📋 Suggested mocks (copy to your test case):
mocks:
  classify:
    intent: question
    skills: [jira]
    confidence: 0.94
  fetch-ticket:
    data:
      key: TT-9234
      summary: Graceful shutdown of Gateway
      status: Closed
      labels: [customer_bug, jira_escalated]
```

**The insight:** Let the real system generate your mocks. No more guessing what API responses look like.

### Stage 4: API Drift Detection

Running `--no-mocks` with existing mocks shows what changed:

```
🔄 API drift (mock vs real output):
  ~ fetch-ticket: data.labels: array length 3 → 5
  ~ fetch-ticket: data.labels[3]: (added) "rel3-2025-candidate"
  ~ fetch-ticket: data.comments: array length 1 → 5
```

**Now we knew:**
- Mocks were 3 months stale
- Tickets had new labels we weren't handling
- Our test assertions were too brittle

### Stage 5: Partial Mocking

We wanted real HTTP calls but mocked AI (for speed and determinism). See [CLI documentation](https://github.com/probelabs/visor/blob/main/docs/testing/cli.md) for all available flags:

```bash
visor test --no-mocks-for http_client
```

```
🟡 PARTIAL-MOCK MODE: Real providers for: http_client
   Other provider types will still use mocks
```

**The sweet spot:**
- Real API integration testing
- Deterministic AI responses
- Fast enough for CI

### Stage 6: Nested Workflow Testing

Our assistant grew complex - workflows calling workflows (see [Workflows documentation](https://github.com/probelabs/visor/blob/main/docs/workflows.md) for workflow composition patterns):

```
chat (entry point)
  └── assistant (workflow)
        ├── route-intent (calls intent-router workflow)
        ├── build-config (script)
        └── generate-response (AI)
```

Dotted-path syntax let us test each layer:

```yaml
mocks:
  chat.route-intent:
    skills: [jira]
  chat.generate-response:
    text: "TT-9234: Graceful shutdown..."

expect:
  outputs:
    - step: chat.route-intent
      path: skills
      contains_unordered: [jira]
```

**Now we could verify:** "When user asks about TT-9234, the jira skill activates"

---

## Test-Driven Development for AI Workflows

Here's the workflow we now use when building new features. The key insight: **let the AI agent help you build tests**.

### Step 1: Define Use Cases First

Before writing any workflow code, define what you're testing:

```yaml
tests:
  defaults:
    strict: true
    ai_provider: mock

  cases:
    # Use case 1: Jira ticket queries
    - name: jira-ticket-query
      description: User asks about a specific Jira ticket
      flow:
        - name: test-jira-routing
          event: manual
          fixture: local.minimal
          routing:
            max_loops: 1
          execution_context:
            conversation:
              transport: slack
              thread: { id: "test-1" }
              messages: [{ role: user, text: "Get ticket TT-9234", timestamp: "2024-01-01T00:00:00Z" }]
              current: { role: user, text: "Get ticket TT-9234", timestamp: "2024-01-01T00:00:00Z" }
              attributes: { channel: "C123", user: "U456" }
          # No mocks yet - we'll generate them with --no-mocks
          expect:
            outputs:
              - step: chat.route-intent
                path: skills
                contains_unordered: [jira]

    # Use case 2: Code questions
    - name: code-exploration-query
      description: User asks about codebase
      flow:
        - name: test-code-routing
          event: manual
          fixture: local.minimal
          routing:
            max_loops: 1
          execution_context:
            conversation:
              transport: slack
              thread: { id: "test-2" }
              messages: [{ role: user, text: "How does authentication work?", timestamp: "2024-01-01T00:00:00Z" }]
              current: { role: user, text: "How does authentication work?", timestamp: "2024-01-01T00:00:00Z" }
              attributes: { channel: "C123", user: "U456" }
          expect:
            outputs:
              - step: chat.route-intent
                path: skills
                contains_unordered: [code-explorer]
```

### Step 2: Run No-Mocks to Capture Reality

```bash
visor test --config assistant.yaml --no-mocks
```

The test will fail (no mocks), but you get the real outputs:

```
📋 Suggested mocks (copy to your test case):
mocks:
  chat.route-intent:
    intent: chat
    skills: [jira]
    tags: []
    confidence: 0.92
  chat.build-config:
    mcp_servers:
      jira:
        command: "uvx"
        args: ["mcp-atlassian"]
    knowledge: |
      ## Jira Tools Available
      - jira_get_issue: Get issue details
  chat.generate-response:
    text: |
      **TT-9234: Graceful shutdown of Gateway**

      Status: Closed
      Assignee: Maciej Wojciechowski

      This ticket tracks implementing graceful shutdown...
```

### Step 3: Create Mocks from Real Data

Copy the suggested mocks into your test:

```yaml
- name: jira-ticket-query
  flow:
    - name: test-jira-routing
      event: manual
      fixture: local.minimal
      routing:
        max_loops: 1
      execution_context:
        conversation:
          transport: slack
          thread: { id: "test-1" }
          messages: [{ role: user, text: "Get ticket TT-9234", timestamp: "2024-01-01T00:00:00Z" }]
          current: { role: user, text: "Get ticket TT-9234", timestamp: "2024-01-01T00:00:00Z" }
          attributes: { channel: "C123", user: "U456" }
      mocks:
        chat.route-intent:
          intent: chat
          skills: [jira]
          tags: []
        chat.build-config:
          mcp_servers: {}
          knowledge: "Jira tools activated"
        chat.generate-response:
          text: "TT-9234: Graceful shutdown of Gateway - Status: Closed"
      expect:
        calls:
          - step: chat
            exactly: 1
          - step: chat.route-intent
            exactly: 1
          - step: chat.build-config
            exactly: 1
          - step: chat.generate-response
            exactly: 1
        outputs:
          - step: chat.route-intent
            path: skills
            contains_unordered: [jira]
          - step: chat.generate-response
            path: text
            matches: "TT-9234"
```

### Step 4: Fast Tests for Development

Now you have deterministic tests that run in milliseconds:

```bash
$ visor test --config assistant.yaml

✓ jira-ticket-query (0.12s)
✓ code-exploration-query (0.09s)
✓ support-escalation (0.11s)

3 passed, 0 failed (0.32s)
```

Use these for:
- Pre-commit hooks
- PR checks
- Local development iteration

### Step 5: Full Integration Tests for Big Changes

For nightly builds or when changing AI models, run the full suite:

```bash
visor test --config assistant.yaml --no-mocks
```

Or test specific integration points:

```bash
# Test real Jira API, mocked AI
visor test --no-mocks-for http_client

# Test real AI classification, mocked APIs
visor test --no-mocks-for ai
```

**When to run full integration tests:**
- Nightly CI builds
- Before major releases
- After changing AI models or prompts
- When API providers update their schemas

---

## The Two-Tier Testing Strategy

Here's the testing pyramid for AI workflows:

```
        ┌─────────────────┐
        │   Full No-Mocks │  ← Nightly, model changes
        │   Integration   │     (minutes, real APIs)
        └────────┬────────┘
                 │
        ┌────────┴────────┐
        │  Partial Mocks  │  ← PR merges, staging
        │  (real HTTP,    │     (seconds, real APIs)
        │   mocked AI)    │
        └────────┬────────┘
                 │
   ┌─────────────┴─────────────┐
   │      Full Mocks           │  ← Every commit, pre-push
   │   (fast, deterministic)   │     (milliseconds)
   └───────────────────────────┘
```

### Tier 1: Fast Mocked Tests (Every Commit)

See [CI Integration](https://github.com/probelabs/visor/blob/main/docs/testing/ci.md) for complete CI/CD setup examples.

```yaml
# .github/workflows/ci.yml
- name: Run fast tests
  run: visor test --config assistant.yaml
```

- **Speed:** Milliseconds
- **Reliability:** 100% deterministic
- **Coverage:** Logic, routing, transformations
- **When:** Every commit, pre-push hooks

### Tier 2: Integration Tests (Nightly/Releases)

```yaml
# .github/workflows/nightly.yml
- name: Run integration tests
  run: visor test --config assistant.yaml --no-mocks-for http_client
  env:
    JIRA_API_TOKEN: ${{ secrets.JIRA_API_TOKEN }}
```

- **Speed:** Seconds to minutes
- **Reliability:** May flake on API issues
- **Coverage:** Real API contracts, data freshness
- **When:** Nightly, before releases, after model changes

---

## Detecting When to Update Mocks

The API drift detection tells you when mocks are stale:

```bash
visor test --config assistant.yaml --no-mocks-for http_client
```

```
🔄 API drift (mock vs real output):
  ~ fetch-issues: data[0].labels: array length 3 → 5
  ~ fetch-issues: data[0].subtasks: array length 2 → 5
  ~ fetch-issues: data[0].comments: array length 1 → 5
```

### Reading the Drift Report

| Symbol | Meaning |
|--------|---------|
| `~` | Field changed |
| `(added)` | New field appeared |
| `(removed)` | Field disappeared |
| `→` | Value changed from → to |

### When Drift is OK

- **Timestamps changed** - Expected, ignore
- **Comment count increased** - Normal activity
- **New optional fields** - API evolved, probably fine

### When Drift is a Problem

- **Required fields removed** - Your code might break
- **Data types changed** - `string → array` will crash
- **Status values changed** - Your routing logic might fail

---

## Complete Example: Building a Tested AI Assistant

Let's build a complete test suite for an AI assistant that routes to Jira, code exploration, and support skills.

### The Workflow

For workflow syntax details, see [Liquid Templates](https://github.com/probelabs/visor/blob/main/docs/liquid-templates.md) and [Workflows](https://github.com/probelabs/visor/blob/main/docs/workflows.md).

```yaml
# tyk-assistant.yaml
version: "1.0"

imports:
  - https://raw.githubusercontent.com/probelabs/visor-ee/master/workflows/assistant.yaml

checks:
  chat:
    type: workflow
    workflow: assistant
    args:
      question: "{{ conversation.current.text }}"
      system_prompt: |
        You are the Tyk AI Assistant, helping developers with the Tyk API Gateway ecosystem.
      intents:
        expression: "loadConfig('config/intents.yaml')"
      skills:
        expression: "loadConfig('config/skills.yaml')"
```

The imported `assistant` workflow contains sub-steps:
- `route-intent` - Classifies the question and selects skills
- `build-config` - Builds MCP servers and knowledge context
- `generate-response` - Generates the final AI response

### The Test Suite

For the complete DSL syntax, see the [DSL Reference](https://github.com/probelabs/visor/blob/main/docs/testing/dsl-reference.md). For more examples, check the [Testing Cookbook](https://github.com/probelabs/visor/blob/main/docs/testing/cookbook.md).

```yaml
tests:
  defaults:
    strict: true
    ai_provider: mock

  cases:
    # ============================================
    # JIRA SKILL TESTS
    # ============================================
    - name: jira-ticket-by-id
      description: Direct ticket ID query activates jira skill
      tags: [jira, routing]
      flow:
        - name: ticket-id-routing
          event: manual
          fixture: local.minimal
          routing:
            max_loops: 1
          execution_context:
            conversation:
              transport: slack
              thread: { id: "test-jira" }
              messages: [{ role: user, text: "Get ticket TT-9234", timestamp: "2024-01-01T00:00:00Z" }]
              current: { role: user, text: "Get ticket TT-9234", timestamp: "2024-01-01T00:00:00Z" }
              attributes: { channel: "C123", user: "U456" }
          mocks:
            chat.route-intent:
              intent: chat
              skills: [jira]
              tags: []
            chat.build-config:
              mcp_servers: {}
              knowledge: "Jira tools activated"
            chat.generate-response:
              text: "TT-9234: Graceful shutdown of Gateway"
          expect:
            calls:
              - step: chat
                exactly: 1
              - step: chat.route-intent
                exactly: 1
              - step: chat.build-config
                exactly: 1
              - step: chat.generate-response
                exactly: 1
            outputs:
              - step: chat.route-intent
                path: skills
                contains_unordered: [jira]
              - step: chat.generate-response
                path: text
                matches: "TT-9234"

    # ============================================
    # CODE EXPLORATION TESTS
    # ============================================
    - name: code-question-routing
      description: Code questions activate code-explorer skill
      tags: [code, routing]
      flow:
        - name: code-routing
          event: manual
          fixture: local.minimal
          routing:
            max_loops: 1
          execution_context:
            conversation:
              transport: slack
              thread: { id: "test-code" }
              messages: [{ role: user, text: "How does the authentication middleware work?", timestamp: "2024-01-01T00:00:00Z" }]
              current: { role: user, text: "How does the authentication middleware work?", timestamp: "2024-01-01T00:00:00Z" }
              attributes: { channel: "C123", user: "U456" }
          mocks:
            chat.route-intent:
              intent: code_help
              skills: [code-explorer]
              tags: []
            chat.build-config:
              mcp_servers: {}
              knowledge: "Code exploration tools activated"
            chat.generate-response:
              text: "The authentication middleware validates JWT tokens..."
          expect:
            outputs:
              - step: chat.route-intent
                path: skills
                contains_unordered: [code-explorer]

    # ============================================
    # MULTI-SKILL TESTS
    # ============================================
    - name: jira-with-code-context
      description: Ticket query with code context activates both skills
      tags: [jira, code, routing]
      flow:
        - name: multi-skill-routing
          event: manual
          fixture: local.minimal
          routing:
            max_loops: 1
          execution_context:
            conversation:
              transport: slack
              thread: { id: "test-multi" }
              messages: [{ role: user, text: "TT-9234 mentions a memory leak - can you find the relevant code?", timestamp: "2024-01-01T00:00:00Z" }]
              current: { role: user, text: "TT-9234 mentions a memory leak - can you find the relevant code?", timestamp: "2024-01-01T00:00:00Z" }
              attributes: { channel: "C123", user: "U456" }
          mocks:
            chat.route-intent:
              intent: code_help
              skills: [jira, code-explorer]
              tags: []
            chat.build-config:
              mcp_servers: {}
              knowledge: "Jira and code exploration tools activated"
            chat.generate-response:
              text: "Looking at TT-9234 and the codebase..."
          expect:
            outputs:
              - step: chat.route-intent
                path: skills
                contains_unordered: [jira, code-explorer]

    # ============================================
    # INTEGRATION TEST (run with --no-mocks)
    # ============================================
    - name: real-jira-integration
      description: Full integration test with real Jira API
      tags: [integration, jira, slow]
      flow:
        - name: real-api-test
          event: manual
          fixture: local.minimal
          routing:
            max_loops: 1
          execution_context:
            conversation:
              transport: slack
              thread: { id: "test-integration" }
              messages: [{ role: user, text: "Get ticket TT-9234", timestamp: "2024-01-01T00:00:00Z" }]
              current: { role: user, text: "Get ticket TT-9234", timestamp: "2024-01-01T00:00:00Z" }
              attributes: { channel: "C123", user: "U456" }
          # Mocks will be overridden by --no-mocks-for http_client
          mocks:
            chat.route-intent:
              intent: chat
              skills: [jira]
              tags: []
            chat.build-config:
              mcp_servers: {}
              knowledge: "Jira tools activated"
            chat.generate-response:
              text: "TT-9234: Graceful shutdown of Gateway"
          expect:
            calls:
              - step: chat
                exactly: 1
            outputs:
              - step: chat.route-intent
                path: skills
                contains_unordered: [jira]
```

### Running the Tests

```bash
# Fast tests - every commit
visor test --config assistant.yaml
# → 5 passed (0.4s)

# Skip slow integration tests locally
visor test --config assistant.yaml --exclude-tags slow
# → 4 passed (0.3s)

# Integration tests - nightly
visor test --config assistant.yaml --tags integration --no-mocks-for http_client
# → 1 passed (2.1s), shows API drift if any

# Full no-mocks - after model changes
visor test --config assistant.yaml --no-mocks
# → 5 passed (8.3s), captures fresh suggested mocks
```

---

## Quick Reference

### CLI Commands

See the full [CLI reference](https://github.com/probelabs/visor/blob/main/docs/testing/cli.md) for all options.

```bash
# Run all tests
visor test --config workflow.yaml

# Run specific test
visor test --only "test-name"

# Run by tags
visor test --tags integration
visor test --exclude-tags slow

# No-mocks modes
visor test --no-mocks                      # All real
visor test --no-mocks-for http_client      # Real HTTP only
visor test --no-mocks-for http_client,ai   # Real HTTP and AI
```

### Assertion Syntax

See the full [Assertions reference](https://github.com/probelabs/visor/blob/main/docs/testing/assertions.md) for all available matchers.

```yaml
expect:
  calls:
    - step: my-step
      exactly: 1        # Called exactly once
      at_least: 1       # Called one or more times
      at_most: 3        # Called at most 3 times

  outputs:
    - step: my-step
      path: data.field
      equals: "value"
      matches: "regex.*"
      contains_unordered: [a, b, c]

  workflow_output:
    - path: result
      contains: "expected"
      not_contains: "error"
```

### Dotted-Path Syntax

For testing nested workflows, see [Flow Tests documentation](https://github.com/probelabs/visor/blob/main/docs/testing/flows.md).

```yaml
# Mock nested steps
mocks:
  parent.child-step:
    output: "value"

# Assert on nested steps
expect:
  outputs:
    - step: parent.child-step
      path: field
      equals: "value"
```

---

## Troubleshooting

For more troubleshooting scenarios, see the [Troubleshooting guide](https://github.com/probelabs/visor/blob/main/docs/testing/troubleshooting.md).

### "Step executed without expect"

Strict mode caught an unexpected step. Add it to expectations:

```yaml
expect:
  calls:
    - step: unexpected-step
      exactly: 1
```

### Nested steps show 0 executions

You're mocking the parent step entirely. Mock nested steps instead:

```yaml
# Instead of this (blocks nested execution):
mocks:
  chat:
    text: "response"

# Do this (allows nested steps to run):
mocks:
  chat.route-intent:
    skills: [jira]
  chat.generate-response:
    text: "response"
```

### API drift every run

Some fields are volatile (timestamps, IDs). Make assertions flexible:

```yaml
# Too brittle:
- path: data.updated_at
  equals: "2024-01-15T10:00:00Z"

# Better:
- path: data.status
  equals: "Closed"
```

### Tests pass locally, fail in CI

Check environment variables:
```bash
# Required for integration tests
JIRA_BASE_URL=https://company.atlassian.net
JIRA_EMAIL=user@company.com
JIRA_API_TOKEN=your-token
```

---

**The bottom line:** Testing AI workflows doesn't have to be a nightmare. Start with fast mocked tests for development velocity, use `--no-mocks` to capture real behavior, and run integration tests when it matters. Your future self debugging a production issue at 2am will thank you.

---

**Questions?** [Join our Discord](https://discord.gg/hBN4UsTZ) or [open an issue](https://github.com/probelabs/visor/issues).
