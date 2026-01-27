# What is Visor?

Visor is a deterministic workflow engine for SDLC automation and code review orchestration. It turns human and AI processes into explicit steps with validation, approvals, and safe fallbacks so work stays predictable.

Visor is designed to run inside your infrastructure, typically in GitHub Actions or locally via CLI. It uses Probe to ground every step in real code context, so automation is based on source of truth, not stale docs.

## Where Visor Runs

- **GitHub Actions**: native check runs, annotations, and PR comments.
- **CLI**: run locally or in CI as part of custom pipelines.

## How Visor Works

- **Config-driven workflows**: define steps in YAML and version them with your repo.
- **Deterministic steps + AI steps**: mix scripts, API calls, and AI checks with schemas.
- **Guardrails by default**: timeouts, retries, and explicit failure paths.
- **Grounded context**: Probe provides precise code context for every step.

## When to Use Visor

- Code review automation with guardrails
- Issue and PR triage in GitHub
- Release notes and audit workflows
- Product and engineering process automation

## Next Steps

- [Engineering Process Automation](/docs/use-cases/visor-workflows)
- [Intelligent Code Review](/docs/code-review)
- [GitHub Assistant](/docs/github-assistant)
- [GitHub Actions](/docs/github-actions)

## Visor Reference (GitHub)

Full reference docs live on GitHub. Use this as a quick table of contents:

- [README / Overview](https://github.com/probelabs/visor)
- [Action Reference](https://github.com/probelabs/visor/blob/main/docs/action-reference.md)
- [AI Configuration](https://github.com/probelabs/visor/blob/main/docs/ai-configuration.md)
- [Security Defaults](https://github.com/probelabs/visor/blob/main/docs/security.md)
- [Performance & Cost Controls](https://github.com/probelabs/visor/blob/main/docs/performance.md)
- [Observability](https://github.com/probelabs/visor/blob/main/docs/observability.md)
- [Output Formats](https://github.com/probelabs/visor/blob/main/docs/output-formats.md)
- [Recipes](https://github.com/probelabs/visor/blob/main/docs/recipes.md)
