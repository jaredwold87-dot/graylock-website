import { Link } from "wouter";
import { useSiteSettingsContext } from "@/hooks/SiteSettingsContext";

export function Footer() {
  const settings = useSiteSettingsContext();
  const phone = settings?.contact_info?.phone;

  const dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const officeHours = settings?.office_hours;

  return (
    <footer className="bg-charcoal pt-20 pb-10 px-6 md:px-12 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-12 mb-16">
        
        <div className="md:col-span-1">
          <Link href="/" className="block mb-4 group">
            <img 
              src={`${import.meta.env.BASE_URL}logo-stacked.png`}
              alt="Graylock Digital" 
              className="h-24 w-auto group-hover:opacity-90 transition-opacity"
            />
          </Link>
          <p className="text-offwhite/85 font-sans mt-4 max-w-xs leading-relaxed">
            Custom websites for trust-based businesses. Done for you, maintained forever.
          </p>
          {officeHours && Object.keys(officeHours).length > 0 && (
            <div className="mt-6">
              <h5 className="text-offwhite font-sans font-semibold text-xs uppercase tracking-wider mb-3">Office Hours</h5>
              <ul className="space-y-1">
                {dayNames.map((day) => {
                  const key = day.toLowerCase();
                  const h = officeHours[key];
                  if (!h) return null;
                  return (
                    <li key={day} className="text-offwhite/85 text-xs font-sans flex justify-between gap-3">
                      <span>{day.slice(0, 3)}</span>
                      <span>{h.open ? `${h.from}–${h.to}` : "Closed"}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>

        <div>
          <h4 className="font-display text-white text-lg mb-6 tracking-wide">COMPANY</h4>
          <ul className="space-y-4 flex flex-col">
            <Link href="/how-it-works" className="text-offwhite/85 hover:text-orange font-sans text-[15px] transition-colors">How It Works</Link>
            <Link href="/pricing" className="text-offwhite/85 hover:text-orange font-sans text-[15px] transition-colors">Pricing</Link>
            <Link href="/about" className="text-offwhite/85 hover:text-orange font-sans text-[15px] transition-colors">About Us</Link>
          </ul>
        </div>

        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <h4 className="font-display text-white text-lg mb-6 tracking-wide">LOCAL SERVICE BUSINESSES</h4>
            <ul className="space-y-4 flex flex-col">
              <Link href="/websites-for-home-builders" className="text-offwhite/85 hover:text-orange font-sans text-[15px] transition-colors">Home Builders</Link>
              <Link href="/websites-for-industrial-construction" className="text-offwhite/85 hover:text-orange font-sans text-[15px] transition-colors">Industrial Construction</Link>
              <Link href="/websites-for-accountants" className="text-offwhite/85 hover:text-orange font-sans text-[15px] transition-colors">Accounting Firms</Link>
              <Link href="/other-service-businesses" className="text-offwhite/85 hover:text-orange font-sans text-[15px] transition-colors">Other Local Service Businesses</Link>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-white text-lg mb-6 tracking-wide">HEALTHCARE PRACTICES</h4>
            <ul className="space-y-4 flex flex-col">
              <Link href="/websites-for-psychologists" className="text-offwhite/85 hover:text-orange font-sans text-[15px] transition-colors">Psychologists</Link>
              <Link href="/websites-for-optometrists" className="text-offwhite/85 hover:text-orange font-sans text-[15px] transition-colors">Optometrists</Link>
              <Link href="/websites-for-physical-therapists" className="text-offwhite/85 hover:text-orange font-sans text-[15px] transition-colors">Physical Therapists</Link>
              <Link href="/websites-for-dentists" className="text-offwhite/85 hover:text-orange font-sans text-[15px] transition-colors">Dentists</Link>
              <Link href="/websites-for-chiropractors" className="text-offwhite/85 hover:text-orange font-sans text-[15px] transition-colors">Chiropractors</Link>
              <Link href="/websites-for-physicians" className="text-offwhite/85 hover:text-orange font-sans text-[15px] transition-colors">Physicians</Link>
            </ul>
          </div>
        </div>

        <div>
          <h4 className="font-display text-white text-lg mb-6 tracking-wide">OUR STRATEGY</h4>
          <ul className="space-y-4 flex flex-col">
            <Link href="/our-strategy" className="text-offwhite/85 hover:text-orange font-sans text-[15px] transition-colors">Strategy Overview</Link>
            <Link href="/website-design" className="text-offwhite/85 hover:text-orange font-sans text-[15px] transition-colors">Website Design</Link>
            <Link href="/seo-for-small-business" className="text-offwhite/85 hover:text-orange font-sans text-[15px] transition-colors">SEO</Link>
            <Link href="/funnel-pages" className="text-offwhite/85 hover:text-orange font-sans text-[15px] transition-colors">Funnel Pages</Link>
            <Link href="/google-business-profile" className="text-offwhite/85 hover:text-orange font-sans text-[15px] transition-colors">Google Business Profile</Link>
            <Link href="/lead-generation-for-small-business" className="text-offwhite/85 hover:text-orange font-sans text-[15px] transition-colors">Lead Generation</Link>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-white text-lg mb-6 tracking-wide">SUPPORT</h4>
          <ul className="space-y-4 flex flex-col">
            <Link href="/faq" className="text-offwhite/85 hover:text-orange font-sans text-[15px] transition-colors">FAQ</Link>
            <Link href="/get-started" className="text-offwhite/85 hover:text-orange font-sans text-[15px] transition-colors">Contact</Link>
            <Link href="/compliance" className="text-offwhite/85 hover:text-orange font-sans text-[15px] transition-colors">Compliance</Link>
            <Link href="/privacy-policy" className="text-offwhite/85 hover:text-orange font-sans text-[15px] transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-offwhite/85 hover:text-orange font-sans text-[15px] transition-colors">Terms of Service</Link>
          </ul>
          {phone && (
            <div className="mt-8">
              <p className="text-offwhite/80 text-sm text-center font-sans">
                <a href={`tel:${phone}`} className="hover:text-orange transition-colors">{phone}</a>
              </p>
            </div>
          )}
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-gunmetal">
        <p className="text-offwhite/65 text-xs font-sans leading-relaxed max-w-4xl mx-auto text-center mb-6">
          Graylock builds websites that meet WCAG 2.1 AA accessibility standards and are structured for compliance with applicable federal, state, and industry-specific marketing rules. Final compliance with all laws and regulations remains the responsibility of the website owner.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-offwhite/65 text-sm font-sans">
          © {new Date().getFullYear()} Graylock Digital. All rights reserved.
        </p>
        <p className="text-offwhite/65 text-sm font-sans flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
          <span>Based in the USA</span>
          <span className="text-offwhite/30">•</span>
          <span>Built for trust-based businesses</span>
          <span className="text-offwhite/30">•</span>
          <a
            href="/sitemap"
            className="text-offwhite/85 hover:text-orange transition-colors"
          >
            Sitemap
          </a>
          <span className="text-offwhite/30">•</span>
          <a
            href="https://graylock-os-ymwca.sevalla.app/portal?site=99c58e46-33ee-4c7c-ab23-eeb7badcc57b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-offwhite/85 hover:text-orange transition-colors"
          >
            Client Dashboard
          </a>
        </p>
        </div>
      </div>
    </footer>
  );
}
