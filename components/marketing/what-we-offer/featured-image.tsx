export default function FeaturedImage() {
  return (
    <div
      className="
        h-[450px]
        w-full
        shrink-0
      "
      style={{
        border: "2px solid #000926",
        padding: "20px",
      }}
    >
      <div
        className="
          relative
          h-full
          w-full
          overflow-hidden
          bg-[#F9EEC1]
        "
        style={{
          border: "2px solid #000926",
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          src="/videos/academy-console.mp4"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-contain
          "
        />
      </div>
    </div>
  );
}