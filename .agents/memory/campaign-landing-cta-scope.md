---
name: Campaign landing CTA scope
description: Which CTAs get campaign-param treatment on sales landing pages (realtor, well-driller) and which site chrome intentionally does not.
---

On campaign landing pages (`/websites-for-realtors`, `/websites-for-well-drillers`), only the page's own CTAs and the **navbar** booking CTA are campaign-aware (label override + params preserved into the booking flow). The global **footer** "Contact" link stays a plain link.

**Why:** The campaign specs only mandate the navbar override plus the in-page CTAs; the footer is shared site chrome, and the realtor page (the reference architecture) shipped this way.

**How to apply:** Treat the footer as out of scope for campaign params unless a spec explicitly says otherwise (e2e testers may wrongly flag it). Campaign-specific form fields live as industry-conditional blocks inside the one shared booking form — do not rebuild per-campaign wizards. If a third campaign page arrives, consider generalizing the navbar override + campaign-param plumbing instead of adding a third parallel branch.
