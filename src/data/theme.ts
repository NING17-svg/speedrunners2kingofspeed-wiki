import type { ThemeConfig } from "@/types/theme";

export const theme = {
  mode: "light",
  tokens: {
    pageBg: "#FAF6EE",
    surface1: "#FFFFFF",
    surface2: "#F2EBD9",
    surface3: "#E7DEC6",
    surfaceInverse: "#171827",
    textPrimary: "#171827",
    textMuted: "#5A5C72",
    textInverse: "#FAF6EE",
    textOnAccentPrimary: "#FFFFFF",
    textLink: "#2349B2",
    focusRing: "#F0A800",
    line: "#E1D8C0",
    lineStrong: "#A99E80",
    accentPrimary: "#D8261E",
    accentSecondary: "#2349B2",
    accentBright: "#F0A800",
    statusConfirmed: "#1F8A4C",
    statusCaution: "#D17A00",
    statusUnknown: "#6B7280",
  },
  typography: {
    headingFamily:
      "'Bricolage Grotesque', 'Sora', 'Helvetica Neue', Arial, system-ui, sans-serif",
    bodyFamily:
      "'Inter', 'Source Sans 3', 'Helvetica Neue', Arial, system-ui, sans-serif",
    headingWeight: 800,
  },
  shape: {
    radius: "6px",
    borderWidth: "1px",
    shadow:
      "0 1px 2px rgba(15, 18, 30, 0.08), 0 6px 16px rgba(15, 18, 30, 0.06)",
    hoverLift: "translateY(-2px)",
  },
  density: "comfortable",
  background: { mode: "gradient", overlay: 0, position: "top center" },
  variants: {
    home: "split-panel",
    hub: "card-grid",
    content: "reading-right-rail",
    workspace: "full-width",
  },
  decoration: { motif: "lines", intensity: "low" },
} satisfies ThemeConfig;