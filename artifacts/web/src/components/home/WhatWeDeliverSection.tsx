import { CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const DELIVER_ITEMS = [
  {
    title: "Found when clients are searching",
    description:
      "SEO is built into the foundation, so the people already looking for your service find you first.",
  },
  {
    title: "Built to turn visitors into leads",
    description:
      "Conversion-focused layouts and lead-capture forms guide every visitor toward booking a call.",
  },
  {
    title: "Flawless on every device",
    description:
      "A mobile-first build that looks sharp and loads fast on the phones most of your clients use.",
  },
  {
    title: "Credibility that earns the call",
    description:
      "Reviews, testimonials, and trust signals placed where hesitation happens — so prospects choose you with confidence.",
  },
];

export function WhatWeDeliverSection({
  imageSrc,
  imageAlt,
}: {
  imageSrc?: string;
  imageAlt?: string;
} = {}) {
  const resolvedImageSrc =
    imageSrc ?? `${import.meta.env.BASE_URL}west-coast-device-straight.webp`;
  const resolvedImageAlt =
    imageAlt ?? "A Graylock-built website shown on a laptop and a phone";
  return (
    <section className="bg-[#F5F5F5] py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <p className="text-[#B23E16] text-sm md:text-base font-sans font-bold uppercase tracking-[0.2em] mb-3">
            What We Deliver
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-display text-[#1A1A1A] mb-4 leading-[1.05]">
            Everything your business needs to win clients online
          </h2>
          <p className="font-display italic text-lg md:text-xl text-[#4A4A4A] leading-relaxed">
            One site — engineered to be found, trusted, and acted on.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-10 items-center">
          <ScrollReveal className="order-2 lg:order-1">
            <img
              src={resolvedImageSrc}
              alt={resolvedImageAlt}
              loading="lazy"
              decoding="async"
              className="w-full h-auto drop-shadow-2xl"
            />
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="order-1 lg:order-2">
            <ul className="space-y-4">
            {DELIVER_ITEMS.map((item) => (
              <li key={item.title} className="flex items-start gap-3">
                <CheckCircle2
                  size={22}
                  className="text-orange shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="text-[#1A1A1A] font-sans font-semibold text-base mb-0.5">
                    {item.title}
                  </h3>
                  <p className="text-[#4A4A4A] font-sans text-sm md:text-[15px] leading-snug">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
