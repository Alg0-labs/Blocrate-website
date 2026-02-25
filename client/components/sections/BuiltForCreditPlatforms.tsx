import React from "react";
import mobileMockupVid from "@/assets/mobile-mockup.mp4";

export const BuiltForCreditPlatforms: React.FC = () => (
  <section className="relative bg-black py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-20">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-10 sm:mb-14 lg:mb-20">
        <h2
          className="text-3xl sm:text-4xl md:text-[42px] lg:text-[52px] font-normal mb-6 sm:mb-8 lg:mb-12 leading-tight"
          style={{ letterSpacing: "-1.04px", lineHeight: "120%" }}
        >
          Built for Credit Platforms
        </h2>
        <p
          className="text-biocrate-gray text-sm sm:text-base max-w-[681px] mx-auto"
          style={{ letterSpacing: "-0.32px", lineHeight: "120%" }}
        >
          Blocrate is infrastructure for platforms that want to offer credit
          without becoming lenders.
          <br className="hidden sm:block" />
          We power underwriting, privacy-preserving verification, and capital
          routing for the next generation of crypto-native credit products.
        </p>
      </div>

      <div className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen h-[50vh] sm:h-[60vh] lg:h-screen mb-10 sm:mb-14 lg:mb-16 overflow-hidden flex items-center justify-center bg-black">
        <video
          src={mobileMockupVid}
          autoPlay
          muted
          playsInline
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  </section>
);
