---
name: Device cutout cleanup after background removal
description: How to get clean laptop/phone cutouts from uploaded mockup shots
---

AI background removal on device-mockup shots (laptop + phone on a dark backdrop) reliably leaves remnants: floor-shadow blobs under devices, slices of the backdrop card hugging device edges, and stand feet.

**Why:** The remover treats high-contrast shadows/backdrop edges as foreground. Shipping them onto a light section background looks like dirt (happened with both Willow and Rosenlund cutouts).

**How to apply:** After `removeImageBackground`, flatten onto magenta (`-background magenta -flatten`) to spot remnants. Run connected-components on the extracted alpha to find detached junk; for remnants attached to devices, erase with `\( +clone -alpha extract -fill black -draw "rectangle ..." \) -alpha off -compose CopyOpacity -composite`. Then `-trim +repage`, resize, and write webp (magick, quality ~85) into `src/assets`. Drop the section's card wrapper so the transparent cutout floats (realtor + well-driller precedent: plain `<img className="w-full h-auto block">`).
