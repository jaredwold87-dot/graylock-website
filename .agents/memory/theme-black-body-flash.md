---
name: theme-black body navy flash
description: Why pages flashed blue on refresh and where the global page background actually comes from.
---

The `body`/`html` background must be set to neutral dark (#0F0F0F) directly, NOT via the `bg-charcoal` token.

**Why:** Main pages apply the dark look by wrapping their page component in a `theme-black` div, which remaps the `charcoal`/`navy`/`gunmetal` tokens to black shades. But `body` lives in `index.html`, OUTSIDE that wrapper, so `body { @apply bg-charcoal }` resolved to the DEFAULT `charcoal` (#0F1E35 navy/blue). On a hard refresh the browser painted that navy body before React mounted and the hero image loaded → a blue flash behind every header. The brand has no blue.

**How to apply:** Keep `body`/`html` background as a literal dark hex (#0F0F0F) in `src/index.css`, plus inline `style="background-color:#0F0F0F"` on `<html>`/`<body>` in `index.html` and a `theme-color` meta for the earliest paint. Healthcare pages get their intentional navy from section-level `bg-charcoal`/`bg-navy` utilities, not from `body`, so a black body does not change their design. Do not "fix" the flash by adding `theme-black` to `body` — that would strip the healthcare pages' navy.
