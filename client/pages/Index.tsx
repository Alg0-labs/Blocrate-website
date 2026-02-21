import React, { useRef, useState } from "react";
import { useWaitlist } from "@/hooks/use-waitlist";
import { useScrollPastHero } from "@/hooks/use-scroll-past-hero";
import { WaitlistSuccessPopup } from "@/components/shared/WaitlistSuccessPopup";
import { VideoPreloader } from "@/components/shared/VideoPreloader";
import { HeroSection } from "@/components/sections/HeroSection";
import { HowBlocrateWorks } from "@/components/sections/HowBlocrateWorks";
import { BuiltForCreditPlatforms } from "@/components/sections/BuiltForCreditPlatforms";
import { ForBuilders } from "@/components/sections/ForBuilders";
import { FooterSection } from "@/components/sections/FooterSection";

export default function Index() {
  const [navOpen, setNavOpen] = useState(false);
  const waitlistSectionRef = useRef<HTMLDivElement | null>(null);
  const hasScrolledPastHero = useScrollPastHero();

  const {
    email,
    showSuccess,
    error: emailError,
    isSubmitting,
    handleEmailChange,
    handleJoin: handleJoinWaitlist,
  } = useWaitlist();

  const scrollToWaitlist = () => {
    setNavOpen(false);
    waitlistSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <VideoPreloader>
    <div className="min-h-screen bg-biocrate-dark text-white overflow-x-hidden">
      <WaitlistSuccessPopup show={showSuccess} />

      <HeroSection
        waitlistSectionRef={waitlistSectionRef}
        waitlistInView={!hasScrolledPastHero}
        navOpen={navOpen}
        onNavToggle={() => setNavOpen((o) => !o)}
        onScrollToWaitlist={scrollToWaitlist}
        email={email}
        emailError={emailError}
        isSubmitting={isSubmitting}
        onEmailChange={handleEmailChange}
        onJoinWaitlist={handleJoinWaitlist}
      />

      <HowBlocrateWorks />

      <BuiltForCreditPlatforms />

      <ForBuilders />

      <FooterSection />
    </div>
    </VideoPreloader>
  );
}
