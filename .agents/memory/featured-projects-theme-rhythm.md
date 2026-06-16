---
name: Featured Projects page background
description: The Featured Projects ("Our Customers") page uses a single solid light background for all project sections (no dark/light alternation), matching the home page funnel palette
---

The Featured Projects / "Our Customers" page (artifacts/web/src/pages/Work.tsx)
lists project sections ("FeaturedProjectSection") between a dark hero and a dark
closing CTA.

**Decision (user-directed):** every featured project section uses the LIGHT theme —
a single solid light background running the full length of the project listing. Do
NOT re-introduce dark/light alternation between sections.

**Why:** the user explicitly asked to drop the alternating dark/tan "rotating"
backgrounds and keep one solid light surface for the whole builds area. Separately,
the user later asked this page to be on-brand with the home page, which uses the
"funnel" palette (near-black `#0f0f0f` dark sections, `#f5f5f4` light sections,
`#E85D26` orange, `#B23E16` orange-on-light eyebrow, `#1a202c` headings, `#4a5568`
light-section body). The page was migrated off the old navy tokens
(`charcoal`/`navy`/`gunmetal`) to that palette. Match the live home page components
for exact tokens rather than trusting any literal hex written here.

**How to apply:** when adding a new featured project, set `theme: "light"`. Each
project's `theme` controls only the section background/text — the screenshot still
sits inside a dark browser-chrome frame (SiteMockup), so dark-looking screenshots
still read fine on the light background.
