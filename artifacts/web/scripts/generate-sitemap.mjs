#!/usr/bin/env node
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = resolve(__dirname, "..");

const ROUTES_FILE = resolve(ROOT, "src/lib/site-routes.ts");
const OUTPUT_FILE = resolve(ROOT, "public/sitemap.xml");

const src = readFileSync(ROUTES_FILE, "utf8");

const originMatch = src.match(/CANONICAL_ORIGIN\s*=\s*"([^"]+)"/);
if (!originMatch) {
  console.error("Could not find CANONICAL_ORIGIN in site-routes.ts");
  process.exit(1);
}
const origin = originMatch[1];

const arrMatch = src.match(/SITE_ROUTES:\s*SiteRoute\[\]\s*=\s*\[([\s\S]*?)\];/);
if (!arrMatch) {
  console.error("Could not find SITE_ROUTES in site-routes.ts");
  process.exit(1);
}

const today = new Date().toISOString().slice(0, 10);
const body = arrMatch[1];
const routes = [];
const objectRe = /\{\s*path:\s*"([^"]+)"\s*,\s*priority:\s*([\d.]+)\s*,\s*changefreq:\s*"([^"]+)"\s*,\s*lastmod:\s*([^,]+)\s*,\s*indexable:\s*(true|false)\s*\}/g;
let m;
while ((m = objectRe.exec(body)) !== null) {
  const lastmodRaw = m[4].trim();
  const lastmod = lastmodRaw === "TODAY" ? today : lastmodRaw.replace(/^"|"$/g, "");
  routes.push({
    path: m[1],
    priority: m[2],
    changefreq: m[3],
    lastmod,
    indexable: m[5] === "true",
  });
}

if (routes.length === 0) {
  console.error("No routes parsed from SITE_ROUTES");
  process.exit(1);
}

const indexable = routes.filter((r) => r.indexable);

const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  indexable
    .map(
      (r) =>
        `  <url>\n` +
        `    <loc>${origin}${r.path}</loc>\n` +
        `    <lastmod>${r.lastmod}</lastmod>\n` +
        `    <changefreq>${r.changefreq}</changefreq>\n` +
        `    <priority>${r.priority.toString()}</priority>\n` +
        `  </url>`,
    )
    .join("\n") +
  `\n</urlset>\n`;

mkdirSync(dirname(OUTPUT_FILE), { recursive: true });
writeFileSync(OUTPUT_FILE, xml, "utf8");
console.log(`Wrote ${indexable.length} URLs to ${OUTPUT_FILE}`);
