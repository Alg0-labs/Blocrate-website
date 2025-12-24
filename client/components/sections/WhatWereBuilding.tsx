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

export default function WhatWereBuilding() {
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
            What We're Building
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature Card 1 */}
          <motion.div
            className="bg-white rounded-[10px] p-8 text-center hover:shadow-xl transition-shadow duration-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={tileVariants("left")}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center justify-center w-[84px] h-[84px] rounded-[10px] bg-brand-purple border border-brand-yellow mb-6">
              <svg className="w-[57px] h-[57px]" viewBox="0 0 57 57" fill="none">
                <path d="M44.7548 14.7929C48.6646 14.0176 52.5593 15.2838 54.9332 18.5202C59.2452 24.3972 56.5164 32.8285 49.4723 34.7971C48.9941 34.9308 47.5866 34.9816 47.4717 35.3252C47.1828 37.8473 48.2186 40.7011 46.3008 42.7307C46.8094 43.3129 47.3231 43.9731 47.4329 44.7704C47.6779 46.5511 47.6525 51.8796 47.4481 53.7026C47.2267 55.6679 45.3833 56.9645 43.4943 57H4.22347C2.6352 56.9289 1.07565 56.2332 0.474135 54.681C-0.0969665 53.2033 -0.0665528 47.2078 0.122688 45.4525C0.234205 44.4183 0.64479 43.406 1.44399 42.7307C1.09762 42.3718 0.717445 41.9266 0.523135 41.4645C-0.137518 39.8971 -0.137518 32.2343 0.523135 30.6618C0.818824 29.956 1.43048 29.5633 1.75996 28.92C-2.8663 20.6885 3.00692 10.1312 12.572 10.3225C14.26 6.92191 16.6846 3.94955 20.0386 2.10453C30.5989 -3.70308 43.1057 3.1523 44.7531 14.7946L44.7548 14.7929ZM40.0795 18.9671C38.5673 17.596 42.2507 16.1301 42.7306 15.5495C43.2797 14.8843 42.2558 12.1201 41.9212 11.3009C35.9331 -3.30022 15.1606 -0.202601 13.0975 15.7425C12.9826 16.6345 13.4625 18.3814 12.1361 18.4999C11.565 18.5524 11.3099 18.2731 11.2372 17.7365C10.9905 15.9151 11.5667 14.0312 11.8945 12.2606C3.90074 12.3622 -0.732275 21.9783 3.75037 28.4376L43.9928 28.4664C46.4715 28.7152 47.7826 30.8006 47.4481 33.1924C52.8837 32.8691 56.165 27.6979 54.8133 22.5217C53.4075 17.139 47.2825 14.6236 42.6072 17.7923C41.95 18.2375 40.8906 19.7051 40.0778 18.9671H40.0795ZM15.267 30.3216H3.55606C2.79909 30.3216 2.0641 31.5894 1.96948 32.2783C1.74813 33.9084 1.82079 37.6492 1.94751 39.3605C2.01003 40.2136 2.52875 41.8014 3.55606 41.8014H15.267V30.3233V30.3216ZM17.3723 30.3216L17.1189 30.5755V41.5475L17.3723 41.8014H44.1634C44.4726 41.8014 45.6571 40.8552 45.5861 40.3575C45.4171 37.6966 45.8429 34.7056 45.603 32.0888C45.5607 31.6351 45.554 31.454 45.26 31.0816C45.1181 30.9022 44.2969 30.325 44.1617 30.325H17.3723V30.3216ZM15.267 43.6566H3.38709C3.33133 43.6566 2.54902 44.1779 2.45609 44.2896C2.19251 44.6095 2.02354 45.2037 1.97454 45.6167C1.81065 46.9539 1.77348 52.4264 2.07085 53.5842C2.23813 54.2342 3.05254 55.1347 3.72502 55.1347H15.267V43.6566ZM17.1206 43.6566V54.8825L17.374 55.1364H43.9961C44.645 55.1364 45.5117 54.224 45.6047 53.5402C45.9477 51.0197 45.3411 47.7122 45.5878 45.1021C45.6368 44.6857 44.601 43.6583 44.3341 43.6583H17.1206V43.6566Z" fill="#E6F149"/>
              </svg>
            </div>
            <h3 className="text-black text-2xl font-normal mb-4">Hybrid proof intake</h3>
            <p className="text-[#333] text-base leading-[145%]">
              Our AI let's you generate more effective marketing copy faster.
            </p>
          </motion.div>

          {/* Feature Card 2 */}
          <motion.div
            className="bg-white rounded-[10px] p-8 text-center hover:shadow-xl transition-shadow duration-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={tileVariants("right")}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <div className="inline-flex items-center justify-center w-[84px] h-[84px] rounded-[10px] bg-brand-purple border border-brand-yellow mb-6">
              <svg className="w-[57px] h-[57px]" viewBox="0 0 57 57" fill="none">
                <path d="M21.126 7L25.527 7.61C43.77 11.4342 54.099 31.19 46.488 48.448C39.469 64.364 19.967 70.816 4.82 62.089C2.307 61.703 -4.03 63.415 -4.449 59.607C-4.645 57.822 -3.514 57.072 -2.966 55.596C-6.119 51.881 -8.316 47.387 -9.345 42.61L-9.977 38.345C-9.925 37.126 -10.049 35.873 -9.977 34.658C-9.11 19.8421 3.16 7.83968 17.9 7H21.126ZM23.257 62.084H9.491L11.54 62.857C33.806 69.499 53.782 47.411 44.91 25.9026C37.218 7.25437 12.413 3.0967 -1.051 18.1764C-10.012 28.213 -10.317 43.464 -1.856 53.902L8.224 37.596C9.526 35.811 12.148 35.961 13.271 37.848L25.643 58.085C26.344 59.801 25.061 61.843 23.257 62.084ZM11.41 38.615C11.083 38.299 10.509 38.229 10.118 38.455L-2.321 58.507C-2.782 59.356 -2.359 60.106 -1.4 60.132L23.266 60.018C23.899 59.761 23.992 59.011 23.638 58.475L11.41 38.615Z" fill="#E6F149"/>
              </svg>
            </div>
            <h3 className="text-black text-2xl font-normal mb-4">Score and risk band engine</h3>
            <p className="text-[#333] text-base leading-[145%]">
              Say goodbye to manually creating landing pages and writing copy.
            </p>
          </motion.div>

          {/* Feature Card 3 */}
          <motion.div
            className="bg-white rounded-[10px] p-8 text-center hover:shadow-xl transition-shadow duration-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={tileVariants("left")}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <div className="inline-flex items-center justify-center w-[84px] h-[84px] rounded-[10px] bg-brand-purple border border-brand-yellow mb-6">
              <svg className="w-[40px] h-[40px]" viewBox="0 0 40 40" fill="none">
                <path d="M3.995 37.67C3.677 37.352 3.385 36.366 3.331 35.886C2.865 31.709 2.917 21.6885 3.325 17.4561C3.516 15.4728 4.088 14.8917 6.063 14.7269C16.375 13.8625 27.867 15.4063 38.306 14.7269C40.232 14.7674 40.874 15.9961 41.035 17.7509C41.437 22.0615 41.437 31.012 41.035 35.32C40.836 37.468 40.168 38.139 38.014 38.341C27.89 39.283 16.334 37.601 6.057 38.344C5.479 38.338 4.383 38.063 3.995 37.673V37.67ZM39.584 18.1904C39.682 16.687 39.492 16.3025 38.017 16.1609C27.93 15.1953 16.308 16.9299 6.057 16.1638C4.819 16.1898 4.66 17.1554 4.776 18.1904H39.584ZM4.776 23.3682V36.17C4.776 36.219 5.218 36.679 5.357 36.742H39.009C39.139 36.667 39.584 35.964 39.584 35.884V23.8019L39.153 23.3711H4.776V23.3682Z" fill="#E6F149"/>
              </svg>
            </div>
            <h3 className="text-black text-2xl font-normal mb-4">Credit passport minting</h3>
            <p className="text-[#333] text-base leading-[145%]">
              Headlime is a blog writer that cures writer's block. It is the only service
            </p>
          </motion.div>

          {/* Feature Card 4 */}
          <motion.div
            className="bg-white rounded-[10px] p-8 text-center hover:shadow-xl transition-shadow duration-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={tileVariants("right")}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            <div className="inline-flex items-center justify-center w-[84px] h-[84px] rounded-[10px] bg-brand-purple border border-brand-yellow mb-6">
              <svg className="w-[57px] h-[57px]" viewBox="0 0 57 57" fill="none">
                <path d="M44.7548 14.7929C48.6646 14.0176 52.5593 15.2838 54.9332 18.5202C59.2452 24.3972 56.5164 32.8285 49.4723 34.7971C48.9941 34.9308 47.5866 34.9816 47.4717 35.3252C47.1828 37.8473 48.2186 40.7011 46.3008 42.7307C46.8094 43.3129 47.3231 43.9731 47.4329 44.7704C47.6779 46.5511 47.6525 51.8796 47.4481 53.7026C47.2267 55.6679 45.3833 56.9645 43.4943 57H4.22347C2.6352 56.9289 1.07565 56.2332 0.474135 54.681C-0.0969665 53.2033 -0.0665528 47.2078 0.122688 45.4525C0.234205 44.4183 0.64479 43.406 1.44399 42.7307C1.09762 42.3718 0.717445 41.9266 0.523135 41.4645C-0.137518 39.8971 -0.137518 32.2343 0.523135 30.6618C0.818824 29.956 1.43048 29.5633 1.75996 28.92C-2.8663 20.6885 3.00692 10.1312 12.572 10.3225C14.26 6.92191 16.6846 3.94955 20.0386 2.10453C30.5989 -3.70308 43.1057 3.1523 44.7531 14.7946L44.7548 14.7929Z" fill="#E6F149"/>
              </svg>
            </div>
            <h3 className="text-black text-2xl font-normal mb-4">Credit oracle read endpoint</h3>
            <p className="text-[#333] text-base leading-[145%]">
              Our AI let's you generate more effective marketing copy faster.
            </p>
          </motion.div>

          {/* Feature Card 5 */}
          <motion.div
            className="bg-white rounded-[10px] p-8 text-center hover:shadow-xl transition-shadow duration-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={tileVariants("left")}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            <div className="inline-flex items-center justify-center w-[84px] h-[84px] rounded-[10px] bg-[#9747FF] border border-brand-yellow mb-6">
              <svg className="w-[57px] h-[57px]" viewBox="0 0 57 57" fill="none">
                <path d="M23.655 37.353C23.506 38.069 22.978 38.859 22.376 39.278C22.088 39.479 21.387 39.62 21.33 39.914L21.334 62.195C21.229 63.258 19.753 63.259 19.648 62.195L19.657 40.015C19.676 39.563 19.182 39.606 18.882 39.424C18.456 39.167 18.02 38.774 17.736 38.363C17.53 38.062 17.332 37.388 17.079 37.339L-4.993 37.345C-6.196 37.435 -6.39 35.795 -5.201 35.657L16.98 35.666C17.432 35.685 17.388 35.191 17.571 34.891C17.827 34.466 18.22 34.029 18.632 33.745C18.932 33.539 19.606 33.341 19.655 33.088L19.651 10.8073C19.756 9.74459 21.232 9.74321 21.337 10.8073L21.334 33.087C21.387 33.376 22.147 33.585 22.481 33.832C23.096 34.289 23.49 34.898 23.747 35.614L46.083 35.66C47.032 35.83 47.358 36.751 46.421 37.265L23.657 37.356L23.655 37.353Z" fill="#E6F149"/>
              </svg>
            </div>
            <h3 className="text-black text-2xl font-normal mb-4">Routing and fee logic</h3>
            <p className="text-[#333] text-base leading-[145%]">
              Say goodbye to manually creating landing pages and writing copy.
            </p>
          </motion.div>

          {/* Feature Card 6 */}
          <motion.div
            className="bg-white rounded-[10px] p-8 text-center hover:shadow-xl transition-shadow duration-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={tileVariants("right")}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          >
            <div className="inline-flex items-center justify-center w-[84px] h-[84px] rounded-[10px] bg-brand-purple border border-brand-yellow mb-6">
              <svg className="w-[57px] h-[57px]" viewBox="0 0 84 84" fill="none">
                <path d="M17.4466 17.0434L65.1511 17C68.8067 17.293 71.8723 19.8895 72.7317 23.4519C73.1101 35.851 73.0602 48.4079 72.7567 60.8123C72.0458 63.9305 69.6135 66.3969 66.5019 67.1472C50.3117 67.6558 34.0231 67.2156 17.7961 67.3693C13.6753 67.0421 10.3955 63.8096 10 59.6901V24.6792C10.3837 20.7042 13.4703 17.4993 17.4466 17.0434ZM17.8382 21.2391C15.7646 21.5439 14.3534 23.1168 14.1904 25.1969V59.1737C14.3652 61.3918 15.9723 62.9989 18.1903 63.1736H64.6268C66.9473 63.0146 68.5386 61.4943 68.7568 59.1737V25.327C68.6306 23.0458 67.0538 21.3783 64.7569 21.197L17.8382 21.2391Z" fill="#E6F149"/>
                <path d="M33.0796 49.6602L40.1583 42.6433C38.6012 42.1137 37.7458 40.7668 38.7168 39.232L49.5996 28.4754C50.3355 27.867 51.3946 27.8631 52.162 28.4123L63.1131 39.232C64.4626 41.1991 62.0237 43.5355 60.1039 42.1098L53.0134 35.2335V55.4958C53.0134 56.296 51.7572 57.1265 50.9806 57.1462C50.1528 57.1659 48.8164 56.3591 48.8164 55.4958V35.2335L41.6037 42.2504C43.2936 42.5079 44.0505 44.2516 43.0452 45.659L32.2952 56.4169C31.5593 57.0253 30.5002 57.0292 29.7328 56.48L18.7817 45.5289C17.4243 43.5907 19.6674 41.2832 21.6621 42.5171L28.8813 49.6589V29.1364C28.8813 28.3361 30.1375 27.5057 30.9141 27.4859C31.742 27.4662 33.0783 28.2731 33.0783 29.1364V49.6602H33.0796Z" fill="#E6F149"/>
              </svg>
            </div>
            <h3 className="text-black text-2xl font-normal mb-4">Repayment score updates</h3>
            <p className="text-[#333] text-base leading-[145%]">
              Headlime is a blog writer that cures writer's block. It is the only service
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

