#!/bin/bash

# Francisca full
magick attached_assets/image_1789145690782.png \
  \( +clone -fill white -colorize 100% \
     -fill "#FCE83A" -draw "rectangle 30,590 905,623" \
     -fill "#FCE83A" -draw "rectangle 30,630 625,663" \) \
  -compose multiply -composite \
  -quality 90 \
  artifacts/web/src/assets/reviews/francisca_rangel_highlighted.webp

# Francisca cropped
magick artifacts/web/src/assets/reviews/francisca_rangel_highlighted.webp \
  -crop 966x722+0+0 \
  -quality 90 \
  artifacts/web/src/assets/reviews/francisca_rangel_highlighted_excerpt.webp

# Mark
magick attached_assets/image_1789145653916.png \
  \( +clone -fill white -colorize 100% \
     -fill "#FCE83A" -draw "rectangle 30,389 910,422" \
     -fill "#FCE83A" -draw "rectangle 30,430 605,463" \) \
  -compose multiply -composite \
  -quality 90 \
  artifacts/web/src/assets/reviews/mark_nelson_highlighted.webp

# Nijma
magick attached_assets/image_1789145722144.png \
  \( +clone -fill white -colorize 100% \
     -fill "#FCE83A" -draw "rectangle 475,222 925,255" \
     -fill "#FCE83A" -draw "rectangle 30,262 605,295" \) \
  -compose multiply -composite \
  -quality 90 \
  artifacts/web/src/assets/reviews/nijma_yusuf_highlighted.webp

echo "Images generated successfully."
