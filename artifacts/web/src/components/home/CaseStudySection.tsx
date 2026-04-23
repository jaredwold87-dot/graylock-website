import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTAButton } from "@/components/ui/CTAButton";
import { ArrowRight } from "lucide-react";

const BASE = import.meta.env.BASE_URL;

const transformations = [
  {
    before: "Two outdated websites creating confusion",
    after: "One clear, professional website",
  },
  {
    before: "Phone-only intake causing missed opportunities",
    after: "Structured online inquiry flow",
  },
  {
    before: "Inconsistent presentation and weak messaging",
    after: "Clearer positioning and stronger trust",
  },
];

export function CaseStudySection() {
  return (
    <section className="relative py-28 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#f0f1f3] via-[#f4f5f7] to-[#edeef1]" />
      <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.04) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300/60 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal className="text-center mb-14 max-w-3xl mx-auto">
          <p className="text-orange font-sans font-semibold uppercase tracking-widest text-sm mb-4">Featured Project</p>
          <h2 className="text-3xl md:text-5xl font-display text-charcoal mb-6">
            What This Looks Like in Practice
          </h2>
          <p className="text-stone text-lg font-sans leading-relaxed">
            A recent client came to us with an outdated, confusing website that made it harder for the people they serve to take the next step.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollReveal delay={0.1}>
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.04)]">
              <div className="grid grid-cols-2 text-center text-xs font-sans font-bold uppercase tracking-[0.2em]">
                <div className="p-4 border-b border-r border-gray-200 text-stone/60">Before</div>
                <div className="p-4 border-b border-gray-200 bg-orange/5 text-orange">After</div>
              </div>
              {transformations.map((row, i) => (
                <div key={i} className="grid grid-cols-2">
                  <div className="p-5 border-b border-r border-gray-200 last:border-b-0 text-charcoal/70 font-sans text-sm leading-relaxed">
                    {row.before}
                  </div>
                  <div className="p-5 border-b border-gray-200 last:border-b-0 bg-orange/5 text-charcoal font-sans text-sm leading-relaxed flex items-start gap-2">
                    <ArrowRight className="text-orange flex-shrink-0 mt-0.5" size={16} />
                    <span>{row.after}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <CTAButton href="/get-started">
                Get a Free Demo
              </CTAButton>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="relative">
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-orange/15 via-transparent to-orange/10 blur-2xl pointer-events-none" />
              <img
                src={`${BASE}case-study-eye-institute.png`}
                alt="West Coast Eye Institute — a Graylock Digital website shown on laptop and phone"
                className="relative w-full h-auto"
                loading="lazy"
                decoding="async"
              />
              <div className="text-center mt-3">
                <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-orange">After Redesign — West Coast Eye Institute</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
