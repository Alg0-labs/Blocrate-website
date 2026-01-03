import { useEffect, useState } from "react";
import LogoImageSvg from "@/assets/blocrate-logo.svg";
import LogoImagePng from "@/assets/blocrate-logo.png";

// Detect if browser is Safari
const isSafari = () => {
  if (typeof window === "undefined") return false;
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
};

export default function Footer() {
  const [isSafariBrowser, setIsSafariBrowser] = useState(false);

  useEffect(() => {
    setIsSafariBrowser(isSafari());
  }, []);

  return (
    <footer className="relative px-4 sm:px-6 lg:px-8 py-12 overflow-hidden">
      {/* Footer gradient background */}
      <div className="absolute bottom-0 left-0 w-full h-[300px] pointer-events-none">
        <svg viewBox="0 0 1440 883" fill="none" className="w-full h-full">
          <defs>
            <filter id="blur3">
              <feGaussianBlur stdDeviation="200"/>
            </filter>
            <filter id="blur4">
              <feGaussianBlur stdDeviation="200"/>
            </filter>
          </defs>
          <path d="M557.968 557.459C493.071 559.025 429.107 553.904 375.649 546.899C321.556 539.911 277.335 531.058 250.897 520.042C224.459 509.027 215.455 495.774 201.456 482.065C187.108 468.281 167.985 453.781 168.268 437.16C168.201 420.464 188.11 401.464 236.702 400.081C284.658 398.715 361.012 415.059 416.065 422.864C471.403 430.577 505.441 429.752 546.522 431.353C587.889 432.861 635.6 436.646 661.35 445.066C687.385 453.394 690.825 466.373 702.683 482.838C714.477 499.136 734.404 519.012 711.628 533.114C688.566 547.307 622.801 555.727 557.968 557.459Z" fill="#F4FFA3" filter="url(#blur3)"/>
          <path d="M915.288 595.696C884.912 581.495 901.999 557.079 864.504 538.393C827.009 519.707 734.932 506.627 724.965 493.796C715.473 481.089 787.615 468.508 851.214 460.161C914.814 451.69 969.87 447.455 1023.98 444.091C1078.08 440.728 1131.24 438.486 1193.42 438.486C1256.07 438.486 1327.26 440.728 1364.28 451.317C1401.3 461.781 1404.15 480.591 1414.11 499.028C1424.08 517.465 1440.69 535.528 1414.11 547.362C1387.54 559.321 1317.29 564.802 1257.49 575.516C1198.16 586.229 1149.28 602.05 1086.63 608.029C1023.5 613.884 945.664 609.898 915.288 595.696Z" fill="#BFEA44" filter="url(#blur4)"/>
        </svg>
      </div>

      <div className="relative max-w-[1440px] mx-auto">
        <div className="border-t border-white/30 pt-6 pb-8 text-center">
          <p className="text-white text-base font-medium">
            © Copyright 2025, Blocrate
          </p>
        </div>
        
        {/* Large logo */}
        <div className="flex justify-center py-12">
          <img     
            src={isSafariBrowser ? LogoImagePng : LogoImageSvg} 
            alt="Blocrate" 
            className="max-w-[1322px] w-full h-auto opacity-80"
          />
        </div>
      </div>
    </footer>
  );
}

