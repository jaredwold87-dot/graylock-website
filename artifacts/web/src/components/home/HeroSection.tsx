import { Check } from "lucide-react";
import { CTAButton } from "@/components/ui/CTAButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const BASE = import.meta.env.BASE_URL;

export function HeroSection() {
  return (
    <>
    <section
      className="overflow-hidden relative"
      style={{ backgroundColor: "#0f0f0f" }}
    >
      {/* Mobile only: layered stylized background */}
      {/* Layer 1: faint dot grid covering entire hero */}
      <div
        className="absolute inset-0 md:hidden pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(242,243,245,0.06) 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      />
      {/* Layer 2: large soft orange aurora blob upper-left */}
      <div
        className="absolute md:hidden pointer-events-none rounded-full"
        aria-hidden="true"
        style={{
          top: "-120px",
          left: "-100px",
          width: "420px",
          height: "420px",
          background:
            "radial-gradient(circle, rgba(232,93,38,0.30) 0%, rgba(232,93,38,0.10) 45%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      {/* Layer 3: orange accent glow upper-right */}
      <div
        className="absolute md:hidden pointer-events-none rounded-full"
        aria-hidden="true"
        style={{
          top: "-60px",
          right: "-120px",
          width: "320px",
          height: "320px",
          background:
            "radial-gradient(circle, rgba(232,93,38,0.22) 0%, rgba(232,93,38,0.08) 45%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />
      {/* Layer 4: deeper orange glow lower-right for depth */}
      <div
        className="absolute md:hidden pointer-events-none rounded-full"
        aria-hidden="true"
        style={{
          bottom: "-100px",
          right: "-80px",
          width: "380px",
          height: "380px",
          background:
            "radial-gradient(circle, rgba(232,93,38,0.16) 0%, rgba(232,93,38,0.06) 45%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />
      {/* Layer 5: thin diagonal sheen line */}
      <div
        className="absolute inset-0 md:hidden pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(115deg, transparent 0%, transparent 45%, rgba(242,243,245,0.04) 50%, transparent 55%, transparent 100%)",
        }}
      />
      {/* Layer 6: hairline divider at bottom of hero */}
      <div
        className="absolute inset-x-0 bottom-0 h-px md:hidden pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(to right, transparent 0%, rgba(232,93,38,0.5) 50%, transparent 100%)",
        }}
      />
      {/* Desktop/tablet background image */}
      <div className="hidden md:block">
        <img
          src={`${BASE}hero-edge-2.webp`}
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "right center" }}
        />
      </div>
      {/* Tablet only (768–1023px): heavy near-black overlay over the desktop image */}
      <div
        className="absolute inset-0 hidden md:block lg:hidden pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.85) 55%, rgba(10,10,10,0.78) 100%)",
        }}
      />
      {/* Desktop: side gradient that lets the laptop show through on the right */}
      <div
        className="absolute inset-0 hidden lg:block pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, #0a0a0a 0%, rgba(10,10,10,0.95) 35%, rgba(10,10,10,0.4) 55%, transparent 70%)",
        }}
      />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 pt-32 pb-16 md:pt-44 md:pb-20">
        <div className="max-w-2xl">
          <ScrollReveal>
            <p className="text-[#E85D26] text-xs md:text-sm font-sans font-bold uppercase tracking-widest mb-4">
              Custom Websites for Service Businesses
            </p>
            <h1 className="text-5xl md:text-4xl lg:text-6xl font-display text-white leading-[1.15] md:leading-[1.1] mb-6 lg:max-w-xl">
              Every Day Your Website Underperforms,{" "}
              <span className="text-[#E85D26]">a Client Chooses Your Competitor.</span>
            </h1>
            <p className="text-stone text-xl md:text-xl font-sans mb-6 md:mb-8 max-w-xl leading-snug md:leading-relaxed">
              We build custom, conversion-focused websites that show up on Google, earn trust in seconds, and turn visitors into booked appointments — live in 7–10 days.
            </p>

            {/* Mobile-only sequence: CTA → reassurance → bullets → proof image */}
            <div className="md:hidden">
              <div className="flex justify-center mb-6">
                <CTAButton
                  href="/get-started"
                  variant="funnel"
                  className="w-full"
                >
                  See What Your New Site Could Look Like — Free
                </CTAButton>
              </div>

              <p className="text-offwhite font-sans text-sm text-center leading-snug text-balance mb-8">
                We'll show you exactly what your new site could look like — before you spend a dollar.
              </p>

              <div className="-mx-6">
                <img
                  src={`${BASE}hero-mobile-device-v2.png`}
                  alt="The West Coast Eye Institute website built by Graylock Digital, shown on a laptop and phone"
                  className="w-full h-auto"
                  loading="eager"
                  decoding="async"
                />
                <p className="text-stone font-sans text-xs text-center mt-1">
                  A real Graylock-built website, viewable on any device.
                </p>
              </div>
            </div>

            {/* Tablet/desktop sequence */}
            <div className="hidden md:block">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                <CTAButton href="/get-started" variant="funnel">
                  See What Your New Site Could Look Like — Free
                </CTAButton>
              </div>

              <p className="text-stone/80 font-sans text-base">
                We'll show you exactly what your new site could look like — before you spend a dollar.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>

    {/* Solid trust bar at the bottom of the hero */}
    <div className="relative z-10 bg-black border-t border-white/[0.08] py-4 md:py-5 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center lg:justify-between gap-x-8 gap-y-2.5">
        {[
          "Show up when clients search for you",
          "Turn visitors into calls and estimate requests",
          "Live in 7–10 days",
          "Free website refresh every two years",
        ].map((text, i) => (
          <div key={i} className="flex items-center gap-2.5">
            <Check size={15} strokeWidth={2.5} className="text-[#E85D26] flex-shrink-0" />
            <span className="text-stone font-sans text-sm md:text-[15px] leading-snug">{text}</span>
          </div>
        ))}
      </div>
    </div>
    </section>
    </>
  );
}
