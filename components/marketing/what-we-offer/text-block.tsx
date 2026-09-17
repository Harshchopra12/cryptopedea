import { OFFER_COPY } from "./offer.constants";

export default function TextBlock() {
  return (
    <div
      className="
        flex
        w-[385px]
        flex-col
      "
    >
      <h3
        className="
          font-[var(--cp-font-display)]
          text-[28px]
          font-bold
          leading-[30px]
          tracking-[-0.03em]
          text-[#FBFBFB]
        "
      >
        {OFFER_COPY.featuredTitle}
      </h3>

      <p
        className="
          mt-[18px]
          w-[345px]
          font-['Space_Grotesk']
          text-[20px]
          leading-[25px]
          tracking-[-0.03em]
          text-[#FBFBFB]
        "
      >
        {OFFER_COPY.featuredDescription}
      </p>
    </div>
  );
}