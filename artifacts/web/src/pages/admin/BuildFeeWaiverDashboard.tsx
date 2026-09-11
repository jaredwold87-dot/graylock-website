import { Component, type ErrorInfo, type ReactNode, useCallback, useEffect, useState } from "react";
import { AdminLogin } from "@/components/admin/AdminLogin";
import { CampaignControl } from "@/components/admin/CampaignControl";
import {
  Campaign,
  downloadExport,
  getAdminSession,
  getCampaign,
  getReport,
  PromotionLead,
  PromotionReport,
  ReportFilters,
} from "@/components/admin/adminApi";
import { EconomicsPanel } from "@/components/admin/EconomicsPanel";
import { ExperimentHealth } from "@/components/admin/ExperimentHealth";
import { LeadTable } from "@/components/admin/LeadTable";
import { EMPTY_REPORT_FILTERS, ReportFilters as ReportFiltersPanel } from "@/components/admin/ReportFilters";

type AuthState = "checking" | "unauthenticated" | "authenticated";

type AdminErrorBoundaryState = {
  error: Error | null;
};

class AdminErrorBoundary extends Component<{ children: ReactNode }, AdminErrorBoundaryState> {
  state: AdminErrorBoundaryState = { error: null };

  static getDerivedStateFromError(error: Error): AdminErrorBoundaryState {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // Keep the restricted dashboard failure visible without logging any form
    // values or credentials to the browser UI.
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

function campaignStatus(campaign: Campaign) {
  if (campaign.manualKillSwitch) return "Paused";
  const now = Date.now();
  const start = campaign.startDateTime ? Date.parse(campaign.startDateTime) : Number.NaN;
  const end = campaign.endDateTime ? Date.parse(campaign.endDateTime) : Number.NaN;
  if (Number.isFinite(end) && now > end) return "Expired";
  if (!campaign.enabled) return "Draft";
  if (!campaign.startDateTime && !campaign.endDateTime) return "Draft";
  if (Number.isFinite(start) && now < start) return "Scheduled";
  return "Live";
}

function BuildFeeWaiverDashboardContent() {
  const [authState, setAuthState] = useState<AuthState>("checking");
  const [csrfToken, setCsrfToken] = useState("");
  const [sessionError, setSessionError] = useState("");
  const [campaign, setCampaign] = useState<Campaign | null>(null);
  const [campaignLoading, setCampaignLoading] = useState(false);
  const [campaignError, setCampaignError] = useState("");
  const [actionError, setActionError] = useState("");
  const [report, setReport] = useState<PromotionReport | null>(null);
  const [reportLoading, setReportLoading] = useState(false);
  const [reportError, setReportError] = useState("");
  const [filters, setFilters] = useState<ReportFilters>(EMPTY_REPORT_FILTERS);
  const [appliedFilters, setAppliedFilters] = useState<ReportFilters>(EMPTY_REPORT_FILTERS);
  const [exporting, setExporting] = useState<"aggregate" | "leads" | null>(null);

  const loadCampaign = useCallback(async () => {
    setCampaignLoading(true);
    setCampaignError("");
    try {
      const result = await getCampaign();
      setCampaign(result.campaign);
      return result.campaign;
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
    void loadCampaign();
  }, [authState, loadCampaign]);

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
    const nextCampaign = await loadCampaign();
    if (nextCampaign?.dashboardEnabled) await loadReport(appliedFilters);
    else setReport(null);
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
    return <DashboardState title="Loading campaign configuration…" detail="No report values are shown until the server response arrives." />;
  }

  if (!campaign) {
    return (
      <DashboardState
        title="Campaign configuration unavailable"
        detail={campaignError || "The server did not return a campaign."}
        action={() => { void loadCampaign(); }}
      />
    );
  }

  const dashboardDisabled = campaign.dashboardEnabled === false;

  return (
    <main className="min-h-screen bg-[#0e1117] px-4 py-10 text-[#f3f1ed] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1500px]">
        <header className="mb-8 flex flex-col justify-between gap-5 border-b border-white/10 pb-7 lg:flex-row lg:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#e85d26]">Graylock internal · restricted</p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Build-Fee Waiver</h1>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-[#aeb5c0]">
              Secure experiment operations for qualified demand, delivery economics, and downstream
              customer outcomes.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="border border-white/15 bg-[#171b23] px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#d8dce3]">
              {campaignStatus(campaign)}
            </span>
            <span className="border border-white/15 bg-[#171b23] px-3 py-2 text-xs text-[#aeb5c0]">
              {campaign.campaignId || "Campaign ID unavailable"}
            </span>
            <button className="border border-white/15 px-3 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-[#d8dce3] hover:border-[#e85d26] hover:text-white disabled:opacity-50" disabled={campaignLoading || reportLoading} onClick={() => void refreshAll()} type="button">
              {campaignLoading || reportLoading ? "Refreshing…" : "Refresh"}
            </button>
          </div>
        </header>

        {campaignError ? <ErrorBanner message={campaignError} /> : null}
        {actionError ? <ErrorBanner message={actionError} /> : null}

        <div className="space-y-7">
          <CampaignControl
            campaign={campaign}
            csrfToken={csrfToken}
            onCampaignChange={(nextCampaign) => {
              setCampaign(nextCampaign);
              setActionError("");
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
                onApply={() => setAppliedFilters({ ...filters })}
                onChange={setFilters}
                onExport={exportReport}
              />

              {reportError ? <ErrorBanner message={reportError} /> : null}
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
              ) : (
                <DashboardState title="Report unavailable" detail={reportError || "No report response has been received."} action={() => void loadReport(appliedFilters)} compact />
              )}
            </>
          )}
        </div>
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