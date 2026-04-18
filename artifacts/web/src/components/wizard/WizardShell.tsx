import { motion, AnimatePresence } from "framer-motion";
import { useWizard } from "./WizardContext";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface WizardShellProps {
  children: React.ReactNode;
}

export function WizardShell({ children }: WizardShellProps) {
  const { currentStep, totalSteps, canGoBack, goBack, phase } = useWizard();

  if (phase !== "form") return <>{children}</>;

  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full">
      <div className="sticky top-16 md:top-[68px] z-30 bg-charcoal/95 backdrop-blur-md border-b border-gunmetal px-6 py-3">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <button
              onClick={goBack}
              disabled={!canGoBack}
              className={cn(
                "flex items-center gap-1.5 text-sm font-sans transition-colors",
                canGoBack
                  ? "text-stone hover:text-offwhite cursor-pointer"
                  : "text-gunmetal cursor-not-allowed"
              )}
            >
              <ArrowLeft size={16} />
              Back
            </button>
            <span className="text-stone/70 text-xs font-sans">
              {currentStep === totalSteps ? "Last step" : `Step ${currentStep} · about ${Math.max(1, Math.round((totalSteps - currentStep) * 0.5))} min left`}
            </span>
          </div>
          <div className="w-full bg-gunmetal rounded-full h-1.5 overflow-hidden">
            <motion.div
              className="bg-orange h-full rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-12 md:py-16 min-h-[60vh] flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
