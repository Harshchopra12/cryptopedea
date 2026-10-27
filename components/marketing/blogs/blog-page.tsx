import BlogHeader from "./blog-header";
import BlogMeta from "./blog-meta";
import BlogArticle from "./blog-article";
import MoreBlogs from "./more-blogs";

export default function BlogPage() {
  return (
    <>
      <BlogHeader />
      <BlogMeta />
      <BlogArticle />
      <MoreBlogs />
    </>
  );
}