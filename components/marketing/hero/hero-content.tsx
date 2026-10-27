import HeroButton from "./hero-button";
import HeroDescription from "./hero-description";
import HeroTitle from "./hero-title";

/**
 * Pixel-perfect Hero content container.
 * Mirrors Figma Frame 27083.
 */
export default function HeroContent() {
  return (
    <div
      className="
        absolute
        left-1/2
        top-1/2
        -translate-y-1/2
        flex
        w-[951px]
        -translate-x-1/2
        flex-col
        items-center
        gap-[30px]
        z-20
      "
    >
      <HeroTitle />
      <HeroDescription />
      <HeroButton />
    </div>
  );
}