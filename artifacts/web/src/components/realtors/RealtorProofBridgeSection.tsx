import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTAButton } from "@/components/ui/CTAButton";
import { ArrowRight } from "lucide-react";
import { trackRealtorEvent } from "@/lib/realtorAnalytics";

/**
 * Proof bridge — stands in for the testimonial slot until an approved real
 * estate testimonial is supplied. Contains no testimonial content; it routes
 * visitors to real portfolio work instead.
 */
export function RealtorProofBridgeSection() {
  return (
    <section className="bg-[#1a1a1a] py-20 md:py-28 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <p className="text-[#E85D26] font-sans text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-4">
            See What a Better First Impression Looks Like
          </p>
          <h2 className="text-3xl md:text-5xl font-display text-white mb-6 leading-tight">
            A Real Estate Website Should Make You Easier to Choose.
          </h2>
          <p className="text-stone text-lg md:text-xl font-sans max-w-2xl mx-auto leading-relaxed mb-10">
            From first search to first conversation, your site should make it easy for a
            buyer or seller to understand your value, explore their options, and take the
            next step with confidence.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <CTAButton
            href="/featured-projects"
            variant="outline"
            className="group"
            onClick={() =>
              trackRealtorEvent("realtor_portfolio_click", { destination: "/featured-projects" })
            }
          >
            View Our Portfolio
            <ArrowRight
              className="inline-block ml-2 group-hover:translate-x-1 transition-transform"
              size={18}
            />
          </CTAButton>
        </ScrollReveal>
      </div>
    </section>
  );
}
