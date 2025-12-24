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

export default function KeyBenefits() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-[1440px] mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="gradient-text text-5xl font-normal leading-[120%]">
            Key Benefits
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1200px] mx-auto">
          {/* For Lenders */}
          <motion.div
            className="rounded-[17px] border border-[rgba(191,234,68,0.16)] bg-gradient-to-br from-[rgba(191,234,68,0.06)] to-[rgba(191,234,68,0.24)] shadow-[3px_3px_4px_0_rgba(191,234,68,0.17)_inset] glassmorphic p-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={tileVariants("left")}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h3 className="text-white text-[32px] font-medium leading-[150%] text-center mb-8">
              For Lenders
            </h3>
            <ul className="text-brand-gray text-xl font-medium leading-[150%] space-y-2">
              <li>• Lower default risk via hybrid proofs</li>
              <li>• Standardized credit read API</li>
              <li>• Policy controls and overrides</li>
            </ul>
          </motion.div>

          {/* For Borrowers */}
          <motion.div
            className="rounded-[17px] border border-[rgba(191,234,68,0.16)] bg-gradient-to-br from-[rgba(191,234,68,0.06)] to-[rgba(191,234,68,0.24)] shadow-[3px_3px_4px_0_rgba(191,234,68,0.17)_inset] glassmorphic p-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={tileVariants("right")}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <h3 className="text-white text-[32px] font-medium leading-[150%] text-center mb-8">
              For Borrowers
            </h3>
            <ul className="text-brand-gray text-xl font-medium leading-[150%] space-y-2">
              <li>• Access credit without overlocking crypto</li>
              <li>• Portable reputation across protocols</li>
              <li>• Privacy preserved by design</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

