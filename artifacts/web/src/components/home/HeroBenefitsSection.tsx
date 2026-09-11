import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTAButton } from "@/components/ui/CTAButton";

export function HeroBenefitsSection() {
  return (
    <section 
      className="bg-[#FDFCFB] py-16 md:py-24 border-y border-black/5"
      aria-labelledby="hero-benefits-heading"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <span className="text-[#B23E16] font-bold tracking-wider text-sm uppercase mb-4 block">
              The Graylock Difference
            </span>
            <h2 
              id="hero-benefits-heading" 
              className="text-4xl md:text-5xl lg:text-[56px] lg:leading-[1.1] font-display font-medium text-[#292B2E] tracking-tight mb-6 text-balance mx-auto"
            >
              See the direction before the build fee is due.
            </h2>
            <p className="text-lg md:text-xl text-[#292B2E]/70 leading-relaxed text-balance mx-auto">
              Start with a short fit call. If Graylock is the right fit, we create a custom homepage direction around your business before you decide whether to move forward.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-16 md:mb-20">
            {/* Primary Featured Card (5/12) */}
            <div className="lg:col-span-5 bg-[#1C1D20] rounded-2xl p-8 md:p-10 text-white shadow-xl flex flex-col justify-between border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#E85D26]"></div>
              <div>
                <div className="inline-flex items-center justify-center rounded-full bg-white/10 px-3 py-1 mb-6 border border-white/10">
                  <span className="text-[#E85D26] text-xs font-bold tracking-wider uppercase">01 — Start Here</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 tracking-tight leading-tight">
                  Your Free Custom Homepage Direction
                </h3>
                <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8">
                  See a strategic homepage direction built around your business, services, proof, and the action you want the right prospect to take—before any build fee is due.
                </p>
              </div>
              <div className="pt-6 border-t border-white/10">
                <p className="text-sm md:text-base font-medium text-white/90 flex items-center gap-2">
                  No build fee until you approve the direction.
                </p>
              </div>
            </div>
            
            {/* Supporting Cards (7/12) */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-6 lg:gap-8">
              <div className="col-span-1 lg:col-span-2 bg-white rounded-2xl p-8 border border-black/5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-center">
                <span className="text-[#B23E16] text-sm font-bold tracking-wider uppercase mb-3 block">02</span>
                <h3 className="text-xl md:text-2xl font-display font-bold text-[#292B2E] mb-3">
                  A Defined 7–10-Day Launch Path
                </h3>
                <p className="text-[#292B2E]/70 leading-relaxed text-sm md:text-base">
                  Once you approve the direction and provide the required materials and approvals, standard sites are built and launched in 7–10 business days.
                </p>
              </div>
              
              <div className="col-span-1 bg-white rounded-2xl p-8 border border-black/5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-start">
                <span className="text-[#B23E16] text-sm font-bold tracking-wider uppercase mb-3 block">03</span>
                <h3 className="text-xl font-display font-bold text-[#292B2E] mb-3">
                  30-Day Money-Back Guarantee
                </h3>
                <p className="text-[#292B2E]/70 leading-relaxed text-sm md:text-base">
                  After launch, if the site is not right for your business, you are covered by our 30-day money-back guarantee.
                </p>
              </div>
              
              <div className="col-span-1 bg-white rounded-2xl p-8 border border-black/5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-start">
                <span className="text-[#B23E16] text-sm font-bold tracking-wider uppercase mb-3 block">04</span>
                <h3 className="text-xl font-display font-bold text-[#292B2E] mb-3">
                  Support That Stays Current
                </h3>
                <p className="text-[#292B2E]/70 leading-relaxed text-sm md:text-base">
                  Your monthly plan includes hosting, maintenance, ongoing support, and a website refresh every two years while you remain an active client.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center max-w-2xl mx-auto flex flex-col items-center">
            <CTAButton href="/get-started" variant="funnel" className="mb-4 w-full sm:w-auto">
              Get Your Free Homepage Direction
            </CTAButton>
            <p className="text-sm text-[#292B2E]/60 text-balance mx-auto">
              Start with a 15-minute fit call. No build fee is due before you approve the direction.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
