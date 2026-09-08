import { site } from "@/data/site";

export interface LocalizedNavigationItem {
  href: string;
  labels: Record<string, string>;
}

export const primaryNavigation: LocalizedNavigationItem[] = [
  { href: "/release", labels: { "en-US": "Release" } },
  { href: "/system-requirements", labels: { "en-US": "System requirements" } },
  { href: "/crossplay", labels: { "en-US": "Crossplay" } },
  { href: "/characters", labels: { "en-US": "Characters" } },
  { href: "/tracks-modes", labels: { "en-US": "Tracks & modes" } },
  { href: "/controls", labels: { "en-US": "Controls" } },
  { href: "/items", labels: { "en-US": "Items" } },
  { href: "/vs-speedrunners-1", labels: { "en-US": "SR2 vs SR1" } },
  { href: "/price", labels: { "en-US": "Price" } },
  { href: "/demo", labels: { "en-US": "Demo" } },
  { href: "/reviews", labels: { "en-US": "Reviews" } },
];

export const footerNavigation: LocalizedNavigationItem[] = [
  { href: "/guides", labels: { "en-US": "Guides" } },
];

export function navigationLabel(
  item: LocalizedNavigationItem,
  locale: string,
): string {
  return (
    item.labels[locale] ||
    item.labels[site.primaryLocale] ||
    Object.values(item.labels)[0]
  );
}