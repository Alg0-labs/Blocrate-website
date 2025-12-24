export default function HowItWorks() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="gradient-text text-5xl font-normal leading-[120%] mb-6">
            How It Works
          </h2>
          <p className="text-brand-gray text-base font-medium leading-[150%]">
            A simple, privacy-preserving flow from proof to credit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Step 1 */}
          <div className="rounded-[10px] border border-[rgba(191,234,68,0.16)] bg-gradient-to-br from-[rgba(191,234,68,0.04)] to-[rgba(191,234,68,0.14)] shadow-[0_3px_4px_0_rgba(191,234,68,0.17)_inset] glassmorphic p-6">
            <div className="text-white text-[64px] font-medium leading-[150%] mb-4">1.</div>
            <p className="text-brand-gray text-base font-medium leading-[150%]">
              Borrowers submit private income or invoice proofs.
            </p>
          </div>

          {/* Step 2 */}
          <div className="rounded-[10px] border border-[rgba(191,234,68,0.16)] bg-gradient-to-br from-[rgba(191,234,68,0.04)] to-[rgba(191,234,68,0.14)] shadow-[0_3px_4px_0_rgba(191,234,68,0.17)_inset] glassmorphic p-6">
            <div className="text-white text-[64px] font-medium leading-[150%] mb-4">2.</div>
            <p className="text-brand-gray text-base font-medium leading-[150%]">
              A risk band and credit passport are generated.
            </p>
          </div>

          {/* Step 3 */}
          <div className="rounded-[10px] border border-[rgba(191,234,68,0.16)] bg-gradient-to-br from-[rgba(191,234,68,0.04)] to-[rgba(191,234,68,0.14)] shadow-[0_3px_4px_0_rgba(191,234,68,0.17)_inset] glassmorphic p-6">
            <div className="text-white text-[64px] font-medium leading-[150%] mb-4">3.</div>
            <p className="text-brand-gray text-base font-medium leading-[150%]">
              Lenders read one standardized credit interface.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
          {/* Step 4 */}
          <div className="rounded-[10px] border border-[rgba(191,234,68,0.16)] bg-gradient-to-br from-[rgba(191,234,68,0.04)] to-[rgba(191,234,68,0.14)] shadow-[0_3px_4px_0_rgba(191,234,68,0.17)_inset] glassmorphic p-6">
            <div className="text-white text-[64px] font-medium leading-[150%] mb-4">4.</div>
            <p className="text-brand-gray text-base font-medium leading-[150%]">
              Borrowers are routed to the best lending pools
            </p>
          </div>

          {/* Step 5 */}
          <div className="rounded-[10px] border border-[rgba(191,234,68,0.16)] bg-gradient-to-br from-[rgba(191,234,68,0.04)] to-[rgba(191,234,68,0.14)] shadow-[0_3px_4px_0_rgba(191,234,68,0.17)_inset] glassmorphic p-6">
            <div className="text-white text-[64px] font-medium leading-[150%] mb-4">5.</div>
            <p className="text-brand-gray text-base font-medium leading-[150%]">
              Repayments continuously update the passport
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

