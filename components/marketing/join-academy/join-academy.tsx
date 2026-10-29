import AcademyCard from "./academy-card";
import AcademyConnector from "./academy-connector";
import AcademyClouds from "./academy-clouds";
import { ACADEMY_CARDS } from "./join-academy.constants";
import styles from "./academy-card.module.css";

export default function JoinAcademy() {
    return (
        <section
            aria-labelledby="join-academy-title"
            className="
                relative
                w-full
                overflow-hidden
            "
            style={{
                marginTop: "100px",
                background:
                    "linear-gradient(to bottom, #FBFBFB 0%, #D9C7FF 28%, #8B4BE8 55%, #421AD3 100%)",
            }}
        >
            {/* Academy decorative clouds */}
            <AcademyClouds />

            {/* Academy content */}
            <div
                style={{
                    width: "1182px",
                    marginLeft: "auto",
                    marginRight: "auto",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    paddingBottom: "120px",
                }}
            >
                {/* Heading */}
                <h2
                    id="join-academy-title"
                    className="
                        font-[var(--cp-font-display)]
                        text-[64px]
                        font-bold
                        leading-none
                        tracking-[-0.03em]
                        text-center
                        text-[#000926]
                    "
                >
                    CHOOSE YOUR REALM
                </h2>

                {/* Academy cards */}
                <div
                    style={{
                        position: "relative",
                        width: "1180px",
                        marginTop: "80px",
                        marginLeft: "auto",
                        marginRight: "auto",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "center",
                        gap: "80px",
                    }}
                >
                    {/* Connectors — behind the cards */}
                    <AcademyConnector />

                    {/* Advance */}
                    <div
                        className={styles.desktopHoverTarget}
                        style={{
                            position: "relative",
                            zIndex: 10,
                            width: "340px",
                            flexShrink: 0,
                            marginTop: "130px",
                        }}
                    >
                        <AcademyCard {...ACADEMY_CARDS[0]} desktop />
                    </div>

                    {/* Beginner */}
                    <div
                        className={styles.desktopHoverTarget}
                        style={{
                            position: "relative",
                            zIndex: 10,
                            width: "340px",
                            flexShrink: 0,
                            marginTop: "10px",
                        }}
                    >
                        <AcademyCard {...ACADEMY_CARDS[1]} desktop />
                    </div>

                    {/* Expert */}
                    <div
                        className={styles.desktopHoverTarget}
                        style={{
                            position: "relative",
                            zIndex: 10,
                            width: "340px",
                            flexShrink: 0,
                            marginTop: "130px",
                        }}
                    >
                        <AcademyCard {...ACADEMY_CARDS[2]} desktop />
                    </div>
                </div>
            </div>
        </section>
    );
}
