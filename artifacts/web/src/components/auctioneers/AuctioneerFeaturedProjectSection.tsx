import { ArrowRight, Quote, Star } from "lucide-react";
import { Link } from "wouter";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { trackAuctioneerEvent } from "@/lib/auctioneerAnalytics";

/**
 * Real auctioneer project proof. The review below is reproduced from the
 * customer-provided Google review capture; no auction or revenue outcomes
 * are inferred from it.
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
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-center">
        <ScrollReveal>
          <p className="text-[#E85D26] font-sans font-bold uppercase tracking-[0.2em] text-xs md:text-sm mb-4">
            Featured Auctioneer Project
          </p>
          <h2 className="text-4xl md:text-5xl font-display text-white leading-tight mb-3">
            Benevolent Auctions
          </h2>
          <p className="text-offwhite/65 font-sans text-sm font-semibold uppercase tracking-[0.14em] mb-6">
            Fundraising Auction Partners · Southwest Florida · Serving Nationwide
          </p>
          <p className="text-stone font-sans text-lg leading-relaxed mb-8">
            We created a polished, conversion-focused website that presents Benevolent
            Auctions as an experienced fundraising partner, makes its services easy to
            understand, and gives nonprofit leaders a clear path to request an auction
            consultation.
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
            View More of Our Work
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
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
            <blockquote className="font-sans text-offwhite text-lg md:text-xl leading-relaxed">
              <p className="mb-5">
                “Graylock Digital exceeded our expectations. Tim was easy to work with and
                responded to our needs almost immediately. They truly care about your
                business growth.”
              </p>
              <p>
                “We are very happy with our new website and super excited to work with Tim
                and his team for years to come.”
              </p>
            </blockquote>
            <figcaption className="mt-7 pt-6 border-t border-white/[0.08]">
              <p className="font-sans font-semibold text-white">Jill Baugh</p>
              <p className="font-sans text-sm text-stone mt-1">5-star Google Review</p>
            </figcaption>
          </figure>
        </ScrollReveal>
      </div>
    </section>
  );
}
