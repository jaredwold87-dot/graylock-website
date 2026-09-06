import { ExternalLink, Quote, Star } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { trackCabinetMakerEvent } from "@/lib/cabinetMakerAnalytics";

/**
 * Real cabinet and design project proof. The review below is reproduced from
 * the customer-provided Google review capture; no performance outcomes are
 * inferred from it.
 */
export function CabinetMakerFeaturedProjectSection() {
  return (
    <section
      id="featured-project"
      className="relative bg-[#1a1a1a] py-20 md:py-28 px-6 md:px-12 border-t border-white/5 overflow-hidden"
    >
      {/* faint dot overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(242,243,245,0.04) 1px, transparent 0)",
          backgroundSize: "26px 26px",
        }}
      />
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.88fr_1.12fr] gap-10 lg:gap-16 items-center">
        <ScrollReveal>
          <p className="text-[#E85D26] font-sans font-bold uppercase tracking-[0.2em] text-xs md:text-sm mb-4">
            Featured Cabinet &amp; Design Project
          </p>
          <h2 className="text-4xl md:text-5xl font-display text-white leading-tight mb-3">
            Interior Finishes
          </h2>
          <p className="text-offwhite/65 font-sans text-sm font-semibold uppercase tracking-[0.14em] mb-6">
            Cabinets &amp; Design · Northern Nevada &amp; Northern California
          </p>
          <p className="text-stone font-sans text-lg leading-relaxed mb-8">
            We created an elevated, design-forward website that showcases the quality of
            Interior Finishes’ cabinetry and interior work, explains its services clearly,
            and gives inspired homeowners a direct path to request a consultation.
          </p>
          <a
            href="https://www.interiorfinishesreno.com/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackCabinetMakerEvent("cabinet_maker_featured_project_click", {
                cta_placement: "portfolio",
              })
            }
            className="cta-shimmer inline-flex items-center justify-center gap-2 font-sans font-semibold tracking-wide px-8 py-4 rounded transition-all duration-300 border-2 border-[#E85D26] text-[#E85D26] hover:bg-[#E85D26] hover:text-white bg-transparent hover:shadow-[0_4px_20px_rgba(232,93,38,0.25)]"
          >
            Visit the Live Site
            <ExternalLink size={16} aria-hidden="true" />
          </a>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <figure className="relative rounded-2xl border border-white/[0.09] bg-black/35 p-7 md:p-10 shadow-2xl">
            <Quote
              size={34}
              className="text-[#E85D26]/70 mb-6"
              aria-hidden="true"
            />
            <div
              className="flex items-center gap-1 text-[#F9C440] mb-5"
              aria-label="5 out of 5 stars"
            >
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} size={18} fill="currentColor" strokeWidth={1.5} />
              ))}
            </div>
            <blockquote className="font-sans text-offwhite text-base md:text-[17px] leading-relaxed">
              <p className="mb-4">
                “We couldn’t be happier with our new website! From start to finish, the
                entire process was professional, creative, and seamless. Tim and his team
                did an amazing job taking our vision for Interior Finishes Cabinets and
                Design and turning it into a website that truly represents our brand.”
              </p>
              <p className="mb-4">
                “The new site looks modern, sophisticated, and professional, while
                showcasing our cabinetry and design work beautifully. We especially love
                how clean and easy to navigate it is, and the attention to detail
                throughout the entire website is incredible.”
              </p>
              <p className="mb-4">
                “It’s clear that they took the time to understand our business and what we
                wanted to communicate to our clients. We feel like our new website finally
                reflects the quality of the work we provide.”
              </p>
              <p>
                “We highly recommend them to anyone looking for a talented, professional,
                and creative website designer. Thank you for giving our business a website
                we’re truly proud to share!”
              </p>
            </blockquote>
            <figcaption className="mt-7 pt-6 border-t border-white/[0.08]">
              <p className="font-sans font-semibold text-white">Francisca Rangel</p>
              <p className="font-sans text-sm text-stone mt-1">5-star Google Review</p>
            </figcaption>
          </figure>
        </ScrollReveal>
      </div>
    </section>
  );
}
