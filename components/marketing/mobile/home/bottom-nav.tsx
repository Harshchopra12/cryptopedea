export default function BottomNav() {
    return (
        <nav
            aria-label="Mobile navigation"
            className="
                mobile-bottom-nav
                flex
                h-[59.09px]
                w-[292.615px]
                shrink-0
                items-center
                justify-center
                gap-[69.231px]
                border-[2.308px]
                border-solid
                border-[#000926]
                bg-[#fbfbfb]
                px-[23.077px]
                py-[11.538px]
                shadow-[5.769px_5.769px_0_#000000]
            "
        >
            <div className="h-[36px] w-[36px] shrink-0 overflow-hidden">
                <img
                    src="/mobile-home/navigation/hierarchy.svg"
                    alt=""
                    className="block h-full w-full"
                />
            </div>

            <div className="h-[36.013px] w-[36px] shrink-0">
                <img
                    src="/mobile-home/navigation/list.svg"
                    alt=""
                    className="block h-full w-full"
                />
            </div>

            <div className="h-[36px] w-[36px] shrink-0">
                <img
                    src="/mobile-home/navigation/section.svg"
                    alt=""
                    className="block h-full w-full"
                />
            </div>
        </nav>
    );
}