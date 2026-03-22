import { useWizard } from "../WizardContext";
import { cn } from "@/lib/utils";
import { Store, Wrench, Monitor, Briefcase, MoreHorizontal } from "lucide-react";

const types = [
  { value: "Local Service", label: "Local Service Business", icon: Wrench },
  { value: "E-commerce", label: "E-commerce / Online Store", icon: Store },
  { value: "SaaS", label: "SaaS / Software", icon: Monitor },
  { value: "Agency", label: "Agency / Consulting", icon: Briefcase },
  { value: "Other", label: "Other", icon: MoreHorizontal },
];

export function Step3B_BusinessType() {
  const { data, updateData, goNext } = useWizard();

  const handleSelect = (type: string) => {
    updateData({ businessType: type });
    setTimeout(() => goNext(), 300);
  };

  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-display text-offwhite mb-3">
        What type of business is this?
      </h2>
      <p className="text-stone font-sans mb-10">
        This helps us understand your market and build a better growth report.
      </p>

      <div className="flex flex-col gap-4">
        {types.map((type) => (
          <button
            key={type.value}
            onClick={() => handleSelect(type.value)}
            className={cn(
              "flex items-center gap-4 p-5 rounded-xl border-2 transition-all duration-300 cursor-pointer text-left group",
              data.businessType === type.value
                ? "border-orange bg-orange/10"
                : "border-gunmetal bg-navy hover:border-orange/50"
            )}
          >
            <type.icon size={24} className={cn("flex-shrink-0 transition-colors", data.businessType === type.value ? "text-orange" : "text-stone group-hover:text-orange")} />
            <span className="text-lg font-sans font-semibold text-offwhite">{type.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
