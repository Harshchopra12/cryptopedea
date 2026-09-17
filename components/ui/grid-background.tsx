export default function GridBackground() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none z-0"
      style={{
        backgroundImage: `
          repeating-linear-gradient(
            to right,
            rgba(0, 9, 38, 0.06) 0,
            rgba(0, 9, 38, 0.06) 1px,
            transparent 1px,
            transparent 30px
          ),
          repeating-linear-gradient(
            to bottom,
            rgba(0, 9, 38, 0.06) 0,
            rgba(0, 9, 38, 0.06) 1px,
            transparent 1px,
            transparent 30px
          )
        `,
        backgroundPosition: "10px 10px",
      }}
    />
  );
}