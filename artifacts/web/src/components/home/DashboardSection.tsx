import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { BarChart3, Inbox, Megaphone, Send } from "lucide-react";

const bullets = [
  { icon: BarChart3, text: "View website traffic analytics" },
  { icon: Inbox, text: "Track inquiry activity in real time" },
  { icon: Megaphone, text: "Add and edit your announcement bar" },
  { icon: Send, text: "Submit support requests easily" },
];

export function DashboardSection() {
  return (
    <section className="bg-navy py-20 px-6 md:px-12 border-t border-gunmetal">
      <div className="max-w-4xl mx-auto text-center">

        <ScrollReveal>
          <p className="text-orange font-sans font-semibold uppercase tracking-widest text-sm mb-4">Client Dashboard</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-offwhite mb-6 leading-tight">
            Easy Updates Without the Usual Back-and-Forth
          </h2>
          <p className="text-stone text-lg font-sans leading-relaxed mb-10 max-w-2xl mx-auto">
            Every Graylock site includes a simple dashboard for managing the essentials, while we still handle the heavier updates and ongoing support behind the scenes.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {bullets.map((b, i) => (
              <div key={i} className="bg-charcoal/60 border border-gunmetal rounded-xl p-5 flex flex-col items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-orange/10 flex items-center justify-center border border-orange/10">
                  <b.icon size={18} className="text-orange" />
                </div>
                <p className="text-offwhite font-sans text-sm leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
