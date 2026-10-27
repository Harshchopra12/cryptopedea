import Link from "next/link";

type BlogItemProps = {
    title: string;
    slug: string;
    image: string;
    imageAlt: string;
};

export default function BlogItem({
    title,
    image,
    imageAlt,
    slug,
}: BlogItemProps) {
    return (
        <article className="mobile-blog-item">
            <Link
                href={`/blogs/${slug}`}
                className="mobile-blog-item__link"
            >
                <div className="mobile-blog-item__content">
                    <div className="mobile-blog-item__text">
                        <p className="mobile-blog-item__title">
                            {title}
                        </p>
                    </div>

                    <div className="mobile-blog-item__image">
                        <img
                            src={image}
                            alt={imageAlt}
                        />
                    </div>
                </div>
            </Link>

        </article>
    );
}
