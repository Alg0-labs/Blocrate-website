import { useEffect, useRef, useState } from "react";
import HeroImage from "@/assets/hero-section.svg";
import FooterLogo from "@/assets/blocrate-footer-logo.svg";
import "@/styles/Hero.css";

export default function Hero() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const [clipStyle, setClipStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    const calculateClipPath = (
      buttonRect: DOMRect,
      logoRect: DOMRect
    ): React.CSSProperties => {
      const overlapTop = Math.max(0, buttonRect.top - logoRect.top);
      const overlapBottom = Math.min(logoRect.height, buttonRect.bottom - logoRect.top);
      const overlapLeft = Math.max(0, buttonRect.left - logoRect.left);
      const overlapRight = Math.min(logoRect.width, buttonRect.right - logoRect.left);

      if (overlapTop < overlapBottom && overlapLeft < overlapRight) {
        const clipTop = overlapTop;
        const clipRight = logoRect.width - overlapRight;
        const clipBottom = logoRect.height - overlapBottom;
        const clipLeft = overlapLeft;
        return {
          clipPath: `inset(${clipTop}px ${clipRight}px ${clipBottom}px ${clipLeft}px)`,
        };
      }
      return { clipPath: "inset(100%)" };
    };

    const updateClip = () => {
      if (!buttonRef.current || !logoRef.current) return;
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const logoRect = logoRef.current.getBoundingClientRect();
      setClipStyle(calculateClipPath(buttonRect, logoRect));
    };

    updateClip();
    window.addEventListener("resize", updateClip);
    window.addEventListener("scroll", updateClip);

    let animationFrameId: number;
    const continuousCheck = () => {
      updateClip();
      animationFrameId = requestAnimationFrame(continuousCheck);
    };
    animationFrameId = requestAnimationFrame(continuousCheck);

    return () => {
      window.removeEventListener("resize", updateClip);
      window.removeEventListener("scroll", updateClip);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  return (
    <section className="relative w-full bg-black overflow-hidden">
        {/* Full width background hero image - extends from top and covers left/right */}
      <div className="relative w-full aspect-[1500/600]">
        <img
          src={HeroImage}
          alt="DeFi Characters"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

        {/* Content container with max-width for text alignment */}
        <div className="absolute inset-0 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="relative w-full h-full">
            {/* Hero Text Overlays */}
            <div className="absolute left-[8%] top-[20%] max-w-[315px]">
              <h1 className="text-white text-[40px] font-semibold leading-[120%]">
                Private Credit Passports for DeFi
              </h1>
            </div>
            <div className="absolute right-[8%] top-[20%] max-w-[315px] text-right">
              <h1 className="text-white text-[40px] font-semibold leading-[120%]">
                Private Credit Passports for DeFi
              </h1>
            </div>
          </div>

          {/* Join Waitlist Button - always visible */}
          <div className="absolute top-[85%] left-1/2 -translate-x-1/2">
            <div className="group relative inline-flex flex-col items-center">
              {/* SVG Gradient Definition */}
              <svg width="0" height="0" className="absolute">
                <defs>
                  <linearGradient
                    id="paint0_linear_24_162"
                    x1="16"
                    y1="-20"
                    x2="237.5"
                    y2="84.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#A4B0F5" />
                    <stop offset="0.831731" stopColor="#3526A6" />
                    <stop offset="1" stopColor="#E6F149" />
                  </linearGradient>
                </defs>
              </svg>
              <button
                ref={buttonRef}
                className="relative overflow-hidden px-14 py-3 bg-white rounded-[15px] shadow-lg z-10 transition-all duration-300 border-0 outline-none"
              >
                {/* Gradient background overlay - spreads from center on hover */}
                <div 
                  className="gradient-spread absolute inset-0"
                  style={{
                    background: 'linear-gradient(135deg, #A4B0F5 0%, #3526A6 83.1731%, #E6F149 100%)',
                  }}
                />
                {/* Invisible spacer to maintain button size */}
                <span className="relative text-black font-sans text-xl font-normal tracking-tight opacity-0 text-center">
                  Join Waitlist
                </span>
              </button>
              {/* Gradient Logo - positioned below button, only overlapping portion visible on top */}
              <img
                ref={logoRef}
                src={FooterLogo}
                alt=""
                style={clipStyle}
                className="logo-fade-out w-[75px] h-[54px] -mt-4 pointer-events-none z-20 group-hover:translate-y-[-40px]"
              />
              {/* Text overlay - positioned absolutely to match button text position, appears on top of logo */}
              <span className="waitlist-text-white absolute top-2 left-0 right-0 flex items-center justify-center h-[38px] text-black font-sans text-2xl font-normal tracking-tight z-30 pointer-events-none">
                <span>Join</span>&nbsp;
                <span>Wait</span>
                <span>list</span>
              </span>
            </div>
          </div>

          </div>
        </div>
      </div>
    </section>
  );
}
