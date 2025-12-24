export default function CTA() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-[757px] mx-auto text-center">
        <h2 className="gradient-text text-[64px] font-normal leading-[120%] mb-6">
          Lorem Ipsum Tagline
        </h2>
        <p className="text-brand-gray text-xl font-medium leading-[150%] mb-12">
          Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum
        </p>
        <button className="group relative inline-flex items-center justify-center px-12 py-4 bg-white rounded-[15px] overflow-hidden hover:scale-105 transition-transform duration-300">
          <div className="absolute inset-0 bg-white"></div>
          <svg className="absolute left-[100px] bottom-0 w-[41px] h-[27px]" viewBox="0 0 47 14" fill="none">
            <path d="M2.79651 30.0923L23.5219 9.82699L29.4874 14.8354L43.7965 3.09229" stroke="url(#paint1_linear)" strokeWidth="8" strokeMiterlimit="10"/>
            <defs>
              <linearGradient id="paint1_linear" x1="-0.00919021" y1="16.483" x2="46.3492" y2="16.483" gradientUnits="userSpaceOnUse">
                <stop stopColor="#A4B0F5"/>
                <stop offset="0.451923" stopColor="#3526A6"/>
                <stop offset="1" stopColor="#E6F149"/>
              </linearGradient>
            </defs>
          </svg>
          <span className="relative z-10 text-black font-manrope text-2xl font-normal tracking-tight">Join Waitlist</span>
        </button>
      </div>
    </section>
  );
}

