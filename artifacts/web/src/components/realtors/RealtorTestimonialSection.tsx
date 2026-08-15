/**
 * Real estate testimonial section — built but intentionally unpublished.
 *
 * Per the realtor landing page scope (section 8): do not publish a fabricated
 * review, invented performance number, or placeholder quotation marks. This
 * component renders nothing until a real, approved testimonial is supplied
 * with every field below.
 *
 * When the approved testimonial arrives, pass it from the page:
 *   <RealtorTestimonialSection
 *     testimonial={{
 *       quote: "…client's exact quote…",
 *       name: "Full Name",
 *       brokerage: "Brokerage / Team Name",
 *       market: "Local Market",
 *       imageSrc: approvedImage,   // realtor website screenshot or approved client photo
 *       imageAlt: "…",
 *       approvedForPublication: true, // written permission confirmed
 *     }}
 *   />
 * The visual structure should then match the homepage testimonial section
 * (screenshot/photo left, quotation right).
 */
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export interface RealtorTestimonial {
  quote: string;
  name: string;
  brokerage: string;
  market: string;
  imageSrc: string;
  imageAlt: string;
  /** Written permission status — must be true before this section renders. */
  approvedForPublication: boolean;
}

export function RealtorTestimonialSection({
  testimonial,
}: {
  testimonial: RealtorTestimonial | null;
}) {
  // Unpublished until a real, approved testimonial is provided.
  if (
    !testimonial ||
    !testimonial.approvedForPublication ||
    !testimonial.quote.trim() ||
    !testimonial.name.trim() ||
    !testimonial.brokerage.trim() ||
    !testimonial.market.trim() ||
    !testimonial.imageSrc
  ) {
    return null;
  }

  return (
    <section className="bg-[#0f0f0f] py-24 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <ScrollReveal>
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-[#17161B]">
              <img
                src={testimonial.imageSrc}
                alt={testimonial.imageAlt}
                loading="lazy"
                decoding="async"
                className="w-full h-auto block"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <blockquote>
              <p className="font-display italic text-2xl md:text-3xl text-white leading-snug mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <footer className="font-sans">
                <p className="text-offwhite font-semibold">{testimonial.name}</p>
                <p className="text-stone text-sm">
                  {testimonial.brokerage} &middot; {testimonial.market}
                </p>
              </footer>
            </blockquote>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
