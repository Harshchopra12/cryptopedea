"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const MOBILE_MENU_LINKS = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#what-we-offer-title" },
    { label: "Blogs", href: "/blogs" },
    { label: "Academy", href: "/learn" },
    { label: "Contact Us", href: "/contact" },
] as const;

const MOBILE_MENU_LINK_CLASS =
    "w-full py-1 text-center font-[var(--cp-font-display)] text-[28px] font-bold leading-[1.1] tracking-[-0.84px] text-[#000926] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#000926] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fbfbfb]";

export default function MobileNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header
            className="relative z-50 w-full"
            style={{
                boxSizing: "border-box",
                paddingTop: "74px",
                paddingLeft: "16px",
                paddingRight: "16px",
            }}
        >
            <div
                className="
                    relative
                    flex
                    h-[50px]
                    w-full
                    items-center
                    justify-center
                    border-2
                    border-[#000926]
                    bg-[#000926]
                "
            >
                <Image
                    src="/brand/cp-logo.svg"
                    alt="CryptoPedea"
                    width={44.2029}
                    height={30}
                    priority
                    className="block"
                    style={{
                        width: "44.2029px",
                        height: "30px",
                    }}
                />

                <button
                    type="button"
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-navigation-menu"
                    onClick={() => setIsMenuOpen((open) => !open)}
                    className="
                        absolute
                        right-[10px]
                        top-1/2
                        flex
                        h-[30px]
                        w-[30px]
                        -translate-y-1/2
                        items-center
                        justify-center
                        p-0
                        text-[#fbfbfb]
                    "
                >
                    <span
                        aria-hidden="true"
                        className="
                            text-[20px]
                            leading-none
                        "
                    >
                        {isMenuOpen ? "×" : "☰"}
                    </span>
                </button>
            </div>

            {isMenuOpen && (
                <div
                    id="mobile-navigation-menu"
                    className="
                        absolute
                        left-1/2
                        top-[134px]
                        flex
                        w-[calc(100vw_-_32px)]
                        max-w-[408px]
                        -translate-x-1/2
                        flex-col
                        items-center
                        border-2
                        border-[#000926]
                        bg-[#fbfbfb]
                        px-5
                        pb-8
                        pt-5
                        shadow-[5px_5px_0_#000000]
                    "
                >
                    <button
                        type="button"
                        aria-label="Close menu"
                        onClick={() => setIsMenuOpen(false)}
                        className="
                            flex
                            h-[56px]
                            w-[56px]
                            items-center
                            justify-center
                            border-2
                            border-[#000926]
                            bg-[#000926]
                            text-[40px]
                            leading-none
                            text-[#c8ff00]
                            focus-visible:outline-none
                            focus-visible:ring-2
                            focus-visible:ring-[#c8ff00]
                            focus-visible:ring-offset-2
                            focus-visible:ring-offset-[#fbfbfb]
                        "
                    >
                        <span
                            aria-hidden="true"
                            className="text-[48px] leading-none"
                        >
                            ×
                        </span>
                    </button>

                    <nav
                        aria-label="Mobile menu"
                        className="mt-8 flex w-full flex-col items-center gap-6"
                    >
                        {MOBILE_MENU_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={MOBILE_MENU_LINK_CLASS}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}