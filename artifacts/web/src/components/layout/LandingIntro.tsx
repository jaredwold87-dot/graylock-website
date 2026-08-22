import { useCallback, useEffect, useState } from "react";
import heroDesktopTopographic from "@/assets/hero-desktop-topographic.webp";

const INTRO_SEEN_KEY = "graylock-landing-intro-seen";

function getIntroConfig() {
  if (typeof window === "undefined") {
    return { shouldShow: false, isPreview: false };
  }

  const searchParams = new URLSearchParams(window.location.search);
  const isPreview = searchParams.get("intro") === "preview";
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");
  const path = basePath && window.location.pathname.startsWith(basePath)
    ? window.location.pathname.slice(basePath.length) || "/"
    : window.location.pathname;

  if (isPreview) {
    return { shouldShow: true, isPreview: true };
  }

  if (path !== "/") {
    return { shouldShow: false, isPreview: false };
  }

  try {
    return {
      shouldShow: window.sessionStorage.getItem(INTRO_SEEN_KEY) !== "true",
      isPreview: false,
    };
  } catch {
    return { shouldShow: true, isPreview: false };
  }
}

export function LandingIntro() {
  const [introConfig] = useState(getIntroConfig);
  const [isVisible, setIsVisible] = useState(introConfig.shouldShow);
  const [isExiting, setIsExiting] = useState(false);

  const completeIntro = useCallback(() => {
    setIsExiting(true);

    window.setTimeout(() => {
      if (!introConfig.isPreview) {
        try {
          window.sessionStorage.setItem(INTRO_SEEN_KEY, "true");
        } catch {
          // The intro remains functional in privacy-restricted browsers.
        }
      }
      setIsVisible(false);
    }, 850);
  }, [introConfig.isPreview]);

  useEffect(() => {
    if (!isVisible) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const introTimer = window.setTimeout(completeIntro, reducedMotion ? 2000 : 4700);

    return () => {
      window.clearTimeout(introTimer);
      document.body.style.overflow = originalOverflow;
    };
  }, [completeIntro, isVisible]);

  if (!isVisible) {
    return null;
  }

  return (
    <section
      className={`intro-screen ${isExiting ? "intro-screen--exiting" : ""}`}
      aria-label="Graylock Digital introduction"
      role="status"
      aria-live="polite"
    >
      <img
        src={heroDesktopTopographic}
        alt=""
        aria-hidden="true"
        className="intro-screen__background"
        fetchPriority="high"
      />
      <div className="intro-screen__shade" aria-hidden="true" />
      <div className="intro-screen__glow" aria-hidden="true" />

      <div className="intro-screen__content">
        <img
          src={`${import.meta.env.BASE_URL}logo-horizontal.png`}
          alt="Graylock Digital"
          className="intro-screen__logo"
        />
        <div className="intro-screen__rule" aria-hidden="true" />
        <p className="intro-screen__statement">
          <span>Your Website.</span>
          <span>Your Reputation.</span>
          <span className="intro-screen__statement-accent">Elevated.</span>
        </p>
      </div>

      <div className="intro-screen__footer" aria-hidden="true">
        <span>GRAYLOCK DIGITAL</span>
        <span>ENTERING THE EXPERIENCE</span>
      </div>
      <div className="intro-screen__progress" aria-hidden="true">
        <span />
      </div>

      <button
        type="button"
        className="intro-screen__skip"
        onClick={completeIntro}
        disabled={isExiting}
      >
        Skip intro
      </button>
    </section>
  );
}