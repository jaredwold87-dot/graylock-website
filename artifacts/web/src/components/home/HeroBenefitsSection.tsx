import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function HeroBenefitsSection() {
  return (
    <section 
      className="bg-[#FDFCFB] py-10 md:py-12 border-y border-black/5"
      aria-labelledby="hero-benefits-heading"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <div className="max-w-3xl mb-6 md:mb-8">
            <h2 
              id="hero-benefits-heading" 
              className="text-3xl md:text-4xl font-display font-medium text-[#292B2E] tracking-tight mb-3"
            >
              See your new homepage before you commit.
            </h2>
            <p className="text-base md:text-lg text-[#292B2E]/80 leading-relaxed text-balance">
              Tell us about your business. We’ll discuss your goals, then create a custom homepage direction before any build fee.
            </p>
          </div>
          
          <div className="flex flex-col border-t border-black/10">
            {/* Offer 1 */}
            <div className="flex flex-col md:flex-row md:items-center py-4 md:py-5 border-b border-black/10 gap-2 md:gap-8">
              <div className="md:w-[45%] lg:w-[40%] shrink-0">
                <span className="text-4xl md:text-5xl font-display font-bold text-[#E85D26] tracking-tighter uppercase leading-none">
                  Free
                </span>
              </div>
              <div className="md:w-[55%] lg:w-[60%] flex flex-col">
                <h3 className="text-2xl md:text-3xl font-display font-medium text-[#292B2E] mb-1">
                  Homepage demo
                </h3>
                <p className="text-base md:text-lg font-sans text-[#292B2E]/80 leading-snug">
                  Custom homepage direction before any build fee.
                </p>
              </div>
            </div>
            
            {/* Offer 2 */}
            <div className="flex flex-col md:flex-row md:items-center py-4 md:py-5 border-b border-black/10 gap-2 md:gap-8">
              <div className="md:w-[45%] lg:w-[40%] shrink-0">
                <span className="text-4xl md:text-5xl font-display font-bold text-[#E85D26] tracking-tighter uppercase leading-none">
                  7–10
                </span>
              </div>
              <div className="md:w-[55%] lg:w-[60%] flex flex-col">
                <h3 className="text-2xl md:text-3xl font-display font-medium text-[#292B2E] mb-1">
                  Business days
                </h3>
                <p className="text-base md:text-lg font-sans text-[#292B2E]/80 leading-snug">
                  On average, live in 7–10 business days after demo.
                </p>
              </div>
            </div>
            
            {/* Offer 3 */}
            <div className="flex flex-col md:flex-row md:items-center py-4 md:py-5 border-b border-black/10 gap-2 md:gap-8">
              <div className="md:w-[45%] lg:w-[40%] shrink-0">
                <span className="text-4xl md:text-5xl font-display font-bold text-[#E85D26] tracking-tighter uppercase leading-none">
                  30 Days
                </span>
              </div>
              <div className="md:w-[55%] lg:w-[60%] flex flex-col">
                <h3 className="text-2xl md:text-3xl font-display font-medium text-[#292B2E]">
                  Money-Back Guarantee
                </h3>
              </div>
            </div>
            
            {/* Offer 4 */}
            <div className="flex flex-col md:flex-row md:items-center py-4 md:py-5 border-b border-black/10 gap-2 md:gap-8">
              <div className="md:w-[45%] lg:w-[40%] shrink-0">
                <span className="text-4xl md:text-5xl font-display font-bold text-[#E85D26] tracking-tighter uppercase leading-none">
                  Every 2 Years
                </span>
              </div>
              <div className="md:w-[55%] lg:w-[60%] flex flex-col">
                <h3 className="text-2xl md:text-3xl font-display font-medium text-[#292B2E] mb-1">
                  Website refresh
                </h3>
                <p className="text-base md:text-lg font-sans text-[#292B2E]/80 leading-snug">
                  An included refresh to keep your website up to date.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
