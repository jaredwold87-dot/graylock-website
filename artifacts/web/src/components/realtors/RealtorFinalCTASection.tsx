import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTAButton } from "@/components/ui/CTAButton";
import { ArrowRight } from "lucide-react";
import { realtorGetStartedHref } from "@/lib/realtorLinks";

export function RealtorFinalCTASection() {
  return (
    <section className="bg-[#1a1a1a] py-20 md:py-28 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <p className="text-[#E85D26] font-sans text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-4">
            Ready When You Are
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display text-white mb-6 leading-tight">
            Let's Build the Website Your Next Client Can Trust.
          </h2>
          <p className="text-stone text-lg md:text-xl font-sans max-w-2xl mx-auto leading-relaxed mb-10">
            Book a quick call. Tell us what is working, what is not, and what you want your
            website to do for your business. We will make the path forward clear—and show
            you a custom direction before you have to commit.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="flex flex-col items-center gap-3">
            <CTAButton
              href={realtorGetStartedHref("final_cta")}
              variant="funnel"
              className="px-10 py-5 text-lg group"
            >
              Book a Realtor Website Call
              <ArrowRight
                className="inline-block ml-2 group-hover:translate-x-1 transition-transform"
                size={18}
              />
            </CTAButton>
            <p className="text-stone text-sm font-sans mt-3">
              No pressure. No generic template. No obligation to move forward after your demo.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
