---
name: ResponsiveImage requires sibling webp/mobile variants
description: Why grid/portfolio images must live in public/ with generated variants, not @assets imports
---

The `ResponsiveImage` component (artifacts/web) renders a `<picture>` whose
`<source srcSet>` paths are derived from the `src` by swapping the extension to
`.webp`, `-mobile.webp`, and `-mobile.jpg`. It assumes those sibling files exist.

**The trap:** if you pass a Vite `@assets` import (a hashed module URL) or any
image lacking those variant files, the browser commits to the webp `<source>`
(it matches type/media), fetches it, gets a 404, and renders **nothing** — it does
NOT fall back to the `<img src>`. The image silently disappears.

**Why:** `<picture>` selects the first source matching type+media support, not by
whether the file actually loads. A 404 on the chosen source = broken image.

**How to apply:** any image used through `ResponsiveImage` (e.g. the portfolio /
"more recent work" grid cards in Work.tsx) must live in `artifacts/web/public/`
with its `.webp`, `-mobile.webp`, `-mobile.jpg` variants present. Copy the source
into public, then run `node artifacts/web/scripts/generate-image-variants.mjs`
(regenerates variants for public images >100KB based on mtime). Do NOT feed
`ResponsiveImage` a raw `@assets` import. Plain `<img>` (as in SiteMockup) is fine
with `@assets` imports because it has no variant assumption.
