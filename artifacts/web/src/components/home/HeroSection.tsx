import { Check } from "lucide-react";
import { CTAButton } from "@/components/ui/CTAButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

function DeviceMockups() {
  const BASE = import.meta.env.BASE_URL;
  return (
    <div className="relative w-full">
      <div className="flex gap-5 items-end">
        <div className="flex-1 flex flex-col">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-stone/60 mb-3 text-center">Before</span>
          <div className="relative rounded-lg overflow-hidden shadow-2xl shadow-black/50">
            <picture>
              <source srcSet={`${BASE}mockup-before-laptop.webp`} type="image/webp" />
              <img
                src={`${BASE}mockup-before-laptop.png`}
                alt="Laptop displaying an outdated, ineffective small business website"
                className="w-full block"
                width={1456}
                height={816}
                loading="eager"
              />
            </picture>
          </div>
        </div>

        <div className="flex-1 flex flex-col">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-orange mb-3 text-center">After</span>
          <div className="relative rounded-lg overflow-hidden shadow-2xl shadow-orange/15">
            <picture>
              <source srcSet={`${BASE}mockup-after-laptop.webp`} type="image/webp" />
              <img
                src={`${BASE}mockup-after-laptop.png`}
                alt="Laptop displaying a modern, high-converting website designed by Graylock Digital"
                className="w-full block"
                width={1456}
                height={816}
                loading="eager"
              />
            </picture>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-6 right-[4%] w-[16%] z-20">
        <picture>
          <source srcSet={`${BASE}mockup-after-mobile.webp`} type="image/webp" />
          <img
            src={`${BASE}mockup-after-mobile.png`}
            alt="iPhone displaying a mobile-responsive website by Graylock Digital"
            className="w-full block drop-shadow-2xl"
            width={816}
            height={1456}
            loading="eager"
          />
        </picture>
      </div>
    </div>
  );
}

function DeviceMockupsMobile() {
  const BASE = import.meta.env.BASE_URL;
  return (
    <div className="relative w-full">
      <div className="flex gap-2 sm:gap-3 items-end">
        <div className="flex-[1.2] flex flex-col min-w-0">
          <span className="text-[9px] sm:text-[10px] font-sans font-bold uppercase tracking-widest text-stone/60 mb-1.5 text-center">Before</span>
          <div className="relative rounded-lg overflow-hidden shadow-xl shadow-black/40">
            <picture>
              <source srcSet={`${BASE}mockup-before-laptop.webp`} type="image/webp" />
              <img
                src={`${BASE}mockup-before-laptop.png`}
                alt="Outdated website on laptop"
                className="w-full block"
                width={1456}
                height={816}
                loading="eager"
              />
            </picture>
          </div>
        </div>

        <div className="flex-[1.2] flex flex-col min-w-0">
          <span className="text-[9px] sm:text-[10px] font-sans font-bold uppercase tracking-widest text-orange mb-1.5 text-center">After</span>
          <div className="relative rounded-lg overflow-hidden shadow-xl shadow-orange/10">
            <picture>
              <source srcSet={`${BASE}mockup-after-laptop.webp`} type="image/webp" />
              <img
                src={`${BASE}mockup-after-laptop.png`}
                alt="Modern website on laptop by Graylock Digital"
                className="w-full block"
                width={1456}
                height={816}
                loading="eager"
              />
            </picture>
          </div>
        </div>

        <div className="flex-[0.5] flex flex-col min-w-0">
          <span className="text-[9px] sm:text-[10px] font-sans font-bold uppercase tracking-widest text-orange/60 mb-1.5 text-center">Mobile</span>
          <div className="relative rounded-lg overflow-hidden shadow-xl shadow-orange/10">
            <picture>
              <source srcSet={`${BASE}mockup-after-mobile.webp`} type="image/webp" />
              <img
                src={`${BASE}mockup-after-mobile.png`}
                alt="Mobile responsive website on iPhone"
                className="w-full block"
                width={816}
                height={1456}
                loading="eager"
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="bg-charcoal pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden relative">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${import.meta.env.BASE_URL}hero-bg.png)` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-charcoal/40" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        <div className="lg:hidden mb-10">
          <ScrollReveal>
            <DeviceMockupsMobile />
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display text-offwhite leading-[1.1] mb-6">
              Stop Losing Leads to a{" "}
              <span className="text-gradient">Dated & Ineffective</span>{" "}
              Website.
            </h1>
            <p className="text-stone text-lg md:text-xl font-sans mb-8 max-w-xl leading-relaxed">
              We help growth-minded small and medium sized businesses dominate Google, get more leads, and keep client lists full – without locking you into long-term contracts or charging thousands of dollars upfront.
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
                "Zero obligation to move forward"
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

          <div className="hidden lg:block">
            <ScrollReveal delay={0.2}>
              <DeviceMockups />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
