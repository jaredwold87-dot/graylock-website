import { useEffect, useMemo, useState } from "react";
import { SEO } from "@/components/SEO";
import { AlertTriangle, Mail, MailCheck, MailOpen, MousePointerClick, Clock, ShieldAlert, RefreshCw, LogOut, Send, X } from "lucide-react";

type LeadRow = {
  id: number;
  email: string;
  firstName: string;
  leadMagnet: string;
  status: string;
  bounceType: string | null;
  resendEmailId: string | null;
  sentAt: string;
  deliveredAt: string | null;
  openedAt: string | null;
  clickedAt: string | null;
  bouncedAt: string | null;
  complainedAt: string | null;
  deliveryDelayedAt: string | null;
  updatedAt: string;
};

type LeadsResponse = {
  success: boolean;
  total: number;
  statusCounts: Record<string, number>;
  leads: LeadRow[];
};

const TOKEN_KEY = "graylock_admin_token";

const STATUS_FILTERS: { value: string; label: string }[] = [
  { value: "", label: "All" },
  { value: "sent", label: "Sent" },
  { value: "delivered", label: "Delivered" },
  { value: "opened", label: "Opened" },
  { value: "clicked", label: "Clicked" },
  { value: "bounced", label: "Bounced" },
  { value: "complained", label: "Complained" },
  { value: "delivery_delayed", label: "Delayed" },
  { value: "suppressed", label: "Suppressed" },
];

function formatDate(value: string | null): string {
  if (!value) return "—";
  const d = new Date(value);
  if (isNaN(d.getTime())) return "—";
  return d.toLocaleString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function statusBadgeClasses(status: string): string {
  switch (status) {
    case "clicked":
      return "bg-emerald-500/15 text-emerald-300 border-emerald-500/40";
    case "opened":
      return "bg-sky-500/15 text-sky-300 border-sky-500/40";
    case "delivered":
      return "bg-blue-500/15 text-blue-300 border-blue-500/40";
    case "sent":
      return "bg-stone/20 text-stone border-stone/40";
    case "delivery_delayed":
      return "bg-yellow-500/15 text-yellow-300 border-yellow-500/40";
    case "bounced":
      return "bg-red-500/20 text-red-300 border-red-500/50";
    case "complained":
      return "bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/50";
    case "suppressed":
      return "bg-orange-500/15 text-orange-300 border-orange-500/40";
    default:
      return "bg-stone/15 text-stone border-stone/30";
  }
}

function StatusBadge({ status }: { status: string }) {
  const Icon =
    status === "clicked"
      ? MousePointerClick
      : status === "opened"
        ? MailOpen
        : status === "delivered"
          ? MailCheck
          : status === "delivery_delayed"
            ? Clock
            : status === "bounced" || status === "complained" || status === "suppressed"
              ? ShieldAlert
              : status === "sent"
                ? Send
                : Mail;
  return (
    <span
      data-testid={`status-badge-${status}`}
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-sans font-semibold uppercase tracking-wide ${statusBadgeClasses(status)}`}
    >
      <Icon size={12} />
      {status.replace(/_/g, " ")}
    </span>
  );
}

function LoginForm({ onSubmit, error }: { onSubmit: (token: string) => void; error: string | null }) {
  const [value, setValue] = useState("");
  return (
    <div className="min-h-screen bg-charcoal flex items-center justify-center px-6">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (value.trim()) onSubmit(value.trim());
        }}
        className="w-full max-w-md bg-navy border border-gunmetal rounded-2xl p-8 shadow-2xl"
      >
        <h1 className="font-display text-2xl text-offwhite mb-2">Admin sign-in</h1>
        <p className="text-stone font-sans text-sm mb-6">
          Enter your admin token to view lead-magnet email delivery status.
        </p>
        <input
          type="password"
          autoFocus
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Admin token"
          data-testid="input-admin-token"
          className="w-full px-4 py-3 rounded-lg bg-charcoal border border-gunmetal text-offwhite font-sans focus:outline-none focus:border-orange/60"
        />
        {error && (
          <p className="text-red-400 font-sans text-sm mt-3" data-testid="text-login-error">
            {error}
          </p>
        )}
        <button
          type="submit"
          data-testid="button-admin-signin"
          className="mt-5 w-full bg-orange text-charcoal font-semibold font-sans py-3 rounded-lg hover:bg-orange/90 transition-colors"
        >
          Sign in
        </button>
      </form>
    </div>
  );
}

export default function AdminLeadEmails() {
  const [token, setToken] = useState<string | null>(() =>
    typeof window === "undefined" ? null : window.localStorage.getItem(TOKEN_KEY),
  );
  const [data, setData] = useState<LeadsResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<string>("");
  const [search, setSearch] = useState("");

  async function load(currentToken: string, status: string) {
    setLoading(true);
    setError(null);
    try {
      const url = new URL(
        `${import.meta.env.BASE_URL}api/admin/lead-magnet-emails`,
        window.location.origin,
      );
      if (status) url.searchParams.set("status", status);
      const res = await fetch(url.toString(), {
        headers: { Authorization: `Bearer ${currentToken}` },
      });
      if (res.status === 401) {
        setAuthError("That token wasn't accepted. Try again.");
        window.localStorage.removeItem(TOKEN_KEY);
        setToken(null);
        return;
      }
      if (!res.ok) {
        setError(`Request failed (${res.status})`);
        return;
      }
      const json = (await res.json()) as LeadsResponse;
      setData(json);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Network error");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (token) {
      void load(token, statusFilter);
    } else {
      setData(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, statusFilter]);

  const filteredLeads = useMemo(() => {
    if (!data) return [];
    const q = search.trim().toLowerCase();
    if (!q) return data.leads;
    return data.leads.filter(
      (l) =>
        l.email.toLowerCase().includes(q) ||
        l.firstName.toLowerCase().includes(q),
    );
  }, [data, search]);

  if (!token) {
    return (
      <>
        <SEO title="Admin · Lead Emails" description="Internal admin view" noindex />
        <LoginForm
          error={authError}
          onSubmit={(t) => {
            window.localStorage.setItem(TOKEN_KEY, t);
            setAuthError(null);
            setToken(t);
          }}
        />
      </>
    );
  }

  const statusCounts = data?.statusCounts ?? {};
  const flaggedCount =
    (statusCounts.bounced ?? 0) + (statusCounts.complained ?? 0);

  return (
    <>
      <SEO title="Admin · Lead Emails" description="Internal admin view" noindex />
      <div className="min-h-screen bg-charcoal pt-28 pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
            <div>
              <p className="text-orange text-xs font-sans font-bold uppercase tracking-widest mb-2">
                Internal
              </p>
              <h1 className="font-display text-3xl md:text-4xl text-offwhite">
                Lead-magnet email delivery
              </h1>
              <p className="text-stone font-sans text-sm mt-1">
                Latest delivery state for every Playbook recipient.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => token && load(token, statusFilter)}
                disabled={loading}
                data-testid="button-refresh"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-gunmetal bg-navy text-offwhite font-sans text-sm hover:border-orange/50 disabled:opacity-50"
              >
                <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
                Refresh
              </button>
              <button
                onClick={() => {
                  window.localStorage.removeItem(TOKEN_KEY);
                  setToken(null);
                  setData(null);
                }}
                data-testid="button-signout"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-gunmetal bg-navy text-stone font-sans text-sm hover:text-offwhite hover:border-orange/50"
              >
                <LogOut size={14} />
                Sign out
              </button>
            </div>
          </div>

          {flaggedCount > 0 && (
            <div
              className="mb-5 rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 flex items-start gap-3"
              data-testid="banner-flagged"
            >
              <AlertTriangle size={18} className="text-red-300 mt-0.5" />
              <p className="text-red-200 font-sans text-sm">
                <span className="font-semibold">{flaggedCount}</span>{" "}
                {flaggedCount === 1 ? "lead is" : "leads are"} flagged as bounced or complained — review below.
              </p>
            </div>
          )}

          <div className="flex flex-wrap items-center gap-2 mb-4">
            {STATUS_FILTERS.map((opt) => {
              const count = opt.value ? statusCounts[opt.value] ?? 0 : data?.total ?? 0;
              const active = statusFilter === opt.value;
              return (
                <button
                  key={opt.value || "all"}
                  onClick={() => setStatusFilter(opt.value)}
                  data-testid={`filter-${opt.value || "all"}`}
                  className={`px-3 py-1.5 rounded-full border font-sans text-xs font-semibold uppercase tracking-wide transition-colors ${
                    active
                      ? "bg-orange text-charcoal border-orange"
                      : "bg-navy text-stone border-gunmetal hover:border-orange/50 hover:text-offwhite"
                  }`}
                >
                  {opt.label}
                  <span className={`ml-2 ${active ? "text-charcoal/70" : "text-stone/70"}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mb-4 relative max-w-md">
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by email or first name…"
              data-testid="input-search"
              className="w-full px-4 py-2.5 rounded-lg bg-navy border border-gunmetal text-offwhite font-sans text-sm focus:outline-none focus:border-orange/60"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-stone hover:text-offwhite"
                aria-label="Clear search"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {error && (
            <div className="mb-4 rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-red-200 font-sans text-sm" data-testid="text-error">
              {error}
            </div>
          )}

          <div className="rounded-2xl border border-gunmetal bg-navy overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-charcoal/60 text-stone font-sans text-xs uppercase tracking-wide">
                  <tr>
                    <th className="text-left px-4 py-3">Lead</th>
                    <th className="text-left px-4 py-3">Status</th>
                    <th className="text-left px-4 py-3">Sent</th>
                    <th className="text-left px-4 py-3">Delivered</th>
                    <th className="text-left px-4 py-3">Opened</th>
                    <th className="text-left px-4 py-3">Clicked</th>
                    <th className="text-left px-4 py-3">Issue</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gunmetal">
                  {loading && !data && (
                    <tr>
                      <td colSpan={7} className="px-4 py-10 text-center text-stone font-sans">
                        Loading…
                      </td>
                    </tr>
                  )}
                  {!loading && filteredLeads.length === 0 && (
                    <tr>
                      <td colSpan={7} className="px-4 py-10 text-center text-stone font-sans" data-testid="text-empty">
                        No leads match the current filters.
                      </td>
                    </tr>
                  )}
                  {filteredLeads.map((lead) => {
                    const flagged =
                      lead.status === "bounced" || lead.status === "complained";
                    return (
                      <tr
                        key={lead.id}
                        data-testid={`row-lead-${lead.id}`}
                        className={`text-offwhite font-sans align-top ${flagged ? "bg-red-500/5" : ""}`}
                      >
                        <td className="px-4 py-3">
                          <div className="font-semibold">{lead.firstName}</div>
                          <div className="text-stone text-xs">{lead.email}</div>
                          <div className="text-stone/70 text-[11px] mt-0.5">{lead.leadMagnet}</div>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <StatusBadge status={lead.status} />
                        </td>
                        <td className="px-4 py-3 text-stone text-xs whitespace-nowrap">{formatDate(lead.sentAt)}</td>
                        <td className="px-4 py-3 text-stone text-xs whitespace-nowrap">{formatDate(lead.deliveredAt)}</td>
                        <td className="px-4 py-3 text-stone text-xs whitespace-nowrap">{formatDate(lead.openedAt)}</td>
                        <td className="px-4 py-3 text-stone text-xs whitespace-nowrap">{formatDate(lead.clickedAt)}</td>
                        <td className="px-4 py-3 text-xs">
                          {lead.status === "bounced" && (
                            <span className="text-red-300">
                              Bounced{lead.bounceType ? ` (${lead.bounceType})` : ""}
                              <div className="text-stone/70">{formatDate(lead.bouncedAt)}</div>
                            </span>
                          )}
                          {lead.status === "complained" && (
                            <span className="text-fuchsia-300">
                              Complained
                              <div className="text-stone/70">{formatDate(lead.complainedAt)}</div>
                            </span>
                          )}
                          {lead.status === "suppressed" && (
                            <span className="text-orange-300">Address suppressed</span>
                          )}
                          {lead.status === "delivery_delayed" && (
                            <span className="text-yellow-300">
                              Delayed
                              <div className="text-stone/70">{formatDate(lead.deliveryDelayedAt)}</div>
                            </span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-stone/70 font-sans text-xs mt-4">
            Showing {filteredLeads.length} of {data?.total ?? 0} total leads.
          </p>
        </div>
      </div>
    </>
  );
}
