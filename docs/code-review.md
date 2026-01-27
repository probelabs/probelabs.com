# Intelligent Code Review

Run AI-assisted code review with repo-owned rules, locally or in CI. Designed for large, multi-team codebases where context, governance, and reproducibility matter.

## Why Visor Code Review?

Visor runs in your infrastructure. Use any LLM provider, define your rules in code, and run locally or in CI/CD — you control data, workflow, and outputs.

Built for individual engineers, platform teams, and engineering leaders who need consistent, auditable reviews.

- **Runs in Your Environment**: Run locally, in CI/CD, or self-hosted. Your code stays where you run it unless your LLM provider sends it elsewhere.
- **Any LLM Provider**: Use Anthropic, OpenAI, Google, Azure, AWS Bedrock, or any OpenAI-compatible self-hosted model. Switch providers without changing your workflow.
- **Rules as Code**: Default checks cover security, architecture, QA, and quality. Add or extend checks in `visor.yaml`, versioned with your repo.
- **Built for Large Codebases**: Handles multi-service repos, cross-team conventions, and complex dependencies, powered by [Probe's](/probe) semantic code understanding.
- **Structured Outputs**: Post PR comments and export JSON or SARIF for CI, dashboards, and code-scanning tools.
- **Explains Why, Not Just What**: Findings include context and reasoning; ask follow-up questions in the PR thread.

## Quick Start

If you install the [GitHub Assistant](/docs/github-assistant), Visor code reviews are included automatically as part of the PR experience.

<Tabs :labels="['GitHub Action', 'Run Locally', 'Custom CI/CD']">
<Tab :index="0">

Add the Visor GitHub Action to get automatic reviews on pull requests and issues:

```yaml
# .github/workflows/visor.yaml
name: Visor

on:
  pull_request:
    types: [opened, synchronize]
  issues:
    types: [opened]
  issue_comment:
    types: [created]

permissions:
  contents: read
  pull-requests: write
  issues: write
  checks: write

jobs:
  visor:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
      - uses: probelabs/visor@main
        env:
          ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}
```

**Optional: GitHub App Authentication**

For better rate limits and permissions, you can configure GitHub App authentication:

```yaml
- uses: probelabs/visor@main
  with:
    app-id: ${{ secrets.PROBE_APP_ID }}
    private-key: ${{ secrets.PROBE_APP_PRIVATE_KEY }}
    installation-id: ${{ secrets.PROBE_APP_INSTALLATION_ID }}
  env:
    ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}
```

These parameters are optional - without them, Visor uses the default `GITHUB_TOKEN` provided by GitHub Actions.

</Tab>
<Tab :index="1">

Review your changes from the terminal before committing:

```bash
# Review your current changes
npx -y @probelabs/visor@latest review

# Review against main branch
npx -y @probelabs/visor@latest review --base main

# Focus on security checks only
npx -y @probelabs/visor@latest review --checks security

# Output JSON for CI integration
npx -y @probelabs/visor@latest review --format json
```

</Tab>
<Tab :index="2">

For other CI systems or custom workflows, run Visor directly:

```bash
# Example: generic CI step
npx -y @probelabs/visor@latest review \
  --format sarif \
  --fail-on error > visor.sarif

# JSON output for custom parsers or dashboards
npx -y @probelabs/visor@latest review --format json > visor.json
```

Use `--format json` for custom pipelines and `--format sarif` for code-scanning tools.

</Tab>
</Tabs>

## LLM Provider Configuration

Visor works with any LLM provider. Configure via environment variables:

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

## Built-in Checks

Every review runs four parallel analysis tracks. Extend or customize any of them.

### Security

- SQL/XSS/Command injection detection
- Auth and authorization flaws
- Secrets in code
- TLS/encryption issues
- Input validation gaps
- Rate limiting recommendations

### Architecture

- Over-engineering detection
- Pattern consistency checks
- Separation of concerns
- Reuse opportunities
- Coupling analysis

### QA

- Missing test coverage
- Magic numbers in tests
- Incomplete assertions
- Edge case gaps
- Test quality analysis

### Code Quality

- Error handling gaps
- N+1 query detection
- Resource leaks
- Dead code identification
- Naming conventions

## Custom Rules

Store configuration with your code. Each team can customize checks without affecting others.

### Configuration File

Create a `visor.yaml` in your repository:

```yaml
# Extend default checks
extends: default

# Add project-specific focus areas
checks:
  security:
    focus: |
      - API authentication (OAuth2, JWT)
      - Input validation on all endpoints
      - Rate limiting on public APIs
    critical_files:
      - "api/auth/*.go"
      - "middleware/security.go"

  performance:
    focus: |
      - Database query efficiency
      - N+1 query detection
      - Connection pool usage
    critical_files:
      - "db/*.go"
      - "cache/*.go"

  # Add custom check category
  api-contracts:
    type: ai
    schema: code-review
    prompt: |
      Verify API changes are backwards compatible.
      Check for breaking changes in request/response schemas.
```

### Real-World Example

- [Tyk visor.yaml](https://github.com/TykTechnologies/tyk/blob/master/visor.yaml) - Extends the default checks, adds deep security and performance review prompts tied to gateway-critical files, and defines custom AI checks (dependency impact and connectivity) with ordered review groups and shared AI sessions.
- [Example Visor PR review](https://github.com/TykTechnologies/tyk/pull/7606#issuecomment-3627828213) - A real review comment showing summary, files-changed analysis, architecture impact notes, and metadata in a PR thread.

### Key Features

- **Rules Live With Your Code**: Configuration is version controlled and code reviewed alongside your project.
- **Team-Specific Configurations**: Use `extends` to inherit org-wide defaults while adding team-specific checks.
- **Add New Check Categories**: Beyond the built-in checks, add your own - API contracts, documentation standards, performance budgets.

## Agentic Self-Review

Visor can be used for agentic workflows where AI reviews its own code, creating self-healing loops that guarantee quality output:

1. **AI Writes Code**: Claude/Cursor/Copilot generates changes
2. **Visor Reviews**: Automated review catches issues
3. **Fix & Retry**: Issues found? Fix and retry. Clean? Commit.

This enables quality gates in automated workflows where AI-generated code is validated before it reaches human reviewers.

## Getting Started

1. **Add the GitHub Action**: Copy the workflow above to `.github/workflows/visor.yaml`
2. **Set up secrets**: Add your LLM provider API key as a repository secret
3. **Or run locally**: `npx -y @probelabs/visor@latest review`
4. **Customize**: Add a `visor.yaml` to configure checks for your project

## Related Documentation

- [GitHub Actions Integration](/docs/github-actions) - Workflow setup, permissions, and advanced options for GitHub Actions
- [GitHub Assistant](/docs/github-assistant) - PR comments, slash commands, and repo-level review automation
- [Visor Workflow Engine](/products/visor) - Full workflow automation beyond code review
- [Probe Code Search](/probe) - The semantic search engine powering Visor
