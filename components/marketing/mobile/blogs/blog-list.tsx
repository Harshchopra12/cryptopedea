import BlogItem from "./blog-item";
import { BLOG_ARTICLES } from "@/content/blogs/articles";

export default function BlogList() {
    return (
        <section className="mobile-blog-list">
            {BLOG_ARTICLES.map((blog) => (
                <BlogItem
                    key={blog.slug}
                    title={blog.title}
                    image={blog.hero.src}
                    imageAlt={blog.hero.alt}
                    slug={blog.slug}
                />
            ))}
        </section>
    );
}
