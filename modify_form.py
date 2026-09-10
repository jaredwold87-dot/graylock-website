import re

# --- 1. Modify BookCallForm.tsx ---
with open("artifacts/web/src/components/booking/BookCallForm.tsx", "r") as f:
    content = f.read()

# 1. Add AlertCircle to imports
content = content.replace(
    'import { CheckCircle, ChevronDown, Loader2 } from "lucide-react";',
    'import { CheckCircle, ChevronDown, Loader2, AlertCircle } from "lucide-react";'
)

# 2. Add styles definition inside the component
styles_def = """  const isPage = variant === "page";
  
  const styles = {
    input: isPage
      ? "w-full bg-[#F4F1EC]/40 border border-[#0F0F0F]/10 px-4 py-4 font-sans text-lg focus:outline-none focus:border-[#E85D26] focus:bg-white focus:ring-1 focus:ring-[#E85D26]/10 transition-all rounded-none placeholder:text-[#0F0F0F]/40 hover:border-[#0F0F0F]/30"
      : INPUT_BASE,
    label: isPage
      ? "text-[#0F0F0F] font-sans font-bold tracking-widest text-[13px] uppercase block"
      : LABEL_CLASSES,
    optional: isPage
      ? "text-[#0F0F0F]/40 font-sans normal-case tracking-normal text-xs font-normal ml-2"
      : OPTIONAL_CLASSES,
    legend: isPage
      ? "text-[#0F0F0F] font-sans font-bold tracking-widest text-[13px] uppercase block p-0"
      : `${LABEL_CLASSES} p-0`,
    fieldGroup: isPage ? "flex flex-col gap-2 group" : "flex flex-col gap-1.5 group",
    checkboxGrid: isPage
      ? "grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1"
      : "grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-1",
    getCheckboxLabel: (checked: boolean) => isPage
      ? `flex items-center gap-3 border px-4 py-3.5 font-sans text-base cursor-pointer transition-all ${
          checked
            ? "border-[#E85D26] bg-[#E85D26]/5 text-[#0F0F0F]"
            : "border-[#0F0F0F]/10 text-[#0F0F0F]/70 hover:border-[#0F0F0F]/30 hover:bg-[#F4F1EC]/50"
        }`
      : `flex items-center gap-2.5 border-2 px-3.5 py-2.5 font-sans text-base cursor-pointer transition-all ${
          checked
            ? "border-[#E85D26] bg-[#E85D26]/10 text-[#0F0F0F]"
            : "border-[#0F0F0F]/20 text-[#0F0F0F]/70 hover:border-[#0F0F0F]/40"
        }`,
    selectIcon: isPage
      ? "pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#0F0F0F]/40 group-focus-within:text-[#E85D26] transition-colors"
      : "pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[#0F0F0F]/60 group-focus-within:text-[#E85D26] transition-colors",
    submitBtn: isPage
      ? "mt-4 bg-[#0F0F0F] text-white font-sans font-bold tracking-widest uppercase text-lg px-8 py-5 hover:bg-[#E85D26] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 w-full shadow-xl shadow-[#0F0F0F]/5"
      : "mt-6 bg-[#0F0F0F] text-[#F4F1EC] font-display uppercase tracking-widest text-xl px-8 py-5 hover:bg-[#E85D26] hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#0F0F0F] disabled:hover:text-[#F4F1EC] flex items-center justify-center gap-3 w-full",
    formGap: isPage ? "flex flex-col gap-8" : "flex flex-col gap-6",
    errorText: isPage
      ? "text-[#B23E16] font-sans font-medium text-sm mt-1"
      : "text-[#B23E16] font-sans font-semibold text-sm",
    errorBanner: isPage
      ? "bg-white border border-[#B23E16]/20 p-4 mt-4 flex items-start gap-3"
      : "bg-[#B23E16]/10 border-l-4 border-[#B23E16] p-4 mt-2",
  };

  const isRealtor = industry === "real-estate";"""
content = content.replace('  const isRealtor = industry === "real-estate";', styles_def)

# 3. Replace class names in JSX
content = content.replace('className="flex flex-col gap-6"', 'className={styles.formGap}')
content = content.replace('className="flex flex-col gap-1.5 group"', 'className={styles.fieldGroup}')
content = content.replace('className={LABEL_CLASSES}', 'className={styles.label}')
content = content.replace('className={`${LABEL_CLASSES} p-0`}', 'className={styles.legend}')
content = content.replace('className={OPTIONAL_CLASSES}', 'className={styles.optional}')
content = content.replace('INPUT_BASE', 'styles.input')

# 4. Checkbox replacements
content = content.replace('className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-1"', 'className={styles.checkboxGrid}')

checkbox_cls_old = """                    className={`flex items-center gap-2.5 border-2 px-3.5 py-2.5 font-sans text-base cursor-pointer transition-all ${
                      checked
                        ? "border-[#E85D26] bg-[#E85D26]/10 text-[#0F0F0F]"
                        : "border-[#0F0F0F]/20 text-[#0F0F0F]/70 hover:border-[#0F0F0F]/40"
                    }`}"""
content = content.replace(checkbox_cls_old, '                    className={styles.getCheckboxLabel(checked)}')

# 5. Icons
select_icon_old = 'className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[#0F0F0F]/60 group-focus-within:text-[#E85D26] transition-colors"'
content = content.replace(select_icon_old, 'className={styles.selectIcon}')

# 6. Errors
error_text_old = 'className="text-[#B23E16] font-sans font-semibold text-sm"'
content = content.replace(error_text_old, 'className={styles.errorText}')

# 7. Submit Button
submit_btn_old = 'className="mt-6 bg-[#0F0F0F] text-[#F4F1EC] font-display uppercase tracking-widest text-xl px-8 py-5 hover:bg-[#E85D26] hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#0F0F0F] disabled:hover:text-[#F4F1EC] flex items-center justify-center gap-3 w-full"'
content = content.replace(submit_btn_old, 'className={styles.submitBtn}')

# 8. Error banner
error_banner_old = """        <div className="bg-[#B23E16]/10 border-l-4 border-[#B23E16] p-4 mt-2">
          <p role="alert" className="text-[#B23E16] font-sans font-semibold text-sm leading-snug">
            {error}
          </p>
        </div>"""
error_banner_new = """        <div className={styles.errorBanner}>
          {isPage && <AlertCircle className="w-5 h-5 text-[#B23E16] flex-shrink-0 mt-0.5" />}
          <p role="alert" className="text-[#B23E16] font-sans font-semibold text-sm leading-snug">
            {error}
          </p>
        </div>"""
content = content.replace(error_banner_old, error_banner_new)

# 9. Success message
success_old = """      <div className={variant === "page" ? "text-center py-20 app-fade-in" : "text-center py-12 app-fade-in"}>
        <CheckCircle className="text-[#E85D26] w-16 h-16 mx-auto mb-6" aria-hidden="true" strokeWidth={1.5} />
        <h3 className="text-4xl md:text-5xl font-display text-[#0F0F0F] uppercase tracking-tight mb-4">"""
success_new = """      <div className={variant === "page" ? "text-center py-24 app-fade-in" : "text-center py-12 app-fade-in"}>
        <CheckCircle className="text-[#E85D26] w-16 h-16 mx-auto mb-8" aria-hidden="true" strokeWidth={1.5} />
        <h3 className={variant === "page" 
          ? "text-4xl md:text-5xl font-display text-[#0F0F0F] leading-tight mb-6" 
          : "text-4xl md:text-5xl font-display text-[#0F0F0F] uppercase tracking-tight mb-4"}>"""
content = content.replace(success_old, success_new)

# 10. Fieldsets
content = content.replace('className="flex flex-col gap-1.5 border-0 p-0 m-0"', 'className={`${styles.fieldGroup} border-0 p-0 m-0`}')

with open("artifacts/web/src/components/booking/BookCallForm.tsx", "w") as f:
    f.write(content)


# --- 2. Modify GetStarted.tsx ---
with open("artifacts/web/src/pages/GetStarted.tsx", "r") as f:
    content = f.read()

# Replace the layout
old_section_start = """      <section className="bg-[#F4F1EC] min-h-[60vh] relative border-t border-[#0F0F0F]/10">
        <div className="max-w-xl mx-auto px-6 py-16 md:py-24">"""
new_section_start = """      <section className="bg-[#F4F1EC] min-h-[70vh] relative py-16 md:py-32 border-t border-[#0F0F0F]/10">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <div className="bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#0F0F0F]/5 p-8 md:p-14 lg:p-16">"""
content = content.replace(old_section_start, new_section_start)

# Replace Realtor
old_realtor = """          {isRealtor && (
            <div ref={contextBlockRef} className="bg-[#0F0F0F] text-[#F4F1EC] p-6 mb-10 relative">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#E85D26]"></div>
              <p className="font-display uppercase tracking-tight text-2xl text-white leading-none mb-3">
                15-Minute Real Estate Website + IDX Fit Call
              </p>
              <p className="font-sans text-base leading-relaxed">
                We will review your market, MLS path, current website, team structure,
                buyer/seller goals, and the right scope before you commit.
              </p>
            </div>
          )}"""
new_realtor = """          {isRealtor && (
            <div ref={contextBlockRef} className="mb-12 pb-12 border-b border-[#0F0F0F]/10">
              <span className="text-[#E85D26] font-sans font-bold tracking-widest uppercase text-xs mb-4 block">Discovery Call</span>
              <h2 className="font-display text-4xl text-[#0F0F0F] leading-tight mb-6">
                15-Minute Real Estate Website + IDX Fit Call
              </h2>
              <p className="font-sans text-xl text-[#0F0F0F]/70 leading-relaxed">
                We will review your market, MLS path, current website, team structure,
                buyer/seller goals, and the right scope before you commit.
              </p>
            </div>
          )}"""
content = content.replace(old_realtor, new_realtor)

# Replace Well Driller
old_wd = """          {isWellDriller && (
            <div ref={contextBlockRef} className="bg-[#0F0F0F] text-[#F4F1EC] p-6 mb-10 relative">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#E85D26]"></div>
              <p className="font-display uppercase tracking-tight text-2xl text-white leading-none mb-3">
                Let's build your free custom demo.
              </p>
              <p className="font-sans text-base leading-relaxed">
                Tell us a little about the business and what you want the website to do. We will
                use the conversation to prepare a homepage direction that is actually relevant to
                your company.
              </p>
              {wellDrillerMarket && (
                <p className="font-sans text-sm mt-2 text-[#F4F1EC]/80">
                  Market:{" "}
                  <span className="font-semibold uppercase text-white">{wellDrillerMarket}</span>
                </p>
              )}
            </div>
          )}"""
new_wd = """          {isWellDriller && (
            <div ref={contextBlockRef} className="mb-12 pb-12 border-b border-[#0F0F0F]/10">
              <span className="text-[#E85D26] font-sans font-bold tracking-widest uppercase text-xs mb-4 block">Discovery Call</span>
              <h2 className="font-display text-4xl text-[#0F0F0F] leading-tight mb-6">
                Let's build your free custom demo.
              </h2>
              <p className="font-sans text-xl text-[#0F0F0F]/70 leading-relaxed">
                Tell us a little about the business and what you want the website to do. We will
                use the conversation to prepare a homepage direction that is actually relevant to
                your company.
              </p>
              {wellDrillerMarket && (
                <div className="mt-8 inline-block bg-[#F4F1EC] text-[#0F0F0F] px-4 py-2 font-sans text-sm font-medium tracking-wide">
                  Market: <span className="font-semibold">{wellDrillerMarket}</span>
                </div>
              )}
            </div>
          )}"""
content = content.replace(old_wd, new_wd)

# Replace Cabinet Maker
old_cm = """          {isCabinetMaker && (
            <div className="bg-[#0F0F0F] text-[#F4F1EC] p-6 mb-10 relative">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#E85D26]"></div>
              <p className="font-display uppercase tracking-tight text-2xl text-white leading-none mb-3">
                Let's build your free custom demo.
              </p>
              <p className="font-sans text-base leading-relaxed">
                Tell us about your shop and the projects you want more of. We will use the
                conversation to prepare a homepage direction built around your work—not a
                generic template.
              </p>
            </div>
          )}"""
new_cm = """          {isCabinetMaker && (
            <div className="mb-12 pb-12 border-b border-[#0F0F0F]/10">
              <span className="text-[#E85D26] font-sans font-bold tracking-widest uppercase text-xs mb-4 block">Discovery Call</span>
              <h2 className="font-display text-4xl text-[#0F0F0F] leading-tight mb-6">
                Let's build your free custom demo.
              </h2>
              <p className="font-sans text-xl text-[#0F0F0F]/70 leading-relaxed">
                Tell us about your shop and the projects you want more of. We will use the
                conversation to prepare a homepage direction built around your work—not a
                generic template.
              </p>
            </div>
          )}"""
content = content.replace(old_cm, new_cm)

# Replace Auctioneer
old_auc = """          {isAuctioneer && (
            <div className="bg-[#0F0F0F] text-[#F4F1EC] p-6 mb-10 relative">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#E85D26]"></div>
              <p className="font-display uppercase tracking-tight text-2xl text-white leading-none mb-3">
                Let's build your free custom demo.
              </p>
              <p className="font-sans text-base leading-relaxed">
                Tell us about your auction business and the clients and events you want more of. We will use
                the conversation to prepare a homepage direction built around how you actually
                sell—not a generic template.
              </p>
            </div>
          )}"""
new_auc = """          {isAuctioneer && (
            <div className="mb-12 pb-12 border-b border-[#0F0F0F]/10">
              <span className="text-[#E85D26] font-sans font-bold tracking-widest uppercase text-xs mb-4 block">Discovery Call</span>
              <h2 className="font-display text-4xl text-[#0F0F0F] leading-tight mb-6">
                Let's build your free custom demo.
              </h2>
              <p className="font-sans text-xl text-[#0F0F0F]/70 leading-relaxed">
                Tell us about your auction business and the clients and events you want more of. We will use
                the conversation to prepare a homepage direction built around how you actually
                sell—not a generic template.
              </p>
            </div>
          )}"""
content = content.replace(old_auc, new_auc)

# Replace Footer
old_footer = """          <p className="text-[#0F0F0F]/60 text-sm font-sans text-center mt-12">
            Prefer to email us? Reach out at{" "}
            <a href="mailto:hello@graylockdigital.com" className="text-[#B23E16] font-semibold hover:underline">
              hello@graylockdigital.com
            </a>
          </p>
        </div>
      </section>"""
new_footer = """          </div>
          <div className="text-center mt-12">
            <p className="text-[#0F0F0F]/60 text-base font-sans">
              Prefer to email us? Reach out at{" "}
              <a href="mailto:hello@graylockdigital.com" className="text-[#E85D26] font-semibold hover:text-[#0F0F0F] transition-colors underline underline-offset-4 decoration-[#E85D26]/30 hover:decoration-[#0F0F0F]">
                hello@graylockdigital.com
              </a>
            </p>
          </div>
        </div>
      </section>"""
content = content.replace(old_footer, new_footer)

with open("artifacts/web/src/pages/GetStarted.tsx", "w") as f:
    f.write(content)

print("Done")