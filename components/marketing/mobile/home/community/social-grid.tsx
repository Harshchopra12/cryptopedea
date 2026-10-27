const SOCIAL_ASSETS = [
    "/mobile-home/social/4af5e.svg",
    "/mobile-home/social/24250.svg",
    "/mobile-home/social/58fac.svg",
    "/mobile-home/social/fb0af.svg",
];

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
            {SOCIAL_ASSETS.map((src) => (
                <div
                    key={src}
                    className="h-[116.5px] w-[116.5px]"
                >
                    <img
                        src={src}
                        alt=""
                        className="block h-full w-full"
                    />
                </div>
            ))}
        </div>
    );
}