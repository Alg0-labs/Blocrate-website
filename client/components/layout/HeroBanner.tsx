import React from "react";

const BANNER_TEXT =
  "CREDIT RISK – CREDIT ROUTING – PRIVACY-LOCKED IDENTITY OFF BALANCE SHEET – API FIRST";

export const HeroBanner: React.FC = () => (
  <div className="hidden sm:flex absolute left-0 right-0 top-auto bottom-8 z-[60] h-12 sm:h-16 lg:h-[100px] items-center justify-center px-0">
    <div
      className="hero-banner-bar shadow-lg w-full h-full flex items-center justify-center px-4 sm:px-6"
      style={{ transform: "rotate(-1.294deg)" }}
    >
      <p
        className="uppercase text-center w-full whitespace-nowrap overflow-x-auto"
        style={{
          color: "#5C5C5C",
          fontFamily: '"Montserrat", sans-serif',
          fontOpticalSizing: "auto",
          fontWeight: 400,
          fontStyle: "normal",
          fontSize: "25px",
          lineHeight: "120%",
          letterSpacing: "-0.6px",
          wordSpacing: "0.9em",
        }}
      >
        {BANNER_TEXT}
      </p>
    </div>
  </div>
);
