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
  seoTitle: "SpeedRunners 2: King of Speed — multi-platform launch hub",
  metaDescription:
    "SpeedRunners 2: King of Speed launched on September 3, 2026 across Steam, PS5, Xbox Series X|S, and Nintendo Switch. Day-one Xbox Game Pass and full cross-play across all four platforms.",
  summary:
    "SpeedRunners 2: King of Speed launched simultaneously on September 3, 2026 across Steam, PlayStation 5, Xbox Series X|S, and Nintendo Switch, with day-one Xbox Game Pass and full cross-play across all four platforms. The wiki hub covers release status, crossplay, the 12-character roster, the Story campaign, the 16 map layouts, controls, items, price, demo history, and launch-week reviews.",
  hero: {
    eyebrow: "SpeedRunners 2 — multi-platform launch",
    subtitle: "Released 2026-09-03 on Steam + PS5 + Xbox Series X|S + Nintendo Switch. Day-one Xbox Game Pass. Mixed 57% of 363 Steam user reviews positive as of 2026-09-08.",
    ctas: [
      { label: "Release info", href: "/release/" },
      { label: "Crossplay status", href: "/crossplay/" },
    ],
  },
  quickAnswer:
    "SpeedRunners 2: King of Speed launched simultaneously on September 3, 2026 across Steam (Windows), PlayStation 5, Xbox Series X|S, and Nintendo Switch, with day-one Xbox Game Pass for console and PC subscribers and full cross-play across all four platforms. The game is developed by Fair Play Labs and published by tinyBuild under Steam AppID 3183760. The launch build supports controller play, online PvP up to eight players per lobby, sixty-four-player elimination tournaments, twelve characters, sixteen maps, a new grappling-hook movement system, a Story campaign, and Playground experimental modes. Steam launch price was $9.99 with a ten percent discount to $8.99 running through September 17, and launch-week Steam user reviews were Mixed.",
  keyFacts: [
    { label: "Release date", value: "September 3, 2026" },
    { label: "Developer / Publisher", value: "Fair Play Labs / tinyBuild" },
    { label: "Platforms at launch", value: "Steam (Windows), PS5, Xbox Series X|S, Nintendo Switch" },
    { label: "Xbox Game Pass", value: "Day-one on Xbox Game Pass" },
    { label: "Cross-play", value: "Full cross-play across all four platforms from day one" },
    { label: "Launch reception", value: "Mixed — 57% of 363 Steam user reviews positive (2026-09-08)" },
    { label: "Launch price (Steam)", value: "$9.99 base, $8.99 with 10% off until Sept 17" },
  ],
  modules: [
    {
      id: "quick-answer",
      type: "prose",
      heading: "SpeedRunners 2 at a glance",
      body:
        "SpeedRunners 2: King of Speed launched simultaneously on September 3, 2026 across Steam (Windows), PlayStation 5, Xbox Series X|S, and Nintendo Switch, with day-one Xbox Game Pass and full cross-play across all four platforms. The launch build ships with controller support, online PvP up to eight players per lobby, LAN PvP, shared and split-screen PvP and co-op, Steam Remote Play Together, a 12-character roster, 16 map layouts in New Rush City, a Story campaign set in New Rush City, the new grappling-hook movement signature, the expanded power-up arsenal, and the Playground experimental modes. Steam launch price was an introductory $9.99 with a ten percent launch discount to $8.99 running through September 17, and launch-week Steam user reviews were Mixed.",
    },
    {
      id: "clusters",
      type: "entity-grid",
      heading: "Wiki clusters",
      items: [
        { title: "Launch & versions", summary: "Multi-platform release, system requirements, price, Game Pass, demo history, reviews.", href: "/release/" },
        { title: "Multiplayer", summary: "Full cross-play across all four platforms, online and LAN wiring, controls and movement.", href: "/crossplay/" },
        { title: "Roster & content", summary: "12-character roster, Story campaign heroes and villains, 16 maps, items, what changed vs SpeedRunners 1.", href: "/characters/" },
      ],
    },
    {
      id: "all-routes",
      type: "entity-grid",
      heading: "All routes",
      items: [
        { title: "Release", summary: "Multi-platform release date and supported platforms.", href: "/release/" },
        { title: "System requirements", summary: "PC specs and OS baseline.", href: "/system-requirements/" },
        { title: "Crossplay", summary: "Cross-platform and online multiplayer.", href: "/crossplay/" },
        { title: "Characters", summary: "12-character roster and shared movement kit.", href: "/characters/" },
        { title: "Story campaign", summary: "Named heroes, mission types, Boss Battle Movers mechanic, act-based replay loop.", href: "/story-campaign/" },
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
      title: "Fact boundaries (research date 2026-09-16)",
      body:
        "Multi-platform launch and Game Pass facts are anchored to launch-day press coverage (gamenews.ie, loovaplay, changelog.gg Speed Blog). Story campaign character names, mission types, and Boss Battle design language are anchored to the official Speed Blog on changelog.gg and DayOne's launch review on playday.one. Anything not announced on those sources is labeled accordingly.",
    },
  ],
  faqIds: ["sr2-release-date", "sr2-platforms", "sr2-crossplay", "sr2-price", "sr2-reviews"],
  relatedPageIds: [
    "release-platforms",
    "system-requirements",
    "crossplay-online",
    "characters-abilities",
    "story-campaign",
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
  lastReviewed: "2026-09-16",
};

void site;