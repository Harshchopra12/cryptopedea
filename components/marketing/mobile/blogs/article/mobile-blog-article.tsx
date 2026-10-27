import "@/styles/mobile-blog-article.css";

type MobileBlogArticleProps = {
    slug: string;
};

export default function MobileBlogArticle({
    slug,
}: MobileBlogArticleProps) {
    return (
        <main className="mobile-blog-article">
            <div className="mobile-blog-article__page">

                {/* =================================================
                    HEADER
                ================================================= */}

                <header className="mobile-blog-article__header">
                    <div className="mobile-blog-article__logo">
                        <img
                            src="/brand/cp-logo.svg"
                            alt="CryptoPedea"
                        />
                    </div>

                    <button
                        type="button"
                        className="mobile-blog-article__menu"
                        aria-label="Open menu"
                    >
                        <img
                            src="/blog/contact-icon.svg"
                            alt=""
                        />
                    </button>
                </header>


                {/* =================================================
                    MAIN ARTICLE
                ================================================= */}

                <section className="mobile-blog-article__main">
                    <div className="mobile-blog-article__primary">
                        {/* TITLE CARD */}

                        <section className="mobile-blog-article__title-card">
                            <h1 className="mobile-blog-article__title">
                                How Decagon uses AI for design system saturation
                            </h1>
                        </section>


                        {/* AUTHOR + TAGS */}

                        <section className="mobile-blog-article__meta">

                            <p className="mobile-blog-article__author">
                                Jenny Xie Editor, Figma
                            </p>

                            <div className="mobile-blog-article__tags">

                                <span className="mobile-blog-article__tag">
                                    Maker Stories
                                </span>

                                <span className="mobile-blog-article__tag">
                                    AI
                                </span>

                            </div>

                        </section>


                        {/* =================================================
                            ARTICLE CONTENT
                        ================================================= */}

                        <section className="mobile-blog-article__content">

                            {/* MAIN ARTICLE IMAGE */}

                            <div className="mobile-blog-article__image">
                                <img
                                    src="/blog/blog-thumbnail.png"
                                    alt=""
                                />
                            </div>


                            {/* FIRST ARTICLE TEXT */}

                            <p className="mobile-blog-article__body">
                                At an AI-native company like Decagon, the
                                design-to-code loop moves fast, but it can
                                break down just as quickly. Design systems
                                help create consistency across products,
                                while AI introduces new opportunities to
                                accelerate how those systems are used and
                                maintained.
                            </p>


                            {/* SECOND ARTICLE IMAGE */}

                            <div className="mobile-blog-article__image">
                                <img
                                    src="/blog/blog-thumbnail.png"
                                    alt=""
                                />
                            </div>


                            {/* SECOND ARTICLE TEXT */}

                            <p className="mobile-blog-article__body">
                                When design and development share the same
                                context, teams can move faster and reduce
                                unnecessary back-and-forth. This makes it
                                easier to maintain consistency while building
                                new experiences.
                            </p>

                        </section>
                    </div>


                    {/* =================================================
                        MORE BLOGS
                    ================================================= */}

                    <section className="mobile-blog-article__more-blogs">

                        <h2 className="mobile-blog-article__more-title">
                            More Blogs
                        </h2>


                        <div className="mobile-blog-article__more-cards">

                            {/* ================= CARD 1 ================= */}

                            <article className="mobile-blog-article__more-card mobile-blog-article__more-card--orange">

                                <div className="mobile-blog-article__more-image">
                                    <img
                                        src="/blog/more-blog-one.svg"
                                        alt=""
                                    />
                                </div>

                                <h3>
                                    Design systems and AI: Why MCP
                                    servers are the unlock
                                </h3>

                            </article>


                            {/* ================= CARD 2 ================= */}

                            <article className="mobile-blog-article__more-card mobile-blog-article__more-card--yellow">

                                <div className="mobile-blog-article__more-image">
                                    <img
                                        src="/blog/more-blog-two.svg"
                                        alt=""
                                    />
                                </div>

                                <h3>
                                    4 ways we’re using our MCP server
                                    at Figma
                                </h3>

                            </article>


                            {/* ================= CARD 3 ================= */}

                            <article className="mobile-blog-article__more-card mobile-blog-article__more-card--green">

                                <div className="mobile-blog-article__more-image">
                                    <img
                                        src="/blog/more-blog-three.svg"
                                        alt=""
                                    />
                                </div>

                                <h3>
                                    The TL;DR on MCP: Why context
                                    matters and how to put it to work
                                </h3>

                            </article>

                        </div>

                    </section>

                </section>

            </div>
        </main>
    );
}