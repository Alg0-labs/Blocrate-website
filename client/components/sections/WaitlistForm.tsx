import React from "react";

interface WaitlistFormProps {
  email: string;
  error: string | null;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onJoin: () => void;
}

export const WaitlistForm: React.FC<WaitlistFormProps> = ({
  email,
  error,
  onEmailChange,
  onJoin,
}) => (
  <div className="relative flex flex-col items-center w-full max-w-[500px] mx-auto">
    <div className="relative flex items-end w-full">
      <div className="relative flex-1 w-full">
        <input
          type="email"
          placeholder="Business email"
          value={email}
          onChange={onEmailChange}
          onKeyDown={(e) => e.key === "Enter" && onJoin()}
          className="text-white placeholder:text-white/50 focus:outline-none pl-10 sm:pl-12 pr-[130px] sm:pr-[140px] w-full h-11 sm:h-12 rounded-2xl sm:rounded-[30px] text-sm sm:text-base"
          style={{
            border: error ? "1px solid #ef4444" : "1px solid #363636",
            background: "#191A1B",
          }}
        />
        <svg
          className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/70"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      </div>
      <button
        type="button"
        onClick={onJoin}
        className="absolute right-0 bottom-0 inline-flex items-center justify-center font-medium text-sm uppercase hover:opacity-90 transition-opacity py-3 sm:py-3.5 px-4 sm:px-6 rounded-2xl sm:rounded-[28px] min-w-[120px] sm:min-w-0 shrink-0 z-10"
        style={{
          background: "#A3B0F6",
          color: "#000",
          border: "none",
          marginBottom: "-1px",
        }}
      >
        JOIN WAITLIST
      </button>
    </div>
    {error && (
      <p className="mt-2 text-center sm:text-left w-full text-red-400 text-sm">
        {error}
      </p>
    )}
  </div>
);
