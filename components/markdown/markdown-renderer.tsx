"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import Heading from "./heading";
import Paragraph from "./paragraph";
import BlockQuote from "./blockquote";
import List from "./list";
import Code from "./code";
import Table from "./table";
import Image from "./image";
import Link from "./link";

interface MarkdownRendererProps {
  markdown: string;
}

export default function MarkdownRenderer({
  markdown,
}: MarkdownRendererProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: Heading.H1,
        h2: Heading.H2,
        h3: Heading.H3,

        p: Paragraph,

        blockquote: BlockQuote,

        ul: List.Unordered,
        ol: List.Ordered,
        li: List.Item,

        code: Code,

        table: Table.Table,
        thead: Table.Head,
        tbody: Table.Body,
        tr: Table.Row,
        th: Table.Header,
        td: Table.Cell,

        img: Image,

        a: Link,
      }}
    >
      {markdown}
    </ReactMarkdown>
  );
}