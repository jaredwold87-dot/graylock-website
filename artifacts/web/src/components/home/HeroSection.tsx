import { Check } from "lucide-react";
import { CTAButton } from "@/components/ui/CTAButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { BeforeAfterMockup } from "./BeforeAfterMockup";

export function HeroSection() {
  return (
    <section className="bg-charcoal pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden relative">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${import.meta.env.BASE_URL}hero-bg.png)` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-charcoal/40" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
        
        <ScrollReveal>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-display text-offwhite leading-[1.1] mb-6">
            See What Your Website Could Become.<br /><span className="text-orange">For Free.</span>
          </h1>
          <p className="text-stone text-lg md:text-xl font-sans mb-8 max-w-xl leading-relaxed">
            Book a free call and we'll review your current site, walk you through exactly what's costing you leads, and build you a custom homepage demo — before you pay us a dollar.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-10">
            <CTAButton href="/get-started">
              Book Your Free Website Review
            </CTAButton>
          </div>

          <div className="flex flex-col gap-3">
            {[
              "Free website evaluation — no strings attached",
              "Custom homepage demo built for your business",
              "Zero obligation to move forward"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-navy border border-gunmetal flex items-center justify-center">
                  <Check size={12} className="text-orange" />
                </div>
                <span className="text-stone font-sans text-sm md:text-base">{text}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <BeforeAfterMockup />
        
      </div>
    </section>
  );
}
