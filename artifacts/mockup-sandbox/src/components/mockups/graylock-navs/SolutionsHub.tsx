import { ChevronDown, Palette, Search, Sparkles, MousePointerClick, Magnet, MapPin, Stethoscope, Calculator, Smile, HeartPulse, Eye, Brain, FileText, Phone, ArrowRight } from "lucide-react";

const navy = "#0F1E35";
const charcoal = "#13243F";
const offwhite = "#F2F3F5";
const stone = "#9CA8B8";
const orange = "#2E7BB4";

export function SolutionsHub() {
  return (
    <div style={{ background: navy, minHeight: "100vh", padding: "24px 48px", fontFamily: "Inter, system-ui, sans-serif" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: 20, borderBottom: `1px solid #1f2f4a` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 38, height: 38, borderRadius: 8, background: orange, display: "grid", placeItems: "center", color: "white", fontWeight: 800, fontSize: 18 }}>G</div>
            <div style={{ color: offwhite, fontWeight: 800, letterSpacing: 2, fontSize: 18 }}>GRAYLOCK <span style={{ color: stone, fontWeight: 500, fontSize: 11, letterSpacing: 3 }}>DIGITAL</span></div>
          </div>
          <nav style={{ display: "flex", alignItems: "center", gap: 32 }}>
            <NavItem label="Solutions" active hasDropdown />
            <NavItem label="Process" />
            <NavItem label="Pricing" />
            <NavItem label="About" />
            <button style={{ background: orange, color: "white", border: "none", padding: "10px 18px", borderRadius: 6, fontWeight: 700, fontSize: 13, cursor: "pointer", boxShadow: "0 2px 12px rgba(46,123,180,0.35)" }}>
              Get a Free Demo
            </button>
          </nav>
        </div>

        {/* Wide mega menu */}
        <div style={{ marginTop: 20, display: "flex", justifyContent: "center" }}>
          <div style={{ background: charcoal, border: `1px solid #243757`, borderRadius: 14, padding: 28, width: 1040, boxShadow: "0 24px 60px rgba(0,0,0,0.4)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1.3fr 1fr", gap: 32 }}>
              <Column title="What We Build" items={[
                { icon: Palette, label: "Custom Website Design" },
                { icon: MousePointerClick, label: "Funnel Pages" },
                { icon: Magnet, label: "Lead Generation Systems" },
                { icon: FileText, label: "Patient Intake Flows" },
              ]} />
              <Column title="How We Get You Found" items={[
                { icon: Search, label: "Local SEO" },
                { icon: Sparkles, label: "GEO — AI Search Optimization" },
                { icon: MapPin, label: "Google Business Profile" },
              ]} />
              <Column title="Who We Serve" items={[
                { icon: Stethoscope, label: "Healthcare Practices" },
                { icon: Calculator, label: "Accounting & Legal" },
                { icon: Brain, label: "Therapy & Counseling" },
              ]} extraLink="See all 12 industries →" />
            </div>
            <div style={{ borderTop: `1px solid #1f2f4a`, marginTop: 22, paddingTop: 18, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <FeatureCard title="Free Website Audit" desc="60-second form. Get a real review of your current site." cta="Start free audit" />
              <FeatureCard title="Talk to Tim" desc="20-min call. We'll walk you through what we'd build for you." cta="Book a call" icon={Phone} />
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

function Column({ title, items, extraLink }: { title: string; items: { icon: any; label: string }[]; extraLink?: string }) {
  return (
    <div>
      <div style={{ color: orange, fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 14 }}>{title}</div>
      <div style={{ display: "grid", gap: 4 }}>
        {items.map((i) => (
          <div key={i.label} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 10px", borderRadius: 8, color: offwhite, fontSize: 13 }}>
            <i.icon size={15} color={orange} />
            <span>{i.label}</span>
          </div>
        ))}
        {extraLink && <div style={{ color: stone, fontSize: 12, padding: "6px 10px", marginTop: 4 }}>{extraLink}</div>}
      </div>
    </div>
  );
}

function FeatureCard({ title, desc, cta, icon: Icon }: { title: string; desc: string; cta: string; icon?: any }) {
  return (
    <div style={{ background: "rgba(46,123,180,0.08)", border: `1px solid rgba(46,123,180,0.25)`, borderRadius: 10, padding: 14, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
      <div>
        <div style={{ color: offwhite, fontSize: 13, fontWeight: 700, display: "flex", alignItems: "center", gap: 6 }}>
          {Icon && <Icon size={14} color={orange} />}
          {title}
        </div>
        <div style={{ color: stone, fontSize: 11.5, marginTop: 2 }}>{desc}</div>
      </div>
      <div style={{ color: orange, fontSize: 12, fontWeight: 700, display: "flex", alignItems: "center", gap: 4, whiteSpace: "nowrap" }}>
        {cta} <ArrowRight size={12} />
      </div>
    </div>
  );
}
