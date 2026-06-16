import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export function PricingSnapshotSection() {
  return (
    <section className="bg-[#0f0f0f] py-20 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <p className="text-[#E85D26] font-sans font-bold uppercase tracking-[0.2em] text-sm mb-4">Pricing</p>
          <h2 className="text-3xl md:text-4xl font-display text-white mb-5">
            Plans start at $199/mo
          </h2>
          <p className="text-stone text-lg font-sans leading-relaxed mb-3">
            Flat monthly rate. No long-term contracts. Hosting, support, and ongoing maintenance included.
          </p>
          <p className="text-stone font-sans text-sm md:text-base mb-8">
            Plus our <span className="font-semibold text-white">Stay-Current Guarantee</span> — a free website refresh every 2 years.
          </p>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 text-white hover:text-[#E85D26] font-sans font-semibold transition-colors group"
          >
            See full pricing
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
