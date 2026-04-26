import { SEO } from "@/components/SEO";
import { PlaybookLeadForm } from "@/components/funnel/PlaybookLeadForm";
import { FunnelMetaPixel, FunnelShell } from "@/components/funnel/FunnelHead";
import bookCover from "@/assets/home-builders-book-cover.png";
import { Check } from "lucide-react";

const bullets = [
  "The #1 \u201Ctrust signal\u201D missing from most builder websites that makes clients choose the bigger corporate builder before you even get a chance to bid.",
  "Why your project gallery is probably repelling the exact high-end clients you want most \u2014 and the simple structural fix that changes everything.",
  "The \u201CContact Us\u201D mistake that 73% of construction websites make \u2014 and how to turn your site into an automated, 24/7 lead qualifier.",
  "Why relying on third-party lead platforms is a race to the bottom, and how to build an asset you actually own.",
  "The two-sentence \u201Ccredibility formula\u201D that top-performing builders use to convert skeptical visitors into booked estimates.",
];

export default function HomeBuildersPlaybook() {
  return (
    <>
      <SEO
        title="Free Website Playbook for Home Builders | Graylock Digital"
        description="Discover the 5 reasons your home builder website is losing you custom builds to larger competitors—and exactly how to fix them. Download the free playbook."
        url="https://graylockdigital.com/home-builders-playbook"
      />
      <FunnelMetaPixel />
      <FunnelShell showLegal>
        <section className="bg-navy px-6 md:px-12 pt-10 pb-16 md:pt-16 md:pb-24">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="order-1 lg:order-1">
              <p className="text-orange text-sm font-sans font-bold uppercase tracking-widest mb-4">
                Free Playbook for Custom Home Builders:
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-display text-white leading-[1.1] mb-5">
                Five Reasons Your Home Builder Website Is Losing You Custom
                Builds to Larger Competitors{" "}
                <span className="text-orange">
                  — And Exactly How to Fix Each One.
                </span>
              </h1>
              <p className="text-offwhite/80 font-sans text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                Stop losing high-end clients because your portfolio site doesn't
                convert. Discover the hidden mistakes turning away serious
                buyers before they ever call you.
              </p>
              <div className="hidden lg:block">
                <PlaybookLeadForm variant="dark" />
              </div>
            </div>

            <div className="order-2 lg:order-2 flex justify-center">
              <div className="relative w-full max-w-sm">
                <img
                  src={bookCover}
                  alt="The Home Builder Growth Series: The Website Playbook"
                  className="w-full h-auto drop-shadow-[0_30px_50px_rgba(0,0,0,0.55)] funnel-float"
                  loading="eager"
                  decoding="async"
                />
                <div className="absolute -inset-8 bg-orange/10 rounded-full blur-3xl -z-10" />
              </div>
            </div>

            <div className="order-3 lg:hidden">
              <PlaybookLeadForm variant="dark" />
            </div>
          </div>
        </section>

        <section className="bg-[#f7f8fa] px-6 md:px-12 py-16 md:py-24">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-display text-[#1a1a1a] text-center mb-10 leading-tight">
              Inside this free 12-page playbook, you'll discover:
            </h2>
            <ul className="space-y-5">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-orange/15 flex items-center justify-center mt-0.5">
                    <Check size={16} className="text-orange" strokeWidth={3} />
                  </span>
                  <p className="text-[#1a1a1a] font-sans text-base md:text-lg leading-relaxed">
                    {b}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-[#152847] px-6 md:px-12 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-display text-white mb-5 leading-tight">
              Built for Builders Who Want to Scale
            </h2>
            <p className="text-white/85 font-sans text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-12">
              This playbook was written specifically for custom home builders
              and design-build firms who know their website needs work but
              don't have the time to guess what actually drives leads. If you
              want your website to attract serious, high-budget projects
              instead of tire-kickers, this is for you.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
              {[
                { v: "3x", l: "Increase in Qualified Inquiries" },
                { v: "40%", l: "Decrease in Bounce Rate" },
                { v: "Page 1", l: "Local Rankings" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="bg-white/5 border border-white/10 rounded-xl p-6"
                >
                  <div className="text-orange font-display text-3xl md:text-4xl font-bold mb-1">
                    {s.v}
                  </div>
                  <div className="text-white/80 font-sans text-sm">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-navy px-6 md:px-12 py-16 md:py-24">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-display text-white mb-6">
              Ready to fix your website?
            </h3>
            <div className="flex justify-center">
              <PlaybookLeadForm
                variant="dark"
                buttonLabel="Yes, Send Me the Free Playbook →"
              />
            </div>
          </div>
        </section>
      </FunnelShell>
    </>
  );
}
