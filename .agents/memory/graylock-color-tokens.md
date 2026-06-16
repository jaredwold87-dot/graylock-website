---
name: Graylock color tokens
description: How brand colors map (or mismatch) to Tailwind tokens in the Graylock web artifact
---

The Graylock web theme (artifacts/web/src/index.css) defines all "dark" tokens as
shades of dark blue: `charcoal #0F1E35`, `navy #152847`, `gunmetal #1E3554`.
`offwhite #F2F3F5`, `stone #8A8F9E` are the light/muted text tokens.

**History:** the `orange` token USED to be steel-blue `#2E7BB4` and read as blue
across the site. It is now the real brand orange `#E85D26` — the token value was
flipped so the whole site matches the orange homepage. All hardcoded steel-blue
`rgba(46,123,180,…)` shadows/glows were also replaced with orange `rgba(232,93,38,…)`.

**Why:** the brand is charcoal/black + orange `#E85D26`. The funnel/homepage already
use literal `#E85D26`; the rest of the site relied on the `orange` token, so flipping
the token (rather than rewriting every component) unified everything in one move.

**How to apply:**
- The `orange` token now equals `#E85D26`, so `text-orange`/`bg-orange`/`border-orange`
  are all brand orange and safe to use for accents/fills.
- Literal `#E85D26` (e.g. `text-[#E85D26]`) is equivalent and also fine.
- On LIGHT backgrounds (e.g. `#F4F1EC`), small `#E85D26` text fails WCAG AA
  (~3.1:1). Use a darker burnt-orange `#B23E16` (~5.2:1) for small text labels;
  keep `#E85D26` for fills/buttons (white text on orange) and decorative icons/stars.
- Muted text on `#F4F1EC`: `text-charcoal/60` is ~4.3:1 (just under AA). Use
  `text-charcoal/70`+ for captions and `text-charcoal/75` for body copy.
