export default function Proof() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-[1440px] mx-auto text-center">
        <div className="flex justify-center mb-12">
          <svg className="w-[200px] h-[200px]" viewBox="0 0 200 200" fill="none">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="10" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <path d="M100 20 L160 50 L160 120 Q160 160 100 180 Q40 160 40 120 L40 50 Z" fill="#8A38F5" filter="url(#glow)" opacity="0.9"/>
          </svg>
        </div>
        <h2 className="gradient-text text-5xl font-normal leading-[120%]">
          Proof enters; identity stays hidden.
        </h2>
      </div>
    </section>
  );
}

