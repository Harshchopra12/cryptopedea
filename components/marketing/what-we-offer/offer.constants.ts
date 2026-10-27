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

export const OFFER_PALETTE_COLORS: readonly OfferPaletteColor[] = [
  {
    name: "Blue",
    className: "bg-[#44A4FB]",
  },
  {
    name: "Green",
    className: "bg-[#253900]",
  },
  {
    name: "Red",
    className: "bg-[#B3033E]",
  },
  {
    name: "Yellow",
    className: "bg-[#F1C43F]",
  },
] as const;