import { SEO } from "@/components/SEO";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PricingSection } from "@/components/home/PricingSection";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";
import { Check, Minus } from "lucide-react";

export default function Pricing() {
  const featureRows = [
    { name: "Pages Included", starter: "Up to 5", standard: "Up to 7", growth: "Up to 10", custom: "Custom" },
    { name: "SEO Funnel Pages", starter: false, standard: "5 Pages", growth: "10 Pages", custom: "Custom" },
    { name: "Mobile-First Design", starter: true, standard: true, growth: true, custom: true },
    { name: "Secure Hosting & SSL", starter: true, standard: true, growth: true, custom: true },
    { name: "Monthly Performance Report", starter: false, standard: true, growth: true, custom: true },
    { name: "Monthly Change Requests", starter: false, standard: false, growth: "Unlimited", custom: "Unlimited" },
    { name: "Lead Capture Forms", starter: "Basic", standard: "Enhanced", growth: "Advanced", custom: "Custom Integrated" },
    { name: "SEO Optimization", starter: "Basic Setup", standard: "Local SEO Focus", growth: "Advanced + Schema", custom: "Advanced Strategy" },
    { name: "Google Business Profile", starter: false, standard: true, growth: true, custom: true },
    { name: "Business Dashboard", starter: "Dashboard + Support", standard: "Enhanced + Priority", growth: "Enhanced + Priority", custom: "Custom" },
    { name: "Website Analytics", starter: false, standard: "Full Insights", growth: "Full Reports", custom: "Custom Reports" },
    { name: "Edit Business Info (Hours, Phone, Address)", starter: true, standard: true, growth: true, custom: true },
    { name: "Announcement / Message Banner", starter: false, standard: true, growth: true, custom: true },
    { name: "Lead Activity Tracking", starter: false, standard: true, growth: true, custom: true },
    { name: "Easy Update Request Submission", starter: false, standard: false, growth: true, custom: true },
    { name: "Quarterly SEO Review", starter: false, standard: false, growth: true, custom: true },
    { name: "Daily Backups", starter: false, standard: false, growth: true, custom: true },
    { name: "Custom Integrations (Calendly, etc.)", starter: false, standard: false, growth: true, custom: true },
    { name: "Priority Support", starter: false, standard: true, growth: true, custom: true },
    { name: "Quarterly Strategy Call", starter: false, standard: false, growth: true, custom: true },
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
      
      <section className="bg-offwhite pt-24 pb-12 px-6 md:px-12 text-charcoal">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl font-display mb-6">Simple, Honest Pricing</h1>
            <p className="text-xl font-sans text-gray-600">No hidden fees. No long-term contracts. Just a flat setup fee and a predictable monthly rate.</p>
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

      <FAQSection />
      <FinalCTASection />
    </>
  );
}
