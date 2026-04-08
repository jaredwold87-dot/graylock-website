import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTAButton } from "@/components/ui/CTAButton";
import { Check } from "lucide-react";

const BASE = import.meta.env.BASE_URL;

const results = [
  "Consolidated two outdated websites into one polished, professional site",
  "Replaced phone-based intake with a structured online inquiry system",
  "Redesigned the homepage, provider pages, and patient experience from scratch",
];

export function CaseStudySection() {
  return (
    <section className="bg-charcoal py-28 px-6 md:px-12 border-t border-gunmetal relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal className="text-center mb-16">
          <p className="text-orange font-sans font-semibold uppercase tracking-widest text-sm mb-4">Featured Project</p>
          <h2 className="text-3xl md:text-5xl font-display text-offwhite mb-4">
            See What We Built for West Coast Eye Institute
          </h2>
          <p className="text-stone text-lg font-sans max-w-2xl mx-auto leading-relaxed">
            A real project. A real transformation. Here's how we took an outdated, confusing web presence and turned it into a modern patient acquisition engine.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollReveal delay={0.1}>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-display text-offwhite mb-3">The Challenge</h3>
                <p className="text-stone font-sans leading-relaxed">
                  West Coast Eye Institute had two separate, outdated websites creating confusion for patients and extra work for staff. The intake process relied entirely on phone calls — leading to missed calls, phone tag, and lost new-patient opportunities.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-display text-offwhite mb-4">What We Delivered</h3>
                <ul className="space-y-3">
                  {results.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange/15 flex items-center justify-center mt-0.5 border border-orange/20">
                        <Check className="text-orange" size={13} />
                      </div>
                      <span className="text-offwhite/90 font-sans text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <CTAButton href="/get-started">
                  Book Your Free Website Review
                </CTAButton>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="space-y-6">
              <div className="relative">
                <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-orange/10 via-transparent to-orange/5 blur-xl pointer-events-none" />
                <div className="relative bg-navy rounded-xl border border-gunmetal overflow-hidden p-1.5">
                  <div className="flex items-center gap-1.5 px-2 py-1.5 mb-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500/50" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                    <div className="w-2 h-2 rounded-full bg-green-500/50" />
                    <span className="ml-2 text-[10px] text-stone/40 font-sans">westcoasteyeinstitute.com</span>
                  </div>
                  <img
                    src={`${BASE}mockup-laptop-after.png`}
                    alt="West Coast Eye Institute — after redesign"
                    className="w-full rounded-md"
                    loading="lazy"
                  />
                </div>
                <div className="text-center mt-3">
                  <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-orange">After</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative bg-navy rounded-xl border border-gunmetal overflow-hidden p-1.5">
                  <img
                    src={`${BASE}mockup-laptop-before.png`}
                    alt="West Coast Eye Institute — before redesign"
                    className="w-full rounded-md opacity-60"
                    loading="lazy"
                  />
                  <div className="text-center mt-2 pb-1">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-stone/60">Before — Desktop</span>
                  </div>
                </div>
                <div className="relative bg-navy rounded-xl border border-gunmetal overflow-hidden p-1.5 flex flex-col items-center">
                  <img
                    src={`${BASE}mockup-phone-after.png`}
                    alt="West Coast Eye Institute — mobile view"
                    className="w-auto h-44 rounded-md object-cover object-top"
                    loading="lazy"
                  />
                  <div className="text-center mt-2 pb-1">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-orange/80">After — Mobile</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
