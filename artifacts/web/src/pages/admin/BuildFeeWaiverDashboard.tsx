import { Component, type ErrorInfo, type ReactNode, useCallback, useEffect, useState } from "react";
import { AdminLogin } from "@/components/admin/AdminLogin";
import { CampaignControl } from "@/components/admin/CampaignControl";
import { PromotionPopup } from "@/components/promotion/PromotionPopup";
import { mergePromotionCampaign, PromotionVariant, PromotionCampaign } from "@/lib/promotion";
import {
  Campaign,
  downloadExport,
  getAdminSession,
  getCampaign,
  getPublicCampaignStatus,
  getReport,
  PromotionLead,
  PromotionReport,
  ReportFilters,
  updateCampaign,
} from "@/components/admin/adminApi";
import { EconomicsPanel } from "@/components/admin/EconomicsPanel";
import { ExperimentHealth } from "@/components/admin/ExperimentHealth";
import { LeadTable } from "@/components/admin/LeadTable";
import { EMPTY_REPORT_FILTERS, ReportFilters as ReportFiltersPanel } from "@/components/admin/ReportFilters";

type AuthState = "checking" | "unauthenticated" | "authenticated";

type PublicCampaign = {
  active?: boolean;
  campaign: PromotionCampaign;
};

type AdminErrorBoundaryState = {
  error: Error | null;
};

class AdminErrorBoundary extends Component<{ children: ReactNode }, AdminErrorBoundaryState> {
  state: AdminErrorBoundaryState = { error: null };

  static getDerivedStateFromError(error: Error): AdminErrorBoundaryState {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    void info;
    void error;
  }

  render() {
    if (!this.state.error) return this.props.children;
    return (
      <main className="app-fade-in flex min-h-screen items-center justify-center bg-[#0e1117] px-5 py-16 text-[#f3f1ed] sm:px-8">
        <section className="w-full max-w-2xl border border-red-400/40 bg-[#171b23] p-6 shadow-2xl shadow-black/30 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-300">Dashboard error</p>
          <h1 className="mt-3 text-2xl font-bold text-white">The admin dashboard could not render</h1>
          <p className="mt-3 text-sm leading-6 text-[#d8dce3]">
            An unexpected dashboard error occurred. The page did not load an empty or partial
            report. Reload the page or contact the site administrator.
          </p>
          <p className="mt-4 border border-red-400/25 bg-red-950/20 px-3 py-3 text-sm text-red-200" role="alert">
            {this.state.error.message || "Unknown dashboard error"}
          </p>
          <button
            className="mt-6 border border-white/20 px-4 py-2.5 text-sm font-semibold text-[#d8dce3] hover:border-[#e85d26] hover:text-white"
            onClick={() => window.location.reload()}
            type="button"
          >
            Reload dashboard
          </button>
        </section>
      </main>
    );
  }
}

function validateReport(report: PromotionReport): PromotionReport {
  if (
    !report ||
    !report.campaign ||
    !Array.isArray(report.metrics) ||
    !Array.isArray(report.leads) ||
    !Array.isArray(report.economics) ||
    !report.evaluation
  ) {
    throw new Error("The report response is missing required dashboard fields.");
  }
  return report;
}

function BuildFeeWaiverDashboardContent() {
  const [authState, setAuthState] = useState<AuthState>("checking");
  const [csrfToken, setCsrfToken] = useState("");
  const [sessionError, setSessionError] = useState("");
  const [campaign, setCampaign] = useState<Campaign | null>(null);
  const [publicCampaign, setPublicCampaign] = useState<PublicCampaign | null>(null);
  const [campaignLoading, setCampaignLoading] = useState(false);
  const [campaignError, setCampaignError] = useState("");
  const [actionError, setActionError] = useState("");
  const [report, setReport] = useState<PromotionReport | null>(null);
  const [reportLoading, setReportLoading] = useState(false);
  const [reportError, setReportError] = useState("");
  const [filters, setFilters] = useState<ReportFilters>(EMPTY_REPORT_FILTERS);
  const [appliedFilters, setAppliedFilters] = useState<ReportFilters>(EMPTY_REPORT_FILTERS);
  const [exporting, setExporting] = useState<"aggregate" | "leads" | null>(null);
  const [toggling, setToggling] = useState(false);
  const [previewVariant, setPreviewVariant] = useState<Exclude<PromotionVariant, "control"> | null>(null);

  const loadCampaignState = useCallback(async () => {
    setCampaignLoading(true);
    setCampaignError("");
    try {
      const adminResult = await getCampaign();
      let publicResult = null;
      try {
        publicResult = await getPublicCampaignStatus();
      } catch (err) {
        publicResult = null; // Indicates fetch failure
      }
      
      setCampaign(adminResult.campaign);
      setPublicCampaign(publicResult);
      
      const occurrence = publicResult?.campaign?.occurrenceKey || adminResult.campaign.occurrenceKey || "";
      const initialFilters = { ...EMPTY_REPORT_FILTERS, occurrenceKey: occurrence };
      setFilters(initialFilters);
      setAppliedFilters(initialFilters);
      
      return { campaign: adminResult.campaign, filters: initialFilters };
    } catch (caught) {
      const message = caught instanceof Error ? caught.message : "Unable to load campaign configuration.";
      setCampaignError(message);
      return null;
    } finally {
      setCampaignLoading(false);
    }
  }, []);

  const loadReport = useCallback(async (nextFilters: ReportFilters = appliedFilters) => {
    setReportLoading(true);
    setReportError("");
    try {
      const result = validateReport(await getReport(nextFilters));
      setReport(result);
    } catch (caught) {
      setReport(null);
      setReportError(caught instanceof Error ? caught.message : "Unable to load the report.");
    } finally {
      setReportLoading(false);
    }
  }, [appliedFilters]);

  useEffect(() => {
    const controller = new AbortController();
    setAuthState("checking");
    getAdminSession(controller.signal)
      .then((session) => {
        if (!session.authenticated) {
          setAuthState("unauthenticated");
          return;
        }
        if (!session.csrfToken) {
          throw new Error("The authenticated session did not provide a CSRF token.");
        }
        setCsrfToken(session.csrfToken);
        setAuthState("authenticated");
      })
      .catch((caught) => {
        if (controller.signal.aborted) return;
        setSessionError(caught instanceof Error ? caught.message : "Unable to check admin session.");
        setAuthState("unauthenticated");
      });
    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (authState !== "authenticated") return;
    void loadCampaignState();
  }, [authState, loadCampaignState]);

  useEffect(() => {
    if (authState !== "authenticated" || !campaign) return;
    if (!campaign.dashboardEnabled) {
      setReport(null);
      setReportError("");
      return;
    }
    void loadReport(appliedFilters);
  }, [authState, campaign?.dashboardEnabled, appliedFilters, loadReport]);

  function onAuthenticated(token: string) {
    setSessionError("");
    setCsrfToken(token);
    setAuthState("authenticated");
  }

  async function refreshAll() {
    const state = await loadCampaignState();
    if (state?.campaign?.dashboardEnabled) await loadReport(state.filters);
    else setReport(null);
  }
  
  async function handleTogglePopup(turnOn: boolean) {
    if (!campaign) return;
    setToggling(true);
    setActionError("");
    try {
      let next;
      if (turnOn) {
        next = await updateCampaign(
          {
            enabled: true,
            popupEnabled: true,
            dashboardEnabled: true,
            manualKillSwitch: false,
            confirmEnabled: true,
          },
          csrfToken
        );
      } else {
        next = await updateCampaign(
          {
            enabled: false,
          },
          csrfToken
        );
      }
      setCampaign(next.campaign);
      
      try {
        const publicResult = await getPublicCampaignStatus();
        setPublicCampaign(publicResult);
      } catch (err) {
        setPublicCampaign(null);
      }
      
    } catch (err) {
      setActionError(err instanceof Error ? err.message : "Failed to toggle popup.");
    } finally {
      setToggling(false);
    }
  }

  async function exportReport(type: "aggregate" | "leads") {
    setExporting(type);
    setReportError("");
    try {
      const blob = await downloadExport(type, appliedFilters);
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = `build-fee-waiver-${type}-${new Date().toISOString().slice(0, 10)}.csv`;
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
      URL.revokeObjectURL(url);
    } catch (caught) {
      setReportError(caught instanceof Error ? caught.message : "Unable to export report.");
    } finally {
      setExporting(null);
    }
  }

  function updateLead(lead: PromotionLead) {
    const leadKey = lead.leadId || lead.internalLeadId || (lead.id === undefined ? "" : String(lead.id));
    setReport((previous) => previous ? {
      ...previous,
      leads: previous.leads.map((item) => {
        const itemKey = item.leadId || item.internalLeadId || (item.id === undefined ? "" : String(item.id));
        return itemKey === leadKey ? lead : item;
      }),
    } : previous);
  }

  if (authState === "checking") {
    return <DashboardState title="Checking secure session…" detail="The server is verifying your admin session." />;
  }

  if (authState === "unauthenticated") {
    return (
      <>
        {sessionError ? (
          <div className="border-b border-red-400/30 bg-red-950/30 px-5 py-3 text-center text-sm text-red-100" role="alert">
            {sessionError}
          </div>
        ) : null}
        <AdminLogin onAuthenticated={onAuthenticated} />
      </>
    );
  }

  if (campaignLoading && !campaign) {
    return <DashboardState title="Loading dashboard…" detail="Fetching live campaign status." />;
  }

  if (!campaign) {
    return (
      <DashboardState
        title="Configuration unavailable"
        detail={campaignError || "The server did not return a campaign."}
        action={() => { void loadCampaignState(); }}
      />
    );
  }

  const isPublicStatusUnavailable = publicCampaign === null;
  const isEffectivelyOn = Boolean(!isPublicStatusUnavailable && publicCampaign?.active && campaign.popupEnabled);
  const isControl100 = campaign.trafficAllocationControl === 100;
  
  const disabledReason = (() => {
    if (isPublicStatusUnavailable) return "Public API status unavailable.";
    if (isEffectivelyOn && isControl100) return "Currently active, but 100% of traffic is routed to the control group (no popup).";
    if (!campaign.enabled) return "Campaign is disabled.";
    if (campaign.manualKillSwitch) return "Manual kill switch is engaged.";
    if (!campaign.popupEnabled) return "Popup is disabled in advanced configuration.";
    if (campaign.recurrenceMode === "manual") {
      const end = campaign.endDateTime ? Date.parse(campaign.endDateTime) : Number.NaN;
      if (Number.isFinite(end) && Date.now() > end) return "Campaign has expired.";
    }
    if (publicCampaign && !publicCampaign.active) return "The public API indicates the campaign is inactive.";
    return null;
  })();

  const variants = report?.metrics || [];
  const metricsUnavailable = !report || reportError || reportLoading;
  const eligible = metricsUnavailable ? null : variants.reduce((sum, v) => sum + (v.eligibleVisitors || 0), 0);
  const impressions = metricsUnavailable ? null : variants.reduce((sum, v) => sum + (v.counts?.promo_popup_impression || 0), 0);
  const clicks = metricsUnavailable ? null : variants.reduce((sum, v) => sum + (v.counts?.promo_popup_cta_clicked || 0), 0);
  const clickRate = metricsUnavailable ? null : ((impressions || 0) > 0 ? (((clicks || 0) / (impressions || 1)) * 100).toFixed(1) : "0.0");

  const dashboardDisabled = campaign.dashboardEnabled === false;

  return (
    <main className="min-h-screen bg-[#0e1117] px-4 py-10 text-[#f3f1ed] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        
        {campaignError ? <ErrorBanner message={campaignError} /> : null}
        {actionError ? <ErrorBanner message={actionError} /> : null}

        {/* TOP STATUS & TOGGLE */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-[#171b23] border border-white/10 p-6 sm:p-8 rounded-lg mb-8 shadow-xl shadow-black/20 gap-6">
          <div className="max-w-xl">
            <h1 className="text-3xl font-bold text-white tracking-tight">Popup Dashboard</h1>
            <p className="text-[#aeb5c0] mt-2 text-sm leading-relaxed">
              {isEffectivelyOn && !isControl100 
                ? "The popup is currently active and visible to eligible visitors." 
                : disabledReason || "The popup is inactive."}
            </p>
            {isEffectivelyOn && !isControl100 && (
              <p className="text-xs text-[#8f98a7] mt-3 border-l-2 border-[#e85d26] pl-3 py-0.5">
                Shows on homepage after {campaign.triggerMinimumSeconds}sec + {Math.round(campaign.triggerMinimumScrollDepth * 100)}% scroll. 
                Currently {campaign.trafficAllocationControl}% in no-popup test group.
              </p>
            )}
          </div>
          
          <div className="shrink-0 flex items-center gap-4">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#d8dce3]">
              {isPublicStatusUnavailable ? "Status unknown" : (isEffectivelyOn ? "Active" : "Inactive")}
            </span>
            <button
              onClick={() => handleTogglePopup(!isEffectivelyOn)}
              disabled={toggling || isPublicStatusUnavailable}
              className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#e85d26] focus:ring-offset-2 focus:ring-offset-[#171b23] disabled:opacity-50 disabled:cursor-not-allowed ${
                isEffectivelyOn ? "bg-[#e85d26]" : "bg-white/10"
              }`}
              type="button"
              role="switch"
              aria-checked={isEffectivelyOn}
            >
              <span className="sr-only">Toggle popup</span>
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                  isEffectivelyOn ? "translate-x-7" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>
        
        {/* METRICS */}
        {!dashboardDisabled && (
          <div className="mb-12">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-5 gap-4">
              <h2 className="text-xl font-bold text-white">Performance</h2>
              <div className="flex items-center gap-3">
                <select 
                  value={filters.occurrenceKey} 
                  onChange={e => {
                    const newFilters = { ...appliedFilters, occurrenceKey: e.target.value };
                    setFilters(newFilters);
                    setAppliedFilters(newFilters);
                    void loadReport(newFilters);
                  }}
                  className="bg-[#10131a] border border-white/15 text-white text-sm px-3 py-2 outline-none focus:border-[#e85d26] transition-colors"
                  aria-label="Select month"
                >
                  <option value="">All time</option>
                  {report?.periods?.filter(p => Boolean(p.occurrenceKey)).map(p => (
                    <option key={p.occurrenceKey} value={p.occurrenceKey || ""}>{p.occurrenceKey}</option>
                  ))}
                </select>
                <button 
                  onClick={() => void loadReport(appliedFilters)} 
                  disabled={reportLoading}
                  className="px-4 py-2 border border-white/15 text-sm font-semibold uppercase tracking-wider text-white hover:border-[#e85d26] disabled:opacity-50 transition-colors"
                >
                  {reportLoading ? "..." : "Refresh"}
                </button>
              </div>
            </div>

            {reportError ? <ErrorBanner message={reportError} /> : null}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-[#171b23] border border-white/10 p-6 shadow-md relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                </div>
                <h3 className="text-xs font-semibold text-[#8f98a7] uppercase tracking-[0.15em] mb-1">Campaign traffic</h3>
                <div className="text-4xl font-bold text-white mb-2">{metricsUnavailable ? "—" : eligible?.toLocaleString()}</div>
                <p className="text-xs text-[#aeb5c0]">Tracked visitors on eligible pages (not total website traffic).</p>
              </div>
              <div className="bg-[#171b23] border border-white/10 p-6 shadow-md relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
                </div>
                <h3 className="text-xs font-semibold text-[#8f98a7] uppercase tracking-[0.15em] mb-1">Saw popup</h3>
                <div className="text-4xl font-bold text-white mb-2">{metricsUnavailable ? "—" : impressions?.toLocaleString()}</div>
                <p className="text-xs text-[#aeb5c0]">
                  {filters.occurrenceKey ? "Distinct visitors who triggered the popup display." : "Counted once per month; selected month distinct."}
                </p>
              </div>
              <div className="bg-[#171b23] border border-white/10 p-6 shadow-md relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor"><path d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"/></svg>
                </div>
                <h3 className="text-xs font-semibold text-[#8f98a7] uppercase tracking-[0.15em] mb-1">Clicked popup</h3>
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-4xl font-bold text-white">{metricsUnavailable ? "—" : clicks?.toLocaleString()}</span>
                  {!metricsUnavailable && <span className="text-sm font-semibold text-[#e85d26]">{clickRate}% rate</span>}
                </div>
                <p className="text-xs text-[#aeb5c0]">Clicks on the primary call-to-action.</p>
              </div>
            </div>
          </div>
        )}

        {/* PREVIEW TOOLS */}
        <div className="bg-[#10131a] border border-white/5 p-6 rounded mb-12">
          <h3 className="text-xs font-semibold text-white uppercase tracking-[0.15em] mb-2">Popup Preview Tools</h3>
          <p className="text-sm text-[#8f98a7] mb-5 max-w-3xl">
            Admin-local popup preview. This safely renders the popup configuration without modifying live data or navigating away.
            Preview mode is for visual checking only; no lead forms or events are recorded.
          </p>
          <div className="flex flex-wrap gap-3">
            <button onClick={() => alert("Control does not show a popup.")} className="px-4 py-2 bg-white/5 border border-white/10 text-xs font-semibold text-[#d8dce3] hover:border-[#e85d26] hover:text-white transition">Preview Control (No Popup)</button>
            <button onClick={() => setPreviewVariant("savings_led")} disabled={!publicCampaign?.campaign?.endDateTime} className="px-4 py-2 bg-white/5 border border-white/10 text-xs font-semibold text-[#d8dce3] hover:border-[#e85d26] hover:text-white transition disabled:opacity-50">Preview Variant A</button>
            <button onClick={() => setPreviewVariant("direction_led")} disabled={!publicCampaign?.campaign?.endDateTime} className="px-4 py-2 bg-white/5 border border-white/10 text-xs font-semibold text-[#d8dce3] hover:border-[#e85d26] hover:text-white transition disabled:opacity-50">Preview Variant B</button>
          </div>
        </div>

        {/* ADVANCED SECTION */}
        <details className="mt-12 group">
          <summary className="cursor-pointer text-xs font-semibold uppercase tracking-[0.2em] text-[#aeb5c0] hover:text-white transition list-none flex items-center gap-3 border-b border-white/10 pb-4">
            <span className="transform transition-transform group-open:rotate-90">▶</span>
            <span>Advanced Configuration & Reporting</span>
          </summary>
          
          <div className="pt-8 space-y-8 animate-in fade-in slide-in-from-top-4 duration-300">
            <CampaignControl
              campaign={campaign}
              csrfToken={csrfToken}
              onCampaignChange={(nextCampaign) => {
                setCampaign(nextCampaign);
                setActionError("");
                void getPublicCampaignStatus().then(setPublicCampaign).catch(() => setPublicCampaign(null));
                if (!nextCampaign.dashboardEnabled) setReport(null);
                else void loadReport(appliedFilters);
              }}
              onError={setActionError}
            />

            {dashboardDisabled ? (
              <section className="border border-amber-400/35 bg-amber-950/20 p-5 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">Reporting disabled</p>
                <h2 className="mt-2 text-2xl font-bold text-white">Dashboard view is disabled</h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-amber-100">
                  Report, lead, economics, and export data are hidden while dashboardEnabled is off.
                  Configuration above remains available so an authorized admin can recover reporting.
                </p>
              </section>
            ) : (
              <>
                <ReportFiltersPanel
                  exporting={exporting}
                  filters={filters}
                  onApply={() => {
                    setAppliedFilters({ ...filters });
                    void loadReport({ ...filters });
                  }}
                  onChange={setFilters}
                  onExport={exportReport}
                  periods={report?.periods}
                />

                {reportLoading ? (
                  <DashboardState title="Loading report…" detail="The report is being computed from server-side events and lead records." compact />
                ) : report ? (
                  <>
                    <ExperimentHealth report={report} />
                    <EconomicsPanel report={report} />
                    <LeadTable
                      busy={reportLoading}
                      csrfToken={csrfToken}
                      leads={report.leads}
                      onLeadUpdated={updateLead}
                      onRefresh={() => void loadReport(appliedFilters)}
                    />
                  </>
                ) : null}
              </>
            )}
          </div>
        </details>

        {previewVariant && campaign && (
          <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[200] pointer-events-none flex flex-col items-center">
            <div className="bg-amber-400 text-black text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full shadow-2xl border border-amber-500 pointer-events-auto">
              Admin Preview Mode
            </div>
            <div className="mt-2 bg-black/80 text-white/90 text-xs px-4 py-1.5 rounded-full shadow-lg pointer-events-auto backdrop-blur-sm border border-white/10">
              Preview only. No form submissions or views are recorded.
            </div>
          </div>
        )}

        {previewVariant && campaign && (
          <PromotionPopup
            open={true}
            campaign={mergePromotionCampaign(publicCampaign?.campaign)}
            variant={previewVariant}
            preview={true}
            onDismiss={() => setPreviewVariant(null)}
            onCta={() => setPreviewVariant(null)}
          />
        )}
      </div>
    </main>
  );
}

export default function BuildFeeWaiverDashboard() {
  return (
    <AdminErrorBoundary>
      <div className="app-fade-in min-h-screen bg-[#0e1117] text-[#f3f1ed]">
        <BuildFeeWaiverDashboardContent />
      </div>
    </AdminErrorBoundary>
  );
}

function ErrorBanner({ message }: { message: string }) {
  return (
    <div aria-live="assertive" className="mb-6 border border-red-400/40 bg-red-950/30 px-4 py-3 text-sm leading-6 text-red-100" role="alert">
      {message}
    </div>
  );
}

function DashboardState({
  title,
  detail,
  action,
  compact,
}: {
  title: string;
  detail: string;
  action?: () => void | Promise<void>;
  compact?: boolean;
}) {
  return (
    <main className={`${compact ? "" : "min-h-[70vh]"} bg-[#0e1117] px-5 py-16 text-[#f3f1ed] sm:px-8`}>
      <div className={`mx-auto max-w-3xl border border-white/10 bg-[#171b23] p-6 ${compact ? "" : "shadow-xl"} sm:p-8`}>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e85d26]">Dashboard state</p>
        <h1 className="mt-3 text-2xl font-bold text-white">{title}</h1>
        <p className="mt-2 text-sm leading-6 text-[#aeb5c0]">{detail}</p>
        {action ? <button className="mt-6 border border-white/20 px-4 py-2.5 text-sm font-semibold text-[#d8dce3] hover:border-[#e85d26] hover:text-white" onClick={() => void action()} type="button">Try again</button> : null}
      </div>
    </main>
  );
}
