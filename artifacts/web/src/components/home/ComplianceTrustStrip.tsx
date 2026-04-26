import { Shield, Lock, BadgeCheck, RefreshCw } from "lucide-react";

const items = [
  {
    icon: Shield,
    label: "Built to WCAG 2.1 AA accessibility standards",
  },
  {
    icon: Lock,
    label: "Privacy-first by default — multi-state compliant",
  },
  {
    icon: BadgeCheck,
    label: "Industry-specific advertising rules built in",
  },
  {
    icon: RefreshCw,
    label: "Ongoing compliance monitoring as rules change",
  },
];

export function ComplianceTrustStrip() {
  return (
    <section
      aria-label="Compliance commitments"
      className="relative py-6 md:py-7 px-6 md:px-12 overflow-hidden border-t border-b border-white/[0.06]"
      style={{ backgroundColor: "#0c1a2e" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-5">
          {items.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-start gap-3 text-left"
            >
              <span className="flex-shrink-0 w-9 h-9 rounded-md bg-orange/10 border border-orange/25 flex items-center justify-center text-orange mt-0.5">
                <Icon size={22} strokeWidth={2} />
              </span>
              <span className="text-stone font-sans text-sm leading-snug">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
