import { Check } from "lucide-react";
import { CTAButton } from "@/components/ui/CTAButton";
import { HeroBackgroundImage } from "@/components/ui/HeroBackgroundImage";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const BASE = import.meta.env.BASE_URL;

export function HeroSection() {
  return (
    <section
      className="-mt-16 md:-mt-20 pt-32 pb-16 md:pt-44 md:pb-32 overflow-hidden relative"
      style={{ backgroundColor: "#0a121e" }}
    >
      {/* Mobile only: layered stylized background */}
      {/* Layer 1: faint dot grid covering entire hero */}
      <div
        className="absolute inset-0 md:hidden pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(242,243,245,0.07) 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      />
      {/* Layer 2: large soft steel-blue aurora blob upper-left */}
      <div
        className="absolute md:hidden pointer-events-none rounded-full"
        aria-hidden="true"
        style={{
          top: "-120px",
          left: "-100px",
          width: "420px",
          height: "420px",
          background:
            "radial-gradient(circle, rgba(46,123,180,0.45) 0%, rgba(46,123,180,0.12) 45%, transparent 70%)",
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
            "radial-gradient(circle, rgba(244,127,54,0.22) 0%, rgba(244,127,54,0.08) 45%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />
      {/* Layer 4: deeper steel-blue blob lower-right for depth */}
      <div
        className="absolute md:hidden pointer-events-none rounded-full"
        aria-hidden="true"
        style={{
          bottom: "-100px",
          right: "-80px",
          width: "380px",
          height: "380px",
          background:
            "radial-gradient(circle, rgba(46,123,180,0.30) 0%, rgba(46,123,180,0.10) 45%, transparent 70%)",
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
            "linear-gradient(to right, transparent 0%, rgba(46,123,180,0.5) 50%, transparent 100%)",
        }}
      />
      {/* Desktop/tablet background image — unchanged behavior */}
      <div className="hidden md:block">
        <HeroBackgroundImage
          src={`${BASE}hero-bg-devices.png`}
          objectPosition="right center"
        />
      </div>
      {/* Tablet only (768–1023px): preserve original heavy overlay over the desktop image */}
      <div
        className="absolute inset-0 hidden md:block lg:hidden pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,18,30,0.92) 0%, rgba(10,18,30,0.85) 55%, rgba(10,18,30,0.78) 100%)",
        }}
      />
      {/* Desktop: side gradient that lets the laptop show through on the right */}
      <div
        className="absolute inset-0 hidden lg:block pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, #0a121e 0%, rgba(10,18,30,0.95) 35%, rgba(10,18,30,0.4) 55%, transparent 70%)",
        }}
      />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-2xl">
          <ScrollReveal>
            <h1 className="text-5xl md:text-4xl lg:text-6xl font-display text-offwhite leading-[1.15] md:leading-[1.1] mb-6">
              Your Website Should Build Trust and Bring in Clients —{" "}
              <span className="text-gradient">Not Send Them to Competitors.</span>
            </h1>
            <p className="text-stone text-xl md:text-xl font-sans mb-6 md:mb-8 max-w-xl leading-snug md:leading-relaxed">
              Graylock Digital builds custom websites for private practices, accounting firms, and trust-based local businesses that need clearer messaging, stronger credibility, and more qualified inquiries.
            </p>

            {/* Mobile-only sequence: reassurance → CTA → bullets → proof image */}
            <div className="md:hidden">
              <div className="flex justify-center mb-6">
                <CTAButton
                  href="/get-started"
                  className="bg-transparent text-white border border-white/80 hover:bg-white hover:text-navy px-7 py-3 text-base shadow-none hover:shadow-none hover:-translate-y-0 hover:border-white"
                >
                  Schedule Your Free Consultation
                </CTAButton>
              </div>

              <p className="text-offwhite font-sans text-sm text-center leading-snug text-balance mb-4">
                See what we would improve before you spend a dollar.
              </p>
              <ul className="flex flex-col gap-2.5 mb-8">
                {[
                  "Free custom homepage demo",
                  "No long-term contracts",
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-2.5 justify-center">
                    <Check
                      size={16}
                      strokeWidth={2.5}
                      className="text-orange flex-shrink-0"
                    />
                    <span className="text-stone font-sans text-sm leading-snug whitespace-nowrap">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="-mx-6">
                <picture>
                  <source
                    type="image/webp"
                    srcSet={`${BASE}hero-mobile-eye-institute-mobile.webp`}
                  />
                  <img
                    src={`${BASE}hero-mobile-eye-institute.png`}
                    alt="The West Coast Eye Institute website built by Graylock Digital, shown on a laptop and phone"
                    className="w-full h-auto"
                    loading="eager"
                    decoding="async"
                  />
                </picture>
                <p className="text-stone/70 font-sans text-xs text-center mt-1">
                  A real Graylock-built website on every device.
                </p>
              </div>
            </div>

            {/* Tablet/desktop sequence: unchanged */}
            <div className="hidden md:block">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                <CTAButton href="/get-started">
                  Schedule Your Free Consultation
                </CTAButton>
              </div>

              <p className="text-stone/80 font-sans text-base mb-8">
                See what we would improve before you spend a dollar.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                {[
                  "Custom homepage demo before you commit",
                  "No long-term contracts",
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-orange/10 border border-orange/30 flex items-center justify-center">
                      <Check size={12} className="text-orange" />
                    </div>
                    <span className="text-stone font-sans text-base">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
