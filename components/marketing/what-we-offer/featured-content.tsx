import ColorPalette from "./color-palette";
import DPad from "./d-pad";
import FeaturedCardFooter from "./featured-card-footer";
import TextBlock from "./text-block";

interface FeaturedContentProps {
  selectedColor: string;
  onSelectColor: (color: string) => void;
}

export default function FeaturedContent({
  selectedColor,
  onSelectColor,
}: FeaturedContentProps) {
  return (
    <FeaturedCardFooter>
      <div className="w-[150px] shrink-0">
        <DPad />
      </div>

      <div className="w-[385px] shrink-0">
        <TextBlock />
      </div>

      <div className="flex w-[150px] shrink-0 justify-end">
        <ColorPalette
          selectedColor={selectedColor}
          onSelectColor={onSelectColor}
        />
      </div>
    </FeaturedCardFooter>
  );
}
