# Advanced CLI: Speed, Token Limits, and Large Repos

This page collects advanced patterns for large codebases and automation. Basic usage lives in the [CLI Reference](/docs/cli-mode).

## Token and size controls

```bash
probe search "auth" --max-tokens 12000
probe search "auth" --max-bytes 200000
probe search "auth" --max-results 25
```

## Faster searches on large repos

```bash
# Narrow scope by folder
probe search "auth" ./services/api

# Exclude generated or vendor code
probe search "auth" --ignore "node_modules" --ignore "dist" --ignore "vendor"
```

## Two-phase retrieval (fast)

```bash
# Phase 1: find candidate files
probe search "payment" --files-only > files.txt

# Phase 2: search only within those files
cat files.txt | xargs -I{} probe search "payment" {}
```

## Session-based caching

```bash
probe search "login" --session ""   # returns a session id
probe search "oauth" --session "a1b2" # avoids duplicates
```

## Batch reporting

```bash
# JSON report for automation
probe search "TODO" --format json > report.json

# Markdown report for humans
probe search "security" --format markdown > report.md
```

## See also

- [Search Reference](/docs/search-reference)
- [Output Formats](/docs/output-formats)
- [CLI Reference](/docs/cli-mode)
