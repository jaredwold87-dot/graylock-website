import { Check } from "lucide-react";
import { CTAButton } from "@/components/ui/CTAButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const BASE = import.meta.env.BASE_URL;

export function HeroSection() {
  return (
    <section
      className="-mt-16 md:-mt-20 pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden relative"
      style={{ backgroundColor: "#0a121e" }}
    >
      <div
        className="absolute inset-0 bg-no-repeat"
        style={{
          backgroundImage: `url(${BASE}hero-bg-devices.png?v=9)`,
          backgroundSize: "cover",
          backgroundPosition: "right center",
        }}
      />
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
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-display text-offwhite leading-[1.1] mb-6">
              Stop Losing Clients to Competitors With{" "}
              <span className="text-gradient">Better Websites.</span>
            </h1>
            <p className="text-stone text-lg md:text-xl font-sans mb-8 max-w-xl leading-relaxed">
              We build fully custom websites for private practices, accounting firms, and trust-based local businesses — delivered in 7–10 business days. No long-term contracts.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-10">
              <CTAButton href="/get-started">
                Schedule Your Free Consultation
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
        </div>
      </div>
    </section>
  );
}
