import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { trackCabinetMakerEvent } from "@/lib/cabinetMakerAnalytics";

/**
 * "The Standard We Build Toward" (spec §4.6) — TEMPORARY pre-project state.
 *
 * The spec forbids fabricating a client case study before the real featured
 * cabinet-maker project exists, so this section ships as the simple
 * placeholder block only (eyebrow, H2, body, portfolio CTA).
 *
 * SWAP-IN (when Graylock supplies the real project): replace this section's
 * body with the featured-project module —
 *   [CLIENT NAME]
 *   [PRIMARY SERVICE] · [CITY / REGION]
 *   One 2–3 sentence factual description of the site's visual approach,
 *   portfolio strategy, and conversion paths (no invented outcomes).
 *   "VISIT THE LIVE SITE →" linking to the approved public URL,
 *   a real device mockup, and 2–3 supporting project imagery tiles.
 * Include no performance claims without measurement proof and permission.
 * The demo CTA for that state uses cabinetMakerGetStartedHref("portfolio").
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
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <p className="text-[#E85D26] font-sans font-bold uppercase tracking-[0.2em] text-xs md:text-sm mb-4">
            The Standard We Build Toward
          </p>
          <h2 className="text-3xl md:text-5xl font-display text-white leading-tight mb-6">
            A Cabinet-Maker Website Should Look as Considered as the Work Behind It.
          </h2>
          <p className="text-stone font-sans text-lg leading-relaxed mb-9 max-w-2xl mx-auto">
            A strong website is not about making the business look flashy. It is about helping
            the right prospect see the quality of your work, understand the kinds of projects
            you take on, and feel confident starting the conversation.
          </p>
          <Link
            href="/featured-projects"
            onClick={() =>
              trackCabinetMakerEvent("cabinet_maker_featured_project_click", {
                cta_placement: "portfolio",
              })
            }
            className="cta-shimmer inline-flex items-center justify-center gap-2 font-sans font-semibold tracking-wide px-8 py-4 rounded transition-all duration-300 border-2 border-[#E85D26] text-[#E85D26] hover:bg-[#E85D26] hover:text-white bg-transparent hover:shadow-[0_4px_20px_rgba(232,93,38,0.25)]"
          >
            View Our Portfolio
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
