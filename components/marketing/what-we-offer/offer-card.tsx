import type { OfferCardData } from "./offer.types";
import { FIGMA_ASSETS } from "./figma-assets";

const IMAGE_MAP: Record<string, string> = {
  leaderboard: FIGMA_ASSETS.rightCardOne,
  achievements: FIGMA_ASSETS.rightCardTwo,
  rewards: FIGMA_ASSETS.rightCardThree,
};

export default function OfferCard({
  id,
  title,
}: OfferCardData) {
  return (
    <article
      className="
        flex
        h-[170px]
        w-[340px]
        shrink-0
        items-center
        justify-center
        border-[2px]
        border-[#000926]
        bg-[#FBFBFB]
        shadow-[5px_5px_0_#000926]
      "
    >
      <img
        src={IMAGE_MAP[id]}
        alt={title}
        className="max-h-[110px] max-w-[210px] object-contain"
      />
    </article>
  );
}