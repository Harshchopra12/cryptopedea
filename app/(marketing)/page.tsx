import Hero from "@/components/marketing/hero";
import WhatWeOffer from "@/components/marketing/what-we-offer";
import JoinAcademy from "@/components/marketing/join-academy";
import Community from "@/components/marketing/community";

export default function Home() {
    return (
        <main className="relative">
            <Hero />
            <WhatWeOffer />
            <JoinAcademy />
            <Community />
        </main>
    );
}