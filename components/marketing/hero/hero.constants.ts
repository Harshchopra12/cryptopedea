// ============================================================
// Hero Constants
// Source of Truth for the Marketing Hero
// ============================================================

import type {
  HeroAnimationConfig,
  HeroDecoration,
} from "./hero.types";

// ============================================================
// Hero Dimensions
// ============================================================

export const HERO_DIMENSIONS = {
  WIDTH: 1441,
  HEIGHT: 816,

  MIN_HEIGHT_CLASSNAME: "min-h-[816px]",

  BORDER_WIDTH: 3,

  BACKGROUND: "var(--cp-background)",
  BORDER_COLOR: "var(--cp-color-primary)",
} as const;

// ============================================================
// Hero Layout
// ============================================================

export const HERO_LAYOUT = {
  CONTENT_DIRECTION: "column",
  CONTENT_ALIGNMENT: "flex-start",
  CONTENT_JUSTIFICATION: "flex-start",

  CONTENT_TOP: 251,
  CONTENT_LEFT: 245,

  CONTENT_GAP: 30,

  OVERFLOW: "hidden",
} as const;

// ============================================================
// Hero Typography
// ============================================================

export const HERO_TYPOGRAPHY = {
  TITLE: {
    TEXT: "Cryptopedea",

    FONT_SIZE: 120,
    FONT_WEIGHT: 700,

    LINE_HEIGHT: "110%",
    LETTER_SPACING: "-0.03em",

    WIDTH: 951,
    HEIGHT: 132,
  },

  DESCRIPTION: {
    FONT_SIZE: 24,
    FONT_WEIGHT: 400,

    LINE_HEIGHT: "125%",
    LETTER_SPACING: "-0.03em",

    WIDTH: 951,
    HEIGHT: 60,
  },

  BUTTON: {
    FONT_SIZE: 28,
    FONT_WEIGHT: 400,
  },
} as const;

// ============================================================
// Hero Content
// ============================================================

export const HERO_CONTENT = {
  WIDTH: 951,
  HEIGHT: 314,

  GAP: 30,
} as const;

// ============================================================
// Hero CTA
// ============================================================

export const HERO_BUTTON = {
  WIDTH: 194,
  HEIGHT: 62,

  GAP: 10,

  PADDING_X: 20,
  PADDING_Y: 10,

  BORDER_WIDTH: 2,

  SHADOW: "5px 5px 0px var(--cp-color-primary)",
} as const;

// ============================================================
// Hero Decorative Assets
// ============================================================

export const HERO_DECORATIONS: readonly HeroDecoration[] = [
  {
    asset: "ethereum",
    src: "/hero/ethereum.svg",
    alt: "",
    top: 94.8516,
    left: 114.2115,
    width: 71.2517,
    height: 120,
    zIndex: 1,
  },

  {
    asset: "doubleArrowTop",
    src: "/hero/arrow.svg",
    alt: "",
    top: 32.6641,
    left: 390.646,
    width: 24.4118,
    height: 29.8839,
    zIndex: 1,
  },

  {
    asset: "dollar",
    src: "/hero/dollar.svg",
    alt: "",
    top: 152.5004,
    left: 1016.6436,
    width: 26.6496,
    height: 47.9549,
    zIndex: 1,
  },

  {
    asset: "arcadeMachine",
    src: "/hero/arcade.svg",
    alt: "",
    top: 159.73,
    left: 1278.99,
    width: 111.9298,
    height: 111.9298,
    zIndex: 1,
  },

  {
    asset: "solana",
    src: "/hero/solana.svg",
    alt: "",
    top: 494,
    left: 221,
    width: 119.9867,
    height: 120,
    zIndex: 1,
  },

  {
    asset: "bitcoin",
    src: "/hero/bitcoin.svg",
    alt: "",
    top: 552,
    left: 1194,
    width: 100,
    height: 100,
    zIndex: 1,
  },

  {
    asset: "chain",
    src: "/hero/chain.svg",
    alt: "",
    top: 642,
    left: 47.3,
    width: 74.6199,
    height: 74.6199,
    zIndex: 1,
  },

  {
    asset: "doubleArrowBottom",
    src: "/hero/arrow.svg",
    alt: "",
    top: 709.6001,
    left: 1126.2668,
    width: 24.4118,
    height: 29.8839,
    rotation: 0,
    zIndex: 1,
  },
] as const;

// ============================================================
// Layer Order
// ============================================================

export const HERO_Z_INDEX = {
  GRID: 0,
  DECORATIONS: 1,
  CONTENT: 2,
} as const;

// ============================================================
// Animation
// ============================================================

export const HERO_ANIMATION: HeroAnimationConfig = {
  duration: 0,
  delay: 0,
  easing: "linear",
};