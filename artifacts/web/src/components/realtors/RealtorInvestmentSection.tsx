import { useEffect, useRef } from "react";
import { Check } from "lucide-react";
import { CTAButton } from "@/components/ui/CTAButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { trackRealtorEvent } from "@/lib/realtorAnalytics";
import { REALTOR_CTA_LABEL } from "@/lib/realtorLinks";

/** Subtle dot-grid texture, same device as the hero backdrop. */
const DOT_GRID_STYLE: React.CSSProperties = {
  backgroundImage: "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
  backgroundSize: "26px 26px",
};

/**
 * Transparent two-package Realtor pricing — Agent vs Broker + Team, both
 * anchored on an included IDX Broker Core plan. Dark editorial cards (no
 * bright SaaS styling), full-width IDX reassurance strip, handwritten
 * accent, and a fit-call closing block. Replaces the old plan-first
 * "published rates" framing.
 */
interface RealtorPackage {
  featured?: boolean;
  eyebrow: string;
  name: string;
  price: string;
  support: string;
  included: string[];
  qualification: string;
  ctaLabel: string;
  href: string;
  placement: string;
}

const PACKAGES: RealtorPackage[] = [
  {
    eyebrow: "For Individual Agents",
    name: "Agent Website + IDX Core",
    price: "$349",
    support:
      "A custom, lead-focused website for one agent who wants a stronger local presence, branded property search, and clear buyer and seller paths.",
    included: [
      "Custom website with up to 8 total pages",
      "Custom homepage, service/market pages, and mobile-first design",
      "IDX Broker Core 60 plan included",
      "Branded property search and listing-detail experience when MLS eligibility allows",
      "Buyer inquiry, seller valuation, consultation, and contact capture paths",
      "Local SEO foundation for your market and service area",
      "Hosting, SSL, backups, maintenance, and ongoing support",
      "Two-year website refresh benefit while subscribed",
    ],
    qualification:
      "Your local MLS and brokerage must approve IDX data access. Advanced IDX plans, additional MLS coverage, and market-specific third-party requirements are reviewed before any upgrade is added.",
    ctaLabel: "Get Your Agent Website + IDX Plan",
    href: "/get-started?industry=real-estate&plan=agent_idx_core&utm_source=realtor_landing&utm_medium=pricing_cta&utm_content=agent_package",
    placement: "agent_package",
  },
  {
    featured: true,
    eyebrow: "For Brokerages + Teams",
    name: "Broker + Team Website + IDX Core",
    price: "$449",
    support:
      "A larger custom website for brokerages and teams that need more pages, agent profiles, stronger local-market coverage, and a polished buyer and seller experience across the organization.",
    included: [
      "Custom website with typically 15 total pages",
      "Individual agent profile and biography pages, included within the scoped page count",
      "Custom homepage, team, brokerage, market, community, and contact content",
      "IDX Broker Core plan included",
      "Branded property search and listing-detail experience when MLS eligibility allows",
      "Buyer inquiry, seller valuation, consultation, and contact capture paths",
      "Stronger local SEO foundation for multiple agents, service areas, or markets",
      "Hosting, SSL, backups, maintenance, and ongoing support",
      "Two-year website refresh benefit while subscribed",
    ],
    qualification:
      "Advanced IDX plans, additional data coverage, more MLSs, CRM or lead-routing integrations, custom map/portal work, and provider or MLS-specific requirements can be added after a market review. We confirm the exact scope before you commit.",
    ctaLabel: "Get Your Broker + Team Website Plan",
    href: "/get-started?industry=real-estate&plan=broker_team_idx_core&utm_source=realtor_landing&utm_medium=pricing_cta&utm_content=broker_team_package",
    placement: "broker_team_package",
  },
];

const FIT_CALL_HREF =
  "/get-started?industry=real-estate&intent=realtor_idx_fit&utm_source=realtor_landing&utm_medium=pricing_cta&utm_content=pricing_section_fit_call";

export function RealtorInvestmentSection() {
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
            trackRealtorEvent("realtor_pricing_view");
            observer.disconnect();
            return;
          }
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="investment"
      className="relative bg-[#0f0f0f] py-20 md:py-28 px-6 md:px-12 border-t border-white/5 overflow-hidden"
    >
      <div aria-hidden="true" className="absolute inset-0" style={DOT_GRID_STYLE} />

      <div className="relative max-w-6xl mx-auto">
        {/* Section header */}
        <ScrollReveal className="text-center">
          <p className="text-[#E85D26] font-sans font-bold uppercase tracking-[0.2em] text-sm mb-4">
            Transparent Realtor Website Pricing
          </p>
          <h2 className="font-display text-white text-4xl md:text-[52px] leading-[1.08] mb-6">
            Two Website Packages. Built for the Way You Work.
          </h2>
          <p className="text-stone font-sans text-lg leading-relaxed max-w-[760px] mx-auto">
            Every Realtor website includes custom design, local-market strategy, lead
            capture, hosting, maintenance, and an IDX Broker Core plan. Choose the starting
            point that fits your business today, then add advanced IDX capabilities or
            custom functionality only if your market and goals require it.
          </p>
        </ScrollReveal>

        {/* Package cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mt-12 md:mt-16 max-w-5xl mx-auto">
          {PACKAGES.map((pkg, i) => (
            <ScrollReveal key={pkg.name} delay={0.05 + i * 0.05} className="h-full">
              <div
                className={`relative flex flex-col h-full rounded-lg p-7 md:p-9 bg-white/[0.03] border ${
                  pkg.featured ? "border-[#E85D26]/60" : "border-white/10"
                }`}
              >
                {pkg.featured && (
                  <span className="absolute -top-[13px] left-7 md:left-9 inline-flex items-center rounded-full border border-[#E85D26] bg-[#0f0f0f] px-3.5 py-1 font-sans font-bold uppercase tracking-[0.16em] text-[11px] text-[#E85D26]">
                    Most Complete
                  </span>
                )}

                <p className="text-[#E85D26] font-sans font-bold uppercase tracking-[0.18em] text-xs mb-3">
                  {pkg.eyebrow}
                </p>
                <h3 className="font-display text-white uppercase text-[26px] md:text-3xl leading-tight">
                  {pkg.name}
                </h3>
                <p className="mt-4 flex items-baseline gap-2">
                  <span className="font-display text-[#E85D26] text-5xl md:text-[56px] leading-none">
                    {pkg.price}
                  </span>
                  <span className="text-stone font-sans text-base">/month</span>
                </p>
                <p className="mt-4 text-stone font-sans text-[15px] leading-relaxed">
                  {pkg.support}
                </p>

                <div className="mt-6 h-[2px] w-10 bg-[#E85D26]" aria-hidden="true" />
                <p className="mt-5 text-offwhite font-sans font-bold uppercase tracking-[0.16em] text-xs">
                  What&rsquo;s Included
                </p>
                <ul className="mt-4 space-y-3">
                  {pkg.included.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check
                        size={17}
                        strokeWidth={2.5}
                        className="text-white bg-[#E85D26] rounded-full p-[3px] w-[19px] h-[19px] flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span className="text-offwhite font-sans text-[15px] leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <p className="mt-auto pt-7 text-stone/80 font-sans text-[13px] leading-relaxed">
                  {pkg.qualification}
                </p>
                <CTAButton
                  href={pkg.href}
                  variant="funnel"
                  className="w-full mt-5 px-6 py-4 text-[15px] text-center"
                  onClick={() =>
                    trackRealtorEvent("realtor_pricing_cta_click", {
                      cta_placement: pkg.placement,
                    })
                  }
                >
                  {pkg.ctaLabel}
                </CTAButton>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Full-width IDX reassurance strip */}
        <ScrollReveal delay={0.1} className="mt-14 md:mt-16">
          <div className="border-t border-white/10 pt-10 text-center">
            <h3 className="font-display text-white text-2xl md:text-[30px] leading-tight mb-4">
              IDX IS INCLUDED. YOUR LOCAL MLS PATH IS CONFIRMED FIRST.
            </h3>
            <p className="text-stone font-sans text-[15px] md:text-base leading-relaxed max-w-[860px] mx-auto">
              Both starting packages include the listed IDX Broker Core plan. MLS
              eligibility, approvals, disclosures, available data fields, provider
              requirements, and any local third-party fees can vary by brokerage and
              market. We review those details with you before any advanced upgrade or
              additional cost is added.
            </p>
            <p className="font-hand font-semibold text-[26px] md:text-[34px] leading-snug text-[#E85D26] mt-7">
              No surprises. Just the right website for your market.
            </p>
          </div>
        </ScrollReveal>

        {/* Fit-call closing block */}
        <ScrollReveal delay={0.1} className="mt-14 md:mt-16 text-center">
          <h3 className="font-display text-white text-3xl md:text-4xl leading-tight mb-4">
            Not Sure Which Package Fits Your Business?
          </h3>
          <p className="text-stone font-sans text-base md:text-lg leading-relaxed max-w-[680px] mx-auto mb-8">
            We will review your market, MLS path, current website, team structure, and
            buyer/seller goals on a short call &mdash; then recommend the right starting
            point before you commit to a build.
          </p>
          <CTAButton
            href={FIT_CALL_HREF}
            variant="funnel"
            className="px-8 py-4 text-base"
            onClick={() =>
              trackRealtorEvent("realtor_pricing_cta_click", {
                cta_placement: "pricing_section_fit_call",
              })
            }
          >
            {REALTOR_CTA_LABEL}
          </CTAButton>
        </ScrollReveal>
      </div>
    </section>
  );
}
