import { useState, type FormEvent } from "react";
import { useLocation } from "wouter";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

interface PlaybookLeadFormProps {
  buttonLabel?: string;
  source?: string;
  variant?: "light" | "dark";
}

export function PlaybookLeadForm({
  buttonLabel = "Send Me the Free Playbook →",
  source = "home-builders-playbook",
  variant = "dark",
}: PlaybookLeadFormProps) {
  const [, setLocation] = useLocation();
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const inputBase =
    "w-full rounded-md border bg-white text-gray-900 placeholder-gray-400 px-4 py-3 text-base font-sans focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/30 transition";
  const inputCls =
    variant === "dark"
      ? `${inputBase} border-white/15`
      : `${inputBase} border-gray-300`;

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);

    const trimmedName = firstName.trim();
    const trimmedEmail = email.trim();
    if (!trimmedName) {
      setError("Please enter your first name.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch(`${import.meta.env.BASE_URL}api/playbook-lead`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: trimmedName,
          email: trimmedEmail,
          source,
        }),
        keepalive: true,
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.success) {
        setError(
          data?.error ||
            "Something went wrong sending your playbook. Please try again.",
        );
        setSubmitting(false);
        return;
      }

      try {
        if (typeof window.gtag === "function") {
          window.gtag("event", "Lead", {
            event_category: "funnel",
            event_label: source,
            transport_type: "beacon",
            value: 1,
          });
          window.gtag("event", "generate_lead", {
            event_category: "funnel",
            event_label: source,
            transport_type: "beacon",
            value: 1,
          });
        }
      } catch {
        // ignore
      }
      try {
        if (typeof window.fbq === "function") {
          window.fbq("track", "Lead", { content_name: source });
        }
      } catch {
        // ignore
      }

      window.setTimeout(() => {
        setLocation("/home-builders-playbook/thank-you");
      }, 80);
    } catch {
      setError("Network error. Please try again.");
      setSubmitting(false);
    }
  }

  const microCls =
    variant === "dark" ? "text-white/55" : "text-gray-500";

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md" noValidate>
      <div className="space-y-3">
        <input
          type="text"
          name="first_name"
          autoComplete="given-name"
          placeholder="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className={inputCls}
          required
          disabled={submitting}
        />
        <input
          type="email"
          name="email"
          autoComplete="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputCls}
          required
          disabled={submitting}
        />
        <button
          type="submit"
          disabled={submitting}
          className="cta-shimmer w-full bg-orange text-white font-sans font-semibold tracking-wide px-6 py-4 rounded-md transition-all duration-300 hover:bg-orange/90 hover:-translate-y-0.5 shadow-[0_4px_14px_rgba(46,123,180,0.25)] hover:shadow-[0_6px_24px_rgba(46,123,180,0.4)] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
        >
          {submitting ? "Sending..." : buttonLabel}
        </button>
      </div>
      {error && (
        <p className="mt-3 text-sm font-sans text-red-300 bg-red-500/10 border border-red-500/30 rounded-md px-3 py-2">
          {error}
        </p>
      )}
      <p className={`mt-3 text-xs font-sans ${microCls}`}>
        100% Free. No spam. Unsubscribe anytime.
      </p>
    </form>
  );
}
