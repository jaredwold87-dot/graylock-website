// Warms the assets behind the main nav so page changes feel instant.
// Runs once, after the current page has fully loaded, during idle time.
import aboutHeroBg from "@/assets/about-hero-bg.webp";
import processHeroBg from "@/assets/process-hero-bg.webp";
import pricingHeroBg from "@/assets/pricing-hero-bg.webp";
import portfolioHeroBg from "@/assets/portfolio-hero-bg.webp";

const HERO_IMAGES = [aboutHeroBg, processHeroBg, pricingHeroBg, portfolioHeroBg];

let done = false;

function warm() {
  if (done) return;
  done = true;

  // /services is the only nav page on a lazy chunk — warm it too.
  import("@/pages/WebsiteDesignOverview").catch(() => {});

  for (const src of HERO_IMAGES) {
    const img = new Image();
    img.decoding = "async";
    img.src = src;
  }
}

export function prefetchNavAssets() {
  const schedule = () => {
    if ("requestIdleCallback" in window) {
      (window as Window & typeof globalThis).requestIdleCallback(warm, { timeout: 4000 });
    } else {
      setTimeout(warm, 2000);
    }
  };

  if (document.readyState === "complete") {
    schedule();
  } else {
    window.addEventListener("load", schedule, { once: true });
  }
}
