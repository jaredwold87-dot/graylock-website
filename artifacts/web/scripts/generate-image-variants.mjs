#!/usr/bin/env node
import { readdir, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, parse } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const PUBLIC_DIR = fileURLToPath(new URL("../public/", import.meta.url));

const SOURCE_EXT = /\.(png|jpe?g)$/i;
const SKIP_PATTERNS = [
  /^favicon/i,
  /^apple-touch-icon/i,
  /^opengraph/i,
  /^logo-/i,
];

const SIZE_THRESHOLD_BYTES = 100 * 1024;
const MOBILE_MAX_WIDTH = 768;
const WEBP_QUALITY = 82;
const MOBILE_JPG_QUALITY = 78;

async function isOutdated(source, target) {
  if (!existsSync(target)) return true;
  const [s, t] = await Promise.all([stat(source), stat(target)]);
  return s.mtimeMs > t.mtimeMs;
}

async function generateVariants(sourcePath, baseName) {
  const dir = PUBLIC_DIR;
  const desktopWebp = join(dir, `${baseName}.webp`);
  const mobileWebp = join(dir, `${baseName}-mobile.webp`);
  const mobileJpg = join(dir, `${baseName}-mobile.jpg`);

  const tasks = [];

  if (await isOutdated(sourcePath, desktopWebp)) {
    tasks.push(
      sharp(sourcePath)
        .webp({ quality: WEBP_QUALITY })
        .toFile(desktopWebp)
        .then(() => `  + ${baseName}.webp`),
    );
  }

  if (await isOutdated(sourcePath, mobileWebp)) {
    tasks.push(
      sharp(sourcePath)
        .resize({ width: MOBILE_MAX_WIDTH, withoutEnlargement: true })
        .webp({ quality: WEBP_QUALITY })
        .toFile(mobileWebp)
        .then(() => `  + ${baseName}-mobile.webp`),
    );
  }

  if (await isOutdated(sourcePath, mobileJpg)) {
    tasks.push(
      sharp(sourcePath)
        .resize({ width: MOBILE_MAX_WIDTH, withoutEnlargement: true })
        .jpeg({ quality: MOBILE_JPG_QUALITY, mozjpeg: true })
        .toFile(mobileJpg)
        .then(() => `  + ${baseName}-mobile.jpg`),
    );
  }

  return Promise.all(tasks);
}

function isGeneratedMobileJpg(filename, baseName, allFiles) {
  // We only ever generate <name>-mobile.jpg (never -mobile.png).
  // Treat a *-mobile.jpg as generated only when a true source for <name> exists.
  if (!/\.jpe?g$/i.test(filename)) return false;
  if (!baseName.endsWith("-mobile")) return false;
  const stem = baseName.slice(0, -"-mobile".length);
  return (
    allFiles.has(`${stem}.png`) ||
    allFiles.has(`${stem}.jpg`) ||
    allFiles.has(`${stem}.jpeg`) ||
    allFiles.has(`${stem}.PNG`) ||
    allFiles.has(`${stem}.JPG`) ||
    allFiles.has(`${stem}.JPEG`)
  );
}

function shouldSkip(filename, baseName, allFiles) {
  if (isGeneratedMobileJpg(filename, baseName, allFiles)) return true;
  return SKIP_PATTERNS.some((re) => re.test(filename));
}

async function main() {
  const entries = await readdir(PUBLIC_DIR);
  const allFiles = new Set(entries);
  const sources = entries.filter((f) => SOURCE_EXT.test(f));

  let processed = 0;
  let skippedSmall = 0;
  const generated = [];

  for (const file of sources) {
    const { name: baseName } = parse(file);
    if (shouldSkip(file, baseName, allFiles)) continue;

    const sourcePath = join(PUBLIC_DIR, file);
    const { size } = await stat(sourcePath);
    if (size < SIZE_THRESHOLD_BYTES) {
      skippedSmall++;
      continue;
    }

    const results = await generateVariants(sourcePath, baseName);
    if (results.length > 0) {
      processed++;
      generated.push(...results);
    }
  }

  if (generated.length === 0) {
    console.log(
      `[image-variants] All variants up to date (${sources.length} sources scanned, ${skippedSmall} below ${SIZE_THRESHOLD_BYTES / 1024}KB threshold).`,
    );
    return;
  }

  console.log(
    `[image-variants] Generated ${generated.length} variant(s) from ${processed} source(s):`,
  );
  for (const line of generated) console.log(line);
}

main().catch((err) => {
  console.error("[image-variants] Failed:", err);
  process.exit(1);
});
