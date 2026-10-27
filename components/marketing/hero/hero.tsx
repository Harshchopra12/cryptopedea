import Section from "@/components/ui/section";


import { HERO_DIMENSIONS } from "./hero.constants";
import HeroContent from "./hero-content";
import HeroDecorations from "./hero-decorations";

export default function Hero() {
  return (
    <Section
      className={`
        relative
        ${HERO_DIMENSIONS.MIN_HEIGHT_CLASSNAME}
        overflow-hidden
      `}
    >


      <div className="relative z-10 min-h-[816px]">
        <HeroDecorations />
        <HeroContent />
      </div>
    </Section>
  );
}