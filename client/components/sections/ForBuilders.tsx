import React, { useState } from "react";
import ellipseBg from "@/assets/Ellipse-2.png";
import glassUI1 from "@/assets/glass-ui-1.png";

// ─── Paypass Icon ───────────────────────────────────────────────────────────────
function PaypassIcon() {
  return (
    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#paypassClip)">
        <path d="M2.73582 7.55875C2.99048 7.86599 3.18147 8.23467 3.3088 8.60335C3.43613 8.97203 3.4998 9.40216 3.4998 9.83229C3.4998 10.2624 3.43613 10.6925 3.3088 11.0612C3.18147 11.4299 2.99048 11.7986 2.73582 12.1058C2.41749 12.536 2.48116 13.1504 2.92681 13.4577C3.37247 13.7649 4.00912 13.7035 4.32744 13.2733C4.70943 12.7817 4.96409 12.2902 5.21875 11.6757C5.47341 11.0612 5.53708 10.4468 5.53708 9.83229C5.53708 9.21782 5.40975 8.60335 5.21875 7.98888C5.02776 7.43586 4.70943 6.88283 4.32744 6.39126C4.00912 5.96113 3.37247 5.89968 2.92681 6.20692C2.48116 6.51415 2.41749 7.12862 2.73582 7.55875Z" fill="white" />
        <path d="M6.23739 5.77678C7.00137 6.94428 7.44703 8.35756 7.44703 9.83229C7.44703 11.307 7.00137 12.7203 6.23739 13.8878C5.91907 14.3179 6.11006 14.9324 6.55572 15.2396C7.06504 15.5469 7.63802 15.3625 7.95635 14.9324C8.91133 13.4577 9.48431 11.7371 9.48431 9.83229C9.48431 7.98888 8.91133 6.20691 7.95635 4.73218C7.63802 4.30205 7.00137 4.11771 6.55572 4.42495C6.11006 4.73218 5.91907 5.28521 6.23739 5.77678Z" fill="white" />
        <path d="M9.92996 3.93337C11.0123 5.65389 11.5853 7.68164 11.5853 9.83229C11.5853 11.9829 10.9486 14.0107 9.92996 15.7312C9.6753 16.2228 9.80263 16.7758 10.3119 17.083C10.8213 17.3288 11.3943 17.2059 11.7126 16.7144C12.9859 14.6866 13.6862 12.3516 13.6862 9.83229C13.6862 7.31296 12.9859 4.97797 11.7126 2.95022C11.4579 2.45865 10.8213 2.33575 10.3119 2.58154C9.80263 2.88877 9.6753 3.4418 9.92996 3.93337Z" fill="white" />
        <path d="M13.6225 2.08996C14.9595 4.3635 15.7871 7.00573 15.7871 9.83229C15.7871 12.6589 15.0231 15.3011 13.6225 17.5746C13.3678 18.0662 13.4952 18.6192 14.0045 18.9265C14.5138 19.1722 15.0868 19.0493 15.4051 18.5578C16.9331 15.977 17.8244 13.0275 17.8244 9.83229C17.8244 6.63704 16.9331 3.68759 15.4051 1.10681C15.1505 0.615234 14.5138 0.49234 14.0045 0.738128C13.4952 0.983917 13.3678 1.59839 13.6225 2.08996Z" fill="white" />
      </g>
      <defs>
        <clipPath id="paypassClip">
          <rect width="20.3728" height="19.663" rx="9.83152" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

// ─── Paypeople Card (standalone) ────────────────────────────────────────────────
function PaypeopleCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-[20px] p-4 md:p-5 ${className}`.trim()}
      style={{
        background: "linear-gradient(140deg, rgba(63,63,63,0.90) 1.44%, rgba(63,63,63,0.90) 98.22%)",
        boxShadow: "0 4px 24px -1px rgba(0,0,0,0.08)",
        backdropFilter: "blur(4px)",
      }}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <PaypeopleLogo />
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-white font-semibold text-[13px] font-plus-jakarta">
                Paypeople Inc
              </span>
              <span className="text-[#C2C2C2] text-[11px] font-plus-jakarta">·</span>
              <span className="text-[#C2C2C2] text-[12px] font-plus-jakarta">PYPL</span>
            </div>
            <div className="text-[#C2C2C2] text-[12px] font-plus-jakarta">
              Multinational Financial
            </div>
          </div>
        </div>
        <GreenChart />
      </div>

      <div
        className="w-full mb-3"
        style={{
          height: "1px",
          background:
            "repeating-linear-gradient(to right, #676B64 0, #676B64 5px, transparent 5px, transparent 10px)",
        }}
      />

      <div className="flex justify-between items-center">
        <div>
          <div className="text-[#C2C2C2] text-[12px] font-plus-jakarta mb-0.5">Portfolio</div>
          <div className="text-white font-bold text-[13px] font-plus-jakarta">$84.92</div>
        </div>
        <div className="text-center">
          <div className="text-[#C2C2C2] text-[12px] font-plus-jakarta mb-0.5">Yield Value</div>
          <div className="text-white font-bold text-[13px] font-plus-jakarta">+1.78%</div>
        </div>
        <div className="text-right">
          <div className="text-[#C2C2C2] text-[12px] font-plus-jakarta mb-0.5">Profits</div>
          <div className="text-white font-bold text-[13px] font-plus-jakarta">$120.45</div>
        </div>
      </div>
    </div>
  );
}

// ─── Phone Mockup ───────────────────────────────────────────────────────────────
function PhoneMockup() {
  return (
    <div className="relative flex-shrink-0 w-[240px] md:w-[310px] lg:w-[360px] -mt-4 md:-mt-8">
      <div
        className="relative rounded-[40px] md:rounded-[50px] lg:rounded-[60px] overflow-hidden"
        style={{
          background: "rgba(30, 20, 50, 0.95)",
          boxShadow: "0 30px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05)",
        }}
      >
        {/* Glass blur overlay */}
        <div
          className="absolute inset-0 rounded-[40px] md:rounded-[50px] lg:rounded-[60px]"
          style={{
            background: "rgba(16,16,16,0.10)",
            backdropFilter: "blur(8px)",
          }}
        />
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/1049acd7f934f4737c9a5886d8140225f4c67771?width=1134"
          alt="Blocrate app UI"
          className="relative z-10 w-full blur-sm"
          style={{ display: "block" }}
        />
      </div>
    </div>
  );
}

// ─── Green Chart SVG ────────────────────────────────────────────────────────────
function GreenChart() {
  return (
    <svg width="64" height="33" viewBox="0 0 64 33" fill="none">
      <mask id="greenChartMask" maskUnits="userSpaceOnUse" x="0" y="0" width="64" height="33">
        <rect width="63.1304" height="32.6292" fill="white" />
      </mask>
      <g mask="url(#greenChartMask)">
        <path
          opacity="0.28"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.2818 35.2755C18.162 35.2877 18.0404 35.2709 17.9321 35.2271L5.67485 34.9597L2.74107 34.5471C2.55445 34.6527 2.31265 34.6666 2.10975 34.5835L-0.709128 34.9597L-7.28676 36.055C-7.37183 36.1054 -7.47085 36.1372 -7.57475 36.1478C-7.78891 36.1702 -8.00161 36.098 -8.13368 35.9577C-8.33231 35.7438 -4.72892 16.7969 -4.45937 16.637L2.32609 12.6201C2.5136 12.5114 2.75838 12.4955 2.96449 12.5783L5.88764 13.7809L9.15056 11.9273C9.33571 11.8212 9.57617 11.8067 9.77833 11.8886L16.1935 14.4899L18.6521 14.2424L24.4757 6.78066C24.5656 6.66657 24.7082 6.5872 24.8708 6.56102C25.0337 6.53371 25.2032 6.56131 25.341 6.63784L28.831 8.59921L30.0794 7.59463C30.2527 7.45721 30.5071 7.41397 30.7327 7.48367L41.0811 10.7159L46.6713 8.87006C46.7965 8.82795 46.9352 8.82084 47.0658 8.85014L52.5198 10.0471L58.2555 7.71298C58.3188 7.68766 58.3869 7.67116 58.4569 7.66405L64.6707 7.037C64.8291 7.02078 64.9891 7.05549 65.1168 7.1343L67.8364 8.82397C67.9623 8.90107 68.0444 9.01686 68.0636 9.14489C68.0827 9.27263 68.0373 9.40151 67.9378 9.50109C67.7307 9.71134 70.4872 35.7088 70.2247 35.5463L66.6781 31.4677L64.5501 35.5463L56.0381 39.0423C55.9012 39.1006 49.8009 34.9969 49.6541 34.9636V39.0423L45.3981 37.877C45.2506 37.9265 37.0281 36.7566 36.8862 36.7116H34.7582L33.3395 37.2943C33.1324 37.4627 31.4548 36.2641 31.2115 36.129L24.8276 35.5463L21.6561 34.7579"
          fill="url(#greenGrad)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M-4.02643 17.5019C-4.24067 17.525 -4.45359 17.4527 -4.5854 17.3119C-4.68065 17.2094 -4.72087 17.0794 -4.69677 16.9523C-4.67266 16.8248 -4.58633 16.711 -4.45772 16.637L2.32776 12.6201C2.51525 12.5114 2.76003 12.4955 2.96613 12.5783L5.88931 13.7809L9.15223 11.9273C9.33738 11.8212 9.57784 11.8067 9.78 11.8886L16.1952 14.4899L18.6537 14.2424L24.4773 6.78066C24.5673 6.66657 24.7099 6.5872 24.8724 6.56102C25.0354 6.53371 25.2049 6.56131 25.3427 6.63784L28.8326 8.59921L30.0811 7.59463C30.2544 7.45721 30.5087 7.41397 30.7343 7.48367L41.0828 10.7159L46.673 8.87006C46.7982 8.82795 46.9368 8.82084 47.0674 8.85014L52.5215 10.0471L58.2571 7.71298C58.3204 7.68766 58.3885 7.67116 58.4585 7.66405L64.6723 7.037C64.8307 7.02078 64.9907 7.05549 65.1185 7.1343L67.838 8.82397C67.9639 8.90107 68.0461 9.01686 68.0652 9.14489C68.0844 9.27263 68.0389 9.40151 67.9395 9.50109C67.7295 9.71248 67.3539 9.75003 67.0883 9.58616L64.5659 8.0211L58.7068 8.61258L52.8555 10.9939C52.7197 11.0496 52.5637 11.0624 52.4171 11.03L46.9376 9.82742L41.3133 11.6849C41.1681 11.7339 41.0057 11.7353 40.8593 11.6889L30.6556 8.50163L29.3263 9.57022C29.1157 9.73893 28.7902 9.7634 28.546 9.62883L25.1625 7.72721L19.5276 14.9482C19.4287 15.074 19.2667 15.1567 19.0857 15.1744L16.1541 15.4703C16.0342 15.4825 15.9127 15.4657 15.8043 15.4219L9.55089 12.8867L6.28796 14.7414C6.10134 14.8472 5.85954 14.8611 5.65664 14.7781L2.73988 13.5777L-3.73986 17.414C-3.82492 17.4627 -3.92345 17.4928 -4.02643 17.5022V17.5019Z"
          fill="#29B278"
        />
      </g>
      <defs>
        <linearGradient id="greenGrad" x1="-8" y1="6" x2="-8" y2="39" gradientUnits="userSpaceOnUse">
          <stop stopColor="#29B278" />
          <stop offset="0.46" stopColor="#29B278" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// ─── Yellow Chart SVG ────────────────────────────────────────────────────────────
function YellowChart() {
  return (
    <svg width="70" height="37" viewBox="0 0 70 37" fill="none">
      <mask id="yellowChartMask" maskUnits="userSpaceOnUse" x="0" y="0" width="70" height="37">
        <rect width="69.9821" height="36.1705" fill="white" />
      </mask>
      <g mask="url(#yellowChartMask)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M-4.4627 19.4009C-4.70019 19.4265 -4.93622 19.3464 -5.08233 19.1902C-5.18792 19.0767 -5.2325 18.9326 -5.2058 18.7916C-5.17906 18.6503 -5.08337 18.5242 -4.9408 18.4422L2.58112 13.9893C2.78896 13.8688 3.06031 13.8511 3.28878 13.9429L6.52921 15.276L10.1463 13.2213C10.3515 13.1037 10.6181 13.0876 10.8422 13.1784L17.9536 16.062L20.679 15.7876L27.1346 7.51606C27.2343 7.38959 27.3924 7.3016 27.5726 7.27258C27.7533 7.24231 27.9412 7.2729 28.094 7.35774L31.9626 9.53198L33.3465 8.41837C33.5387 8.26604 33.8206 8.2181 34.0707 8.29537L45.5423 11.8784L51.7392 9.83222C51.878 9.78555 52.0317 9.77766 52.1764 9.81015L58.2224 11.137L64.5806 8.54957C64.6508 8.5215 64.7262 8.5032 64.8038 8.49532L71.692 7.80022C71.8677 7.78224 72.045 7.82072 72.1866 7.90808L75.2014 9.78113C75.3409 9.8666 75.432 9.99496 75.4532 10.1369C75.4744 10.2785 75.4241 10.4214 75.3138 10.5317C75.081 10.7661 74.6647 10.8077 74.3703 10.626L71.5741 8.89112L65.0791 9.5468L58.5927 12.1866C58.4422 12.2484 58.2693 12.2626 58.1068 12.2266L52.0326 10.8935L45.7978 12.9526C45.6369 13.0069 45.4569 13.0084 45.2946 12.957L33.9834 9.4238L32.5099 10.6084C32.2764 10.7954 31.9156 10.8225 31.6449 10.6733L27.8942 8.56533L21.6477 16.57C21.538 16.7094 21.3584 16.8012 21.1579 16.8208L17.908 17.1488C17.7752 17.1623 17.6405 17.1437 17.5203 17.0952L10.5882 14.2848L6.97113 16.3408C6.76426 16.4581 6.49622 16.4735 6.2713 16.3814L3.03797 15.0508L-4.14503 19.3035C-4.23931 19.3574 -4.34855 19.3908 -4.4627 19.4012V19.4009Z"
          fill="#E6F149"
        />
      </g>
    </svg>
  );
}

// ─── Paypeople Logo ──────────────────────────────────────────────────────────────
function PaypeopleLogo() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 28C21.7321 28 28 21.732 28 14C28 6.26802 21.7321 0 14 0C6.26801 0 0 6.26802 0 14C0 21.732 6.26801 28 14 28ZM16.1609 10.8168C17.3543 9.62337 17.3543 7.6885 16.1609 6.49507C14.9675 5.30165 13.0326 5.30165 11.8392 6.49507C10.6458 7.6885 10.6458 9.62337 11.8392 10.8168L14 12.9776L16.1609 10.8168ZM17.1832 16.1609C18.3767 17.3543 20.3115 17.3543 21.505 16.1609C22.6983 14.9675 22.6983 13.0326 21.505 11.8392C20.3115 10.6458 18.3767 10.6458 17.1832 11.8392L15.0224 14.0001L17.1832 16.1609ZM16.1609 21.505C17.3543 20.3115 17.3543 18.3767 16.1609 17.1832L14 15.0224L11.8392 17.1832C10.6458 18.3767 10.6458 20.3115 11.8392 21.505C13.0326 22.6984 14.9675 22.6984 16.1609 21.505ZM6.49505 16.1609C5.30166 14.9675 5.30166 13.0326 6.49505 11.8392C7.6885 10.6458 9.62337 10.6458 10.8168 11.8392L12.9776 14.0001L10.8168 16.1609C9.62337 17.3543 7.6885 17.3543 6.49505 16.1609Z"
        fill="#7F57F1"
      />
    </svg>
  );
}

// ─── Bitcoin Logo ────────────────────────────────────────────────────────────────
function BitcoinLogo() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.5195 31.0389C24.0906 31.0389 31.0389 24.0906 31.0389 15.5194C31.0389 6.9483 24.0906 0 15.5195 0C6.94828 0 0 6.9483 0 15.5194C0 24.0906 6.94828 31.0389 15.5195 31.0389ZM20.361 7.22962C20.5966 6.3925 19.7843 5.89749 19.0424 6.42606L8.68555 13.8042C7.88094 14.3774 8.0075 15.5194 8.87566 15.5194H11.6029V15.4983H16.9181L12.5872 17.0265L10.6779 23.8093C10.4423 24.6464 11.2546 25.1414 11.9965 24.6128L22.3534 17.2347C23.158 16.6615 23.0313 15.5194 22.1632 15.5194H18.0275L20.361 7.22962Z"
        fill="#E6F149"
      />
    </svg>
  );
}

// ─── Bitcoin Card (standalone, e.g. for mobile) ────────────────────────────────────
function BitcoinCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-[20px] p-4 md:p-5 ${className}`.trim()}
      style={{
        background: "#6D4BE8",
        boxShadow: "0 4px 24px -1px rgba(0,0,0,0.08)",
        backdropFilter: "blur(4px)",
      }}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <BitcoinLogo />
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-brand-yellow font-semibold text-[13px] font-plus-jakarta">
                Bitcoin Inc
              </span>
              <span className="text-white/70 text-[11px] font-plus-jakarta">·</span>
              <span className="text-white/70 text-[12px] font-plus-jakarta">BTC</span>
            </div>
            <div className="text-white/60 text-[12px] font-plus-jakarta">
              Multinational Financial
            </div>
          </div>
        </div>
        <YellowChart />
      </div>
      <div
        className="w-full mb-3"
        style={{
          height: "1px",
          background:
            "repeating-linear-gradient(to right, rgba(255,255,255,0.6) 0, rgba(255,255,255,0.6) 5px, transparent 5px, transparent 10px)",
        }}
      />
      <div className="flex justify-between items-center">
        <div>
          <div className="text-white/70 text-[12px] font-plus-jakarta mb-0.5">Portfolio</div>
          <div className="text-brand-yellow font-bold text-[13px] font-plus-jakarta">$84.92</div>
        </div>
        <div className="text-center">
          <div className="text-white/70 text-[12px] font-plus-jakarta mb-0.5">Yield Value</div>
          <div className="text-brand-yellow font-bold text-[13px] font-plus-jakarta">+1.78%</div>
        </div>
        <div className="text-right">
          <div className="text-white/70 text-[12px] font-plus-jakarta mb-0.5">Profits</div>
          <div className="text-brand-yellow font-bold text-[13px] font-plus-jakarta">$120.45</div>
        </div>
      </div>
    </div>
  );
}

// ─── Stock Cards ─────────────────────────────────────────────────────────────────
function StockCards() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative flex flex-col w-[260px] md:w-[300px] lg:w-[340px] flex-shrink-0"
      onMouseLeave={() => setHovered(false)}
    >
      {/* Paypeople: moves up on hover so both cards fully visible; Bitcoin stays put */}
      <PaypeopleCard
        className={`relative transition-all duration-300 ease-out ${
          hovered ? "z-0 -translate-y-28" : "z-0 translate-y-0"
        }`}
      />

      {/* Bitcoin: stays in place (no move down/up animation) */}
      <div
        className="relative z-10 -mt-14 md:-mt-16 lg:-mt-20 cursor-pointer transition-all duration-300 ease-out"
        onMouseEnter={() => setHovered(true)}
      >
        <BitcoinCard />
      </div>
    </div>
  );
}

// ─── Main Index Page ─────────────────────────────────────────────────────────────
export const ForBuilders: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* Hero Section */}
      <section className="relative overflow-x-hidden">
        <div className="relative min-h-screen">
          {/* Mobile + iPad: oval covers viewport (can crop), cards stay visible */}
          <div className="absolute inset-0 lg:hidden pointer-events-none">
            <img
              src={ellipseBg}
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>
          {/* Desktop: full oval visible (in flow) */}
          <img
            src={ellipseBg}
            alt=""
            className="hidden lg:block w-full h-auto pointer-events-none"
          />
          {/* Content overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pt-20 pb-0 z-10 min-h-screen">
            {/* Hero Text */}
            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto w-full">
          <h1
            className="font-inter font-bold uppercase leading-tight tracking-[-0.03em] text-4xl sm:text-5xl md:text-[3.5rem] lg:text-[4rem] xl:text-[3.75rem] mb-6 md:mb-8"
            style={{ lineHeight: "1.05" }}
          >
            <span className="text-white">YOUR DATA ISN'T OUR </span>
            <span style={{ color: "#E6F149" }}>BUSINESS.</span>
            <br />
            <span className="text-white">KEEPING IT SAFE IS.</span>
          </h1>
          <p
            className="font-inter text-white/90 text-center max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl lg:text-[1.65rem]"
            style={{
              lineHeight: "1.4",
              letterSpacing: "-0.02em",
              fontWeight: 400,
            }}
          >
            <span style={{ filter: "blur(0.5px)" }}>Complete encryption and security for all your personal data and</span>{" "}
            <span style={{ filter: "blur(0.5px)" }}>transactions. Built with meticulous attention to every potential</span>{" "}
            risk.
          </p>
        </div>

        {/* Cards Showcase */}
        <div className="relative z-10 w-full mt-12 md:mt-16 lg:mt-20 px-4 pb-8 lg:pb-0">
          {/* Desktop layout: three cards in a row */}
          <div className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 max-w-6xl mx-auto">
            <div className="animate-float w-[260px] md:w-[300px] lg:w-[340px] flex-shrink-0 -mr-2 xl:-mr-8" style={{ animationDelay: "0.5s" }}>
              <PaypeopleCard />
            </div>
            <div className="animate-float">
              <PhoneMockup />
            </div>
            <div className="animate-float -ml-4 xl:-ml-8" style={{ animationDelay: "1s" }}>
              <StockCards />
            </div>
          </div>

          {/* Mobile + iPad: Bitcoin on top, Paypeople below (no phone), full width — same as mobile */}
          <div className="flex lg:hidden flex-col items-stretch justify-center gap-3 px-4 w-full max-w-lg mx-auto">
            <div className="w-full">
              <BitcoinCard />
            </div>
            <div className="w-full">
              <PaypeopleCard />
            </div>
          </div>
        </div>
          </div>
        </div>
      </section>
    </div>
  );
}