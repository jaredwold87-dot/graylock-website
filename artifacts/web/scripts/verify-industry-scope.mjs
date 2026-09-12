import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

// Bundle the content modules with esbuild to a temporary directory, then pass
// that directory and the approved Markdown specification to this script.
const [contentDir, specification] = process.argv.slice(2);
if (!contentDir || !specification) {
  throw new Error("Usage: node verify-industry-scope.mjs <bundled-content-directory> <specification.md>");
}
const scope = await readFile(specification, "utf8");
const clean = (value) => value.replace(/\*\*/g, "").replace(/`/g, "").trim();
const pages = scope.split(/^## \d+\. /m).slice(1, 15);
assert.equal(pages.length, 14);
const modules = (await readdir(contentDir)).filter((name) => /\.(?:m?js)$/.test(name));
assert.equal(modules.length, 14, "All fourteen content modules must exist");
const approvedProjects = [
  "willow", "jcs", "interior", "benevolent", "meagher", "perks", "interior",
  "wicks", "interior", "west-coast-eye", "interior", "bluegrass", "kingsbury", "west-coast-eye",
];
const loaded = await Promise.all(modules.map(async (name) =>
  (await import(pathToFileURL(resolve(contentDir, name)).href)).default
));
const errors = [];
const routeComponents = [
  "Realtors", "WellDrillers", "CabinetMakers", "Auctioneers", "HomeBuilders",
  "IndustrialConstruction", "Accountants", "LocalServiceBusinesses", "Psychologists",
  "Optometrists", "PhysicalTherapists", "Dentists", "Chiropractors", "Physicians",
];
function check(label, actual, expected) {
  try { assert.deepEqual(actual, expected, label); }
  catch (error) { errors.push(error.message); }
}
for (const [index, page] of pages.entries()) {
  const route = page.match(/\*\*Route:\*\* `([^`]+)`/)?.[1];
  const data = loaded.find((entry) => entry.route === route);
  assert.ok(data, `Missing content for ${route}`);
  const component = await readFile(
    new URL(`../src/pages/industries/${routeComponents[index]}.tsx`, import.meta.url),
    "utf8",
  );
  const title = component.match(/const PAGE_TITLE = "([^"]+)"/)?.[1];
  check(`${route} metadata has no legacy outcome promise`,
    /Generate .*Leads|Generate .*Requests|Win More Bookings|Free Demo/i.test(title ?? ""), false);
  const exactMetadata = page.match(/\*\*Metadata:\*\* Title \*\*(.+?)\*\*\. Description \*\*(.+?)\*\*/);
  if (exactMetadata) {
    check(`${route} exact metadata title`, title, exactMetadata[1]);
    check(`${route} exact metadata description`,
      component.match(/const metaDescription = "([^"]+)"/)?.[1], exactMetadata[2]);
  }
  const heroBlock = page.split("### Exact Hero")[1].split("\n### ")[0];
  const heroRows = Object.fromEntries(heroBlock.split("\n")
    .filter((line) => /^\| (Eyebrow|H1|Supporting copy|Microcopy) \|/.test(line))
    .map((line) => line.split("|").slice(1, -1).map(clean)));
  for (const [field, label] of Object.entries({
    eyebrow: "Eyebrow", heading: "H1", body: "Supporting copy", microcopy: "Microcopy",
  })) {
    check(`${route} hero ${field}`, data.hero[field], heroRows[label]);
  }
  const faqBlock = page.split("### Five Exact FAQs")[1].split("\n### ")[0];
  const expectedFaq = faqBlock.split("\n").filter((line) =>
    line.startsWith("|") && !/^\|\s*(Question|---)/.test(line)
  ).map((line) => {
    const [question, answer] = line.split("|").slice(1, -1).map(clean);
    return { question, answer };
  });
  check(`${route} exact five FAQs`, data.faq, expectedFaq);
  check(`${route} project pairing`, data.project.key, approvedProjects[index]);
  check(`${route} problems`, data.problems.items.length, 3);
  check(`${route} delivery`, data.delivery.items.length, 4);
  check(`${route} process`, data.process.items.length, 4);
  check(`${route} FAQ count`, data.faq.length, 5);
  check(`${route} psychology-only proof placement`,
    Boolean(data.finalProofAfterTeam), route === "/websites-for-psychologists");
  for (const [heading, field] of [
    ["Three Exact Problem Blocks", "problems"],
    ["Four Exact Delivery Blocks", "delivery"],
  ]) {
    const block = page.split(`### ${heading}`)[1].split("\n### ")[0];
    const items = [...block.matchAll(/^\d+\. \*\*(.+?)\*\*\s+(.+)$/gm)]
      .map(([, title, body]) => ({ title: clean(title), body: clean(body) }));
    // The period ending a bold list title is permitted as heading punctuation.
    const normalized = (entries) => entries.map((item) => ({
      title: item.title.replace(/\.$/, ""), body: item.body,
    }));
    check(`${route} exact ${field} copy`, normalized(data[field].items), normalized(items));
  }
}
if (errors.length) {
  console.error(errors.join("\n\n"));
  process.exitCode = 1;
} else {
  console.log("PASS: 14 approved routes; exact hero, 70 FAQ answers, 42 problems, 56 delivery blocks; correct project pairings and process counts.");
}