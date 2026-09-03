---
title: "Alferid Hassen Portfolio Design System"
version: "1.0.0"
register: "brand-surface"
colors:
  ground: "#090a0f"
  surface: "#0f1118"
  elevated: "#161822"
  surfaceHover: "#1c1f2c"
  borderSubtle: "#232736"
  borderHover: "#353b50"
  textPrimary: "#f8fafc"
  textSecondary: "#94a3b8"
  textMuted: "#64748b"
  accent: "#f59e0b"
  accentHover: "#d97706"
  accentLight: "#fbbf24"
  accentMuted: "#78350f"
  accentSubtle: "rgba(245, 158, 11, 0.15)"
  white: "#ffffff"
  black: "#000000"
  success: "#10b981"
  successBg: "rgba(16, 185, 129, 0.1)"
  error: "#ef4444"
typography:
  fontFamily: "Outfit, system-ui, sans-serif"
  monoFamily: "JetBrains Mono, monospace"
  heroDisplay:
    fontSize: "72px"
  display:
    fontSize: "56px"
  h1:
    fontSize: "40px"
  h2:
    fontSize: "32px"
  h3:
    fontSize: "24px"
  h4:
    fontSize: "20px"
  bodyLarge:
    fontSize: "18px"
  body:
    fontSize: "16px"
  small:
    fontSize: "14px"
  caption:
    fontSize: "12px"
rounded:
  sm: "6px"
  md: "8px"
  lg: "12px"
  xl: "16px"
  2xl: "20px"
  full: "9999px"
---

# Impeccable Design System

## 1. Visual Register
This interface is a **Brand Surface & Engineering Showcase**. The visual goal is to communicate engineering authority, architectural discipline, and modern craft.

## 2. Palette & Contrast
- **Ground**: `#090a0f` — Deep obsidian base with a 2% neutral-blue tint, avoiding pitch black (`#000000`) and washed-out muddy slates.
- **Surfaces**: `#0f1118` (cards) and `#161822` (elevated elements), framed with delicate hairline strokes (`#232736` or `rgba(255,255,255,0.08)`).
- **Signature Accent**: Warm Luminary Amber (`#f59e0b` / `#fbbf24`), replacing generic AI cyan/teal and purple gradients.
- **Contrast Integrity**: High contrast WCAG AAA for primary copy (`#f8fafc` on dark). Any element with a solid accent background uses pure `#000000` text for maximum legibility.

## 3. Typography
- **Primary & Display**: `Outfit` — A distinct, geometric grotesque with architectural precision and high legibility.
- **Technical & Monospace**: `JetBrains Mono` — For metrics, tags, dates, and code specifications.
- **Anti-pattern rule**: Zero decorative gradient text. All headlines use solid, confident color values.

## 4. Layout & Spacing
- Hierarchy is achieved through typography, negative space, and contrast rather than nesting cards within cards.
- Iconography is integrated in-flow with typography, avoiding mechanical rounded icon tiles above headings.
- Motion is strictly functional with exponential or ease-out curves; no bouncy or elastic easing.
