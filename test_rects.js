const { execSync } = require('child_process');

function run(cmd) {
  console.log(cmd);
  execSync(cmd, { stdio: 'inherit' });
}

// Draw test rectangles on Francisca
run(`magick attached_assets/image_1789145690782.png -fill "rgba(255,255,0,0.5)" -draw "rectangle 30,590 930,623" -draw "rectangle 30,630 632,663" test_fran.png`);

// Draw test rectangles on Mark
run(`magick attached_assets/image_1789145653916.png -fill "rgba(255,255,0,0.5)" -draw "rectangle 30,389 920,422" -draw "rectangle 30,430 610,463" test_mark.png`);

// Draw test rectangles on Nijma
run(`magick attached_assets/image_1789145722144.png -fill "rgba(255,255,0,0.5)" -draw "rectangle 396,222 930,255" -draw "rectangle 30,262 625,295" test_nijma.png`);

