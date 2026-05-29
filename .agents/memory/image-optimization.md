---
name: Image optimization for the web artifact
description: How images ship in artifacts/web and the rule for keeping pages fast
---

# Image weight is the main load-speed risk in artifacts/web

Routes are code-split (React.lazy + Suspense in App.tsx) and JS is fine. The
recurring problem is oversized raster images.

## Two ways images enter the build, both ship full-size unless optimized
- `import x from "@assets/...png"` — Vite bundles the file as-is (hashed into
  dist/assets). Raw screenshot PNGs are 2–5MB each and ship uncompressed.
- `public/*.png` referenced via `${import.meta.env.BASE_URL}name.png` — copied
  verbatim to dist and loaded at full size.

Note: everything in `public/` is copied to dist whether referenced or not, so a
big PNG sitting there is harmless *unless code actually requests it*. Grep
`src/` for the filename to tell if it's truly loaded before bothering.

## The rule
Before referencing any screenshot/photo, convert to webp and downscale to the
max width it will ever display (~1600px for in-page mockups, native for heroes).
Most of the site already uses webp heroes (30–130KB); match that.

**Why:** a single Featured Projects page once shipped ~21MB of raw PNGs
(hero 933KB + six 2.3–5.3MB screenshots). Converting to webp dropped it to
~490KB total (~98% smaller) with no visible quality loss.

## How to convert (sharp won't resolve in code_execution sandbox)
Use ImageMagick `magick` from bash instead:
`magick in.png -resize "1600x>" -quality 82 out.webp`
(`>` only shrinks, never enlarges). Plain `<img src=...webp>` / CSS
background-image / `@assets/...webp` imports all work — webp is universally
supported. Do NOT route @assets webp through ResponsiveImage `<picture>`
variants (see responsive-image-variants.md — those 404).
