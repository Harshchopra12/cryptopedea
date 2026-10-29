import { COMMUNITY_SOCIAL_LINKS } from "@/components/marketing/community/community.constants";

const SOCIAL_LINKS = COMMUNITY_SOCIAL_LINKS;

export default function SocialGrid() {
    return (
        <div
            className="
                grid
                h-[253px]
                w-[253px]
                shrink-0
                grid-cols-2
                gap-[20px]
            "
        >
            {SOCIAL_LINKS.map((social) => (
                <a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit Cryptopedea on ${social.label}`}
                    className="block h-[116.5px] w-[116.5px]"
                >
                    <img
                        src={social.icon}
                        alt=""
                        className="block h-full w-full"
                    />
                </a>
            ))}
        </div>
    );
}