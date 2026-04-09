import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const WHO_WE_HELP = [
  { name: "Private Practices", path: "/websites-for-private-practices" },
  { name: "Accounting Firms", path: "/websites-for-accountants" },
];

const OUR_STRATEGY = [
  { name: "Strategy Overview", path: "/our-strategy" },
  { name: "Website Design", path: "/website-design" },
  { name: "SEO", path: "/seo-for-small-business" },
  { name: "GEO", path: "/geo-generative-engine-optimization" },
  { name: "Funnel Pages", path: "/funnel-pages" },
  { name: "Google Business Profiles", path: "/google-business-profile" },
  { name: "Lead Generation", path: "/lead-generation-for-small-business" },
];

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
          "text-sm font-sans font-semibold transition-all duration-300 relative flex items-center gap-1",
          isActive ? "text-orange" : "text-stone hover:text-offwhite"
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
  isActive,
  location,
  open,
  onToggle,
}: {
  label: string;
  items: { name: string; path: string }[];
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
          open ? "max-h-96 mt-4" : "max-h-0"
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
        </div>
      </div>
    </div>
  );
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileWhoWeHelpOpen, setMobileWhoWeHelpOpen] = useState(false);
  const [mobileStrategyOpen, setMobileStrategyOpen] = useState(false);
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
    setMobileStrategyOpen(false);
  }, [location]);

  const isWhoWeHelpActive = WHO_WE_HELP.some((item) => location === item.path);
  const isStrategyActive =
    OUR_STRATEGY.some((item) => location === item.path) || location === "/our-strategy";

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "How It Works", path: "/how-it-works" },
  ];

  const navLinksAfter = [
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
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={cn(
                    "text-sm font-sans font-semibold transition-all duration-300 relative",
                    location === link.path
                      ? "text-orange"
                      : "text-stone hover:text-offwhite"
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

              <DesktopDropdown
                label="Who We Help"
                items={WHO_WE_HELP}
                isActive={isWhoWeHelpActive}
                location={location}
              />

              <DesktopDropdown
                label="Our Strategy"
                items={OUR_STRATEGY}
                isActive={isStrategyActive}
                location={location}
              />

              {navLinksAfter.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={cn(
                    "text-sm font-sans font-semibold transition-all duration-300 relative",
                    location === link.path
                      ? "text-orange"
                      : "text-stone hover:text-offwhite"
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
              Free Website Review
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
          {navLinks.map((link) => (
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

          <MobileAccordion
            label="Who We Help"
            items={WHO_WE_HELP}
            isActive={isWhoWeHelpActive}
            location={location}
            open={mobileWhoWeHelpOpen}
            onToggle={() => setMobileWhoWeHelpOpen(!mobileWhoWeHelpOpen)}
          />

          <MobileAccordion
            label="Our Strategy"
            items={OUR_STRATEGY}
            isActive={isStrategyActive}
            location={location}
            open={mobileStrategyOpen}
            onToggle={() => setMobileStrategyOpen(!mobileStrategyOpen)}
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
            Free Website Review
          </Link>
        </div>
      </div>
    </>
  );
}
