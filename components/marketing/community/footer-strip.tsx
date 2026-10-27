import Image from "next/image";

export default function FooterStrip() {
  return (
    <footer
      className="relative w-full"
      style={{
        height: "100px",
        marginTop: "150px",
        boxSizing: "border-box",
        borderTop: "3px solid #1A1D20",
        overflow: "hidden",
      }}
    >
      {/* LEFT GREEN STRIP */}
      <div
        className="absolute"
        style={{
          top: "20px",
          left: "0",
          width: "576px",
          height: "57px",
        }}
      >
        <Image
          src="/community/footer-left.svg"
          alt=""
          fill
          sizes="576px"
          style={{
            objectFit: "fill",
          }}
        />
      </div>

      {/* RIGHT GREEN STRIP */}
      <div
        className="absolute"
        style={{
          top: "20px",
          right: "0",
          width: "576px",
          height: "57px",
        }}
      >
        <Image
          src="/community/footer-right.svg"
          alt=""
          fill
          sizes="576px"
          style={{
            objectFit: "fill",
          }}
        />
      </div>

      {/* CENTER CP LOGO */}
      <div
        className="absolute"
        style={{
          left: "50%",
          bottom: "20px",
          width: "88.4px",
          height: "60px",
          transform: "translateX(-50%)",
        }}
      >
        <Image
          src="/community/cp-logo.svg"
          alt="Cryptopedea"
          fill
          sizes="89px"
          style={{
            objectFit: "contain",
          }}
        />
      </div>
    </footer>
  );
}