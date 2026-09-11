import { FormEvent, useState } from "react";
import { loginAdmin } from "./adminApi";

type AdminLoginProps = {
  onAuthenticated: (csrfToken: string) => void;
};

export function AdminLogin({ onAuthenticated }: AdminLoginProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const result = await loginAdmin(username, password);
      if (!result.authenticated || !result.csrfToken) {
        throw new Error("The server did not authenticate this admin account.");
      }
      // Never persist the password. The session cookie is set by the server;
      // the CSRF token remains in memory for this page session only.
      setPassword("");
      onAuthenticated(result.csrfToken);
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Unable to sign in.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="min-h-[70vh] bg-[#0e1117] px-5 py-16 text-[#f3f1ed] sm:px-8">
      <div className="mx-auto max-w-md">
        <div className="mb-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#e85d26]">
            Graylock internal
          </p>
          <h1 className="text-4xl font-bold tracking-tight">Promotion dashboard</h1>
          <p className="mt-3 text-sm leading-6 text-[#aeb5c0]">
            Sign in with an authorized admin account. The dashboard is not available to public
            visitors.
          </p>
          <p className="mt-3 border-l-2 border-[#e85d26] pl-3 text-xs leading-5 text-[#8f98a7]">
            If the server reports that promotion admin authentication is not configured, an
            administrator must set the required server-side credentials before sign-in can work.
          </p>
        </div>

        <form
          className="border border-white/10 bg-[#171b23] p-6 shadow-2xl shadow-black/25 sm:p-8"
          onSubmit={handleSubmit}
        >
          <div className="space-y-5">
            <label className="block">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-[#aeb5c0]">
                Username
              </span>
              <input
                autoComplete="username"
                className="w-full border border-white/15 bg-[#0e1117] px-3 py-3 text-base text-white outline-none transition focus:border-[#e85d26]"
                disabled={submitting}
                required
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-[#aeb5c0]">
                Password
              </span>
              <input
                autoComplete="current-password"
                className="w-full border border-white/15 bg-[#0e1117] px-3 py-3 text-base text-white outline-none transition focus:border-[#e85d26]"
                disabled={submitting}
                required
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </label>
          </div>

          {error ? (
            <p
              aria-live="assertive"
              className="mt-5 border border-red-400/40 bg-red-950/30 px-3 py-3 text-sm leading-5 text-red-200"
              role="alert"
            >
              {error}
            </p>
          ) : null}

          <button
            className="mt-7 w-full bg-[#e85d26] px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#f2733b] disabled:cursor-not-allowed disabled:opacity-50"
            disabled={submitting}
            type="submit"
          >
            {submitting ? "Signing in…" : "Sign in"}
          </button>
        </form>
      </div>
    </main>
  );
}