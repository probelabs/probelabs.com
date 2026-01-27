# Using Probe in the CLI for Advanced AI

This guide shows **workflow patterns** for CLI-driven AI tasks. It assumes Probe is installed and you are running commands from the repo root.

Prerequisites:
- [Probe Installation](/docs/installation)
- [CLI Reference](/docs/cli-mode)

## Pattern: pipe search into chat

```bash
probe search "database connection" --format markdown | probe-chat
```

## Pattern: compile errors -> context -> chat

```bash
rustc main.rs 2>&1 | probe-chat
```

## Pattern: extract with a prompt template

```bash
probe extract src/main.rs:42 --prompt engineer --instructions "Explain this function" | probe-chat
```

## Pattern: find + filter + chat

```bash
probe search "database" | grep "connection" | probe-chat
```

## Pattern: generate a report

```bash
echo "List security risks" | probe-chat > security_report.txt
```

## Tips for large repos

- Use `--max-tokens` and `--max-results` to keep context small.
- Use `--files-only` for a fast first pass.
- Reuse `--session` to avoid duplicates.

## Related

- [AI Chat Mode](/docs/ai-chat)
- [Advanced CLI](/docs/advanced-cli)
