# Probe Installation

Install the **Probe CLI** used by all workflows (search, chat, reviews, and automation).

## npm (recommended)

```bash
npm install -g @probelabs/probe@latest
```

## curl (macOS / Linux)

```bash
curl -fsSL https://raw.githubusercontent.com/probelabs/probe/main/install.sh | bash
```

## PowerShell (Windows)

```powershell
iwr -useb https://raw.githubusercontent.com/probelabs/probe/main/install.ps1 | iex
```

## Docker (CI / containers)

```bash
docker pull probelabs/probe:latest
alias probe='docker run --rm -v $(pwd):/workspace probelabs/probe'
```

See: [Docker integration](/docs/integrations/docker)

## Verify

```bash
probe --help
```
