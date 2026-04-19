import { useWizard } from "../WizardContext";
import { cn } from "@/lib/utils";
import { Target, Users, Search, BarChart3, HelpCircle } from "lucide-react";

const goals = [
  { value: "More leads", label: "Get more leads", icon: Target },
  { value: "Better leads", label: "Get better quality leads", icon: Users },
  { value: "SEO", label: "Rank higher on Google", icon: Search },
  { value: "Conversions", label: "Convert more visitors", icon: BarChart3 },
  { value: "Not sure", label: "Not sure yet", icon: HelpCircle },
];

export function Step4A_PrimaryGoal() {
  const { data, updateData, goNext } = useWizard();

  const handleSelect = (goal: string) => {
    updateData({ primaryGoal: goal });
    setTimeout(() => goNext(), 300);
  };

  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-display text-charcoal mb-3">
        What's your primary goal?
      </h2>
      <p className="text-slate-600 font-sans mb-10">
        This helps us focus your report on what matters most to you.
      </p>

      <div className="flex flex-col gap-4">
        {goals.map((goal) => (
          <button
            key={goal.value}
            onClick={() => handleSelect(goal.value)}
            className={cn(
              "flex items-center gap-4 p-5 rounded-xl border-2 transition-all duration-300 cursor-pointer text-left group",
              data.primaryGoal === goal.value
                ? "border-orange bg-orange/10"
                : "border-slate-200 bg-white hover:border-orange/50 hover:bg-orange/5 shadow-sm"
            )}
          >
            <goal.icon size={24} className={cn("flex-shrink-0 transition-colors", data.primaryGoal === goal.value ? "text-orange" : "text-slate-600 group-hover:text-orange")} />
            <span className="text-lg font-sans font-semibold text-charcoal">{goal.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
