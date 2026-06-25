import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "Your Website", path: "/services" },
  { name: "Our Process", path: "/how-it-works" },
  { name: "Portfolio", path: "/featured-projects" },
  { name: "Pricing", path: "/pricing" },
  { name: "About", path: "/about" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
  }, [location]);

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
              {NAV_LINKS.map((link) => (
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
              className="cta-shimmer bg-orange text-white text-sm font-bold px-5 py-2.5 rounded hover:bg-orange/90 transition-all duration-300 shadow-[0_2px_12px_rgba(232,93,38,0.25)] hover:shadow-[0_4px_20px_rgba(232,93,38,0.4)] hover:-translate-y-0.5"
            >
              Book a Discovery Call
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
          {NAV_LINKS.map((link) => (
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
            Book a Discovery Call
          </Link>
        </div>
      </div>
    </>
  );
}
