---
name: Lead delivery and safe testing
description: Resend-only lead delivery decision and prohibition on real test submissions.
---

Do not submit real lead forms during automated tests. Mock outbound delivery and isolate test database records.

**Why:** Earlier testing could create production leads. On 2026-09-11 the user explicitly corrected the architecture: no external CRM; private application records and Resend email only. Email credentials may point at real recipients even in development.

**How to apply:** Never restore the old external lead forwarding based on historical code or notes. Verify public form interaction without submitting; test persistence and failure handling with isolated fixtures and mocked Resend. Preview flows must never send real requests.
