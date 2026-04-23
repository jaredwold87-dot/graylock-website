import { ChevronDown, Stethoscope, Calculator, Briefcase, HeartPulse, Scale, Smile, Eye, Brain, Activity, Dog, Building2, FileText, BarChart3, HelpCircle, BookOpen } from "lucide-react";

const navy = "#0F1E35";
const charcoal = "#13243F";
const offwhite = "#F2F3F5";
const stone = "#9CA8B8";
const orange = "#2E7BB4";

const industries = [
  { icon: Brain, label: "Therapists & Counselors" },
  { icon: Smile, label: "Dentists" },
  { icon: HeartPulse, label: "Physicians" },
  { icon: Eye, label: "Optometrists" },
  { icon: Activity, label: "Physical Therapists" },
  { icon: Stethoscope, label: "Chiropractors" },
  { icon: Dog, label: "Veterinarians" },
  { icon: Calculator, label: "Accounting Firms" },
  { icon: Scale, label: "Law Firms" },
  { icon: Briefcase, label: "Other Professional Services" },
];

export function OutcomeLed() {
  return (
    <div style={{ background: navy, minHeight: "100vh", padding: "24px 48px", fontFamily: "Inter, system-ui, sans-serif" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: 20, borderBottom: `1px solid #1f2f4a` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 38, height: 38, borderRadius: 8, background: orange, display: "grid", placeItems: "center", color: "white", fontWeight: 800, fontSize: 18 }}>G</div>
            <div style={{ color: offwhite, fontWeight: 800, letterSpacing: 2, fontSize: 18 }}>GRAYLOCK <span style={{ color: stone, fontWeight: 500, fontSize: 11, letterSpacing: 3 }}>DIGITAL</span></div>
          </div>
          <nav style={{ display: "flex", alignItems: "center", gap: 32 }}>
            <NavItem label="How We Work" />
            <NavItem label="Who We Help" active hasDropdown />
            <NavItem label="Pricing" />
            <NavItem label="Resources" hasDropdown />
            <NavItem label="About" />
            <button style={{ background: orange, color: "white", border: "none", padding: "10px 18px", borderRadius: 6, fontWeight: 700, fontSize: 13, cursor: "pointer", boxShadow: "0 2px 12px rgba(46,123,180,0.35)" }}>
              Get a Free Demo
            </button>
          </nav>
        </div>

        {/* Open mega menu */}
        <div style={{ marginTop: 20, display: "flex", justifyContent: "center" }}>
          <div style={{ background: charcoal, border: `1px solid #243757`, borderRadius: 14, padding: 28, width: 760, boxShadow: "0 24px 60px rgba(0,0,0,0.4)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
              <div>
                <div style={{ color: orange, fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Healthcare Practices</div>
                <div style={{ display: "grid", gap: 4 }}>
                  {industries.slice(0, 7).map((i) => <Row key={i.label} icon={i.icon} label={i.label} />)}
                </div>
              </div>
              <div>
                <div style={{ color: orange, fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Professional Services</div>
                <div style={{ display: "grid", gap: 4 }}>
                  {industries.slice(7).map((i) => <Row key={i.label} icon={i.icon} label={i.label} />)}
                </div>
              </div>
            </div>
            <div style={{ borderTop: `1px solid #1f2f4a`, marginTop: 18, paddingTop: 14, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ color: stone, fontSize: 12 }}>Don't see your industry? We work with most trust-based service businesses.</div>
              <a style={{ color: orange, fontSize: 12, fontWeight: 700 }}>Talk to us →</a>
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

function Row({ icon: Icon, label }: { icon: any; label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 10px", borderRadius: 8, color: stone, fontSize: 13 }}>
      <Icon size={15} color={orange} />
      <span>{label}</span>
    </div>
  );
}
