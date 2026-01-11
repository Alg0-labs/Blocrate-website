import { useEffect, useRef, useState } from "react";
import FooterLogo from "@/assets/blocrate-footer-logo.svg";
import "@/styles/Hero.css";
import WaitlistDialog from "@/components/WaitlistDialog";

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
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [textMarginRight, setTextMarginRight] = useState<string>('0px');

  // Size configurations
  const sizeConfig = {
    small: {
      padding: "px-5 py-1.5",
      textSize: "text-sm",
      arrowSize: "w-[30px] h-[20px]",
      arrowLeft: "left-[60px]",
    },
    medium: {
      padding: "px-10 py-3",
      textSize: "text-xl",
      arrowSize: "w-[41px] h-[27px]",
      arrowLeft: "left-[100px]",
    },
    large: {
      padding: "px-10 py-2",
      textSize: "text-base",
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

  const handleButtonClick = () => {
    setIsDialogOpen(true);
    onClick?.();
  };

  if (variant === "with-logo") {
    return (
      <>
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
          onClick={handleButtonClick}
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
            className={`relative text-black font-manrope ${config.textSize} font-normal tracking-tight opacity-0 text-center`}
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
          className={`logo-fade-out ${size === 'small' ? 'w-[40px] h-[29px] -mt-1.5 group-hover:translate-y-[-25px]' : 'w-[50px] h-[36px] -mt-2.5 group-hover:translate-y-[-30px]'} pointer-events-none z-20`}
        />
        {/* Text overlay - positioned absolutely to match button text position, appears on top of logo */}
        <span className={`waitlist-text-white absolute ${size === 'small' ? 'top-1 h-[24px]' : 'top-1 h-[28px]'} left-0 right-0 flex items-center justify-center text-black font-manrope ${config.textSize} font-normal tracking-tight z-30 pointer-events-none`}>
          <span>Join</span>&nbsp;
          <span className="wait-text-white">Wait</span>
          <span>list</span>
        </span>
      </div>
      <WaitlistDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
      </>
    );
  }

  // Calculate text margin to avoid arrow overlap (simple variant only)
  useEffect(() => {
    if (variant === "simple" && showArrow && buttonRef.current) {
      const updateMargin = () => {
        if (buttonRef.current) {
          const buttonHeight = buttonRef.current.offsetHeight;
          // Arrow is square, so width equals height
          setTextMarginRight(`${buttonHeight}px`);
        }
      };
      
      updateMargin();
      window.addEventListener('resize', updateMargin);
      
      return () => {
        window.removeEventListener('resize', updateMargin);
      };
    }
  }, [variant, showArrow]);

  // Simple variant with sliding purple fill on hover
  return (
    <>
      <style>{`
        .early-access-btn {
          position: relative;
          overflow: hidden;
        }
        .early-access-btn::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #A4B0F5 0%, #3526A6 83.1731%, #E6F149 100%);
          transform: translateX(100%);
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 0;
        }
        .early-access-btn:hover::before {
          transform: translateX(0);
        }
      `}</style>
      <button
        ref={buttonRef}
        onClick={handleButtonClick}
        className={`early-access-btn group relative inline-flex items-center justify-end pl-10 py-4 bg-white rounded-[15px] overflow-hidden ${className}`}
      >
        {/* Text - changes from dark to white on hover */}
        <span
          className={`relative z-10 font-sans ${config.textSize} font-bold tracking-tight text-gray-900 transition-colors duration-300 group-hover:text-white whitespace-nowrap pl-4`}
          style={{ marginRight: showArrow ? `calc(${textMarginRight} + 1rem)` : '1rem' }}
        >
          Early Access
        </span>
        
        {/* Gradient arrow box - integrated into button, extends to edges */}
        {showArrow && (
          <div className="absolute right-0 top-0 bottom-0 h-full w-auto aspect-square flex-shrink-0 z-10" style={{ borderTopRightRadius: '15px', borderBottomRightRadius: '15px', overflow: 'hidden' }}>
            <svg
              className="w-full h-full"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id={`arrow-gradient-${gradientId}`} x1="0%" y1="0%" x2="100%" y2="100%" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#A4B0F5" />
                  <stop offset="83.1731%" stopColor="#3526A6" />
                  <stop offset="100%" stopColor="#E6F149" />
                </linearGradient>
              </defs>
              <rect x="0" y="0" width="32" height="32" rx="4" fill={`url(#arrow-gradient-${gradientId})`} />
              <path
                d="M11 21L21 11M21 11H15M21 11V17"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}
      </button>
      <WaitlistDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </>
  );
}

