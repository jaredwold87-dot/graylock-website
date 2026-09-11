import { Link } from "wouter";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowRight, Lock } from "lucide-react";
import perksTransformation from "@/assets/work/perks-transformation.webp";

export function TestimonialSection() {
  return (
    <section className="bg-[#f5f5f4] px-6 md:px-12 py-16 md:py-24 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center mb-12 md:mb-16">
          <p className="text-[#B23E16] font-sans text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-3">
            CLIENT PERSPECTIVE
          </p>
          <h2 className="text-3xl md:text-4xl font-display text-[#1a202c] leading-tight">
            A Website Partner Who Learns Your Business First.
          </h2>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-center">
          <ScrollReveal delay={0.1}>
            <div className="max-w-xl mx-auto">
              <div className="mb-6">
                <p className="text-[#B23E16] font-sans text-xs font-bold uppercase tracking-[0.2em] mb-2">
                  FEATURED CLIENT WEBSITE
                </p>
                <p className="font-display text-xl text-[#1a202c]">
                  L.A. Perks Petroleum Specialists
                </p>
                <p className="mt-1 font-sans text-sm text-[#4a5568]">
                  Petroleum Infrastructure, Fueling Systems &amp; Service
                </p>
              </div>
              <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border border-black/10 bg-[#15151a] ring-1 ring-black/5">
                <div className="flex items-center gap-2 px-4 py-2.5 md:py-3 bg-[#1f1f26] border-b border-white/5">
                  <span className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                    <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                    <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                  </span>
                  <div className="flex-1 flex justify-center">
                    <div className="flex items-center gap-2 w-full max-w-xs px-3 py-1.5 rounded-md bg-[#15151a] border border-white/5">
                      <Lock size={11} className="text-stone/60 shrink-0" aria-hidden="true" />
                      <span className="h-1.5 flex-1 rounded-full bg-white/10" />
                    </div>
                  </div>
                </div>
                <img
                  src={perksTransformation}
                  alt="L.A. Perks Petroleum Specialists website homepage designed by Graylock Digital"
                  className="w-full h-auto block"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <figure>
              <p className="mb-5 font-sans text-sm text-[#4a5568]">Client testimonial</p>
              <blockquote className="font-display text-xl md:text-2xl text-[#1a202c] leading-snug mb-6">
                &ldquo;Working with Tim and the team at Graylock Digital was an
                outstanding experience from start to finish. The amount of time and
                effort they invested in researching our industry and truly
                understanding our vision for the new website was beyond impressive.
                Their attention to detail, communication, and dedication to delivering
                a product that reflected our goals exceeded all expectations. They
                consistently went above and beyond throughout the entire process. We
                highly recommend Tim and the Graylock Digital team to anyone looking
                for a professional, creative, and results-driven website partner.&rdquo;
              </blockquote>
              <figcaption className="border-t border-gray-200 pt-5">
                <p className="font-display text-lg text-[#1a202c]">
                  Kylen &amp; Keith Perks
                </p>
                <p className="font-sans text-sm text-[#4a5568] mt-0.5">
                  L.A. Perks Petroleum Specialists
                </p>
              </figcaption>
              <div className="mt-6 flex flex-col items-start gap-3">
              <a
                href="https://www.perkspetroleum.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 text-[#B23E16] hover:text-[#E85D26] font-sans font-semibold text-sm uppercase tracking-[0.12em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B23E16] focus-visible:ring-offset-4"
              >
                VISIT THE L.A. PERKS WEBSITE
                <ArrowRight size={15} className="shrink-0" aria-hidden="true" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              <Link
                href="/featured-projects"
                className="inline-flex min-h-11 items-center gap-2 text-[#4a5568] hover:text-[#B23E16] font-sans text-sm underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B23E16] focus-visible:ring-offset-4"
              >
                Explore More Client Websites →
              </Link>
              </div>
            </figure>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
