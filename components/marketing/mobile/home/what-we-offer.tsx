import { FIGMA_ASSETS } from "@/components/marketing/what-we-offer/figma-assets";
import { OFFER_COPY } from "@/components/marketing/what-we-offer/offer.constants";

export default function MobileWhatWeOffer() {
    return (
        <section
            aria-labelledby="mobile-what-we-offer-title"
            className="mobile-what-we-offer"
        >
            <div className="mobile-what-we-offer__header">
                <h2 id="mobile-what-we-offer-title">
                    What we Offer
                </h2>
                <button type="button" className="mobile-what-we-offer__view-all">
                    {OFFER_COPY.viewAllLabel}
                </button>
            </div>

            <article className="mobile-what-we-offer__featured">
                <div className="mobile-what-we-offer__image">
                    <img src={FIGMA_ASSETS.mainIllustration} alt="" />
                </div>
                <div className="mobile-what-we-offer__content">
                    <h3>Interactive Lesions</h3>
                    <p>
                        Utilize adaptive markers that adjust based on contextual
                        information and environmental factors, providing more accurate
                        and relevant insights into lesion behavior across different
                        conditions.
                    </p>
                    <div className="mobile-what-we-offer__art">
                        <img src={FIGMA_ASSETS.dPad} alt="" />
                        <div className="mobile-what-we-offer__palette" aria-hidden="true">
                            <span />
                            <span />
                            <span />
                            <span />
                        </div>
                    </div>
                </div>
            </article>
        </section>
    );
}
