import { useState } from "react";
import { useWizard } from "../WizardContext";

export function Step3A_WebsiteUrl() {
  const { data, updateData, goNext } = useWizard();
  const [error, setError] = useState("");

  const handleContinue = () => {
    if (!data.websiteUrl.trim()) {
      setError("Please enter your website URL");
      return;
    }
    const urlPattern = /^https?:\/\/.+\..+/;
    if (!urlPattern.test(data.websiteUrl.trim())) {
      setError("Enter a valid URL (e.g., https://yoursite.com)");
      return;
    }
    setError("");
    goNext();
  };

  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-display text-offwhite mb-3">
        What's your website URL?
      </h2>
      <p className="text-stone font-sans mb-10">
        We'll review it before your call so we can show you exactly what to improve.
      </p>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-offwhite font-sans text-sm font-semibold">Website URL *</label>
          <input
            type="url"
            value={data.websiteUrl}
            onChange={(e) => updateData({ websiteUrl: e.target.value })}
            placeholder="https://www.yoursite.com"
            className="bg-charcoal border border-gunmetal rounded-lg p-4 text-offwhite font-sans text-lg focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-all placeholder:text-stone/50"
          />
          {error && <span className="text-red-400 text-sm font-sans">{error}</span>}
        </div>

        <button
          onClick={handleContinue}
          className="mt-4 bg-orange text-white font-sans font-semibold text-lg px-8 py-4 rounded-lg hover:bg-orange/90 transition-all shadow-[0_4px_14px_rgba(232,99,26,0.25)] hover:shadow-[0_6px_20px_rgba(232,99,26,0.35)] hover:-translate-y-0.5"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
