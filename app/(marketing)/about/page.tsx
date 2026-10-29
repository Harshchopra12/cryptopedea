import Image from "next/image";

const descriptionParagraphs = [
  "Making Crypto Easier to Understand.",
  "Cryptopedea is a gamified crypto learning platform designed to make learning cryptocurrency, blockchain, and trading simple, structured, and engaging.",
  "From beginner fundamentals to advanced trading concepts, we bring together step-by-step lessons, interactive quizzes, videos, and real-time market insights to help you learn with clarity.",
  "Our mission is simple: less confusion, more understanding.",
  "Learn. Understand. Progress.",
  "Cryptopedea - Your one stop solution to crypto",
];

export default function AboutPage() {
  return (
    <main className="hidden bg-[#FBFBFB] md:block">
      <section
        className="relative mx-auto h-[900px] w-[1200px] max-w-[calc(100%-40px)]"
        aria-labelledby="about-title"
      >
        <h1
          id="about-title"
          className="absolute left-[197px] top-[90px] m-0 text-black"
          style={{
            fontFamily: "var(--cp-font-display)",
            fontSize: "56px",
            lineHeight: 1.08,
            letterSpacing: "-1.68px",
            fontWeight: 700,
          }}
        >
          About Us
        </h1>

        <div
          className="absolute left-[195px] top-[170px] flex flex-col text-black"
          style={{
            width: "628px",
            gap: "16px",
            fontFamily: "var(--cp-font-body)",
            fontSize: "24px",
            lineHeight: 1.25,
            letterSpacing: "-0.72px",
          }}
        >
          {descriptionParagraphs.map((paragraph) => (
            <p key={paragraph} className="m-0 font-normal text-black">
              {paragraph}
            </p>
          ))}
        </div>

        <div
          className="absolute left-[825px] top-[4px] overflow-hidden"
          style={{ width: "577px", height: "620px" }}
        >
          <Image
            src="/about/pixel-coin-mascot.svg"
            alt="CryptoPedea mascot illustration"
            width={577}
            height={620}
            priority
            className="block"
            style={{
              width: "577px",
              height: "620px",
              display: "block",
            }}
          />
        </div>
      </section>
    </main>
  );
}
