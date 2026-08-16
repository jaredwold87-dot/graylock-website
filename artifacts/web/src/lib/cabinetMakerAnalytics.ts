/**
 * GA4 event helpers for the cabinet-maker landing page funnel (spec §5).
 * Uses the global gtag loaded in index.html; every call is a safe no-op
 * when analytics is unavailable (blocked, SSR/prerender, etc.).
 *
 * Required events (spec §5) — all fire with industry=cabinet-making and
 * the inbound campaign/UTM parameters preserved:
 *   cabinet_maker_hero_cta_click        (hero + header + sticky demo CTAs)
 *   cabinet_maker_who_we_work_with_view
 *   cabinet_maker_goals_section_view
 *   cabinet_maker_process_cta_click
 *   cabinet_maker_featured_project_click
 *   cabinet_maker_pricing_view
 *   cabinet_maker_faq_expand
 *   cabinet_maker_demo_start            (first form-field interaction)
 *   cabinet_maker_demo_complete         (successful demo request submit)
 */
import { useEffect, useRef, type RefObject } from "react";
import { getCabinetMakerCampaignParams } from "./cabinetMakerLinks";

type GtagFn = (...args: unknown[]) => void;

type EventProps = Record<string, string | number | boolean | undefined>;

export function trackCabinetMakerEvent(name: string, props: EventProps = {}): void {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: GtagFn }).gtag;
  if (typeof gtag !== "function") return;
  try {
    // market / rep / source / utm_* ride along on every campaign event.
    gtag("event", name, {
      industry: "cabinet-making",
      page_path: window.location.pathname,
      page_referrer: typeof document !== "undefined" ? document.referrer || "" : "",
      device_class: window.innerWidth < 768 ? "mobile" : "desktop",
      ...getCabinetMakerCampaignParams(),
      ...props,
    });
  } catch {
    // Analytics must never break the page.
  }
}

/**
 * Fires `eventName` once when the referenced section becomes ~50% visible
 * (spec §5 section-view events). For sections taller than the viewport
 * (mobile stacks), a 50% intersection ratio is unreachable, so the
 * threshold degrades to "the section fills half the viewport".
 */
export function useCabinetMakerSectionView<T extends HTMLElement>(
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
            trackCabinetMakerEvent(eventName);
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
