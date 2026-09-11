import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { LayoutTemplate, Clock, ShieldCheck, RefreshCcw } from "lucide-react";

export function HeroBenefitsSection() {
  return (
    <section 
      className="bg-[#FDFCFB] py-16 md:py-20 border-y border-black/5"
      aria-labelledby="hero-benefits-heading"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <div className="max-w-3xl mb-12 md:mb-16">
            <h2 
              id="hero-benefits-heading" 
              className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-[#292B2E] tracking-tight mb-5"
            >
              See your new homepage before you commit.
            </h2>
            <p className="text-[1.1rem] md:text-[1.25rem] text-[#292B2E]/80 leading-relaxed text-balance">
              Tell us about your business. We’ll discuss your goals, then create a custom homepage direction before any build fee.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Item 1 */}
            <div className="flex flex-col bg-white p-6 md:p-8 rounded-2xl border border-black/5 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl font-display font-bold text-[#E85D26]">01</span>
                <div className="h-8 w-px bg-black/10"></div>
                <LayoutTemplate className="w-7 h-7 text-[#292B2E]/60" strokeWidth={1.5} />
              </div>
              <h3 className="text-[17px] md:text-[1.125rem] font-sans text-[#292B2E] leading-snug font-medium">
                Begin with a free homepage demo
              </h3>
            </div>
            
            {/* Item 2 */}
            <div className="flex flex-col bg-white p-6 md:p-8 rounded-2xl border border-black/5 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl font-display font-bold text-[#E85D26]">02</span>
                <div className="h-8 w-px bg-black/10"></div>
                <Clock className="w-7 h-7 text-[#292B2E]/60" strokeWidth={1.5} />
              </div>
              <h3 className="text-[17px] md:text-[1.125rem] font-sans text-[#292B2E] leading-snug font-medium">
                On average, live in 7–10 business days after demo
              </h3>
            </div>
            
            {/* Item 3 */}
            <div className="flex flex-col bg-white p-6 md:p-8 rounded-2xl border border-black/5 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl font-display font-bold text-[#E85D26]">03</span>
                <div className="h-8 w-px bg-black/10"></div>
                <ShieldCheck className="w-7 h-7 text-[#292B2E]/60" strokeWidth={1.5} />
              </div>
              <h3 className="text-[17px] md:text-[1.125rem] font-sans text-[#292B2E] leading-snug font-medium">
                30-Day Money-Back Guarantee
              </h3>
            </div>
            
            {/* Item 4 */}
            <div className="flex flex-col bg-white p-6 md:p-8 rounded-2xl border border-black/5 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl font-display font-bold text-[#E85D26]">04</span>
                <div className="h-8 w-px bg-black/10"></div>
                <RefreshCcw className="w-7 h-7 text-[#292B2E]/60" strokeWidth={1.5} />
              </div>
              <h3 className="text-[17px] md:text-[1.125rem] font-sans text-[#292B2E] leading-snug font-medium">
                Stay up to date with an included website refresh every 2 years
              </h3>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
