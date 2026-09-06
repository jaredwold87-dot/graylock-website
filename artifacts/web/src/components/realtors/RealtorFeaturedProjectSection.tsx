import { ExternalLink, Quote, Star } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { trackRealtorEvent } from "@/lib/realtorAnalytics";

/**
 * Real real-estate project proof. The review below is reproduced from the
 * customer-provided Google review capture.
 */
export function RealtorFeaturedProjectSection() {
  return (
    <section
      id="featured-project"
      className="relative bg-[#1a1a1a] py-20 md:py-28 px-6 md:px-12 border-t border-white/5 overflow-hidden"
    >
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
            Featured Real Estate Project
          </p>
          <h2 className="text-4xl md:text-5xl font-display text-white leading-tight mb-3">
            Willow Realty Group
          </h2>
          <p className="text-offwhite/65 font-sans text-sm font-semibold uppercase tracking-[0.14em] mb-6">
            Southern Idaho Real Estate · Serving the Magic Valley
          </p>
          <p className="text-stone font-sans text-lg leading-relaxed mb-8">
            We created a polished, landscape-driven real-estate website that pairs
            Willow’s local expertise with full property search, a home valuation path,
            and clear ways for buyers and sellers to connect with the team.
          </p>
          <a
            href="https://willowrealestategroup.com/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackRealtorEvent("realtor_featured_project_click", {
                cta_placement: "featured_project",
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
              <p className="mb-5">
                “I have been extremely impressed Graylock digital, from the first meeting
                we had to the launch of our new website and beyond. This company is so
                professional, well organized, and well informed. The communication was
                excellent, they listened to my needs and answered my questions.”
              </p>
              <p>
                “Not only do we have a state of the art, beautiful, easy to use website.
                The lead generation has been amazing, we have been converting leads into
                actual customers because of this website. My previous vendor I used for
                our website platform generated a lot of leads, but no conversions into
                actual customers. I highly recommend Graylock Digital.”
              </p>
            </blockquote>
            <figcaption className="mt-7 pt-6 border-t border-white/[0.08]">
              <p className="font-sans font-semibold text-white">Mark Nelson</p>
              <p className="font-sans text-sm text-stone mt-1">5-star Google Review</p>
            </figcaption>
          </figure>
        </ScrollReveal>
      </div>
    </section>
  );
}