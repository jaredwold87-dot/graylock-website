import { useState, useEffect } from "react";
import { Check } from "lucide-react";
import { CTAButton } from "@/components/ui/CTAButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const BASE = import.meta.env.BASE_URL;

function useFlip(interval = 2200) {
  const [showAfter, setShowAfter] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;
    const id = setInterval(() => setShowAfter((v) => !v), interval);
    return () => clearInterval(id);
  }, [interval]);
  return showAfter;
}

function useIsLg() {
  const [isLg, setIsLg] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth >= 1024 : true
  );
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const handler = (e: MediaQueryListEvent) => setIsLg(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return isLg;
}

function LaptopMockup({ showAfter }: { showAfter: boolean }) {
  return (
    <div className="flex flex-col items-center relative">
      <div
        className="absolute -inset-6 lg:-inset-10 rounded-3xl blur-2xl pointer-events-none transition-opacity duration-700"
        style={{
          background: "radial-gradient(ellipse at center, rgba(232,99,26,0.35) 0%, transparent 70%)",
          opacity: showAfter ? 1 : 0.6,
        }}
      />
      <div
        className="relative w-full"
        style={{ aspectRatio: "1948/1036" }}
        aria-label="Website redesign comparison on monitor"
        role="img"
      >
        <picture>
          <source srcSet={`${BASE}mockup-laptop-before.webp`} type="image/webp" />
          <img
            src={`${BASE}mockup-laptop-before.png`}
            alt=""
            className="absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ease-in-out"
            style={{ opacity: showAfter ? 0 : 1 }}
            width={1948}
            height={1036}
            loading="eager"
          />
        </picture>
        <picture>
          <source srcSet={`${BASE}mockup-laptop-after.webp`} type="image/webp" />
          <img
            src={`${BASE}mockup-laptop-after.png`}
            alt=""
            className="absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ease-in-out"
            style={{ opacity: showAfter ? 1 : 0 }}
            width={1948}
            height={1036}
            loading="eager"
          />
        </picture>
      </div>

      <span
        className="mt-4 text-xs sm:text-sm font-sans font-bold uppercase tracking-[0.2em] transition-colors duration-500"
        style={{ color: showAfter ? "#E8631A" : "#8A8F9E" }}
      >
        {showAfter ? "After" : "Before"}
      </span>
    </div>
  );
}

function PhoneMockup({ showAfter }: { showAfter: boolean }) {
  return (
    <div className="flex flex-col items-center relative">
      <div
        className="absolute -inset-4 lg:-inset-8 rounded-3xl blur-2xl pointer-events-none transition-opacity duration-700"
        style={{
          background: "radial-gradient(ellipse at center, rgba(232,99,26,0.35) 0%, transparent 70%)",
          opacity: showAfter ? 1 : 0.6,
        }}
      />
      <div
        className="relative w-full"
        style={{ aspectRatio: "410/864" }}
        aria-label="Website redesign comparison on mobile"
        role="img"
      >
        <picture>
          <source srcSet={`${BASE}mockup-phone-before.webp`} type="image/webp" />
          <img
            src={`${BASE}mockup-phone-before.png`}
            alt=""
            className="absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ease-in-out"
            style={{ opacity: showAfter ? 0 : 1 }}
            width={410}
            height={864}
            loading="eager"
          />
        </picture>
        <picture>
          <source srcSet={`${BASE}mockup-phone-after.webp`} type="image/webp" />
          <img
            src={`${BASE}mockup-phone-after.png`}
            alt=""
            className="absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ease-in-out"
            style={{ opacity: showAfter ? 1 : 0 }}
            width={410}
            height={864}
            loading="eager"
          />
        </picture>
      </div>

      <span
        className="mt-4 text-xs sm:text-sm font-sans font-bold uppercase tracking-[0.2em] transition-colors duration-500"
        style={{ color: showAfter ? "#E8631A" : "#8A8F9E" }}
      >
        {showAfter ? "After" : "Before"}
      </span>
    </div>
  );
}

function DeviceShowcase() {
  const showAfter = useFlip(2200);
  const isLg = useIsLg();
  return (
    <div className={`flex items-center w-full ${isLg ? "gap-6 justify-center" : "gap-3 sm:gap-4 px-2"}`}>
      <div className={isLg ? "flex-[3.2]" : "flex-[2.3]"}>
        <LaptopMockup showAfter={showAfter} />
      </div>
      <div className={isLg ? "flex-[0.75]" : "flex-[0.55]"}>
        <PhoneMockup showAfter={showAfter} />
      </div>
    </div>
  );
}

export function HeroSection() {
  const isLg = useIsLg();
  return (
    <section className="bg-charcoal pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden relative">
      <div className="absolute inset-0 opacity-40">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster={`${BASE}hero-bg-premium.webp`}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={`${BASE}hero-bg-video.mp4`} type="video/mp4" />
          <source src={`${BASE}hero-bg-video.webm`} type="video/webm" />
        </video>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/70 to-charcoal/30" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {!isLg && (
          <div className="mb-10">
            <ScrollReveal>
              <DeviceShowcase />
            </ScrollReveal>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display text-offwhite leading-[1.1] mb-6">
              Stop Losing Leads to a{" "}
              <span className="text-gradient">Dated & Ineffective</span>{" "}
              Website.
            </h1>
            <p className="text-stone text-lg md:text-xl font-sans mb-8 max-w-xl leading-relaxed">
              We build and optimize websites that actually convert — then help growth-minded small and medium businesses dominate Google, generate more leads, and keep client lists full. No long-term contracts. No thousands upfront.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-10">
              <CTAButton href="/get-started">
                Book Your Free Website Review
              </CTAButton>
            </div>

            <div className="flex flex-col gap-3">
              {[
                "Free website evaluation — no strings attached",
                "Full written PDF report yours to keep",
                "Custom homepage demo built for your business",
                "Zero obligation to move forward",
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

          {isLg && (
            <ScrollReveal delay={0.2}>
              <DeviceShowcase />
            </ScrollReveal>
          )}
        </div>
      </div>
    </section>
  );
}
