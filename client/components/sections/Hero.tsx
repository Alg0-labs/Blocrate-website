import HeroImage from "@/assets/hero-section.svg";
import JoinWaitlistButton from "@/components/JoinWaitlistButton";

export default function Hero() {
  return (
    <section id="hero-section" className="relative w-full bg-black overflow-hidden">
      {/* Full width background hero image - extends from top and covers left/right */}
      <div className="relative w-full aspect-[1500/600] md:aspect-[1500/600] min-h-[400px] md:min-h-0">
        {/* Hide image on mobile, show on md and up */}
        <img
          src={HeroImage}
          alt="DeFi Characters"
          className="hidden md:block absolute inset-0 w-full h-full object-cover"
        />

        {/* Content container with max-width for text alignment */}
        <div className="absolute inset-0 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
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
            <div className="relative flex justify-center items-center md:absolute md:top-[85%] md:left-1/2 md:-translate-x-1/2 md:flex-none">
              <JoinWaitlistButton variant="with-logo" size="large" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
