import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { PencilRuler, ShieldCheck, RefreshCw } from "lucide-react";
import { CTAButton } from "@/components/ui/CTAButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { trackRealtorEvent } from "@/lib/realtorAnalytics";
import { realtorGetStartedHref, REALTOR_CTA_LABEL } from "@/lib/realtorLinks";

/**
 * Investment section — reframes price into a plan-first conversation.
 * No isolated dollar anchors; published rates live on /pricing and the
 * exact scope is confirmed after market review.
 */
const GUARANTEES = [
  {
    icon: PencilRuler,
    text: "Free Custom Direction Before Build Fee",
    href: "/pricing",
  },
  {
    icon: ShieldCheck,
    text: "30-Day Money-Back Guarantee on Eligible Standard Website Plans",
    href: "/pricing",
  },
  {
    icon: RefreshCw,
    text: "Two-Year Refresh Benefit While Subscribed",
    href: "/pricing#stay-current-guarantee",
  },
];

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
      { threshold: 0.25 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="investment"
      className="bg-[#0f0f0f] py-20 md:py-28 px-6 md:px-12 border-t border-white/5"
    >
      <div className="max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <p className="text-[#E85D26] font-sans font-bold uppercase tracking-[0.2em] text-sm mb-4">
            Clear Scope. No Surprises.
          </p>
          <h2 className="font-display text-white text-4xl md:text-[52px] leading-[1.08] mb-6">
            The Right Website Depends on Your Market, MLS Path, and Goals.
          </h2>
          <p className="text-stone font-sans text-lg leading-relaxed max-w-[760px] mx-auto">
            Standard custom Graylock websites begin at the{" "}
            <Link
              href="/pricing"
              className="text-offwhite underline underline-offset-4 decoration-white/30 hover:text-white hover:decoration-[#E85D26] transition-colors"
            >
              published monthly plan rates
            </Link>
            . IDX-enabled Realtor sites are scoped after a quick market and eligibility
            review so you know the website, integration, and any applicable third-party
            costs before you commit.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mt-12 md:mt-14">
          <div className="h-[3px] w-12 bg-[#E85D26] mx-auto mb-6" aria-hidden="true" />
          <h3 className="font-display text-white text-3xl md:text-4xl leading-tight mb-4">
            Start With a Free Realtor Website + IDX Plan
          </h3>
          <p className="text-stone font-sans text-base md:text-lg leading-relaxed max-w-[680px] mx-auto mb-8">
            We will review your market, MLS path, existing website, team structure,
            buyer/seller goals, and the right scope for your business.
          </p>
          <CTAButton
            href={realtorGetStartedHref("investment")}
            variant="funnel"
            className="px-8 py-4 text-base"
            onClick={() =>
              trackRealtorEvent("realtor_investment_cta_click", {
                cta_placement: "investment",
              })
            }
          >
            {REALTOR_CTA_LABEL}
          </CTAButton>
        </ScrollReveal>

        {/* Guarantee strip — flat rows, links point at /pricing where the
            controlling terms live (never at the ToS) */}
        <ScrollReveal delay={0.15} className="mt-14">
          <div className="border-t border-white/10 pt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {GUARANTEES.map(({ icon: Icon, text, href }) => (
              <Link
                key={text}
                href={href}
                className="group flex sm:flex-col items-start sm:items-center gap-3 text-left sm:text-center"
              >
                <Icon
                  size={20}
                  strokeWidth={1.75}
                  className="text-[#E85D26] flex-shrink-0 mt-0.5 sm:mt-0"
                  aria-hidden="true"
                />
                <span className="text-offwhite/90 group-hover:text-white font-sans font-semibold text-[13px] leading-snug transition-colors">
                  {text}
                </span>
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
