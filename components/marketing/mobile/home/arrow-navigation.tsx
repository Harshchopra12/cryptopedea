const arrowOne = "/mobile-home/arrows/23e07.svg";
const arrowTwo = "/mobile-home/arrows/8ce66.svg";
const arrowThree = "/mobile-home/arrows/8aa22.svg";

function ArrowButton({
    src,
    className = "",
}: {
    src: string;
    className?: string;
}) {
    return (
        <div
            className="
                flex
                h-[60px]
                w-[60px]
                shrink-0
                items-center
                justify-center
                rounded-[33.333px]
                border-[3.333px]
                border-solid
                border-[#000926]
                bg-white
                p-[6.667px]
            "
        >
            <div
                className={`
                    relative
                    h-[33.333px]
                    w-[33.333px]
                    ${className}
                `}
            >
                <img
                    src={src}
                    alt=""
                    className="absolute inset-0 block h-full w-full"
                />
            </div>
        </div>
    );
}

export default function ArrowNavigation() {
    return (
        <div
            className="
                mobile-arrow-navigation
                flex
                h-[60px]
                w-fit
                items-center
                gap-[24px]
            "
        >
            <ArrowButton
                src={arrowOne}
                className="rotate-180 scale-y-[-1]"
            />

            <ArrowButton
                src={arrowTwo}
                className="rotate-90"
            />

            <ArrowButton src={arrowThree} />
        </div>
    );
}