import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Download, BookOpen, CheckCircle2 } from "lucide-react";
import { LeadMagnetModal } from "./LeadMagnetModal";
import playbookCover from "@assets/The_Private_Practice_Series_The_WebsitePlaybook._Five_reasons__1776705489416.png";

export function LeadMagnetSection() {
  const [open, setOpen] = useState(false);

  const bullets = [
    "The 5 reasons most private practice websites quietly lose patients",
    "How to position your practice so visitors actually take the next step",
    "The local SEO foundation every single-location practice needs in 2026",
    "Plain-English fixes you can ask any developer to make today",
  ];

  return (
    <section className="relative py-24 px-6 md:px-12 bg-navy overflow-hidden border-t border-gunmetal/50">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange/10 border border-orange/30 mb-5">
              <BookOpen className="text-orange" size={16} />
              <span className="text-orange text-xs font-sans font-bold uppercase tracking-widest">Free Download</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display text-offwhite mb-5 leading-tight">
              Is Your Website Losing You Patients?
            </h2>
            <p className="text-stone text-lg font-sans leading-relaxed mb-7">
              Get the free guide private practice owners are using to spot the silent leaks costing them new patients every month — and the plain-English fixes that turn a tired website back into a steady source of bookings.
            </p>

            <ul className="space-y-3 mb-8">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-orange flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-stone font-sans">{b}</span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="cta-shimmer inline-flex items-center gap-2 bg-orange hover:bg-orange/90 text-white font-sans font-bold text-base px-8 py-4 rounded shadow-[0_4px_14px_rgba(46,123,180,0.25)] hover:shadow-[0_6px_24px_rgba(46,123,180,0.4)] hover:-translate-y-0.5 transition-all duration-300"
              data-testid="button-open-lead-magnet"
            >
              <Download size={18} />
              Download the Free Guide
            </button>
            <p className="text-stone/60 text-sm font-sans mt-3">
              Instant PDF download. No credit card. Unsubscribe anytime.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="relative">
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-orange/25 via-transparent to-orange/10 blur-2xl pointer-events-none" />
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="relative block w-full group rounded-2xl overflow-hidden shadow-2xl shadow-black/40 hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
                aria-label="Download the free Private Practice Website Playbook"
              >
                <img
                  src={playbookCover}
                  alt="The Private Practice Website Playbook by Graylock Digital — free guide cover"
                  className="w-full h-auto block"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                  <span className="bg-orange text-white font-sans font-bold text-sm px-5 py-2.5 rounded-full inline-flex items-center gap-2">
                    <Download size={16} />
                    Download Free PDF
                  </span>
                </div>
              </button>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <LeadMagnetModal open={open} onClose={() => setOpen(false)} />
    </section>
  );
}
