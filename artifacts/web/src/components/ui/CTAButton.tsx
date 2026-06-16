import { Link } from "wouter";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'dark' | 'funnel' | 'funnelOutline';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

export function CTAButton({ href, children, variant = 'primary', className, onClick, type = 'button' }: CTAButtonProps) {
  const baseClasses = "cta-shimmer inline-flex items-center justify-center font-sans font-semibold tracking-wide px-8 py-4 rounded transition-all duration-300";
  
  const variants = {
    primary: "bg-orange text-white hover:bg-orange/90 shadow-[0_4px_14px_rgba(232,93,38,0.25)] hover:shadow-[0_6px_24px_rgba(232,93,38,0.4)] hover:-translate-y-0.5",
    outline: "border-2 border-orange text-orange hover:bg-orange hover:text-white bg-transparent hover:shadow-[0_4px_20px_rgba(232,93,38,0.25)]",
    dark: "bg-charcoal text-white hover:bg-navy shadow-lg hover:-translate-y-0.5 border border-gunmetal hover:border-orange/30 hover:shadow-[0_4px_20px_rgba(232,93,38,0.15)]",
    funnel: "bg-[#E85D26] text-white hover:bg-[#d14d1a] shadow-lg hover:shadow-xl hover:-translate-y-0.5",
    funnelOutline: "border-2 border-[#B23E16] text-[#B23E16] bg-transparent hover:bg-[#E85D26] hover:border-[#E85D26] hover:text-white hover:-translate-y-0.5"
  };

  const classes = cn(baseClasses, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
