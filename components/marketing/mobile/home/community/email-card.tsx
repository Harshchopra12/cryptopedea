import styles from "./email-card.module.css";

export default function EmailCard() {
    return (
        <section
            className={`mobile-email-card ${styles.emailCard}`}
        >
            <div className={styles.emailContent}>
                <h3
                    className={styles.emailHeading}
                    style={{
                        fontFamily:
                            "var(--cp-font-body), 'Space Grotesk', sans-serif",
                    }}
                >
                    Email Us
                </h3>

                <div className={styles.infoBox}>
                    <p
                        className={styles.infoText}
                        style={{
                            fontFamily:
                                "var(--cp-font-body), 'Space Grotesk', sans-serif",
                        }}
                    >
                        Have a question or need assistance? We&apos;d be happy to
                        help.
                    </p>
                </div>

                <div className={styles.infoBox}>
                    <p
                        className={styles.infoText}
                        style={{
                            fontFamily:
                                "var(--cp-font-body), 'Space Grotesk', sans-serif",
                        }}
                    >
                        Email: Contact@cryptopedea.com
                    </p>
                </div>
            </div>
        </section>
    );
}