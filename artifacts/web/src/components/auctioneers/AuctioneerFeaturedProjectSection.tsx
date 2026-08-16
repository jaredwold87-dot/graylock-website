import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { trackAuctioneerEvent } from "@/lib/auctioneerAnalytics";

/**
 * "The Standard We Build Toward" (spec §6) — TEMPORARY pre-project state.
 *
 * The spec forbids fabricating a client, testimonial, booking result,
 * bidding metric, sales total, or auction outcome before the real featured
 * auctioneer project exists, so this section ships as the simple
 * placeholder block only (eyebrow, H2, body, portfolio CTA).
 *
 * SWAP-IN (when Graylock supplies the real project): replace this section's
 * body with the featured-project module —
 *   [CLIENT NAME]
 *   [AUCTION SPECIALTY] · [CITY / REGION OR NATIONWIDE]
 *   One factual 2–3 sentence description of the site design, services
 *   presentation, specialty positioning, and inquiry paths (approved info
 *   only; no result claims without permission and evidence).
 *   "VISIT THE LIVE SITE →" linking to the approved public URL,
 *   a real device mockup, and 2–3 approved project-detail images featuring
 *   actual pages (Services, Benefit + Gala Events, Seller Services, About,
 *   Contact) as applicable.
 * The demo CTA for that state uses auctioneerGetStartedHref("portfolio").
 */
export function AuctioneerFeaturedProjectSection() {
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
            An Auctioneer Website Should Create Confidence Before the First Call.
          </h2>
          <p className="text-stone font-sans text-lg leading-relaxed mb-9 max-w-2xl mx-auto">
            A better website is not about making the business look flashy. It is about helping
            organizers and sellers understand what you do, why they can trust you with their
            event or sale, and how to take the right next step.
          </p>
          <Link
            href="/featured-projects"
            onClick={() =>
              trackAuctioneerEvent("auctioneer_featured_project_click", {
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
