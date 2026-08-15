import { useEffect, useMemo, useRef } from "react";
import { useSearch } from "wouter";
import { SEO } from "@/components/SEO";
import { ElevatedHero } from "@/components/ui/ElevatedHero";
import getStartedHeroBg from "@/assets/get-started-hero-bg.webp";
import { BookCallForm } from "@/components/booking/BookCallForm";
import { trackRealtorEvent } from "@/lib/realtorAnalytics";

/**
 * Fallback page for direct visits (bookmarks, ads, middle-clicked CTAs).
 * Site CTAs normally open the same quick form in a modal without navigating.
 */
export default function GetStarted() {
  const search = useSearch();

  const { industry, utmParams } = useMemo(() => {
    const params = new URLSearchParams(search);
    const utm: Record<string, string> = {};
    params.forEach((value, key) => {
      if (key.startsWith("utm_")) utm[key] = value;
    });
    return { industry: params.get("industry") ?? "", utmParams: utm };
  }, [search]);

  const isRealtor = industry === "real-estate";

  const landingPagePath = useMemo(() => {
    if (utmParams["utm_source"] === "realtor_landing") return "/websites-for-realtors";
    if (typeof document !== "undefined" && document.referrer) {
      try {
        const ref = new URL(document.referrer);
        if (ref.origin === window.location.origin) return ref.pathname;
      } catch {
        /* unparseable referrer — ignore */
      }
    }
    return "";
  }, [utmParams]);

  // realtor_form_view — fires once when the realtor-context form becomes visible.
  const formSectionRef = useRef<HTMLElement>(null);
  const formViewFired = useRef(false);
  useEffect(() => {
    if (!isRealtor || formViewFired.current) return;
    const el = formSectionRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !formViewFired.current) {
            formViewFired.current = true;
            trackRealtorEvent("realtor_form_view");
            observer.disconnect();
            return;
          }
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [isRealtor]);

  return (
    <>
      <SEO title="Book a Discovery Call | Graylock Digital" description="Request a free 15-minute discovery call with Tim. Takes under a minute — we'll reach out within one business day. No obligation, no pressure." url="https://graylockdigital.com/get-started" />
      <ElevatedHero
        lines={[
          { text: "Let's Get" },
          { text: "Your Site" },
          { text: "Started.", accent: true },
        ]}
        subheadline="Tell us where to reach you — it takes under a minute, and we'll take it from there."
        backgroundImage={getStartedHeroBg}
      />
      <section ref={formSectionRef} className="bg-white min-h-[60vh]">
        <div className="max-w-xl mx-auto px-6 py-12 md:py-16">
          {isRealtor && (
            <div className="bg-orange/[0.07] border-l-4 border-orange rounded-r-lg px-5 py-4 mb-8">
              <p className="text-charcoal font-sans text-sm md:text-base leading-relaxed">
                You're booking a <span className="font-semibold">Realtor Website Call</span>.
                We'll come prepared to talk about your market, your website, and
                property-search needs.
              </p>
            </div>
          )}
          <BookCallForm
            industry={industry}
            utmParams={utmParams}
            landingPagePath={landingPagePath}
            variant="page"
          />
          <p className="text-slate-500 text-sm font-sans text-center mt-10">
            Prefer to email us? Reach out at{" "}
            <a href="mailto:hello@graylockdigital.com" className="text-orange hover:underline">
              hello@graylockdigital.com
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
