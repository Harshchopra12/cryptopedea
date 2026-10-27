import { OFFER_COPY } from "./offer.constants";

export default function OfferHeader() {
  return (
    <header
      className="
    flex
    items-center
    justify-between
    w-[770px]
    h-[50px]
    shrink-0
  "
    >
      <h2
        id="what-we-offer-title"
        className="
w-[315px]
h-[40px]
font-[var(--cp-font-display)]
text-[36px]
font-bold
leading-[40px]
tracking-[-0.03em]
text-[#000926]
"
      >
        {OFFER_COPY.title}
      </h2>

      <button
        type="button"
        className="
flex
w-[121px]
h-[50px]
items-center
justify-center

border-[2px]
border-[#000926]

bg-[#FBFBFB]

shadow-[2px_5px_0_#000926]
"
        style={{
          padding: "10px 20px",
          fontFamily: "Pixeloid Sans",
        }}
      >
        {OFFER_COPY.viewAllLabel}
      </button>
    </header>
  );
}