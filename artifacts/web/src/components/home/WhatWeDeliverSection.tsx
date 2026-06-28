import { CheckCircle2, Lock } from "lucide-react";
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
  framed,
  frameUrl = "advantagehomeimprovement.com",
}: {
  imageSrc?: string;
  imageAlt?: string;
  framed?: boolean;
  frameUrl?: string;
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
            {framed ? (
              <div className="w-full">
                <div className="bg-[#1c1c1e] rounded-t-2xl p-2 md:p-3 shadow-2xl">
                  <div className="rounded-lg overflow-hidden bg-white">
                    <div className="flex items-center gap-1.5 bg-[#2a2a2d] px-3 py-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" aria-hidden="true" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" aria-hidden="true" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" aria-hidden="true" />
                      <div className="ml-3 flex-1 bg-[#1c1c1e] rounded px-3 py-1 text-[#9aa0a6] font-sans text-[10px] md:text-[11px] truncate flex items-center gap-1.5">
                        <Lock size={9} className="text-[#34c759] shrink-0" aria-hidden="true" />
                        {frameUrl}
                      </div>
                    </div>
                    <img
                      src={resolvedImageSrc}
                      alt={resolvedImageAlt}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto block"
                    />
                  </div>
                </div>
                <div className="relative w-[106%] -translate-x-[2.83%]">
                  <div className="h-3 md:h-4 bg-gradient-to-b from-[#dcdfe4] via-[#bcc0c6] to-[#9398a0] rounded-b-xl shadow-xl" />
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 md:w-28 h-1.5 md:h-2 bg-[#8b9098] rounded-b-xl" />
                </div>
              </div>
            ) : (
              <img
                src={resolvedImageSrc}
                alt={resolvedImageAlt}
                loading="lazy"
                decoding="async"
                className="w-full h-auto drop-shadow-2xl"
              />
            )}
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
