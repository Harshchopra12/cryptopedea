import GridBackground from "./grid-background";

export default function Hero() {
  return (
    <section className="relative min-h-[900px] overflow-hidden bg-[var(--cp-background)]">
      <GridBackground />

      {/* Hero content will go here */}

      <div className="relative z-10" />
    </section>
  );
}