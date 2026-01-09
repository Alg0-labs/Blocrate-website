import { useEffect, useState } from "react";
import LogoImageSvg from "@/assets/blocrate-logo.svg";
import LogoImagePng from "@/assets/blocrate-logo.png";
import JoinWaitlistButton from "@/components/JoinWaitlistButton";

// Detect if browser is Safari
const isSafari = () => {
  if (typeof window === "undefined") return false;
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
};

export default function Navigation() {
  const [showWaitlistButton, setShowWaitlistButton] = useState(false);
  const [isSafariBrowser, setIsSafariBrowser] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    setIsSafariBrowser(isSafari());
  }, []);

  useEffect(() => {
    const heroSection = document.getElementById("hero-section");
    if (!heroSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Show button when hero section is not visible (scrolled past it)
          setShowWaitlistButton(!entry.isIntersecting);
        });
      },
      {
        // Trigger when hero section is completely out of view
        threshold: 0,
        rootMargin: "0px",
      }
    );

    observer.observe(heroSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Hide navigation while scrolling - optimized for smooth performance
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    let ticking = false;
    let rafId: number | null = null;

    const handleScroll = () => {
      if (!ticking) {
        rafId = window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY || window.pageYOffset;
          
          // Show navigation when at top, hide when scrolling down
          if (currentScrollY < 10) {
            setIsScrolling(false);
          } else if (currentScrollY > lastScrollY && currentScrollY > 50) {
            // Scrolling down
            setIsScrolling(true);
          } else if (currentScrollY < lastScrollY) {
            // Scrolling up
            setIsScrolling(false);
          }
          
          setLastScrollY(currentScrollY);
          ticking = false;
          rafId = null;
        });
        ticking = true;
      }

      // Clear timeout and reset scrolling state after scroll stops
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    // Use passive listeners for better scroll performance
    window.addEventListener("scroll", handleScroll, { passive: true, capture: false });
    window.addEventListener("touchmove", handleScroll, { passive: true, capture: false });
    // Also listen to wheel events for trackpad/mouse wheel scrolling
    window.addEventListener("wheel", handleScroll, { passive: true, capture: false });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
      window.removeEventListener("wheel", handleScroll);
      clearTimeout(scrollTimeout);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [lastScrollY]);

  const scrollToHero = () => {
    const heroSection = document.getElementById("hero-section");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 w-full z-50 px-4 sm:px-6 lg:px-8 pt-8 pb-4 transition-transform duration-300 ease-in-out ${
        isScrolling ? "-translate-y-full" : "translate-y-0"
      }`}
      style={{
        willChange: "transform",
        transform: "translateZ(0)",
        WebkitTransform: "translateZ(0)",
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
      }}
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src={isSafariBrowser ? LogoImagePng : LogoImageSvg} 
            alt="Blocrate" 
            className="h-8 w-auto"
          />
        </div>

        {/* Navigation Links */}
        {/* <div className="hidden lg:flex items-center gap-12 px-10 py-4 rounded-full border border-white/12 bg-gradient-to-r from-black/6 to-black/24 shadow-[0_4px_4px_0_rgba(0,0,0,0.05)_inset] glassmorphic">
          <a href="#home" className="text-white text-base font-medium hover:text-brand-green transition-colors">Home</a>
          <a href="#about" className="text-white text-base font-medium hover:text-brand-green transition-colors">About</a>
          <a href="#pages" className="text-white text-base font-medium hover:text-brand-green transition-colors">Pages</a>
          <a href="#blog" className="text-white text-base font-medium hover:text-brand-green transition-colors">Blog</a>
          <a href="#contact" className="text-white text-base font-medium hover:text-brand-green transition-colors">Contact Us</a>
        </div> */}

        {/* CTA Buttons */}
        <div className="flex items-center gap-4">
          {/* Watch Demo Button - Always visible */}
          {/* <button className="hidden lg:inline-flex items-center px-5 py-2 bg-white rounded-full text-brand-dark text-base font-medium hover:bg-brand-green hover:text-black transition-all duration-300">
            Watch Demo
          </button> */}

          {/* Join Waitlist Button - Shows when hero section is not visible */}
          <div
            className={`flex items-center transition-all duration-300 mt-8 ${
              showWaitlistButton
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-2 pointer-events-none"
            }`}
          >
            <JoinWaitlistButton
              variant="with-logo"
              size="small"
              onClick={scrollToHero}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

