import React from "react";
import heroSectionVid from "@/assets/hero-section-vid.mp4";
import heroGlass from "@/assets/Glass.png";
import { WaitlistForm } from "./WaitlistForm";
import { Navbar } from "@/components/layout/Navbar";
import { HeroBanner } from "@/components/layout/HeroBanner";

interface HeroSectionProps {
  waitlistSectionRef: React.RefObject<HTMLDivElement | null>;
  waitlistInView: boolean;
  navOpen: boolean;
  onNavToggle: () => void;
  onScrollToWaitlist: () => void;
  email: string;
  emailError: string | null;
  isSubmitting?: boolean;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onJoinWaitlist: () => void | Promise<void>;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  waitlistSectionRef,
  waitlistInView,
  navOpen,
  onNavToggle,
  onScrollToWaitlist,
  email,
  emailError,
  isSubmitting = false,
  onEmailChange,
  onJoinWaitlist,
}) => (
  <>
    <section className="relative z-50 flex flex-col min-h-screen md:min-h-[100dvh] overflow-visible pt-[72px] sm:pt-[86px] lg:pt-[102px]">
      <video
        src={heroSectionVid}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-90"
      />
      <div className="absolute inset-0 z-[1] pointer-events-none glass-backdrop">
        <img
          src={heroGlass}
          alt=""
          className="w-full h-full object-cover opacity-90 mix-blend-soft-light"
        />
      </div>
      <div className="absolute inset-0 bg-black/30 z-[2]" />

      <Navbar
        navOpen={navOpen}
        onNavToggle={onNavToggle}
        onJoinWaitlist={onScrollToWaitlist}
        waitlistInView={waitlistInView}
      />

      <div
        ref={waitlistSectionRef}
        id="waitlist-section"
        className="relative z-30 flex flex-1 min-h-0 items-center justify-center px-4 sm:px-6 md:px-10 lg:px-20"
      >
        <div className="flex w-full max-w-[791px] flex-col items-center text-center">
          <h1
            className="mb-4 sm:mb-6 lg:mb-8 text-center uppercase text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-semibold leading-tight sm:leading-[1.1] lg:leading-[58px] tracking-tight"
            style={{
              color: "#FFF",
              fontFamily: "Inter, sans-serif",
              letterSpacing: "-0.03em",
            }}
          >
            CREDIT INFRASTRUCTURE
            <br />
            <span style={{ color: "#E6F149" }}>FOR CRYPTO</span>
          </h1>

          <p
            className="mb-8 sm:mb-10 lg:mb-12 text-center text-sm sm:text-base lg:text-xl text-white max-w-[631px] leading-snug"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            We help crypto platforms assess credit risk and route loans.
          </p>

          <WaitlistForm
            email={email}
            error={emailError}
            isSubmitting={isSubmitting}
            onEmailChange={onEmailChange}
            onJoin={onJoinWaitlist}
          />
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[600px] lg:w-[800px] h-[200px] sm:h-[300px] lg:h-[400px] bg-purple-600/30 rounded-full blur-3xl z-[1]" />

      <HeroBanner />
    </section>
  </>
);
