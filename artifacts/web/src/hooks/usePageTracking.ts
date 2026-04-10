import { useEffect, useRef } from "react";
import { useLocation } from "wouter";

const SITE_ID = "99c58e46-33ee-4c7c-ab23-eeb7badcc57b";
const ANALYTICS_URL = "https://graylock-os-ymwca.sevalla.app/api/public/analytics/event";

function categorizeReferrer(ref: string): string {
  if (!ref) return "Direct";
  try {
    const host = new URL(ref).hostname.toLowerCase();
    if (host.includes("google")) return "Google";
    if (host.includes("facebook") || host.includes("instagram") || host.includes("twitter") || host.includes("linkedin") || host.includes("tiktok") || host.includes("youtube")) return "Social";
    return "Other";
  } catch {
    return "Other";
  }
}

declare const gtag: ((...args: unknown[]) => void) | undefined;

function sendEvent(path: string, loadTimeMs: number | null) {
  const device = window.innerWidth < 768 ? "mobile" : "desktop";
  const referrer = categorizeReferrer(document.referrer);

  const body: Record<string, unknown> = {
    site_id: SITE_ID,
    path,
    referrer,
    device,
  };
  if (typeof loadTimeMs === "number" && loadTimeMs > 0) {
    body.load_time_ms = loadTimeMs;
  }

  fetch(ANALYTICS_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    credentials: "omit",
    keepalive: true,
  }).catch(() => {});

  if (typeof gtag === "function") {
    gtag("config", "G-9YFQ865HBJ", { page_path: path });
  }
}

export function usePageTracking() {
  const [location] = useLocation();
  const sent = useRef<string>("");

  useEffect(() => {
    if (sent.current === location) return;
    sent.current = location;

    let loadTimeMs: number | null = null;
    try {
      if (typeof PerformanceObserver !== "undefined") {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntriesByType("navigation");
          if (entries.length > 0) {
            const nav = entries[0] as PerformanceNavigationTiming;
            loadTimeMs = Math.round(nav.loadEventEnd - nav.startTime);
          }
          sendEvent(location, loadTimeMs);
          observer.disconnect();
        });
        observer.observe({ type: "navigation", buffered: true });
        return;
      }
    } catch {
      // PerformanceObserver not supported
    }

    sendEvent(location, null);
  }, [location]);
}
