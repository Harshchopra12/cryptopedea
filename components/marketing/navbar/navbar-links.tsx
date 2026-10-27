"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLayoutEffect, useRef, useState } from "react";

import { NAVBAR_LINK_GAP, NAVBAR_LINKS } from "./navbar.constants";
import NavbarIndicator from "./navbar-indicator";

export default function NavbarLinks() {
  const pathname = usePathname();
  const linksContainerRef = useRef<HTMLUListElement | null>(null);
  const linksRef = useRef<Record<string, HTMLAnchorElement | null>>({});
  const activeHref =
    NAVBAR_LINKS.find((link) =>
      link.href === "/" ? pathname === "/" : pathname.startsWith(link.href),
    )?.href ?? "/";
  const [indicatorLeft, setIndicatorLeft] = useState(0);

  useLayoutEffect(() => {
    const activeLink = linksRef.current[activeHref];
    const linksContainer = linksContainerRef.current;
    if (activeLink && linksContainer) {
      setIndicatorLeft(
        activeLink.getBoundingClientRect().left -
          linksContainer.getBoundingClientRect().left,
      );
    }
  }, [activeHref]);

  return (
    <ul
      ref={linksContainerRef}
      className="relative flex h-full items-center"
      style={{
        gap: `${NAVBAR_LINK_GAP}px`,
      }}
    >
      <li
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 z-10 h-[10px] w-[10px] transition-transform duration-[280ms] ease-in-out motion-reduce:transition-none"
        style={{
          transform: `translate(${indicatorLeft - 20}px, -50%)`,
        }}
      >
        <NavbarIndicator />
      </li>

      {NAVBAR_LINKS.map((link) => (
        <li
          key={link.href}
          className="flex items-center"
        >
          <Link
            href={link.href}
            ref={(element) => {
              linksRef.current[link.href] = element;
            }}
            className="flex h-[36px] items-center text-[24px] font-normal leading-[36px] tracking-[-0.03em] text-[var(--cp-color-primary)] transition-colors duration-[var(--cp-transition-fast)] hover:text-[var(--cp-color-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cp-focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--cp-background)]"
            style={{
              width: `${link.width}px`,
            }}
          >
            <span>{link.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}