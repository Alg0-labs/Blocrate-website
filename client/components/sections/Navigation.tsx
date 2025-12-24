import LogoImage from "@/assets/blocrate-logo.svg";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-50 px-4 sm:px-6 lg:px-8 pt-8 pb-4">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src={LogoImage} 
            alt="Blocrate" 
            className="h-8 w-auto"
          />
        </div>

        {/* Navigation Links */}
        {/* <div className="hidden lg:flex items-center gap-12 px-10 py-4 rounded-full border border-white/12 bg-gradient-to-r from-black/6 to-black/24 shadow-[0_4px_4px_0_rgba(0,0,0,0.05)_inset] glassmorphic">
          <a href="#home" className="text-white text-base font-medium hover:text-brand-green transition-colors">Home</a>
          <a href="#about" className="text-white text-base font-medium hover:text-brand-green transition-colors">About</a>
          <a href="#pages" className="text-white text-base font-medium hover:text-brand-green transition-colors">Pages</a>
          <a href="#blog" className="text-white text-base font-medium hover:text-brand-green transition-colors">Blog</a>
          <a href="#contact" className="text-white text-base font-medium hover:text-brand-green transition-colors">Contact Us</a>
        </div> */}

        {/* CTA Button */}
        <button className="hidden lg:inline-flex items-center px-5 py-4 bg-white rounded-full text-brand-dark text-base font-medium hover:bg-brand-green hover:text-black transition-all duration-300">
          Watch Demo
        </button>

        {/* Mobile menu button */}
        <button className="lg:hidden text-white p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}

