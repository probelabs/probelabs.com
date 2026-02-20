# Build Your AI Assistant

This guide walks you through building a working AI assistant defined in a single YAML file. You'll clone the quickstart repo, configure an API key, and have a running assistant in minutes.

**Time to complete:** ~10 minutes

## What You'll Build

- A working AI assistant defined in a single YAML file
- Intent classification that routes user requests to the right skill
- Skills with inline knowledge, file-based knowledge, and workflow tools
- Code exploration across local and GitHub repos
- Optional Slack integration

## Prerequisites

- Node.js >= 18
- An API key from [Anthropic](https://console.anthropic.com/settings/keys) (recommended), [OpenAI](https://platform.openai.com/api-keys), or [Google](https://aistudio.google.com/app/apikey)
- git

## Step 1: Clone and Configure

```bash
git clone https://github.com/probelabs/visor-quickstart.git
cd visor-quickstart
cp .env.example .env
```

Open `.env` and uncomment your API key:

```bash
# Anthropic Claude (recommended)
ANTHROPIC_API_KEY=sk-ant-your-key-here
```

If multiple keys are set, Probe uses: Anthropic > OpenAI > Google.

## Step 2: Run the Assistant

### TUI mode (recommended)

```bash
npx -y @probelabs/visor@latest run assistant.yaml --tui
```

The TUI has three views — press **Shift+Tab** to cycle between them:

- **Chat** — interactive conversation with your assistant
- **Logs** — real-time skill activation and tool calls
- **Trace** — full execution trace for debugging

### Single message mode

```bash
npx -y @probelabs/visor@latest run assistant.yaml --message "What can you do?"
```

## Step 3: Understand What Happened

When you sent that message, Probe ran a 5-step pipeline:

1. **Intent classification** — determined the request type (`chat`, `code_help`, or `task`)
2. **Skill selection** — matched the request to relevant skills based on their descriptions
3. **Dependency expansion** — pulled in any skills listed in `requires`
4. **Knowledge + tool injection** — added activated skills' knowledge and tools to the AI's context
5. **Response generation** — the AI responded using the assembled context and tools

All of this is defined in `assistant.yaml` — no custom code required.

## Step 4: Try Different Skills

Each message activates a different skill. Try these:

### Inline knowledge

```bash
npx -y @probelabs/visor@latest run assistant.yaml --message "What can you help me with?"
```

Activates the `capabilities` skill — returns inline markdown knowledge, no tools needed.

### File-based knowledge

```bash
npx -y @probelabs/visor@latest run assistant.yaml --message "How do skills work in Probe?"
```

Activates the `probe-guide` skill — loads `docs/probe-overview.md` via `{% readfile %}`.

### Code exploration

```bash
npx -y @probelabs/visor@latest run assistant.yaml --message "Show me what's in assistant.yaml"
```

Activates the `code-explorer` skill — uses the `code-talk` workflow to search and explore code.

### Engineering with dependencies

```bash
npx -y @probelabs/visor@latest run assistant.yaml --message "Add a comment to README.md"
```

Activates the `engineer` skill — which auto-activates `code-explorer` via `requires: [code-explorer]`.

## How Skills Work

Skills are self-contained capabilities that activate based on user intent. Each skill can provide knowledge, tools, or both. Here's how each type works in `assistant.yaml`.

### Inline Knowledge

The `capabilities` skill provides knowledge directly in YAML — no files, no tools:

```yaml
skills:
  - id: capabilities
    description: user asks what this assistant can do or about its capabilities
    knowledge: |
      ## What I Can Do
      I'm a Probe Labs demo assistant showcasing Probe. I can:
      - **Explain Probe** — how skills, intents, tools, and knowledge work
      - **Explore code** — search this quickstart repo and the Probe engine
      - **Make changes** — create PRs and modify code via the engineer tool
```

### File-Based Knowledge

The `probe-guide` skill loads documentation from a file at runtime using `{% readfile %}`:

```yaml
- id: probe-guide
  description: |
    user asks how Probe works, how to build assistants, about skills,
    intents, tools, knowledge, readfile, YAML config, or deployment
  knowledge: |
    {% readfile "docs/probe-overview.md" %}
```

This keeps your YAML clean and your knowledge docs easy to maintain separately.

### Workflow Tools

The `code-explorer` skill uses the `code-talk` workflow to search code across repos:

```yaml
- id: code-explorer
  description: needs codebase exploration, code search, or implementation details
  tools:
    bash: {}
    code-explorer:
      workflow: code-talk
      inputs:
        projects:
          - name: quickstart
            path: .
            description: This quickstart repo
          - name: probe
            repo: probelabs/visor
            description: The Probe engine
  allowed_commands:
    - "git:log:*"
    - "git:show:*"
    - "git:diff:*"
```

The `allowed_commands` field restricts which bash commands this skill can run. Patterns use colon-delimited globs.

### Skill Dependencies

The `engineer` skill requires `code-explorer` — when `engineer` activates, `code-explorer` automatically activates too:

```yaml
- id: engineer
  description: user wants code changes made, a PR created, or a feature implemented
  requires: [code-explorer]
  tools:
    bash: {}
    engineer:
      workflow: engineer
      inputs: {}
  allowed_commands:
    - "git:*"
    - "npm:*"
  disallowed_commands:
    - "git:push:--force"
    - "git:reset:--hard"
```

Use `disallowed_commands` to block dangerous operations even when broader patterns are allowed.

## Customize It

### 1. Change the assistant's identity

Edit `system_prompt` in `assistant.yaml`:

```yaml
system_prompt: |
  You are a senior engineer helping the team understand our payment system.
  Always cite file paths and line numbers in your answers.
```

### 2. Add your own repos

Add local or GitHub repos to the `code-explorer` skill's project list:

```yaml
projects:
  - name: my-app
    path: /path/to/local/repo
    description: Main application
  - name: shared-lib
    repo: my-org/shared-library
    description: Shared utilities (requires GITHUB_TOKEN)
```

### 3. Add a knowledge skill

Create a new skill with inline knowledge or `{% readfile %}`:

```yaml
- id: onboarding
  description: new team member asks about setup, conventions, or architecture
  knowledge: |
    {% readfile "docs/onboarding.md" %}
```

### 4. Add an MCP tool

Connect external tools via MCP command servers:

```yaml
- id: jira
  description: user mentions Jira, ticket IDs like PROJ-123, or needs ticket info
  knowledge: |
    ## Jira Tools
    - jira_get_issue: Get ticket details by key
    - jira_search: Search with JQL queries
    - jira_create_issue: Create new tickets
  tools:
    jira:
      command: uvx
      args: ["mcp-atlassian"]
      env:
        JIRA_URL: "${JIRA_URL}"
        JIRA_USERNAME: "${JIRA_USERNAME}"
        JIRA_API_TOKEN: "${JIRA_API_TOKEN}"
      allowedMethods:
        - jira_get_issue
        - jira_search
        - jira_create_issue
```

Set the Jira env vars in `.env` and uncomment the skill in `assistant.yaml`.

### 5. Control bash commands

Each skill can declare what bash commands it may or may not run:

```yaml
# Allow only read-only git operations
allowed_commands:
  - "git:log:*"
  - "git:show:*"
  - "git:diff:*"

# Allow broad access but block destructive operations
allowed_commands:
  - "git:*"
disallowed_commands:
  - "git:push:--force"
  - "git:reset:--hard"
```

Patterns use colon-delimited globs. Permissions are set per-skill and merged at runtime.

## Connect to Slack

1. Create a Slack app at [api.slack.com/apps](https://api.slack.com/apps) — enable **Socket Mode**, add bot scopes (`app_mentions:read`, `chat:write`, `im:history`, `im:read`, `im:write`)
2. Add tokens to `.env`:
   ```bash
   SLACK_BOT_TOKEN=xoxb-your-bot-token
   SLACK_APP_TOKEN=xapp-your-app-token
   ```
3. Run in Slack mode:
   ```bash
   npx -y @probelabs/visor@latest run assistant.yaml --slack
   ```

For full Slack app setup with event subscriptions and OAuth, see the [Build a Slack Bot](/docs/guides/slack-bot) guide.

## Test and Lint

Tests are defined directly in `assistant.yaml` under the `tests:` key. They use mock AI providers so no API key is needed:

```bash
npx -y @probelabs/visor@latest test assistant.yaml
```

Lint your configuration for syntax errors and invalid references:

```bash
npx -y @probelabs/visor@latest lint assistant.yaml
```

For more on testing patterns, mocking, and assertions, see [Testing AI Workflows](/docs/guides/testing).

## Probe CLI

For code search without the assistant framework, use the Probe CLI directly:

```bash
npm install -g @probelabs/probe@latest
```

```bash
probe search "auth flow" ./
```

```bash
probe search "auth flow" ./ --max-tokens 12000
```

- [Chat with Code](/docs/chat-with-code) — use Probe with an LLM for interactive code Q&A
- [CLI Reference](/docs/cli-mode) — full list of commands and flags

## Troubleshooting

**No API key set**
You see an error about missing credentials. Uncomment and set at least one API key in `.env`. Probe checks for `ANTHROPIC_API_KEY`, `OPENAI_API_KEY`, then `GOOGLE_API_KEY`.

**Fetch error on imports**
The imported workflow URL is unreachable. Check your network connection. For offline use, download the workflow YAML and use a local `imports` path.

**`undefined` in responses**
A `{% readfile %}` path is wrong or the file doesn't exist. Check that the path is relative to your project root.

**Skill won't activate**
The skill's `description` doesn't match what the user is asking. Make descriptions specific — Probe uses them to match user intent to skills.

**Slack not responding**
Verify both `SLACK_BOT_TOKEN` and `SLACK_APP_TOKEN` are set. Check that Socket Mode is enabled in your Slack app settings and the bot has been invited to the channel.

## Next Steps

- [Quickstart repo on GitHub](https://github.com/probelabs/visor-quickstart) — source code, examples, and issue tracker
- [Build a Slack Bot](/docs/guides/slack-bot) — full Slack app setup with OAuth and event subscriptions
- [Testing AI Workflows](/docs/guides/testing) — mock-based and integration testing for AI pipelines
- [Visor Reference](/docs/visor) — complete workflow engine documentation

---

Questions? Join the [Discord community](https://discord.gg/hBN4UsTZ) or [book a demo](https://cal.com/nicolo-rebughini-probelabs/30min).
