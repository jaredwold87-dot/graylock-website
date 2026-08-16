import { useEffect, useRef } from "react";
import { Check, CircleDashed } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { trackRealtorEvent } from "@/lib/realtorAnalytics";

/**
 * "What Your Realtor Website Package Includes" — makes the managed scope
 * tangible before pricing, and separates what is included from what is
 * confirmed after market review. This is the fix for the old isolated
 * $199 anchor. Flat two-column layout, no card boxes.
 */
const INCLUDED = [
  "Custom branded website and mobile-first design",
  "Local SEO foundation and market/service-area content structure",
  "Buyer and seller conversion paths",
  "Property inquiry, valuation, consultation, and contact forms",
  "Hosting, SSL, backups, maintenance, support, and reporting",
  "Defined website update allowance and refresh benefit while subscribed",
  "Standard IDX presentation when eligibility and scope allow",
];

const CONFIRMED_AFTER_REVIEW = [
  "Local MLS and brokerage eligibility",
  "IDX provider path and available data fields",
  "MLS/provider setup, approval requirements, and third-party costs",
  "Additional MLS coverage or complex search requirements",
  "CRM, SMS, email, or advanced lead-routing integrations",
  "Bespoke map, portal, paid-media, or expanded SEO work",
];

export function RealtorPackageSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const viewFired = useRef(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || viewFired.current || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !viewFired.current) {
            viewFired.current = true;
            trackRealtorEvent("realtor_package_scope_view");
            observer.disconnect();
            return;
          }
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="package-scope"
      className="bg-[#1a1a1a] py-20 md:py-28 px-6 md:px-12 border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center max-w-[820px] mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-display text-white leading-tight mb-5">
            What Your Realtor Website Package Includes.
          </h2>
          <p className="text-stone font-sans text-lg leading-relaxed">
            Your plan is not just hosting. It is a custom, maintained real-estate website
            built to support local visibility, buyer and seller conversations, and a clear
            next step for every visitor.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-14 lg:gap-x-20 max-w-5xl mx-auto">
          {/* Included first on mobile, per the scope */}
          <ScrollReveal>
            <div className="h-[3px] w-9 bg-[#E85D26] mb-4" aria-hidden="true" />
            <h3 className="font-display text-2xl md:text-[26px] text-white leading-snug mb-6">
              Included With the Managed Website
            </h3>
            <ul className="space-y-4">
              {INCLUDED.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check
                    size={17}
                    strokeWidth={2.5}
                    className="text-white bg-[#E85D26] rounded-full p-[3px] w-[19px] h-[19px] flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-offwhite font-sans text-[15px] md:text-base leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="h-[3px] w-9 bg-stone/50 mb-4" aria-hidden="true" />
            <h3 className="font-display text-2xl md:text-[26px] text-white leading-snug mb-6">
              Confirmed After Market Review
            </h3>
            <ul className="space-y-4">
              {CONFIRMED_AFTER_REVIEW.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CircleDashed
                    size={17}
                    strokeWidth={2}
                    className="text-stone flex-shrink-0 mt-[3px]"
                    aria-hidden="true"
                  />
                  <span className="text-stone font-sans text-[15px] md:text-base leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>

        {/* Required clarification — keeps the scope story honest before pricing */}
        <ScrollReveal className="mt-12 md:mt-14">
          <p className="text-stone/90 font-sans text-sm md:text-[15px] leading-relaxed text-center max-w-[760px] mx-auto">
            IDX availability, approval requirements, disclosures, and third-party fees vary
            by MLS, brokerage, provider, and market. We confirm your path and provide an
            exact scope before you commit.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
