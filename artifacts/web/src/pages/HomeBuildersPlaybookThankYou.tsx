import { SEO } from "@/components/SEO";
import { FunnelMetaPixel, FunnelShell } from "@/components/funnel/FunnelHead";
import { CTAButton } from "@/components/ui/CTAButton";
import { Play, ShieldCheck, MapPin, Clock } from "lucide-react";

export default function HomeBuildersPlaybookThankYou() {
  return (
    <>
      <SEO
        title="Your Playbook Is On Its Way | Graylock Digital"
        description="Your free Home Builder Website Playbook is on its way. While you wait, see how we help builders turn their websites into their #1 source of high-quality leads."
        url="https://graylockdigital.com/home-builders-playbook/thank-you"
        noindex
      />
      <FunnelMetaPixel />
      <FunnelShell>
        <section className="bg-navy px-6 md:px-12 py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display text-white leading-[1.15] mb-4">
              Your Playbook Is On Its Way!{" "}
              <span className="text-orange">
                (Check your inbox in 2 minutes)
              </span>
            </h1>
            <p className="text-offwhite/80 font-sans text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              While you wait, watch this short video to see how we are helping
              home builders turn their websites into their #1 source of
              high-quality leads...
            </p>
            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-[#0a1424] border border-white/10 shadow-2xl shadow-black/50">
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-orange/90 flex items-center justify-center mb-4 shadow-lg">
                  <Play size={32} className="text-white ml-1" fill="white" />
                </div>
                <p className="text-white/60 font-sans text-sm">
                  Video coming soon
                </p>
              </div>
            </div>
            <p className="mt-4 text-white/50 font-sans text-xs">
              Didn't get the email? Check spam, or{" "}
              <a
                href="/home-builders-playbook.pdf"
                className="text-orange hover:underline"
                target="_blank"
                rel="noopener"
              >
                download the playbook directly
              </a>
              .
            </p>
          </div>
        </section>

        <section className="bg-[#152847] px-6 md:px-12 py-16 md:py-24 border-y border-white/5">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-display text-white leading-tight mb-5">
              Want to see what a high-converting website would look like for
              your firm?
            </h2>
            <p className="text-white/85 font-sans text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              We do something most agencies won't. We will build you a custom
              homepage demo — completely free — before you ever spend a dollar
              with us. You can see the strategy, see the design, and decide if
              it's right for you.
            </p>
            <CTAButton href="/get-started" className="px-8 py-5 text-base md:text-lg">
              Yes, Claim My Free Homepage Demo →
            </CTAButton>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                {
                  icon: ShieldCheck,
                  text: "No obligation. No high-pressure sales pitch.",
                },
                { icon: MapPin, text: "100% U.S.-Based Team" },
                {
                  icon: Clock,
                  text: "Custom sites built in 7-10 business days.",
                },
              ].map((b, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-2 text-center"
                >
                  <b.icon className="text-orange" size={22} />
                  <p className="text-white/85 font-sans text-sm leading-snug">
                    {b.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FunnelShell>
    </>
  );
}
