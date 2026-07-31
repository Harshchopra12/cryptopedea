import Link from "next/link";

import {
  NAVBAR_ACTION_WIDTH,
  NAVBAR_LOGIN_WIDTH,
} from "./navbar.constants";
import NavbarIndicator from "./navbar-indicator";

export default function NavbarLogin() {
  return (
    <Link
      href="/login"
      aria-label="Login"
      className="flex h-[56px] w-[144px] shrink-0 items-center justify-center bg-[var(--cp-color-primary)]"
    >
      <div
        className="flex items-center justify-center gap-[10px]"
        style={{
          width: `${NAVBAR_ACTION_WIDTH}px`,
        }}
      >
        <NavbarIndicator />

        <span
          className="whitespace-nowrap uppercase"
          style={{
            color: "#FBFBFB",
            fontSize: "24px",
            fontWeight: 400,
            lineHeight: "36px",
            letterSpacing: "-0.03em",
            display: "inline-block",
          }}
        >
          LOGIN
        </span>
      </div>
    </Link>
  );
}