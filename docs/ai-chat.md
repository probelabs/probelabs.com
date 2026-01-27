# AI Chat Mode

Probe Chat gives you a grounded, code-aware chat interface in **CLI** or **Web UI**. It uses the same Probe context engine and works with any supported LLM provider.

## Quick start (run from your repo root)

```bash
# CLI mode (default)
npx -y @probelabs/probe-chat@latest

# Web UI mode
npx -y @probelabs/probe-chat@latest --web
```

Set one provider key first (example):

```bash
export ANTHROPIC_API_KEY=your_key
# or
export OPENAI_API_KEY=your_key
# or
export GOOGLE_API_KEY=your_key
```

## Common usage

```bash
# Ask a single question
npx -y @probelabs/probe-chat@latest --message "Explain the auth flow" --json

# Point to a specific repo
npx -y @probelabs/probe-chat@latest /path/to/repo
```

## Web UI notes

When running with `--web`, allow the folders you want to access and use a dedicated account if exposing it to a team.

See: [Web Interface](/docs/web-interface)

## Configuration

Provider selection, model overrides, tracing, and advanced flags are documented in:

- [CLI Reference](/docs/cli-mode)
- [AI Integration](/docs/ai-integration)

## Related

- [Chat with Code](/docs/chat-with-code)
- [AI Code Editors (MCP/ACP)](/docs/integrations/ai-code-editors)
