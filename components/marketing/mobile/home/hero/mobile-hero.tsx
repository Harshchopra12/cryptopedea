import InteractiveLessons from "./interactive-lessons";
import CryptoLabel from "./crypto-label";
import JoinNowCard from "./join-now-card";

export default function MobileHero() {
    return (
        <section className="mobile-hero">
            <div className="mobile-hero__top">
                <InteractiveLessons />
                <CryptoLabel />
            </div>

            <div className="mobile-hero__join">
                <JoinNowCard />
            </div>
        </section>
    );
}