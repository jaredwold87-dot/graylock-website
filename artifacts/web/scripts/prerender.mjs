#!/usr/bin/env node
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const PUBLIC_DIST = resolve(ROOT, "dist/public");
const SSR_ENTRY = resolve(ROOT, "dist/server/entry-server.js");

if (!existsSync(SSR_ENTRY)) {
  console.error(`SSR bundle not found at ${SSR_ENTRY}`);
  process.exit(1);
}

const templatePath = join(PUBLIC_DIST, "index.html");
if (!existsSync(templatePath)) {
  console.error(`Client build not found at ${templatePath}`);
  process.exit(1);
}

const rawTemplate = readFileSync(templatePath, "utf8");

// Strip the static <title> and any meta tags (description / og:* / twitter:*)
// from the template so they don't conflict with the per-route Helmet output.
const cleanTemplate = rawTemplate
  .replace(/\s*<title>[\s\S]*?<\/title>/i, "")
  .replace(
    /\s*<meta\s+(?:name|property)=["'](?:description|og:[^"']+|twitter:[^"']+)["'][^>]*\/?>/gi,
    "",
  );

const { render, SITE_ROUTES } = await import(pathToFileURL(SSR_ENTRY).href);

// Why we extract head tags by regex instead of using react-helmet-async's
// server context: under React 19, react-helmet-async's HelmetProvider is a
// no-op (renders a Fragment) — see node_modules/react-helmet-async/lib/
// index.esm.js (`if (isReact19) { this.helmetData = null; }`). Helmet
// components instead render <title>/<meta>/<link>/<script> as plain elements,
// and React 19's native metadata hoisting moves them to the top of the
// renderToString output. So we scan the SSR output for those tags and inject
// them into <head>. (Verified empirically: pricing/faq/our-strategy and the
// rest of SITE_ROUTES all emit a correct <title>, canonical, og:*, twitter:*,
// and JSON-LD when rendered.)
const HEAD_TAG_RE =
  /<title\b[^>]*>[\s\S]*?<\/title>|<meta\b[^>]*\/?>|<link\b[^>]*\/?>|<script\b[^>]*type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi;

function extractAndStripHeadTags(html) {
  const tags = [];
  const stripped = html.replace(HEAD_TAG_RE, (match) => {
    tags.push(match);
    return "";
  });
  return { head: tags.join("\n    "), body: stripped };
}

if (!Array.isArray(SITE_ROUTES) || SITE_ROUTES.length === 0) {
  console.error("SITE_ROUTES is empty");
  process.exit(1);
}

let written = 0;
let failed = 0;

for (const route of SITE_ROUTES) {
  try {
    const { html } = render(route.path);
    const { head, body } = extractAndStripHeadTags(html);
    const finalHtml = cleanTemplate
      .replace("</head>", `    ${head}\n  </head>`)
      .replace(
        '<div id="root"></div>',
        `<div id="root">${body}</div>`,
      );

    const outPath =
      route.path === "/"
        ? join(PUBLIC_DIST, "index.html")
        : join(PUBLIC_DIST, route.path.replace(/^\/+/, ""), "index.html");

    // Sanity-check: every prerendered page must ship a populated <head>.
    const headBlock = finalHtml.slice(0, finalHtml.indexOf("</head>"));
    const missing = [];
    if (!/<title>[^<]+<\/title>/i.test(headBlock)) missing.push("<title>");
    if (!/<link\s+rel=["']canonical["']/i.test(headBlock))
      missing.push('<link rel="canonical">');
    if (!/<meta\s+property=["']og:title["']/i.test(headBlock))
      missing.push('<meta og:title>');
    if (!/<meta\s+name=["']description["']/i.test(headBlock))
      missing.push('<meta description>');
    if (missing.length > 0) {
      throw new Error(`missing head tags: ${missing.join(", ")}`);
    }

    mkdirSync(dirname(outPath), { recursive: true });
    writeFileSync(outPath, finalHtml);
    written += 1;
    console.log(`  prerendered ${route.path} -> ${outPath.replace(ROOT + "/", "")}`);
  } catch (err) {
    failed += 1;
    console.error(`  failed ${route.path}:`, err?.message || err);
  }
}

console.log(`\nPrerender complete: ${written} written, ${failed} failed`);
if (failed > 0) process.exit(1);
