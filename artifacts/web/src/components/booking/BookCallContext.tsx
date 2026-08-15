import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type MouseEvent,
  type ReactNode,
} from "react";
import { useSearch } from "wouter";

export interface OpenBookCallOptions {
  /** Industry context (e.g. "real-estate") carried by the CTA that opened the form. */
  industry?: string;
  /** utm_* params carried by the CTA href; merged over the page URL's own utm params. */
  utmParams?: Record<string, string>;
}

interface BookCallContextType {
  isOpen: boolean;
  industry: string;
  utmParams: Record<string, string>;
  openBookCall: (opts?: OpenBookCallOptions) => void;
  closeBookCall: () => void;
}

const BookCallContext = createContext<BookCallContextType | null>(null);

/** Strict hook for components that are always inside the provider (the modal). */
export function useBookCall(): BookCallContextType {
  const ctx = useContext(BookCallContext);
  if (!ctx) throw new Error("useBookCall must be used within BookCallProvider");
  return ctx;
}

/** Tolerant hook for shared components (CTA buttons) — null outside the provider. */
export function useBookCallOptional(): BookCallContextType | null {
  return useContext(BookCallContext);
}

/**
 * Click handler for booking links (hrefs pointing at /get-started): opens the
 * quick-request modal instead of navigating, parsing industry + utm_* context
 * from the href. Plain/middle/modifier clicks and the no-provider case fall
 * through to normal link navigation. Returns undefined for non-booking hrefs.
 */
export function useBookingCtaClick(
  href?: string,
): ((e: MouseEvent) => void) | undefined {
  const bookCall = useBookCallOptional();
  if (!href || !href.startsWith("/get-started") || !bookCall) return undefined;
  return (e: MouseEvent) => {
    if (e.defaultPrevented || e.button !== 0) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    const params = new URLSearchParams(href.split("?")[1] ?? "");
    const utm: Record<string, string> = {};
    params.forEach((value, key) => {
      if (key.startsWith("utm_")) utm[key] = value;
    });
    bookCall.openBookCall({ industry: params.get("industry") ?? "", utmParams: utm });
  };
}

function utmParamsFromSearch(search: string): Record<string, string> {
  const params = new URLSearchParams(search);
  const utm: Record<string, string> = {};
  params.forEach((value, key) => {
    if (key.startsWith("utm_")) utm[key] = value;
  });
  return utm;
}

export function BookCallProvider({ children }: { children: ReactNode }) {
  const search = useSearch();
  const [isOpen, setIsOpen] = useState(false);
  const [industry, setIndustry] = useState("");
  const [utmParams, setUtmParams] = useState<Record<string, string>>({});

  const openBookCall = useCallback((opts: OpenBookCallOptions = {}) => {
    // Page-level utm params (e.g. from an ad click) merged under CTA-level ones.
    const pageUtms =
      typeof window !== "undefined" ? utmParamsFromSearch(window.location.search) : {};
    setIndustry(opts.industry ?? "");
    setUtmParams({ ...pageUtms, ...(opts.utmParams ?? {}) });
    setIsOpen(true);
  }, []);

  const closeBookCall = useCallback(() => setIsOpen(false), []);

  // Deep-link support: any URL carrying ?book=1 opens the form on arrival
  // (with industry/utm context read from that same URL).
  const autoOpened = useRef(false);
  useEffect(() => {
    const params = new URLSearchParams(search);
    if (params.get("book") === "1" && !autoOpened.current) {
      autoOpened.current = true;
      openBookCall({ industry: params.get("industry") ?? "" });
    }
  }, [search, openBookCall]);

  const value = useMemo(
    () => ({ isOpen, industry, utmParams, openBookCall, closeBookCall }),
    [isOpen, industry, utmParams, openBookCall, closeBookCall],
  );

  return <BookCallContext.Provider value={value}>{children}</BookCallContext.Provider>;
}
