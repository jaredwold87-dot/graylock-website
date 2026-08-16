---
name: Browser console 404 red herring
description: The single "Failed to load resource: 404" in browser logs on every page is the api-server answering GET / — not a missing page asset.
---

Every page screenshot/preview of the web artifact shows exactly one browser-console error: `Failed to load resource: the server responded with a status of 404 ()`.

**Why:** Something global (proxy ping/widget) requests the api-server root, and the API defines no `GET /` route, so it 404s. The api-server workflow log shows the matching `GET "/" → 404` entries. It appears on *all* pages, including ones with zero new assets.

**How to apply:** During QA, don't burn a debugging cycle hunting a "broken image/font" when this single 404 shows up. Confirm instead: (1) it appears on an untouched page too, and (2) api-server logs show `GET / 404` at the same timestamp. Only investigate if there is MORE than the one familiar 404 or a visible missing asset.
