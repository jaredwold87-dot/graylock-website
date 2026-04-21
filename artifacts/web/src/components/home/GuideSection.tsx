import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Search, Compass, ShieldCheck, CheckCircle2 } from "lucide-react";

const points = [
  {
    icon: Search,
    title: "See the problems clearly",
    body: "We pinpoint exactly where your site is losing trust, traffic, and bookings.",
  },
  {
    icon: Compass,
    title: "Understand the right strategy",
    body: "No jargon — a plain-English plan built around your practice and your patients.",
  },
  {
    icon: ShieldCheck,
    title: "Move forward without the risk",
    body: "Free homepage demo first. No long-term contracts. 30-day money-back guarantee.",
  },
];

export function GuideSection() {
  return (
    <section className="relative py-20 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#f0f1f3] via-[#f4f5f7] to-[#edeef1]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300/60 to-transparent" />
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-orange/[0.06] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-navy/[0.05] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <ScrollReveal>
          <p className="text-orange font-sans font-semibold uppercase tracking-widest text-sm mb-4">
            A Trusted Guide
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-navy mb-6 leading-tight">
            You Do Not Need to Guess What Is Wrong With Your Website.
          </h2>
          <p className="text-charcoal/80 text-lg font-sans leading-relaxed">
            Most business owners know their website is holding them back, but they do not know exactly what to change or whether they can trust an agency to do it right. Graylock Digital helps you see the problems clearly, understand the right strategy, and move forward without the typical agency risk.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-orange/10 via-transparent to-navy/10 rounded-3xl blur-2xl pointer-events-none" />
            <div className="relative bg-white rounded-2xl border border-gray-200 shadow-[0_20px_60px_rgba(15,30,53,0.10)] overflow-hidden">
              <div className="bg-navy px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                </div>
                <p className="text-offwhite/70 font-sans text-xs tracking-widest uppercase">
                  Website Diagnostic
                </p>
                <span className="text-orange font-sans text-xs font-bold uppercase tracking-wider">
                  Live
                </span>
              </div>

              <div className="p-6 md:p-8 space-y-5">
                {points.map(({ icon: Icon, title, body }) => (
                  <div
                    key={title}
                    className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-orange/30 hover:shadow-sm transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-navy flex items-center justify-center text-orange shadow-md">
                      <Icon size={20} strokeWidth={2} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-sans font-bold text-navy text-base">
                          {title}
                        </h3>
                        <CheckCircle2 size={16} className="text-orange flex-shrink-0" />
                      </div>
                      <p className="text-charcoal/70 font-sans text-sm leading-relaxed">
                        {body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-navy via-[#152847] to-navy px-6 py-4 flex items-center justify-between">
                <p className="text-offwhite font-sans text-sm">
                  Diagnostic ready in <span className="font-bold text-orange">48 hours</span>
                </p>
                <span className="text-offwhite/60 font-sans text-xs">100% Free</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
