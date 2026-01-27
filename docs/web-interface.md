# Web Interface

Probe Web Interface is the browser UI for chat with your codebase. It runs locally or on a server and uses the same Probe engine as the CLI.

## Start the web UI (run from your repo root)

```bash
npx -y @probelabs/probe-chat@latest --web
```

Set a provider key first (example):

```bash
export ANTHROPIC_API_KEY=your_key
```

## Choose folders

For security, explicitly allow which folders the web UI can access:

```bash
export ALLOWED_FOLDERS="/path/to/repo"
```

## Auth

If you expose the UI beyond localhost, put it behind authentication (reverse proxy, VPN, or other access control).

## Ports

```bash
# default is 3000
npx -y @probelabs/probe-chat@latest --web --port 3000
```

## Related

- [AI Chat Mode](/docs/ai-chat)
- [Chat with Code](/docs/chat-with-code)
- [CLI Reference](/docs/cli-mode)
