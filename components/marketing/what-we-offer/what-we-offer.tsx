import OfferHeader from "./offer-header";
import FeaturedCard from "./featured-card";
import SidePanel from "./side-panel";

export default function OfferSection() {
  return (
    <section
      aria-labelledby="what-we-offer-title"
      className="
        w-full
        flex
        justify-center
        py-[100px]
      "
    >
      {/* =========================================================
          WHAT WE OFFER FRAME
          This sits above the global grid (z-index: 1).
          The grid remains visible everywhere outside this frame.
          ========================================================= */}
      <div
        className="
          relative
          z-[10]
          w-[1200px]
          h-[850px]
          flex
          border-[3px]
          border-[#000926]
          bg-[#FBFBFB]
        "
      >
        {/* LEFT PANEL */}
        <div
          className="
            w-[807px]
            h-full
            shrink-0
          "
          style={{
            padding: "50px 20px",
          }}
        >
          <div
            className="
              flex
              flex-col
              w-[770px]
              h-[750px]
              gap-[40px]
            "
          >
            <OfferHeader />

            <FeaturedCard />
          </div>
        </div>

        {/* RIGHT PANEL */}
        <SidePanel />
      </div>
    </section>
  );
}