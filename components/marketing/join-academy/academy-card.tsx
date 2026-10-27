import type { AcademyCardProps } from "./academy.types";

export default function AcademyCard({
    title,
    color,
    image,
}: AcademyCardProps) {
    return (
        <article
            className="
                relative
                flex
                h-[480px]
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
            <div
                className="
                    mx-[20px]
                    mt-[20px]
                    flex
                    h-[350px]
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
                        text-[28px]
                        font-bold
                        leading-none
                        text-[#FBFBFB]
                    "
                >
                    {title}
                </span>

                <div className="flex h-[56px] w-[56px] items-center justify-center border-2 border-[#000926] bg-[#FBFBFB] p-[10px] shadow-[5px_5px_0_#000926]">
                    <img src="/home/realm-arrow.svg" alt="" className="h-[33px] w-[33px]" />
                </div>
            </div>
        </article>
    );
}