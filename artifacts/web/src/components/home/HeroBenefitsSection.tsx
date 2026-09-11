import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function HeroBenefitsSection() {
  return (
    <section 
      className="bg-[#FDFCFB] py-12 md:py-16 lg:py-20 border-y border-black/5"
      aria-labelledby="hero-benefits-heading"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <div className="max-w-[1000px] mx-auto text-center mb-12 md:mb-16">
            <h2 
              id="hero-benefits-heading" 
              className="text-4xl md:text-5xl lg:text-[60px] lg:leading-[1.1] font-display font-medium text-[#292B2E] tracking-tight mb-4 md:mb-6 text-balance mx-auto"
            >
              See your new homepage before you commit.
            </h2>
            <p className="text-base md:text-lg text-[#292B2E]/80 leading-relaxed text-balance max-w-2xl mx-auto">
              Tell us about your business. We’ll discuss your goals, then create a custom homepage direction before any build fee.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
            <div className="flex flex-col text-left">
              <h3 className="text-xl md:text-2xl font-display font-bold text-[#E85D26] tracking-tight mb-3">
                Free Home Page Demo
              </h3>
              <p className="text-base text-[#292B2E]/80 leading-relaxed">
                Let us show you what your new homepage could look like before you commit to anything. We'll strategize it and build it out for free.
              </p>
            </div>
            
            <div className="flex flex-col text-left">
              <h3 className="text-xl md:text-2xl font-display font-bold text-[#E85D26] tracking-tight mb-3">
                7–10-Day Build
              </h3>
              <p className="text-base text-[#292B2E]/80 leading-relaxed">
                On average, it takes 7–10 business days after you approve the demo to complete your website and go live.
              </p>
            </div>
            
            <div className="flex flex-col text-left">
              <h3 className="text-xl md:text-2xl font-display font-bold text-[#E85D26] tracking-tight mb-3">
                30-Day Money-Back Guarantee
              </h3>
              <p className="text-base text-[#292B2E]/80 leading-relaxed">
                Decide after launching that you don’t like it? We offer a 30-day money-back guarantee, no questions asked.
              </p>
            </div>
            
            <div className="flex flex-col text-left">
              <h3 className="text-xl md:text-2xl font-display font-bold text-[#E85D26] tracking-tight mb-3">
                2-Year Website Refresh
              </h3>
              <p className="text-base text-[#292B2E]/80 leading-relaxed">
                Your maintenance and hosting plan includes a website refresh every 2 years, so your site stays current and never feels outdated.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
