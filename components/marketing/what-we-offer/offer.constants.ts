import type { OfferCardData, OfferPaletteColor } from "./offer.types";

export const OFFER_COPY = {
  title: "What we Offer",
  viewAllLabel: "View all",
  featuredTitle: "Interactive Lesions",
  featuredDescription:
    "Learn crypto through engaging, hands-on lessons built to make every concept click.",
  exploreLabel: "Explore all offerings",
} as const;

export const OFFER_CARDS: readonly OfferCardData[] = [
  { id: "leaderboard", title: "Leaderboard" },
  { id: "achievements", title: "Achievements" },
  { id: "rewards", title: "Rewards" },
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