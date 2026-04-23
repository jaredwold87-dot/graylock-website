import { Link } from "wouter";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTAButton } from "@/components/ui/CTAButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function OtherServiceBusinesses() {
  return (
    <>
      <SEO
        title="Websites for Service Businesses — Graylock Digital"
        description="Custom websites for law firms, consultants, home service companies, and other professional services where trust and local visibility drive revenue."
        path="/other-service-businesses"
      />

      <section className="bg-charcoal pt-32 md:pt-40 pb-24 px-6 md:px-12 relative overflow-hidden border-b border-gunmetal">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <div className="max-w-3xl mx-auto relative z-10 mb-8">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Other Service Businesses", path: "/other-service-businesses" },
            ]}
          />
        </div>

        <div className="max-w-3xl mx-auto relative z-10">
          <ScrollReveal>
            <p className="text-orange font-sans font-semibold uppercase tracking-widest text-sm mb-4 text-center">
              Other Service Businesses
            </p>
            <h1 className="text-4xl md:text-6xl font-display text-offwhite mb-8 text-center leading-tight">
              Built for Any Business Where <span className="text-gradient">Trust</span> Drives Revenue
            </h1>
            <p className="text-stone text-lg md:text-xl font-sans leading-relaxed text-center mb-10">
              While we specialize in healthcare and finance, the Graylock framework is built for any business where trust, expertise, and local visibility drive revenue. If you sell a professional service, we can help.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="glass-card rounded-2xl p-8 md:p-10 mb-10">
              <h2 className="text-2xl md:text-3xl font-display text-offwhite mb-5">
                Who we regularly partner with
              </h2>
              <ul className="space-y-3 text-stone font-sans text-base md:text-lg">
                <li className="flex gap-3"><span className="text-orange flex-shrink-0">→</span> Law firms and solo attorneys</li>
                <li className="flex gap-3"><span className="text-orange flex-shrink-0">→</span> Consultants and coaches</li>
                <li className="flex gap-3"><span className="text-orange flex-shrink-0">→</span> Home service companies (HVAC, roofing, plumbing, electrical, landscaping)</li>
                <li className="flex gap-3"><span className="text-orange flex-shrink-0">→</span> B2B agencies and professional service providers</li>
                <li className="flex gap-3"><span className="text-orange flex-shrink-0">→</span> Local specialty shops and trust-based retail</li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="text-stone font-sans text-base md:text-lg leading-relaxed mb-10 text-center">
              Same pricing. Same 7–10 business day build. Same custom design, dashboard, and dedicated account manager. If your prospects size you up online before they ever pick up the phone, you'll benefit from the Graylock approach.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="text-center">
            <CTAButton href="/get-started">
              Get a Free Demo
            </CTAButton>
            <p className="text-stone/70 font-sans text-sm mt-5">
              Or browse our <Link href="/pricing" className="text-orange hover:underline underline-offset-4 decoration-2">pricing plans</Link>
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
