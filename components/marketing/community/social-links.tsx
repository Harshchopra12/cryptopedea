import SocialButton from "./social-button";
import { COMMUNITY_SOCIAL_LINKS } from "./community.constants";

export default function SocialLinks() {
  return (
    <div
      className="flex w-full items-center justify-center"
      style={{
        height: "116.5px",
        marginTop: "50px",
        gap: "20px",
      }}
    >
      {COMMUNITY_SOCIAL_LINKS.map((social) => (
        <SocialButton
          key={social.id}
          href={social.href}
          ariaLabel={`Visit Cryptopedea on ${social.label}`}
          icon={
            <img
              src={social.icon}
              alt=""
              className="h-full w-full object-contain"
            />
          }
        />
      ))}
    </div>
  );
}
