interface MoreBlog {
  image: string;
  title: string;
  background: string;
}

const moreBlogs: MoreBlog[] = [
  {
    image: "/blog/more-blog-one.svg",
    title: "Design systems and AI: Why MCP servers are the unlock",
    background: "#FF5C5D",
  },
  {
    image: "/blog/more-blog-two.svg",
    title: "4 ways we're using our MCP server at Figma",
    background: "#44A4FB",
  },
  {
    image: "/blog/more-blog-three.svg",
    title: "The TL;DR on MCP: Why context matters and how to put it to work",
    background: "#9440E0",
  },
];

export default function MoreBlogs() {
  return (
    <section className="cp-more-blogs">
      {/* Header */}
      <div className="cp-more-blogs-header">
        <h2>More Blogs</h2>
      </div>

      {/* Cards */}
      <div className="cp-more-blogs-grid">
        {moreBlogs.map((blog) => (
          <article
            key={blog.title}
            className="cp-more-blog-card"
            style={{
              backgroundColor: blog.background,
            }}
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="cp-more-blog-card-image"
            />

            <div className="cp-more-blog-card-title">
              {blog.title}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}