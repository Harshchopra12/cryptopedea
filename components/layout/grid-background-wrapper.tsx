"use client";

import { usePathname } from "next/navigation";

export default function GridBackgroundWrapper() {
  const pathname = usePathname();

  const isBlogPage =
    pathname === "/blogs" || pathname.startsWith("/blogs/");
  const isGlossaryPage =
    pathname === "/glossary" || pathname.startsWith("/glossary/");

  if (isBlogPage || isGlossaryPage) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className="cp-grid-background"
    />
  );
}
