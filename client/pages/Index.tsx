import Navigation from "@/components/sections/Navigation";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Proof from "@/components/sections/Proof";
import HowItWorks from "@/components/sections/HowItWorks";
import KeyBenefits from "@/components/sections/KeyBenefits";
import WhatWereBuilding from "@/components/sections/WhatWereBuilding";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-black text-white font-manrope overflow-x-hidden">
      <Navigation />
      <Hero />
      <Problem />
      <Proof />
      <HowItWorks />
      <KeyBenefits />
      <WhatWereBuilding />
      {/* <CTA /> */}
      <Footer />
    </div>
  );
}
