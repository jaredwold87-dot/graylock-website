---
name: Lead form testing pollutes real CRM
description: Submitting the site's booking/lead form (browser or curl) creates real leads in Tim's production GOS CRM, even from dev.
---

The rule: never submit the discovery-call/lead form during automated tests, and avoid curl-testing `POST api/leads` unless necessary — if unavoidable, use obviously-labeled data like "Dev Test — ignore" and tell Tim so he can delete it.

**Why:** Lead capture has TWO paths that both hit Tim's live GOS CRM regardless of environment: (1) the browser posts directly to the public GOS lead endpoint (fire-and-forget, sevalla URL hardcoded client-side), and (2) the api-server forwards to `$GRAYLOCK_API_URL/api/webhook/lead` — and dev's GRAYLOCK_API_URL points at the same production GOS. A browser submit therefore creates two junk lead entries. (Resend email is dev-safe: RESEND_API_KEY is unset in dev.)

**How to apply:** E2E test plans for booking flows must say "do NOT click submit" and verify via modal state + dataLayer instead. Server-side changes can be verified with one labeled curl (creates one GOS entry via webhook) — mention the cleanup to Tim.
