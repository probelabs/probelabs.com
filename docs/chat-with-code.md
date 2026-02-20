---
title: Chat with Code
description: Interactive codebase exploration - ask questions about your code and get answers grounded in source files
---

# Chat with Code

We read code far more than we write it. To move fast, you need an accurate way to explore a large codebase without hallucinations. That's what [Probe](/probe) was built for: grounded answers, semantic understanding, and scale. Probe treats code as structure, not just text.

This isn't just for engineers. Product, support, QA, and anyone who needs reliable context can ask questions and get answers grounded in the actual code.

As teams move toward agentic flows, humans and agents both need the same reliable access to code. Probe exposes one engine through web UI, CLI, and MCP tools so everyone reads from the same source of truth — and the same engine powers automation and AI tooling.

## What You Get

- **Grounded answers**: responses cite files and line ranges to reduce hallucinations
- **Semantic code understanding**: Probe treats code as structure, not just text
- **Web or CLI chat**: use a browser UI (with diagrams) or terminal workflows
- **Agent-ready tools**: MCP/ACP servers for AI editors and automation pipelines
- **Purpose-built prompts**: optimized personas for reading code and documentation
- **Automation-ready**: JSON output and CLI-friendly interfaces for pipelines
- **Runs in your environment**: no required services beyond your chosen LLM provider

See [AI Integration](https://github.com/probelabs/probe/blob/main/docs/probe-agent/ai-integration.md) for available personas and prompt types.

## Quick Start

Run these commands from the same folder as your code (repo root), or pass a path to your codebase.

<Tabs :labels="['Human (AI Coding Assistants)', 'Human (Probe UI/CLI)', 'Agent (Probe MCP Direct)']">
<Tab :index="0">

Use Probe as the code context engine inside coding assistants (Claude Code, Codex, Cursor, etc.).

Example MCP config (drop-in for AI editors that support MCP):

```json
{
  "mcpServers": {
    "probe": {
      "command": "npx",
      "args": ["-y", "@probelabs/probe@latest", "agent", "--mcp"]
    }
  }
}
```

See [AI Code Editors](https://github.com/probelabs/probe/blob/main/docs/use-cases/ai-code-editors.md) for editor-specific setup.

</Tab>
<Tab :index="1">

Use Probe's built-in UI and CLI (no extra services required beyond your LLM provider).

Web UI (rich markdown + diagrams):

```bash
npx -y @probelabs/probe-chat@latest --web
```

CLI:

```bash
npx -y @probelabs/probe-chat@latest
```

One-shot mode with JSON output:

```bash
npx -y @probelabs/probe-chat@latest --message "Explain the auth flow" --json
```

</Tab>
<Tab :index="2">

Use Probe MCP directly for raw context access (no agent layer), or run the Probe agent MCP.

- **Direct MCP** exposes low-level tools (`search`, `query`, `extract`) for precise, programmatic control.
- **Agent MCP** adds reasoning + orchestration on top of those tools, useful for complex, multi-step tasks.
- **Agent MCP** also reads repo guidance (`AGENTS.md`, `ARCHITECTURE.md`, and the [AgentSkills](https://agentskills.io/) standard) when present.

Example MCP config:

```json
{
  "mcpServers": {
    "probe-direct": {
      "command": "npx",
      "args": ["-y", "@probelabs/probe@latest", "mcp"]
    },
    "probe-agent": {
      "command": "npx",
      "args": ["-y", "@probelabs/probe@latest", "agent", "--mcp"]
    }
  }
}
```

Agents can then use Probe's search/query/extract tools to read code with structure and references. This is the entry point for agentic flows.

See [MCP Server Mode](https://github.com/probelabs/probe/blob/main/docs/probe-agent/protocols/mcp-server.md) for full setup details.

</Tab>
</Tabs>

## Multi-Repo and Org-Wide Use

The quick start above assumes a single repository. The simplest workflow is to run Probe from your repo root and ask questions.

For multiple repositories, you have two paths:

- **Simple, self-serve**: run Probe from a top-level folder that contains several repos, or use the multi-repo options in the CLI. See [CLI Reference](https://github.com/probelabs/probe/blob/main/docs/probe-cli/cli-reference.md).
- **Company-wide, multi-project**: if you need org-wide chat across many codebases and complex architectures, we can help. Through Visor and related tools, we provide a robust multi-project setup that routes questions to the right codebase and works across all your projects.

Interested in the multi-project setup? [Book a demo](https://cal.com/leonid-bugaev/30min) or [contact us](/#contact).

## Example Questions

```
How does user authentication work?
Where are database connections configured?
What happens when a payment fails?
How do I add a new API endpoint?
```

## What Answers Look Like

Responses reference the relevant files and line ranges:

```
Authentication is handled by the AuthMiddleware class in src/middleware/auth.go:45.
JWT validation happens in src/auth/jwt.go:78, and role checks are in src/auth/roles.go:23.
```

## Common Workflows

- **Onboarding**: architecture overviews, test layout, where to add new features
- **Cross-team context**: answer product/support/QA questions with code references
- **Impact analysis**: find call sites, configs, and tests affected by a change

## IDE Integration (ACP)

Some editors use ACP (Agent Client Protocol) instead of MCP. Probe supports ACP via the agent command.

Example ACP command (config format varies by editor):

```json
{
  "command": "npx",
  "args": ["-y", "@probelabs/probe@latest", "agent", "--acp"]
}
```

For a concrete example, see [Zed ACP](https://zed.dev/acp).

## Deployment Options

### Local (Personal Use)

```bash
export ANTHROPIC_API_KEY="your-key"
npx -y @probelabs/probe-chat@latest --web
```

### Docker (CLI Mode)

```bash
docker run --rm -it \
  -e ANTHROPIC_API_KEY=your_api_key \
  -v $(pwd):/workspace \
  probelabs/probe-chat
```

### Docker (Web Mode)

```bash
docker run --rm \
  -e ANTHROPIC_API_KEY=your_api_key \
  -v $(pwd):/workspace \
  -p 3000:3000 \
  probelabs/probe-chat --web
```

## Configuration

### LLM Provider Configuration

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
```

### Common Options

- `--web` to launch the browser UI
- `--message "<text>" --json` for non-interactive output
- `--prompt <value>` to use a custom prompt or persona
- Full flag list: [CLI Reference](https://github.com/probelabs/probe/blob/main/docs/probe-cli/cli-reference.md)

## Related Documentation

- [AI Chat](https://github.com/probelabs/probe/blob/main/docs/probe-agent/chat/cli-usage.md) - advanced usage and tracing
- [Web Interface](https://github.com/probelabs/probe/blob/main/docs/probe-agent/chat/web-interface.md) - UI deployment details
- [MCP Server Mode](https://github.com/probelabs/probe/blob/main/docs/probe-agent/protocols/mcp-server.md) - connect agents and AI editors
- [AI Code Editors](https://github.com/probelabs/probe/blob/main/docs/use-cases/ai-code-editors.md) - editor integrations
