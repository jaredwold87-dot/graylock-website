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
    <section className="relative bg-[#f5f5f4] py-16 md:py-24 px-6 md:px-12 border-t border-gray-100 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <p className="text-[#B23E16] font-sans font-bold uppercase tracking-[0.2em] text-sm mb-4">Featured Project</p>
          <h2 className="text-3xl md:text-4xl font-display text-[#1a202c] mb-6 leading-tight">
            What This Looks Like in Practice
          </h2>
          <p className="text-[#4a5568] text-base md:text-lg font-sans leading-relaxed">
            A recent client came to us with an outdated, confusing website that made it harder for patients to take the next step.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollReveal delay={0.1}>
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md">
              <div className="grid grid-cols-2 text-center text-xs font-sans font-bold uppercase tracking-[0.2em]">
                <div className="p-4 border-b border-r border-gray-200 text-[#4a5568]">Before</div>
                <div className="p-4 border-b border-gray-200 bg-[#E85D26]/5 text-[#B23E16]">After</div>
              </div>
              {transformations.map((row, i) => (
                <div key={i} className="grid grid-cols-2">
                  <div className="p-5 border-b border-r border-gray-200 last:border-b-0 text-[#4a5568] font-sans text-sm leading-relaxed">
                    {row.before}
                  </div>
                  <div className="p-5 border-b border-gray-200 last:border-b-0 bg-[#E85D26]/5 text-[#1a202c] font-sans text-sm leading-relaxed flex items-start gap-2">
                    <ArrowRight className="text-[#E85D26] flex-shrink-0 mt-0.5" size={16} />
                    <span>{row.after}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <CTAButton href="/get-started" variant="funnel" className="px-5 py-3 text-sm whitespace-nowrap">
                Book a Discovery Call
              </CTAButton>
              <CTAButton href="/featured-projects" variant="funnelOutline" className="px-5 py-3 text-sm whitespace-nowrap">
                View Our Other Projects
              </CTAButton>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="relative">
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-[#E85D26]/20 via-transparent to-[#E85D26]/10 blur-2xl pointer-events-none" />
              <img
                src={`${BASE}case-study-eye-institute.webp`}
                alt="West Coast Eye Institute — a Graylock Digital website shown on laptop and phone"
                className="relative w-full h-auto"
                loading="lazy"
                decoding="async"
              />
              <div className="text-center mt-3">
                <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#B23E16]">After Redesign — West Coast Eye Institute</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
