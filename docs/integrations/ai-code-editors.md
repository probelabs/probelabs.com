---
title: AI Code Editors (MCP/ACP)
description: Connect Probe to AI code editors via MCP or ACP for grounded code understanding
---

# AI Code Editors (MCP/ACP)

This guide explains how to integrate Probe with AI-powered code editors so assistants can read your codebase with grounded context. Probe supports both MCP and ACP.

## Overview

AI code editors and assistants are powerful tools, but they often struggle with large codebases because they can't efficiently search and understand your entire project. Probe solves this problem by providing a specialized code search capability that AI assistants can use to find and understand relevant code.

## Quick Setup

### Choose a Connection Mode

```bash
# Agent MCP (recommended) - reasoning + orchestration
npx -y @probelabs/probe@latest agent --mcp

# Direct MCP (raw tools)
npx -y @probelabs/probe@latest mcp

# ACP (Agent Client Protocol) for ACP-based IDEs
npx -y @probelabs/probe@latest agent --acp
```

**Migrating from @probelabs/probe-mcp?** This is a drop-in replacement for raw MCP access: replace `npx @probelabs/probe-mcp` with `npx @probelabs/probe mcp`.

### Repository guidance

When you run **agent mode** (`agent --mcp` / `agent --acp`), Probe loads repo guidance files if present:

- `AGENTS.md` for agent-specific instructions
- `ARCHITECTURE.md` for architecture context and constraints
- [AgentSkills](https://agentskills.io/) standard (if your repo follows it)

Place these files in the **repo root** so the agent can pick them up automatically.  
Raw MCP (`probe mcp`) exposes tools only and does **not** apply guidance files.

### Configuring Your AI Editor (MCP)

#### For Cline

1. Create a `.cline` directory in your project root:
   ```bash
   mkdir -p .cline
   ```

2. Create an MCP configuration file:
   ```bash
   # Create the configuration file
   touch .cline/mcp_config.json
   ```

3. Add the following configuration to `.cline/mcp_config.json` (pick one server):
   ```json
   {
     "mcpServers": {
       "probe-agent": {
         "command": "npx",
         "args": [
           "-y",
           "@probelabs/probe@latest",
           "agent",
           "--mcp"
         ]
       },
       "probe-direct": {
         "command": "npx",
         "args": [
           "-y",
           "@probelabs/probe@latest",
           "mcp"
         ]
       }
     }
   }
   ```

4. Start Cline in your project directory and begin asking questions about your code.

#### For Roo Code

[Roo Code](https://github.com/RooVetGit/Roo-Code) can be configured the same way as other editors via MCP:

1. Follow the installation instructions from the Roo Code GitHub repository
2. Configure Roo to use Probe via MCP using the same configuration pattern
3. Start using Roo with Probe integration

#### For Cursor and Windsurf

1. Install Cursor or Windsurf
2. Configure the editor to use MCP
3. Add the Probe MCP server configuration
4. Restart the editor to apply changes

#### For Other AI Assistants

Check your AI editor's documentation for MCP configuration. The general pattern is similar:

1. Find where your editor stores MCP configuration
2. Add the Probe MCP server configuration
3. Restart your editor or reload the configuration

## ACP-Based Editors (Example: Zed)

Some editors use ACP instead of MCP. In those cases, configure the editor to run:

```json
{
  "command": "npx",
  "args": ["-y", "@probelabs/probe@latest", "agent", "--acp"]
}
```

See [Zed ACP](https://zed.dev/acp) for a concrete ACP example.

## Using Probe with Your AI Editor

Once configured, you can ask your AI assistant questions about your codebase:

- "Find all authentication-related functions in the project"
- "Show me how error handling is implemented"
- "Search for code that processes user input"

The AI will use Probe to search your codebase and provide relevant code snippets and explanations.

## Checking Logs and Debugging

If you encounter issues with the integration:

### Enable Debug Mode

```bash
# Run the MCP server with debug logging
DEBUG=1 npx -y @probelabs/probe@latest mcp
```

This will show detailed logs of:
- Tool calls from the AI
- Search queries being executed
- Results being returned

### Common Issues and Solutions

| Issue | Solution |
|-------|----------|
| AI doesn't use Probe | Explicitly ask the AI to use Probe: "Using Probe, search for..." |
| Empty search results | Try a simpler query or check if you're searching in the right directory |
| MCP server not starting | Check your MCP configuration and ensure npx is installed |
| Permission errors | Check file permissions on your codebase |

### Verifying the Integration

To verify that the integration is working:

1. Start your AI editor
2. Ask a question like: "Using Probe, find all functions related to authentication in this project"
3. Check if the AI responds with relevant code snippets
4. If not, check the MCP server logs for errors

## Advanced Configuration

For more control over the MCP server:

```json
{
  "mcpServers": {
    "probe-agent": {
      "command": "npx",
      "args": [
        "-y",
        "@probelabs/probe@latest",
        "agent",
        "--mcp"
      ],
      "env": {
        "PROBE_DEFAULT_PATHS": "/path/to/project1,/path/to/project2",
        "PROBE_MAX_TOKENS": "20000",
        "DEBUG": "1"
      }
    }
  }
}
```

This configuration:
- Sets default search paths
- Limits the maximum tokens returned
- Enables debug logging

## Next Steps

- For advanced MCP usage, see the [MCP Server Mode](/docs/mcp-server)
- For larger queries or team collaboration, check out the [Web Interface](/docs/web-interface)
- For CLI-based workflows, explore [Advanced CLI Usage](/docs/advanced-cli)
