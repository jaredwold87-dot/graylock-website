import { ScrollReveal } from "@/components/ui/ScrollReveal";

/**
 * Gated testimonial slot for the well-driller landing page.
 *
 * IMPORTANT (spec §9 / owner decision): no real well-driller testimonial
 * quotes have been approved for publication yet, so the page passes
 * `testimonial={null}` and this component renders nothing. Ship the quote by
 * passing a fully attributed testimonial with `approvedForPublication: true`
 * once the client has approved the exact wording. Never use quotes from
 * unrelated industries here.
 */
export interface WellDrillerTestimonial {
  quote: string;
  name: string;
  company: string;
  market: string;
  imageSrc?: string;
  imageAlt?: string;
  /** Must be explicitly set to true once the client approves the exact quote. */
  approvedForPublication: boolean;
}

export function WellDrillerTestimonialSection({
  testimonial,
}: {
  testimonial: WellDrillerTestimonial | null;
}) {
  if (
    !testimonial ||
    !testimonial.approvedForPublication ||
    !testimonial.quote.trim() ||
    !testimonial.name.trim() ||
    !testimonial.company.trim() ||
    !testimonial.market.trim()
  ) {
    return null;
  }

  return (
    <section className="bg-[#0f0f0f] py-20 md:py-28 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <figure className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-12 text-center">
            <div
              className="text-[#E85D26] font-display text-6xl leading-none mb-4 select-none"
              aria-hidden="true"
            >
              &ldquo;
            </div>
            <blockquote className="text-white font-display text-xl md:text-2xl leading-relaxed mb-8">
              {testimonial.quote}
            </blockquote>
            <figcaption className="flex items-center justify-center gap-4">
              {testimonial.imageSrc && (
                <img
                  src={testimonial.imageSrc}
                  alt={testimonial.imageAlt || testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                  loading="lazy"
                />
              )}
              <div className="text-left">
                <div className="text-white font-sans font-semibold text-sm">
                  {testimonial.name}
                </div>
                <div className="text-stone font-sans text-sm">
                  {testimonial.company} · {testimonial.market}
                </div>
              </div>
            </figcaption>
          </figure>
        </ScrollReveal>
      </div>
    </section>
  );
}
