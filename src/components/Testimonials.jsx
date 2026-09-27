import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useLanguage } from "../context/LanguageContext.jsx";

export default function Testimonials() {
  const { t } = useLanguage();
  const items = t("testimonials.items");

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
            {t("testimonials.title")}
          </h2>
          <p className="mt-4 text-sm text-[#6B6B6B] dark:text-[#A0A0A0]">
            {t("testimonials.subtitle")}
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="border border-[#E0D9CC] dark:border-[#2A2A2A] p-8 will-change-transform"
            >
              <div className="flex gap-1 text-[#B8934A] dark:text-[#D4AF61]">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="mt-5 text-lg italic leading-relaxed text-[#1A1A1A] dark:text-[#F5F2EC]">
                “{item.quote}”
              </p>
              <p className="mt-6 text-xs uppercase tracking-widest text-[#6B6B6B] dark:text-[#A0A0A0]">
                {item.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
