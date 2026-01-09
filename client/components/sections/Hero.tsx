import Spline from "@splinetool/react-spline";
import JoinWaitlistButton from "@/components/JoinWaitlistButton";

const SPLINE_SCENE_URL =
  "https://prod.spline.design/94X8LGyghKjgdLfw/scene.splinecode";

export default function Hero() {
  return (
    <section
      id="hero-section"
      className="relative w-full h-screen bg-black overflow-hidden"
    >
      {/* Full viewport hero area - powered by Spline animation */}
      <div className="relative w-full h-full">
        {/* Spline animation - show on md and up to avoid heavy load on small devices */}
        <div className="hidden md:block absolute inset-0 w-full h-full z-0">
          <Spline scene={SPLINE_SCENE_URL} />
        </div>

        {/* Content container with max-width for text alignment */}
        <div className="absolute inset-0 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 z-10">
          <div className="relative w-full h-full flex items-center justify-center md:block">
            {/* Hero Text Overlays - hidden on mobile */}

            {/* TODO: replace with proper text */}

            {/* <div className="hidden md:block absolute left-[8%] top-[20%] max-w-[315px]">
              <h1 className="text-white text-[40px] font-semibold leading-[120%]">
                Private Credit Passports for DeFi
              </h1>
            </div>
            <div className="hidden md:block absolute right-[8%] top-[20%] max-w-[315px] text-right">
              <h1 className="text-white text-[40px] font-semibold leading-[120%]">
                Private Credit Passports for DeFi
              </h1>
            </div> */}

            {/* Join Waitlist Button - centered on mobile, positioned on desktop */}
            <div className="relative flex justify-center items-center md:absolute md:top-[85%] md:left-1/2 md:-translate-x-1/2 md:flex-none z-20">
              <JoinWaitlistButton variant="with-logo" size="large" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
