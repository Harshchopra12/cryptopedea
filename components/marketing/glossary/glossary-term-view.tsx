import Image from "next/image";
import Link from "next/link";

import { GLOSSARY_TERMS, type GlossaryTerm } from "@/content/glossary/terms";
import styles from "./glossary-term-view.module.css";

const RELATED_TERM_NAMES: Record<string, readonly string[]> = {
  bitcoin: ["Blockchain", "Mining", "Node", "Private Key"],
  blockchain: ["Bitcoin", "Node", "Mining", "Validator"],
  "crypto-wallet": ["Private Key", "Public Key", "Seed Phrase", "Custody"],
  "private-key": ["Public Key", "Seed Phrase", "Wallet", "Self-Custody"],
  "public-key": ["Private Key", "Wallet", "Address", "Digital Signature"],
  "seed-phrase": ["Private Key", "Wallet", "Self-Custody", "Cold Wallet"],
  node: ["Blockchain", "Bitcoin", "Mining", "Validator"],
  mining: ["Bitcoin", "Blockchain", "Node", "Proof of Work"],
  validator: ["Staking", "Proof of Stake", "Node", "Ethereum"],
  token: ["Coin", "Smart Contract", "Tokenomics", "Ethereum"],
  coin: ["Token", "Bitcoin", "Ethereum", "Gas"],
  stablecoin: ["Cryptocurrency", "DeFi", "Liquidity", "Market Cap"],
  gas: ["Ethereum", "Smart Contract", "Transaction", "Validator"],
  "smart-contract": ["Ethereum", "DeFi", "Gas", "Token"],
  defi: ["Smart Contract", "Liquidity", "Ethereum", "Staking"],
  liquidity: ["Trading", "Liquidity Pool", "Market Cap", "DeFi"],
  "market-cap": ["FDV", "Tokenomics", "Circulating Supply", "Trading"],
  fdv: ["Market Cap", "Tokenomics", "Circulating Supply", "Token Supply"],
  staking: ["Validator", "Proof of Stake", "Ethereum", "DeFi"],
  tokenomics: ["Token", "Market Cap", "FDV", "Circulating Supply", "Staking"],
};

const RELATED_CARD_COLORS = ["#ed7c30", "#feca04", "#00a64f"] as const;

function normalizeTermName(name: string) {
  return name
    .replace(/^What is\s+/i, "")
    .replace(/\s*\?$/, "")
    .trim()
    .toLowerCase();
}

function getRelatedTerms(term: GlossaryTerm) {
  return (RELATED_TERM_NAMES[term.slug] ?? [])
    .map((name) => {
      const normalizedName = normalizeTermName(name);
      const canonicalName = normalizedName === "wallet" ? "crypto wallet" : normalizedName;

      return GLOSSARY_TERMS.find(
        (candidate) => normalizeTermName(candidate.title) === canonicalName,
      );
    })
    .filter((relatedTerm): relatedTerm is GlossaryTerm =>
      Boolean(relatedTerm && relatedTerm.slug !== term.slug),
    )
    .slice(0, 3);
}

export default function GlossaryTermView({ term }: { term: GlossaryTerm }) {
  const relatedTerms = getRelatedTerms(term);
  return <main className={styles.page}><article className={styles.article}>
    <header className={styles.titleBanner}><h1>{term.title}</h1></header>
    <div className={styles.content}>
      <figure className={styles.hero}><Image src={term.image} alt="" fill priority sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1240px) calc(100vw - 120px), 1100px" /></figure>
      <p className={styles.definition}>{term.definition}</p>
      {term.formula && <section className={styles.section}><h2>Formula :</h2><p>{term.formula}</p></section>}
      <section className={styles.section}><h2>Example :</h2><p>{term.example}</p></section>
      <section className={styles.section}><h2>Why it matters:</h2><p>{term.whyItMatters}</p></section>
      <section className={styles.related} aria-labelledby="related-terms">
        <h2 id="related-terms">Related terms</h2>
        <div className={styles.relatedGrid}>
          {relatedTerms.map((relatedTerm, index) => (
            <Link
              className={styles.relatedCard}
              href={`/glossary/${relatedTerm.slug}`}
              key={relatedTerm.slug}
              style={{ backgroundColor: RELATED_CARD_COLORS[index] }}
            >
              <div className={styles.relatedImage}>
                <Image
                  src={relatedTerm.image}
                  alt=""
                  fill
                  sizes="(max-width: 767px) 100vw, 350px"
                />
              </div>
              <h3>{relatedTerm.title}</h3>
            </Link>
          ))}
        </div>
      </section>
      <section className={styles.learnNext}><h2>Learn next:</h2><p>What Is Bitcoin?</p><Link className={styles.lessonLink} href="/lesson/lesson-foundation-1-1"><span>Explore the lesson</span><Image src="/blog/figma-cta-arrow.svg" alt="" width={33} height={34} /></Link></section>
    </div>
  </article></main>;
}
