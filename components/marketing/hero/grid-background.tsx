import { cn } from "@/lib/utils";

interface GridBackgroundProps {
  className?: string;
}

export default function GridBackground({
  className,
}: GridBackgroundProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "cp-grid-background pointer-events-none absolute inset-0 z-0",
        className
      )}
    />
  );
}