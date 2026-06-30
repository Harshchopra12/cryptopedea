import type { ComponentPropsWithoutRef } from "react";

interface CodeProps extends ComponentPropsWithoutRef<"code"> {
  inline?: boolean;
}

export default function Code({
  inline,
  className,
  children,
  ...props
}: CodeProps) {
  if (inline) {
    return (
      <code
        className="rounded bg-zinc-800 px-1.5 py-0.5 font-mono text-sm text-emerald-400"
        {...props}
      >
        {children}
      </code>
    );
  }

  return (
    <pre className="my-6 overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-950 p-4">
      <code
        className={`font-mono text-sm text-gray-200 ${className ?? ""}`}
        {...props}
      >
        {children}
      </code>
    </pre>
  );
}