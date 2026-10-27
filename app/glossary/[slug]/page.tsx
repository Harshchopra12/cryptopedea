import type { Metadata } from "next";
import { notFound } from "next/navigation";

import GlossaryTermView from "@/components/marketing/glossary/glossary-term-view";
import { getGlossaryTerm } from "@/content/glossary/terms";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const term = getGlossaryTerm((await params).slug);
  return term ? { title: `${term.title} | CryptoPedea`, description: term.definition } : { title: "Glossary term not found" };
}

export default async function GlossaryTermPage({ params }: Props) {
  const term = getGlossaryTerm((await params).slug);
  if (!term) notFound();
  return <GlossaryTermView term={term} />;
}
