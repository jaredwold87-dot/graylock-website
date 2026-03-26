import { Check } from "lucide-react";
import { CTAButton } from "@/components/ui/CTAButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

function BeforeAfterShowcase() {
  const BASE = import.meta.env.BASE_URL;
  return (
    <div className="relative w-full">
      <div className="flex gap-4 items-end">
        <div className="flex-1 flex flex-col">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-stone/60 mb-2 text-center">Before</span>
          <div className="relative rounded-lg overflow-hidden border border-gunmetal/60 shadow-xl shadow-black/40 opacity-75 grayscale-[30%]">
            <picture>
              <source srcSet={`${BASE}wce-before.webp`} type="image/webp" />
              <img
                src={`${BASE}wce-before.png`}
                alt="West Coast Eye Institute — outdated website before redesign"
                className="w-full block"
                width={1024}
                height={533}
                loading="eager"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
          </div>
        </div>

        <div className="flex-1 flex flex-col">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-orange mb-2 text-center">After</span>
          <div className="relative rounded-lg overflow-hidden border border-orange/30 shadow-2xl shadow-orange/10">
            <picture>
              <source srcSet={`${BASE}wce-after-desktop.webp`} type="image/webp" />
              <img
                src={`${BASE}wce-after-desktop.png`}
                alt="West Coast Eye Institute — modern redesigned website by Graylock Digital"
                className="w-full block"
                width={1024}
                height={533}
                loading="eager"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>

      <div className="absolute -bottom-4 right-[2%] w-[18%] z-20">
        <div className="relative rounded-xl overflow-hidden border-2 border-orange/40 shadow-2xl shadow-orange/20">
          <img
            src={`${BASE}wce-after-mobile.jpeg`}
            alt="West Coast Eye Institute — mobile responsive redesign"
            className="w-full block"
            width={473}
            height={1024}
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
}

function BeforeAfterShowcaseMobile() {
  const BASE = import.meta.env.BASE_URL;
  return (
    <div className="relative w-full">
      <div className="flex gap-2 sm:gap-3 items-end">
        <div className="flex-[1.1] sm:flex-[1.2] flex flex-col min-w-0">
          <span className="text-[9px] sm:text-[10px] font-sans font-bold uppercase tracking-widest text-stone/60 mb-1.5 text-center">Before</span>
          <div className="relative rounded-lg overflow-hidden border border-gunmetal/60 shadow-lg shadow-black/30 opacity-75 grayscale-[30%]">
            <picture>
              <source srcSet={`${BASE}wce-before.webp`} type="image/webp" />
              <img
                src={`${BASE}wce-before.png`}
                alt="Outdated website before redesign"
                className="w-full block"
                width={1024}
                height={533}
                loading="eager"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
          </div>
        </div>

        <div className="flex-[1.1] sm:flex-[1.2] flex flex-col min-w-0">
          <span className="text-[9px] sm:text-[10px] font-sans font-bold uppercase tracking-widest text-orange mb-1.5 text-center">After</span>
          <div className="relative rounded-lg overflow-hidden border border-orange/30 shadow-xl shadow-orange/10">
            <picture>
              <source srcSet={`${BASE}wce-after-desktop.webp`} type="image/webp" />
              <img
                src={`${BASE}wce-after-desktop.png`}
                alt="Modern redesigned website by Graylock Digital"
                className="w-full block"
                width={1024}
                height={533}
                loading="eager"
              />
            </picture>
          </div>
        </div>

        <div className="flex-[0.5] sm:flex-[0.55] flex flex-col min-w-0">
          <span className="text-[9px] sm:text-[10px] font-sans font-bold uppercase tracking-widest text-orange/60 mb-1.5 text-center">Mobile</span>
          <div className="relative rounded-lg overflow-hidden border border-orange/30 shadow-xl shadow-orange/10">
            <img
              src={`${BASE}wce-after-mobile.jpeg`}
              alt="Mobile responsive redesign"
              className="w-full block"
              width={473}
              height={1024}
              loading="eager"
            />
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
            <BeforeAfterShowcaseMobile />
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
              <BeforeAfterShowcase />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
