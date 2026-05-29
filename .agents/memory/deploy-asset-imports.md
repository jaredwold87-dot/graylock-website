---
name: Deploy-safe image imports (web)
description: Why @assets imports break the production Docker build and where shipped images must live.
---

In `artifacts/web`, images that ship to production must be imported via the
`@/assets/...` alias (resolves to `artifacts/web/src/assets/`) or placed in
`artifacts/web/public/`. Do NOT import shipped images via the `@assets/...`
alias (resolves to repo-root `attached_assets/`).

**Why:** `.dockerignore` excludes `attached_assets`, so during the deploy
build's `COPY . .` that directory is stripped from the Docker context — even
though the files are committed to git. `vite build` then fails hard with
`[vite:asset] Could not load .../attached_assets/...: ENOENT`. The local dev
build passes because `attached_assets` exists on disk, which masks the problem
until deployment.

**How to apply:** When adding/referencing an image in a web page/component,
import from `@/assets/<subdir>/file.webp` (move the file into `src/assets/`
first) — never `@assets/...`. If a deploy fails with an ENOENT on an
`attached_assets/...` path, grep `rg "@assets/" artifacts/web/src` and migrate
those imports into `src/assets/`.
