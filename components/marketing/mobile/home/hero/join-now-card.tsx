import Image from "next/image";

export default function JoinNowCard() {
    return (
        <button
            type="button"
            aria-label="Join Now"
            className="
                relative
                flex
                h-[145px]
                w-full
                items-end
                justify-end
                gap-[10px]
                overflow-hidden
                border-2
                border-[#000926]
                p-[10px]
                shadow-[4px_4px_0_#000000]
            "
        >
            <Image
                src="/hero/join-now-background.png"
                alt=""
                fill
                className="object-cover"
                priority
            />

            <Image
                src="/hero/join-now-overlay.png"
                alt=""
                fill
                className="pointer-events-none object-cover"
                priority
            />

            <span
                className="
                    relative
                    z-10
                    text-[28px]
                    font-bold
                    leading-[1.08]
                    tracking-[-0.84px]
                    text-[#fbfbfb]
                "
                style={{
                    fontFamily:
                        "var(--cp-font-body), 'Space Grotesk', sans-serif",
                }}
            >
                Join Now
            </span>

            <Image
                src="/hero/join-now-arrow.svg"
                alt=""
                width={30}
                height={30}
                className="relative z-10"
            />
        </button>
    );
}