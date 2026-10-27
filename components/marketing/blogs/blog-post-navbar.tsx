import Image from "next/image";
import Link from "next/link";

import { NAVBAR_LINKS } from "@/components/marketing/navbar/navbar.constants";
import styles from "./blog-post-navbar.module.css";

export default function BlogPostNavbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Primary Navigation">
        <Link className={styles.logo} href="/" aria-label="CryptoPedea Home">
          <Image src="/blog/figma-logo.svg" alt="CryptoPedea" width={53} height={36} priority />
        </Link>

        <div className={styles.links}>
          <ul>
            {NAVBAR_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>
                  {link.href === "/contact" && (
                    <Image src="/blog/figma-chevron.svg" alt="" width={10} height={9} />
                  )}
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <Link className={styles.login} href="/login" aria-label="Login">
          <Image src="/blog/figma-chevron.svg" alt="" width={10} height={9} />
          <span>LOGIN</span>
        </Link>
      </nav>
    </header>
  );
}
