import HeroImage from "@/assets/hero-section.svg";

export default function Hero() {
  return (
    <section className="relative min-h-screen px-4 sm:px-6 lg:px-8 pt-24 pb-24 overflow-hidden">
      {/* Hero Image with Characters - Covering the whole section */}
      {/* TODO: Later replace this with spline animation*/}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={HeroImage} 
          alt="DeFi Characters" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[650px] opacity-60">
          <div className="absolute top-[175px] left-0 w-[1428px] h-[241px]">
            <svg viewBox="0 0 1440 883" fill="none" className="w-full h-full">
              <defs>
                <filter id="blur1">
                  <feGaussianBlur stdDeviation="200"/>
                </filter>
                <filter id="blur2">
                  <feGaussianBlur stdDeviation="200"/>
                </filter>
              </defs>
              <path d="M557.968 557.459C493.071 559.025 429.107 553.904 375.649 546.899C321.556 539.911 277.335 531.058 250.897 520.042C224.459 509.027 215.455 495.774 201.456 482.065C187.108 468.281 167.985 453.781 168.268 437.16C168.201 420.464 188.11 401.464 236.702 400.081C284.658 398.715 361.012 415.059 416.065 422.864C471.403 430.577 505.441 429.752 546.522 431.353C587.889 432.861 635.6 436.646 661.35 445.066C687.385 453.394 690.825 466.373 702.683 482.838C714.477 499.136 734.404 519.012 711.628 533.114C688.566 547.307 622.801 555.727 557.968 557.459Z" fill="#F4FFA3" filter="url(#blur1)"/>
              <path d="M915.288 595.696C884.912 581.495 901.999 557.079 864.504 538.393C827.009 519.707 734.932 506.627 724.965 493.796C715.473 481.089 787.615 468.508 851.214 460.161C914.814 451.69 969.87 447.455 1023.98 444.091C1078.08 440.728 1131.24 438.486 1193.42 438.486C1256.07 438.486 1327.26 440.728 1364.28 451.317C1401.3 461.781 1404.15 480.591 1414.11 499.028C1424.08 517.465 1440.69 535.528 1414.11 547.362C1387.54 559.321 1317.29 564.802 1257.49 575.516C1198.16 586.229 1149.28 602.05 1086.63 608.029C1023.5 613.884 945.664 609.898 915.288 595.696Z" fill="#BFEA44" filter="url(#blur2)"/>
            </svg>
          </div>
        </div>
      </div>

      <div className="relative max-w-[1440px] mx-auto pt-12">
        {/* Hero Image with Characters */}
        <div className="relative mb-12">
          <div className="relative w-full aspect-[1440/883]">
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
        </div>

        {/* Join Waitlist Button */}
        <div className="flex justify-center">
          <button className="group relative inline-flex items-center justify-center px-12 py-4 bg-white rounded-[15px] overflow-hidden hover:scale-105 transition-transform duration-300">
            <div className="absolute inset-0 bg-white"></div>
            <svg className="absolute left-[100px] bottom-0 w-[41px] h-[27px]" viewBox="0 0 47 14" fill="none">
              <path d="M2.79651 30.0923L23.5219 9.82699L29.4874 14.8354L43.7965 3.09229" stroke="url(#paint0_linear)" strokeWidth="8" strokeMiterlimit="10"/>
              <defs>
                <linearGradient id="paint0_linear" x1="-0.00919021" y1="16.483" x2="46.3492" y2="16.483" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#A4B0F5"/>
                  <stop offset="0.451923" stopColor="#3526A6"/>
                  <stop offset="1" stopColor="#E6F149"/>
                </linearGradient>
              </defs>
            </svg>
            <span className="relative z-10 text-black font-poppins text-2xl font-normal tracking-tight">Join Waitlist</span>
          </button>
        </div>
      </div>
    </section>
  );
}

