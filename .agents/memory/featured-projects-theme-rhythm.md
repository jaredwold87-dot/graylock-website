---
name: Featured Projects page theme rhythm
description: How the dark/light section alternation works on the Featured Projects page and why section count matters
---

The Featured Projects page (artifacts/web/src/pages/Work.tsx) is one long scroll of
full-height sections that must alternate dark/light cleanly: a DARK hero at the top
and a LIGHT "more work" grid at the bottom bracket the list of featured project
sections.

**Rule:** the featured-project sections in between must be an EVEN count for the
alternation to close cleanly — first section LIGHT (contrasts the dark hero), last
section DARK (contrasts the light grid). With LDLD…D this works only when the count
is even; an odd count forces one adjacent same-theme seam somewhere.

**Why:** each project's `theme` ("light"/"dark") only controls the SECTION background
and text colors, independent of the screenshot's own colors — so you're free to set a
project's theme purely to preserve the rhythm (e.g. a light/airy screenshot can sit in
a dark section). SPI is intentionally pinned LAST and DARK.

**How to apply:** when adding or removing a featured project, re-check the whole
sequence and flip `theme` values so it stays LDLD…D ending dark before the light grid.
Adding projects in pairs keeps it clean; adding one means you must re-balance.
