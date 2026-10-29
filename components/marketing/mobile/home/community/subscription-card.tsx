import styles from "./subscription-card.module.css";

export default function SubscriptionCard() {
    return (
        <form
            className={`mobile-subscription-card ${styles.subscriptionCard}`}
        >
            <div className={styles.fieldGroup}>
                <label
                    htmlFor="community-email"
                    className="
                        w-full
                        text-[24px]
                        font-normal
                        leading-[1.25]
                        tracking-[-0.72px]
                        text-[#000926]
                    "
                    style={{
                        fontFamily:
                            "var(--cp-font-body), 'Space Grotesk', sans-serif",
                    }}
                >
                    Email
                </label>

                <input
                    id="community-email"
                    type="email"
                    className={styles.emailInput}
                />
            </div>

            <button
                type="submit"
                className={styles.submitButton}
                style={{
                    fontFamily:
                        "var(--cp-font-body), 'Space Grotesk', sans-serif",
                }}
            >
                Submit
            </button>
        </form>
    );
}