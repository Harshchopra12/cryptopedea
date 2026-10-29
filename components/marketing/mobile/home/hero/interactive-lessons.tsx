import Image from "next/image";

export default function InteractiveLessons() {
    return (
        <div
            className="
                relative
                h-[401px]
                w-[315px]
                shrink-0
                overflow-hidden
                border-2
                border-[#000926]
                bg-[#FBFBFB]
                p-[10px]
                shadow-[4px_4px_0_#000000]
            "
        >
            <video
                autoPlay
                muted
                loop
                playsInline
                src="/videos/interactive-lessons-mobile.mp4"
                aria-label="Interactive crypto lessons"
                className="block h-[291px] w-[291px] object-contain"
            />

            <div
                className="
                    absolute
                    inset-x-[10px]
                    bottom-[10px]
                    flex
                    flex-col
                    items-start
                    gap-[10px]
                "
            >
                <p
                    className="
                        w-full
                        text-[28px]
                        font-bold
                        leading-[1.08]
                        tracking-[-0.84px]
                        text-[#000000]
                    "
                    style={{
                        fontFamily:
                            "var(--cp-font-body), 'Space Grotesk', sans-serif",
                    }}
                >
                    Interactive Lessons
                </p>

                <Image
                    src="/hero/interactive-lessons-dots.svg"
                    alt=""
                    width={32}
                    height={10}
                    aria-hidden="true"
                />
            </div>
        </div>
    );
}