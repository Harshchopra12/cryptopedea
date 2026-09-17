import FeaturedContent from "./featured-content";
import FeaturedImage from "./featured-image";

export default function FeaturedCard() {
  return (
    <article
      className="
    flex
    flex-col
    w-[770px]
    h-[660px]
    gap-[10px]
    border-[2px]
    border-[#000926]
    bg-[#FF5C5D]
    shadow-[5px_5px_0_#000926]
  "
    >
      <FeaturedImage />

      <FeaturedContent />
    </article>
  );
}