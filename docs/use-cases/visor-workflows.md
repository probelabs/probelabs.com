---
title: Engineering Process Automation
description: Deterministic workflows for PR reviews, issue triage, and org-wide automation
---

# Engineering Process Automation

Engineering work is a process, not a prompt. [Visor](/visor) lets you encode that process as workflows—explicit steps, approvals, validations, and safe fallbacks—so AI can help without chaos. Define workflows in YAML and run them as graphs: branching, fan-out/fan-in, routing, bounded loops, and human-in-the-loop. Mix deterministic steps and AI steps, enforce schemas, and trace every run with OpenTelemetry.

The source of truth is your codebase, not your documentation. Visor workflows are most effective when they ground every step in real code context — this is where [Probe](/probe) provides the semantic foundation.

In the real world, we don't rely on humans to be perfect. We add checklists and guardrails to reduce mistakes and make outcomes predictable. The same is true for AI.

This is how teams move beyond single-purpose bots and build reliable automation across reviews, triage, release notes, and internal ops.

## Example Automations

- **Issue triage**: classify Jira/Zendesk tickets, estimate severity, route to the right team, and draft a first response with code references.
- **PR review pipelines**: staged reviews with summaries, security, and quality gates; add labels and checks automatically.
- **Spec feedback**: review product specs against code and architecture constraints before implementation.
- **Release workflows**: generate release notes, enforce approvals, and coordinate deploy steps.
- **Support enablement**: answer repetitive questions using the codebase as the source of truth.
- **Incident response**: trigger workflows from webhooks, run diagnostics, and escalate with context.

## Example: From Ticket to Release

1. **Intake**: classify a bug report, estimate severity, and route to the right team.
2. **Context**: gather relevant code references and related incidents.
3. **Plan**: generate a suggested fix plan with structured outputs and validation.
4. **Execute**: run targeted checks or request a PR with tests.
5. **Review**: run staged code review (overview → security → quality).
6. **Approval**: require human sign-off before rollout.
7. **Release**: generate release notes, update changelogs, and notify stakeholders.
8. **Monitor**: confirm deployments and attach telemetry to the workflow run.

Every step is defined, validated, and auditable.

## Example Workflow (YAML)

```yaml
# visor.yaml
version: "1.0"
steps:
  triage:
    type: ai
    schema: issue-assistant
    on: [issue_opened]
    prompt: Classify the issue, estimate severity, and suggest labels.

  apply-labels:
    type: github
    depends_on: [triage]
    op: labels.add
    values:
      - "{{ outputs.triage.labels | default: [] | json }}"

  create-ticket:
    type: http
    depends_on: [triage]
    method: POST
    url: "https://your-jira.example.com/rest/api/2/issue"
    body:
      fields:
        project: { key: "ENG" }
        summary: "{{ outputs.triage.summary }}"
        description: "{{ outputs.triage.text }}"

  approval:
    type: human-input
    depends_on: [create-ticket]
    prompt: Approve escalation and priority?
```

## When to Use Visor

- **Cross-team workflows** that need routing, approvals, and policy gates
- **AI-assisted automation** that must be predictable and auditable
- **Multi-step flows** that combine GitHub, HTTP, shell, and AI
- **Org-wide consistency** with shared workflows and reusable components

## What Makes Visor Different

- **Config-first workflows**: explicit steps, inputs, outputs, and failure routes
- **Deterministic control**: schemas and validation for every AI step
- **Human-in-the-loop**: pause, ask, approve, and resume safely
- **Observability by default**: OpenTelemetry traces for every step
- **Testable automation**: run workflow tests before rolling out changes

## Why Workflows Matter

Every engineering organization already has a process: discovery, triage, design, implementation, review, release, and monitoring. Those stages exist for a reason. Visor lets you encode that process as a workflow so it can be run consistently, with guardrails, across teams and repos.

Many steps still require human approval. But most steps can be automated, accelerated, or made safer with structured outputs, validation, and clear fallbacks.

## Common Use Cases

- **PR review pipelines**: staged reviews with summaries, security, and quality gates
- **Issue triage**: auto-response, classification, and escalation workflows
- **Release workflows**: generate release notes and route approvals
- **Inbound automation**: trigger flows from webhooks, incidents, or schedules

## Determinism for Unpredictable Systems

Humans and AI are both fallible. Visor adds determinism around them: clear inputs and outputs, validated schemas, timeouts, retries, and explicit failure routes. You can mix scripts, APIs, and AI steps while keeping the workflow predictable and safe.

## How It Fits with Probe

Probe provides the grounded code context that Visor workflows rely on. Use Probe for accurate reading and Visor to orchestrate what happens next.

## Get Started

- **See the Visor product page**: [Visor](/visor)
- **GitHub automation setup**: [GitHub Actions Integration](/docs/github-actions)
- **Book a demo**: [Schedule a walkthrough](https://cal.com/leonid-bugaev/30min)
