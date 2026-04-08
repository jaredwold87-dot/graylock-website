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
          background: "radial-gradient(ellipse at center, rgba(46,123,180,0.35) 0%, transparent 70%)",
          opacity: showAfter ? 1 : 0.6,
        }}
      />
      <div className="relative w-full" aria-label="Website redesign comparison on laptop" role="img">
        <div className="rounded-t-lg bg-[#2a2a2a] pt-2 pb-1 px-3 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
          <span className="w-2 h-2 rounded-full bg-[#febc2e]" />
          <span className="w-2 h-2 rounded-full bg-[#28c840]" />
          <span className="flex-1 mx-4 h-4 rounded bg-[#1a1a1a]" />
        </div>
        <div className="relative bg-[#1a1a1a] border-x-4 border-b-4 border-[#2a2a2a] rounded-b-lg overflow-hidden" style={{ aspectRatio: "16/9.5" }}>
          <img
            src={`${BASE}mockup-laptop-before.png`}
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-700 ease-in-out"
            style={{ opacity: showAfter ? 0 : 1 }}
            loading="eager"
          />
          <img
            src={`${BASE}mockup-laptop-after.png`}
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-700 ease-in-out"
            style={{ opacity: showAfter ? 1 : 0 }}
            loading="eager"
          />
        </div>
        <div className="mx-auto w-[40%] h-3 bg-[#2a2a2a] rounded-b-lg" />
        <div className="mx-auto w-[55%] h-1.5 bg-[#333] rounded-b-md" />
      </div>

      <span
        className="mt-3 text-xs sm:text-sm font-sans font-bold uppercase tracking-[0.2em] transition-colors duration-500"
        style={{ color: showAfter ? "#2E7BB4" : "#8A8F9E" }}
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
          background: "radial-gradient(ellipse at center, rgba(46,123,180,0.35) 0%, transparent 70%)",
          opacity: showAfter ? 1 : 0.6,
        }}
      />
      <div className="relative w-full" aria-label="Website redesign comparison on iPhone" role="img">
        <div className="rounded-[1.5rem] bg-[#1a1a1a] p-1.5 shadow-2xl border border-[#333]">
          <div className="relative mx-auto w-[35%] h-4 bg-[#1a1a1a] rounded-b-xl z-10 -mb-1 flex items-center justify-center">
            <span className="w-2 h-2 rounded-full bg-[#0a0a0a] border border-[#222]" />
          </div>
          <div className="relative rounded-[1.1rem] overflow-hidden bg-white" style={{ aspectRatio: "9/19" }}>
            <img
              src={`${BASE}mockup-phone-before.png`}
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-700 ease-in-out"
              style={{ opacity: showAfter ? 0 : 1 }}
              loading="eager"
            />
            <img
              src={`${BASE}mockup-phone-after.png`}
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-700 ease-in-out"
              style={{ opacity: showAfter ? 1 : 0 }}
              loading="eager"
            />
          </div>
          <div className="mx-auto w-[30%] h-1 mt-1.5 bg-[#333] rounded-full" />
        </div>
      </div>

      <span
        className="mt-3 text-xs sm:text-sm font-sans font-bold uppercase tracking-[0.2em] transition-colors duration-500"
        style={{ color: showAfter ? "#2E7BB4" : "#8A8F9E" }}
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
    <div className={`flex items-end w-full ${isLg ? "gap-6 justify-center" : "gap-3 sm:gap-4 px-2"}`}>
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
      <div className="absolute inset-0">
        <img
          src={`${BASE}hero-bg-blue.png`}
          alt=""
          className="w-full h-full object-cover animate-hero-drift"
          loading="eager"
        />
      </div>
      <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(15,30,53,0.92) 0%, rgba(15,30,53,0.85) 40%, rgba(15,30,53,0.7) 70%, rgba(15,30,53,0.5) 100%)" }} />

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
              Your Practice Deserves a Website That Works as Hard as{" "}
              <span className="text-gradient">You Do.</span>
            </h1>
            <p className="text-stone text-lg md:text-xl font-sans mb-8 max-w-xl leading-relaxed">
              We build custom, high-converting websites for law firms, medical practices, accounting firms, and therapy groups — and deliver them in 3–5 business days. Starting at $199/month. No long-term contracts.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-10">
              <CTAButton href="/get-started">
                Book Your Free Website Review
              </CTAButton>
            </div>

            <div className="flex flex-col gap-3">
              {[
                "Free website evaluation — no strings attached",
                "Custom homepage demo built for your practice",
                "Full written PDF report yours to keep",
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
