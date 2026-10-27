import NavbarLinks from "./navbar-links";
import NavbarLogo from "./navbar-logo";
import NavbarLogin from "./navbar-login";

export default function Navbar() {
  return (
    <header
      className="w-full bg-[var(--cp-background)]"
    >
      <div className="flex justify-center">
        <nav
          aria-label="Primary Navigation"
          className="flex h-[56px] items-stretch border-2 border-[var(--cp-color-primary)] shadow-[5px_5px_0_#000000]"
          style={{
            width: "1200.3828px",
          }}
        >
          <NavbarLogo />

          <div className="flex flex-1 items-center justify-center">
            <NavbarLinks />
          </div>

          <NavbarLogin />
        </nav>
      </div>
    </header>
  );
}