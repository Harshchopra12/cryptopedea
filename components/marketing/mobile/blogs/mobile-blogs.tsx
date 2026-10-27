import BlogList from "./blog-list";
import MobileBlogBottomNav from "./mobile-blog-bottom-nav";
import "@/styles/mobile-blogs.css";


export default function MobileBlogs() {
    return (
        <main className="mobile-blogs">
            <div className="mobile-blogs__canvas">
                <h1 className="mobile-blogs__title">
                    Blogs
                </h1>

                <BlogList />

                <div className="mobile-blogs__bottom-nav">
                    <MobileBlogBottomNav />
                </div>
            </div>
        </main>
    );
}
