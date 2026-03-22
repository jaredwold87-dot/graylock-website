import { useWizard } from "../WizardContext";
import { Globe, PlusCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function Step2HasWebsite() {
  const { data, updateData, goNext } = useWizard();

  const handleSelect = (hasWebsite: boolean) => {
    updateData({ hasWebsite });
    setTimeout(() => goNext(), 300);
  };

  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-display text-offwhite mb-3">
        Do you currently have a website?
      </h2>
      <p className="text-stone font-sans mb-10">
        This helps us tailor your growth report.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <button
          onClick={() => handleSelect(true)}
          className={cn(
            "flex flex-col items-center gap-4 p-8 rounded-xl border-2 transition-all duration-300 cursor-pointer group",
            data.hasWebsite === true
              ? "border-orange bg-orange/10"
              : "border-gunmetal bg-navy hover:border-orange/50 hover:bg-navy/80"
          )}
        >
          <Globe size={40} className={cn("transition-colors", data.hasWebsite === true ? "text-orange" : "text-stone group-hover:text-orange")} />
          <span className="text-xl font-display text-offwhite">Yes, I do</span>
          <span className="text-stone text-sm font-sans">We'll review your current site</span>
        </button>

        <button
          onClick={() => handleSelect(false)}
          className={cn(
            "flex flex-col items-center gap-4 p-8 rounded-xl border-2 transition-all duration-300 cursor-pointer group",
            data.hasWebsite === false
              ? "border-orange bg-orange/10"
              : "border-gunmetal bg-navy hover:border-orange/50 hover:bg-navy/80"
          )}
        >
          <PlusCircle size={40} className={cn("transition-colors", data.hasWebsite === false ? "text-orange" : "text-stone group-hover:text-orange")} />
          <span className="text-xl font-display text-offwhite">No, not yet</span>
          <span className="text-stone text-sm font-sans">We'll help you get started</span>
        </button>
      </div>
    </div>
  );
}
