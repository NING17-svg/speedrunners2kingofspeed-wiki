import type { SiteLocaleConfig } from "@/types/localization";

export interface SiteOfficialSource {
  label: string;
  href: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  brandMark?: string;
  gameName: string;
  domain: string;
  baseUrl: string;
  description: string;
  tagline: string;
  primaryLocale: string;
  locales: SiteLocaleConfig[];
  author: string;
  gaMeasurementId: string;
  bingSiteAuthCode: string;
  officialSources: SiteOfficialSource[];
  disclaimer: string;
}

export const site: SiteConfig = {
  name: "SpeedRunners 2: King of Speed",
  brandMark: "SR2",
  gameName: "SpeedRunners 2: King of Speed",
  domain: "speedrunners2kingofspeed.wiki",
  baseUrl: (process.env.NEXT_PUBLIC_SITE_URL || "https://speedrunners2kingofspeed.wiki").replace(/\/$/, ""),
  description:
    "Independent guide, release, and multiplayer reference for SpeedRunners 2: King of Speed — battle-royale racing on PC.",
  tagline: "SpeedRunners 2 launch hub: release, crossplay, roster, tracks, controls, items, and reviews.",
  primaryLocale: "en-US",
  locales: [
    {
      code: "en-US",
      label: "English",
      pathPrefix: "",
      htmlLang: "en-US",
      openGraphLocale: "en_US",
      ui: {
        searchOpen: "Search",
        searchClose: "Close search",
        searchPlaceholder: "Search this guide",
        searchSubmit: "Search",
        searchLoading: "Loading search…",
        searchError: "Search is unavailable right now.",
        searchNoResults: "No matching pages found.",
        recentUpdates: "Recent updates",
        lastReviewed: "Last reviewed",
      },
    },
  ],
  author: "SpeedRunners 2: King of Speed Wiki",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
  bingSiteAuthCode: process.env.NEXT_PUBLIC_BING_SITE_AUTH_CODE || "",
  officialSources: [
    {
      label: "Steam store page for AppID 3183760",
      href: "https://store.steampowered.com/app/3183760",
      description: "Official Steam store page for SpeedRunners 2: King of Speed.",
    },
  ],
  disclaimer:
    "Independent fan guide. All facts verified against official Steam store and community hub sources.",
};
