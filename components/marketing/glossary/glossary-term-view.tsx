import Image from "next/image";
import Link from "next/link";

import type { GlossaryTerm } from "@/content/glossary/terms";
import styles from "./glossary-term-view.module.css";

const related = [
  ["Design systems and AI: Why MCP servers are the unlock", "/blog/related-concept-one.png", "#ed7c30"],
  ["4 ways we’re using our MCP server at Figma", "/blog/related-concept-two.png", "#feca04"],
  ["The TL;DR on MCP: Why context matters and how to put it to work", "/blog/related-concept-three.png", "#00a64f"],
] as const;

export default function GlossaryTermView({ term }: { term: GlossaryTerm }) {
  return <main className={styles.page}><article className={styles.article}>
    <header className={styles.titleBanner}><h1>{term.title}</h1></header>
    <div className={styles.content}>
      <figure className={styles.hero}><Image src={term.image} alt="" fill priority sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1240px) calc(100vw - 120px), 1100px" /></figure>
      <p className={styles.definition}>{term.definition}</p>
      {term.formula && <section className={styles.section}><h2>Formula :</h2><p>{term.formula}</p></section>}
      <section className={styles.section}><h2>Example :</h2><p>{term.example}</p></section>
      <section className={styles.section}><h2>Why it matters:</h2><p>{term.whyItMatters}</p></section>
      <section className={styles.related} aria-labelledby="related-terms"><h2 id="related-terms">Related terms</h2><div className={styles.relatedGrid}>{related.map(([title, image, color]) => <article className={styles.relatedCard} style={{ backgroundColor: color }} key={title}><div className={styles.relatedImage}><Image src={image} alt="" fill sizes="(max-width: 767px) 100vw, 350px" /></div><h3>{title}</h3></article>)}</div></section>
      <section className={styles.learnNext}><h2>Learn next:</h2><p>What Is Bitcoin?</p><Link className={styles.lessonLink} href="/lesson/lesson-foundation-1-1"><span>Explore the lesson</span><Image src="/blog/figma-cta-arrow.svg" alt="" width={33} height={34} /></Link></section>
    </div>
  </article></main>;
}
