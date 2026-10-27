export default function GridBackground() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",

        backgroundImage: `
          repeating-linear-gradient(
            to right,
            rgba(0,0,0,0.08) 0,
            rgba(0,0,0,0.08) 1px,
            transparent 1px,
            transparent 40px
          ),
          repeating-linear-gradient(
            to bottom,
            rgba(0,0,0,0.08) 0,
            rgba(0,0,0,0.08) 1px,
            transparent 1px,
            transparent 40px
          )
        `,
      }}
    />
  );
}