---
name: Verifying GA events via window.dataLayer
description: Plain gtag.js pushes Arguments objects, not {event:name} — e2e event checks must filter by e[0]==='event' or they false-negative.
---

With plain gtag.js (no GTM container — this site loads `gtag/js?id=G-…` + the standard `function gtag(){dataLayer.push(arguments);}` snippet), every `gtag('event', name, props)` call lands in `window.dataLayer` as an **Arguments object**: array-like `["event", "<name>", {props}]` with NO `.event` property. Only gtag-internal lifecycle entries (`gtm.js`, `gtm.dom`, `gtm.load`, `gtm.scrollDepth`, `gtm.historyChange-v2`) look like `{event: "gtm.*"}`.

**Why:** an e2e tester that filters `dataLayer.filter(e => e.event === "my_event")` sees only the gtm.* objects and reports custom events as missing — a false failure that looks exactly like broken analytics wiring.

**How to apply:** when verifying custom GA events in tests or the console, use:

```js
window.dataLayer.filter(e => e && e[0] === 'event').map(e => e[1])
```

Also note: SPA (wouter/pushState) navigation does NOT clear dataLayer, so events accumulate across in-app clicks — only a full reload resets it. The standard top-level `function gtag(){}` declaration in index.html IS available as `window.gtag`, so `typeof window.gtag === "function"` guards work.

Related meta-tag gotcha: react-helmet-async APPENDS page-specific tags and leaves the static index.html defaults in place, so a single querySelector for e.g. `og:title` returns the stale static tag. Check all matching tags and assert on the page-specific value; duplicate static OG defaults on every route are pre-existing, and per-route crawler delivery is the prerender pipeline's job.
