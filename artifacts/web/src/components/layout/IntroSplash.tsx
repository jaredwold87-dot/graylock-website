import { useEffect, useState } from "react";

const SESSION_KEY = "graylock-intro-shown";
const BASE = import.meta.env.BASE_URL;

// Timeline (ms): logo in at 100, tagline in at 550, overlay fades from 1350,
// fully gone by ~1850 — under the 2s budget.
const FADE_OUT_START_MS = 1350;
const FADE_OUT_DURATION_MS = 450;

type Phase = "hidden" | "in" | "out";

/**
 * Decide synchronously (during first render) whether the intro should play.
 * The sessionStorage flag is set immediately so refreshes and in-session
 * navigation never replay it, even if the user leaves mid-animation.
 */
function decideShowIntro(): boolean {
  if (typeof window === "undefined") return false;
  // Automated browsers (crawlers, Lighthouse, screenshot tools) skip the intro.
  if (window.navigator.webdriver) return false;
  let alreadyShown = true;
  try {
    alreadyShown = window.sessionStorage.getItem(SESSION_KEY) === "1";
    if (!alreadyShown) window.sessionStorage.setItem(SESSION_KEY, "1");
  } catch {
    // sessionStorage unavailable (e.g. blocked) — skip the intro entirely.
    return false;
  }
  if (alreadyShown) return false;
  // Reduced-motion users go straight to the site.
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  return true;
}

export function IntroSplash() {
  const [phase, setPhase] = useState<Phase>(() => (decideShowIntro() ? "in" : "hidden"));

  // Timers + asset preloading — run once if the intro is playing.
  useEffect(() => {
    if (phase === "hidden") return;

    // Warm the hero image and display fonts behind the overlay so the
    // reveal shows a finished page. Fire-and-forget: the overlay fades out
    // on the timer regardless of asset progress.
    const heroSrc = window.matchMedia("(min-width: 768px)").matches
      ? `${BASE}hero-edge-2.webp`
      : `${BASE}hero-mobile-device-v2.webp`;
    const img = new Image();
    img.src = heroSrc;
    if (typeof document !== "undefined" && document.fonts?.load) {
      document.fonts.load('700 1rem "Barlow Condensed"');
      document.fonts.load('400 1rem "Barlow"');
    }

    const outTimer = window.setTimeout(() => setPhase("out"), FADE_OUT_START_MS);
    const goneTimer = window.setTimeout(
      () => setPhase("hidden"),
      FADE_OUT_START_MS + FADE_OUT_DURATION_MS + 50,
    );
    return () => {
      window.clearTimeout(outTimer);
      window.clearTimeout(goneTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Scroll lock only while the overlay is visible; restores automatically.
  useEffect(() => {
    if (phase === "hidden") return;
    const html = document.documentElement;
    const prevOverflow = html.style.overflow;
    html.style.overflow = "hidden";
    return () => {
      html.style.overflow = prevOverflow;
    };
  }, [phase]);

  if (phase === "hidden") return null;

  return (
    <div
      aria-hidden="true"
      data-testid="intro-splash"
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center px-6"
      style={{
        backgroundColor: "#0F0F0F",
        animation:
          phase === "out"
            ? `splash-fade-out ${FADE_OUT_DURATION_MS}ms ease-in both`
            : undefined,
      }}
    >
      <img
        src={`${BASE}logo-stacked.png`}
        alt=""
        width={1280}
        height={1024}
        decoding="async"
        className="w-44 md:w-56 h-auto"
        style={{ animation: "splash-el-in 500ms ease-out 100ms both" }}
      />
      <p
        className="mt-6 font-display uppercase tracking-widest text-offwhite text-center text-lg md:text-2xl"
        style={{ animation: "splash-el-in 500ms ease-out 550ms both" }}
      >
        Your Website. Your Reputation.{" "}
        <span className="text-[#E85D26]">Elevated.</span>
      </p>
    </div>
  );
}
