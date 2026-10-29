
import type { AcademyCardProps } from "./academy.types";
import styles from "./academy-card.module.css";

type RealmReverseFace = {
    realm: string;
    title: string;
    description: string;
    xp: string;
    level: string;
};

const REALM_REVERSE_FACES: Record<string, RealmReverseFace> = {
    beginner: {
        realm: "Realm 01",
        title: "Crypto Foundation",
        description:
            "Understand money, Bitcoin, blockchain, wallets, exchanges and the fundamentals of crypto.",
        xp: "XP: +1000",
        level: "Foundation",
    },
    advance: {
        realm: "Realm 02",
        title: "Trading Arena",
        description:
            "Learn how markets move, read charts, manage risk and build a trading mindset.",
        xp: "XP: +2500",
        level: "Intermediate",
    },
    expert: {
        realm: "Realm 03",
        title: "Deep Dive Lab",
        description:
            "Go deeper into DeFi, tokenomics, on-chain concepts, Web3 and advanced crypto.",
        xp: "XP: +5000",
        level: "Advanced",
    },
};

export default function AcademyCard({
    title,
    color,
    image,
    id,
    desktop = false,
}: AcademyCardProps) {
    const reverseFace = REALM_REVERSE_FACES[id];

    const imageFrame = (
        <div
            className={`flex ${
                desktop
                    ? "relative mx-[20px] mt-[20px] h-[350px] w-[300px]"
                    : "mx-[20px] mt-[20px] h-[350px]"
            } ${
                desktop
                    ? id === "beginner"
                        ? styles.foundationImageFrame
                        : styles.desktopImageFrame
                    : styles.mobileImageFrame
            } items-center justify-center overflow-hidden border-[2px] border-[#000926] bg-[#FBFBFB]`}
        >
            {image ? (
                <img
                    src={image}
                    alt=""
                    className={
                        desktop
                            ? id === "expert"
                                ? "absolute left-0 top-[-6.75%] h-[106.75%] w-full object-fill"
                                : "block h-full w-full object-cover"
                            : "block h-full w-full object-contain"
                    }
                />
            ) : (
                <div
                    aria-hidden="true"
                    className="h-full w-full bg-[#FBFBFB]"
                />
            )}
        </div>
    );

    const frontFooter = (
        <div
            className={`flex ${
                desktop
                    ? "mx-[20px] mb-[20px] mt-[29px] h-[53.333px]"
                    : "min-h-[64px] px-[20px] pb-[20px] pt-[10px]"
            } ${
                desktop
                    ? id === "beginner"
                        ? styles.foundationFooter
                        : styles.desktopFooter
                    : styles.mobileFooter
            } items-center justify-between`}
        >
            <span
                className={`font-[var(--cp-font-body)] text-[28px] font-bold ${
                    desktop
                        ? "leading-[1.08] tracking-[-0.84px]"
                        : "leading-none"
                } text-[#FBFBFB]`}
            >
                {title}
            </span>

            <div
                className={`flex items-center justify-center border-2 border-[#000926] bg-[#FBFBFB] ${
                    desktop
                        ? "h-[53.333px] w-[55.559px] shadow-[5px_5px_0_#000]"
                        : "h-[56px] w-[56px] p-[10px] shadow-[5px_5px_0_#000]"
                }`}
            >
                <img
                    src="/home/realm-arrow.svg"
                    alt=""
                    className={
                        desktop
                            ? "h-[33.333px] w-[33.333px]"
                            : "h-[33px] w-[33px]"
                    }
                />
            </div>
        </div>
    );

    const frontContent = (
        <>
            {imageFrame}
            {frontFooter}
        </>
    );

    return (
        <article
            tabIndex={desktop ? 0 : undefined}
            className={`relative ${
                desktop
                    ? "box-border h-[480.333px] w-[348px] border-[4px] border-[#000926] shadow-[10px_10px_0_#000]"
                    : "flex h-[480px] w-[340px] flex-col border-[4px] border-[#000926] shadow-[10px_10px_0_#000]"
            } shrink-0 bg-[#FBFBFB]`}
            style={{
                backgroundColor:
                    desktop && id === "beginner" ? "#44A4FB" : desktop ? "#000926" : color,
                boxShadow:
                    desktop && id === "beginner"
                        ? "10px 10px 0px #000000"
                        : undefined,
            }}
        >
            {desktop ? (
                <>
                    <div className={styles.desktopFlipContainer}>
                        <div
                            className={`${styles.desktopFace} ${styles.desktopFrontFace}`}
                            style={{ backgroundColor: color }}
                        >
                            {frontContent}
                        </div>

                        {reverseFace && (
                            <div
                                className={`${styles.desktopFace} ${styles.desktopBackFace}`}
                                style={{ backgroundColor: color }}
                            >
                                <div className="flex w-full flex-col items-start gap-[25px] font-[var(--cp-font-body)] leading-[1.08] text-[#FBFBFB]">
                                    <p className="whitespace-nowrap text-[28px] font-bold tracking-[-0.84px]">
                                        {reverseFace.realm}
                                    </p>

                                    <p className="whitespace-nowrap text-[28px] font-bold tracking-[-0.84px]">
                                        {reverseFace.title}
                                    </p>

                                    <p className="w-full text-[24px] font-normal tracking-[-0.72px]">
                                        {reverseFace.description}
                                    </p>

                                    <p className="w-full text-[24px] font-normal tracking-[-0.72px]">
                                        {reverseFace.xp}
                                    </p>
                                </div>

                                <div className="flex w-full items-center justify-between">
                                    <span className="whitespace-nowrap font-[var(--cp-font-body)] text-[28px] font-bold leading-[1.08] tracking-[-0.84px] text-[#FBFBFB]">
                                        {reverseFace.level}
                                    </span>

                                    <div className="flex h-[53.333px] w-[55.559px] items-center justify-center border-2 border-[#000926] bg-[#FBFBFB] shadow-[5px_5px_0_#000]">
                                        <img
                                            src="/home/realm-arrow.svg"
                                            alt=""
                                            className="h-[33.333px] w-[33.333px]"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                </>
            ) : (
                frontContent
            )}
        </article>
    );
}
