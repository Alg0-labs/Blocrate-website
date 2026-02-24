import { useState } from "react";
import { Link } from "react-router-dom";
import blocrateLogo from "../../assets/blocrate-logo.png";

// Social icon SVGs
function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.23279 6.98621L14.0558 1.37985H12.9129L8.72509 6.24777L5.38029 1.37985H1.52246L6.58045 8.74101L1.52246 14.6201H2.66542L7.08787 9.47945L10.6202 14.6201H14.478L9.23279 6.98621ZM7.66735 8.80586L7.15487 8.07286L3.07725 2.24026H4.83277L8.12346 6.94735L8.63594 7.68036L12.9134 13.7989H11.1579L7.66735 8.80586Z" fill="white" fillOpacity="0.88"/>
    </svg>
  );
}

function ThreadsIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.8286 7.41569C11.7597 7.38266 11.6897 7.35087 11.6188 7.32043C11.4953 5.04485 10.2519 3.74208 8.16401 3.72875C8.15456 3.72869 8.14515 3.72869 8.13569 3.72869C6.88689 3.72869 5.84828 4.26174 5.20902 5.23173L6.35727 6.0194C6.83482 5.29486 7.58429 5.1404 8.13624 5.1404C8.14261 5.1404 8.14902 5.1404 8.15532 5.14046C8.84277 5.14484 9.36152 5.34472 9.69727 5.7345C9.94161 6.01828 10.105 6.41042 10.1859 6.90532C9.57644 6.80173 8.91727 6.76988 8.21261 6.81028C6.22758 6.92462 4.95145 8.08232 5.03716 9.691C5.08065 10.507 5.48716 11.209 6.18177 11.6676C6.76906 12.0553 7.52544 12.2448 8.31155 12.2019C9.34969 12.145 10.1641 11.7489 10.7323 11.0247C11.1638 10.4747 11.4367 9.76192 11.5572 8.86383C12.052 9.16242 12.4186 9.55533 12.6211 10.0277C12.9655 10.8306 12.9855 12.15 11.909 13.2257C10.9657 14.168 9.83186 14.5757 8.11831 14.5883C6.21754 14.5742 4.78001 13.9646 3.84536 12.7764C2.97015 11.6638 2.51783 10.0568 2.50096 8C2.51783 5.94315 2.97015 4.33613 3.84536 3.22356C4.78001 2.03541 6.21751 1.42583 8.11829 1.41171C10.0329 1.42594 11.4955 2.03845 12.4659 3.23233C12.9417 3.8178 13.3005 4.55407 13.537 5.41253L14.8825 5.05352C14.5959 3.99685 14.1448 3.08631 13.531 2.33117C12.2869 0.800557 10.4674 0.0162623 8.12298 0H8.1136C5.77399 0.0162058 3.97486 0.803483 2.76621 2.33994C1.69068 3.7072 1.13589 5.60964 1.11725 7.99438L1.11719 8L1.11725 8.00562C1.13589 10.3903 1.69068 12.2928 2.76621 13.6601C3.97486 15.1965 5.77399 15.9838 8.1136 16H8.12298C10.203 15.9856 11.6692 15.441 12.877 14.2343C14.4573 12.6555 14.4097 10.6766 13.8889 9.46175C13.5152 8.59058 12.8028 7.88302 11.8286 7.41569ZM8.23723 10.7923C7.36723 10.8413 6.46339 10.4508 6.41882 9.61433C6.38579 8.99417 6.86017 8.30217 8.29062 8.21973C8.45444 8.21028 8.61519 8.20567 8.77311 8.20567C9.29269 8.20567 9.77877 8.25614 10.2207 8.35275C10.0559 10.4113 9.08902 10.7455 8.23723 10.7923Z" fill="white" fillOpacity="0.88"/>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M8.00002 2.27071H10.8535C11.2955 2.27688 11.733 2.35996 12.1465 2.51604C12.4539 2.62729 12.733 2.80466 12.9642 3.03581C13.1953 3.26696 13.3728 3.54618 13.4841 3.85356C13.6512 4.26389 13.7346 4.70355 13.7293 5.14659V8.00002V10.8313C13.7364 11.2817 13.653 11.7289 13.4841 12.1465C13.373 12.4478 13.1981 12.7217 12.9713 12.9491C12.7396 13.1866 12.4578 13.3694 12.1465 13.4841C11.73 13.6294 11.2943 13.712 10.8535 13.7293H8.00002H5.1688C4.72054 13.7142 4.27713 13.6316 3.85353 13.4841C3.55312 13.3608 3.28019 13.1791 3.05057 12.9495C2.82096 12.7199 2.63922 12.4469 2.51594 12.1465C2.36851 11.7229 2.28583 11.2795 2.27071 10.8313V8.00002V5.14659C2.28805 4.70584 2.37069 4.27006 2.51594 3.85356C2.63067 3.54223 2.81348 3.26044 3.05098 3.02873C3.27844 2.80201 3.5522 2.62715 3.85353 2.51604C4.27432 2.35829 4.71944 2.2752 5.1688 2.27071H8.00002ZM8.00002 1H5.10193C4.51518 1.01575 3.93511 1.1288 3.38536 1.33445C2.92093 1.51811 2.49686 1.7907 2.13696 2.13696C1.7859 2.49305 1.51262 2.91815 1.33441 3.38536C1.12877 3.93511 1.01575 4.51522 1 5.10196V8.00002V10.8981C1.01575 11.4848 1.12877 12.0649 1.33441 12.6147C1.50981 13.0833 1.78364 13.5089 2.13744 13.8627C2.49123 14.2165 2.91677 14.4902 3.38536 14.6656C3.93511 14.8712 4.51518 14.9843 5.10193 15H8.00002H10.8981C11.4848 14.9843 12.0649 14.8712 12.6146 14.6656C13.0818 14.4874 13.507 14.2141 13.863 13.8631C14.2093 13.5032 14.4819 13.0791 14.6656 12.6147C14.8712 12.0649 14.9843 11.4848 15 10.8981V8.00002V5.10196C14.9843 4.51522 14.8712 3.93511 14.6656 3.38536C14.4902 2.91677 14.2164 2.4913 13.8626 2.13751C13.5088 1.78371 13.0832 1.50985 12.6146 1.33445C12.0649 1.1288 11.4848 1.01575 10.8981 1H8.00002ZM7.99991 4.4332C7.28563 4.4332 6.58739 4.64499 5.99349 5.04182C5.39959 5.43865 4.9367 6.00272 4.66335 6.66263C4.39001 7.32254 4.31848 8.04864 4.45783 8.74919C4.59717 9.44975 4.94113 10.0932 5.4462 10.5983C5.95128 11.1034 6.59478 11.4473 7.29533 11.5867C7.99589 11.726 8.72202 11.6546 9.38193 11.3812C10.0418 11.1079 10.6059 10.645 11.0027 10.0511C11.3995 9.45716 11.6114 8.75892 11.6114 8.04465C11.6114 7.57038 11.5179 7.10079 11.3364 6.66263C11.1549 6.22447 10.8889 5.82633 10.5536 5.49097C10.2182 5.15562 9.82009 4.88954 9.38193 4.70805C8.94377 4.52656 8.47418 4.4332 7.99991 4.4332ZM7.99991 10.3854C7.53232 10.3848 7.07559 10.2443 6.68862 9.98181C6.30164 9.71933 6.00213 9.34699 5.82872 8.91274C5.6553 8.47849 5.61592 8.00226 5.71565 7.54542C5.81537 7.08859 6.04962 6.67202 6.38822 6.34954C6.72682 6.02707 7.15427 5.8135 7.61543 5.73616C8.07658 5.65883 8.55032 5.72139 8.9756 5.91577C9.40088 6.11015 9.7582 6.42741 10.0015 6.82673C10.2448 7.22604 10.3629 7.68902 10.3406 8.15608C10.341 8.45846 10.2799 8.75774 10.161 9.03575C10.042 9.31375 9.86778 9.56468 9.64882 9.77322C9.42986 9.98176 9.17077 10.1435 8.8873 10.2488C8.60383 10.354 8.30191 10.4005 7.99991 10.3854ZM12.5923 4.27712C12.5923 4.74498 12.2131 5.12425 11.7452 5.12425C11.2773 5.12425 10.8981 4.74498 10.8981 4.27712C10.8981 3.80926 11.2773 3.42999 11.7452 3.42999C12.2131 3.42999 12.5923 3.80926 12.5923 4.27712Z" fill="white" fillOpacity="0.88"/>
    </svg>
  );
}

function DiscordIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.8689 3.58517C11.9563 3.16775 10.987 2.86352 9.97528 2.69373C9.84792 2.91305 9.70642 3.2102 9.60736 3.44367C8.53128 3.28802 7.46295 3.28802 6.4017 3.44367C6.30265 3.2102 6.15407 2.91305 6.03379 2.69373C5.01501 2.86352 4.04574 3.16775 3.13944 3.58517C1.30702 6.2878 0.811773 8.92675 1.0594 11.5303C2.27629 12.4147 3.45075 12.9524 4.60467 13.3062C4.88767 12.9241 5.14237 12.5138 5.3617 12.0822C4.94427 11.9265 4.54808 11.7355 4.16603 11.5091C4.26508 11.4384 4.36413 11.3606 4.45611 11.2827C6.76254 12.3369 9.26072 12.3369 11.5388 11.2827C11.6379 11.3606 11.7299 11.4384 11.8289 11.5091C11.4469 11.7355 11.0507 11.9265 10.6332 12.0822C10.8526 12.5138 11.1073 12.9241 11.3903 13.3062C12.5435 12.9524 13.725 12.4147 14.9355 11.5303C15.2397 8.51643 14.4537 5.8987 12.8689 3.58517ZM5.68007 9.92432C4.98671 9.92432 4.42072 9.29467 4.42072 8.52351C4.42072 7.75234 4.97256 7.12264 5.68007 7.12264C6.38048 7.12264 6.95353 7.75234 6.93938 8.52351C6.93938 9.29467 6.38048 9.92432 5.68007 9.92432ZM10.329 9.92432C9.63566 9.92432 9.06896 9.29467 9.06896 8.52351C9.06896 7.75234 9.62151 7.12264 10.329 7.12264C11.0295 7.12264 11.6025 7.75234 11.5884 8.52351C11.5884 9.29467 11.0365 9.92432 10.329 9.92432Z" fill="white" fillOpacity="0.88"/>
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M11.2133 12.9882C11.3922 13.1148 11.6228 13.1465 11.8283 13.0687C12.0339 12.9904 12.185 12.8148 12.2305 12.6021C12.7133 10.3332 13.8844 4.59058 14.3238 2.52674C14.3571 2.37119 14.3016 2.20952 14.1794 2.10564C14.0571 2.00175 13.8877 1.97175 13.7366 2.02786C11.4072 2.89006 4.23348 5.58167 1.30133 6.66664C1.11522 6.73553 0.994111 6.91442 1.00022 7.11052C1.00689 7.30718 1.13911 7.47774 1.32966 7.53496C2.64463 7.92828 4.3707 8.47549 4.3707 8.47549C4.3707 8.47549 5.17735 10.9115 5.59789 12.1504C5.65067 12.306 5.77233 12.4282 5.93289 12.4704C6.09288 12.5121 6.26399 12.4682 6.38343 12.3554C7.05897 11.7176 8.10339 10.7316 8.10339 10.7316C8.10339 10.7316 10.0878 12.1865 11.2133 12.9882ZM5.09679 8.16772L6.02955 11.2443L6.23677 9.29603C6.23677 9.29603 9.84058 6.04555 11.895 4.19281C11.955 4.13837 11.9633 4.04726 11.9133 3.98337C11.8639 3.91948 11.7728 3.90448 11.7044 3.94782C9.32337 5.46834 5.09679 8.16772 5.09679 8.16772Z" fill="white" fillOpacity="0.88"/>
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.1877 4.6391C15.1016 4.32073 14.9331 4.03064 14.6994 3.79796C14.4656 3.56528 14.1747 3.3982 13.856 3.3135C12.6859 3 7.99691 3 7.99691 3C7.99691 3 3.30671 3 2.1391 3.3135C1.82136 3.39892 1.53165 3.56634 1.29899 3.79899C1.06634 4.03165 0.898917 4.32136 0.813503 4.6391C0.5 5.80795 0.5 8.24809 0.5 8.24809C0.5 8.24809 0.5 10.6882 0.813503 11.8571C0.898917 12.1748 1.06634 12.4645 1.29899 12.6972C1.53165 12.9298 1.82136 13.0973 2.1391 13.1827C3.30795 13.4912 7.99691 13.4912 7.99691 13.4912C7.99691 13.4912 12.6871 13.4912 13.856 13.1777C14.1741 13.0935 14.4646 12.9271 14.6983 12.6954C14.932 12.4636 15.1008 12.1745 15.1877 11.8571C15.5 10.6882 15.5 8.24809 15.5 8.24809C15.5 8.24809 15.4938 5.80795 15.1877 4.6391ZM6.49728 10.4969V5.99926L10.3939 8.24809L6.49728 10.4969Z" fill="white" fillOpacity="0.88"/>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.0833 1H3.91667C2.30608 1 1 2.30608 1 3.91667V12.0833C1 13.6939 2.30608 15 3.91667 15H12.0833C13.6945 15 15 13.6939 15 12.0833V3.91667C15 2.30608 13.6945 1 12.0833 1ZM5.66667 12.0833H3.91667V5.66667H5.66667V12.0833ZM4.79167 4.927C4.22817 4.927 3.77083 4.46617 3.77083 3.898C3.77083 3.32983 4.22817 2.869 4.79167 2.869C5.35517 2.869 5.8125 3.32983 5.8125 3.898C5.8125 4.46617 5.35575 4.927 4.79167 4.927ZM12.6667 12.0833H10.9167V8.81433C10.9167 6.84967 8.58333 6.99842 8.58333 8.81433V12.0833H6.83333V5.66667H8.58333V6.69625C9.39767 5.18775 12.6667 5.07633 12.6667 8.14058V12.0833Z" fill="white" fillOpacity="0.88"/>
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M7.899 8.46363C7.79424 8.50783 7.67452 8.50783 7.58473 8.46363L1 5.3111V4.35355C1 4.16205 1.16462 4 1.35917 4H14.1096C14.3041 4 14.4688 4.16205 14.4688 4.35355V5.32583L7.899 8.46363ZM1 6.7244V12.6464C1 12.838 1.16462 13 1.35917 13H14.1096C14.3041 13 14.4688 12.838 14.4688 12.6464V6.7244L7.899 9.87693C7.79424 9.92112 7.67452 9.92112 7.58473 9.87693L1 6.7244Z" fill="white" fillOpacity="0.88"/>
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 1.25C7.14844 1.25 4.6176 2.63021 3.0188 4.75H3V4.77392C1.90621 6.2346 1.25 8.04034 1.25 10C1.25 14.8221 5.17787 18.75 10 18.75C14.8221 18.75 18.75 14.8221 18.75 10C18.75 5.17787 14.8221 1.25 10 1.25ZM12.625 3.51099C15.1933 4.54644 17 7.05356 17 10C17 11.7793 16.337 13.3951 15.25 14.6279V13.5H12.625V10H7.375V8.25H9.125V5.625H12.625V3.51099ZM3.18115 8.43115L4.75 10L7.375 12.625V15.25H9.125V16.9401C5.66505 16.511 3 13.5794 3 10C3 9.45941 3.06609 8.93602 3.18115 8.43115Z" fill="white" fillOpacity="0.88"/>
    </svg>
  );
}

function ChevronDownIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M12.5596 4.68433L7.30957 9.93431C7.13871 10.1052 6.8617 10.1052 6.69085 9.93431L1.44082 4.68433L2.05953 4.06561L7.00021 9.00628L11.9408 4.06561L12.5596 4.68433Z" fill="white" fillOpacity="0.88"/>
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M9.40578 4.00951L3.34192 4.05933L3.34877 3.22618L10.4183 3.16809C10.6484 3.1662 10.8333 3.35118 10.8315 3.58125L10.7734 10.6508L9.94023 10.6577L9.99002 4.5938L3.57941 11.0044L2.99512 10.4202L9.40578 4.00951Z" fill="white" fillOpacity="0.48"/>
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.32">
        <path fillRule="evenodd" clipRule="evenodd" d="M6 8.5H1V7.5H6V8.5Z" fill="white" fillOpacity="0.88"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M15.3536 8.35355L8.35358 15.3535L7.64648 14.6464L14.2929 7.99999L7.64648 1.35355L8.35358 0.646439L15.3536 7.64644C15.4473 7.74021 15.5 7.86738 15.5 7.99999C15.5 8.1326 15.4473 8.25978 15.3536 8.35355Z" fill="white" fillOpacity="0.88"/>
      </g>
    </svg>
  );
}

// Blocrato Logo SVG (recreated from design)
function BlocrateLogoIcon() {
  return (
    <img
      src={blocrateLogo}
      alt="Blocrato"
      className="w-full max-w-[600px] h-auto"
    />
  );
}

export function FooterSection() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-[#080A0B] relative overflow-x-hidden flex flex-col">
      {/* Ambient glow on left */}
      <div
        className="pointer-events-none absolute"
        style={{
          left: "-150px",
          top: "45%",
          width: "303px",
          height: "303px",
          borderRadius: "260px",
          background: "#B9B9B9",
          filter: "blur(250px)",
          opacity: 0.18,
        }}
      />

      {/* Footer Section */}
      <footer className="relative w-full flex-1 flex flex-col pt-10 sm:pt-12 md:pt-16">
        {/* Top footer: Logo + tagline + nav columns */}
        <div className="px-5 sm:px-10 md:px-20 pb-10 flex flex-col lg:flex-row lg:items-start lg:gap-0">
          {/* Left: Logo + tagline */}
          <div className="flex-1 min-w-0">
            <BlocrateLogoIcon />
            <p
              className="mt-4 text-[#A6A9A8] text-xl sm:text-2xl md:text-3xl lg:text-[32px] leading-[120%] tracking-[-0.64px]"
              style={{ fontFamily: "'Helvetica Neue', -apple-system, Roboto, Helvetica, sans-serif" }}
            >
              Private, global crypto credit infrastructure.
            </p>
          </div>

          {/* Right: Products + Resource columns */}
          <div className="flex gap-12 sm:gap-20 mt-8 lg:mt-0 lg:pl-16 shrink-0">
            {/* Products */}
            <div className="flex flex-col gap-5">
              <h3
                className="text-white text-lg sm:text-[20px] leading-[120%] tracking-[-0.4px]"
                style={{ fontFamily: "'Helvetica Neue', -apple-system, Roboto, Helvetica, sans-serif" }}
              >
                Products
              </h3>
              <ul className="flex flex-col gap-4">
                {[
                  { label: "How it Works", href: "https://docs.blocrate.com" },
                  { label: "Features", to: "/features" },
                  { label: "Security", to: "/features" },
                ].map(({ label, to, href }) => (
                  <li key={label}>
                    {href ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#A6A9A8] text-sm sm:text-[16px] leading-[120%] tracking-[-0.32px] hover:text-white transition-colors"
                        style={{
                          fontFamily: "'Helvetica Neue', -apple-system, Roboto, Helvetica, sans-serif",
                        }}
                      >
                        {label}
                      </a>
                    ) : (
                      <Link
                        to={to!}
                        className="text-[#A6A9A8] text-sm sm:text-[16px] leading-[120%] tracking-[-0.32px] hover:text-white transition-colors"
                        style={{
                          fontFamily: "'Helvetica Neue', -apple-system, Roboto, Helvetica, sans-serif",
                        }}
                      >
                        {label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Resource */}
            <div className="flex flex-col gap-5">
              <h3
                className="text-white text-lg sm:text-[20px] leading-[120%] tracking-[-0.4px]"
                style={{ fontFamily: "'Helvetica Neue', -apple-system, Roboto, Helvetica, sans-serif" }}
              >
                Resource
              </h3>
              <ul className="flex flex-col gap-4">
                {[
                  { label: "Pitch Deck", to: "/pitch-deck" },
                  { label: "Documentation", href: "https://docs.blocrate.com" },
                  { label: "FAQs", to: "/faqs" },
                  { label: "Integration", to: "/integrations" },
                ].map(({ label, to, href }) => (
                  <li key={label}>
                    {href ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#A6A9A8] text-sm sm:text-[16px] leading-[120%] tracking-[-0.32px] hover:text-white transition-colors"
                        style={{
                          fontFamily: "'Helvetica Neue', -apple-system, Roboto, Helvetica, sans-serif",
                        }}
                      >
                        {label}
                      </a>
                    ) : (
                      <Link
                        to={to!}
                        className="text-[#A6A9A8] text-sm sm:text-[16px] leading-[120%] tracking-[-0.32px] hover:text-white transition-colors"
                        style={{
                          fontFamily: "'Helvetica Neue', -apple-system, Roboto, Helvetica, sans-serif",
                        }}
                      >
                        {label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="px-5 sm:px-10 md:px-20 py-8 flex-1 flex flex-col items-center gap-8">
          {/* Newsletter input */}
          {/* <div className="relative w-full max-w-[344px] h-16 rounded-[4px] border border-white/[0.08] bg-white/[0.04] flex items-center px-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Subscribe to our newsletter"
              className="flex-1 bg-transparent text-[#757575] text-[15.6px] placeholder-[#757575] outline-none border-none text-sm"
              style={{ fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif" }}
            />
            <button
              type="button"
              className="absolute right-4 w-8 h-8 rounded-full flex items-center justify-center shrink-0 hover:bg-[#5a3aff] transition-colors"
            >
              <ArrowRightIcon />
            </button>
          </div> */}

          {/* Primary nav */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {[
              { label: "Home", to: "/" },
              { label: "Blog", to: "/blog" },
              { label: "Jobs", to: "/jobs" },
              { label: "Docs", href: "https://docs.blocrate.com" },
            ].map(({ label, to, href }) =>
              href ? (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/[0.88] text-[16px] leading-6 hover:text-white transition-colors"
                  style={{ fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif" }}
                >
                  {label}
                </a>
              ) : (
                <Link
                  key={label}
                  to={to!}
                  className="text-white/[0.88] text-[16px] leading-6 hover:text-white transition-colors"
                  style={{ fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif" }}
                >
                  {label}
                </Link>
              ),
            )}
            {/* <button
              type="button"
              className="text-white/[0.88] text-[16px] leading-6 flex items-center gap-1.5 hover:text-white transition-colors"
              style={{ fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif" }}
            >
              Past Events
              <ChevronDownIcon size={16} />
            </button> */}
          </nav>

          {/* Secondary nav */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {[
              { label: "Status", to: "/status" },
              { label: "Resources", to: "/resources" },
              { label: "Privacy Policy", to: "/privacy-policy" },
              { label: "Terms of Service", to: "/terms-of-service" },
              { label: "Brand Assets", to: "/brand-assets" },
            ].map(({ label, to }) => (
              <Link
                key={label}
                to={to}
                className="text-white/[0.48] text-[13px] sm:text-[14px] leading-5 hover:text-white/70 transition-colors"
                style={{ fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif" }}
              >
                {label}
              </Link>
            ))}
            {[
              { label: "Partnership Requests", to: "/partnership-requests" },
              { label: "Forum", to: "/forum" },
              { label: "Security", to: "/security" },
            ].map(({ label, to }) => (
              <Link
                key={label}
                to={to}
                className="text-white/[0.48] text-[13px] sm:text-[14px] leading-5 flex items-center gap-1 hover:text-white/70 transition-colors"
                style={{ fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif" }}
              >
                {label}
                <ExternalLinkIcon />
              </Link>
            ))}
          </nav>

          {/* Social icons + Language selector */}
          <div className="flex flex-wrap items-center justify-center gap-8">
            {/* Social icons */}
            <div className="flex items-center gap-9">
              {[
                {
                  icon: <XIcon />,
                  label: "X (Twitter)",
                  href: "https://x.com/blocrateglobal?s=21&t=VcyqBwZfJdu6klmdoYAjAQ",
                },
                {
                  icon: <ThreadsIcon />,
                  label: "Threads",
                  href: "https://x.com/blocrateglobal?s=21&t=VcyqBwZfJdu6klmdoYAjAQ",
                },
                {
                  icon: <InstagramIcon />,
                  label: "Instagram",
                  href: "https://www.instagram.com/blocrate",
                },
                {
                  icon: <DiscordIcon />,
                  label: "Discord",
                  href: "https://discord.gg/czHvKfMya",
                },
                {
                  icon: <TelegramIcon />,
                  label: "Telegram",
                  href: "https://t.me/Blocrate",
                },
                {
                  icon: <LinkedInIcon />,
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/company/blocrate/",
                },
                {
                  icon: <MailIcon />,
                  label: "Email",
                  href: "mailto:info@blocrate.com",
                },
              ].map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href?.startsWith("http") ? "_blank" : undefined}
                  rel={href?.startsWith("http") ? "noreferrer" : undefined}
                  className="opacity-80 hover:opacity-100 transition-opacity flex items-center justify-center"
                >
                  {icon}
                </a>
              ))}
            </div>

            {/* Language selector */}
            {/* <button
              type="button"
              className="flex items-center gap-1.5 h-8 px-2.5 rounded-full border border-white/[0.08] bg-[rgba(31,30,47,0.5)] backdrop-blur-[16px] hover:bg-[rgba(31,30,47,0.7)] transition-colors"
            >
              <GlobeIcon />
              <span
                className="text-white/[0.88] text-[12px] font-medium tracking-[1.8px] uppercase"
                style={{ fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif" }}
              >
                EN
              </span>
              <ChevronDownIcon size={14} />
            </button> */}
          </div>

          {/* Bottom bar — pinned to bottom of viewport */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 mt-auto">
            <span
              className="text-[#A6A9A8] text-sm sm:text-[16px] leading-[120%] tracking-[-0.32px]"
              style={{ fontFamily: "'Helvetica Neue', -apple-system, Roboto, Helvetica, sans-serif" }}
            >
              © 2026 All rights reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}