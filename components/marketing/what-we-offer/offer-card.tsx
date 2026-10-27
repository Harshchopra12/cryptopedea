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
        relative
        items-end
        p-[15px]
        border-[2px]
        border-[#000926]
        bg-[#FBFBFB]
        shadow-[5px_5px_0_#000926]
      "
    >
      <img
        src={IMAGE_MAP[id]}
        alt={title}
      className="absolute left-1/2 top-[10px] h-[129px] w-[129px] -translate-x-1/2 object-contain"
      />
      <span className="text-[32px] font-bold leading-[1.2] tracking-[-0.96px] text-black">
      {title}
      </span>
    </article>
  );
}