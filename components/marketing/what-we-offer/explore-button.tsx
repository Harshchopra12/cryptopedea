import { OFFER_COPY } from "./offer.constants";

export default function ExploreButton() {
  return (
    <button
      type="button"
      className="
        flex
        h-[60px]
        w-[340px]
        items-center
        justify-center
        border-[2px]
        border-[#000926]
        bg-[#44A4FB]
        px-[20px]
        py-[15px]
        shadow-[5px_5px_0_#000000]
        transition-transform
        duration-150
        hover:translate-x-[1px]
        hover:translate-y-[1px]
        hover:shadow-[4px_4px_0_#000000]
        active:translate-x-[5px]
        active:translate-y-[5px]
        active:shadow-none
      "
    >
      <span
        className="
          text-[24px]
          leading-[30px]
          text-[#000926]
        "
      >
        Explore all offerings
      </span>
    </button>
  );
}