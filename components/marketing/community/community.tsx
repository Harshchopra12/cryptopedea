import CommunityClouds from "./community-clouds";
import CommunityContent from "./community-content";
import FooterStrip from "./footer-strip";

export default function Community() {
  return (
    <section
      aria-labelledby="community-title"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#421AD3]
      "
    >
      <CommunityClouds />

      <div
        className="relative z-10 w-full"
        style={{
          paddingTop: "160px",
        }}
      >
        <CommunityContent />

        <FooterStrip />
      </div>
    </section>
  );
}