import Link from "next/link";

import { NAVBAR_LINK_GAP, NAVBAR_LINKS } from "./navbar.constants";
import NavbarIndicator from "./navbar-indicator";

export default function NavbarLinks() {
  return (
    <ul
      className="flex h-full items-center"
      style={{
        gap: `${NAVBAR_LINK_GAP}px`,
      }}
    >
      {NAVBAR_LINKS.map((link) => (
        <li
          key={link.href}
          className="flex items-center"
        >
          <Link
            href={link.href}
            className="flex h-[36px] items-center text-[24px] font-normal leading-[36px] tracking-[-0.03em] text-[var(--cp-color-primary)] transition-colors duration-[var(--cp-transition-fast)] hover:text-[var(--cp-color-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cp-focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--cp-background)]"
            style={{
              width: `${link.width}px`,
            }}
          >
            {link.indicator ? (
              <>
                <span className="mr-[10px] flex items-center">
                  <NavbarIndicator />
                </span>

                <span>{link.label}</span>
              </>
            ) : (
              <span>{link.label}</span>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}