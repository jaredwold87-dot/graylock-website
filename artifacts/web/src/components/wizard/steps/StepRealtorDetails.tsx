import { useState } from "react";
import { useWizard } from "../WizardContext";

const IDX_OPTIONS = ["Yes", "No", "Not sure yet"];

/**
 * Realtor-context step (only rendered when industry=real-estate): collects
 * market/MLS/IDX details so the strategy call and demo can be prepared around
 * the prospect's property-search needs.
 */
export function StepRealtorDetails() {
  const { data, updateData, goNext } = useWizard();
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Branch A (has a website) already collected the URL in its own step; only
  // offer the optional URL field when it was skipped.
  const showWebsiteUrl = data.hasWebsite === false;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!data.idxNeed) errs.idxNeed = "Please choose an option";
    if (showWebsiteUrl && data.websiteUrl.trim()) {
      const urlPattern = /^https?:\/\/.+\..+/;
      if (!urlPattern.test(data.websiteUrl.trim())) {
        errs.websiteUrl = "Enter a valid URL (e.g., https://yoursite.com)";
      }
    }
    return errs;
  };

  const handleContinue = () => {
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    goNext();
  };

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-display text-charcoal mb-3">
        Your market and property search
      </h2>
      <p className="text-slate-600 font-sans mb-10">
        This helps us come to your call prepared to talk about your market, your MLS, and
        the property-search experience you want.
      </p>

      <div className="flex flex-col gap-6">
        {showWebsiteUrl && (
          <div className="flex flex-col gap-2">
            <label className="text-charcoal font-sans text-sm font-semibold">
              Website URL <span className="text-slate-600 font-normal">(Optional)</span>
            </label>
            <input
              type="url"
              value={data.websiteUrl}
              onChange={(e) => updateData({ websiteUrl: e.target.value })}
              placeholder="https://www.yoursite.com"
              className="bg-white border border-slate-300 rounded-lg p-4 text-charcoal font-sans text-lg focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-all placeholder:text-slate-400"
            />
            {errors.websiteUrl && (
              <span className="text-red-600 text-sm font-sans">{errors.websiteUrl}</span>
            )}
          </div>
        )}

        <div className="flex flex-col gap-2">
          <label className="text-charcoal font-sans text-sm font-semibold">
            Local MLS <span className="text-slate-600 font-normal">(Optional)</span>
          </label>
          <input
            type="text"
            value={data.localMls}
            onChange={(e) => updateData({ localMls: e.target.value })}
            placeholder="e.g., Intermountain MLS"
            className="bg-white border border-slate-300 rounded-lg p-4 text-charcoal font-sans text-lg focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-all placeholder:text-slate-400"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="idx-need" className="text-charcoal font-sans text-sm font-semibold">
            Do you need IDX property search? *
          </label>
          <select
            id="idx-need"
            value={data.idxNeed}
            onChange={(e) => updateData({ idxNeed: e.target.value })}
            className="bg-white border border-slate-300 rounded-lg p-4 text-charcoal font-sans text-lg focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-all"
          >
            <option value="" disabled>
              Select one
            </option>
            {IDX_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.idxNeed && (
            <span className="text-red-600 text-sm font-sans">{errors.idxNeed}</span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-charcoal font-sans text-sm font-semibold">
            What do you want the new website to do better?{" "}
            <span className="text-slate-600 font-normal">(Optional)</span>
          </label>
          <textarea
            value={data.realtorGoals}
            onChange={(e) => updateData({ realtorGoals: e.target.value })}
            rows={4}
            placeholder="Attract more buyers, generate seller leads, show listings, strengthen credibility, or something else?"
            className="bg-white border border-slate-300 rounded-lg p-4 text-charcoal font-sans text-lg focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-all placeholder:text-slate-400 resize-y"
          />
        </div>

        <button
          onClick={handleContinue}
          className="mt-4 bg-orange text-white font-sans font-semibold text-lg px-8 py-4 rounded-lg hover:bg-orange/90 transition-all shadow-[0_4px_14px_rgba(232,93,38,0.25)] hover:shadow-[0_6px_20px_rgba(232,93,38,0.35)] hover:-translate-y-0.5"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
