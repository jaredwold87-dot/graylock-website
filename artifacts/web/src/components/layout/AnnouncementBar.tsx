import { useSiteSettings } from "@/hooks/useSiteSettings";

export function AnnouncementBar() {
  const settings = useSiteSettings();

  if (!settings?.announcement_bar?.enabled) return null;

  const { message, background_color, link_url, link_text } = settings.announcement_bar;

  return (
    <div
      className="w-full py-2.5 px-4 text-center text-sm font-sans text-white relative z-[60]"
      style={{ backgroundColor: background_color || "#2E7BB4" }}
    >
      <span>{message}</span>
      {link_url && link_text && (
        <>
          {" "}
          <a
            href={link_url}
            className="underline font-semibold hover:opacity-80 transition-opacity"
          >
            {link_text}
          </a>
        </>
      )}
    </div>
  );
}
