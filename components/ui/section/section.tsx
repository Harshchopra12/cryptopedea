import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends HTMLAttributes<HTMLElement> {}

export default function Section({
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn("relative w-full", className)}
      {...props}
    >
      {children}
    </section>
  );
}