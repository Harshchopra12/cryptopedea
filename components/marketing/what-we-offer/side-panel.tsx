import ArrowButton from "./arrow-button";
import ExploreButton from "./explore-button";
import OfferCard from "./offer-card";
import { OFFER_CARDS } from "./offer.constants";

export default function SidePanel() {
  return (
    <aside
      aria-label="More learning experiences"
      className="
        w-[387px]
        h-full
        shrink-0
        border-l-[3px]
        border-[#000926]
        bg-[#FBFBFB]
        box-border
      "
      style={{
        padding: "30px 25px",
      }}
    >
      <div className="flex h-full flex-col justify-between">
        {/* Cards + arrows */}
        <div
          className="
            flex
            h-[670px]
            w-[340px]
            flex-col
            items-center
            justify-between
          "
        >
          {/* Top Arrow */}
          <div className="flex h-[30px] w-full items-center justify-center">
            <ArrowButton direction="up" />
          </div>

          {/* Cards */}
          <div className="flex w-full flex-col gap-[20px]">
            {OFFER_CARDS.map((card) => (
              <OfferCard key={card.id} {...card} />
            ))}
          </div>

          {/* Bottom Arrow */}
          <div className="flex h-[30px] w-full items-center justify-center">
            <ArrowButton direction="down" />
          </div>
        </div>

        {/* Explore Button */}
        <div className="flex w-full justify-center">
          <ExploreButton />
        </div>
      </div>
    </aside>
  );
}