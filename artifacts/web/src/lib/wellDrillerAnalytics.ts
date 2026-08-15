/**
 * GA4 event helpers for the well-driller campaign landing page funnel.
 * Uses the global gtag loaded in index.html; every call is a safe no-op
 * when analytics is unavailable (blocked, SSR/prerender, etc.).
 */
import { useEffect, useRef, type RefObject } from "react";
import { getWellDrillerCampaignParams } from "./wellDrillerLinks";

type GtagFn = (...args: unknown[]) => void;

type EventProps = Record<string, string | number | boolean | undefined>;

export function trackWellDrillerEvent(name: string, props: EventProps = {}): void {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: GtagFn }).gtag;
  if (typeof gtag !== "function") return;
  try {
    // market / rep / source / utm_* ride along on every campaign event.
    gtag("event", name, {
      industry: "well-drilling",
      page_path: window.location.pathname,
      page_referrer: typeof document !== "undefined" ? document.referrer || "" : "",
      device_class: window.innerWidth < 768 ? "mobile" : "desktop",
      ...getWellDrillerCampaignParams(),
      ...props,
    });
  } catch {
    // Analytics must never break the page.
  }
}

/**
 * Fires `eventName` once when the referenced section becomes ~50% visible
 * (spec: offer/process view events). For sections taller than the viewport
 * (mobile stacks), a 50% intersection ratio is unreachable, so the threshold
 * degrades to "the section fills half the viewport".
 */
export function useSectionHalfViewEvent<T extends HTMLElement>(
  eventName: string,
): RefObject<T | null> {
  const ref = useRef<T | null>(null);
  const fired = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || fired.current || typeof IntersectionObserver === "undefined") return;
    const sectionHeight = el.offsetHeight || 1;
    const viewportHeight = window.innerHeight || 1;
    const threshold = Math.max(0.05, Math.min(0.5, (viewportHeight * 0.5) / sectionHeight));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !fired.current) {
            fired.current = true;
            trackWellDrillerEvent(eventName);
            observer.disconnect();
            return;
          }
        }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [eventName]);

  return ref;
}
