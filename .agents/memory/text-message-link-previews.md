---
name: Text-message link previews
description: How Graylock website thumbnails appear in text messages and how to refresh them without stale social-cache images.
---

Graylock website thumbnails shown when a URL is texted are Open Graph link previews, not images attached by an SMS/MMS sender in this project.

**Why:** The application has no outbound SMS/MMS media path. Messaging clients fetch the page's social metadata, which previously pointed to an outdated static screenshot.

**How to apply:** When refreshing the default share image, create a 1200×630 asset and point all default social metadata to a new filename so messaging and social crawlers do not keep serving a cached predecessor.