import Image from "next/image";
import Link from "next/link";

import { getRelatedBlogArticles, type BlogArticleData, type BlogParagraph } from "@/content/blogs/articles";
import styles from "./blog-article.module.css";

function Paragraph({ content }: { content: BlogParagraph }) {
  return (
    <p>
      {typeof content === "string"
        ? content
        : content.map((part, index) =>
            part.emphasis ? (
              <strong key={`${part.text}-${index}`}>{part.text}</strong>
            ) : (
              <span key={`${part.text}-${index}`}>{part.text}</span>
            ),
          )}
    </p>
  );
}

export default function BlogArticleView({
  article,
}: {
  article: BlogArticleData;
}) {
  const relatedArticles = getRelatedBlogArticles(article);

  return (
    <main className={styles.page}>
      <article className={styles.article}>
        <header className={styles.titleBanner}>
          <h1>{article.title}</h1>
        </header>

        <div className={styles.content}>
          <figure
            className={`${styles.hero} ${styles.illustration} ${article.hero.className ? styles[article.hero.className as keyof typeof styles] : ""}`}
          >
            <Image
              src={article.hero.src}
              alt={article.hero.alt}
              fill
              priority
              sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1240px) calc(100vw - 120px), 1100px"
            />
          </figure>

          <div className={styles.summary}>
            <Paragraph content={article.summary} />
          </div>

          {article.sections.map((section) => (
            <section className={styles.section} key={section.heading}>
              <h2>{section.heading}</h2>
              <div className={styles.paragraphs}>
                {section.paragraphs.map((paragraph, index) => (
                  <Paragraph content={paragraph} key={`${section.heading}-${index}`} />
                ))}
              </div>
              {section.illustration && (
                <figure
                  className={`${styles.illustration} ${section.illustration.className ? styles[section.illustration.className as keyof typeof styles] : ""}`}
                >
                  <Image
                    src={section.illustration.src}
                    alt={section.illustration.alt}
                    fill
                    sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1240px) calc(100vw - 120px), 1100px"
                  />
                </figure>
              )}
            </section>
          ))}

          <section className={styles.related} aria-labelledby="related-concepts">
            <h2 id="related-concepts">Related Concepts</h2>
            <div className={styles.relatedGrid}>
              {relatedArticles.map((relatedArticle, index) => (
                <Link
                  className={styles.relatedCard}
                  href={`/blogs/${relatedArticle.slug}`}
                  key={relatedArticle.slug}
                  style={{ backgroundColor: ["#ed7c30", "#feca04", "#00a64f"][index] }}
                >
                  <div className={styles.relatedImage}>
                    <Image src={relatedArticle.hero.src} alt={relatedArticle.hero.alt} fill sizes="(max-width: 767px) 100vw, 350px" />
                  </div>
                  <h3>{relatedArticle.title}</h3>
                </Link>
              ))}
            </div>
          </section>

          <section className={styles.goDeeper}>
            <h2>Go Deeper</h2>
            <p>{article.goDeeper.description}</p>
            <Link className={styles.lessonLink} href={article.goDeeper.href}>
              <span>{article.goDeeper.label}</span>
              <Image src="/blog/figma-cta-arrow.svg" alt="" width={33} height={34} />
            </Link>
          </section>
        </div>
      </article>
    </main>
  );
}
