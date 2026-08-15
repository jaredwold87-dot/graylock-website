/**
 * GA4 event helpers for the realtor landing page funnel.
 * Uses the global gtag loaded in index.html; every call is a safe no-op
 * when analytics is unavailable (blocked, SSR/prerender, etc.).
 */

type GtagFn = (...args: unknown[]) => void;

type EventProps = Record<string, string | number | boolean | undefined>;

export function getUtmParams(): Record<string, string> {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const utm: Record<string, string> = {};
  for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"]) {
    const value = params.get(key);
    if (value) utm[key] = value;
  }
  return utm;
}

export function trackRealtorEvent(name: string, props: EventProps = {}): void {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: GtagFn }).gtag;
  if (typeof gtag !== "function") return;
  try {
    gtag("event", name, {
      industry: "real-estate",
      page_path: window.location.pathname,
      page_referrer: typeof document !== "undefined" ? document.referrer || "" : "",
      device_class: window.innerWidth < 768 ? "mobile" : "desktop",
      ...getUtmParams(),
      ...props,
    });
  } catch {
    // Analytics must never break the page.
  }
}
