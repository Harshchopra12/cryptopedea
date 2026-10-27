import type { ReactNode } from "react";
import GridBackground from "./grid-background";

interface PageBackgroundProps {
  children: ReactNode;
}

export default function PageBackground({
  children,
}: PageBackgroundProps) {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[var(--cp-background)]">
      <GridBackground />

      <div className="relative z-10">
        {children}
      </div>
    </main>
  );
}