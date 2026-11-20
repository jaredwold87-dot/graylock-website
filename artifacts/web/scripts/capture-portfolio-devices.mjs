// Read-only captures of the public sites listed in the portfolio.
// Start Chromium with --remote-debugging-port=9333 before running.
import fs from "node:fs/promises";
import { execFileSync } from "node:child_process";

const root = new URL("../../../", import.meta.url).pathname;
const raw = `${root}generated-artifacts/portfolio-captures`;
const out = `${root}artifacts/web/src/assets/work/devices`;
await fs.mkdir(raw, { recursive: true });
await fs.mkdir(out, { recursive: true });
const projects = [];
for (const file of ["pages/Work.tsx", "data/additionalPortfolioProjects.ts", "data/portfolioExpansion.ts"]) {
  const text = await fs.readFile(`${root}artifacts/web/src/${file}`, "utf8");
  for (const match of text.matchAll(/name: "([^"]+)",\s*category:[\s\S]*?url: "(https:[^"]+)"/g)) {
    projects.push({ name: match[1], url: match[2], slug: new URL(match[2]).hostname.replace(/^www\./, "").replaceAll(".", "-") });
  }
}
if (process.argv[2]) {
  const wanted = new Set(process.argv[2].split(","));
  projects.splice(0, projects.length, ...projects.filter(project => wanted.has(project.slug)));
}
await fs.writeFile(`${raw}/projects.json`, JSON.stringify(projects, null, 2));
const sleep = ms => new Promise(r => setTimeout(r, ms));
async function capture(project) {
  const page = await (await fetch("http://localhost:9333/json/new?about:blank", { method: "PUT" })).json();
  const ws = new WebSocket(page.webSocketDebuggerUrl);
  await new Promise((resolve, reject) => { ws.onopen = resolve; ws.onerror = reject; });
  let id = 0;
  const pending = new Map();
  ws.onmessage = event => {
    const result = JSON.parse(event.data);
    pending.get(result.id)?.(result);
    pending.delete(result.id);
  };
  const send = (method, params = {}) => Promise.race([
    new Promise(resolve => {
      pending.set(++id, resolve);
      ws.send(JSON.stringify({ id, method, params }));
    }),
    sleep(25000).then(() => { throw new Error(`${method} timeout`); }),
  ]);
  try {
    for (const [kind, width, height] of [["desktop", 1440, 790], ["mobile", 390, 844]]) {
      await send("Emulation.setDeviceMetricsOverride", { width, height, deviceScaleFactor: 1, mobile: kind === "mobile" });
      await send("Emulation.setFocusEmulationEnabled", { enabled: true });
      await send("Emulation.setEmulatedMedia", { features: [{ name: "prefers-reduced-motion", value: "reduce" }] });
      await send("Page.navigate", { url: project.url });
      await send("Page.bringToFront");
      await sleep(6500);
      // Decline optional cookies where this explicit control is available.
      await send("Runtime.evaluate", { expression: `[...document.querySelectorAll('button')].find(b=>/^(reject optional|reject all|decline|decline optional|only necessary)$/i.test(b.textContent.trim()))?.click()` });
      await send("Runtime.evaluate", { expression: `[...document.querySelectorAll('button,a')].find(b=>/^continue to site$/i.test(b.textContent.trim()))?.click()` });
      await send("Runtime.evaluate", { expression: `[...document.querySelectorAll('button')].find(b=>/^(close|close dialog|close modal|dismiss)$/i.test(b.getAttribute('aria-label')||''))?.click()` });
      await send("Runtime.evaluate", { expression: "document.fonts.ready", awaitPromise: true });
      await sleep(700);
      const info = await send("Runtime.evaluate", { expression: "JSON.stringify({title:document.title,url:location.href,text:document.body.innerText.slice(0,400)})", returnByValue: true });
      project[kind] = JSON.parse(info.result.result.value);
      const shot = await send("Page.captureScreenshot", { format: "png" });
      if (!shot.result?.data) throw new Error(JSON.stringify(shot));
      const path = `${raw}/${project.slug}-${kind}.png`;
      await fs.writeFile(path, Buffer.from(shot.result.data, "base64"));
      execFileSync("magick", [path, "-quality", "83", `${out}/${project.slug}-${kind}.webp`]);
    }
    console.log(`Captured ${project.name}`);
  } catch (error) {
    project.error = String(error);
    console.log(`FAILED ${project.name}: ${error}`);
  } finally {
    ws.close();
    await fetch(`http://localhost:9333/json/close/${page.id}`);
  }
}
let next = 0;
await Promise.all(Array.from({ length: Number(process.env.CAPTURE_CONCURRENCY) || (process.argv[2] ? 1 : 3) }, async () => {
  while (next < projects.length) await capture(projects[next++]);
}));
await fs.writeFile(`${raw}/results.json`, JSON.stringify(projects, null, 2));
console.log(`Finished ${projects.length} projects.`);
process.exit(projects.some(p => p.error) ? 1 : 0);
