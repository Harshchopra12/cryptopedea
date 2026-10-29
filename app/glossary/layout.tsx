import MobileNavbar from "@/components/marketing/mobile/navbar/mobile-navbar";
import GlossaryDesktopNavbar from "@/components/marketing/glossary/glossary-desktop-navbar";

import styles from "../blogs/blog-post-layout.module.css";

export default function GlossaryLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={styles.shell}>
      <div className="hidden md:block">
        <GlossaryDesktopNavbar />
      </div>
      <div className="block md:hidden">
        <MobileNavbar />
      </div>
      {children}
    </div>
  );
}
