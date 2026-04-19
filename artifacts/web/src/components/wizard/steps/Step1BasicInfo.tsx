import { useState } from "react";
import { useWizard } from "../WizardContext";

export function Step1BasicInfo() {
  const { data, updateData, goNext } = useWizard();
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!data.firstName.trim()) errs.firstName = "First name is required";
    if (!data.businessName.trim()) errs.businessName = "Business name is required";
    if (!data.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errs.email = "Enter a valid email";
    if (!data.phone.trim()) errs.phone = "Phone number is required";
    if (!data.serviceArea.trim()) errs.serviceArea = "Service area is required";
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
        First, the basics
      </h2>
      <p className="text-slate-600 font-sans mb-10">
        Just a few quick details so we know who is reaching out and where you serve clients.
      </p>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-charcoal font-sans text-sm font-semibold">First Name *</label>
          <input
            type="text"
            value={data.firstName}
            onChange={(e) => updateData({ firstName: e.target.value })}
            placeholder="Jane"
            className="bg-white border border-slate-300 rounded-lg p-4 text-charcoal font-sans text-lg focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-all placeholder:text-slate-400"
          />
          {errors.firstName && <span className="text-red-600 text-sm font-sans">{errors.firstName}</span>}
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-charcoal font-sans text-sm font-semibold">Business Name *</label>
          <input
            type="text"
            value={data.businessName}
            onChange={(e) => updateData({ businessName: e.target.value })}
            placeholder="Jane's Consulting"
            className="bg-white border border-slate-300 rounded-lg p-4 text-charcoal font-sans text-lg focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-all placeholder:text-slate-400"
          />
          {errors.businessName && <span className="text-red-600 text-sm font-sans">{errors.businessName}</span>}
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-charcoal font-sans text-sm font-semibold">Email Address *</label>
          <input
            type="email"
            value={data.email}
            onChange={(e) => updateData({ email: e.target.value })}
            placeholder="jane@yourbusiness.com"
            className="bg-white border border-slate-300 rounded-lg p-4 text-charcoal font-sans text-lg focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-all placeholder:text-slate-400"
          />
          {errors.email && <span className="text-red-600 text-sm font-sans">{errors.email}</span>}
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-charcoal font-sans text-sm font-semibold">Phone Number *</label>
          <input
            type="tel"
            value={data.phone}
            onChange={(e) => updateData({ phone: e.target.value })}
            placeholder="(555) 123-4567"
            className="bg-white border border-slate-300 rounded-lg p-4 text-charcoal font-sans text-lg focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-all placeholder:text-slate-400"
          />
          {errors.phone && <span className="text-red-600 text-sm font-sans">{errors.phone}</span>}
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-charcoal font-sans text-sm font-semibold">Primary Service Area *</label>
          <input
            type="text"
            value={data.serviceArea}
            onChange={(e) => updateData({ serviceArea: e.target.value })}
            placeholder="Austin, TX or 78701, 78702"
            className="bg-white border border-slate-300 rounded-lg p-4 text-charcoal font-sans text-lg focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-all placeholder:text-slate-400"
          />
          <span className="text-slate-400 text-xs font-sans">City, State or zip code(s) where you serve clients</span>
          {errors.serviceArea && <span className="text-red-600 text-sm font-sans">{errors.serviceArea}</span>}
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
