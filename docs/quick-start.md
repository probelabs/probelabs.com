# Probe Quick Start

Run these commands from the **root folder of the repo** you want to analyze.

## Install

```bash
npm install -g @probelabs/probe@latest
```

(See [Probe Installation](/docs/installation) for Docker, curl, and Windows options.)

## Basic search

```bash
probe search "auth flow" ./
```

## Limit output for LLMs

```bash
probe search "auth flow" ./ --max-tokens 12000
```

## Next steps

- [Chat with Code](/docs/chat-with-code)
- [Intelligent Code Review](/docs/code-review)
- [CLI Reference](/docs/cli-mode)
