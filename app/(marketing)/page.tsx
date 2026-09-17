import Hero from "@/components/marketing/hero";
import WhatWeOffer from "@/components/marketing/what-we-offer";
import JoinAcademy from "@/components/marketing/join-academy";
import Community from "@/components/marketing/community";
import MobileHome from "@/components/marketing/mobile/home";

export default function Home() {
    return (
        <>
            <div className="hidden md:block">
                <main className="relative">
                    <Hero />
                    <WhatWeOffer />
                    <JoinAcademy />
                    <Community />
                </main>
            </div>

            <div className="block md:hidden">
                <MobileHome />
            </div>
        </>
    );
}