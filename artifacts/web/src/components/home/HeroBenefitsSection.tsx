import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function HeroBenefitsSection() {
  return (
    <section 
      className="bg-[#FDFCFB] py-16 md:py-24"
      aria-labelledby="hero-benefits-heading"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.7fr)] gap-10 lg:gap-20 items-start">
            
            {/* Intro text */}
            <div>
              <h2 id="hero-benefits-heading" className="sr-only">
                Our Process and Guarantees
              </h2>
              <div className="w-8 h-1 bg-[#E85D26] mb-6" aria-hidden="true"></div>
              <p className="text-[1.35rem] md:text-[1.5rem] font-display text-[#292B2E] leading-snug text-balance">
                Tell us about your business. We’ll discuss your goals, then create a custom homepage direction before any build fee.
              </p>
            </div>
            
            {/* Benefits List */}
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10 lg:gap-y-12 w-full [&>div>span]:text-[#B23E16]">
              {/* Item 1 */}
              <div className="flex flex-col border-t border-black/10 pt-5">
                <span className="block text-[#E85D26] font-sans font-bold text-[11px] tracking-widest uppercase mb-2">
                  Demo
                </span>
                <h3 className="text-[17px] font-sans text-[#292B2E] leading-snug font-medium">
                  Begin with a free homepage demo
                </h3>
              </div>
              
              {/* Item 2 */}
              <div className="flex flex-col border-t border-black/10 pt-5">
                <span className="block text-[#E85D26] font-sans font-bold text-[11px] tracking-widest uppercase mb-2">
                  Timeline
                </span>
                <h3 className="text-[17px] font-sans text-[#292B2E] leading-snug font-medium">
                  On average, live in 7–10 business days after demo
                </h3>
              </div>
              
              {/* Item 3 */}
              <div className="flex flex-col border-t border-black/10 pt-5">
                <span className="block text-[#E85D26] font-sans font-bold text-[11px] tracking-widest uppercase mb-2">
                  Guarantee
                </span>
                <h3 className="text-[17px] font-sans text-[#292B2E] leading-snug font-medium">
                  30-Day Money-Back Guarantee
                </h3>
              </div>
              
              {/* Item 4 */}
              <div className="flex flex-col border-t border-black/10 pt-5">
                <span className="block text-[#E85D26] font-sans font-bold text-[11px] tracking-widest uppercase mb-2">
                  Longevity
                </span>
                <h3 className="text-[17px] font-sans text-[#292B2E] leading-snug font-medium">
                  Stay up to date with an included website refresh every 2 years
                </h3>
              </div>
            </div>
            
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
