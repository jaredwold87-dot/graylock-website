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

function LaptopFrame({ showAfter }: { showAfter: boolean }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full rounded-t-xl bg-[#1c1c1e] border border-[#3a3a3c] shadow-2xl shadow-black/60 overflow-hidden">
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#2c2c2e] border-b border-[#3a3a3c]">
          <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
          <span className="w-2 h-2 rounded-full bg-[#febc2e]" />
          <span className="w-2 h-2 rounded-full bg-[#28c840]" />
          <span className="flex-1 mx-2 h-4 rounded-md bg-[#1c1c1e] border border-[#3a3a3c]" />
        </div>

        <div className="relative w-full bg-[#1c1c1e]" style={{ aspectRatio: "1920/930" }} aria-label="Website redesign comparison on laptop" role="img">
          <picture>
            <source srcSet={`${BASE}before-desktop.webp`} type="image/webp" />
            <img
              src={`${BASE}before-desktop.png`}
              alt=""
              className="absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ease-in-out"
              style={{ opacity: showAfter ? 0 : 1 }}
              width={1920}
              height={930}
              loading="eager"
            />
          </picture>
          <picture>
            <source srcSet={`${BASE}after-desktop.webp`} type="image/webp" />
            <img
              src={`${BASE}after-desktop.png`}
              alt=""
              className="absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ease-in-out"
              style={{ opacity: showAfter ? 1 : 0 }}
              width={1920}
              height={930}
              loading="eager"
            />
          </picture>
        </div>
      </div>

      <div className="w-[90%] h-3 bg-gradient-to-b from-[#2c2c2e] to-[#1c1c1e] rounded-b-lg border-x border-b border-[#3a3a3c]" />
      <div className="w-[110%] h-[6px] bg-gradient-to-b from-[#3a3a3c] to-[#2c2c2e] rounded-b-xl" />

      <span
        className="mt-3 text-[10px] font-sans font-bold uppercase tracking-widest transition-colors duration-500"
        style={{ color: showAfter ? "#E8631A" : "#8A8F9E" }}
      >
        {showAfter ? "After" : "Before"}
      </span>
    </div>
  );
}

function PhoneFrame({ showAfter }: { showAfter: boolean }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full rounded-[20px] lg:rounded-[24px] bg-[#1c1c1e] border-[2.5px] border-[#3a3a3c] shadow-2xl shadow-black/60 overflow-hidden p-[3px] lg:p-1">
        <div className="absolute top-[3px] lg:top-1 left-1/2 -translate-x-1/2 w-[30%] h-[5px] lg:h-[6px] bg-[#1c1c1e] rounded-b-lg z-10 border-x border-b border-[#3a3a3c]" />

        <div className="relative w-full rounded-[16px] lg:rounded-[20px] overflow-hidden" style={{ aspectRatio: "9/19.5" }} aria-label="Website redesign comparison on mobile" role="img">
          <picture>
            <source srcSet={`${BASE}before-mobile.webp`} type="image/webp" />
            <img
              src={`${BASE}before-mobile.png`}
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-700 ease-in-out"
              style={{ opacity: showAfter ? 0 : 1 }}
              width={390}
              height={844}
              loading="eager"
            />
          </picture>
          <picture>
            <source srcSet={`${BASE}after-mobile.webp`} type="image/webp" />
            <img
              src={`${BASE}after-mobile.png`}
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-700 ease-in-out"
              style={{ opacity: showAfter ? 1 : 0 }}
              width={390}
              height={844}
              loading="eager"
            />
          </picture>
        </div>
      </div>

      <span
        className="mt-3 text-[10px] font-sans font-bold uppercase tracking-widest transition-colors duration-500"
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
      <div className={isLg ? "flex-[2.8]" : "flex-[2]"}>
        <LaptopFrame showAfter={showAfter} />
      </div>
      <div className={isLg ? "flex-[0.85]" : "flex-[0.65]"}>
        <PhoneFrame showAfter={showAfter} />
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
