import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Download, BookOpen } from "lucide-react";
import { LeadMagnetModal } from "./LeadMagnetModal";
import playbookCover from "@assets/playbook_cover_no_bg.png";

export function LeadMagnetSection() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative py-24 px-6 md:px-12 bg-offwhite border-t border-gray-200 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <ScrollReveal>
            <div className="relative flex justify-center lg:justify-start">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="relative block w-full max-w-md group cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
                aria-label="Download the free Private Practice Website Playbook"
              >
                <img
                  src={playbookCover}
                  alt="The Private Practice Website Playbook by Graylock Digital — free guide cover"
                  className="w-full h-auto block"
                  style={{
                    filter:
                      "drop-shadow(0 18px 30px rgba(15, 30, 53, 0.22)) drop-shadow(0 6px 12px rgba(15, 30, 53, 0.12))",
                  }}
                  loading="lazy"
                  decoding="async"
                />
              </button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange/10 border border-orange/30 mb-5">
              <BookOpen className="text-orange" size={16} />
              <span className="text-orange text-xs font-sans font-bold uppercase tracking-widest">Free Download</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display text-charcoal mb-5 leading-tight">
              Is Your Website Losing You Patients?
            </h2>
            <p className="text-stone text-lg font-sans leading-relaxed mb-8">
              Get the free guide private practice owners are using to spot the silent leaks costing them new patients every month — and the plain-English fixes that turn a tired website back into a steady source of bookings.
            </p>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="cta-shimmer inline-flex items-center gap-2 bg-orange hover:bg-orange/90 text-white font-sans font-bold text-base px-8 py-4 rounded shadow-[0_4px_14px_rgba(46,123,180,0.25)] hover:shadow-[0_6px_24px_rgba(46,123,180,0.4)] hover:-translate-y-0.5 transition-all duration-300"
              data-testid="button-open-lead-magnet"
            >
              <Download size={18} />
              Download the Free Guide
            </button>
            <p className="text-stone/70 text-sm font-sans mt-3">
              Instant PDF download. No credit card. Unsubscribe anytime.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <LeadMagnetModal open={open} onClose={() => setOpen(false)} />
    </section>
  );
}
