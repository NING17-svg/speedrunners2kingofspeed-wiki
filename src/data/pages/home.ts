import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

export const homePage: PageContent = {
  id: "home",
  translationKey: "home",
  locale: "en-US",
  routeKind: "home",
  slug: "",
  url: "/",
  pageType: "home",
  presentation: { shell: "home", variant: "split-panel" },
  h1: "SpeedRunners 2: King of Speed launch hub",
  seoTitle: "SpeedRunners 2: King of Speed — Steam launch hub",
  metaDescription:
    "SpeedRunners 2: King of Speed launched on Steam on September 3, 2026. Browse the en-US wiki hub for release status, crossplay, roster, and launch-week reviews.",
  summary:
    "SpeedRunners 2: King of Speed launched on Steam on September 3, 2026 from Fair Play Labs and tinyBuild. The wiki hub covers release status, crossplay, the 12-character roster, the 16 map layouts, controls, items, price, demo history, and launch-week reviews.",
  hero: {
    eyebrow: "SpeedRunners 2 — Steam launch",
    subtitle: "Released 2026-09-03 on Steam — Windows. Mixed 57% of 363 user reviews positive as of 2026-09-08.",
    ctas: [
      { label: "Release info", href: "/release/" },
      { label: "Crossplay status", href: "/crossplay/" },
    ],
  },
  quickAnswer:
    "SpeedRunners 2: King of Speed launched on Steam on September 3, 2026 from Fair Play Labs and tinyBuild under AppID 3183760. The launch is Windows-only with controller support, online PvP up to eight players per lobby, sixty-four-player elimination tournaments, twelve characters, sixteen maps, Playground modes, and a new grappling-hook movement system. Launch price was $9.99 with a ten percent discount to $8.99 running through September 17, and launch-week Steam user reviews were Mixed.",
  keyFacts: [
    { label: "Steam release date", value: "September 3, 2026" },
    { label: "Developer / Publisher", value: "Fair Play Labs / tinyBuild" },
    { label: "Platform at launch", value: "Windows (Steam)" },
      { label: "Launch reception", value: "Mixed — 57% of 363 Steam user reviews positive (2026-09-08)" },
    { label: "Launch price", value: "$9.99 base, $8.99 with 10% off until Sept 17" },
  ],
  modules: [
    {
      id: "quick-answer",
      type: "prose",
      heading: "SpeedRunners 2 at a glance",
      body:
        "SpeedRunners 2: King of Speed launched on September 3, 2026 on Windows PC via Steam under AppID 3183760. The launch build is Windows-only with controller support, online PvP up to eight players per lobby, LAN PvP, shared and split-screen PvP and co-op, and Steam Remote Play Together. The 12-character roster, 16 map layouts in New Rush City, the new grappling-hook movement signature, the expanded power-up arsenal, and the Playground experimental modes all ship on day one. Launch price was an introductory $9.99 with a ten percent launch discount to $8.99 running through September 17, and launch-week Steam user reviews were Mixed.",
    },
    {
      id: "clusters",
      type: "entity-grid",
      heading: "Wiki clusters",
      items: [
        { title: "Launch & versions", summary: "Release status, system requirements, price, demo history, reviews.", href: "/release/" },
        { title: "Multiplayer", summary: "Crossplay status, online and LAN wiring, controls and movement.", href: "/crossplay/" },
        { title: "Roster & content", summary: "12-character roster, 16 maps, items, and what changed vs SpeedRunners 1.", href: "/characters/" },
      ],
    },
    {
      id: "all-routes",
      type: "entity-grid",
      heading: "All routes",
      items: [
        { title: "Release", summary: "Steam release date and supported platforms.", href: "/release/" },
        { title: "System requirements", summary: "PC specs and OS baseline.", href: "/system-requirements/" },
        { title: "Crossplay", summary: "Cross-platform and online multiplayer.", href: "/crossplay/" },
        { title: "Characters", summary: "12-character roster and shared movement kit.", href: "/characters/" },
        { title: "Tracks & modes", summary: "16 map layouts and Playground experimental modes.", href: "/tracks-modes/" },
        { title: "Controls", summary: "Keyboard, controller, and movement tricks.", href: "/controls/" },
        { title: "Items", summary: "Fireballs, freeze rays, golden hooks, blasters, teleporters.", href: "/items/" },
        { title: "SpeedRunners 2 vs 1", summary: "What changed between 2016 and 2026.", href: "/vs-speedrunners-1/" },
        { title: "Price", summary: "Launch price, discount, soundtrack DLC, bundles.", href: "/price/" },
        { title: "Demo", summary: "Demo and playtest history before launch.", href: "/demo/" },
        { title: "Reviews", summary: "Launch-week Steam user review snapshot.", href: "/reviews/" },
      ],
    },
    {
      id: "fact-boundaries",
      type: "callout",
      tone: "caution",
      title: "Fact boundaries (research date 2026-09-08)",
      body:
        "Current-game facts are confirmed against the Steam store page for AppID 3183760 and the Steam Community hub. The 2016 original SpeedRunners is referenced only inside the comparison page. Anything not announced on the Steam store page, the Steam Community hub, Steam Discussions, SteamDB, or the developer/publisher hub is labeled \"Not announced as of 2026-09-08\".",
    },
  ],
  faqIds: ["sr2-release-date", "sr2-platforms", "sr2-price", "sr2-reviews"],
  relatedPageIds: [
    "release-platforms",
    "system-requirements",
    "crossplay-online",
    "characters-abilities",
    "tracks-game-modes",
    "controls-movement",
    "items-powerups",
    "speedrunners-2-vs-1",
    "price-editions",
    "demo-playtest",
    "reviews-press",
  ],
  schemaTypes: ["WebSite", "CollectionPage", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-08",
};

void site;