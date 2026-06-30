import type { ComponentPropsWithoutRef } from "react";

type LinkProps = ComponentPropsWithoutRef<"a">;

export default function Link({
  children,
  href,
  ...props
}: LinkProps) {
  const isExternal =
    href?.startsWith("http://") || href?.startsWith("https://");

  return (
    <a
      href={href}
      className="font-medium text-emerald-400 underline underline-offset-4 transition-colors hover:text-emerald-300"
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      {...props}
    >
      {children}
    </a>
  );
}