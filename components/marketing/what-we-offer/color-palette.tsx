import { OFFER_PALETTE_COLORS } from "./offer.constants";

export default function ColorPalette() {
  return (
    <div className="relative h-[150px] w-[150px]">
      {/* Blue */}
      <div
        className={`absolute left-1/2 top-0 h-[46px] w-[46px] -translate-x-1/2 rounded-full border-2 border-[#000926] ${OFFER_PALETTE_COLORS[0].className}`}
      />

      {/* Green */}
      <div
        className={`absolute left-0 top-1/2 h-[46px] w-[46px] -translate-y-1/2 rounded-full border-2 border-[#000926] ${OFFER_PALETTE_COLORS[1].className}`}
      />

      {/* Red */}
      <div
        className={`absolute right-0 top-1/2 h-[46px] w-[46px] -translate-y-1/2 rounded-full border-2 border-[#000926] ${OFFER_PALETTE_COLORS[2].className}`}
      />

      {/* Yellow */}
      <div
        className={`absolute bottom-0 left-1/2 h-[46px] w-[46px] -translate-x-1/2 rounded-full border-2 border-[#000926] ${OFFER_PALETTE_COLORS[3].className}`}
      />
    </div>
  );
}