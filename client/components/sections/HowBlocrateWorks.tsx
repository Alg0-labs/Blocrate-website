import React from "react";
import heroSectionSubPart from "@/assets/hero-section-sub-part.png";
import animation1 from "@/assets/Animation 1.mp4";
import animation2 from "@/assets/Animation 2.mp4";
import animation3 from "@/assets/Animation 3.mp4";
import { LazyVideo } from "@/components/shared/LazyVideo";

const LABEL_CLASS =
  "mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg uppercase tracking-wider";

const SECTIONS = [
  {
    id: "connect",
    label: "Connect Your Wallet",
    content: (
      <>
        Link your wallet securely to start building your credit profile.
        <br className="hidden sm:block" />
        <br className="hidden sm:block" />
        Your on-chain activity is analyzed to understand repayment behavior,
        usage patterns, and financial reliability not just collateral or net
        worth.
      </>
    ),
    video: animation2,
    order: "reverse",
  },
  {
    id: "verification",
    label: "Private Credit Verification",
    content: (
      <>
        Blocrate verifies creditworthiness using encrypted financial signals.
        <br className="hidden sm:block" />
        Personal data is never shared.
        <br className="hidden sm:block" />
        A credit score is generated, locked, and used by lenders while identity
        remains private unless a default occurs.
      </>
    ),
    video: animation3,
    order: "normal",
  },
  {
    id: "route",
    label: "Route the loans",
    content: (
      <>
        Borrowers, lenders, and platforms connect through a shared credit
        infrastructure.
        <br className="hidden sm:block" />
        <br className="hidden sm:block" />
        Blocrate is a neutral credit layer that helps crypto platforms assess
        risk and route credit without holding funds or issuing loans.
      </>
    ),
    video: animation1,
    order: "reverse",
  },
];

export const HowBlocrateWorks: React.FC = () => (
  <section className="relative z-0 bg-black py-10 sm:py-14 lg:py-16 px-4 sm:px-6 md:px-10 lg:px-20 overflow-hidden">
    <div className="pointer-events-none select-none absolute inset-x-0 top-0 flex justify-center z-0">
      <img
        src={heroSectionSubPart}
        alt=""
        className="w-full max-w-none h-[160px] sm:h-[200px] lg:h-[240px] object-cover"
      />
    </div>

    <div className="relative max-w-7xl mx-auto">
      <div className="text-center mb-10 sm:mb-14 lg:mb-16 relative z-10">
        <h2
          className="text-3xl sm:text-4xl md:text-[42px] lg:text-[52px] font-normal mb-3 sm:mb-5 leading-tight"
          style={{ letterSpacing: "-1.04px", lineHeight: "120%" }}
        >
          How Blocrate Works
        </h2>
        <p
          className="text-biocrate-gray text-sm sm:text-base max-w-[681px] mx-auto px-0"
          style={{ letterSpacing: "-0.32px", lineHeight: "120%" }}
        >
          We provide infrastructure that lets crypto platforms assess borrower
          risk, set credit limits, and route loans to third-party capital using
          privacy-locked identity and real-world enforcement, without holding
          funds or issuing loans.
        </p>
      </div>

      <div className="space-y-16 sm:space-y-20 lg:space-y-32 mt-12 sm:mt-16 lg:mt-24">
        {SECTIONS.map((section) => (
          <div
            key={section.id}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
          >
            {/* Video: left for reverse, right for normal */}
            <div
              className={`flex justify-center ${
                section.order === "reverse"
                  ? "order-2 lg:order-1"
                  : "order-2 lg:order-2"
              }`}
            >
              <LazyVideo
                src={section.video}
                loop
                muted
                playsInline
                className="w-full max-w-[550px] h-[180px] sm:h-[240px] lg:h-[300px] rounded-2xl object-contain"
              />
            </div>
            {/* Text: right for reverse, left for normal */}
            <div
              className={`order-1 ${
                section.order === "reverse"
                  ? "lg:order-2 text-center lg:text-left"
                  : "text-center lg:text-right lg:order-1"
              }`}
            >
              <p
                className={LABEL_CLASS}
                style={{
                  color: "#A6A9A8",
                  fontFamily: '"Helvetica Neue", sans-serif',
                  letterSpacing: "0.8px",
                }}
              >
                {section.label}
              </p>
              <h3
                className={`w-full max-w-[559px] mx-auto text-lg sm:text-xl lg:text-[28px] font-normal leading-snug ${
                  section.order === "reverse" ? "lg:mx-0" : "lg:ml-auto lg:mr-0"
                }`}
                style={{
                  color: "#FFF",
                  fontFamily: '"Helvetica Neue", sans-serif',
                  letterSpacing: "-0.56px",
                }}
              >
                {section.content}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
