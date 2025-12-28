import { motion } from "framer-motion";
import { tileVariants } from "@/lib/animations";
import "@/styles/HowItWorks.css";

export default function HowItWorks() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-5 py-24">
      <div className="max-w-[1440px] mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
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
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], type: "spring", stiffness: 100, damping: 15 }}
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
  );
}

