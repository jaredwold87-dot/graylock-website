---
name: Featured Projects page background
description: The Featured Projects page intentionally uses a single solid tan background for all project sections (no dark/light alternation)
---

The Featured Projects page (artifacts/web/src/pages/Work.tsx) lists project sections
("FeaturedProjectSection") between a dark hero and a dark closing CTA.

**Current decision (user-directed):** every featured project section uses the LIGHT
theme — a single solid tan background (`#F4F1EC`) running the full length of the
project listing. Do NOT re-introduce dark/light alternation between sections.

**Why:** the user explicitly asked to drop the alternating dark-blue/tan "rotating"
backgrounds and keep one solid tan for the whole builds area. An earlier version
alternated themes for rhythm; that was replaced.

**How to apply:** when adding a new featured project, set `theme: "light"`. Each
project's `theme` controls only the section background/text — the screenshot still
sits inside a dark browser-chrome frame (SiteMockup), so dark-looking screenshots
still read fine on the tan background.
