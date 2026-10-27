export default function CryptoLabel() {
    return (
        <div
            className="
                flex
                h-[401px]
                w-[72px]
                shrink-0
                items-center
                justify-center
                border-2
                border-[#000926]
                bg-white
                shadow-[4px_4px_0_#000000]
            "
        >
            <span
                className="
                    whitespace-nowrap
                    text-[48px]
                    font-bold
                    leading-[1.08]
                    tracking-[-1.44px]
                    text-[#000926]
                "
                style={{
                    fontFamily:
                        "var(--cp-font-display), 'Pixeloid Sans', sans-serif",
                    transform: "rotate(-90deg)",
                }}
            >
                Cryptopedea
            </span>
        </div>
    );
}