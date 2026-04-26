import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { LucideIcon } from "lucide-react";

export interface ComplianceItem {
  icon: LucideIcon;
  subheading: string;
  body: string | string[];
}

export interface ComplianceSectionProps {
  eyebrow?: string;
  heading: string;
  lead: string;
  items: ComplianceItem[];
  closing?: string;
}

export default function ComplianceSection({
  eyebrow,
  heading,
  lead,
  items,
  closing,
}: ComplianceSectionProps) {
  return (
    <section className="bg-white py-20 md:py-28 px-6 md:px-12 border-y border-gray-200">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal className="text-center mb-12 md:mb-14">
          {eyebrow && (
            <p className="text-orange text-xs font-sans font-bold uppercase tracking-widest mb-3">
              {eyebrow}
            </p>
          )}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-charcoal max-w-3xl mx-auto leading-[1.15]">
            {heading}
          </h2>
          <p className="text-gray-600 font-sans text-base md:text-lg max-w-3xl mx-auto mt-6 leading-relaxed">
            {lead}
          </p>
        </ScrollReveal>

        <div className="space-y-5 md:space-y-6">
          {items.map((item, i) => {
            const paragraphs = Array.isArray(item.body) ? item.body : [item.body];
            const Icon = item.icon;
            return (
              <ScrollReveal key={i} delay={i * 0.05}>
                <article className="bg-[#F8F9FB] border border-gray-200 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-5 md:gap-6 transition-colors duration-300 hover:border-orange/40">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-orange/10 border border-orange/20 rounded-xl flex items-center justify-center">
                      <Icon size={24} className="text-orange" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-sans font-bold text-charcoal text-lg md:text-xl mb-3">
                      {item.subheading}
                    </h3>
                    <div className="space-y-3">
                      {paragraphs.map((p, idx) => (
                        <p
                          key={idx}
                          className="text-gray-600 font-sans text-sm md:text-base leading-relaxed"
                        >
                          {p}
                        </p>
                      ))}
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>

        {closing && (
          <ScrollReveal className="text-center mt-12 md:mt-14">
            <p className="text-gray-600 font-sans text-base md:text-lg max-w-3xl mx-auto leading-relaxed italic">
              {closing}
            </p>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
