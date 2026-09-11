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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* Left Column: Offer Statement & CTA (5/12 = 41.6%) */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start flex flex-col justify-start">
              <span className="text-[#B23E16] font-bold tracking-wider text-sm uppercase mb-4 block">
                The Graylock Difference
              </span>
              <h2 
                id="hero-benefits-heading" 
                className="text-4xl md:text-5xl lg:text-[52px] lg:leading-[1.1] font-display font-medium text-[#292B2E] tracking-tight mb-6 text-balance"
              >
                See the direction before the build fee is due.
              </h2>
              <p className="text-lg md:text-xl text-[#292B2E]/70 leading-relaxed text-balance mb-10">
                A website should not feel like a leap of faith. Graylock does the strategic work first, so you can see the direction for your business before deciding whether to move forward.
              </p>
              
              <div className="flex flex-col items-start">
                <CTAButton href="/get-started" variant="funnel" className="mb-5 w-full sm:w-auto">
                  Get Your Free Homepage Direction
                </CTAButton>
                <p className="text-sm md:text-base text-[#292B2E]/60 text-balance max-w-sm">
                  Start with a 15-minute fit call. No build fee is due before you approve the direction.
                </p>
              </div>
            </div>
            
            {/* Right Column: Commitments (7/12 = 58.3%) */}
            <div className="lg:col-span-7 flex flex-col pt-4 lg:pt-0">
              
              {/* Commitment 01 (More prominent) */}
              <div className="flex flex-row gap-6 md:gap-8 pb-10 md:pb-12 border-b border-black/10">
                <div className="text-[#B23E16] font-display text-2xl md:text-3xl font-medium tracking-tight mt-1 shrink-0">
                  01
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-display font-medium text-[#292B2E] mb-3 tracking-tight">
                    Your Free Custom Homepage Direction
                  </h3>
                  <p className="text-[#292B2E]/70 leading-relaxed text-lg md:text-xl">
                    We create a homepage direction around your business, services, proof, and the action you want the right prospect to take—before any build fee is due.
                  </p>
                </div>
              </div>

              {/* Commitment 02 */}
              <div className="flex flex-row gap-6 md:gap-8 py-10 md:py-12 border-b border-black/10">
                <div className="text-[#B23E16] font-display text-xl md:text-2xl font-medium tracking-tight mt-1 shrink-0">
                  02
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-display font-medium text-[#292B2E] mb-3 tracking-tight">
                    A Defined 7–10-Day Launch Path
                  </h3>
                  <p className="text-[#292B2E]/70 leading-relaxed text-base md:text-lg">
                    Once you approve the direction and provide the required materials and approvals, standard sites are built and launched in 7–10 business days.
                  </p>
                </div>
              </div>

              {/* Commitment 03 */}
              <div className="flex flex-row gap-6 md:gap-8 py-10 md:py-12 border-b border-black/10">
                <div className="text-[#B23E16] font-display text-xl md:text-2xl font-medium tracking-tight mt-1 shrink-0">
                  03
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-display font-medium text-[#292B2E] mb-3 tracking-tight">
                    30-Day Money-Back Guarantee
                  </h3>
                  <p className="text-[#292B2E]/70 leading-relaxed text-base md:text-lg">
                    After launch, if the site is not right for your business, you are covered by our 30-day money-back guarantee.
                  </p>
                </div>
              </div>

              {/* Commitment 04 */}
              <div className="flex flex-row gap-6 md:gap-8 pt-10 md:pt-12">
                <div className="text-[#B23E16] font-display text-xl md:text-2xl font-medium tracking-tight mt-1 shrink-0">
                  04
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-display font-medium text-[#292B2E] mb-3 tracking-tight">
                    Support That Stays Current
                  </h3>
                  <p className="text-[#292B2E]/70 leading-relaxed text-base md:text-lg">
                    Your monthly plan includes hosting, maintenance, ongoing support, and a website refresh every two years while you remain an active client.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
