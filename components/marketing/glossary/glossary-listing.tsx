import Image from "next/image";
import Link from "next/link";

import MobileBlogBottomNav from "@/components/marketing/mobile/blogs/mobile-blog-bottom-nav";
import { GLOSSARY_TERMS } from "@/content/glossary/terms";
import "@/styles/mobile-blogs.css";
import styles from "./glossary-listing.module.css";

export default function GlossaryListing() {
  return (
    <main className="mobile-blogs">
      <div className="mobile-blogs__canvas">
        <h1 className="mobile-blogs__title">Glossary</h1>

        <section className="mobile-blog-list" aria-label="Glossary terms">
          {GLOSSARY_TERMS.map((term) => (
            <article className="mobile-blog-item" key={term.slug}>
              <Link
                href={`/glossary/${term.slug}`}
                className="mobile-blog-item__link"
              >
                <div className="mobile-blog-item__content">
                  <div className="mobile-blog-item__text">
                    <p className="mobile-blog-item__title">{term.title}</p>
                    <p className={styles.definition}>{term.definition}</p>
                  </div>

                  <div className="mobile-blog-item__image">
                    <Image
                      src={term.image}
                      alt=""
                      width={150}
                      height={100}
                      sizes="150px"
                    />
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </section>

        <div className="mobile-blogs__bottom-nav">
          <MobileBlogBottomNav />
        </div>
      </div>
    </main>
  );
}
