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
              <div
                key={i}
                className="bg-offwhite border border-gray-200 rounded-xl p-5 flex flex-col items-center gap-3 shadow-[0_10px_30px_rgba(0,0,0,0.25)] hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(46,123,180,0.25)] transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-orange flex items-center justify-center shadow-md">
                  <b.icon size={20} className="text-white" />
                </div>
                <p className="text-charcoal font-sans text-sm font-medium leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
