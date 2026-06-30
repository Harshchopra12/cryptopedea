import type { ComponentPropsWithoutRef } from "react";

type ImageProps = ComponentPropsWithoutRef<"img">;

export default function Image({
  alt = "",
  ...props
}: ImageProps) {
  return (
    <img
      alt={alt}
      className="my-6 w-full rounded-xl border border-zinc-800 object-cover"
      loading="lazy"
      {...props}
    />
  );
}