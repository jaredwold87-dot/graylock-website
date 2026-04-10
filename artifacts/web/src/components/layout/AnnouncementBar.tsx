import { useSiteSettings } from "@/hooks/useSiteSettings";

function isSafeUrl(url: string): boolean {
  try {
    const parsed = new URL(url, window.location.origin);
    return parsed.protocol === "https:" || parsed.protocol === "http:";
  } catch {
    return false;
  }
}

export function AnnouncementBar() {
  const settings = useSiteSettings();

  if (!settings?.announcement_bar?.enabled) return null;

  const { message, background_color, link_url, link_text } = settings.announcement_bar;
  const showLink = link_url && link_text && isSafeUrl(link_url);

  return (
    <div
      className="w-full py-2.5 px-4 text-center text-sm font-sans text-white relative z-[60]"
      style={{ backgroundColor: background_color || "#2E7BB4" }}
    >
      <span>{message}</span>
      {showLink && (
        <>
          {" "}
          <a
            href={link_url}
            className="underline font-semibold hover:opacity-80 transition-opacity"
            rel="noopener noreferrer"
          >
            {link_text}
          </a>
        </>
      )}
    </div>
  );
}
