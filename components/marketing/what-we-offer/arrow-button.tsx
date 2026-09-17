import Image from "next/image";
import { FIGMA_ASSETS } from "./figma-assets";

interface ArrowButtonProps {
  direction: "up" | "down";
}

export default function ArrowButton({
  direction,
}: ArrowButtonProps) {
  const src =
    direction === "up"
      ? FIGMA_ASSETS.arrowUp
      : FIGMA_ASSETS.arrowDown;

  return (
    <button
      type="button"
      aria-label={direction === "up" ? "Previous" : "Next"}
      className="flex h-[70px] w-[70px] items-center justify-center"
    >
      <Image
        src={src}
        alt=""
        width={70}
        height={70}
        draggable={false}
      />
    </button>
  );
}