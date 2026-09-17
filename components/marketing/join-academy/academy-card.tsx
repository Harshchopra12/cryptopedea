import type { AcademyCardProps } from "./academy.types";

export default function AcademyCard({
    title,
    color,
    image,
    coins,
}: AcademyCardProps) {
    return (
        <article
            className="
                relative
                flex
                h-auto
                w-[340px]
                shrink-0
                flex-col
                border-[4px]
                border-[#000926]
                bg-[#FBFBFB]
                shadow-[6px_6px_0_#000926]
            "
            style={{
                backgroundColor: color,
            }}
        >
            {/* Illustration area */}
            <div
                className="
                    mx-[20px]
                    mt-[20px]
                    flex
                    h-[300px]
                    items-center
                    justify-center
                    overflow-hidden
                    border-[2px]
                    border-[#000926]
                    bg-[#FBFBFB]
                "
            >
                {image ? (
                    <img
                        src={image}
                        alt=""
                        className="
                            block
                            h-full
                            w-full
                            object-contain
                        "
                    />
                ) : (
                    <div
                        aria-hidden="true"
                        className="h-full w-full bg-[#FBFBFB]"
                    />
                )}
            </div>

            {/* Bottom row */}
            <div
                className="
                    flex
                    min-h-[64px]
                    items-center
                    justify-between
                    px-[20px]
                    pb-[20px]
                    pt-[10px]
                "
            >
                <span
                    className="
                        font-[var(--cp-font-body)]
                        text-[20px]
                        font-bold
                        leading-none
                        text-[#FBFBFB]
                    "
                >
                    {title}
                </span>

                <div className="flex items-center gap-[10px]">
                    {coins.map((coin, index) => (
                        <div
                            key={`${title}-coin-${index}`}
                            className="
                                flex
                                h-[40px]
                                w-[40px]
                                items-center
                                justify-center
                                border-[2px]
                                border-[#000926]
                                bg-[#FBFBFB]
                                font-[var(--cp-font-display)]
                                text-[18px]
                                font-bold
                                leading-none
                                text-[#000926]
                            "
                        >
                            $
                        </div>
                    ))}
                </div>
            </div>
        </article>
    );
}