# CONTENT_INDEX.md

## How To Use This File

Use this index to find the current role of each URL before editing. Update it whenever URLs, page roles, metadata, CTAs, schema, or internal-link responsibilities change.

## Page Inventory

The rows below are the primary-locale baseline. Localized versions keep the same
`translationKey`, use their configured locale prefix, and must appear in canonical,
hreflang, sitemap, and route-manifest validation.

| URL | File/Route | Type | Primary Keyword | Search Intent | Primary CTA | Internal-Link Role | Notes |
|---|---|---|---|---|---|---|---|
| `/` | `src/data/pages/home.ts` | Landing | SpeedRunners 2 launch hub | Find the most current entry point for launch and content | Release info / Crossplay | Hub | Multi-platform launch hub (Steam, PS5, Xbox, Switch, day-one Game Pass). |
| `/release` | `src/data/pages/fixed-pages.ts` (`release-platforms`) | Release | SpeedRunners 2 release date and platforms | Confirm launch date, supported platforms, Game Pass | Crossplay / Price | Supporting hub | Anchors multi-platform launch and day-one Xbox Game Pass. |
| `/system-requirements` | `src/data/pages/fixed-pages.ts` (`system-requirements`) | Wiki | SpeedRunners 2 system requirements | Check PC specs and OS baseline | Release info / Crossplay | Supporting | PC OS baseline only; tier specifics unannounced. |
| `/crossplay` | `src/data/pages/fixed-pages.ts` (`crossplay-online`) | Site | SpeedRunners 2 crossplay and online multiplayer | Confirm cross-play across platforms and online lobby wiring | Controls / Release | Supporting hub | Full cross-play across all four platforms from day one. |
| `/characters` | `src/data/pages/fixed-pages.ts` (`characters-abilities`) | Wiki | SpeedRunners 2 characters and Story campaign roster | Browse launch roster and Story campaign cast | Story campaign / Items | Supporting | 12-character roster plus named Story heroes and villains. |
| `/story-campaign` | `src/data/pages/fixed-pages.ts` (`story-campaign`) | Guides | SpeedRunners 2 Story campaign characters, missions, bosses | Learn Story mission types, named heroes/villains, Boss Battle Movers | Characters / Tracks & modes | Hub | Five mission types, Five Movers boss mechanic, act-based replay loop. |
| `/tracks-modes` | `src/data/pages/fixed-pages.ts` (`tracks-game-modes`) | Wiki | SpeedRunners 2 maps, tracks, and game modes | Reference map layouts and mode lineup | Story campaign / Characters | Supporting | 16 maps plus Story mission-type variants. |
| `/controls` | `src/data/pages/fixed-pages.ts` (`controls-movement`) | Guides | SpeedRunners 2 controls and movement tricks | Look up keyboard and controller inputs | Crossplay / Items | Supporting | Movement signature, split-screen play. |
| `/items` | `src/data/pages/fixed-pages.ts` (`items-powerups`) | Site | SpeedRunners 2 items and powerups | Browse named offensive arsenal and movement foundation | Characters / Controls | Supporting | Named arsenal: fireballs, freeze rays, golden hooks, blasters, teleporters. |
| `/vs-speedrunners-1` | `src/data/pages/fixed-pages.ts` (`speedrunners-2-vs-1`) | Site | SpeedRunners 2 vs SpeedRunners 1 | Compare sequel vs 2016 original | Characters / Items | Supporting | Legacy-reference comparison. |
| `/price` | `src/data/pages/fixed-pages.ts` (`price-editions`) | Release | SpeedRunners 2 price, editions, and Game Pass | Compare Steam price, per-console editions, Game Pass | Release info / Crossplay | Supporting hub | Steam introductory price plus per-console editions and day-one Game Pass. |
| `/demo` | `src/data/pages/fixed-pages.ts` (`demo-playtest`) | Release | SpeedRunners 2 demo and playtest status | Find pre-launch demo and current access path | Release info / Crossplay | Supporting | Pre-launch windows closed; live build is the only official access path. |
| `/reviews` | `src/data/pages/fixed-pages.ts` (`reviews-press`) | Release | SpeedRunners 2 launch reviews | Read Steam user review snapshot and press coverage | Release info / Demo | Supporting | Launch-week Mixed Steam reviews. |
| `/wiki` | `src/data/pages/fixed-pages.ts` (`wiki`) | Wiki | SpeedRunners 2 wiki index | Browse all wiki routes | Release / Crossplay | Hub | Wiki index for the game. |
| `/guides` | `src/data/pages/fixed-pages.ts` (`guides`) | Guides | SpeedRunners 2 guides index | Browse launch-day guide entries | Release info / Story campaign | Hub | Guides index for the game. |
| `/faq` | `src/data/pages/fixed-pages.ts` (`faq`) | FAQ | SpeedRunners 2 FAQ | Get short answers to common questions | Release / Crossplay | Hub | FAQ page; references per-route FAQ schema. |
| `/about` | `src/data/pages/fixed-pages.ts` (`about`) | Utility | About SpeedRunners 2 wiki | Understand sourcing and editorial rules | Release | Trust | Editorial rules and source rules. |

## Generated Route Families

- Fixed and tool pages: authored in `src/data/pages/*.ts` with explicit locale and final URL.
- Entity Hubs and details: generated from `src/data/entities.ts` and the generic renderer in `src/lib/entities.ts`.
- Final route inventory: `npm run routes:manifest`.
- Secondary-locale routes use the prefix configured in `src/data/site.ts`; the primary locale remains on root paths.

## Content Clusters

- Launch facts: `/release`, `/price`, `/crossplay`, `/faq`
- Story campaign and content: `/characters`, `/story-campaign`, `/tracks-modes`, `/items`, `/controls`
- Roster and comparisons: `/characters`, `/vs-speedrunners-1`
- System and access: `/system-requirements`, `/demo`, `/reviews`
- Evergreen hub and trust: `/`, `/wiki`, `/guides`, `/about`

## Internal Linking Map

- Homepage should link to the most current high-demand pages, including `/release`, `/crossplay`, and `/story-campaign`.
- Wiki should link to guide and release pages, including the Story campaign route.
- Guides should link to wiki and release pages, plus the Story campaign route.
- Release should link to `/crossplay` and `/price`; the price page carries the Game Pass callout.
- Crossplay should link to release and price for the per-console and subscription context.
- Story campaign page is the hub for the Story campaign cast, mission types, and Boss Battle Movers mechanic.
- FAQ should include all current high-demand answer pages, including `/release-date`, `/crossplay`, `/story-campaign`, and `/price`.

## Open Questions

- Per-console-region pricing and post-September 17 final Steam price remain Not announced as of 2026-09-16.
- Steam-side cross-platform label on the AppID 3183760 store page is still absent; cross-play confirmation currently rests on launch-day press coverage and the developer/publisher hub, not on the Steam storefront tag.