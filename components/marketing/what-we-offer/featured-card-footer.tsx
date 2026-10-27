import type { ReactNode } from "react";

interface FeaturedCardFooterProps {
  children: ReactNode;
}

export default function FeaturedCardFooter({
  children,
}: FeaturedCardFooterProps) {
  return (
    <footer
      className="
        flex
        h-[260px]
        w-full
        shrink-0
        items-start
      "
      style={{
        padding: "0 15px 0",
        gap: "25px",
      }}
    >
      {children}
    </footer>
  );
}