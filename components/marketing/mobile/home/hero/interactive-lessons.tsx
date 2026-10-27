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
                shadow-[4px_4px_0_#000000]
            "
        >
            <Image
                src="/hero/interactive-lessons.png"
                alt="Interactive crypto lessons"
                fill
                className="object-cover"
                priority
            />

            <div
                className="
                    absolute
                    inset-x-0
                    bottom-0
                    flex
                    flex-col
                    items-start
                    gap-[10px]
                    p-[10px]
                "
            >
                <p
                    className="
                        w-full
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
                    Interactive Lesions
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