import { Star } from "lucide-react";
import { Link } from "wouter";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const TESTIMONIALS = [
  {
    quote: "We couldn’t be happier with our new website!",
    name: "Francisca Rangel",
    business: "Interior Finishes Cabinets and Design",
    context: "Local Service Business",
    summary: "Professional, creative, and seamless from start to finish.",
    linkLabel: "View Our Portfolio →",
  },
  {
    quote:
      "Graylock created an amazing website for my new counseling practice that far surpassed my expectations.",
    name: "Stephen Jennings",
    business: "Counseling Practice",
    context: "Professional Practice",
    summary: "Timely, approachable, and easy to work with.",
    linkLabel: "See Client Websites →",
  },
  {
    quote:
      "I sent over multiple rounds of edits and questions and never faced any pushback.",
    name: "Nijma Yusuf",
    business: "IANA",
    context: "Association Website",
    summary:
      "Thorough collaboration, thoughtful revisions, and a website built around the client’s vision.",
    linkLabel: "View Our Portfolio →",
  },
] as const;

export function ClientExperiencesSection() {
  return (
    <section className="relative overflow-hidden bg-[#101010] px-6 py-20 md:px-12 md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)",
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
          <h2 className="font-display text-4xl leading-tight text-white md:text-5xl">
            Real Websites. Real Business Owners.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl font-sans text-base leading-relaxed text-stone md:text-lg">
            Graylock builds custom websites for businesses that need to earn trust quickly,
            communicate clearly, and give the right clients a reason to reach out.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:[&>*:last-child]:col-span-2 md:[&>*:last-child]:mx-auto md:[&>*:last-child]:w-[calc(50%-0.75rem)] lg:[&>*:last-child]:col-span-1 lg:[&>*:last-child]:mx-0 lg:[&>*:last-child]:w-auto">
          {TESTIMONIALS.map((testimonial, index) => (
            <ScrollReveal
              key={testimonial.name}
              delay={index * 0.08}
              className="h-full"
            >
              <article className="flex h-full min-h-[390px] flex-col rounded-xl border border-white/[0.09] bg-[#171717] p-7 shadow-[0_18px_50px_rgba(0,0,0,0.24)] transition-colors duration-300 hover:border-[#E85D26]/35 md:p-8">
                <div className="flex items-center gap-1 text-[#E85D26]" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      size={15}
                      fill="currentColor"
                      strokeWidth={1.5}
                    />
                  ))}
                </div>

                <blockquote className="mt-7 font-sans text-xl font-medium leading-relaxed text-offwhite">
                  “{testimonial.quote}”
                </blockquote>

                <div className="mt-auto pt-8">
                  <div className="mb-5 h-px w-10 bg-[#E85D26]/70" aria-hidden="true" />
                  <p className="font-sans text-base font-semibold text-white">
                    {testimonial.name}
                  </p>
                  <p className="mt-1 font-sans text-sm leading-snug text-offwhite/75">
                    {testimonial.business}
                  </p>
                  <p className="mt-2 font-sans text-[11px] font-bold uppercase tracking-[0.16em] text-[#E85D26]">
                    {testimonial.context}
                  </p>
                  <p className="mt-4 font-sans text-sm italic leading-relaxed text-stone">
                    {testimonial.summary}
                  </p>
                  <Link
                    href="/featured-projects"
                    className="mt-6 inline-flex min-h-11 items-center font-sans text-sm font-semibold text-offwhite underline decoration-[#E85D26]/60 underline-offset-4 transition-colors hover:text-[#E85D26] focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E85D26]"
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