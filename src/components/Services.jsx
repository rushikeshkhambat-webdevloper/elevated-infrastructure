import { motion } from "framer-motion";
import { DraftingCompass, HardHat, Sofa, Hammer } from "lucide-react";
import { useLanguage } from "../context/LanguageContext.jsx";

const ICONS = [DraftingCompass, HardHat, Sofa, Hammer];

export default function Services() {
  const { t } = useLanguage();
  const items = t("services.items");

  return (
    <section id="services" className="w-full bg-[#F5F2EC] dark:bg-[#0F0F0F] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-xl text-center will-change-transform"
        >
          <h2 className="text-4xl md:text-5xl text-[#1A1A1A] dark:text-[#F5F2EC]">
            {t("services.title")}
          </h2>
          <p className="mt-4 text-sm text-[#6B6B6B] dark:text-[#A0A0A0]">
            {t("services.subtitle")}
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group border border-[#E0D9CC] dark:border-[#2A2A2A] p-8 transition-transform duration-300 hover:-translate-y-1 will-change-transform"
              >
                <Icon className="text-[#B8934A] dark:text-[#D4AF61]" size={28} strokeWidth={1.5} />
                <h3 className="mt-6 text-2xl text-[#1A1A1A] dark:text-[#F5F2EC]">{item.title}</h3>
                <p className="mt-3 text-xs leading-relaxed text-[#6B6B6B] dark:text-[#A0A0A0]">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
