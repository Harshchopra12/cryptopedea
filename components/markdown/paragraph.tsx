import type { ComponentPropsWithoutRef } from "react";

type ParagraphProps = ComponentPropsWithoutRef<"p">;

export default function Paragraph({
  children,
  ...props
}: ParagraphProps) {
  return (
    <p
      className="mb-5 text-base leading-8 text-gray-300"
      {...props}
    >
      {children}
    </p>
  );
}