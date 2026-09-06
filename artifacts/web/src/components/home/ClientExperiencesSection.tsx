import { Star } from "lucide-react";
import { Link } from "wouter";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const TESTIMONIALS = [
  {
    quote:
      "We couldn’t be happier with our new website! From start to finish, the entire process was professional, creative, and seamless.",
    name: "Francisca Rangel",
    business: "Interior Finishes Cabinets and Design",
    context: "Local Service Business",
    linkLabel: "View Client Websites →",
  },
  {
    quote:
      "Graylock created an amazing website for my new counseling practice that far surpassed my expectations. Tim was great to work with, as was Jameson. Timely responses and very approachable guys.",
    name: "Stephen Jennings",
    business: "Counseling Practice",
    context: "Professional Practice",
    linkLabel: "See Client Websites →",
  },
  {
    quote:
      "Tim went above and beyond to ensure our site was the best version it could be. I would recommend this service 10/10 especially relative to their pricing as compared to similar services.",
    name: "Nijma Yusuf",
    business: "IANA",
    context: "Association Website",
    linkLabel: "View Client Websites →",
  },
] as const;

export function ClientExperiencesSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-20 md:px-12 md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(26,32,44,0.055) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#E85D26]/50 to-transparent"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <p className="mb-4 font-sans text-xs font-bold uppercase tracking-[0.22em] text-[#E85D26] md:text-sm">
            Client Experiences
          </p>
          <h2 className="font-display text-4xl leading-tight text-[#1a202c] md:text-5xl">
            Trusted By Business Owners Who Expect More From Their Website.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl font-sans text-base leading-relaxed text-[#1a202c]/70 md:text-lg">
            Custom work, clear communication, and a process built around your business—not a
            recycled template.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:[&>*:last-child]:col-span-2 md:[&>*:last-child]:mx-auto md:[&>*:last-child]:w-[calc(50%-0.75rem)] lg:[&>*:last-child]:col-span-1 lg:[&>*:last-child]:mx-0 lg:[&>*:last-child]:w-auto">
          {TESTIMONIALS.map((testimonial, index) => (
            <ScrollReveal
              key={testimonial.name}
              delay={index * 0.08}
              className="h-full"
            >
              <article className="flex h-full min-h-[420px] flex-col rounded-xl border border-[#1a202c]/10 bg-[#F8F7F5] p-7 shadow-[0_18px_50px_rgba(26,32,44,0.09)] transition-colors duration-300 hover:border-[#E85D26]/45 md:p-8">
                <div className="flex items-center gap-1 text-[#B23E16]" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      size={15}
                      fill="currentColor"
                      strokeWidth={1.5}
                    />
                  ))}
                </div>

                <blockquote className="mt-7 font-sans text-xl font-medium leading-relaxed text-[#1a202c]">
                  “{testimonial.quote}”
                </blockquote>

                <div className="mt-auto pt-8">
                  <div className="mb-5 h-px w-10 bg-[#E85D26]/70" aria-hidden="true" />
                  <p className="font-sans text-base font-semibold text-[#1a202c]">
                    {testimonial.name}
                  </p>
                  <p className="mt-1 font-sans text-sm leading-snug text-[#1a202c]/70">
                    {testimonial.business}
                  </p>
                  <p className="mt-2 font-sans text-[11px] font-bold uppercase tracking-[0.16em] text-[#B23E16]">
                    {testimonial.context}
                  </p>
                  <Link
                    href="/featured-projects"
                    className="mt-6 inline-flex min-h-11 items-center font-sans text-sm font-semibold text-[#B23E16] underline decoration-[#B23E16]/45 underline-offset-4 transition-colors hover:text-[#E85D26] focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E85D26]"
                  >
                    {testimonial.linkLabel}
                  </Link>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}