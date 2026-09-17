import { FIGMA_ASSETS } from "./figma-assets";

export default function FeaturedImage() {
  return (
    <div
      className="
        h-[390px]
        w-full
        shrink-0
      "
      style={{
        border: "2px solid #000926",
        padding: "20px",
      }}
    >
      <div
        className="
          relative
          h-[350px]
          w-full
          overflow-hidden
          bg-[#F9EEC1]
        "
        style={{
          border: "2px solid #000926",
          padding: "10px",
        }}
      >
        <img
          src={FIGMA_ASSETS.mainIllustration}
          alt=""
          className="
            absolute
            inset-0
            h-full
            w-full
            object-fill
          "
        />
      </div>
    </div>
  );
}