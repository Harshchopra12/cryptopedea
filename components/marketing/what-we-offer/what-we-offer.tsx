
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
        py-0
      "
    >
      {/* WHAT WE OFFER FRAME */}
      <div
        className="
          relative
          z-[10]
          w-[1200px]
          h-[820px]
          flex
          border-[3px]
          border-[#000926]
          bg-[#FBFBFB]
        "
        style={{
          borderRight: "3px solid #000926",
          boxSizing: "border-box",
        }}
      >
        {/* LEFT PANEL */}
        <div
          className="
            w-[810px]
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
            "
          >
            <FeaturedCard />
          </div>
        </div>

        {/* RIGHT PANEL */}
        <SidePanel />
      </div>
    </section>
  );
}
