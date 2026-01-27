# How Probe Works

Probe combines fast text scanning with structure-aware parsing to return grounded, reliable context from real codebases. This page covers **Probe internals** (not Visor workflows).

## The retrieval pipeline

1. **Scan**: ripgrep finds candidate files and matches while honoring ignore rules.
2. **Parse**: tree-sitter builds an AST for structural understanding.
3. **Match**: query terms are matched against code and structure.
4. **Rank**: results are scored for relevance and stability.
5. **Extract**: full functions, classes, or modules are returned.
6. **Shape output**: JSON/SARIF or human output, with token limits when needed.

## Why results are reliable

- **Complete context**: full code blocks, not partial snippets.
- **Deterministic ranking**: consistent ordering across runs.
- **Local-first processing**: your code stays in your environment.

## Agent bootstrap (optional)

If you run Probe in **agent mode** (MCP/ACP), it will also load repo guidance files when present:
`AGENTS.md`, `ARCHITECTURE.md`, and the [AgentSkills](https://agentskills.io/) standard.  
Raw CLI/MCP usage stays unchanged and only exposes retrieval tools.

## Where it runs

- **CLI** in local dev or CI
- **GitHub Actions** for reviews and automation
- **MCP + SDKs** for agents and custom tooling
- **Web UI** for non-engineers

## Related docs

- [Search Reference](/docs/search-reference)
- [Code Extraction](/docs/code-extraction)
- [Output Formats](/docs/output-formats)
- [Advanced CLI](/docs/advanced-cli)
