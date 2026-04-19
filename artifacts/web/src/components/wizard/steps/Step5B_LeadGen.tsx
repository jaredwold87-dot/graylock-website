import { useState } from "react";
import { useWizard } from "../WizardContext";

export function Step5B_LeadGen() {
  const { data, updateData, goNext } = useWizard();
  const [error, setError] = useState("");

  const handleContinue = () => {
    if (!data.leadGenMethod.trim()) {
      setError("Please let us know how you're getting leads");
      return;
    }
    setError("");
    goNext();
  };

  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-display text-charcoal mb-3">
        How are you currently getting leads?
      </h2>
      <p className="text-slate-600 font-sans mb-10">
        This helps us understand what's working and where a website can fill the gap.
      </p>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-charcoal font-sans text-sm font-semibold">Current lead sources *</label>
          <textarea
            value={data.leadGenMethod}
            onChange={(e) => updateData({ leadGenMethod: e.target.value })}
            placeholder="e.g., Word of mouth, Google Maps, social media, Yelp, referrals..."
            rows={4}
            className="bg-white border border-slate-300 rounded-lg p-4 text-charcoal font-sans text-lg focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-all placeholder:text-slate-400 resize-y"
          />
          {error && <span className="text-red-600 text-sm font-sans">{error}</span>}
        </div>

        <button
          onClick={handleContinue}
          className="mt-4 bg-orange text-white font-sans font-semibold text-lg px-8 py-4 rounded-lg hover:bg-orange/90 transition-all shadow-[0_4px_14px_rgba(46,123,180,0.25)] hover:shadow-[0_6px_20px_rgba(46,123,180,0.35)] hover:-translate-y-0.5"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
