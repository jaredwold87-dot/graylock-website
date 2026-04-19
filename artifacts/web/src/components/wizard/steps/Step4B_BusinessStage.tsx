import { useWizard } from "../WizardContext";
import { cn } from "@/lib/utils";
import { Sprout, TrendingUp, Building2 } from "lucide-react";

const stages = [
  { value: "Just getting started", label: "Just getting started", desc: "Pre-launch or very early stage", icon: Sprout },
  { value: "Growing", label: "Growing", desc: "Have some clients, ready to scale", icon: TrendingUp },
  { value: "Established", label: "Established", desc: "Solid client base, optimizing for more", icon: Building2 },
];

export function Step4B_BusinessStage() {
  const { data, updateData, goNext } = useWizard();

  const handleSelect = (stage: string) => {
    updateData({ businessStage: stage });
    setTimeout(() => goNext(), 300);
  };

  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-display text-charcoal mb-3">
        What stage is your business in?
      </h2>
      <p className="text-slate-600 font-sans mb-10">
        This helps us tailor our recommendations to where you are right now.
      </p>

      <div className="flex flex-col gap-4">
        {stages.map((stage) => (
          <button
            key={stage.value}
            onClick={() => handleSelect(stage.value)}
            className={cn(
              "flex items-center gap-4 p-5 rounded-xl border-2 transition-all duration-300 cursor-pointer text-left group",
              data.businessStage === stage.value
                ? "border-orange bg-orange/10"
                : "border-slate-200 bg-white hover:border-orange/50 hover:bg-orange/5 shadow-sm"
            )}
          >
            <stage.icon size={28} className={cn("flex-shrink-0 transition-colors", data.businessStage === stage.value ? "text-orange" : "text-slate-600 group-hover:text-orange")} />
            <div>
              <span className="text-lg font-sans font-semibold text-charcoal block">{stage.label}</span>
              <span className="text-slate-600 text-sm font-sans">{stage.desc}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
