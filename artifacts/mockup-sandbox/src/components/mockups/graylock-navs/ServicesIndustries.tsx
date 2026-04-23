import { ChevronDown, Palette, Search, Sparkles, MousePointerClick, MapPin, Magnet, BarChart3 } from "lucide-react";

const navy = "#0F1E35";
const charcoal = "#13243F";
const offwhite = "#F2F3F5";
const stone = "#9CA8B8";
const orange = "#2E7BB4";

const services = [
  { icon: Palette, title: "Custom Website Design", desc: "Conversion-built sites, mobile-first." },
  { icon: Search, title: "Local SEO", desc: "Rank in your city. Show up on Google Maps." },
  { icon: Sparkles, title: "GEO (AI Search)", desc: "Get cited by ChatGPT, Perplexity, Gemini." },
  { icon: MousePointerClick, title: "Funnel Pages", desc: "High-intent landing pages that convert." },
  { icon: MapPin, title: "Google Business Profile", desc: "Optimized profile, reviews, posts, photos." },
  { icon: Magnet, title: "Lead Generation", desc: "Forms, intake flows, & lead magnets that work." },
];

export function ServicesIndustries() {
  return (
    <div style={{ background: navy, minHeight: "100vh", padding: "24px 48px", fontFamily: "Inter, system-ui, sans-serif" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: 20, borderBottom: `1px solid #1f2f4a` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 38, height: 38, borderRadius: 8, background: orange, display: "grid", placeItems: "center", color: "white", fontWeight: 800, fontSize: 18 }}>G</div>
            <div style={{ color: offwhite, fontWeight: 800, letterSpacing: 2, fontSize: 18 }}>GRAYLOCK <span style={{ color: stone, fontWeight: 500, fontSize: 11, letterSpacing: 3 }}>DIGITAL</span></div>
          </div>
          <nav style={{ display: "flex", alignItems: "center", gap: 32 }}>
            <NavItem label="Services" active hasDropdown />
            <NavItem label="Industries" hasDropdown />
            <NavItem label="Process" />
            <NavItem label="Pricing" />
            <NavItem label="About" />
            <button style={{ background: orange, color: "white", border: "none", padding: "10px 18px", borderRadius: 6, fontWeight: 700, fontSize: 13, cursor: "pointer", boxShadow: "0 2px 12px rgba(46,123,180,0.35)" }}>
              Book a Free Demo
            </button>
          </nav>
        </div>

        {/* Open Services mega menu */}
        <div style={{ marginTop: 20, display: "flex", justifyContent: "flex-start", paddingLeft: 360 }}>
          <div style={{ background: charcoal, border: `1px solid #243757`, borderRadius: 14, padding: 24, width: 720, boxShadow: "0 24px 60px rgba(0,0,0,0.4)" }}>
            <div style={{ color: orange, fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 14 }}>What We Do</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
              {services.map((s) => (
                <div key={s.title} style={{ display: "flex", gap: 12, padding: "12px 12px", borderRadius: 10, alignItems: "flex-start" }}>
                  <div style={{ width: 34, height: 34, borderRadius: 8, background: "rgba(46,123,180,0.12)", display: "grid", placeItems: "center", flexShrink: 0 }}>
                    <s.icon size={16} color={orange} />
                  </div>
                  <div>
                    <div style={{ color: offwhite, fontSize: 13, fontWeight: 700 }}>{s.title}</div>
                    <div style={{ color: stone, fontSize: 11.5, marginTop: 2, lineHeight: 1.4 }}>{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ borderTop: `1px solid #1f2f4a`, marginTop: 14, paddingTop: 14, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ color: stone, fontSize: 12, display: "flex", alignItems: "center", gap: 6 }}>
                <BarChart3 size={14} color={orange} /> See how it all works together
              </div>
              <a style={{ color: orange, fontSize: 12, fontWeight: 700 }}>Our full strategy →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NavItem({ label, active, hasDropdown }: { label: string; active?: boolean; hasDropdown?: boolean }) {
  return (
    <span style={{ display: "flex", alignItems: "center", gap: 4, color: active ? orange : offwhite, fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
      {label}
      {hasDropdown && <ChevronDown size={13} style={{ transform: active ? "rotate(180deg)" : "none", transition: "transform .2s" }} />}
    </span>
  );
}
