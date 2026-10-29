import Image from "next/image";
import { Rajdhani } from "next/font/google";
import Link from "next/link";

import styles from "./footer-strip.module.css";

const rajdhani = Rajdhani({
  weight: "600",
  subsets: ["latin"],
  display: "swap",
});

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

      <div
        className="absolute"
        style={{
          top: "20px",
          left: "0",
          width: "574.5px",
          height: "56px",
        }}
      >
        <p
          className={rajdhani.className}
          style={{
            position: "absolute",
            top: "13px",
            left: "51px",
            margin: 0,
            color: "#421AD3",
            fontSize: "24px",
            fontWeight: 600,
            lineHeight: 1.25,
            whiteSpace: "nowrap",
          }}
        >
          Learn Crypto:{" "}
          <Link href="/glossary" className={styles.glossaryLink}>
            Glossary
          </Link>
        </p>
      </div>

      <div
        className="absolute"
        style={{
          top: "20px",
          right: "0",
          width: "574.5px",
          height: "56px",
        }}
      >
        <p
          className={rajdhani.className}
          style={{
            position: "absolute",
            top: "13px",
            left: "219.96px",
            margin: 0,
            color: "#421AD3",
            fontSize: "24px",
            fontWeight: 600,
            lineHeight: 1.25,
            whiteSpace: "nowrap",
          }}
        >
          Your Crypto Journey starts here
        </p>
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
