import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import heroSectionVid from "@/assets/hero-section-vid.mp4";
import heroGlass from "@/assets/Glass.png";
import { Navbar } from "@/components/layout/Navbar";

interface ComingSoonProps {
  title: string;
}

export default function ComingSoon({ title }: ComingSoonProps) {
  const [navOpen, setNavOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToWaitlist = () => {
    setNavOpen(false);
    navigate("/");
  };

  return (
    <section className="relative z-50 flex flex-col min-h-screen md:min-h-[100dvh] overflow-visible pt-[72px] sm:pt-[86px] lg:pt-[102px]">
      {/* Hero background */}
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
        onNavToggle={() => setNavOpen((o) => !o)}
        onJoinWaitlist={scrollToWaitlist}
        waitlistInView={false}
      />

      <div className="relative z-30 flex flex-1 min-h-0 items-center justify-center px-5 text-center">
        <div className="max-w-2xl flex flex-col gap-6">
          <h1
            className="font-inter font-bold uppercase leading-tight tracking-[-0.03em] text-white text-2xl sm:text-3xl md:text-4xl"
            style={{ lineHeight: "1.05" }}
          >
            {title} section will be available soon
          </h1>
          <p
            className="font-inter text-[#A6A9A8] text-base sm:text-lg leading-[140%]"
            style={{ letterSpacing: "-0.02em", fontWeight: 400 }}
          >
            We are preparing this page for you. Please check back later.
          </p>
          <Link
            to="/"
            className="font-inter mt-2 inline-flex items-center justify-center font-medium text-sm uppercase hover:opacity-90 transition-opacity py-3 sm:py-3.5 px-4 sm:px-6 rounded-2xl sm:rounded-[28px]"
            style={{ background: "#A3B0F6", color: "#000", border: "none" }}
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
