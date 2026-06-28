import {
  HardHat,
  Home,
  Truck,
  Droplets,
  Wrench,
  Zap,
  Wind,
  Trees,
  Building2,
  Activity,
  Stethoscope,
  Smile,
  Eye,
  Dumbbell,
  Scale,
  Calculator,
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const customerTypes = [
  { label: "Contractors", icon: HardHat },
  { label: "Home Builders", icon: Home },
  { label: "Excavation Companies", icon: Truck },
  { label: "Well Drillers", icon: Droplets },
  { label: "Plumbers", icon: Wrench },
  { label: "Electricians", icon: Zap },
  { label: "HVAC Companies", icon: Wind },
  { label: "Landscapers", icon: Trees },
  { label: "Real Estate Agents", icon: Building2 },
  { label: "Chiropractors", icon: Activity },
  { label: "Health Clinics", icon: Stethoscope },
  { label: "Dentists", icon: Smile },
  { label: "Optometrists", icon: Eye },
  { label: "Physical Therapists", icon: Dumbbell },
  { label: "Law Firms", icon: Scale },
  { label: "Accountants", icon: Calculator },
];

export function IndustriesSection() {
  return (
    <section className="bg-[#0f0f0f] py-16 md:py-20 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="h-px w-8 bg-[#E85D26]" aria-hidden="true" />
              <span className="text-[#E85D26] text-xs font-sans font-bold uppercase tracking-[0.28em]">
                Who We Work With
              </span>
              <span className="h-px w-8 bg-[#E85D26]" aria-hidden="true" />
            </div>
            <h2 className="text-2xl md:text-4xl font-display text-white mb-3">
              Trusted Across the Trades &amp; Beyond
            </h2>
            <p className="text-stone font-sans text-sm md:text-base leading-relaxed">
              From the field to the front office, we build for trust-based local
              businesses of every kind &mdash; these are just a few of the industries
              we serve.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-[repeat(2,auto)] sm:grid-cols-[repeat(3,auto)] lg:grid-cols-[repeat(4,auto)] gap-x-10 sm:gap-x-12 lg:gap-x-16 gap-y-6 md:gap-y-7">
              {customerTypes.map(({ label, icon: Icon }) => (
                <div key={label} className="flex items-center gap-3">
                  <Icon size={22} className="shrink-0 text-[#E85D26]" aria-hidden="true" />
                  <span className="font-sans text-sm md:text-[15px] font-semibold text-white/90">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-center text-stone/70 font-sans text-sm mt-8 max-w-xl mx-auto">
            Don&rsquo;t see your industry? If your business runs on trust and
            reputation, we can build for you too.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
