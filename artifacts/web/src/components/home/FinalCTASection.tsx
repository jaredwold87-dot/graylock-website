import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTAButton } from "@/components/ui/CTAButton";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export function FinalCTASection({ variant = "default" }: { variant?: "default" | "warmGraphite" }) {
  const isGraphite = variant === "warmGraphite";

  return (
    <section className={`${isGraphite ? "bg-[#1C1B1A] border-[#AEA7A3]/10" : "bg-[#1a1a1a] border-white/5"} py-20 md:py-28 px-6 md:px-12 border-t`}>
      <div className="max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <p className={`${isGraphite ? "text-[#B0784E]" : "text-[#E85D26]"} font-sans text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-4`}>Plans Start at $199/mo</p>
          <h2 className={`text-3xl md:text-5xl lg:text-6xl font-display ${isGraphite ? "text-[#ECE8E4]" : "text-white"} mb-6 leading-tight`}>
            See What Your New Homepage Could Look Like
          </h2>
          <p className={`${isGraphite ? "text-[#AEA7A3]" : "text-stone"} text-lg md:text-xl font-sans max-w-2xl mx-auto leading-relaxed mb-4`}>
            Flat monthly rate, no long-term contracts — hosting, support, and ongoing maintenance included. Get a free, custom homepage demo built for your business before you spend a dollar.
          </p>
          <p className={`${isGraphite ? "text-[#AEA7A3]" : "text-stone"} font-sans text-sm md:text-base max-w-2xl mx-auto mb-10`}>
            Plus our <span className={`font-semibold ${isGraphite ? "text-[#ECE8E4]" : "text-white"}`}>Stay-Current Guarantee</span> — a free website refresh every 2 years.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="flex flex-col items-center gap-3">
            <CTAButton href="/get-started" variant="funnel" className={`px-10 py-5 text-lg group ${isGraphite ? "!bg-[#795238] hover:!bg-[#B0784E] !text-[#F4F0EC]" : ""}`}>
              Book a Discovery Call
              <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </CTAButton>
            <Link
              href="/pricing"
              className={`inline-flex items-center gap-2 ${isGraphite ? "text-[#AEA7A3] hover:text-[#B0784E]" : "text-stone hover:text-[#E85D26]"} font-sans font-semibold transition-colors group mt-2`}
            >
              See full pricing
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <p className={`${isGraphite ? "text-[#959595]" : "text-stone"} text-sm font-sans mt-3`}>
              No pressure. No obligation. Just a clearer path forward.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
