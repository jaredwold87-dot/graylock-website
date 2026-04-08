import { useWizard } from "../WizardContext";

export function Step6A_Branding() {
  const { data, updateData, goNext } = useWizard();

  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-display text-offwhite mb-3">
        Any branding preferences?
      </h2>
      <p className="text-stone font-sans mb-10">
        Colors, fonts, style direction — anything you'd like us to keep in mind for your mockup.
      </p>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-offwhite font-sans text-sm font-semibold">
            Branding notes <span className="text-stone font-normal">(Optional)</span>
          </label>
          <textarea
            value={data.brandingNotes}
            onChange={(e) => updateData({ brandingNotes: e.target.value })}
            placeholder="e.g., We use dark blue and gold, modern feel, keep our existing logo, etc."
            rows={4}
            className="bg-charcoal border border-gunmetal rounded-lg p-4 text-offwhite font-sans text-lg focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-all placeholder:text-stone/50 resize-y"
          />
        </div>

        <button
          onClick={() => goNext()}
          className="mt-4 bg-orange text-white font-sans font-semibold text-lg px-8 py-4 rounded-lg hover:bg-orange/90 transition-all shadow-[0_4px_14px_rgba(232,99,26,0.25)] hover:shadow-[0_6px_20px_rgba(232,99,26,0.35)] hover:-translate-y-0.5"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
