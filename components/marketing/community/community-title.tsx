export default function CommunityTitle() {
  return (
    <h2
      id="community-title"
      className="m-0 text-center text-white"
      style={{
        fontFamily: "var(--cp-font-display)",
        fontSize: "64px",
        fontWeight: 700,
        lineHeight: "100%",
        letterSpacing: "-3%",
        textTransform: "none",
      }}
    >
      <span className="block">Join our</span>
      <span className="block">Community</span>
    </h2>
  );
}