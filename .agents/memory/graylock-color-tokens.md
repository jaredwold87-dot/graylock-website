---
name: Graylock color tokens
description: How brand colors map (or mismatch) to Tailwind tokens in the Graylock web artifact
---

The Graylock web theme (artifacts/web/src/index.css) defines all "dark" tokens as
shades of dark blue: `charcoal #0F1E35`, `navy #152847`, `gunmetal #1E3554`.
`offwhite #F2F3F5`, `stone #8A8F9E` are the light/muted text tokens.

**Gotcha:** the `orange` token is NOT orange — it is steel-blue `#2E7BB4`.

**Why:** the real brand color is orange `#E85D26` (charcoal/black + orange brand).
The funnel pages already use literal `#E85D26`. Pages that use the `orange` token
render steel-blue, so the site reads as "all dark blue."

**How to apply:**
- For true brand orange accents, use literal `#E85D26` (e.g. `text-[#E85D26]`,
  `bg-[#E85D26]`), not the `orange` token.
- On LIGHT backgrounds (e.g. `#F4F1EC`), small `#E85D26` text fails WCAG AA
  (~3.1:1). Use a darker burnt-orange `#B23E16` (~5.2:1) for small text labels;
  keep `#E85D26` for fills/buttons (white text on orange) and decorative icons/stars.
- Muted text on `#F4F1EC`: `text-charcoal/60` is ~4.3:1 (just under AA). Use
  `text-charcoal/70`+ for captions and `text-charcoal/75` for body copy.
