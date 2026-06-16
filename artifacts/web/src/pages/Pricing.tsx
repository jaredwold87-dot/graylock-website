import { SEO } from "@/components/SEO";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { HeroBackgroundImage } from "@/components/ui/HeroBackgroundImage";
import { PricingSection } from "@/components/home/PricingSection";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";
import { Check, Minus, Shield, Activity, Headphones, BarChart3, Server, Lock, FileCheck, Globe, Image as ImageIcon, RefreshCw, Sparkles, Camera, Gauge } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Pricing() {
  const featureRows = [
    { name: "Pages Included", solo: "8", group: "15", enterprise: "20+", custom: "Custom" },
    { name: "SEO Funnel Pages", solo: false, group: "6", enterprise: "9", custom: "Custom" },
    { name: "Mobile-First Design", solo: true, group: true, enterprise: true, custom: true },
    { name: "Hosting & SSL", solo: true, group: true, enterprise: true, custom: true },
    { name: "Local SEO", solo: "Foundation", group: "Full", enterprise: "Advanced + Multi-Location", custom: "Custom" },
    { name: "Lead Capture Form", solo: "Basic", group: "Enhanced", enterprise: "Advanced", custom: "Custom" },
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
        ? <Check className={`mx-auto ${highlight ? 'text-[#E85D26]' : 'text-white'}`} size={20}/> 
        : <Minus className="mx-auto text-white/30" size={20}/>;
    }
    return <span className={`${highlight ? 'text-[#E85D26] font-semibold' : 'text-white'} font-sans text-sm`}>{val}</span>;
  };

  return (
    <>
      <SEO title="Pricing | Small Business Website Design Plans | Graylock Digital" description="Three flat monthly plans, one one-time build fee paid only after you approve your free demo, no long-term contracts. Starter from $199/mo, Growth from $299/mo, Scale from $449/mo. Hosting and updates included." url="https://graylockdigital.com/pricing" />
      
      <section className="relative py-32 md:py-40 px-6 md:px-12 text-white overflow-hidden bg-[#0f0f0f]">
        <HeroBackgroundImage src={`${import.meta.env.BASE_URL}hero-pricing.png`} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f0f]/95 via-[#0f0f0f]/90 to-[#0f0f0f]" />
        <div className="pointer-events-none absolute -top-1/4 right-0 w-[60%] h-[120%] bg-[radial-gradient(ellipse_at_center,rgba(232,93,38,0.15),transparent_60%)]" aria-hidden="true" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <p className="text-[#E85D26] font-sans font-semibold uppercase tracking-widest text-sm mb-4">
              Pricing
            </p>
            <h1 className="text-4xl md:text-6xl font-display mb-6 leading-tight">Three plans. One flat fee. <span className="text-gradient">No surprises.</span></h1>
            <p className="text-lg md:text-xl font-sans text-stone leading-relaxed">A one-time build fee — paid only after you approve your free custom homepage demo — then a flat monthly rate that covers hosting, maintenance, security, and ongoing support. Month-to-month — never locked in.</p>
          </ScrollReveal>
        </div>
      </section>

      <PricingSection hideHeader />

      <section className="bg-[#0f0f0f] py-16 px-6 border-t border-white/5 md:hidden">
        <div className="max-w-md mx-auto">
          <ScrollReveal className="text-center mb-10">
            <h2 className="text-2xl font-display text-white mb-3">Compare Plan Features</h2>
            <p className="text-stone font-sans text-sm">Quick side-by-side of what is included on each plan.</p>
          </ScrollReveal>

          {[
            { key: "solo", name: "Starter", price: "$199/mo + $799 build fee" },
            { key: "group", name: "Growth", price: "$299/mo + $999 build fee", popular: true },
            { key: "enterprise", name: "Scale", price: "$449/mo + $1,499 build fee" },
            { key: "custom", name: "Custom", price: "Custom quote" },
          ].map((plan) => (
            <ScrollReveal key={plan.key} className={cn(
              "rounded-2xl border mb-6 overflow-hidden",
              plan.popular ? "border-[#E85D26]/40 bg-white/[0.04]" : "border-white/10 bg-white/[0.03]"
            )}>
              <div className={cn(
                "px-5 py-4 border-b",
                plan.popular ? "bg-[#E85D26]/10 border-[#E85D26]/30" : "bg-white/[0.03] border-white/10"
              )}>
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className={cn("font-display text-xl", plan.popular ? "text-[#E85D26]" : "text-white")}>{plan.name}</h3>
                  {plan.popular && <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#E85D26]">Most Popular</span>}
                </div>
                <p className="text-stone text-sm font-sans mt-1">{plan.price}</p>
              </div>
              <ul className="divide-y divide-white/10">
                {featureRows.map((row, i) => {
                  const val = row[plan.key as keyof typeof row] as boolean | string;
                  return (
                    <li key={i} className="flex items-start justify-between gap-4 px-5 py-3">
                      <span className="text-stone font-sans text-sm flex-1 leading-snug">{row.name}</span>
                      <span className="flex-shrink-0 text-right">
                        {typeof val === "boolean" ? (
                          val ? <Check className="text-[#E85D26] ml-auto" size={18} /> : <Minus className="text-white/30 ml-auto" size={18} />
                        ) : (
                          <span className="text-white font-sans text-sm font-semibold">{val}</span>
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

      <section className="bg-[#0f0f0f] py-24 px-6 md:px-12 border-t border-white/5 hidden md:block">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display text-white mb-6">Compare Plan Features</h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="p-4 border-b border-white/10 font-display text-xl text-stone w-1/5">Features</th>
                  <th className="p-4 border-b border-white/10 font-display text-xl text-white w-1/5 text-center">Starter<br/><span className="text-sm text-stone font-sans">$199/mo</span></th>
                  <th className="p-4 border-b border-white/10 font-display text-xl text-[#E85D26] w-1/5 text-center">Growth<br/><span className="text-sm text-stone font-sans">$299/mo</span></th>
                  <th className="p-4 border-b border-white/10 font-display text-xl text-white w-1/5 text-center">Scale<br/><span className="text-sm text-stone font-sans">$449/mo</span></th>
                  <th className="p-4 border-b border-white/10 font-display text-xl text-white w-1/5 text-center">Custom<br/><span className="text-sm text-stone font-sans">Contact Us</span></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {featureRows.map((row: FeatureRow, i: number) => (
                  <tr key={i} className="hover:bg-white/[0.03] transition-colors">
                    <td className="p-4 font-sans text-stone">
                      {row.name}
                      {row.footnote && (
                        <span className="block text-xs text-stone mt-1 leading-snug">{row.footnote}</span>
                      )}
                    </td>
                    <td className="p-4 text-center">{renderCell(row.solo)}</td>
                    <td className="p-4 text-center bg-white/[0.03]">{renderCell(row.group, true)}</td>
                    <td className="p-4 text-center">{renderCell(row.enterprise)}</td>
                    <td className="p-4 text-center">{renderCell(row.custom)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative py-24 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-[#f5f5f4]" />
        <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.04) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300/60 to-transparent" />

        <div className="max-w-5xl mx-auto relative z-10">
          <ScrollReveal className="text-center mb-16">
            <p className="text-[#B23E16] font-sans font-semibold uppercase tracking-widest text-sm mb-4">What You're Actually Paying For</p>
            <h2 className="text-3xl md:text-5xl font-display text-[#1a202c] mb-6">Your Monthly Fee, Broken Down</h2>
            <p className="text-[#4a5568] text-lg font-sans max-w-2xl mx-auto leading-relaxed">
              Your monthly fee isn't just "hosting." It's a full-service web team keeping your site fast, secure, and working for your business every single day.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {[
              { icon: <Server className="text-orange" size={22} />, title: "Premium Hosting", desc: "High-speed, enterprise-grade servers with 99.9% uptime — no shared hosting slowdowns." },
              { icon: <Lock className="text-orange" size={22} />, title: "SSL Certificate", desc: "The security padlock that keeps your site trusted by browsers and protects visitor data." },
              { icon: <Shield className="text-orange" size={22} />, title: "Security Monitoring", desc: "Weekly security scans, software updates, and proactive protection against vulnerabilities." },
              { icon: <Activity className="text-orange" size={22} />, title: "Uptime Monitoring", desc: "Daily uptime checks so we catch and fix issues before your visitors ever notice." },
              { icon: <BarChart3 className="text-orange" size={22} />, title: "Performance Reporting", desc: "Monthly reports on traffic, visitor behavior, and site performance — delivered straight to you." },
              { icon: <Headphones className="text-orange" size={22} />, title: "Priority Support", desc: "Content update requests handled promptly with a dedicated point of contact on our team." },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.08} className="bg-white border border-gray-200/80 rounded-xl p-6 flex items-start gap-4 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.04)]">
                <div className="w-10 h-10 bg-orange/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-orange/10">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-[#1a202c] font-display text-lg mb-1">{item.title}</h3>
                  <p className="text-[#4a5568] font-sans text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <ScrollReveal className="text-center mb-12 pt-8 border-t border-gray-300/60">
              <p className="text-[#B23E16] font-sans font-semibold uppercase tracking-widest text-sm mb-4 mt-8">You're Covered</p>
              <h2 className="text-3xl md:text-5xl font-display text-[#1a202c] mb-6">Always current. Always yours.</h2>
              <p className="text-[#4a5568] text-lg font-sans max-w-2xl mx-auto leading-relaxed">
                Two promises baked into every plan: every 2 years your site gets a free top-to-bottom refresh, and the things that matter — your domain, your content, your brand — belong to you whether you stay or go.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1} className="mb-14">
              <div className="flex items-center justify-center gap-2 mb-8">
                <RefreshCw className="text-orange" size={18} />
                <h3 className="text-[#B23E16] font-sans font-semibold uppercase tracking-widest text-xs md:text-sm">Stay-Current Guarantee · Free Refresh Every 2 Years</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
                {[
                  { icon: <Sparkles className="text-orange" size={24} />, title: "Design refresh", desc: "Modern redesign of your homepage and key pages — current best practices, current style." },
                  { icon: <Camera className="text-orange" size={24} />, title: "New photos & copy", desc: "Swap in fresh photography and refreshed copy across the pages that matter most." },
                  { icon: <Gauge className="text-orange" size={24} />, title: "Performance retune", desc: "Mobile speed, Core Web Vitals, services, team, and offers — all brought back to current standards." },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-3">
                    <div className="w-12 h-12 bg-orange/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-orange/20">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-[#1a202c] font-display text-lg mb-1">{item.title}</h4>
                      <p className="text-[#4a5568] font-sans text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-slate-500 font-sans text-xs md:text-sm text-center mt-6 leading-relaxed max-w-3xl mx-auto">
                Out of scope: a brand-new identity/logo or net-new pages beyond your current site structure.{" "}
                <a href="/faq#pricing-plans" className="text-[#B23E16] hover:underline">See full scope in the FAQ →</a>
              </p>
            </ScrollReveal>

            <div className="border-t border-gray-300/60 mb-12" />

            <ScrollReveal delay={0.15} className="text-center mb-10">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Lock className="text-orange" size={18} />
                <h3 className="text-[#B23E16] font-sans font-semibold uppercase tracking-widest text-xs md:text-sm">What You Own · No Lock-In</h3>
              </div>
              <p className="text-[#4a5568] font-sans max-w-2xl mx-auto leading-relaxed">
                You're never locked in. Here's exactly what belongs to you — during your plan and after.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                { icon: <Globe className="text-orange" size={22} />, title: "Your Domain", desc: "Registered in your name. We transfer it to wherever you choose — no questions asked." },
                { icon: <FileCheck className="text-orange" size={22} />, title: "Your Written Content", desc: "Every word of copy on every page. It's yours whether you stay or go." },
                { icon: <ImageIcon className="text-orange" size={22} />, title: "Your Images & Brand Assets", desc: "Photos, logos, brand elements — everything you provided for your brand." },
                { icon: <Lock className="text-orange" size={22} />, title: "No Long-Term Contracts", desc: "Month-to-month on every plan. Cancel with 30 days' notice — no penalties, no hassle." },
              ].map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.1} className="bg-white border border-gray-200/80 rounded-xl p-6 flex items-start gap-4 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.04)]">
                  <div className="w-10 h-10 bg-orange/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-orange/10">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-[#1a202c] font-display text-lg mb-1">{item.title}</h3>
                    <p className="text-[#4a5568] font-sans text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.5} className="max-w-3xl mx-auto text-center mt-4">
              <p className="text-slate-500 font-sans text-xs leading-relaxed">
                You own your domain, your written content, and your brand assets — always. The only thing we retain is the underlying code and hosting infrastructure, which is standard for any subscription-based web service. Cancel anytime with 30 days' notice — no cancellation fees.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <FAQSection />
      <FinalCTASection />
    </>
  );
}
