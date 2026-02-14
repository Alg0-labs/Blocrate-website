import React from "react";

const FEATURES = [
  "Simple APIs for risk and routing",
  "Privacy-first architecture with ZK",
  "Deployable smart credit contracts",
  "Audited security first codebase",
];

export const ForBuilders: React.FC = () => (
  <section className="relative bg-black py-8 sm:py-10 lg:py-16 px-4 sm:px-6 md:px-10 lg:px-20 overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="text-left order-1">
          <h2
            className="mb-3 sm:mb-4"
            style={{
              color: "#FFF",
              fontFamily: '"Inter 28pt", Inter, sans-serif',
              fontSize: "52px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "120%",
              letterSpacing: "-1.04px",
            }}
          >
            For Builders. By Builders.
          </h2>
          <p
            className="mb-6 sm:mb-8 lg:mb-10"
            style={{
              color: "#A6A9A8",
              textAlign: "left",
              fontFamily: '"Inter 28pt", Inter, sans-serif',
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "120%",
              letterSpacing: "-0.32px",
            }}
          >
            API-first credit routing infrastructure designed for crypto platforms.
          </p>

          <ul className="list-disc list-inside space-y-3 sm:space-y-4 mb-8 sm:mb-12 pl-2 text-left">
            {FEATURES.map((feature) => (
              <li
                key={feature}
                className="text-lg sm:text-xl lg:text-[28px] font-normal leading-[120%]"
                style={{ letterSpacing: "-0.56px" }}
              >
                {feature}
              </li>
            ))}
          </ul>

          <p
            className="text-lg sm:text-xl lg:text-[28px] font-normal leading-[120%] mb-8 sm:mb-12"
            style={{ letterSpacing: "-0.56px" }}
          >
            Blocrate is modular, scalable, and designed to keep you outside the
            regulatory perimeter.
          </p>

          <button
            className="bg-biocrate-purple-light text-biocrate-dark rounded-full font-semibold text-sm uppercase hover:bg-opacity-90 transition-colors"
            style={{
              display: "flex",
              width: "174px",
              height: "50px",
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "Inter, sans-serif",
              lineHeight: "100%",
            }}
          >
            Read Docs
          </button>
        </div>

        <div className="relative flex items-center justify-center order-2 min-h-[280px] sm:min-h-[340px] xl:min-h-0">
          <div
            className="absolute w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] lg:w-[418px] lg:h-[418px] rounded-full blur-[60px] sm:blur-[82px]"
            style={{
              background: "linear-gradient(180deg, #E6F24A 0%, #9747FF 100%)",
            }}
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/77872208a21cbd30ee5a2da2da3359f99ce20b6b?width=1135"
            alt="Bitcoin"
            className="relative w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] lg:w-[567px] lg:h-[567px] transform rotate-[12deg] object-contain"
          />
        </div>
      </div>
    </div>
  </section>
);
