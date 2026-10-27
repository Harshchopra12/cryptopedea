export default function MobileBlogBottomNav() {
    return (
        <nav
            className="mobile-blog-bottom-nav"
            aria-label="Mobile navigation"
        >
            <button
                type="button"
                aria-label="Home"
                className="mobile-blog-bottom-nav__item"
            >
                <img
                    src="/blog/home-icon.svg"
                    alt=""
                    width={36}
                    height={36}
                />
            </button>

            <button
                type="button"
                aria-label="Blogs"
                className="mobile-blog-bottom-nav__item"
            >
                <img
                    src="/blog/blog-icon.svg"
                    alt=""
                    width={36}
                    height={36}
                />
            </button>

            <button
                type="button"
                aria-label="Contact"
                className="mobile-blog-bottom-nav__item"
            >
                <img
                    src="/blog/contact-icon.svg"
                    alt=""
                    width={36}
                    height={36}
                />
            </button>
        </nav>
    );
}