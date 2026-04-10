import { useState, useEffect } from "react";

const SETTINGS_URL = "https://graylock-os-ymwca.sevalla.app/api/public/settings/99c58e46-33ee-4c7c-ab23-eeb7badcc57b";

export interface SiteSettings {
  announcement_bar: {
    enabled: boolean;
    message: string;
    background_color: string;
    link_url: string;
    link_text: string;
  };
  office_hours: Record<string, { open: boolean; from: string; to: string }>;
  contact_info: {
    phone: string;
    email: string;
    address: string;
    telehealth_available?: boolean;
  };
}

export function useSiteSettings() {
  const [settings, setSettings] = useState<SiteSettings | null>(null);

  useEffect(() => {
    const load = () =>
      fetch(SETTINGS_URL)
        .then((r) => r.json())
        .then(setSettings)
        .catch(() => {});

    load();
    const interval = setInterval(load, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return settings;
}
