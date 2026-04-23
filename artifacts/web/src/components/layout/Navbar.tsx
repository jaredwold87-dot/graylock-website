import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import {
  Menu, X, ChevronDown,
  Palette, Search, MousePointerClick, MapPin, Magnet,
  Activity, Smile, Focus, Dumbbell, Stethoscope, Brain, Calculator, Briefcase, HardHat,
} from "lucide-react";
import { cn } from "@/lib/utils";

const SERVICES = [
  {
    icon: Palette,
    name: "Custom Website Design",
    desc: "Conversion-built sites, mobile-first.",
    path: "/website-design",
  },
  {
    icon: Search,
    name: "Local SEO",
    desc: "Rank in your city. Show up on Google Maps.",
    path: "/seo-for-small-business",
  },
  {
    icon: MousePointerClick,
    name: "Funnel Pages",
    desc: "High-intent landing pages that convert.",
    path: "/funnel-pages",
  },
  {
    icon: MapPin,
    name: "Google Business Profile",
    desc: "Optimized profile, reviews, posts, photos.",
    path: "/google-business-profile",
  },
  {
    icon: Magnet,
    name: "Lead Generation",
    desc: "Forms, intake flows & lead magnets that work.",
    path: "/lead-generation-for-small-business",
  },
];

const SERVICE_PATHS = SERVICES.map((s) => s.path).concat(["/our-strategy"]);

const WHO_WE_HELP_PRACTICES = [
  { name: "Chiropractors", desc: "Adjustments, posture, sports recovery.", icon: Activity, path: "/websites-for-chiropractors" },
  { name: "Dentists", desc: "Family, cosmetic, implants, ortho.", icon: Smile, path: "/websites-for-dentists" },
  { name: "Optometrists", desc: "Exams, contacts, frames, dry eye.", icon: Focus, path: "/websites-for-optometrists" },
  { name: "Physical Therapists", desc: "Rehab, sports, ortho & pain.", icon: Dumbbell, path: "/websites-for-physical-therapists" },
  { name: "Physicians", desc: "Family, internal & specialty practices.", icon: Stethoscope, path: "/websites-for-physicians" },
  { name: "Psychologists", desc: "Testing, therapy & evaluations.", icon: Brain, path: "/websites-for-psychologists" },
];

const WHO_WE_HELP_OTHER = [
  { name: "Accounting Firms", desc: "CPAs, bookkeeping, tax & advisory.", icon: Calculator, path: "/websites-for-accountants" },
  { name: "Industrial & Construction", desc: "Contractors, trades, manufacturing.", icon: HardHat, path: "/websites-for-industrial-construction" },
  { name: "Local Service Businesses", desc: "Trust-based pros — law, finance, more.", icon: Briefcase, path: "/other-service-businesses" },
];

const WHO_WE_HELP_ALL = [...WHO_WE_HELP_PRACTICES, ...WHO_WE_HELP_OTHER];

const OUR_STRATEGY = [
  { name: "Strategy Overview", path: "/our-strategy" },
  { name: "Website Design", path: "/website-design" },
  { name: "SEO", path: "/seo-for-small-business" },
  { name: "Funnel Pages", path: "/funnel-pages" },
  { name: "Google Business Profiles", path: "/google-business-profile" },
  { name: "Lead Generation", path: "/lead-generation-for-small-business" },
];

function ServicesMegaMenu({
  isActive,
  location,
}: {
  isActive: boolean;
  location: string;
}) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  };

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button
        className={cn(
          "text-[15px] font-sans font-semibold tracking-[0.01em] transition-all duration-300 relative flex items-center gap-1",
          isActive ? "text-orange" : "text-offwhite/90 hover:text-orange"
        )}
        onClick={() => setOpen(!open)}
      >
        Services
        <ChevronDown size={14} className={cn("transition-transform duration-200", open ? "rotate-180" : "")} />
        <span className={cn("absolute -bottom-1 left-0 h-0.5 bg-orange transition-all duration-300", isActive ? "w-full" : "w-0")} />
      </button>

      <div
        className={cn(
          "absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[640px] rounded-xl border border-gunmetal/60 bg-charcoal/95 backdrop-blur-xl shadow-2xl shadow-black/40 transition-all duration-200 overflow-hidden",
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
        )}
      >
        <div className="p-4">
          <p className="text-[10px] font-sans font-bold uppercase tracking-widest text-orange/80 mb-3 px-2">What We Do</p>
          <div className="grid grid-cols-2 gap-1">
            {SERVICES.map((s) => {
              const Icon = s.icon;
              const active = location === s.path;
              return (
                <Link
                  key={s.path}
                  href={s.path}
                  className={cn(
                    "flex items-start gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group/item",
                    active ? "bg-orange/10" : "hover:bg-white/5"
                  )}
                >
                  <div className="w-9 h-9 rounded-lg bg-orange/10 border border-orange/20 flex items-center justify-center flex-shrink-0 group-hover/item:bg-orange/15 transition-colors">
                    <Icon size={16} className="text-orange" />
                  </div>
                  <div className="min-w-0">
                    <div className={cn("text-sm font-sans font-semibold leading-tight", active ? "text-orange" : "text-offwhite")}>
                      {s.name}
                    </div>
                    <div className="text-[11.5px] text-stone leading-snug mt-0.5">{s.desc}</div>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="border-t border-gunmetal/40 mt-3 pt-3 px-2 flex items-center justify-between">
            <span className="text-xs text-stone">See how it all works together</span>
            <Link href="/our-strategy" className="text-xs font-sans font-semibold text-orange hover:text-orange/80 transition-colors">
              Our full strategy →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function DesktopMegaMenu({
  isActive,
  location,
}: {
  isActive: boolean;
  location: string;
}) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  };

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={cn(
          "text-[15px] font-sans font-semibold tracking-[0.01em] transition-all duration-300 relative flex items-center gap-1",
          isActive ? "text-orange" : "text-offwhite/90 hover:text-orange"
        )}
        onClick={() => setOpen(!open)}
      >
        Industries
        <ChevronDown
          size={14}
          className={cn("transition-transform duration-200", open ? "rotate-180" : "")}
        />
        <span
          className={cn(
            "absolute -bottom-1 left-0 h-0.5 bg-orange transition-all duration-300",
            isActive ? "w-full" : "w-0"
          )}
        />
      </button>

      <div
        className={cn(
          "absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[760px] rounded-xl border border-gunmetal/60 bg-charcoal/95 backdrop-blur-xl shadow-2xl shadow-black/40 transition-all duration-200 overflow-hidden",
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        )}
      >
        <div className="p-4">
          <p className="text-[10px] font-sans font-bold uppercase tracking-widest text-orange/80 mb-3 px-2">Healthcare Practices</p>
          <div className="grid grid-cols-2 gap-1">
            {WHO_WE_HELP_PRACTICES.map((item) => {
              const Icon = item.icon;
              const active = location === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={cn(
                    "flex items-start gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group/item",
                    active ? "bg-orange/10" : "hover:bg-white/5"
                  )}
                >
                  <div className="w-9 h-9 rounded-lg bg-orange/10 border border-orange/20 flex items-center justify-center flex-shrink-0 group-hover/item:bg-orange/15 transition-colors">
                    <Icon size={16} className="text-orange" />
                  </div>
                  <div className="min-w-0">
                    <div className={cn("text-sm font-sans font-semibold leading-tight", active ? "text-orange" : "text-offwhite")}>
                      {item.name}
                    </div>
                    <div className="text-[11.5px] text-stone leading-snug mt-0.5">{item.desc}</div>
                  </div>
                </Link>
              );
            })}
          </div>

          <p className="text-[10px] font-sans font-bold uppercase tracking-widest text-orange/80 mt-4 mb-3 px-2">Other Trust-Based Businesses</p>
          <div className="grid grid-cols-2 gap-1">
            {WHO_WE_HELP_OTHER.map((item) => {
              const Icon = item.icon;
              const active = location === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={cn(
                    "flex items-start gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group/item",
                    active ? "bg-orange/10" : "hover:bg-white/5"
                  )}
                >
                  <div className="w-9 h-9 rounded-lg bg-orange/10 border border-orange/20 flex items-center justify-center flex-shrink-0 group-hover/item:bg-orange/15 transition-colors">
                    <Icon size={16} className="text-orange" />
                  </div>
                  <div className="min-w-0">
                    <div className={cn("text-sm font-sans font-semibold leading-tight", active ? "text-orange" : "text-offwhite")}>
                      {item.name}
                    </div>
                    <div className="text-[11.5px] text-stone leading-snug mt-0.5">{item.desc}</div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="border-t border-gunmetal/40 mt-3 pt-3 px-2 flex items-center justify-between">
            <span className="text-xs text-stone">Don't see your industry?</span>
            <Link href="/get-started" className="text-xs font-sans font-semibold text-orange hover:text-orange/80 transition-colors">
              Talk to us →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function DesktopDropdown({
  label,
  items,
  isActive,
  location,
}: {
  label: string;
  items: { name: string; path: string }[];
  isActive: boolean;
  location: string;
}) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  };

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={cn(
          "text-[15px] font-sans font-semibold tracking-[0.01em] transition-all duration-300 relative flex items-center gap-1",
          isActive ? "text-orange" : "text-offwhite/90 hover:text-orange"
        )}
        onClick={() => setOpen(!open)}
      >
        {label}
        <ChevronDown
          size={14}
          className={cn(
            "transition-transform duration-200",
            open ? "rotate-180" : ""
          )}
        />
        <span
          className={cn(
            "absolute -bottom-1 left-0 h-0.5 bg-orange transition-all duration-300",
            isActive ? "w-full" : "w-0"
          )}
        />
      </button>

      <div
        className={cn(
          "absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 rounded-xl border border-gunmetal/60 bg-charcoal/95 backdrop-blur-xl shadow-2xl shadow-black/40 transition-all duration-200 overflow-hidden",
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        )}
      >
        <div className="py-2">
          {items.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "block px-5 py-2.5 text-sm font-sans transition-all duration-200",
                location === item.path
                  ? "text-orange bg-orange/5"
                  : "text-stone hover:text-offwhite hover:bg-white/5"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileAccordion({
  label,
  items,
  extraItems,
  isActive,
  location,
  open,
  onToggle,
}: {
  label: string;
  items: { name: string; path: string }[];
  extraItems?: { name: string; path: string }[];
  isActive: boolean;
  location: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="w-full max-w-xs">
      <button
        onClick={onToggle}
        className={cn(
          "text-2xl font-display uppercase tracking-widest flex items-center justify-center gap-2 w-full",
          isActive ? "text-orange" : "text-offwhite hover:text-orange transition-colors"
        )}
      >
        {label}
        <ChevronDown
          size={20}
          className={cn(
            "transition-transform duration-200",
            open ? "rotate-180" : ""
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          open ? "max-h-[600px] mt-4" : "max-h-0"
        )}
      >
        <div className="flex flex-col gap-3">
          {items.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "text-base font-sans py-1",
                location === item.path
                  ? "text-orange"
                  : "text-stone hover:text-offwhite transition-colors"
              )}
            >
              {item.name}
            </Link>
          ))}
          {extraItems && extraItems.length > 0 && (
            <>
              <div className="border-t border-gunmetal my-1" />
              {extraItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={cn(
                    "text-base font-sans py-1",
                    location === item.path
                      ? "text-orange"
                      : "text-stone hover:text-offwhite transition-colors"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileWhoWeHelpOpen, setMobileWhoWeHelpOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileWhoWeHelpOpen(false);
    setMobileServicesOpen(false);
  }, [location]);

  const isWhoWeHelpActive = WHO_WE_HELP_ALL.some((item) => location === item.path);
  const isServicesActive = SERVICE_PATHS.some((p) => location === p);

  const navLinksAfter = [
    { name: "Process", path: "/how-it-works" },
    { name: "Pricing", path: "/pricing" },
    { name: "About", path: "/about" },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 px-6 md:px-12",
          isScrolled
            ? "glass-nav-scrolled border-b border-gunmetal/50 py-3"
            : "glass-nav border-b border-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center group">
            <img
              src={`${import.meta.env.BASE_URL}logo-horizontal.png`}
              alt="Graylock Digital"
              className="h-8 md:h-11 w-auto group-hover:opacity-90 transition-opacity"
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              <ServicesMegaMenu
                isActive={isServicesActive}
                location={location}
              />

              <DesktopMegaMenu
                isActive={isWhoWeHelpActive}
                location={location}
              />

              {navLinksAfter.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={cn(
                    "text-[15px] font-sans font-semibold tracking-[0.01em] transition-all duration-300 relative",
                    location === link.path
                      ? "text-orange"
                      : "text-offwhite/90 hover:text-orange"
                  )}
                >
                  {link.name}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-0.5 bg-orange transition-all duration-300",
                      location === link.path ? "w-full" : "w-0"
                    )}
                  />
                </Link>
              ))}
            </div>
            <Link
              href="/get-started"
              className="cta-shimmer bg-orange text-white text-sm font-bold px-5 py-2.5 rounded hover:bg-orange/90 transition-all duration-300 shadow-[0_2px_12px_rgba(46,123,180,0.25)] hover:shadow-[0_4px_20px_rgba(46,123,180,0.4)] hover:-translate-y-0.5"
            >
              Get Your Free Homepage Demo
            </Link>
          </div>

          <button
            className="md:hidden text-offwhite hover:text-orange transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "fixed inset-0 bg-charcoal/95 backdrop-blur-xl z-40 flex flex-col items-center justify-start pt-24 overflow-y-auto transition-all duration-300 md:hidden",
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center gap-6 text-center pb-12 w-full px-6">
          <MobileAccordion
            label="Services"
            items={SERVICES.map((s) => ({ name: s.name, path: s.path }))}
            extraItems={[{ name: "Our Full Strategy", path: "/our-strategy" }]}
            isActive={isServicesActive}
            location={location}
            open={mobileServicesOpen}
            onToggle={() => setMobileServicesOpen(!mobileServicesOpen)}
          />

          <MobileAccordion
            label="Industries"
            items={WHO_WE_HELP_PRACTICES}
            extraItems={WHO_WE_HELP_OTHER}
            isActive={isWhoWeHelpActive}
            location={location}
            open={mobileWhoWeHelpOpen}
            onToggle={() => setMobileWhoWeHelpOpen(!mobileWhoWeHelpOpen)}
          />

          {navLinksAfter.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={cn(
                "text-2xl font-display uppercase tracking-widest",
                location === link.path
                  ? "text-orange"
                  : "text-offwhite hover:text-orange transition-colors"
              )}
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/get-started"
            className="mt-6 cta-shimmer bg-orange text-white font-sans font-bold px-8 py-4 rounded shadow-xl shadow-orange/20"
          >
            Get Your Free Homepage Demo
          </Link>
        </div>
      </div>
    </>
  );
}
