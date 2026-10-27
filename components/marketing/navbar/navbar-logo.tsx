import Image from "next/image";
import Link from "next/link";

import { NAVBAR_LOGO_WIDTH } from "./navbar.constants";

export default function NavbarLogo() {
  return (
    <Link
      href="/"
      aria-label="CryptoPedea Home"
      className="flex h-full shrink-0 items-center justify-center bg-[var(--cp-color-primary)]"
      style={{
        width: `${NAVBAR_LOGO_WIDTH}px`,
      }}
    >
      <Image
        src="/brand/cp-logo.svg"
        alt="CryptoPedea"
        width={118}
        height={36}
        priority
        className="h-auto w-auto object-contain"
      />
    </Link>
  );
}