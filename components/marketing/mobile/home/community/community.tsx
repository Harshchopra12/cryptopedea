import EmailCard from "./email-card";
import SocialGrid from "./social-grid";
import SubscriptionCard from "./subscription-card";

export default function Community() {
    return (
        <section
            aria-labelledby="mobile-community-title"
            className="
                mobile-community
                flex
                w-[408px]
                flex-col
                items-center
                gap-[50px]
            "
        >
            <div
                className="
                    mobile-community__content
                    flex
                    w-[398px]
                    shrink-0
                    flex-col
                    items-center
                    gap-[50px]
                "
            >
                <div
                    className="
                        mobile-community__heading
                        flex
                        h-[162px]
                        w-[398px]
                        shrink-0
                        flex-col
                        items-center
                        gap-[20px]
                        text-center
                    "
                >
                    <h2
                        id="mobile-community-title"
                        className="
                            m-0
                            w-[398px]
                            whitespace-nowrap
                            text-center
                            text-[56px]
                            font-bold
                            uppercase
                            leading-none
                            tracking-[-1.68px]
                            text-[#000926]
                        "
                        style={{
                            fontFamily:
                                "var(--cp-font-display), 'Pixeloid Sans', sans-serif",
                        }}
                    >
                        <span className="block">Join our</span>
                        <span className="block">Community</span>
                    </h2>

                    <p
                        className="
                            m-0
                            w-full
                            text-[24px]
                            font-medium
                            leading-[1.25]
                            text-[#000926]
                        "
                        style={{
                            fontFamily:
                                "var(--cp-font-body), 'Space Grotesk', sans-serif",
                        }}
                    >
                        Subscribe for latest updates
                    </p>
                </div>

                <SubscriptionCard />

                <SocialGrid />
            </div>

            <EmailCard />
        </section>
    );
}