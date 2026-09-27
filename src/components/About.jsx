import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext.jsx";

const ABOUT_IMG =
  "https://i.ibb.co/39BsLZP3/Whats-App-Image-2026-09-26-at-22-42-06-1.jpg";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="w-full bg-[#F5F2EC] dark:bg-[#0F0F0F] py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 md:px-10 lg:grid-cols-2 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden aspect-[4/5] will-change-transform"
        >
          <img
            src={ABOUT_IMG}
            alt="Elevated Infrastructure architectural project"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="will-change-transform"
        >
          <p className="text-xs uppercase tracking-widest text-[#B8934A] dark:text-[#D4AF61]">
            {t("about.eyebrow")}
          </p>
          <h2 className="mt-4 text-4xl md:text-5xl text-[#1A1A1A] dark:text-[#F5F2EC]">
            {t("about.title")}
          </h2>
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-[#6B6B6B] dark:text-[#A0A0A0]">
            {t("about.paragraph1")}
          </p>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-[#6B6B6B] dark:text-[#A0A0A0]">
            {t("about.paragraph2")}
          </p>
          <p className="mt-8 text-sm italic text-[#1A1A1A] dark:text-[#F5F2EC]">
            {t("about.signature")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
