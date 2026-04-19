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
            <h1 className="text-5xl md:text-4xl lg:text-6xl font-display text-offwhite leading-[1.1] mb-6">
              Your Website Should Build Trust and Bring in Clients —{" "}
              <span className="text-gradient">Not Send Them to Competitors.</span>
            </h1>
            <p className="text-stone text-2xl md:text-xl font-sans mb-8 max-w-xl leading-relaxed">
              Graylock Digital builds custom websites for private practices, accounting firms, and trust-based local businesses that need clearer messaging, stronger credibility, and more qualified inquiries.
            </p>

            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 mb-6">
              <CTAButton href="/get-started">
                Schedule Your Free Consultation
              </CTAButton>
            </div>

            {/* Mobile only: real Graylock-built website shown on a laptop and phone — directly below the CTA */}
            <div className="md:hidden -mx-6 mb-6">
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

            <p className="text-stone/80 font-sans text-sm md:text-base mb-8">
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
                  <span className="text-stone font-sans text-sm md:text-base">{text}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
