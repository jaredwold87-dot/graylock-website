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
    <section className="bg-[#0f0f0f] py-20 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">

        <ScrollReveal>
          <p className="text-[#E85D26] font-sans font-bold uppercase tracking-[0.2em] text-sm mb-4">Client Dashboard</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-white mb-6 leading-tight">
            Easy Updates Without the Usual Back-and-Forth
          </h2>
          <p className="text-stone text-lg font-sans leading-relaxed mb-10 max-w-2xl mx-auto">
            The Growth and Scale plans ($299/mo and up) include a simple dashboard for managing the essentials, while we still handle the heavier updates and ongoing support behind the scenes.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {bullets.map((b, i) => (
              <div key={i} className="bg-white/[0.03] border border-white/10 rounded-xl p-5 flex flex-col items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#E85D26]/10 flex items-center justify-center border border-[#E85D26]/20">
                  <b.icon size={18} className="text-[#E85D26]" />
                </div>
                <p className="text-white font-sans text-sm leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
