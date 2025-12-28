import { motion } from "framer-motion";

const tileVariants = (direction: "left" | "right") => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -100 : 100,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
});

export default function HowItWorks() {
  return (
    <>
      <style>{`
        .howitworks-grid-1,
        .howitworks-grid-2 {
          gap: 2px !important;
        }
        .howitworks-card {
          opacity: 1;
          transform: scale(1);
          transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1), 
                      background 0.5s cubic-bezier(0.4, 0, 0.2, 1),
                      backdrop-filter 0.5s cubic-bezier(0.4, 0, 0.2, 1),
                      transform 0.5s cubic-bezier(0.4, 0, 0.2, 1),
                      border-color 0.5s cubic-bezier(0.4, 0, 0.2, 1),
                      box-shadow 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .howitworks-card:hover {
          opacity: 0.95;
          transform: scale(1.02);
        }
        .howitworks-card-1:hover {
          border: 1px solid rgba(110, 68, 234, 0.16);
          background: radial-gradient(493.58% 151.01% at 78.57% 0%, rgba(138, 56, 245, 0.60) 0%, rgba(255, 255, 255, 0.60) 100%);
          box-shadow: 0 3px 4px 0 rgba(191, 234, 68, 0.17) inset;
          backdrop-filter: blur(10px);
        }
        .howitworks-card-2:hover {
          border: 1px solid rgba(191, 234, 68, 0.16);
          background: radial-gradient(488.65% 119.21% at 85.95% 15.16%, rgba(164, 176, 245, 0.60) 0%, rgba(255, 255, 255, 0.14) 100%);
          box-shadow: 0 3px 4px 0 rgba(191, 234, 68, 0.17) inset;
          backdrop-filter: blur(10px);
        }
        .howitworks-card-3:hover {
          border: 1px solid rgba(191, 234, 68, 0.16);
          background: radial-gradient(515.81% 123.58% at 90.71% 32.18%, rgba(53, 38, 166, 0.60) 0%, rgba(255, 255, 255, 0.60) 100%);
          box-shadow: 0 3px 4px 0 rgba(191, 234, 68, 0.17) inset;
          backdrop-filter: blur(10px);
        }
        .howitworks-card-4:hover {
          border: 1px solid rgba(191, 234, 68, 0.16);
          background: radial-gradient(441.05% 109.67% at 79.76% 24.73%, rgba(38, 166, 72, 0.60) 0%, rgba(255, 255, 255, 0.60) 100%);
          box-shadow: 0 3px 4px 0 rgba(191, 234, 68, 0.17) inset;
          backdrop-filter: blur(10px);
        }
        .howitworks-card-5:hover {
          border: 1px solid rgba(191, 234, 68, 0.16);
          background: radial-gradient(477.93% 122.93% at 83.81% 29.52%, rgba(38, 83, 166, 0.60) 0%, rgba(255, 255, 255, 0.60) 100%);
          box-shadow: 0 3px 4px 0 rgba(191, 234, 68, 0.17) inset;
          backdrop-filter: blur(10px);
        }
        .howitworks-card:hover .howitworks-subtext {
          color: white;
        }
        .howitworks-subtext {
          transition: color 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
      <section className="relative px-4 sm:px-6 lg:px-5 py-24">
      <div className="max-w-[1440px] mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="gradient-text text-5xl font-normal leading-[120%] mb-6">
            How It Works
          </h2>
          <p className="text-brand-gray text-base font-medium leading-[150%]">
            A simple, privacy-preserving flow from proof to credit.
          </p>
        </motion.div>

        <div className="howitworks-grid-1 grid grid-cols-1 md:grid-cols-3 mb-6">
          {/* Step 1 - From Left */}
          <motion.div
            className="howitworks-card howitworks-card-1 rounded-[10px] border border-[rgba(191,234,68,0.16)] bg-gradient-to-br from-[rgba(191,234,68,0.04)] to-[rgba(191,234,68,0.14)] shadow-[0_3px_4px_0_rgba(191,234,68,0.17)_inset] glassmorphic p-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={tileVariants("left")}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="text-white text-[64px] font-medium leading-[150%] mb-4">1.</div>
            <p className="howitworks-subtext text-brand-gray text-base font-medium leading-[150%]">
              Borrowers submit private income or invoice proofs.
            </p>
          </motion.div>

          {/* Step 2 - From Right */}
          <motion.div
            className="howitworks-card howitworks-card-2 rounded-[10px] border border-[rgba(191,234,68,0.16)] bg-gradient-to-br from-[rgba(191,234,68,0.04)] to-[rgba(191,234,68,0.14)] shadow-[0_3px_4px_0_rgba(191,234,68,0.17)_inset] glassmorphic p-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={tileVariants("right")}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <div className="text-white text-[64px] font-medium leading-[150%] mb-4">2.</div>
            <p className="howitworks-subtext text-brand-gray text-base font-medium leading-[150%]">
              A risk band and credit passport are generated.
            </p>
          </motion.div>

          {/* Step 3 - From Left */}
          <motion.div
            className="howitworks-card howitworks-card-3 rounded-[10px] border border-[rgba(191,234,68,0.16)] bg-gradient-to-br from-[rgba(191,234,68,0.04)] to-[rgba(191,234,68,0.14)] shadow-[0_3px_4px_0_rgba(191,234,68,0.17)_inset] glassmorphic p-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={tileVariants("left")}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <div className="text-white text-[64px] font-medium leading-[150%] mb-4">3.</div>
            <p className="howitworks-subtext text-brand-gray text-base font-medium leading-[150%]">
              Lenders read one standardized credit interface.
            </p>
          </motion.div>
        </div>

        <div className="howitworks-grid-2 grid grid-cols-1 md:grid-cols-2 max-w-[900px] mx-auto">
          {/* Step 4 - From Left */}
          <motion.div
            className="howitworks-card howitworks-card-4 rounded-[10px] border border-[rgba(191,234,68,0.16)] bg-gradient-to-br from-[rgba(191,234,68,0.04)] to-[rgba(191,234,68,0.14)] shadow-[0_3px_4px_0_rgba(191,234,68,0.17)_inset] glassmorphic p-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={tileVariants("left")}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            <div className="text-white text-[64px] font-medium leading-[150%] mb-4">4.</div>
            <p className="howitworks-subtext text-brand-gray text-base font-medium leading-[150%]">
              Borrowers are routed to the best lending pools
            </p>
          </motion.div>

          {/* Step 5 - From Right */}
          <motion.div
            className="howitworks-card howitworks-card-5 rounded-[10px] border border-[rgba(191,234,68,0.16)] bg-gradient-to-br from-[rgba(191,234,68,0.04)] to-[rgba(191,234,68,0.14)] shadow-[0_3px_4px_0_rgba(191,234,68,0.17)_inset] glassmorphic p-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={tileVariants("right")}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            <div className="text-white text-[64px] font-medium leading-[150%] mb-4">5.</div>
            <p className="howitworks-subtext text-brand-gray text-base font-medium leading-[150%]">
              Repayments continuously update the passport
            </p>
          </motion.div>
        </div>
      </div>
    </section>
    </>
  );
}

