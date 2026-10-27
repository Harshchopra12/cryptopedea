import Image from "next/image";
import { FIGMA_ASSETS } from "./figma-assets";

interface ArrowButtonProps {
  direction: "up" | "down";
}

export default function ArrowButton({
  direction,
}: ArrowButtonProps) {
  const src =
    FIGMA_ASSETS.arrowUp;

  return (
    <button
      type="button"
      aria-label={direction === "up" ? "Previous" : "Next"}
      className={`flex h-[30px] w-[60px] items-center justify-center ${
        direction === "down" ? "rotate-180" : ""
      }`}
    >
      <Image
        src={src}
        alt=""
        width={60}
        height={30}
        draggable={false}
      />
    </button>
  );
}