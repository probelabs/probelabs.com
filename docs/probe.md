# What is Probe?

Probe is an AI-native code intelligence engine built in Rust. It reads code as structure — not just text — using tree-sitter AST parsing and ripgrep-speed file scanning to return grounded, accurate context for humans and AI across large, real-world codebases.

It powers every workflow in the ProbeLabs platform: code search, AI assistants, code review, GitHub automation, and custom tooling. Probe runs locally, requires no cloud indexing, and works across 15 languages out of the box.

## Vision

Most code search tools treat code like text. Probe treats code like structure. When you search for "authentication middleware", Probe doesn't return random lines that contain those words — it returns the complete function, its surrounding context, and ranks results by actual relevance using BM25/TF-IDF scoring.

This matters because AI agents and humans both need complete, accurate context to make good decisions. Partial snippets lead to hallucinations and wrong answers. Probe eliminates that problem at the engine level.

## Architecture

Probe is a three-layer system designed for performance and flexibility:

### Rust Core (Foundation)

The foundation is a high-performance Rust engine handling the search pipeline:

- **Ripgrep file scanning** — ~1GB/s throughput across codebases
- **Tree-sitter AST parsing** — understands code structure in 15 languages
- **BM25/TF-IDF ranking** — SIMD-optimized scoring (4-8x speedup)
- **Smart extraction** — returns complete functions, classes, and modules instead of partial snippets
- **Elastic query parser** — boolean operators, wildcards, search hints

### Node.js SDK (Orchestration)

The SDK wraps the Rust engine in a programmable layer for AI workflows:

- **ProbeAgent** — multi-turn AI conversations with tool execution loops (up to 30 iterations)
- **Multi-provider support** — Anthropic, OpenAI, Google, AWS
- **Session caching** — prevents duplicate code blocks across related searches
- **Token tracking** — keeps results within LLM context windows

### Interfaces

- **CLI** — `probe search`, `probe query`, `probe extract`, `probe-chat`
- **MCP Server** — bidirectional protocol for AI editors (Claude Code, Cursor, Windsurf)
- **Web UI** — browser-based chat interface for non-engineers
- **Node.js SDK** — build custom tools and pipelines programmatically

## Core Commands

Probe has three core commands for different code intelligence tasks.

### Search — Semantic Code Discovery

Find code patterns using natural language, boolean operators, and wildcards:

```bash
probe search "authentication middleware" ./src
```

```bash
probe search "error handling AND retry logic" ./
```

Use search hints to filter results:

```bash
probe search "database connection" ./ ext:py lang:python
```

```bash
probe search "Router" go:github.com/gin-gonic/gin  # search dependencies
```

Control output for AI context windows:

```bash
probe search "auth flow" ./ --max-tokens 12000 --format json
```

[Search reference →](https://github.com/probelabs/probe/blob/main/docs/probe-cli/search.md)

### Query — AST Structural Search

Find code by structure using tree-sitter patterns, independent of naming:

```bash
probe query "fn $NAME($$$PARAMS) -> Result<$$$TYPES>" ./src --language rust
```

```bash
probe query "async function $NAME($$$PARAMS) { $$$BODY }" ./src --language javascript
```

Metavariables match flexibly:

- `$NAME` — matches a single node
- `$$$BODY` — matches multiple nodes
- `$_` — anonymous wildcard

[Query reference →](https://github.com/probelabs/probe/blob/main/docs/probe-cli/query.md)

### Extract — Targeted Code Retrieval

Pull specific code blocks by line, symbol, or range:

```bash
probe extract src/auth.rs:42              # by line number
probe extract src/auth.rs#authenticate    # by symbol name
probe extract src/auth.rs:10-50           # by range
```

Extract from git diffs and clipboard:

```bash
git diff HEAD~1 | probe extract --diff
probe extract --from-clipboard
```

Built-in LLM templates for AI-assisted analysis:

```bash
probe extract src/auth.rs#authenticate --prompt engineer
```

[Extract reference →](https://github.com/probelabs/probe/blob/main/docs/probe-cli/extract.md)

## AI Chat

Interactive AI-powered code exploration from the terminal or browser:

```bash
probe-chat ./my-project
```

```bash
probe-chat ./my-project --web    # browser-based UI
```

Features:

- Multi-turn conversations grounded in your actual code
- Automatic tool selection (search, query, extract, grep, bash)
- Code editing with `--allow-edit`
- Conversation history and session continuity
- Custom personas with `--prompt`

## AI Editor Integration (MCP)

Probe runs as an MCP server, giving AI editors deep code intelligence:

```bash
# Add to Claude Code
claude mcp add probe -- npx -y @probelabs/probe@latest agent --mcp
```

```json
// Claude Desktop / Cursor / Windsurf config
{
  "mcpServers": {
    "probe": {
      "command": "probe",
      "args": ["mcp"]
    }
  }
}
```

**Five tools exposed via MCP:** `search`, `query`, `extract`, `listFiles`, `searchFiles`

Probe is bidirectional — it acts as both an MCP **server** (sharing search capabilities) and an MCP **client** (consuming external tools like Jira, Slack, and databases).

**Transport methods:** `stdio` (local), `HTTP/SSE` (remote), `WebSocket` (real-time)

[MCP reference →](https://github.com/probelabs/probe/blob/main/docs/probe-agent/protocols/mcp.md)

## Node.js SDK

Build custom tools and pipelines on top of Probe programmatically:

```bash
npm install @probelabs/probe@latest
```

```javascript
import { search, query, extract } from '@probelabs/probe';

// Semantic search
const results = await search({
  path: '/project',
  query: 'authentication middleware',
  maxResults: 10,
  reranker: 'hybrid'
});

// AST pattern matching
const functions = await query({
  path: '/project',
  pattern: 'fn $NAME($$$PARAMS) $$$BODY',
  language: 'rust',
  format: 'json'
});

// Targeted extraction
const code = await extract({
  files: ['/project/src/main.rs:42'],
  contextLines: 5,
  format: 'markdown'
});
```

### AI Framework Integration

Generate tool definitions for Vercel AI SDK and LangChain:

```javascript
import { createTools } from '@probelabs/probe';

const tools = createTools({
  sessionId: 'my-session',
  debug: true,
  maxTokens: 4000
});
```

Session-based caching ensures identical session IDs prevent duplicate code blocks across related searches.

[Node.js SDK reference →](https://github.com/probelabs/probe/blob/main/docs/probe-agent/sdk/nodejs-sdk.md)

## Language Support

Probe understands code structure in 15 languages through tree-sitter grammars:

| Language | Extensions | AST Support |
|----------|-----------|-------------|
| Rust | `.rs` | Full |
| JavaScript | `.js`, `.jsx` | Full |
| TypeScript | `.ts`, `.tsx` | Full |
| Python | `.py` | Full |
| Go | `.go` | Full |
| C | `.c`, `.h` | Full |
| C++ | `.cpp`, `.hpp`, `.cc` | Full |
| Java | `.java` | Full |
| Ruby | `.rb` | Full |
| PHP | `.php` | Full |
| Swift | `.swift` | Full |
| C# | `.cs` | Full |
| YAML | `.yaml`, `.yml` | Full |
| HTML | `.html` | Full |
| Markdown | `.md` | Full |

Each language implementation provides:

- Tree-sitter grammar for AST parsing
- Parent node validation for block extraction
- Test code detection and filtering
- Comment association with related code

[Language support reference →](https://github.com/probelabs/probe/blob/main/docs/reference/language-support.md)

## Dependency Searching

Search inside your project's dependencies directly from the CLI:

```bash
# Go modules
probe search "Router" go:github.com/gin-gonic/gin

# npm packages
probe search "middleware" js:express

# Rust crates
probe search "Serialize" rust:serde
```

Probe resolves and downloads dependency source code automatically, so you can understand how libraries work without leaving your terminal.

## Output Formats

Six output formats for different consumers:

```bash
probe search "auth" ./ --format json       # for machines and AI
probe search "auth" ./ --format markdown   # for documentation
probe search "auth" ./ --format xml        # for XML-based tools
probe search "auth" ./ --format plain      # for piping
probe search "auth" ./ --format terminal   # for terminals without color
probe search "auth" ./ --format color      # for terminals with color (default)
```

JSON output structure:

```json
{
  "results": [
    {
      "file": "src/auth.rs",
      "lines": { "start": 10, "end": 25 },
      "node_type": "function",
      "code": "fn authenticate(token: &str) -> Result<User> { ... }",
      "score": 0.95,
      "rank": 1
    }
  ],
  "summary": {
    "count": 5,
    "total_bytes": 1024,
    "total_tokens": 256
  }
}
```

[Output formats reference →](https://github.com/probelabs/probe/blob/main/docs/reference/output-formats.md)

## Security and Performance

### Security

- **Local-first** — no cloud indexing, no embeddings, code stays on your machine
- **File access boundaries** — `allowedFolders` restricts what the agent can access
- **Path canonicalization** — prevents directory traversal attacks
- **Command filtering** — pattern-based bash command restrictions per skill
- **Method filtering** — MCP method whitelisting with wildcard patterns

### Performance

- **~1GB/s file scanning** via ripgrep
- **SIMD-optimized ranking** — 4-8x speedup on BM25/TF-IDF scoring
- **Parser pooling** — tree-sitter parsers reused across queries
- **Session caching** — prevents duplicate processing across related searches
- **Token-aware limits** — `--max-tokens` keeps results within LLM context windows

## Installation

```bash
# npm (recommended)
npm install -g @probelabs/probe@latest

# Docker
docker pull probelabs/probe:latest

# curl (macOS/Linux)
curl -fsSL https://raw.githubusercontent.com/probelabs/probe/main/install.sh | bash

# From source
git clone https://github.com/probelabs/probe.git
cd probe && cargo build --release
```

Verify:

```bash
probe --version
```

[Installation reference →](https://github.com/probelabs/probe/blob/main/docs/installation.md)

## Where Probe Fits

Probe is the context engine behind every ProbeLabs workflow:

- **[Build an AI Assistant](/docs/quick-start)** — define skills, tools, and knowledge in YAML
- **[Chat with Code](/docs/chat-with-code)** — grounded answers from your codebase
- **[Intelligent Code Review](/docs/code-review)** — structured, guardrailed reviews in CI
- **[GitHub Assistant](/docs/github-assistant)** — issue + PR automation in GitHub Actions
- **[Engineering Process Automation](/docs/use-cases/visor-workflows)** — Visor workflows for real processes
- **[Developers & SDK](/docs/use-cases/building-ai-tools)** — custom tools on top of Probe

## Full Reference (GitHub)

Detailed reference docs live on GitHub:

- [Architecture](https://github.com/probelabs/probe/blob/main/docs/reference/architecture.md)
- [CLI Reference](https://github.com/probelabs/probe/blob/main/docs/probe-cli/cli-reference.md)
- [Search](https://github.com/probelabs/probe/blob/main/docs/probe-cli/search.md)
- [Extract](https://github.com/probelabs/probe/blob/main/docs/probe-cli/extract.md)
- [Query](https://github.com/probelabs/probe/blob/main/docs/probe-cli/query.md)
- [AI Agent Overview](https://github.com/probelabs/probe/blob/main/docs/probe-agent/overview.md)
- [MCP Protocol](https://github.com/probelabs/probe/blob/main/docs/probe-agent/protocols/mcp.md)
- [Node.js SDK](https://github.com/probelabs/probe/blob/main/docs/probe-agent/sdk/nodejs-sdk.md)
- [Output Formats](https://github.com/probelabs/probe/blob/main/docs/reference/output-formats.md)
- [Language Support](https://github.com/probelabs/probe/blob/main/docs/reference/language-support.md)

---

Questions? Join the [Discord community](https://discord.gg/hBN4UsTZ) or [book a demo](https://cal.com/nicolo-rebughini-probelabs/30min).
