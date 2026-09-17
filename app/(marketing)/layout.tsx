import { Navbar } from "@/components/marketing/navbar";
import MobileNavbar from "@/components/marketing/mobile/navbar";

export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <div className="hidden md:block">
                <Navbar />
            </div>

            <div className="block md:hidden">
                <MobileNavbar />
            </div>

            {children}
        </>
    );
}