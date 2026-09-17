import CommunityTitle from "./community-title";
import CommunityDescription from "./community-description";
import SocialLinks from "./social-links";

export default function CommunityContent() {
  return (
    <div
      className="relative mx-auto flex w-full flex-col items-center"
      style={{
        height: "384.5px",
        paddingTop: "90px",
        paddingLeft: "10px",
        paddingRight: "10px",
        boxSizing: "border-box",
      }}
    >
      <CommunityTitle />

      <CommunityDescription />

      <SocialLinks />
    </div>
  );
}