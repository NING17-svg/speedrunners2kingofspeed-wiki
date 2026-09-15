import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

const STEAM_STORE = "https://store.steampowered.com/app/3183760";
const STEAM_COMMUNITY = "https://steamcommunity.com/app/3183760";
const STEAM_DISCUSIONS = "https://steamcommunity.com/app/3183760/discussions/";
const STEAMDB = "https://steamdb.info/app/3183760/";
const OFFICIAL_HUB = "https://www.speedrunners2.com";

const sharedSources = [
  { label: "Steam store page (AppID 3183760)", href: STEAM_STORE, description: "Official store page for SpeedRunners 2: King of Speed" },
  { label: "Steam Community hub", href: STEAM_COMMUNITY, description: "Community hub for the SpeedRunners 2 Steam build" },
  { label: "Steam Discussions", href: STEAM_DISCUSIONS, description: "Discussion threads on the SpeedRunners 2 Steam build" },
  { label: "SteamDB listing (AppID 3183760)", href: STEAMDB, description: "Steam metadata, depots, and demo/playtest window tracking" },
  { label: "SpeedRunners 2 official developer/publisher hub", href: OFFICIAL_HUB, description: "Developer and publisher announcement hub" },
];

export const fixedPages: PageContent[] = [
  {
    id: "release-platforms",
    translationKey: "release-platforms",
    locale: "en-US",
    routeKind: "fixed",
    slug: "release",
    url: "/release",
    pageType: "release",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "SpeedRunners 2 release date and supported platforms",
    seoTitle: "SpeedRunners 2 release date and platforms (PC, PS5, Xbox, Switch)",
    metaDescription:
      "SpeedRunners 2 launched on September 3, 2026 simultaneously on Steam (Windows), PlayStation 5, Xbox Series X|S, and Nintendo Switch, with day-one Xbox Game Pass and full cross-play across all four platforms.",
    summary:
      "SpeedRunners 2 launched simultaneously on September 3, 2026 across Steam (Windows), PlayStation 5, Xbox Series X|S, and Nintendo Switch, with day-one Xbox Game Pass and full cross-play across all four platforms.",
    hero: {
      eyebrow: "Release info",
      subtitle:
        "Multi-platform launch date, day-one Xbox Game Pass, and developer/publisher credentials for SpeedRunners 2: King of Speed.",
      ctas: [
        { label: "Crossplay status", href: "/crossplay/" },
        { label: "Price & Game Pass", href: "/price/" },
      ],
    },
    quickAnswer:
      "SpeedRunners 2: King of Speed released simultaneously on September 3, 2026 across Steam (Windows) under AppID 3183760, PlayStation 5, Xbox Series X|S, and Nintendo Switch. Developer Fair Play Labs and publisher tinyBuild confirmed the four-platform simultaneous launch, day-one Xbox Game Pass availability for console and PC subscribers, and full cross-play across all four platforms from day one. The launch builds ship with controller support, online player-versus-player up to eight players per lobby, sixty-four-player elimination tournaments, the 12-character roster, the 16-map New Rush City layouts, the Story campaign, and the new grappling-hook movement signature.",
    keyFacts: [
      { label: "Release date", value: "September 3, 2026" },
      { label: "Steam AppID", value: "3183760" },
      { label: "Developer", value: "Fair Play Labs" },
      { label: "Publisher", value: "tinyBuild" },
      { label: "Platforms at launch", value: "Steam (Windows), PS5, Xbox Series X|S, Nintendo Switch" },
      { label: "Xbox Game Pass", value: "Day-one on Xbox Game Pass (console and PC)" },
      { label: "Cross-play", value: "Full cross-play across all four platforms from day one" },
    ],
    modules: [
      {
        id: "release-date",
        type: "prose",
        heading: "Release date: September 3, 2026",
        body:
          "SpeedRunners 2: King of Speed launched simultaneously on September 3, 2026 across Steam under AppID 3183760, PlayStation 5, Xbox Series X|S, and Nintendo Switch. Launch-day outlets (gamenews.ie, loovaplay) confirm the four-platform same-day release from developer Fair Play Labs and publisher tinyBuild.",
      },
      {
        id: "platforms",
        type: "prose",
        heading: "Supported platforms at launch",
        body:
          "SpeedRunners 2 shipped on day one across Steam (Windows), PlayStation 5, Xbox Series X|S, and Nintendo Switch. The official speedrunners.com navigation lists Steam, Microsoft Store, PlayStation Store, and Nintendo eShop wishlist entry points, evidencing the multi-platform intent. The Steam store page tags controller support, online PvP up to eight players per lobby, and sixty-four-player elimination tournaments. Note: the Steam store label still reads as a Windows-only AppID 3183760 listing — the cross-platform launch is documented in launch-day press coverage and the developer/publisher hub, not by an explicit Steam cross-platform tag.",
      },
      {
        id: "game-pass-callout",
        type: "callout",
        tone: "confirmed",
        title: "Day-one Xbox Game Pass",
        body:
          "SpeedRunners 2: King of Speed is included on Xbox Game Pass from day one for both console and PC subscribers, per launch-day coverage (loovaplay). Game Pass subscribers can play the Xbox and PC versions without an additional purchase at launch.",
      },
      {
        id: "cross-play-callout",
        type: "callout",
        tone: "confirmed",
        title: "Full cross-play from day one",
        body:
          "Launch-day press coverage states full cross-play across all four platforms from day one (PC, PS5, Xbox Series X|S, Nintendo Switch). Players on any platform can queue together in online lobbies.",
      },
      {
        id: "developer-publisher",
        type: "prose",
        heading: "Developer and publisher",
        body:
          "Fair Play Labs developed SpeedRunners 2: King of Speed and tinyBuild published it. tinyBuild is also the publisher of record for the 2016 original SpeedRunners and is responsible for the franchise framing carried over into the sequel.",
      },
      {
        id: "storefront-context",
        type: "prose",
        heading: "Storefront and community context",
        body:
          "Steam Community hub discussion traffic and SteamDB depot tracking both reference the AppID 3183760 listing. The SteamDB entry is treated as a discovery-only source; the Steam store page and the official developer/publisher hub remain the load-bearing fact sources.",
        links: sharedSources,
      },
    ],
    faqIds: ["sr2-release-date", "sr2-platforms", "sr2-game-pass", "sr2-crossplay"],
    relatedPageIds: ["system-requirements", "crossplay-online", "price-editions", "demo-playtest"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-16",
  },
  {
    id: "system-requirements",
    translationKey: "system-requirements",
    locale: "en-US",
    routeKind: "fixed",
    slug: "system-requirements",
    url: "/system-requirements",
    pageType: "wiki",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "SpeedRunners 2 system requirements on Steam",
    seoTitle: "SpeedRunners 2 system requirements for PC on Steam",
    metaDescription:
      "SpeedRunners 2 system requirements on Steam list Windows 10 x64 as the supported baseline with controller support. Specific tiers are not announced.",
    summary:
      "SpeedRunners 2 lists Windows 10 sixty-four-bit as the supported OS baseline on Steam, with controller support flagged on the store page. Specific GPU/CPU/RAM/storage tiers are not announced as of 2026-09-08.",
    hero: {
      eyebrow: "PC specs",
      subtitle: "What the Steam store page does and does not list for the SpeedRunners 2 PC build.",
      ctas: [
        { label: "Release info", href: "/release/" },
        { label: "Crossplay status", href: "/crossplay/" },
      ],
    },
    quickAnswer:
      "The SpeedRunners 2 system requirements on Steam list Windows 10 sixty-four-bit as the supported operating system baseline, with controller support flagged on the Steam store page for AppID 3183760. The genre list on the storefront also tags Free To Play, which the wiki flags as a launch-window inconsistency until the canonical price answer is observable. Specific GPU, CPU, RAM, and storage tiers beyond what the Steam store page lists are Not announced as of 2026-09-16.",
    keyFacts: [
      { label: "OS baseline", value: "Windows 10 (64-bit)" },
      { label: "Controller support", value: "Yes (per Steam store page)" },
      { label: "GPU/CPU/RAM/storage tiers", value: "Not announced as of 2026-09-16" },
      { label: "Steam Deck verification", value: "Not announced as of 2026-09-16" },
    ],
    modules: [
      {
        id: "os-baseline",
        type: "prose",
        heading: "Operating system baseline",
        body:
          "The Steam store page lists Windows 10 sixty-four-bit as the supported operating system baseline. The listing does not yet publish a separate minimum/recommended split.",
      },
      {
        id: "controller",
        type: "prose",
        heading: "Controller support",
        body:
          "Controller support is tagged on the Steam store page for AppID 3183760 and applies across the launch multiplayer modes including online PvP, LAN PvP, shared and split-screen PvP, and co-op.",
      },
      {
        id: "tiers-unannounced",
        type: "prose",
        heading: "Tier details not announced",
        body:
          "Specific GPU, CPU, RAM, and storage tiers beyond what the Steam store page lists are Not announced as of 2026-09-16. Steam Deck verification status is also not announced.",
      },
      {
        id: "callout-not-announced-as-of-2026-09-16",
        type: "callout",
        tone: "caution",
        title: "Not announced as of 2026-09-16",
        body: "GPU, CPU, RAM, storage tier specifics, and Steam Deck verification have not been published on the Steam store page for AppID 3183760.",
      },
    ],
    faqIds: ["sr2-os", "sr2-deck"],
    relatedPageIds: ["release-platforms"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-16",
  },
  {
    id: "crossplay-online",
    translationKey: "crossplay-online",
    locale: "en-US",
    routeKind: "fixed",
    slug: "crossplay",
    url: "/crossplay",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "SpeedRunners 2 crossplay and online multiplayer",
    seoTitle: "SpeedRunners 2 crossplay and online multiplayer across all platforms",
    metaDescription:
      "SpeedRunners 2 supports full cross-play across Steam (Windows), PlayStation 5, Xbox Series X|S, and Nintendo Switch from day one. Online PvP, LAN, and split-screen co-op are confirmed on the launch build.",
    summary:
      "SpeedRunners 2 launches with full cross-play across PC, PS5, Xbox Series X|S, and Nintendo Switch on day one, alongside online PvP, LAN PvP, shared/split-screen PvP, shared/split-screen co-op, and Steam Remote Play Together.",
    hero: {
      eyebrow: "Multiplayer",
      subtitle:
        "Full cross-play across all four platforms, plus online, LAN, and split-screen play on the launch build.",
      ctas: [
        { label: "Controls", href: "/controls/" },
        { label: "Release info", href: "/release/" },
      ],
    },
    quickAnswer:
      "SpeedRunners 2: King of Speed supports full cross-play across all four platforms from day one: Steam (Windows), PlayStation 5, Xbox Series X|S, and Nintendo Switch. Launch-day press coverage (loovaplay) explicitly states \"Full cross-play across all four platforms from day one\". The launch multiplayer wiring also covers online player-versus-player up to eight players per lobby, LAN player-versus-player, Shared and Split Screen player-versus-player, Shared and Split Screen co-op on a single PC, and Steam Remote Play Together so two players can share a lobby from separate machines.",
    keyFacts: [
      { label: "Cross-play (PC ↔ PS5 ↔ Xbox ↔ Switch)", value: "Yes — full cross-play from day one" },
      { label: "Online PvP", value: "Up to 8 players per lobby" },
      { label: "LAN PvP", value: "Yes" },
      { label: "Shared/Split Screen PvP", value: "Yes" },
      { label: "Shared/Split Screen co-op", value: "Yes (single PC)" },
      { label: "Remote Play Together", value: "Yes" },
    ],
    modules: [
      {
        id: "what-launch",
        type: "prose",
        heading: "What the launch multiplayer actually supports",
        body:
          "Online PvP runs up to eight players per lobby across all four launch platforms. LAN PvP, shared and split-screen PvP, and shared and split-screen co-op are all confirmed for a single PC. Steam Remote Play Together is supported so two remote players can share a lobby from separate machines.",
      },
      {
        id: "crossplay-status",
        type: "prose",
        heading: "Crossplay status: confirmed across all four platforms",
        body:
          "Launch-day press coverage (loovaplay, gamenews.ie) reports full cross-play across Steam (Windows), PlayStation 5, Xbox Series X|S, and Nintendo Switch from day one. Players on any of the four platforms can queue together in online lobbies. The Steam store page for AppID 3183760 still reads as a Windows-only Steam listing and does not currently tag an explicit Steam-side cross-platform label, so cross-play confirmation rests on launch-day press coverage and the developer/publisher hub rather than the Steam storefront tag.",
      },
      {
        id: "callout-storefront-label-gap",
        type: "callout",
        tone: "caution",
        title: "Steam storefront label gap",
        body: "The Steam AppID 3183760 store page lists the build as Windows-only and does not tag a Steam-side crossplay label, even though launch-day press coverage and the developer/publisher hub confirm cross-play across all four platforms. Cross-play confirmation currently rests on launch-day press, not on the Steam storefront tag.",
      },
      {
        id: "demo-crossplay",
        type: "prose",
        heading: "Demo crossplay wiring",
        body:
          "Discussion traffic around the demo crossplay wiring sits on the Steam Community hub and is preserved for context. The live Steam build is the current access path; no separate demo crossplay label is published.",
      },
    ],
    faqIds: ["sr2-crossplay", "sr2-online-lobby"],
    relatedPageIds: ["release-platforms", "controls-movement", "demo-playtest", "price-editions"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-16",
  },
  {
    id: "characters-abilities",
    translationKey: "characters-abilities",
    locale: "en-US",
    routeKind: "fixed",
    slug: "characters",
    url: "/characters",
    pageType: "wiki",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "SpeedRunners 2 characters and abilities",
    seoTitle: "SpeedRunners 2 characters, abilities, roster, and Story campaign heroes",
    metaDescription:
      "SpeedRunners 2 ships a 12-character launch roster with Story campaign heroes and villains (Moonraker, Falcon, Dart, Hothead, Cosmonaut Comrade, Unic, SpeedRunner), grappling hook, and a named power-up arsenal.",
    summary:
      "SpeedRunners 2 ships with a 12-character launch roster, named Story campaign heroes and villains (Moonraker, Falcon, Dart, Hothead, Cosmonaut Comrade, Unic, SpeedRunner), dozens of unlockable cosmetic items, and a shared movement kit of grappling hook, speed boosters, shortcuts, and traps, on top of a named offensive arsenal.",
    hero: {
      eyebrow: "Roster",
      subtitle: "The 12-character launch roster, the Story campaign heroes and villains, the shared movement kit, and the named offensive arsenal.",
      ctas: [
        { label: "Story campaign", href: "/story-campaign/" },
        { label: "Items & powerups", href: "/items/" },
      ],
    },
    quickAnswer:
      "SpeedRunners 2 characters launch as a twelve-character roster on Steam under AppID 3183760 (Windows), PlayStation 5, Xbox Series X|S, and Nintendo Switch, with dozens of unlockable cosmetic items to chase. The shared movement kit adds a grappling hook alongside speed boosters, map shortcuts, and trap drops, while the offensive arsenal lists fireballs, freeze rays, golden hooks, blasters, and portable teleporters. The Story campaign set in New Rush City stars Moonraker and allies (Falcon, Dart, Hothead, Cosmonaut Comrade) against the villain crew (Unic, SpeedRunner). Per-character exact ability stat numbers beyond the Steam store page description are Not announced as of 2026-09-16.",
    keyFacts: [
      { label: "Launch roster size", value: "12 playable characters" },
      { label: "Story campaign heroes", value: "Moonraker, Falcon, Dart, Hothead, Cosmonaut Comrade" },
      { label: "Story campaign villains", value: "Unic, SpeedRunner" },
      { label: "Cosmetic items", value: "Dozens of unlockable items" },
      { label: "Movement tools", value: "Grappling hook, speed boosters, shortcuts, traps" },
      { label: "Per-character ability stats", value: "Not announced as of 2026-09-16" },
    ],
    modules: [
      {
        id: "roster-structure",
        type: "prose",
        heading: "How the twelve-character roster is structured",
        body:
          "SpeedRunners 2 launches with twelve playable characters. Players chase dozens of unlockable cosmetic items through the Story campaign set in New Rush City, the competitive Ranked queue, custom games, and the experimental Playground modes. The 12 launch characters draw on the named Story campaign cast below alongside the unlocked SpeedRunner variants.",
      },
      {
        id: "story-roster",
        type: "prose",
        heading: "Story campaign roster",
        body:
          "The Speed Blog: Story Campaign, Boss Fights, and Other Teasers (changelog.gg) names every Story campaign hero and villain. The named roster the Story campaign set in New Rush City draws from is:",
      },
      {
        id: "story-roster-table",
        type: "data-table",
        heading: "Named Story campaign heroes and villains",
        columns: [
          { key: "character", label: "Character" },
          { key: "role", label: "Story role" },
        ],
        rows: [
          { character: "Moonraker", role: "Hero — Story campaign protagonist in New Rush City" },
          { character: "Falcon", role: "Hero — allied racer in the Story campaign" },
          { character: "Dart", role: "Hero — allied racer in the Story campaign" },
          { character: "Hothead", role: "Hero — allied racer in the Story campaign" },
          { character: "Cosmonaut Comrade", role: "Hero — allied racer in the Story campaign" },
          { character: "Unic", role: "Villain — antagonist in the Story campaign" },
          { character: "SpeedRunner", role: "Villain — antagonist in the Story campaign" },
        ],
      },
      {
        id: "movement-kit",
        type: "prose",
        heading: "Shared movement kit",
        body:
          "Every character on the launch roster shares a movement foundation built around the grappling hook, speed boosters, map shortcuts, and trap drops. The grappling hook is the new movement signature that distinguishes the sequel from the 2016 original.",
      },
      {
        id: "arsenal-summary",
        type: "prose",
        heading: "Named power-up arsenal",
        body:
          "The offensive arsenal adds fireballs, freeze rays, golden hooks, blasters, and portable teleporters on top of the shared movement kit. The named arsenal is the same across the launch modes.",
      },
      {
        id: "stat-boundary",
        type: "prose",
        heading: "Per-character ability stats",
        body:
          "Per-character exact ability stat numbers beyond the Steam store page description are Not announced as of 2026-09-16. The wiki records the named kit rather than invented numeric stats.",
      },
      {
        id: "callout-not-announced-as-of-2026-09-16",
        type: "callout",
        tone: "caution",
        title: "Not announced as of 2026-09-16",
        body: "Per-character exact ability stat numbers have not been published on the Steam store page.",
      },
    ],
    faqIds: ["sr2-roster", "sr2-grapple", "sr2-story-characters"],
    relatedPageIds: ["story-campaign", "items-powerups", "controls-movement", "speedrunners-2-vs-1"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-16",
  },
  {
    id: "story-campaign",
    translationKey: "story-campaign",
    locale: "en-US",
    routeKind: "fixed",
    slug: "story-campaign",
    url: "/story-campaign",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "SpeedRunners 2 Story campaign: heroes, mission types, and Boss Battles",
    seoTitle: "SpeedRunners 2 Story campaign: characters, missions, bosses",
    metaDescription:
      "SpeedRunners 2 Story campaign set in New Rush City stars Moonraker, Falcon, Dart, Hothead, Cosmonaut Comrade against Unic and SpeedRunner. Five mission types: Classic, Lap Race, Skyfall Rush, Boss Battle, Escape Missions. Boss Battles use the Five Movers mechanic.",
    summary:
      "SpeedRunners 2 Story campaign is set in New Rush City with Moonraker and the hero crew (Falcon, Dart, Hothead, Cosmonaut Comrade) racing against the villain crew (Unic, SpeedRunner). The campaign runs across five mission types (Classic, Lap Race, Skyfall Rush, Boss Battle, Escape Missions), uses an act-based replay loop, and powers Boss Battles with the Five Movers mechanic inspired by Psychonauts-style boss design.",
    hero: {
      eyebrow: "Story campaign",
      subtitle: "Named heroes and villains, the five mission types, the Five Movers Boss Battle mechanic, and the act-based replay loop.",
      ctas: [
        { label: "Characters", href: "/characters/" },
        { label: "Tracks & modes", href: "/tracks-modes/" },
      ],
    },
    quickAnswer:
      "The SpeedRunners 2 Story campaign is set in New Rush City and stars Moonraker with the hero crew (Falcon, Dart, Hothead, Cosmonaut Comrade) against the villain crew (Unic, SpeedRunner). The campaign cycles through five mission types: Classic races, Lap Races, Skyfall Rush, Boss Battles, and Escape Missions. Boss Battles use the Five Movers mechanic — a Psychonauts-style design where bosses shift through five movement states — and the campaign runs as an act-based replay loop you revisit to chase unlocks and ranks.",
    keyFacts: [
      { label: "Setting", value: "New Rush City" },
      { label: "Story heroes", value: "Moonraker, Falcon, Dart, Hothead, Cosmonaut Comrade" },
      { label: "Story villains", value: "Unic, SpeedRunner" },
      { label: "Mission types", value: "Classic, Lap Race, Skyfall Rush, Boss Battle, Escape Missions" },
      { label: "Boss Battle mechanic", value: "Five Movers (movement-state boss design)" },
      { label: "Loop structure", value: "Act-based replay loop" },
    ],
    modules: [
      {
        id: "story-setting",
        type: "prose",
        heading: "Story campaign setting and premise",
        body:
          "The SpeedRunners 2 Story campaign is set in New Rush City, the same fictional city the 16 map layouts draw from. The narrative leans into a Psychonauts-style approach where boss encounters double as story beats; DayOne's launch review on playday.one specifically calls out the split reception around this single-player framing, while loovaplay's launch coverage highlights boss battles as a headline addition addressing the original SpeedRunners' missing single-player content.",
      },
      {
        id: "story-roster",
        type: "prose",
        heading: "Story campaign heroes and villains",
        body:
          "The Speed Blog: Story Campaign, Boss Fights, and Other Teasers on changelog.gg names every Story campaign character. The hero crew races under Moonraker alongside Falcon, Dart, Hothead, and Cosmonaut Comrade. The villain crew is anchored by Unic and SpeedRunner.",
      },
      {
        id: "story-roster-table",
        type: "data-table",
        heading: "Story campaign cast at a glance",
        columns: [
          { key: "character", label: "Character" },
          { key: "side", label: "Side" },
          { key: "role", label: "Role" },
        ],
        rows: [
          { character: "Moonraker", side: "Hero", role: "Story campaign protagonist" },
          { character: "Falcon", side: "Hero", role: "Allied racer" },
          { character: "Dart", side: "Hero", role: "Allied racer" },
          { character: "Hothead", side: "Hero", role: "Allied racer" },
          { character: "Cosmonaut Comrade", side: "Hero", role: "Allied racer" },
          { character: "Unic", side: "Villain", role: "Antagonist" },
          { character: "SpeedRunner", side: "Villain", role: "Antagonist" },
        ],
      },
      {
        id: "mission-types",
        type: "prose",
        heading: "Five mission types in the campaign",
        body:
          "The Story campaign cycles through five mission-type variants. Each one changes what success looks like without changing the shared movement foundation (grappling hook, speed boosters, shortcuts, traps) or the named offensive arsenal.",
      },
      {
        id: "mission-types-table",
        type: "data-table",
        heading: "Story mission types",
        columns: [
          { key: "mission", label: "Mission type" },
          { key: "goal", label: "What success looks like" },
        ],
        rows: [
          { mission: "Classic", goal: "Standard race to the finish line against the villain crew" },
          { mission: "Lap Race", goal: "Multi-lap race where you must outlast the field over repeated loops" },
          { mission: "Skyfall Rush", goal: "Vertical / falling-line race variant that leans into the grappling hook" },
          { mission: "Boss Battle", goal: "Race plus boss mechanic powered by the Five Movers (see below)" },
          { mission: "Escape Missions", goal: "Reverse-objective run where you race to outrun a closing threat" },
        ],
      },
      {
        id: "boss-battles",
        type: "prose",
        heading: "Boss Battles and the Five Movers mechanic",
        body:
          "Boss Battles are the headline Story campaign addition. The design leads anchor each boss around the Five Movers mechanic — a Psychonauts-inspired pattern where bosses shift between five distinct movement states you have to read and counter, instead of relying on a single attack pattern. The Speed Blog frames Boss Battles as a single-player answer to the 2016 original's missing solo content; loovaplay's launch coverage flags boss battles as a marquee feature of the launch.",
      },
      {
        id: "five-movers",
        type: "steps",
        heading: "How the Five Movers Boss Battle reads in play",
        items: [
          { title: "Mover 1 — opener", body: "Boss opens in a recognisable movement state you can read on the first lap." },
          { title: "Mover 2 — pressure", body: "Boss shifts to a chase-state that punishes trailing." },
          { title: "Mover 3 — punish", body: "Boss reveals a counter-attack state; you adjust the grappling-hook line." },
          { title: "Mover 4 — desperation", body: "Boss enters a high-pressure state where traps and items matter most." },
          { title: "Mover 5 — finisher", body: "Boss closes in a finisher state; the race-line and item stack decide the result." },
        ],
      },
      {
        id: "replay-loop",
        type: "prose",
        heading: "Act-based replay loop",
        body:
          "The Story campaign runs as an act-based replay loop rather than a single linear race. You revisit acts to chase better ranks, unlock cosmetic items from the 12-character roster, and push through harder versions of each mission type. The replay loop is what feeds cosmetic unlocks back into the launch multiplayer modes (online PvP, Ranked, custom games, Playground).",
      },
      {
        id: "callout-psychonauts-approach",
        type: "callout",
        tone: "tip",
        title: "Psychonauts-inspired narrative framing",
        body:
          "DayOne's launch review (playday.one) specifically notes the Story campaign takes a Psychonauts-inspired narrative approach, where boss encounters double as story beats. Reception is split — boss fights are framed as a marquee addition (loovaplay), while some reviews question how far the single-player framing actually carries the campaign.",
      },
    ],
    faqIds: ["sr2-story-characters", "sr2-mission-types", "sr2-boss-battle"],
    relatedPageIds: ["characters-abilities", "tracks-game-modes", "items-powerups", "controls-movement"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-16",
  },
  {
    id: "tracks-game-modes",
    translationKey: "tracks-game-modes",
    locale: "en-US",
    routeKind: "fixed",
    slug: "tracks-modes",
    url: "/tracks-modes",
    pageType: "wiki",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "SpeedRunners 2 maps, tracks, and game modes",
    seoTitle: "SpeedRunners 2 maps, tracks, and game modes on Steam",
    metaDescription:
      "Reference for the 16 SpeedRunners 2 maps in New Rush City, Story campaign mission types, Playground modes, 64-player elimination tournaments, Ranked play, and custom games on Steam.",
    summary:
      "SpeedRunners 2 ships with 16 map layouts in New Rush City, a Story campaign with five mission types (Classic, Lap Race, Skyfall Rush, Boss Battle, Escape Missions), experimental Playground modes, 64-player elimination tournaments, competitive Ranked play, and custom games.",
    hero: {
      eyebrow: "Maps & modes",
        subtitle: "The 16 map layouts, Story campaign, Playground experimental modes, and the competitive ladder.",
      ctas: [
        { label: "Story campaign", href: "/story-campaign/" },
        { label: "Characters", href: "/characters/" },
      ],
    },
    quickAnswer:
      "SpeedRunners 2: King of Speed ships with 16 map layouts set in a fictional New Rush City, blending online battle-royale racing with a single-player Story campaign (Classic, Lap Race, Skyfall Rush, Boss Battle, Escape Missions) and new experimental Playground rule sets. The launch lineup is structured around 64-player elimination tournaments, a competitive Ranked ladder, and custom games, giving SpeedRunners 2 maps multiple ways to be played on day one.",
    keyFacts: [
      { label: "Map count", value: "16 map layouts" },
      { label: "Setting", value: "New Rush City" },
      { label: "Story mission types", value: "Classic, Lap Race, Skyfall Rush, Boss Battle, Escape Missions" },
      { label: "Modes", value: "Story, 64-player elimination, Ranked, custom games, Playground" },
      { label: "Per-track shortcut layouts", value: "Not announced as of 2026-09-16" },
    ],
    modules: [
      {
        id: "maps-structure",
        type: "prose",
        heading: "How SpeedRunners 2 maps are structured",
        body:
          "The launch map pool is sixteen layouts set in the fictional New Rush City. The same maps rotate through the Story campaign, the online elimination bracket, the competitive Ranked ladder, and the custom games browser.",
      },
      {
        id: "modes",
        type: "prose",
        heading: "Modes on the launch build",
        body:
          "Online play runs as 64-player elimination tournaments with custom games and Ranked play filling the rest of the launch online slate. The Playground mode family adds new experimental rule-bending rule sets that bend the battle-royale racing format. The Story campaign layers five mission types on top of the same map layouts: Classic races, Lap Races, Skyfall Rush, Boss Battles, and Escape Missions.",
      },
      {
        id: "story-link",
        type: "prose",
        heading: "Story campaign mission types",
        body:
          "The Story campaign set in New Rush City cycles through five mission types (Classic, Lap Race, Skyfall Rush, Boss Battle, Escape Missions) with Boss Battles powered by the Five Movers mechanic. See the Story campaign page for the full cast, mission-type breakdown, and act-based replay loop.",
      },
      {
        id: "shortcuts-boundary",
        type: "prose",
        heading: "Per-track shortcut layouts",
        body:
          "Per-track shortcut layouts, exact Playground mode rule sets, and the per-mode ranked ruleset beyond what the Steam store page lists are Not announced as of 2026-09-16.",
      },
      {
        id: "callout-not-announced-as-of-2026-09-16",
        type: "callout",
        tone: "caution",
        title: "Not announced as of 2026-09-16",
        body: "Per-track shortcut layouts, exact Playground mode rule sets, and the per-mode ranked ruleset have not been published.",
      },
    ],
    faqIds: ["sr2-maps", "sr2-playground", "sr2-mission-types"],
    relatedPageIds: ["characters-abilities", "story-campaign", "items-powerups", "controls-movement"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-16",
  },
  {
    id: "controls-movement",
    translationKey: "controls-movement",
    locale: "en-US",
    routeKind: "fixed",
    slug: "controls",
    url: "/controls",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "SpeedRunners 2 controls and movement tricks",
    seoTitle: "SpeedRunners 2 controls: keyboard, controller, and moves",
    metaDescription:
      "SpeedRunners 2 controls guide covering keyboard and controller inputs, the grappling hook, speed boosters, shortcuts, traps, and split-screen play on one keyboard.",
    summary:
      "SpeedRunners 2 supports keyboard and controller play with the grappling hook as the central movement signature, layered with speed boosters, shortcuts, traps, and split-screen PvP/co-op on one keyboard.",
    hero: {
      eyebrow: "Controls",
      subtitle: "Keyboard and controller play, the grappling hook signature, and split-screen play on one keyboard.",
      ctas: [
        { label: "Crossplay", href: "/crossplay/" },
        { label: "Items", href: "/items/" },
      ],
    },
    quickAnswer:
      "SpeedRunners 2: King of Speed supports both keyboard and controller play, with the new grappling hook sitting at the centre of the racing line. Speed boosters, shortcuts, traps, and the expanded item arsenal layer movement choices on top of those base SpeedRunners 2 controls, and the same keyboard can also drive split-screen PvP or co-op sessions.",
    keyFacts: [
      { label: "Keyboard play", value: "Yes" },
      { label: "Controller play", value: "Yes (per Steam store page)" },
      { label: "Movement signature", value: "Grappling hook" },
      { label: "Split-screen on one keyboard", value: "Yes" },
    ],
    modules: [
      {
        id: "high-level",
        type: "prose",
        heading: "SpeedRunners 2 controls at a high level",
        body:
          "Keyboard and controller inputs both drive the launch build. The grappling hook is the new movement signature that distinguishes the sequel from the 2016 original; it sits on top of the existing speed booster and shortcut kit, with traps as the defensive layer.",
      },
      {
        id: "movement-tricks",
        type: "steps",
        heading: "Movement tricks to layer on top",
        items: [
          { title: "Chain the grappling hook", body: "Use the grappling hook to cut corners the racing line cannot reach, then stack a speed booster to extend the reach." },
          { title: "Take the shortcut, then trap", body: "Map shortcuts shrink the loop, and dropping a trap behind the entrance covers the racer chasing." },
          { title: "Split-screen on one keyboard", body: "Shared and split-screen PvP and co-op run on a single PC with one keyboard; controller play remains supported in the same sessions." },
        ],
      },
      {
        id: "keybind-boundary",
        type: "prose",
        heading: "Full per-platform keybind tables",
        body:
          "Full per-platform keybind tables and competitive-rank input allowances beyond the Steam store page's high-level description are \"Not announced as of 2026-09-08\".",
      },
      {
        id: "callout-not-announced-as-of-2026-09-08",
        type: "callout",
        tone: "caution",
        title: "Not announced as of 2026-09-08",
        body: "Full per-platform keybind tables and competitive-rank input allowances have not been published.",
      },
    ],
    faqIds: ["sr2-controls", "sr2-grapple"],
    relatedPageIds: ["crossplay-online", "characters-abilities", "items-powerups", "tracks-game-modes"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-08",
  },
  {
    id: "items-powerups",
    translationKey: "items-powerups",
    locale: "en-US",
    routeKind: "fixed",
    slug: "items",
    url: "/items",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "SpeedRunners 2 items and powerups in the launch arsenal",
    seoTitle: "SpeedRunners 2 items and powerups in the new arsenal",
    metaDescription:
      "SpeedRunners 2 items overview of the launch arsenal: fireballs, freeze rays, golden hooks, blasters, and portable teleporters, and how each shapes the race.",
    summary:
      "SpeedRunners 2 ships with a named offensive arsenal of fireballs, freeze rays, golden hooks, blasters, and portable teleporters, layered on a movement foundation of grappling hook, speed boosters, shortcuts, and traps.",
    hero: {
      eyebrow: "Items",
      subtitle: "The named offensive arsenal and how it interacts with the shared movement foundation.",
      ctas: [
        { label: "Characters", href: "/characters/" },
        { label: "Controls", href: "/controls/" },
      ],
    },
    quickAnswer:
      "SpeedRunners 2: King of Speed ships with an expanded arsenal of named pickups, and the SpeedRunners 2 items list covers fireballs, freeze rays, golden hooks, blasters, and portable teleporters. Each one changes the racing line in a different way, and the movement foundation (grappling hook, speed boosters, shortcuts, traps) is handled separately from the offensive pickup layer.",
    keyFacts: [
      { label: "Fireballs", value: "Named offensive pickup" },
      { label: "Freeze rays", value: "Named offensive pickup" },
      { label: "Golden hooks", value: "Named offensive pickup" },
      { label: "Blasters", value: "Named offensive pickup" },
      { label: "Portable teleporters", value: "Named offensive pickup" },
      { label: "Movement foundation", value: "Grappling hook, speed boosters, shortcuts, traps" },
    ],
    modules: [
      {
        id: "groups",
        type: "data-table",
        heading: "SpeedRunners 2 items at a glance",
        columns: [
          { key: "name", label: "Pickup" },
          { key: "role", label: "Role" },
        ],
        rows: [
          { name: "Fireballs", role: "Offensive projectile" },
          { name: "Freeze rays", role: "Offensive crowd control" },
          { name: "Golden hooks", role: "Offensive reach pickup" },
          { name: "Blasters", role: "Offensive projectile" },
          { name: "Portable teleporters", role: "Offensive reposition pickup" },
          { name: "Grappling hook", role: "Movement signature" },
          { name: "Speed boosters", role: "Movement modifier" },
          { name: "Shortcuts", role: "Map-side shortcut layer" },
          { name: "Traps", role: "Defensive placement" },
        ],
      },
      {
        id: "how-they-affect",
        type: "prose",
        heading: "How each item affects the race",
        body:
          "Fireballs and blasters add pressure on the racer ahead. Freeze rays slow the chase pack and protect a lead. Golden hooks extend the grappling-hook reach. Portable teleporters open long-distance reposition plays that the racing line cannot cover. The movement foundation (grappling hook, speed boosters, shortcuts, traps) is what makes each pickup find a target.",
      },
      {
        id: "stat-boundary",
        type: "prose",
        heading: "Per-item cooldowns, drop rates, rank restrictions",
        body:
          "Per-item exact cooldowns, drop rates, or competitive-rank restrictions beyond the Steam store page's named-arsenal list are \"Not announced as of 2026-09-08\".",
      },
      {
        id: "callout-not-announced-as-of-2026-09-08",
        type: "callout",
        tone: "caution",
        title: "Not announced as of 2026-09-08",
        body: "Per-item exact cooldowns, drop rates, and competitive-rank restrictions have not been published.",
      },
    ],
    faqIds: ["sr2-items", "sr2-grapple"],
    relatedPageIds: ["characters-abilities", "controls-movement", "tracks-game-modes"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-08",
  },
  {
    id: "speedrunners-2-vs-1",
    translationKey: "speedrunners-2-vs-1",
    locale: "en-US",
    routeKind: "fixed",
    slug: "vs-speedrunners-1",
    url: "/vs-speedrunners-1",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "SpeedRunners 2 vs SpeedRunners 1: what changed",
    seoTitle: "SpeedRunners 2 vs SpeedRunners 1: what changed in 2026",
    metaDescription:
      "SpeedRunners 2 vs SpeedRunners 1 comparison: 12-character roster, 16 maps, grappling hook, expanded arsenal, 64-player elimination, Story campaign, Playground.",
    summary:
      "SpeedRunners 2 vs SpeedRunners 1: the 2026 sequel expands the franchise with a 12-character roster, 16 map layouts, grappling-hook movement, an expanded arsenal, 64-player elimination, a Story campaign, and Playground experimental modes.",
    hero: {
      eyebrow: "Comparison",
      subtitle: "What changed between the 2016 original and the 2026 sequel, and what the franchise framing carried over.",
      ctas: [
        { label: "Characters", href: "/characters/" },
        { label: "Items", href: "/items/" },
      ],
    },
    quickAnswer:
      "SpeedRunners 2 vs SpeedRunners 1 is the comparison between the 2016 original SpeedRunners from DoubleDutch Games and tinyBuild and the 2026 sequel SpeedRunners 2: King of Speed from Fair Play Labs and tinyBuild. The sequel expands the franchise with a new 12-character roster, 16 map layouts, the grappling hook as a free movement tool, an expanded power-up arsenal, 64-player elimination tournaments, a Story campaign set in New Rush City, and a new Playground mode family. The 2016 original is referenced here only as legacy context.",
    keyFacts: [
      { label: "Original SpeedRunners", value: "2016 — DoubleDutch Games / tinyBuild" },
      { label: "SpeedRunners 2", value: "2026-09-03 — Fair Play Labs / tinyBuild" },
      { label: "Roster", value: "12 characters in SpeedRunners 2" },
      { label: "Maps", value: "16 map layouts in SpeedRunners 2" },
      { label: "Movement signature", value: "Grappling hook added in SpeedRunners 2" },
    ],
    modules: [
      {
        id: "side-by-side",
        type: "comparison",
        heading: "Side-by-side: SpeedRunners 2 vs SpeedRunners 1",
        options: [
          {
            name: "Developer",
            summary: "SpeedRunners (2016): DoubleDutch Games. SpeedRunners 2 (2026): Fair Play Labs."
          },
          {
            name: "Publisher",
            summary: "SpeedRunners (2016): tinyBuild. SpeedRunners 2 (2026): tinyBuild."
          },
          {
            name: "Roster size",
            summary: "SpeedRunners (2016): Smaller launch roster (legacy reference only). SpeedRunners 2 (2026): 12 playable characters."
          },
          {
            name: "Map layouts",
            summary: "SpeedRunners (2016): Legacy layout pool. SpeedRunners 2 (2026): 16 map layouts in New Rush City."
          },
          {
            name: "Movement signature",
            summary: "SpeedRunners (2016): Speed booster and shortcut kit. SpeedRunners 2 (2026): Grappling hook layered on speed boosters, shortcuts, traps."
          },
          {
            name: "Power-up arsenal",
            summary: "SpeedRunners (2016): Original 2016 set. SpeedRunners 2 (2026): Fireballs, freeze rays, golden hooks, blasters, portable teleporters."
          },
          {
            name: "Modes",
            summary: "SpeedRunners (2016): Battle-royale racing format. SpeedRunners 2 (2026): Story campaign, 64-player elimination, Ranked, custom games, Playground."
          }
        ]
      },
      {
        id: "what-changed",
        type: "prose",
        heading: "What changed in 2026",
        body:
          "SpeedRunners 2 widens the launch roster to twelve characters and the map pool to sixteen layouts, adds a Story campaign set in New Rush City, expands the power-up arsenal to fireballs, freeze rays, golden hooks, blasters, and portable teleporters, and introduces the grappling hook as the new movement signature. The 64-player elimination tournament format and the experimental Playground mode family are also new in the sequel.",
      },
      {
        id: "legacy-note",
        type: "prose",
        heading: "Legacy framing",
        body:
          "The 2016 original SpeedRunners from DoubleDutch Games and tinyBuild is referenced here only as legacy context to clarify what changed. None of the original game's specific abilities, tracks, store listings, or DLC content is treated as current-game fact.",
      },
      {
        id: "callout-legacy-reference-only",
        type: "callout",
        tone: "caution",
        title: "Legacy reference only",
        body: "Original SpeedRunners (2016) specifics clarify what changed; they are not current-game fact.",
      },
    ],
    faqIds: ["sr2-vs-1", "sr2-grapple"],
    relatedPageIds: ["characters-abilities", "items-powerups", "tracks-game-modes", "controls-movement"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-08",
  },
  {
    id: "price-editions",
    translationKey: "price-editions",
    locale: "en-US",
    routeKind: "fixed",
    slug: "price",
    url: "/price",
    pageType: "release",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "SpeedRunners 2 price, editions, and bundles",
    seoTitle: "SpeedRunners 2 price, editions, console prices, and Game Pass",
    metaDescription:
      "SpeedRunners 2 price: Steam introductory $9.99 base with 10% off to $8.99 until September 17, plus per-console editions on PS5, Xbox Series X|S, and Nintendo Switch, and day-one Xbox Game Pass.",
    summary:
      "SpeedRunners 2 lists an introductory $9.99 Steam base price with a 10% launch discount to $8.99 running through September 17, separate per-console editions on PlayStation 5, Xbox Series X|S, and Nintendo Switch, day-one Xbox Game Pass, a soundtrack DLC, and multiple bundles.",
    hero: {
      eyebrow: "Price & editions",
      subtitle: "Steam price, per-console editions, day-one Xbox Game Pass, soundtrack DLC, and bundles.",
      ctas: [
        { label: "Release info", href: "/release/" },
        { label: "Crossplay", href: "/crossplay/" },
      ],
    },
    quickAnswer:
      "The SpeedRunners 2 price on Steam (AppID 3183760) is listed as an introductory $9.99 base price with a 10% launch discount that brings the launch total to $8.99, and that offer ends on September 17. The launch also ships separate per-console editions on PlayStation 5, Xbox Series X|S, and Nintendo Switch, alongside day-one Xbox Game Pass for console and PC subscribers, a soundtrack DLC, and multiple bundles. The Steam genre list includes Free To Play, which the wiki flags as a research-date label rather than a definitive free or paid verdict.",
    keyFacts: [
      { label: "Steam introductory base price", value: "$9.99" },
      { label: "Steam launch discount", value: "10% off → $8.99" },
      { label: "Steam discount ends", value: "September 17, 2026" },
      { label: "PS5 edition", value: "Available day one" },
      { label: "Xbox Series X|S edition", value: "Available day one" },
      { label: "Nintendo Switch edition", value: "Available day one" },
      { label: "Xbox Game Pass", value: "Day-one (console and PC)" },
      { label: "Soundtrack DLC", value: "Available" },
      { label: "Bundles", value: "Multiple bundles offered" },
      { label: "Genre tag note", value: "Free To Play (research-date label)" },
    ],
    modules: [
      {
        id: "launch-price",
        type: "prose",
        heading: "SpeedRunners 2 price at launch on Steam",
        body:
          "The introductory Steam base price is $9.99 with a 10% launch discount that brings the launch total to $8.99. The offer runs through September 17, 2026.",
      },
      {
        id: "console-editions",
        type: "prose",
        heading: "Per-console editions",
        body:
          "SpeedRunners 2: King of Speed shipped as a separate edition on each of PlayStation 5, Xbox Series X|S, and Nintendo Switch on the same launch day (September 3, 2026). Each console storefront carries its own edition listing; the official speedrunners.com navigation includes PlayStation Store, Microsoft Store, and Nintendo eShop wishlist entry points alongside Steam. Exact console-region pricing and any console-exclusive launch discounts are set by each storefront at launch.",
      },
      {
        id: "console-price-table",
        type: "data-table",
        heading: "Per-console edition at a glance",
        columns: [
          { key: "platform", label: "Platform" },
          { key: "edition", label: "Edition status" },
          { key: "subscription", label: "Subscription note" },
        ],
        rows: [
          { platform: "Steam (Windows)", edition: "Day-one — AppID 3183760", subscription: "Not on a subscription service at launch" },
          { platform: "PlayStation 5", edition: "Day-one — PlayStation Store listing", subscription: "Not announced" },
          { platform: "Xbox Series X|S", edition: "Day-one — Microsoft Store listing", subscription: "Day-one on Xbox Game Pass" },
          { platform: "Nintendo Switch", edition: "Day-one — Nintendo eShop listing", subscription: "Not announced" },
        ],
      },
      {
        id: "game-pass-callout",
        type: "callout",
        tone: "confirmed",
        title: "Day-one Xbox Game Pass",
        body:
          "SpeedRunners 2 is included on Xbox Game Pass from day one for both console and PC subscribers, per launch-day coverage (loovaplay). Game Pass subscribers on Xbox Series X|S or PC can play without an additional launch purchase.",
      },
      {
        id: "soundtrack-bundles",
        type: "prose",
        heading: "Soundtrack DLC and bundles",
        body:
          "The launch Steam page also lists a soundtrack DLC and multiple bundles alongside the base game.",
      },
      {
        id: "genre-note",
        type: "prose",
        heading: "Free To Play genre note",
        body:
          "The Steam genre list includes Free To Play, which the wiki captures as a research-date note rather than a definitive free or paid verdict. The authoritative launch price remains the introductory $9.99 base with the 10% launch discount.",
      },
      {
        id: "callout-research-date-note",
        type: "callout",
        tone: "caution",
        title: "Research-date note",
        body: "Free To Play appears in the Steam genre list; the wiki records it as a research-date note pending a single canonical price answer.",
      },
      {
        id: "post-discount-boundary",
        type: "prose",
        heading: "Post-September 17 and per-storefront pricing details",
        body:
          "Post-September 17 final Steam price, regional pricing on each console storefront, console-region-specific launch discounts, and bundle contents beyond what the Steam store page lists remain Not announced as of 2026-09-16.",
      },
    ],
    faqIds: ["sr2-price", "sr2-bundles", "sr2-game-pass"],
    relatedPageIds: ["release-platforms", "demo-playtest", "crossplay-online"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-16",
  },
  {
    id: "demo-playtest",
    translationKey: "demo-playtest",
    locale: "en-US",
    routeKind: "fixed",
    slug: "demo",
    url: "/demo",
    pageType: "release",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "SpeedRunners 2 demo and playtest status on Steam",
    seoTitle: "SpeedRunners 2 demo and playtest: how to access the build",
    metaDescription:
      "SpeedRunners 2 demo windows ran on Steam before the 2026-09-03 live build. As of 2026-09-08, the live Steam release is the only official access path on PC.",
    summary:
      "SpeedRunners 2 demo and playtest windows closed before the 2026-09-03 live build. As of 2026-09-08, the live Steam release for AppID 3183760 is the only official access path on PC.",
    hero: {
      eyebrow: "Demo & playtest",
      subtitle: "Pre-launch demo and playtest history, SteamDB depot tracking, and current access paths.",
      ctas: [
        { label: "Release info", href: "/release/" },
        { label: "Crossplay", href: "/crossplay/" },
      ],
    },
    quickAnswer:
      "The pre-launch SpeedRunners 2 demo and playtest windows ran on Steam before the September 3, 2026 live build. As of 2026-09-08, the live Steam release for AppID 3183760 is the only official access path on PC; SteamDB depots track the demo and playtest builds as historical metadata rather than a separate access route.",
    keyFacts: [
      { label: "Demo window", value: "Closed before 2026-09-03" },
      { label: "Current access path", value: "Live Steam build (AppID 3183760)" },
      { label: "SteamDB depot tracking", value: "Historical metadata only" },
      { label: "Future demo windows", value: "Not announced as of 2026-09-08" },
    ],
    modules: [
      {
        id: "history",
        type: "prose",
        heading: "SpeedRunners 2 demo and playtest history",
        body:
          "Pre-launch SpeedRunners 2 demo and playtest windows ran on Steam before the September 3, 2026 live build. SteamDB depots track the demo and playtest builds as historical metadata. The Steam store page no longer carries a separate demo entry on the live storefront.",
      },
      {
        id: "current-access",
        type: "prose",
        heading: "Current access path",
        body:
          "Day-one access runs through the live Steam build for AppID 3183760 on Windows. Steam Community hub discussion traffic around the demo crossplay wiring is preserved for context.",
      },
      {
        id: "future-window",
        type: "prose",
        heading: "Future demo windows",
        body:
          "Any future SpeedRunners 2 demo or playtest window beyond the live Steam build is \"Not announced as of 2026-09-08\".",
      },
      {
        id: "callout-not-announced-as-of-2026-09-08",
        type: "callout",
        tone: "caution",
        title: "Not announced as of 2026-09-08",
        body: "Future demo or playtest windows beyond the live Steam build have not been published.",
      },
    ],
    faqIds: ["sr2-demo", "sr2-playtest"],
    relatedPageIds: ["release-platforms", "crossplay-online", "reviews-press"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-08",
  },
  {
    id: "reviews-press",
    translationKey: "reviews-press",
    locale: "en-US",
    routeKind: "fixed",
    slug: "reviews",
    url: "/reviews",
    pageType: "release",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "SpeedRunners 2 launch reviews and player reactions",
    seoTitle: "SpeedRunners 2 launch reviews and Steam reception",
    metaDescription:
      "SpeedRunners 2 launch reviews: Mixed 57% of 363 Steam user reviews positive as of 2026-09-08. Steam Community hub discussion and SpeedRunners 2 developer/publisher hub for press coverage.",
    summary:
      "SpeedRunners 2 launch-week Steam user reviews were Mixed at 57% of 363 reviews positive as of 2026-09-08. The Steam Community hub discussion and the developer/publisher announcement hub carry press coverage.",
    hero: {
      eyebrow: "Reception",
      subtitle: "Launch-week Steam user review snapshot, Community hub discussion, and developer/publisher press hub.",
      ctas: [
        { label: "Release info", href: "/release/" },
        { label: "Demo history", href: "/demo/" },
      ],
    },
    quickAnswer:
      "SpeedRunners 2 launch reviews sat in the Mixed band during launch week: 57% of 363 Steam user reviews were positive as of 2026-09-08. Steam Community hub discussion threads carry launch-week sentiment, and the SpeedRunners 2 developer/publisher hub carries press coverage. Metacritic or OpenCritic critic scores beyond the Steam user review snapshot are not announced as of 2026-09-08.",
    keyFacts: [
      { label: "Steam user review band", value: "Mixed" },
      { label: "Positive share", value: "57% of 363 reviews" },
      { label: "Snapshot date", value: "2026-09-08" },
      { label: "Critic scores (Metacritic/OpenCritic)", value: "Not announced as of 2026-09-08" },
    ],
    modules: [
      {
        id: "steam-snapshot",
        type: "prose",
        heading: "Steam user review snapshot",
        body:
          "Launch-week Steam user reviews were Mixed, with 57% of 363 reviews positive as of 2026-09-08. The wiki records the snapshot rather than projecting forward to a later score.",
      },
      {
        id: "community-press",
        type: "prose",
        heading: "Steam Community hub and developer/publisher hub",
        body:
          "Steam Community hub discussion threads carry launch-week sentiment. The SpeedRunners 2 developer/publisher announcement hub at speedrunners2.com carries press coverage for the launch.",
        links: sharedSources,
      },
      {
        id: "critic-boundary",
        type: "prose",
        heading: "Critic scores",
        body:
          "Metacritic or OpenCritic critic scores beyond the Steam user review snapshot are \"Not announced as of 2026-09-08\".",
      },
      {
        id: "callout-not-announced-as-of-2026-09-08",
        type: "callout",
        tone: "caution",
        title: "Not announced as of 2026-09-08",
        body: "Metacritic or OpenCritic critic scores beyond the Steam user review snapshot have not been published.",
      },
    ],
    faqIds: ["sr2-reviews", "sr2-press"],
    relatedPageIds: ["release-platforms", "demo-playtest"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-08",
  },
  {
    id: "wiki",
    translationKey: "wiki",
    locale: "en-US",
    routeKind: "fixed",
    slug: "wiki",
    url: "/wiki",
    pageType: "wiki",
    presentation: { shell: "hub", variant: "card-grid" },
    h1: `${site.gameName} Wiki`,
    seoTitle: `${site.gameName} Wiki | Facts, Systems, and Reference Notes`,
    metaDescription:
      "Wiki index for SpeedRunners 2: King of Speed: release, crossplay, roster, story campaign, tracks, controls, items, price, demo, reviews.",
    summary:
      "A wiki index for SpeedRunners 2: King of Speed covering release status, crossplay, roster, Story campaign, tracks, controls, items, price, demo, and reviews.",
    hero: {
      eyebrow: "Wiki",
      subtitle:
        "The wiki index for SpeedRunners 2: King of Speed. Each route below anchors to verified launch-day sources (Steam store page, official Speed Blog, launch-day press) as of 2026-09-16.",
      ctas: [
        { label: "Release", href: "/release" },
        { label: "Crossplay", href: "/crossplay" },
      ],
    },
    quickAnswer:
      "The wiki covers SpeedRunners 2: King of Speed release status (multi-platform across Steam, PS5, Xbox Series X|S, and Nintendo Switch), full cross-play from day one, day-one Xbox Game Pass, the 12-character roster and Story campaign, the 16 map layouts, controls, items, price, demo history, and launch-week reviews.",
    keyFacts: [
      { label: "Wiki scope", value: "Release, crossplay, roster, Story campaign, tracks, controls, items, price, demo, reviews" },
      { label: "Source rule", value: "Steam store page, official Speed Blog, and launch-day press" },
      { label: "Snapshot date", value: "2026-09-16" },
    ],
    modules: [
      {
        id: "wiki-index",
        type: "entity-grid",
        heading: "Wiki routes",
        items: [
          { title: "Release", summary: "Multi-platform release date and supported platforms.", href: "/release" },
          { title: "Crossplay", summary: "Full cross-play across all four platforms.", href: "/crossplay" },
          { title: "Characters", summary: "12-character launch roster and Story campaign cast.", href: "/characters" },
          { title: "Story campaign", summary: "Named heroes, mission types, Boss Battle Movers mechanic.", href: "/story-campaign" },
          { title: "Tracks & modes", summary: "16 map layouts and Playground modes.", href: "/tracks-modes" },
          { title: "Controls", summary: "Keyboard, controller, movement tricks.", href: "/controls" },
          { title: "Items", summary: "Fireballs, freeze rays, golden hooks, blasters, teleporters.", href: "/items" },
        ],
      },
    ],
    faqIds: ["sr2-release-date", "sr2-crossplay", "sr2-roster", "sr2-game-pass", "sr2-story-characters", "sr2-mission-types"],
    relatedPageIds: ["release-platforms", "crossplay-online", "characters-abilities", "story-campaign", "tracks-game-modes", "controls-movement", "items-powerups"],
    schemaTypes: ["CollectionPage", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-16",
  },
  {
    id: "faq",
    translationKey: "faq",
    locale: "en-US",
    routeKind: "fixed",
    slug: "faq",
    url: "/faq",
    pageType: "faq",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: `${site.gameName} FAQ`,
    seoTitle: `${site.gameName} FAQ | Common Questions`,
    metaDescription:
      "FAQ for SpeedRunners 2: King of Speed covering release, crossplay, roster, controls, items, price, demo, and reviews.",
    summary:
      "FAQ for SpeedRunners 2: King of Speed covering release, crossplay, roster, controls, items, price, demo, and reviews.",
    hero: {
      eyebrow: "FAQ",
      subtitle: "Short answers to the most common SpeedRunners 2: King of Speed questions.",
      ctas: [
        { label: "Release", href: "/release" },
        { label: "Crossplay", href: "/crossplay" },
      ],
    },
    quickAnswer:
      "The FAQ covers SpeedRunners 2: King of Speed release date and platforms, day-one Xbox Game Pass, full cross-play across PC, PS5, Xbox, and Switch, the 12-character roster and Story campaign heroes, mission types and Boss Battles, controls, items, price, demo history, and launch-week reviews.",
    keyFacts: [
      { label: "FAQ scope", value: "Release, platforms, Game Pass, crossplay, roster, Story campaign, controls, items, price, demo, reviews" },
      { label: "Source rule", value: "Steam store page, official Speed Blog, and launch-day press" },
      { label: "Snapshot date", value: "2026-09-16" },
    ],
    modules: [
      {
        id: "faq-list",
        type: "prose",
        heading: "Frequently asked questions",
        body: "Browse the full FAQ list at the per-route FAQ sections on this wiki.",
      },
    ],
    faqIds: ["sr2-release-date", "sr2-platforms", "sr2-game-pass", "sr2-crossplay", "sr2-roster", "sr2-story-characters", "sr2-mission-types", "sr2-boss-battle", "sr2-controls", "sr2-items", "sr2-price", "sr2-reviews"],
    relatedPageIds: ["release-platforms", "crossplay-online", "characters-abilities", "story-campaign", "controls-movement", "items-powerups", "price-editions", "reviews-press"],
    schemaTypes: ["FAQPage", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: "2026-09-16",
  },
  {
    id: "about",
    translationKey: "about",
    locale: "en-US",
    routeKind: "fixed",
    slug: "about",
    url: "/about",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: `About ${site.name}`,
    seoTitle: `About ${site.name}`,
    metaDescription:
      "About the SpeedRunners 2: King of Speed wiki: unofficial guide hub with verified Steam store page and launch-day press facts.",
    summary:
      "About the SpeedRunners 2: King of Speed wiki: scope, sources, and editorial principles.",
    hero: {
      eyebrow: "About",
      subtitle: "What this wiki covers, how facts are sourced, and what readers should expect.",
      ctas: [{ label: "Release", href: "/release" }],
    },
    quickAnswer:
      "This is an unofficial SpeedRunners 2: King of Speed wiki hub. Facts anchor to the Steam store page for AppID 3183760, the Steam Community hub, the official Speed Blog on changelog.gg, and launch-day press coverage as of 2026-09-16.",
    keyFacts: [
      { label: "Status", value: "Unofficial fan wiki" },
      { label: "Editorial rule", value: "Verified launch-day sources first" },
      { label: "Scope", value: "Release, crossplay, roster, Story campaign, tracks, controls, items, price, demo, reviews" },
    ],
    modules: [
      {
        id: "mission",
        type: "prose",
        heading: "Mission",
        body:
          "Help SpeedRunners 2: King of Speed players find launch-day facts without overclaiming. Anchor every fact to the Steam store page for AppID 3183760, the Steam Community hub, the official Speed Blog on changelog.gg, and launch-day press coverage as of 2026-09-16.",
      },
      {
        id: "sourcing",
        type: "prose",
        heading: "Sourcing",
        body:
          "Use the Steam store page, the Steam Community hub, Steam Discussions, the official developer/publisher hub, and SteamDB (discovery-only) for fact anchoring. Multi-platform launch, day-one Xbox Game Pass, full cross-play, Story campaign characters, mission types, and Boss Battle design are anchored to the official Speed Blog on changelog.gg plus launch-day press coverage (gamenews.ie, loovaplay, playday.one). Anything not announced is labeled Not announced as of 2026-09-16.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["release-platforms", "crossplay-online", "characters-abilities", "story-campaign"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: "2026-09-16",
  },
  {
    id: "guides",
    translationKey: "guides",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides",
    url: "/guides",
    pageType: "guides",
    presentation: { shell: "hub", variant: "card-grid" },
    h1: `${site.gameName} Guides`,
    seoTitle: `${site.gameName} Guides | Beginner Tips and Starter Help`,
    metaDescription:
      "A guides index for SpeedRunners 2: King of Speed covering controls, items, characters, Story campaign, tracks, and movement tricks.",
    summary:
      "An index of SpeedRunners 2: King of Speed guides covering controls, items, characters, Story campaign, tracks, and movement tricks.",
    hero: {
      eyebrow: "Guides",
      subtitle:
        "Use the routes below as launch-day guide entries. Each one anchors to verified launch-day sources (Steam store page, official Speed Blog, launch-day press) as of 2026-09-16.",
      ctas: [
        { label: "Release info", href: "/release" },
        { label: "Story campaign", href: "/story-campaign" },
      ],
    },
    quickAnswer:
      "The guides below cover SpeedRunners 2: King of Speed controls, items, characters, Story campaign, tracks, and movement tricks, and each route anchors to verified launch-day sources.",
    keyFacts: [
      { label: "Guide scope", value: "Controls, items, characters, Story campaign, tracks, movement" },
      { label: "Source rule", value: "Steam store page, official Speed Blog, launch-day press" },
      { label: "Snapshot date", value: "2026-09-16" },
    ],
    modules: [
      {
        id: "guide-index",
        type: "entity-grid",
        heading: "Guide entries",
        items: [
          { title: "Controls & movement", summary: "Keyboard, controller, and movement tricks.", href: "/controls" },
          { title: "Items & powerups", summary: "Fireballs, freeze rays, golden hooks, blasters, teleporters.", href: "/items" },
          { title: "Characters & abilities", summary: "12-character roster and shared movement kit.", href: "/characters" },
          { title: "Story campaign", summary: "Named heroes, mission types, Boss Battle Movers mechanic, act-based replay loop.", href: "/story-campaign" },
          { title: "Tracks & modes", summary: "16 map layouts and Playground experimental modes.", href: "/tracks-modes" },
        ],
      },
    ],
    faqIds: ["sr2-controls", "sr2-items", "sr2-grapple", "sr2-story-characters", "sr2-mission-types", "sr2-boss-battle"],
    relatedPageIds: ["controls-movement", "items-powerups", "characters-abilities", "story-campaign", "tracks-game-modes"],
    schemaTypes: ["CollectionPage", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-16",
  },
];

void site;