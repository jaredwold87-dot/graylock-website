import { SEO } from "@/components/SEO";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PricingSection } from "@/components/home/PricingSection";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";
import { Check, Minus, Shield, Activity, Headphones, BarChart3, Server, Lock, FileCheck, Globe, Image as ImageIcon, Package } from "lucide-react";

export default function Pricing() {
  const featureRows = [
    { name: "Pages Included", starter: "Up to 5", standard: "Up to 7", growth: "Up to 14", custom: "Custom" },
    { name: "SEO Funnel Pages", starter: false, standard: "5 Pages", growth: "10 Pages", custom: "Custom" },
    { name: "Mobile-First Design", starter: true, standard: true, growth: true, custom: true },
    { name: "Secure Hosting & SSL", starter: true, standard: true, growth: true, custom: true },
    { name: "Monthly Performance Report", starter: false, standard: true, growth: true, custom: true },
    { name: "Lead Capture Forms", starter: "Basic", standard: "Enhanced", growth: "Advanced", custom: "Custom Integrated" },
    { name: "SEO Optimization", starter: "Basic Setup", standard: "Local SEO Focus", growth: "Advanced + Schema", custom: "Advanced Strategy" },
    { name: "Assistance with Google Business Profile Setup", starter: false, standard: true, growth: true, custom: true },
    { name: "Business Dashboard", starter: "Dashboard + Support", standard: "Enhanced + Priority", growth: "Enhanced + Priority", custom: "Custom" },
    { name: "Website Analytics", starter: false, standard: "Full Insights", growth: "Full Reports", custom: "Custom Reports" },
    { name: "Edit Business Info (Hours, Phone, Address)", starter: true, standard: true, growth: true, custom: true },
    { name: "Announcement / Message Banner", starter: false, standard: true, growth: true, custom: true },
    { name: "Lead Activity Tracking", starter: false, standard: true, growth: true, custom: true },
    { name: "Easy Update Request Submission", starter: false, standard: false, growth: true, custom: true },
    { name: "Quarterly SEO Review", starter: false, standard: false, growth: true, custom: true },
    { name: "Custom Integrations (Calendly, etc.)", starter: false, standard: false, growth: true, custom: true },
    { name: "Priority Support", starter: false, standard: true, growth: true, custom: true },
    { name: "Annual Strategy Call", starter: false, standard: false, growth: true, custom: true },
    { name: "Custom Applications & Dashboards", starter: false, standard: false, growth: false, custom: true },
    { name: "Operating System Builds", starter: false, standard: false, growth: false, custom: true },
    { name: "Dedicated Account Manager", starter: false, standard: false, growth: false, custom: true },
    { name: "Priority Build Queue", starter: false, standard: false, growth: false, custom: true },
  ];

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
      <SEO title="Pricing | Graylock Digital" />
      
      <section className="relative py-32 md:py-40 px-6 md:px-12 text-offwhite overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${import.meta.env.BASE_URL}hero-pricing.png)` }}
        />
        <div className="absolute inset-0 bg-charcoal/75" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl font-display mb-6">Simple, Honest Pricing</h1>
            <p className="text-xl font-sans text-stone">No hidden fees. No long-term contracts. Just a flat setup fee and a predictable monthly rate.</p>
          </ScrollReveal>
        </div>
      </section>

      <PricingSection />

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
                  <th className="p-4 border-b border-gunmetal font-display text-xl text-offwhite w-1/5 text-center">Starter<br/><span className="text-sm text-stone font-sans">$79/mo</span></th>
                  <th className="p-4 border-b border-gunmetal font-display text-xl text-orange w-1/5 text-center">Standard<br/><span className="text-sm text-stone font-sans">$119/mo</span></th>
                  <th className="p-4 border-b border-gunmetal font-display text-xl text-offwhite w-1/5 text-center">Growth<br/><span className="text-sm text-stone font-sans">$199/mo</span></th>
                  <th className="p-4 border-b border-gunmetal font-display text-xl text-offwhite w-1/5 text-center">Custom<br/><span className="text-sm text-stone font-sans">Contact Us</span></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gunmetal">
                {featureRows.map((row, i) => (
                  <tr key={i} className="hover:bg-charcoal/50 transition-colors">
                    <td className="p-4 font-sans text-stone">{row.name}</td>
                    <td className="p-4 text-center">{renderCell(row.starter)}</td>
                    <td className="p-4 text-center bg-charcoal/20">{renderCell(row.standard, true)}</td>
                    <td className="p-4 text-center">{renderCell(row.growth)}</td>
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
              Your monthly fee isn't just "hosting." It's a full-service web team keeping your site fast, secure, and working for your business every single day.
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

          <ScrollReveal delay={0.5} className="max-w-3xl mx-auto">
            <div className="bg-navy/60 border border-gunmetal/50 rounded-2xl p-8 md:p-10">
              <h3 className="text-xl font-display text-offwhite mb-6 text-center">What This Replaces</h3>
              <div className="space-y-3 mb-6">
                {[
                  { item: "Premium managed hosting", cost: "$25–50/mo" },
                  { item: "SSL certificate", cost: "$10–15/mo" },
                  { item: "Security & malware scanning", cost: "$20–30/mo" },
                  { item: "Uptime monitoring service", cost: "$10–20/mo" },
                  { item: "Form & lead capture plugin", cost: "$20–40/mo" },
                  { item: "Analytics & reporting tools", cost: "$15–30/mo" },
                  { item: "Web maintenance retainer", cost: "$150–300/mo" },
                ].map((row, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-gunmetal/30 last:border-0">
                    <span className="text-stone font-sans text-sm">{row.item}</span>
                    <span className="text-offwhite font-sans text-sm font-semibold">{row.cost}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-gunmetal">
                <span className="text-offwhite font-display text-lg">If purchased separately</span>
                <span className="text-orange font-display text-xl">$250–485/mo</span>
              </div>
              <p className="text-stone/60 font-sans text-sm text-center mt-6">
                Our Standard plan covers all of this for $119/mo — less than most businesses pay for hosting and a single plugin alone.
              </p>
            </div>
          </ScrollReveal>
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
              { icon: <ImageIcon className="text-orange" size={22} />, title: "Your Images & Brand Assets", desc: "Photos, logos, brand elements — everything you provided or we sourced for your brand." },
              { icon: <Package className="text-orange" size={22} />, title: "Your Data, Packaged Up", desc: "If you cancel, we package all your content and data so you can take it to your next host." },
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

          <ScrollReveal delay={0.5} className="max-w-3xl mx-auto text-center">
            <div className="bg-charcoal/40 border border-gunmetal/30 rounded-xl p-6 space-y-3">
              <p className="text-stone font-sans leading-relaxed text-sm">
                Our service is an all-inclusive subscription. We own the code, the design framework, and the hosting infrastructure that keeps your site fast and secure. If you cancel, we package up all of your content and data, and transfer your domain to wherever you choose — with 30 days' notice and no cancellation fees.
              </p>
              <p className="text-stone font-sans leading-relaxed text-sm">
                You will need to build a new site on your new host, but you will never lose your domain authority, your content, or your brand.
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
