---
name: Hero full-bleed image device positioning
description: Why you can't reposition devices in a full-bleed object-cover hero via CSS, and what actually works.
---

When a hero uses a full-bleed background image (`absolute inset-0 w-full h-full object-cover`) and the hero section is TALLER than the image's aspect ratio implies (common — heroes have lots of vertical padding), object-cover scales the image by HEIGHT. In that regime the image overflows horizontally and is right/left-cropped, so:

- Horizontal `objectPosition` ("right center" etc.) has effect only on which slice is cropped; once content is flush-right it cannot move further right.
- CSS `transform: scale/translate` to shift devices right crops the opposite-side device off (e.g. the phone disappears).

**To move device content right while keeping all devices visible, you must RECOMPOSE the source image**, not fight it with CSS:
- Extend the canvas LEFT with the sampled dark desk color (`magick SRC -background <color> -gravity East -extent <wider>x<h>`) so devices sit further right within the frame; the seam lands under the hero's left dark-gradient overlay and is invisible.
- To also shrink devices / add breathing room, edge-clone a top (and/or bottom) band (`-virtual-pixel Edge -set option:distort:viewport WxH-0-<top> -distort SRT 0`) — flat-color padding can seam, edge-clone does not.
- Pair with a headline width cap (`lg:max-w-xl`) so no text line can ever reach the device zone regardless of how the image scales at different desktop widths. This is the robust guardrail — image composition alone is fragile because device size tracks hero height across breakpoints.

**Why:** device size in the height-scaled regime is proportional to hero height, so taller headlines push devices bigger/leftward — capping text width decouples the two. Bumping the image filename (v1→v2) on regen avoids dev-server/browser webp cache showing stale frames.

**How to apply:** Graylock homepage `artifacts/web/src/components/home/HeroSection.tsx` desktop hero (`hidden md:block` block). Mobile uses a separate layered bg + device image — never touch it for desktop hero work.

**Recompose pitfall — never UPSCALE or change ASPECT of the hero source.** Resizing the source above its native pixel dimensions (e.g. 2752x1536 → 4128x2231) blurs it, and a non-proportional `-resize`/`-extent` that changes the aspect ratio skews/stretches the bottom desk area. To resize devices, CROP the native source instead (`magick SRC -crop WxH+X+Y +repage`) — never enlarge. Tighter crop toward the right (where devices sit) makes devices bigger; wider crop makes them smaller. Keep crop aspect near the hero container's (~1.7) so object-cover barely crops and devices aren't clipped vertically.
