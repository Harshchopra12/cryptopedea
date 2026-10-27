import BlogPostNavbar from "@/components/marketing/blogs/blog-post-navbar";
import MobileNavbar from "@/components/marketing/mobile/navbar/mobile-navbar";

import styles from "../blogs/blog-post-layout.module.css";

export default function GlossaryLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className={styles.shell}><div className="hidden md:block"><BlogPostNavbar /></div><div className="block md:hidden"><MobileNavbar /></div>{children}</div>;
}
