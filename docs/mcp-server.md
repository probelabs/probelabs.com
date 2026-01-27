# MCP Server Mode

Probe can run as an MCP server so AI editors and agents can fetch grounded code context.

## Two ways to use MCP

### 1) Raw MCP (direct tools)

```json
{
  "mcpServers": {
    "probe": {
      "command": "npx",
      "args": ["-y", "@probelabs/probe@latest", "mcp"]
    }
  }
}
```

### 2) Probe Agent over MCP (recommended)

```json
{
  "mcpServers": {
    "probe-agent": {
      "command": "npx",
      "args": ["-y", "@probelabs/probe@latest", "agent", "--mcp"]
    }
  }
}
```

> Run MCP from the **repo root** you want to analyze so Probe can see the full codebase.

## Agent guidance files

When using **agent mode** (`agent --mcp`), Probe loads repository guidance if present:

- `AGENTS.md` for agent instructions
- `ARCHITECTURE.md` for architecture notes
- [AgentSkills](https://agentskills.io/) standard (if your repo follows it)

Raw MCP (`probe mcp`) does not apply these guidance files.

## Notes

- The MCP server exposes search/extract tools only; no code leaves your machine unless you send it to an LLM.
- Works with any MCP-capable editor or agent.

## Related

- [AI Code Editors (MCP/ACP)](/docs/integrations/ai-code-editors)
- [AI Integration](/docs/ai-integration)
