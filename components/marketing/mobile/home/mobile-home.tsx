import ArrowNavigation from "./arrow-navigation";
import MobileAcademyCarousel from "./academy-carousel";
import BottomNav from "./bottom-nav";
import Community from "./community/community";
import MobileHero from "./hero";
import MobileWhatWeOffer from "./what-we-offer";

export default function MobileHome() {
    return (
        <main
            data-marketing-mobile
            className="mobile-home"
        >
            <div className="mobile-home__viewport">
                <div className="mobile-home__canvas">
                    <MobileHero />
                    <ArrowNavigation />
                    <BottomNav />
                    <MobileWhatWeOffer />
                    <MobileAcademyCarousel />
                    <Community />
                </div>
            </div>
        </main>
    );
}