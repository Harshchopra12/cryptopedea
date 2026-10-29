"use client";

import { useState } from "react";
import { OFFER_DEFAULT_PANEL_COLOR } from "./offer.constants";
import FeaturedContent from "./featured-content";
import FeaturedImage from "./featured-image";

export default function FeaturedCard() {
  const [backgroundColor, setBackgroundColor] = useState(
    OFFER_DEFAULT_PANEL_COLOR,
  );

  return (
    <article
      className="
    flex
    flex-col
    w-[770px]
    h-[720px]
    gap-[10px]
    border-[2px]
    border-[#000926]
    shadow-[5px_5px_0_#000926]
  "
      style={{ backgroundColor }}
    >
      <FeaturedImage />

      <FeaturedContent
        selectedColor={backgroundColor}
        onSelectColor={setBackgroundColor}
      />
    </article>
  );
}
