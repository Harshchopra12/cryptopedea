import Image from "next/image";

import { HERO_DECORATIONS } from "./hero.constants";

export default function HeroDecorations() {
  return (
    <>
      {HERO_DECORATIONS.map((asset) => {
        if (
          asset.asset === "doubleArrowTop" ||
          asset.asset === "doubleArrowBottom"
        ) {
          return (
            <div
              key={asset.asset}
              className="absolute flex gap-[2px] pointer-events-none select-none"
              style={{
                top: asset.top,
                left: asset.left,
                zIndex: asset.zIndex,
                transform:
                  asset.asset === "doubleArrowBottom"
                    ? "rotate(180deg)"
                    : undefined,
                transformOrigin: "center",
              }}
            >
              <Image
                src={asset.src}
                alt=""
                aria-hidden
                width={asset.width}
                height={asset.height}
                priority
              />

              <Image
                src={asset.src}
                alt=""
                aria-hidden
                width={asset.width}
                height={asset.height}
                priority
              />
            </div>
          );
        }

        return (
          <div
            key={asset.asset}
            className="absolute pointer-events-none select-none"
            style={{
              top: asset.top,
              left: asset.left,
              zIndex: asset.zIndex,
            }}
          >
            <Image
              src={asset.src}
              alt=""
              aria-hidden
              width={asset.width}
              height={asset.height}
              priority
            />
          </div>
        );
      })}
    </>
  );
}