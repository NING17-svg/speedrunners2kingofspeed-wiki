import type { FAQItem } from "@/types/content";

export const faqItems: FAQItem[] = [
  {
    id: "sr2-release-date",
    question: "When did SpeedRunners 2: King of Speed launch?",
    answer:
      "SpeedRunners 2: King of Speed released simultaneously on September 3, 2026 across Steam (Windows) under AppID 3183760, PlayStation 5, Xbox Series X|S, and Nintendo Switch. The developer is Fair Play Labs and the publisher is tinyBuild.",
    pageIds: ["home", "release-platforms", "wiki", "faq"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "sr2-platforms",
    question: "Which platforms is SpeedRunners 2: King of Speed available on right now?",
    answer:
      "SpeedRunners 2: King of Speed launched simultaneously on Steam (Windows), PlayStation 5, Xbox Series X|S, and Nintendo Switch on September 3, 2026, with full cross-play across all four platforms from day one. Per-console editions are listed on PlayStation Store, Microsoft Store, and Nintendo eShop.",
    pageIds: ["home", "release-platforms", "wiki", "faq"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "sr2-game-pass",
    question: "Is SpeedRunners 2 on Xbox Game Pass?",
    answer:
      "Yes. SpeedRunners 2: King of Speed is included on Xbox Game Pass from day one for both console and PC subscribers, per launch-day coverage (loovaplay). Game Pass subscribers can play the Xbox Series X|S or PC version without an additional launch purchase.",
    pageIds: ["release-platforms", "price-editions", "wiki", "faq"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "sr2-os",
    question: "What operating system does SpeedRunners 2 require?",
    answer:
      "The Steam store page lists Windows 10 sixty-four-bit as the supported OS baseline. Specific GPU, CPU, RAM, and storage tiers are Not announced as of 2026-09-08.",
    pageIds: ["system-requirements", "faq"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "sr2-deck",
    question: "Is SpeedRunners 2 verified for Steam Deck?",
    answer:
      "Steam Deck verification status is Not announced as of 2026-09-08.",
    pageIds: ["system-requirements", "faq"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "sr2-crossplay",
    question: "Does SpeedRunners 2 support crossplay?",
    answer:
      "Yes. SpeedRunners 2: King of Speed supports full cross-play across all four launch platforms from day one: Steam (Windows), PlayStation 5, Xbox Series X|S, and Nintendo Switch. Launch-day coverage (loovaplay) explicitly states \"Full cross-play across all four platforms from day one\".",
    pageIds: ["home", "release-platforms", "crossplay-online", "wiki", "faq"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "sr2-online-lobby",
    question: "How many players can join a SpeedRunners 2 online lobby?",
    answer:
      "Online PvP supports up to eight players per lobby on the Steam build. LAN PvP, shared and split-screen PvP, shared and split-screen co-op, and Steam Remote Play Together are also confirmed.",
    pageIds: ["crossplay-online", "faq"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "sr2-roster",
    question: "How many characters are in SpeedRunners 2?",
    answer:
      "SpeedRunners 2 launches with twelve playable characters. Per-character exact ability stat numbers beyond the Steam store page description are Not announced as of 2026-09-08.",
    pageIds: ["characters-abilities", "wiki", "faq"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "sr2-grapple",
    question: "What movement signature does SpeedRunners 2 add?",
    answer:
      "SpeedRunners 2 adds the grappling hook as a free movement tool, layered on speed boosters, map shortcuts, and traps.",
    pageIds: ["characters-abilities", "controls-movement", "items-powerups", "speedrunners-2-vs-1", "guides", "faq"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "sr2-maps",
    question: "How many map layouts does SpeedRunners 2 ship with?",
    answer:
      "SpeedRunners 2 ships with sixteen map layouts in the fictional New Rush City. Per-track shortcut layouts are Not announced as of 2026-09-08.",
    pageIds: ["tracks-game-modes", "faq"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "sr2-playground",
    question: "What are Playground modes in SpeedRunners 2?",
    answer:
      "Playground is a new experimental rule-bending mode family on the launch build. Exact Playground mode rule sets are Not announced as of 2026-09-16.",
    pageIds: ["tracks-game-modes", "demo-playtest", "faq"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "sr2-story-characters",
    question: "Who are the named SpeedRunners 2 Story campaign characters?",
    answer:
      "The Story campaign set in New Rush City stars Moonraker with hero crew Falcon, Dart, Hothead, and Cosmonaut Comrade, racing against the villain crew anchored by Unic and SpeedRunner. The names come from the Speed Blog: Story Campaign, Boss Fights, and Other Teasers on changelog.gg.",
    pageIds: ["characters-abilities", "story-campaign", "wiki", "guides", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "sr2-mission-types",
    question: "What mission types are in the SpeedRunners 2 Story campaign?",
    answer:
      "The Story campaign runs across five mission types: Classic races, Lap Races, Skyfall Rush, Boss Battles, and Escape Missions. Boss Battles use the Five Movers mechanic, a Psychonauts-inspired movement-state design.",
    pageIds: ["tracks-game-modes", "story-campaign", "wiki", "guides", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "sr2-boss-battle",
    question: "How do Boss Battles work in SpeedRunners 2?",
    answer:
      "Boss Battles are a Story campaign mission type where bosses shift through five movement states (the Five Movers mechanic), a Psychonauts-inspired design pattern. The Speed Blog and loovaplay launch coverage both call out boss battles as a marquee single-player addition addressing the original's missing solo content.",
    pageIds: ["story-campaign", "guides", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "sr2-controls",
    question: "Does SpeedRunners 2 support controllers?",
    answer:
      "Yes. The Steam store page tags controller support for AppID 3183760 across the launch multiplayer modes including online PvP, LAN PvP, shared and split-screen PvP, and co-op.",
    pageIds: ["controls-movement", "wiki", "guides", "faq"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "sr2-items",
    question: "What items are in SpeedRunners 2?",
    answer:
      "SpeedRunners 2 ships with fireballs, freeze rays, golden hooks, blasters, and portable teleporters, layered on the movement foundation. Per-item cooldowns, drop rates, and rank restrictions are Not announced as of 2026-09-08.",
    pageIds: ["items-powerups", "wiki", "guides", "faq"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "sr2-vs-1",
    question: "How does SpeedRunners 2 differ from SpeedRunners 1?",
    answer:
      "SpeedRunners 2 widens the launch roster to twelve characters, expands the map pool to sixteen layouts, layers the grappling hook on the movement kit, widens the power-up arsenal, and adds a Story campaign, 64-player elimination tournaments, and Playground experimental modes.",
    pageIds: ["speedrunners-2-vs-1", "faq"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "sr2-price",
    question: "How much does SpeedRunners 2 cost on Steam?",
    answer:
      "The Steam introductory base price is $9.99 with a 10% launch discount that brings the launch total to $8.99 through September 17, 2026. Separate per-console editions are available on PS5, Xbox Series X|S, and Nintendo Switch, with day-one Xbox Game Pass for console and PC subscribers.",
    pageIds: ["home", "price-editions", "wiki", "faq"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "sr2-bundles",
    question: "Does SpeedRunners 2 have a soundtrack DLC or bundles?",
    answer:
      "Yes. The launch Steam page lists a soundtrack DLC and multiple bundles alongside the base game.",
    pageIds: ["price-editions", "faq"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "sr2-demo",
    question: "Is there a SpeedRunners 2 demo?",
    answer:
      "Pre-launch SpeedRunners 2 demo and playtest windows ran on Steam before the September 3, 2026 live build. As of 2026-09-08, the live Steam release for AppID 3183760 is the only official access path on PC.",
    pageIds: ["demo-playtest", "faq"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "sr2-playtest",
    question: "Will there be future SpeedRunners 2 demo or playtest windows?",
    answer:
      "Any future SpeedRunners 2 demo or playtest window beyond the live Steam build is Not announced as of 2026-09-08.",
    pageIds: ["demo-playtest", "faq"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "sr2-reviews",
    question: "How is SpeedRunners 2 being received so far?",
    answer:
      "Launch-week Steam user reviews were Mixed, with 57% of 363 reviews positive as of 2026-09-08.",
    pageIds: ["home", "reviews-press", "faq"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "sr2-press",
    question: "Where can I find SpeedRunners 2 press coverage?",
    answer:
      "The SpeedRunners 2 developer/publisher announcement hub at speedrunners2.com carries press coverage, alongside Steam Community hub discussion threads.",
    pageIds: ["reviews-press", "faq"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
];