const fs = require('fs');

const content = `
import { useEffect, useMemo, useRef } from "react";
import { useSearch } from "wouter";
import { SEO } from "@/components/SEO";
import { BookCallForm } from "@/components/booking/BookCallForm";
import { trackRealtorEvent } from "@/lib/realtorAnalytics";
import { trackWellDrillerEvent } from "@/lib/wellDrillerAnalytics";
import { WELL_DRILLER_LANDING_PATH, getWellDrillerMarket } from "@/lib/wellDrillerLinks";
import { CABINET_MAKER_LANDING_PATH } from "@/lib/cabinetMakerLinks";
import { AUCTIONEER_LANDING_PATH } from "@/lib/auctioneerLinks";
import timFounder from "@/assets/tim-founder.webp";

export default function GetStarted() {
  const search = useSearch();

  const { industry, utmParams, leadParams } = useMemo(() => {
    const params = new URLSearchParams(search);
    const utm: Record<string, string> = {};
    params.forEach((value, key) => {
      if (key.startsWith("utm_")) utm[key] = value;
    });
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
        // ignore
      }
    }
    return "";
  }, [utmParams]);

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
      <div className="min-h-screen bg-[#0F0F0F] pt-[72px] md:pt-[84px] flex flex-col">
        <div className="flex-1 flex flex-col md:flex-row">
          
          {/* Intro Column - Charcoal */}
          <div className="w-full md:w-5/12 lg:w-4/12 bg-[#0F0F0F] text-[#F4F1EC] p-8 md:p-12 lg:p-16 flex flex-col justify-between border-t border-[#F4F1EC]/10">
            <div>
              {isRealtor ? (
                <div ref={contextBlockRef}>
                  <span className="text-[#E85D26] font-sans font-bold tracking-widest uppercase text-[11px] mb-4 block">Discovery Call</span>
                  <h1 className="font-display text-4xl lg:text-5xl leading-tight mb-6 text-white">
                    15-Minute Real Estate Website + IDX Fit Call
                  </h1>
                  <p className="font-sans text-lg text-[#F4F1EC]/70 leading-relaxed mb-8">
                    We will review your market, MLS path, current website, team structure,
                    buyer/seller goals, and the right scope before you commit.
                  </p>
                </div>
              ) : isWellDriller ? (
                <div ref={contextBlockRef}>
                  <span className="text-[#E85D26] font-sans font-bold tracking-widest uppercase text-[11px] mb-4 block">Discovery Call</span>
                  <h1 className="font-display text-4xl lg:text-5xl leading-tight mb-6 text-white">
                    Let's build your free custom demo.
                  </h1>
                  <p className="font-sans text-lg text-[#F4F1EC]/70 leading-relaxed mb-8">
                    Tell us a little about the business and what you want the website to do. We will
                    use the conversation to prepare a homepage direction that is actually relevant to
                    your company.
                  </p>
                  {wellDrillerMarket && (
                    <div className="mt-8 inline-block bg-[#F4F1EC]/10 text-white px-4 py-2 font-sans text-sm font-medium tracking-wide border border-[#F4F1EC]/10">
                      Market: <span className="font-semibold text-[#E85D26]">{wellDrillerMarket}</span>
                    </div>
                  )}
                </div>
              ) : isCabinetMaker ? (
                <div ref={contextBlockRef}>
                  <span className="text-[#E85D26] font-sans font-bold tracking-widest uppercase text-[11px] mb-4 block">Discovery Call</span>
                  <h1 className="font-display text-4xl lg:text-5xl leading-tight mb-6 text-white">
                    Let's build your free custom demo.
                  </h1>
                  <p className="font-sans text-lg text-[#F4F1EC]/70 leading-relaxed mb-8">
                    Tell us about your shop and the projects you want more of. We will use the
                    conversation to prepare a homepage direction built around your work—not a
                    generic template.
                  </p>
                </div>
              ) : isAuctioneer ? (
                <div ref={contextBlockRef}>
                  <span className="text-[#E85D26] font-sans font-bold tracking-widest uppercase text-[11px] mb-4 block">Discovery Call</span>
                  <h1 className="font-display text-4xl lg:text-5xl leading-tight mb-6 text-white">
                    Let's build your free custom demo.
                  </h1>
                  <p className="font-sans text-lg text-[#F4F1EC]/70 leading-relaxed mb-8">
                    Tell us about your auction business and the clients and events you want more of. We will use
                    the conversation to prepare a homepage direction built around how you actually
                    sell—not a generic template.
                  </p>
                </div>
              ) : (
                <div ref={contextBlockRef}>
                  <span className="text-[#E85D26] font-sans font-bold tracking-widest uppercase text-[11px] mb-4 block">Discovery Call</span>
                  <h1 className="font-display text-4xl lg:text-5xl leading-tight mb-6 text-white">
                    Let's get your site started.
                  </h1>
                  <p className="font-sans text-lg text-[#F4F1EC]/70 leading-relaxed mb-8">
                    Request a free 15-minute discovery call. Tell us where to reach you — it takes under a minute, and we'll take it from there.
                  </p>
                </div>
              )}
            </div>
            
            <div className="mt-12 md:mt-0 flex items-center gap-4 border-t border-[#F4F1EC]/10 pt-8">
              <img 
                src={timFounder} 
                alt="Tim, Founder" 
                className="w-14 h-14 rounded-full object-cover grayscale opacity-90 border border-[#F4F1EC]/10" 
              />
              <div>
                <p className="font-sans font-semibold text-white text-sm">Tim</p>
                <p className="font-sans text-[#F4F1EC]/50 text-xs">Founder, Graylock Digital</p>
              </div>
            </div>
          </div>

          {/* Form Column - Warm White */}
          <div className="w-full md:w-7/12 lg:w-8/12 bg-[#F9F8F6] flex flex-col justify-center p-6 md:p-12 lg:px-20 lg:py-16 overflow-y-auto">
            <div className="max-w-3xl w-full mx-auto bg-white p-6 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#0F0F0F]/5">
              <BookCallForm
                industry={industry}
                utmParams={utmParams}
                leadParams={leadParams}
                landingPagePath={landingPagePath}
                variant="page"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
`;

fs.writeFileSync('artifacts/web/src/pages/GetStarted.tsx', content);
