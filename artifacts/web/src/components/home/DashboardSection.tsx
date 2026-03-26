import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTAButton } from "@/components/ui/CTAButton";
import { BarChart3, Clock, Phone, Megaphone, Send, Eye } from "lucide-react";

const dashboardFeatures = [
  { icon: BarChart3, title: "View Website Traffic", desc: "See how many visitors your site gets, which pages they view, and how they find you." },
  { icon: Clock, title: "Update Business Hours", desc: "Change your hours instantly — holidays, seasonal adjustments, whatever you need." },
  { icon: Phone, title: "Edit Phone & Address", desc: "Update your contact info the moment it changes. No waiting on anyone." },
  { icon: Megaphone, title: "Post a Message Banner", desc: "Add an announcement bar to your site — promotions, closures, or important updates." },
  { icon: Eye, title: "Track Lead Activity", desc: "See when visitors submit inquiries so you know exactly what's coming in." },
  { icon: Send, title: "Submit Update Requests", desc: "Need a bigger change? Submit a request right from your dashboard — fast and easy." },
];

export function DashboardSection() {
  return (
    <section className="bg-navy py-24 px-6 md:px-12 border-t border-gunmetal">
      <div className="max-w-7xl mx-auto">

        <ScrollReveal className="text-center mb-6">
          <p className="text-orange font-sans font-semibold uppercase tracking-widest text-sm mb-4">Standard & Growth Plans</p>
          <h2 className="text-3xl md:text-5xl font-display text-offwhite mb-6">
            More Control, Without the Headache
          </h2>
          <p className="text-stone text-lg font-sans max-w-2xl mx-auto leading-relaxed">
            Most small business owners have to call or email someone every time they need a simple update. Our Standard and Growth plans include a personalized dashboard that puts the essentials at your fingertips.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 mt-16">

          <div className="lg:col-span-3 order-2 lg:order-1">
            <ScrollReveal delay={0.1}>
              <div className="bg-charcoal rounded-2xl border border-gunmetal overflow-hidden shadow-2xl">
                <div className="bg-charcoal border-b border-gunmetal px-6 py-4 flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
                  </div>
                  <span className="text-stone/60 text-xs font-sans ml-2">dashboard.graylockdigital.com</span>
                </div>

                <div className="p-6 md:p-8 space-y-6">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-display text-offwhite text-xl">Your Business Dashboard</h4>
                    <span className="text-xs text-stone bg-navy px-3 py-1 rounded-full border border-gunmetal">Live</span>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-navy rounded-xl p-4 border border-gunmetal text-center">
                      <div className="text-2xl md:text-3xl font-display text-orange">342</div>
                      <div className="text-stone text-xs font-sans mt-1">Visitors This Month</div>
                    </div>
                    <div className="bg-navy rounded-xl p-4 border border-gunmetal text-center">
                      <div className="text-2xl md:text-3xl font-display text-orange">18</div>
                      <div className="text-stone text-xs font-sans mt-1">New Inquiries</div>
                    </div>
                    <div className="bg-navy rounded-xl p-4 border border-gunmetal text-center">
                      <div className="text-2xl md:text-3xl font-display text-orange">4.2s</div>
                      <div className="text-stone text-xs font-sans mt-1">Avg. Page Load</div>
                    </div>
                  </div>

                  <div className="bg-navy rounded-xl p-5 border border-gunmetal">
                    <div className="flex items-center justify-between mb-4">
                      <h5 className="text-offwhite font-sans font-semibold text-sm">Quick Edit: Business Info</h5>
                      <span className="text-orange text-xs font-sans font-semibold cursor-pointer">Save Changes</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="bg-charcoal rounded-lg px-4 py-3 border border-gunmetal">
                        <div className="text-stone/60 text-[10px] uppercase tracking-wider font-sans mb-1">Phone</div>
                        <div className="text-offwhite text-sm font-sans">(555) 867-5309</div>
                      </div>
                      <div className="bg-charcoal rounded-lg px-4 py-3 border border-gunmetal">
                        <div className="text-stone/60 text-[10px] uppercase tracking-wider font-sans mb-1">Hours</div>
                        <div className="text-offwhite text-sm font-sans">Mon–Fri 8am–5pm</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-navy rounded-xl p-5 border border-gunmetal">
                    <div className="flex items-center justify-between mb-3">
                      <h5 className="text-offwhite font-sans font-semibold text-sm">Announcement Banner</h5>
                      <div className="w-9 h-5 bg-orange rounded-full relative">
                        <div className="w-4 h-4 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                      </div>
                    </div>
                    <div className="bg-charcoal rounded-lg px-4 py-3 border border-gunmetal">
                      <div className="text-offwhite text-sm font-sans">Now accepting new clients — book a free consultation!</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-2 order-1 lg:order-2 flex flex-col justify-center">
            <ScrollReveal delay={0.2}>
              <div className="space-y-6">
                {dashboardFeatures.map((feat, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-orange/10 flex items-center justify-center">
                      <feat.icon size={20} className="text-orange" />
                    </div>
                    <div>
                      <h4 className="text-offwhite font-sans font-semibold mb-1">{feat.title}</h4>
                      <p className="text-stone text-sm font-sans leading-relaxed">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <CTAButton href="/pricing">
                  See Plans With Dashboard Access
                </CTAButton>
              </div>
            </ScrollReveal>
          </div>

        </div>

        <ScrollReveal delay={0.4} className="mt-20">
          <div className="bg-charcoal rounded-2xl border border-gunmetal p-8 md:p-10 text-center max-w-3xl mx-auto">
            <p className="text-offwhite font-sans text-lg leading-relaxed">
              <span className="text-orange font-semibold">Most small business websites are hard to update.</span>{" "}
              Owners have to wait on someone else for every little change. Our Standard and Growth plans give you a cleaner, easier way to manage the essentials — while we still handle the heavy lifting.
            </p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
