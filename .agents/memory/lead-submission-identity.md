---
name: Lead submission identity
description: A visitor’s experiment assignment must not deduplicate separate form requests.
---

Deduplicate notifications by submission identity, never by A/B visitor assignment.

**Why:** A popup submission followed by a separate header form submission in the same browser was incorrectly treated as one lead, so only the first email arrived. Both requests are intentional and must notify the team independently.

**How to apply:** Preserve the same submission key on retries, but generate a fresh key for each newly opened form. A shared assignment should retain attribution without merging requests, notification claims, or email payloads.