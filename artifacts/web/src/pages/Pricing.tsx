import { SEO } from "@/components/SEO";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { HeroBackgroundImage } from "@/components/ui/HeroBackgroundImage";
import { PricingSection } from "@/components/home/PricingSection";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";
import { Check, Minus, Shield, Activity, Headphones, BarChart3, Server, Lock, FileCheck, Globe, Image as ImageIcon, Package, ShieldCheck, RefreshCw, Sparkles, Camera, Gauge } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Pricing() {
  const featureRows = [
    { name: "Pages Included", solo: "8", group: "15", enterprise: "20+", custom: "Custom" },
    { name: "Provider Bio Pages", solo: "1", group: "Up to 5", enterprise: "Up to 10", custom: "Unlimited" },
    { name: "SEO Funnel Pages", solo: "3", group: "10", enterprise: "20", custom: "Custom" },
    { name: "Mobile-First Design", solo: true, group: true, enterprise: true, custom: true },
    { name: "Hosting & SSL", solo: true, group: true, enterprise: true, custom: true },
    { name: "Google Business Profile", solo: true, group: true, enterprise: true, custom: true },
    { name: "Local SEO", solo: "Foundation", group: "Full", enterprise: "Advanced + Multi-Location", custom: "Custom" },
    { name: "Lead Capture Form", solo: "Basic", group: "Enhanced", enterprise: "Advanced", custom: "Custom" },
    { name: "Dashboard Access", solo: true, group: true, enterprise: true, custom: true },
    { name: "Dedicated Account Manager", solo: true, group: true, enterprise: true, custom: true },
    { name: "Site Update Hours", solo: "1 hr/quarter", group: "1 hr/month", enterprise: "2 hrs/month", custom: "Custom", footnote: "Additional updates billed at $100/hr — quoted and approved before any work begins" },
    { name: "Custom Integrations", solo: false, group: false, enterprise: true, custom: true },
    { name: "Daily Backups", solo: true, group: true, enterprise: true, custom: true },
    { name: "Priority Support", solo: false, group: true, enterprise: true, custom: true },
    { name: "Priority Build Queue", solo: false, group: false, enterprise: true, custom: true },
    { name: "Free Refresh Every 2 Years (Stay-Current Guarantee)", solo: true, group: true, enterprise: true, custom: true },
  ];

  type FeatureRow = { name: string; solo: boolean | string; group: boolean | string; enterprise: boolean | string; custom: boolean | string; footnote?: string };
  type CellValue = boolean | string;

  const renderCell = (val: CellValue, highlight?: boolean) => {
    if (typeof val === 'boolean') {
      return val 
        ? <Check className={`mx-auto ${highlight ? 'text-orange' : 'text-offwhite'}`} size={20}/> 
        : <Minus className="mx-auto text-gunmetal" size={20}/>;
    }
    return <span className={`${highlight ? 'text-orange font-semibold' : 'text-offwhite'} font-sans text-sm`}>{val}</span>;
  };

  return (
    <>
      <SEO title="Pricing | Practice Website Design Plans | Graylock Digital" description="Three flat monthly plans, one upfront setup fee, no long-term contracts. Starter from $199/mo, Growth from $299/mo, Scale from $449/mo. Hosting and updates included." url="https://graylockdigital.com/pricing" />
      
      <section className="relative py-32 md:py-40 px-6 md:px-12 text-offwhite overflow-hidden">
        <HeroBackgroundImage src={`${import.meta.env.BASE_URL}hero-pricing.png`} />
        <div className="absolute inset-0 bg-charcoal/90 md:bg-charcoal/75" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <p className="text-orange font-sans font-semibold uppercase tracking-widest text-sm mb-4">
              Pricing
            </p>
            <h1 className="text-4xl md:text-6xl font-display mb-6 leading-tight">Three plans. One flat fee. <span className="text-gradient">No surprises.</span></h1>
            <p className="text-lg md:text-xl font-sans text-stone leading-relaxed">A one-time site development fee, then a flat monthly rate that covers hosting, maintenance, security, and ongoing support. Month-to-month — never locked in.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-charcoal pt-16 pb-4 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange/40 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <ScrollReveal className="text-center mb-10">
            <p className="text-orange font-sans font-semibold uppercase tracking-widest text-xs md:text-sm mb-3">Included With Every Plan</p>
            <div className="inline-flex items-center gap-2 mb-4">
              <RefreshCw className="text-orange" size={22} />
              <h2 className="text-3xl md:text-5xl font-display text-offwhite leading-tight">Your Stay-Current Guarantee</h2>
            </div>
            <p className="text-stone text-lg md:text-xl font-sans max-w-2xl mx-auto leading-relaxed">
              Every 2 years, we refresh your website — free. Stay subscribed and your site never gets dated.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="bg-navy/70 border border-orange/30 rounded-2xl p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
                {[
                  { icon: <Sparkles className="text-orange" size={20} />, title: "Design refresh", desc: "Modern redesign of your homepage and key pages — current best practices, current style." },
                  { icon: <Camera className="text-orange" size={20} />, title: "New photos & copy", desc: "Swap in fresh photography and refreshed copy across the pages that matter most." },
                  { icon: <Gauge className="text-orange" size={20} />, title: "Performance retune", desc: "Mobile speed, Core Web Vitals, services, team, and offers — all brought back to current standards." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-orange/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-orange/20">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-offwhite font-display text-base mb-1">{item.title}</h3>
                      <p className="text-stone font-sans text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-stone/80 font-sans text-xs md:text-sm text-center mt-6 leading-relaxed">
                Out of scope: a brand-new identity/logo or net-new pages beyond your current site structure.{" "}
                <a href="/faq#pricing-plans" className="text-orange hover:underline">See full scope in the FAQ →</a>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <PricingSection hideHeader />

      <section className="bg-charcoal pt-12 pb-4 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="bg-navy/60 border border-orange/30 rounded-2xl p-6 md:p-8 text-center">
              <h3 className="text-xl md:text-2xl font-display text-offwhite mb-3">
                Not a medical practice or accounting firm?
              </h3>
              <p className="text-stone font-sans leading-relaxed mb-5 max-w-2xl mx-auto">
                We specialize in healthcare and professional services, but our model works for any service-based business that relies on trust and local visibility. We regularly build high-converting sites for law firms, consultants, home service companies, and B2B agencies.
              </p>
              <a
                href="/get-started"
                className="inline-flex items-center gap-2 text-orange font-sans font-semibold hover:underline"
              >
                Let's talk about your business →
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-navy py-16 px-6 border-t border-gunmetal md:hidden">
        <div className="max-w-md mx-auto">
          <ScrollReveal className="text-center mb-10">
            <h2 className="text-2xl font-display text-offwhite mb-3">Compare Plan Features</h2>
            <p className="text-stone/70 font-sans text-sm">Quick side-by-side of what is included on each plan.</p>
          </ScrollReveal>

          {[
            { key: "solo", name: "Starter", price: "$199/mo + $799 setup" },
            { key: "group", name: "Growth", price: "$299/mo + $999 setup", popular: true },
            { key: "enterprise", name: "Scale", price: "$449/mo + $1,499 setup" },
            { key: "custom", name: "Custom", price: "Custom quote" },
          ].map((plan) => (
            <ScrollReveal key={plan.key} className={cn(
              "rounded-2xl border mb-6 overflow-hidden",
              plan.popular ? "border-orange/50 bg-charcoal" : "border-gunmetal bg-charcoal/40"
            )}>
              <div className={cn(
                "px-5 py-4 border-b",
                plan.popular ? "bg-orange/10 border-orange/30" : "bg-navy/60 border-gunmetal"
              )}>
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className={cn("font-display text-xl", plan.popular ? "text-orange" : "text-offwhite")}>{plan.name}</h3>
                  {plan.popular && <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-orange">Most Popular</span>}
                </div>
                <p className="text-stone text-sm font-sans mt-1">{plan.price}</p>
              </div>
              <ul className="divide-y divide-gunmetal/40">
                {featureRows.map((row, i) => {
                  const val = row[plan.key as keyof typeof row] as boolean | string;
                  return (
                    <li key={i} className="flex items-start justify-between gap-4 px-5 py-3">
                      <span className="text-stone font-sans text-sm flex-1 leading-snug">{row.name}</span>
                      <span className="flex-shrink-0 text-right">
                        {typeof val === "boolean" ? (
                          val ? <Check className="text-orange ml-auto" size={18} /> : <Minus className="text-gunmetal ml-auto" size={18} />
                        ) : (
                          <span className="text-offwhite font-sans text-sm font-semibold">{val}</span>
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="bg-navy py-24 px-6 md:px-12 border-t border-gunmetal hidden md:block">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display text-offwhite mb-6">Compare Plan Features</h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="p-4 border-b border-gunmetal font-display text-xl text-stone w-1/5">Features</th>
                  <th className="p-4 border-b border-gunmetal font-display text-xl text-offwhite w-1/5 text-center">Starter<br/><span className="text-sm text-stone font-sans">$199/mo</span></th>
                  <th className="p-4 border-b border-gunmetal font-display text-xl text-orange w-1/5 text-center">Growth<br/><span className="text-sm text-stone font-sans">$299/mo</span></th>
                  <th className="p-4 border-b border-gunmetal font-display text-xl text-offwhite w-1/5 text-center">Scale<br/><span className="text-sm text-stone font-sans">$449/mo</span></th>
                  <th className="p-4 border-b border-gunmetal font-display text-xl text-offwhite w-1/5 text-center">Custom<br/><span className="text-sm text-stone font-sans">Contact Us</span></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gunmetal">
                {featureRows.map((row: FeatureRow, i: number) => (
                  <tr key={i} className="hover:bg-charcoal/50 transition-colors">
                    <td className="p-4 font-sans text-stone">
                      {row.name}
                      {row.footnote && (
                        <span className="block text-xs text-stone/50 mt-1 leading-snug">{row.footnote}</span>
                      )}
                    </td>
                    <td className="p-4 text-center">{renderCell(row.solo)}</td>
                    <td className="p-4 text-center bg-charcoal/20">{renderCell(row.group, true)}</td>
                    <td className="p-4 text-center">{renderCell(row.enterprise)}</td>
                    <td className="p-4 text-center">{renderCell(row.custom)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-charcoal py-24 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange/3 rounded-full blur-[150px] pointer-events-none" />
        <div className="section-divider absolute top-0 left-0 right-0" />

        <div className="max-w-5xl mx-auto relative z-10">
          <ScrollReveal className="text-center mb-16">
            <p className="text-orange font-sans font-semibold uppercase tracking-widest text-sm mb-4">What You're Actually Paying For</p>
            <h2 className="text-3xl md:text-5xl font-display text-offwhite mb-6">Your Monthly Fee, Broken Down</h2>
            <p className="text-stone text-lg font-sans max-w-2xl mx-auto">
              Your monthly fee isn't just "hosting." It's a full-service web team keeping your site fast, secure, and working for your practice every single day.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              { icon: <Server className="text-orange" size={22} />, title: "Premium Hosting", desc: "High-speed, enterprise-grade servers with 99.9% uptime — no shared hosting slowdowns." },
              { icon: <Lock className="text-orange" size={22} />, title: "SSL Certificate", desc: "The security padlock that keeps your site trusted by browsers and protects visitor data." },
              { icon: <Shield className="text-orange" size={22} />, title: "Security Monitoring", desc: "Weekly security scans, software updates, and proactive protection against vulnerabilities." },
              { icon: <Activity className="text-orange" size={22} />, title: "Uptime Monitoring", desc: "Daily uptime checks so we catch and fix issues before your visitors ever notice." },
              { icon: <BarChart3 className="text-orange" size={22} />, title: "Performance Reporting", desc: "Monthly reports on traffic, visitor behavior, and site performance — delivered to your dashboard." },
              { icon: <Headphones className="text-orange" size={22} />, title: "Priority Support", desc: "Content update requests handled promptly with a dedicated point of contact on our team." },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.08} className="bg-navy/80 border border-gunmetal/50 rounded-xl p-6 flex items-start gap-4">
                <div className="w-10 h-10 bg-orange/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-orange/10">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-offwhite font-display text-lg mb-1">{item.title}</h3>
                  <p className="text-stone font-sans text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      <section className="bg-navy py-24 px-6 md:px-12 relative overflow-hidden">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange/3 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <ScrollReveal className="text-center mb-16">
            <p className="text-orange font-sans font-semibold uppercase tracking-widest text-sm mb-4">No Lock-In</p>
            <h2 className="text-3xl md:text-5xl font-display text-offwhite mb-6">What You Own</h2>
            <p className="text-stone text-lg font-sans max-w-2xl mx-auto">
              You're never locked in. Here's exactly what belongs to you — during your plan and after.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              { icon: <Globe className="text-orange" size={22} />, title: "Your Domain", desc: "Registered in your name. We transfer it to wherever you choose — no questions asked." },
              { icon: <FileCheck className="text-orange" size={22} />, title: "Your Written Content", desc: "Every word of copy on every page. It's yours whether you stay or go." },
              { icon: <ImageIcon className="text-orange" size={22} />, title: "Your Images & Brand Assets", desc: "Photos, logos, brand elements — everything you provided for your brand." },
              { icon: <Lock className="text-orange" size={22} />, title: "No Long-Term Contracts", desc: "Month-to-month on every plan. Cancel with 30 days' notice — no penalties, no hassle." },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1} className="bg-charcoal/60 border border-gunmetal/50 rounded-xl p-6 flex items-start gap-4">
                <div className="w-10 h-10 bg-orange/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-orange/10">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-offwhite font-display text-lg mb-1">{item.title}</h3>
                  <p className="text-stone font-sans text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.5} className="max-w-3xl mx-auto text-center mt-8">
            <p className="text-stone/50 font-sans text-xs leading-relaxed">
              You own your domain, your written content, and your brand assets — always. The only thing we retain is the underlying code and hosting infrastructure, which is standard for any subscription-based web service. Cancel anytime with 30 days' notice — no cancellation fees.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-charcoal py-20 px-6 md:px-12 relative">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="bg-navy/60 border border-gunmetal/50 rounded-2xl p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-orange/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-orange/10">
                  <ShieldCheck className="text-orange" size={22} />
                </div>
                <h3 className="text-xl font-display text-offwhite">Privacy & Compliance</h3>
              </div>
              <p className="text-stone font-sans leading-relaxed mb-4">
                Our inquiry forms collect contact information only — name, phone, email, and a brief message. This is how most private practice websites handle initial contact, and it's intentionally simple.
              </p>
              <p className="text-stone font-sans leading-relaxed mb-4">
                If you use a HIPAA-compliant platform like SimplePractice, TherapyNotes, or Jane App, we link directly to your intake portals from your website. Your marketing site handles the first impression; your clinical tools handle everything after that.
              </p>
              <p className="text-stone/60 font-sans text-sm">
                Have questions? See our <a href="/faq#privacy-compliance" className="text-orange hover:underline">Privacy & Compliance FAQ</a> for more details.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <FAQSection />
      <FinalCTASection />
    </>
  );
}
