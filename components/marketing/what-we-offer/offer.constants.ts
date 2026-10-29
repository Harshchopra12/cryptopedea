import type { OfferCardData, OfferPaletteColor } from "./offer.types";

export const OFFER_COPY = {
  title: "What we Offer",
  viewAllLabel: "View all",
  featuredTitle: "THE CRYPTOPEDEA ACADEMY",
  featuredDescription:
    "Learn crypto by actually doing it! not by scrolling through endless boring lectures.",
  exploreLabel: "Explore more",
} as const;

export const OFFER_CARDS: readonly OfferCardData[] = [
  { id: "leaderboard", title: "Badges" },
  { id: "achievements", title: "XP" },
  { id: "rewards", title: "Quizzes" },
] as const;

export const OFFER_DEFAULT_PANEL_COLOR = "#FF5C5D";

export const OFFER_PALETTE_COLORS: readonly OfferPaletteColor[] = [
  {
    name: "Blue",
    color: "#44A4FB",
    className: "bg-[#44A4FB]",
    positionClassName: "left-1/2 top-0 -translate-x-1/2",
  },
  {
    name: "Green",
    color: "#253900",
    className: "bg-[#253900]",
    positionClassName: "left-0 top-1/2 -translate-y-1/2",
  },
  {
    name: "Red",
    color: "#FF5C5D",
    className: "bg-[#FF5C5D]",
    positionClassName: "right-0 top-1/2 -translate-y-1/2",
  },
  {
    name: "Yellow",
    color: "#F1C43F",
    className: "bg-[#F1C43F]",
    positionClassName: "bottom-0 left-1/2 -translate-x-1/2",
  },
] as const;
