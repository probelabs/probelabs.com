# AI Integration (Probe)

This page is the **hub** for Probe’s AI integrations. Pick the path that matches how you work, then follow the dedicated guide.

## Choose your integration

- **AI Code Editors / Agents**: [AI Code Editors (MCP/ACP)](/docs/integrations/ai-code-editors)
- **Raw MCP access**: [MCP Server](/docs/mcp-server)
- **Chat in CLI or Web UI**: [AI Chat Mode](/docs/ai-chat)
- **Build custom tools**: [Node.js SDK](/docs/nodejs-sdk)
- **Human-friendly UI**: [Web Interface](/docs/web-interface)
- **Advanced pipelines**: [CLI for AI Workflows](/docs/use-cases/cli-ai-workflows)

## Quick mental model

- **Probe** supplies grounded code context.
- **Visor** orchestrates deterministic workflows.
- **LLMs** are optional — you can plug in any provider.

## Providers & auth

Set provider keys via environment variables (Anthropic, OpenAI, Google, etc.). Each integration page shows the exact variables and flags to use.

## Run from your repo

Most commands should be run from the **root folder of the repo** you want to analyze. That gives Probe the full project context.
