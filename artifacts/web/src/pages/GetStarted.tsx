import { useEffect, useMemo, useRef } from "react";
import { useSearch } from "wouter";
import { SEO } from "@/components/SEO";
import { ElevatedHero } from "@/components/ui/ElevatedHero";
import getStartedHeroBg from "@/assets/get-started-hero-bg.webp";
import { BookCallForm } from "@/components/booking/BookCallForm";
import { trackRealtorEvent } from "@/lib/realtorAnalytics";
import { trackWellDrillerEvent } from "@/lib/wellDrillerAnalytics";
import { WELL_DRILLER_LANDING_PATH, getWellDrillerMarket } from "@/lib/wellDrillerLinks";
import { CABINET_MAKER_LANDING_PATH } from "@/lib/cabinetMakerLinks";
import { AUCTIONEER_LANDING_PATH } from "@/lib/auctioneerLinks";

/**
 * Fallback page for direct visits (bookmarks, ads, middle-clicked CTAs).
 * Site CTAs normally open the same quick form in a modal without navigating.
 */
export default function GetStarted() {
  const search = useSearch();

  const { industry, utmParams, leadParams } = useMemo(() => {
    const params = new URLSearchParams(search);
    const utm: Record<string, string> = {};
    params.forEach((value, key) => {
      if (key.startsWith("utm_")) utm[key] = value;
    });
    // Non-utm lead context carried by campaign CTAs (e.g. the reflection
    // cards pass the selected card label as stated_goal).
    const lead: Record<string, string> = {};
    for (const key of ["stated_goal", "intent"]) {
      const value = params.get(key);
      if (value) lead[key] = value;
    }
    return { industry: params.get("industry") ?? "", utmParams: utm, leadParams: lead };
  }, [search]);

  const isRealtor = industry === "real-estate";
  const isWellDriller = industry === "well-drilling";
  const isCabinetMaker = industry === "cabinet-making";
  const isAuctioneer = industry === "auctioneering";
  const wellDrillerMarket = isWellDriller ? getWellDrillerMarket() : null;

  const landingPagePath = useMemo(() => {
    if (utmParams["utm_source"] === "realtor_landing") return "/websites-for-realtors";
    if (utmParams["utm_source"] === "well_driller_landing") return WELL_DRILLER_LANDING_PATH;
    if (utmParams["utm_source"] === "cabinet_maker_landing") return CABINET_MAKER_LANDING_PATH;
    if (utmParams["utm_source"] === "auctioneer_landing") return AUCTIONEER_LANDING_PATH;
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

  // Campaign form-view events — fire once when the campaign context block (the
  // top of the form area) becomes visible. The block is compact, so a 50%
  // threshold means "the user actually saw it"; observing the whole section
  // proved unreliable, since 20% of the tall well-driller form section can be
  // unreachable on partial scrolls.
  const contextBlockRef = useRef<HTMLDivElement>(null);
  const formViewFired = useRef(false);
  useEffect(() => {
    if ((!isRealtor && !isWellDriller) || formViewFired.current) return;
    const el = contextBlockRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !formViewFired.current) {
            formViewFired.current = true;
            if (isRealtor) trackRealtorEvent("realtor_form_view");
            if (isWellDriller) trackWellDrillerEvent("well_driller_form_view");
            observer.disconnect();
            return;
          }
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [isRealtor, isWellDriller]);

  return (
    <>
      <SEO title="Request a 15-Minute Discovery Call | Graylock Digital" description="Request a free 15-minute discovery call with Tim. Takes under a minute — we'll reach out within one business day. No obligation, no pressure." url="https://graylockdigital.com/get-started" />
      <ElevatedHero
        lines={[
          { text: "Let's Get" },
          { text: "Your Site" },
          { text: "Started.", accent: true },
        ]}
        subheadline="Tell us where to reach you — it takes under a minute, and we'll take it from there."
        backgroundImage={getStartedHeroBg}
      />
      <section className="bg-[#F4F1EC] min-h-[70vh] relative py-16 md:py-32 border-t border-[#0F0F0F]/10">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <div className="bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#0F0F0F]/5 p-8 md:p-14 lg:p-16">
          {isRealtor && (
            <div ref={contextBlockRef} className="mb-12 pb-12 border-b border-[#0F0F0F]/10">
              <span className="text-[#E85D26] font-sans font-bold tracking-widest uppercase text-xs mb-4 block">Discovery Call</span>
              <h2 className="font-display text-4xl text-[#0F0F0F] leading-tight mb-6">
                15-Minute Real Estate Website + IDX Fit Call
              </h2>
              <p className="font-sans text-xl text-[#0F0F0F]/70 leading-relaxed">
                We will review your market, MLS path, current website, team structure,
                buyer/seller goals, and the right scope before you commit.
              </p>
            </div>
          )}
          {isWellDriller && (
            <div ref={contextBlockRef} className="mb-12 pb-12 border-b border-[#0F0F0F]/10">
              <span className="text-[#E85D26] font-sans font-bold tracking-widest uppercase text-xs mb-4 block">Discovery Call</span>
              <h2 className="font-display text-4xl text-[#0F0F0F] leading-tight mb-6">
                Let's build your free custom demo.
              </h2>
              <p className="font-sans text-xl text-[#0F0F0F]/70 leading-relaxed">
                Tell us a little about the business and what you want the website to do. We will
                use the conversation to prepare a homepage direction that is actually relevant to
                your company.
              </p>
              {wellDrillerMarket && (
                <div className="mt-8 inline-block bg-[#F4F1EC] text-[#0F0F0F] px-4 py-2 font-sans text-sm font-medium tracking-wide">
                  Market: <span className="font-semibold">{wellDrillerMarket}</span>
                </div>
              )}
            </div>
          )}
          {isCabinetMaker && (
            <div className="mb-12 pb-12 border-b border-[#0F0F0F]/10">
              <span className="text-[#E85D26] font-sans font-bold tracking-widest uppercase text-xs mb-4 block">Discovery Call</span>
              <h2 className="font-display text-4xl text-[#0F0F0F] leading-tight mb-6">
                Let's build your free custom demo.
              </h2>
              <p className="font-sans text-xl text-[#0F0F0F]/70 leading-relaxed">
                Tell us about your shop and the projects you want more of. We will use the
                conversation to prepare a homepage direction built around your work—not a
                generic template.
              </p>
            </div>
          )}
          {isAuctioneer && (
            <div className="mb-12 pb-12 border-b border-[#0F0F0F]/10">
              <span className="text-[#E85D26] font-sans font-bold tracking-widest uppercase text-xs mb-4 block">Discovery Call</span>
              <h2 className="font-display text-4xl text-[#0F0F0F] leading-tight mb-6">
                Let's build your free custom demo.
              </h2>
              <p className="font-sans text-xl text-[#0F0F0F]/70 leading-relaxed">
                Tell us about your auction business and the clients and events you want more of. We will use
                the conversation to prepare a homepage direction built around how you actually
                sell—not a generic template.
              </p>
            </div>
          )}
          <BookCallForm
            industry={industry}
            utmParams={utmParams}
            leadParams={leadParams}
            landingPagePath={landingPagePath}
            variant="page"
          />
          </div>
          <div className="text-center mt-12">
            <p className="text-[#0F0F0F]/60 text-base font-sans">
              Prefer to email us? Reach out at{" "}
              <a href="mailto:hello@graylockdigital.com" className="text-[#E85D26] font-semibold hover:text-[#0F0F0F] transition-colors underline underline-offset-4 decoration-[#E85D26]/30 hover:decoration-[#0F0F0F]">
                hello@graylockdigital.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
