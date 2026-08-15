import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTAButton } from "@/components/ui/CTAButton";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { realtorGetStartedHref } from "@/lib/realtorLinks";

export function RealtorPricingBridgeSection() {
  return (
    <section className="bg-[#0f0f0f] pb-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="relative rounded-2xl border border-[#E85D26]/40 bg-gradient-to-b from-[#E85D26]/[0.10] to-[#E85D26]/[0.02] shadow-[0_0_50px_-12px_rgba(232,93,38,0.45)] p-8 md:p-10 text-center">
            <p className="text-[#E85D26] font-sans font-bold uppercase tracking-[0.2em] text-xs mb-4">
              Simple Pricing. A Clearer Path.
            </p>
            <h2 className="font-display text-2xl md:text-3xl text-white leading-snug mb-4">
              Your Next Client Is Not Waiting for a Better Website.
            </h2>
            <p className="text-stone font-sans text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-5">
              Start with a free custom homepage demo built around your real estate brand.
              When you approve the direction, we build the site, support it, and keep it
              current—without locking you into a long-term contract.
            </p>
            {/* Current published pricing — no separate realtor price list */}
            <p className="font-display text-xl md:text-2xl text-white leading-snug mb-8">
              Fully custom websites from <span className="text-[#E85D26]">$199/month</span>.
            </p>
            <div className="flex flex-col items-center gap-3">
              <CTAButton href={realtorGetStartedHref("pricing_cta")} variant="funnel">
                Book a Realtor Website Call
              </CTAButton>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 text-stone hover:text-[#E85D26] font-sans font-semibold transition-colors group mt-2"
              >
                See Full Pricing
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            {/* Required note below pricing copy */}
            <p className="mt-7 text-stone/70 font-sans text-xs md:text-sm leading-relaxed max-w-2xl mx-auto">
              IDX, MLS data, and third-party provider costs—if applicable—are scoped
              separately after your market and eligibility requirements are confirmed.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
