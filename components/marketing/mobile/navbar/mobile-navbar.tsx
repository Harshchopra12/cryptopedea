export default function MobileNavbar() {
    return (
        <header className="w-full px-4 pt-5">
            <div className="flex h-14 items-center justify-between border-2 border-[#000926] bg-[#fbfbfb] px-4 shadow-[3px_3px_0_#000926]">
                <div className="text-xl font-bold">
                    CryptoPedea
                </div>

                <button
                    type="button"
                    aria-label="Open menu"
                    className="flex h-10 w-10 items-center justify-center"
                >
                    ☰
                </button>
            </div>
        </header>
    );
}