import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import aboutHeroBg from "@/assets/about-hero-bg.webp";

/**
 * Shared cinematic page header — mountain background, stacked uppercase
 * headline with orange "Elevated." line, subheadline, and Discovery Call CTA.
 * Used on /about and /services so both pages carry the same header.
 */
export function ElevatedHero() {
  return (
    <section
      className="relative min-h-[70vh] md:min-h-[65vh] flex items-center justify-center px-6 md:px-12 py-24 overflow-hidden"
      style={{
        backgroundImage: `url(${aboutHeroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(10, 10, 10, 0.65)" }} />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <ScrollReveal>
          <h1 className="font-display font-bold uppercase text-white text-5xl md:text-7xl lg:text-8xl leading-[0.98] tracking-[-0.02em] mb-8">
            <span className="block">Your Website.</span>
            <span className="block">Your Reputation.</span>
            <span className="block text-[#E85D26]">Elevated.</span>
          </h1>
          <p className="text-white/85 font-sans text-lg md:text-xl leading-relaxed mb-10 max-w-3xl mx-auto">
            You built something real. Your website should reflect it. We design, build, and maintain conversion-focused websites for serious businesses — from healthcare practices to home builders to professional service firms — all in 7–10 days.
          </p>
          <Link
            href="/get-started"
            className="inline-flex items-center gap-3 bg-[#E85D26] text-white font-sans font-bold uppercase tracking-[0.18em] text-sm px-8 py-4 rounded-none hover:bg-[#c94f20] transition-colors"
          >
            Book a Discovery Call
            <ArrowRight size={16} />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
