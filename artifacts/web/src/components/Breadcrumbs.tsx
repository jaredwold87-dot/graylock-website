import { Link } from "wouter";
import { ChevronRight } from "lucide-react";
import { canonicalUrl } from "@/lib/site-routes";

export interface BreadcrumbItem {
  name: string;
  path?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => {
      const entry: Record<string, unknown> = {
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
      };
      if (item.path) {
        entry.item = canonicalUrl(item.path);
      }
      return entry;
    }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="w-full">
        <ol className="flex flex-wrap items-center gap-1.5 text-xs md:text-sm font-sans">
          {items.map((item, i) => {
            const isLast = i === items.length - 1;
            return (
              <li key={`${item.name}-${i}`} className="inline-flex items-center gap-1.5">
                {item.path && !isLast ? (
                  <Link
                    href={item.path}
                    className="text-offwhite/70 hover:text-orange transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span
                    className={isLast ? "text-offwhite font-semibold" : "text-offwhite/70"}
                    aria-current={isLast ? "page" : undefined}
                  >
                    {item.name}
                  </span>
                )}
                {!isLast && (
                  <ChevronRight
                    size={14}
                    className="text-offwhite/40"
                    aria-hidden="true"
                  />
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
