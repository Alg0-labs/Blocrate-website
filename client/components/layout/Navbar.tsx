import React from "react";
import blocrateLogo from "@/assets/blocrate-logo.png";

const NAV_LINKS = [
  { href: "#", label: "Features" },
  { href: "#", label: "Token" },
  { href: "#", label: "How it Works" },
  { href: "#", label: "Roadmap" },
];

interface NavbarProps {
  navOpen: boolean;
  onNavToggle: () => void;
  onJoinWaitlist: () => void;
  waitlistInView: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  navOpen,
  onNavToggle,
  onJoinWaitlist,
  waitlistInView,
}) => {
  const navLinkClass =
    "text-white text-xs font-medium uppercase tracking-[0.18em] hover:opacity-80 whitespace-nowrap";

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] pt-4 sm:pt-6 lg:pt-10 px-4 sm:px-6">
      <div className="mx-auto w-full max-w-[1076px]">
        <div
          className="flex items-center justify-between gap-3 px-4 sm:px-6 w-full min-h-[56px] sm:min-h-[62px] rounded-2xl sm:rounded-[35px] backdrop-blur-md"
          style={{ background: "rgba(25, 26, 27, 0.75)" }}
        >
          <div className="flex items-center gap-3 min-w-0 shrink-0">
            <img src={blocrateLogo} alt="Blocrate" className="h-6 sm:h-8 w-auto" />
          </div>

          <div className="hidden lg:flex flex-1 items-center justify-center gap-6 xl:gap-10 shrink-0">
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href} className={navLinkClass}>
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {!waitlistInView && (
              <button
                type="button"
                onClick={onJoinWaitlist}
                className="hidden lg:inline-flex items-center justify-center font-medium text-sm uppercase hover:opacity-90 transition-opacity py-3 sm:py-3.5 px-4 sm:px-6 rounded-2xl sm:rounded-[28px] min-w-[120px] sm:min-w-0 shrink-0"
                style={{ background: "#A3B0F6", color: "#000", border: "none" }}
              >
                JOIN WAITLIST
              </button>
            )}
            <button
              type="button"
              onClick={onNavToggle}
              className="lg:hidden p-2 -mr-2 text-white hover:opacity-80"
              aria-label="Toggle menu"
              aria-expanded={navOpen}
            >
              {navOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {navOpen && (
          <div
            className="lg:hidden mt-2 rounded-2xl overflow-hidden px-4 py-3 space-y-1 backdrop-blur-md"
            style={{ background: "rgba(25, 26, 27, 0.75)" }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block py-2.5 text-white text-xs font-medium uppercase tracking-[0.18em] hover:opacity-80"
                onClick={onNavToggle}
              >
                {link.label}
              </a>
            ))}
            {!waitlistInView && (
              <button
                type="button"
                onClick={() => {
                  onJoinWaitlist();
                  onNavToggle();
                }}
                className="w-full flex items-center justify-center font-medium text-sm uppercase py-3 rounded-xl mt-2"
                style={{ background: "#A3B0F6", color: "#000" }}
              >
                JOIN WAITLIST
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};
