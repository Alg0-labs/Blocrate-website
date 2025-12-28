import { useEffect, useRef, useState } from "react";
import FooterLogo from "@/assets/blocrate-footer-logo.svg";
import "@/styles/Hero.css";

interface JoinWaitlistButtonProps {
  variant?: "simple" | "with-logo";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  className?: string;
  showArrow?: boolean;
}

export default function JoinWaitlistButton({
  variant = "simple",
  size = "medium",
  onClick,
  className = "",
  showArrow = true,
}: JoinWaitlistButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const [clipStyle, setClipStyle] = useState<React.CSSProperties>({});

  // Size configurations
  const sizeConfig = {
    small: {
      padding: "px-6 py-2",
      textSize: "text-base",
      arrowSize: "w-[30px] h-[20px]",
      arrowLeft: "left-[60px]",
    },
    medium: {
      padding: "px-12 py-4",
      textSize: "text-2xl",
      arrowSize: "w-[41px] h-[27px]",
      arrowLeft: "left-[100px]",
    },
    large: {
      padding: "px-14 py-3",
      textSize: "text-xl",
      arrowSize: "w-[41px] h-[27px]",
      arrowLeft: "left-[100px]",
    },
  };

  const config = sizeConfig[size];

  // Logo animation logic (only for with-logo variant)
  useEffect(() => {
    if (variant !== "with-logo" || !buttonRef.current || !logoRef.current) return;

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
  }, [variant]);

  // Generate unique ID for gradient to avoid conflicts
  const gradientId = `paint1_linear_${Math.random().toString(36).substr(2, 9)}`;

  if (variant === "with-logo") {
    return (
      <div className={`group relative inline-flex flex-col items-center justify-start ${className}`}>
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
          onClick={onClick}
          className={`relative overflow-hidden ${config.padding} bg-white rounded-[15px] shadow-lg z-10 transition-all duration-300 border-0 outline-none focus:outline-none focus:ring-0 ${className}`}
          style={{ border: "none" }}
        >
          {/* Gradient background overlay - spreads from center on hover */}
          <div
            className="gradient-spread absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, #A4B0F5 0%, #3526A6 83.1731%, #E6F149 100%)",
            }}
          />
          {/* Invisible spacer to maintain button size */}
          <span
            className={`relative text-black font-sans ${config.textSize} font-normal tracking-tight opacity-0 text-center`}
          >
            Join Waitlist
          </span>
        </button>
        {/* Gradient Logo - positioned below button, only overlapping portion visible on top */}
        <img
          ref={logoRef}
          src={FooterLogo}
          alt=""
          style={clipStyle}
          className={`logo-fade-out ${size === 'small' ? 'w-[50px] h-[36px] -mt-2 group-hover:translate-y-[-30px]' : 'w-[75px] h-[54px] -mt-4 group-hover:translate-y-[-40px]'} pointer-events-none z-20`}
        />
        {/* Text overlay - positioned absolutely to match button text position, appears on top of logo */}
        <span className={`waitlist-text-white absolute ${size === 'small' ? 'top-1 h-[28px]' : 'top-2 h-[38px]'} left-0 right-0 flex items-center justify-center text-black font-sans ${config.textSize} font-normal tracking-tight z-30 pointer-events-none`}>
          <span>Join</span>&nbsp;
          <span className="wait-text-white">Wait</span>
          <span>list</span>
        </span>
      </div>
    );
  }

  // Simple variant
  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      className={`group relative inline-flex items-center justify-center ${config.padding} bg-white rounded-[15px] overflow-hidden hover:scale-105 transition-transform duration-300 ${className}`}
    >
      <div className="absolute inset-0 bg-white"></div>
      {showArrow && (
        <svg
          className={`absolute ${config.arrowLeft} bottom-0 ${config.arrowSize}`}
          viewBox="0 0 47 14"
          fill="none"
        >
          <path
            d="M2.79651 30.0923L23.5219 9.82699L29.4874 14.8354L43.7965 3.09229"
            stroke={`url(#${gradientId})`}
            strokeWidth="8"
            strokeMiterlimit="10"
          />
          <defs>
            <linearGradient
              id={gradientId}
              x1="-0.00919021"
              y1="16.483"
              x2="46.3492"
              y2="16.483"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#A4B0F5" />
              <stop offset="0.451923" stopColor="#3526A6" />
              <stop offset="1" stopColor="#E6F149" />
            </linearGradient>
          </defs>
        </svg>
      )}
      <span
        className={`relative z-10 text-black font-manrope ${config.textSize} font-normal tracking-tight`}
      >
        Join Waitlist
      </span>
    </button>
  );
}

