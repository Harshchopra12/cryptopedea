import BlogPostNavbar from "@/components/marketing/blogs/blog-post-navbar";
import MobileNavbar from "@/components/marketing/mobile/navbar/mobile-navbar";

import styles from "./blog-post-layout.module.css";

export default function BlogPostLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={styles.shell}>
      <div className="hidden md:block">
        <BlogPostNavbar />
      </div>
      <div className="block md:hidden">
        <MobileNavbar />
      </div>
      {children}
    </div>
  );
}
