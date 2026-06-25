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

export function WhatWeDeliverSection() {
  return (
    <section className="bg-[#F5F5F5] py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-10 items-center">
        <ScrollReveal className="order-2 lg:order-1">
          <img
            src={`${import.meta.env.BASE_URL}west-coast-device-straight.webp`}
            alt="A Graylock-built website shown on a laptop and a phone"
            loading="lazy"
            decoding="async"
            className="w-full h-auto drop-shadow-2xl"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="order-1 lg:order-2">
          <p className="text-[#B23E16] text-xs font-sans font-bold uppercase tracking-widest mb-2">
            What We Deliver
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-display text-[#1A1A1A] mb-3 leading-[1.1]">
            Everything your business needs to win clients online
          </h2>
          <p className="font-display italic text-base md:text-lg text-[#4A4A4A] mb-6 leading-relaxed">
            One site — engineered to be found, trusted, and acted on.
          </p>

          <ul className="space-y-4 mb-7">
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
    </section>
  );
}
