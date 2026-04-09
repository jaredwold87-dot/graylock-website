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

      <div className="relative w-full" style={{ aspectRatio: "16/10.5" }}>
        <div className="absolute inset-0 flex flex-col">
          <div className="flex-1 relative rounded-t-lg overflow-hidden border-[3px] border-b-0 border-[#2a2a2a] bg-[#1a1a1a]">
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

          <div className="h-[4%] bg-gradient-to-b from-[#3a3a3a] to-[#2a2a2a] rounded-b-md" />
          <div className="h-[3%] bg-gradient-to-b from-[#333] to-[#222] mx-[15%] rounded-b-lg" />
        </div>
      </div>

      <span
        className="mt-4 text-xs sm:text-sm font-sans font-bold uppercase tracking-[0.2em] transition-colors duration-500"
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

      <div className="relative w-full" style={{ aspectRatio: "9/19" }}>
        <div className="absolute inset-0 rounded-[clamp(12px,3vw,28px)] overflow-hidden border-[3px] border-[#2a2a2a] bg-[#1a1a1a] flex flex-col">
          <div className="h-[3.5%] bg-[#1a1a1a] flex items-center justify-center">
            <div className="w-[30%] h-[45%] bg-[#111] rounded-full" />
          </div>

          <div className="flex-1 relative overflow-hidden">
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

          <div className="h-[1.5%] bg-[#1a1a1a]" />
        </div>
      </div>

      <span
        className="mt-4 text-xs sm:text-sm font-sans font-bold uppercase tracking-[0.2em] transition-colors duration-500"
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
  return (
    <section className="bg-charcoal pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={`${BASE}hero-bg-blue.png`}
          alt=""
          className="w-full h-full object-cover hero-bg-animate"
          loading="eager"
        />
      </div>
      <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(15,30,53,0.92) 0%, rgba(15,30,53,0.85) 40%, rgba(15,30,53,0.7) 70%, rgba(15,30,53,0.5) 100%)" }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display text-offwhite leading-[1.1] mb-6">
              Stop Losing Clients to Competitors With{" "}
              <span className="text-gradient">Better Websites.</span>
            </h1>
            <p className="text-stone text-lg md:text-xl font-sans mb-8 max-w-xl leading-relaxed">
              We build fully custom websites for private practices and accounting firms — delivered in 7–10 business days. Starting at $199/month. No long-term contracts.
            </p>

            <div className="block lg:hidden mb-8">
              <DeviceShowcase />
            </div>

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

          <ScrollReveal delay={0.2} className="hidden lg:block">
            <DeviceShowcase />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
