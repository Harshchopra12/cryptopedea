/**
 * Pixel-perfect Hero CTA.
 * Matches the Figma "Join Now $" button.
 */
export default function HeroButton() {
  return (
    <button
      type="button"
      className="
        mt-[30px]
        inline-flex
        h-[62px]
        w-[194px]
        items-center
        justify-center
        border-2
        border-[var(--cp-color-primary)]
        bg-[#ABEF06]
        px-5
        py-2.5
        text-[28px]
        font-normal
        leading-none
        tracking-[-0.03em]
        text-[var(--cp-color-primary)]
        shadow-[5px_5px_0px_#000000]
        transition-transform
        duration-150
        hover:-translate-y-[2px]
        active:translate-x-[2px]
        active:translate-y-[2px]
        active:shadow-none
      "
      style={{
        fontFamily: "Pixeloid Sans",
      }}
    >
      Join Now $
    </button>
  );
}