---
name: Hidden-UI a11y sync
description: CSS-hidden interactive UI (off-screen sticky bars, collapsed accordions) must also leave the accessibility tree and keyboard focus order.
---

Rule: whenever UI is hidden purely visually (translate off-screen, `max-h-0`/`opacity-0` collapse), also remove it from the a11y tree and tab order.

**Why:** Architect review flagged both patterns on a campaign landing page: a `translate-y-full` sticky CTA whose link stayed keyboard-focusable while invisible, and CSS-only accordion panels whose collapsed text stayed exposed to screen readers. `aria-hidden` alone does not remove focusability.

**How to apply:**
- Off-screen fixed bars: pair the transform with Tailwind `visible`/`invisible` and `transition-[transform,visibility]` — visibility transitions discretely at the END when hiding, so the slide-out animation still plays, and `visibility:hidden` drops both focus and a11y exposure. Keep `aria-hidden={!visible}` too.
- CSS-collapsed accordion panels: add `aria-hidden={!isOpen}` alongside `aria-expanded` on the trigger. If the panel ever contains links/buttons, also gate focusability (`invisible` or `inert`), since `aria-hidden` alone leaves them tabbable.
