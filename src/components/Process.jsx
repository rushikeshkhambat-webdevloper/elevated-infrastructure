import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext.jsx";

export default function Process() {
  const { t } = useLanguage();
  const steps = t("process.steps");

  return (
    <section className="w-full bg-[#F5F2EC] dark:bg-[#0F0F0F] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-xl text-center will-change-transform"
        >
          <h2 className="text-4xl md:text-5xl text-[#1A1A1A] dark:text-[#F5F2EC]">
            {t("process.title")}
          </h2>
          <p className="mt-4 text-sm text-[#6B6B6B] dark:text-[#A0A0A0]">{t("process.subtitle")}</p>
        </motion.div>

        <div className="relative mt-16 grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-6">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-[#E0D9CC] dark:bg-[#2A2A2A] md:block" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-[#F5F2EC] dark:bg-[#0F0F0F] will-change-transform"
            >
              <span className="block text-5xl text-[#B8934A] dark:text-[#D4AF61]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-2xl text-[#1A1A1A] dark:text-[#F5F2EC]">{step.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-[#6B6B6B] dark:text-[#A0A0A0]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
