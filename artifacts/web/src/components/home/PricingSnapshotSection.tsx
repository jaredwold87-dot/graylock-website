import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export function PricingSnapshotSection() {
  return (
    <section className="relative py-20 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#f0f1f3] via-[#f4f5f7] to-[#edeef1]" />
      <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.04) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300/60 to-transparent" />

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <ScrollReveal>
          <p className="text-orange font-sans font-semibold uppercase tracking-widest text-sm mb-4">Pricing</p>
          <h2 className="text-3xl md:text-4xl font-display text-charcoal mb-5">
            Plans start at $199/mo
          </h2>
          <p className="text-stone text-lg font-sans leading-relaxed mb-8">
            Flat monthly rate. No long-term contracts. Hosting, support, and ongoing maintenance included.
          </p>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 text-charcoal hover:text-orange font-sans font-semibold transition-colors group"
          >
            See full pricing
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
