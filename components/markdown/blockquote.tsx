import type { ComponentPropsWithoutRef } from "react";

type BlockQuoteProps = ComponentPropsWithoutRef<"blockquote">;

export default function BlockQuote(props: BlockQuoteProps) {
  return (
    <blockquote
      className="my-6 border-l-4 border-emerald-500 bg-zinc-900/60 py-3 pl-5 italic text-gray-300"
      {...props}
    />
  );
}