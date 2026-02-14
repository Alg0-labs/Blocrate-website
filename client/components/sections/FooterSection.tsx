import React from "react";
import blocrateLogo from "@/assets/blocrate-logo.png";

export const FooterSection: React.FC = () => (
  <footer className="bg-biocrate-footer py-10 sm:py-12 lg:py-16 px-4 sm:px-6 md:px-10 lg:px-20">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-16">
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <img src={blocrateLogo} alt="Blocrate" className="h-8 sm:h-9 w-auto" />
          </div>
          <p
            className="text-biocrate-gray text-sm sm:text-base mb-3 sm:mb-4 max-w-sm"
            style={{ letterSpacing: "-0.32px", lineHeight: "120%" }}
          >
            Private, global crypto credit infrastructure.
          </p>
          <p
            className="text-biocrate-gray text-xs sm:text-sm"
            style={{
              letterSpacing: "-0.32px",
              lineHeight: "120%",
              marginTop: "124px",
            }}
          >
            © 2026 All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
);
