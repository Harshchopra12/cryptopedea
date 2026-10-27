import AcademyCard from "@/components/marketing/join-academy/academy-card";
import { ACADEMY_CARDS } from "@/components/marketing/join-academy/join-academy.constants";

export default function MobileAcademyCarousel() {
    return (
        <section
            aria-labelledby="mobile-academy-title"
            className="mobile-academy"
        >
            <h2 id="mobile-academy-title">Join the Academy</h2>
            <div className="mobile-academy__scroller" tabIndex={0}>
                <div className="mobile-academy__track">
                    {ACADEMY_CARDS.map((card) => (
                        <div className="mobile-academy__slide" key={card.id}>
                            <AcademyCard {...card} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
