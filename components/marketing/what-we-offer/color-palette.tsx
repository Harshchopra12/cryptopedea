import { OFFER_PALETTE_COLORS } from "./offer.constants";

interface ColorPaletteProps {
  selectedColor: string;
  onSelectColor: (color: string) => void;
}

export default function ColorPalette({
  selectedColor,
  onSelectColor,
}: ColorPaletteProps) {
  return (
    <div className="relative h-[150px] w-[150px]">
      {OFFER_PALETTE_COLORS.map((swatch) => (
        <button
          key={swatch.name}
          type="button"
          aria-label={`Set academy panel background to ${swatch.name.toLowerCase()}`}
          aria-pressed={selectedColor === swatch.color}
          onClick={() => onSelectColor(swatch.color)}
          className={`absolute h-[46px] w-[46px] appearance-none rounded-full border-2 border-[#000926] p-0 ${swatch.className} ${swatch.positionClassName}`}
        />
      ))}
    </div>
  );
}
