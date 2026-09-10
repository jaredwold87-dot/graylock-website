const fs = require('fs');
const content = fs.readFileSync('artifacts/web/src/components/booking/BookCallForm.tsx', 'utf8');

let newContent = content.replace(
  /input: isPage[\s\S]*?hover:border-\[#0F0F0F\]\/30"/,
  `input: isPage\n      ? "w-full bg-[#F4F1EC]/40 border border-[#0F0F0F]/10 px-3.5 py-3 font-sans text-base focus:outline-none focus:border-[#E85D26] focus:bg-white focus:ring-1 focus:ring-[#E85D26]/10 transition-all rounded-none placeholder:text-[#0F0F0F]/40 hover:border-[#0F0F0F]/30"\n      : INPUT_BASE`
);

newContent = newContent.replace(
  /fieldGroup: isPage \? "flex flex-col gap-2 group" : "flex flex-col gap-1\.5 group",/,
  `fieldGroup: isPage ? "flex flex-col gap-1.5 group" : "flex flex-col gap-1.5 group",\n    fullWidth: isPage ? "md:col-span-2" : "",`
);

newContent = newContent.replace(
  /checkboxGrid: isPage[\s\S]*?gap-2\.5 mt-1",/,
  `checkboxGrid: isPage\n      ? "grid grid-cols-1 sm:grid-cols-3 gap-2 mt-1"\n      : "grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-1",`
);

newContent = newContent.replace(
  /getCheckboxLabel: \(checked: boolean\) => isPage[\s\S]*?hover:bg-\[#F4F1EC\]\/50"[\s\S]*?`/,
  `getCheckboxLabel: (checked: boolean) => isPage\n      ? \`flex items-center gap-2 border px-3 py-2.5 font-sans text-sm cursor-pointer transition-all \${\n          checked\n            ? "border-[#E85D26] bg-[#E85D26]/5 text-[#0F0F0F]"\n            : "border-[#0F0F0F]/10 text-[#0F0F0F]/70 hover:border-[#0F0F0F]/30 hover:bg-[#F4F1EC]/50"\n        }\``
);

newContent = newContent.replace(
  /submitBtn: isPage[\s\S]*?shadow-\[#0F0F0F\]\/5"/,
  `submitBtn: isPage\n      ? "mt-2 bg-[#E85D26] text-white font-sans font-bold tracking-widest uppercase text-base px-6 py-4 hover:bg-[#D94F1C] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 w-full shadow-lg shadow-[#E85D26]/10"\n      : "mt-6 bg-[#0F0F0F] text-[#F4F1EC] font-display uppercase tracking-widest text-xl px-8 py-5 hover:bg-[#E85D26] hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#0F0F0F] disabled:hover:text-[#F4F1EC] flex items-center justify-center gap-3 w-full"`
);

newContent = newContent.replace(
  /formGap: isPage \? "flex flex-col gap-8" : "flex flex-col gap-6",/,
  `formGap: isPage ? "grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-5" : "flex flex-col gap-6",`
);

// Add fullWidth to fieldsets and textareas
newContent = newContent.replace(
  /<fieldset className=\{\`\$\{styles\.fieldGroup\} border-0 p-0 m-0\`\}>/g,
  `<fieldset className={\`\${styles.fieldGroup} \${styles.fullWidth} border-0 p-0 m-0\`}>`
);

newContent = newContent.replace(
  /<div className=\{styles\.fieldGroup\}>\s*<label[^>]*>\s*What kinds of jobs/g,
  `<div className={\`\${styles.fieldGroup} \${styles.fullWidth}\`}>\n            <label htmlFor="bc-desired-jobs" className={styles.label}>\n              What kinds of jobs`
);

newContent = newContent.replace(
  /<div className=\{styles\.fieldGroup\}>\s*<label[^>]*>\s*What do you want your website to do/g,
  `<div className={\`\${styles.fieldGroup} \${styles.fullWidth}\`}>\n            <label htmlFor="bc-website-goal" className={styles.label}>\n              What do you want your website to do`
);

newContent = newContent.replace(
  /<div className=\{styles\.fieldGroup\}>\s*<label[^>]*>\s*Additional notes/g,
  `<div className={\`\${styles.fieldGroup} \${styles.fullWidth}\`}>\n            <label htmlFor="bc-cm-note" className={styles.label}>\n              Additional notes`
);

newContent = newContent.replace(
  /<div className=\{styles\.fieldGroup\}>\s*<label[^>]*>\s*Additional notes/g, // for auctioneer, but previous replacement might have missed it or we can be generic
  function(match) { return match; } // We will do generic textarea replace below
);

// Generic textarea fieldGroup replace
const lines = newContent.split('\n');
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('<textarea')) {
    // Look backwards for fieldGroup
    for (let j = i - 1; j >= Math.max(0, i - 10); j--) {
      if (lines[j].includes('className={styles.fieldGroup}')) {
        lines[j] = lines[j].replace('className={styles.fieldGroup}', 'className={`\\${styles.fieldGroup} \\${styles.fullWidth}`}');
        break;
      }
    }
  }
}
newContent = lines.join('\n');

// Wrap submit section
const submitStart = newContent.indexOf('{error && (');
if (submitStart !== -1) {
  const beforeSubmit = newContent.substring(0, submitStart);
  const afterSubmit = newContent.substring(submitStart);
  const endForm = afterSubmit.lastIndexOf('</form>');
  
  if (endForm !== -1) {
    const wrappedSubmit = `      <div className={styles.fullWidth}>\n        ` + 
      afterSubmit.substring(0, endForm).replace(/\n/g, '\n        ') + 
      `\n      </div>\n    </form>`;
    
    newContent = beforeSubmit + wrappedSubmit;
  }
}

fs.writeFileSync('artifacts/web/src/components/booking/BookCallForm.tsx', newContent);
