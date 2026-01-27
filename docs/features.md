# What is Probe?

Probe is the code intelligence engine in the ProbeLabs platform. It reads code as structure (not just text) and returns grounded context for humans and AI across large, real-world codebases.

## Why teams use it

- **Accurate context**: returns full functions, classes, and modules instead of partial snippets.
- **Local-first**: no required cloud indexing and no embeddings by default.
- **Works at scale**: multi-repo, million-line codebases, and complex architectures.
- **Deterministic outputs**: JSON and SARIF for automation and CI.

## Where it fits

Probe powers the platform workflows:

- [Chat with Code](/docs/chat-with-code)
- [Intelligent Code Review](/docs/code-review)
- [GitHub Assistant](/docs/github-assistant)
- [Engineering Process Automation](/docs/use-cases/visor-workflows)

## Core capabilities

### Structure-aware retrieval

Probe uses tree-sitter to understand code structure and return complete, meaningful blocks.

### Ranking and extraction

Results are ranked for relevance and extracted at the right scope (function, class, module) with smart merging.

### Output formats and limits

Use JSON or SARIF output for machines, or human-friendly output for reviews and chat. Token limits keep results safe for LLM context windows.

### Interfaces

- **CLI** for local and CI usage
- **MCP** for agent and editor integrations
- **Node.js SDK** for custom tools
- **Web UI** for non-engineers

## Next steps

- [Quick Start](/docs/quick-start)
- [MCP Protocol](/docs/mcp-server)
- [Web Interface](/docs/web-interface)
- [Advanced CLI](/docs/advanced-cli)
