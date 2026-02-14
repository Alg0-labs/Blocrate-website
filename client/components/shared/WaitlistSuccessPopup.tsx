import React from "react";

interface WaitlistSuccessPopupProps {
  show: boolean;
}

export const WaitlistSuccessPopup: React.FC<WaitlistSuccessPopupProps> = ({
  show,
}) => {
  if (!show) return null;

  return (
    <div
      className="waitlist-success-popup fixed top-0 left-0 right-0 z-[200] px-4 py-3 rounded-b-xl text-white text-sm font-medium text-center shadow-lg"
      style={{ background: "#22c55e" }}
    >
      You have been added to the waitlist
    </div>
  );
};
