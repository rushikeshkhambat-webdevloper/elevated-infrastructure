import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "../context/LanguageContext.jsx";

const HERO_IMG =
  "https://i.ibb.co/HDrSFQyF/Whats-App-Image-2026-09-26-at-22-42-05-1.jpg";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.3 },
  },
};

const word = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  const { t } = useLanguage();
  const title = t("hero.title");
  const words = title.split(" ");

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex h-screen min-h-[640px] w-full items-center overflow-hidden bg-[#1A1A1A]"
    >
      <img
        src={HERO_IMG}
        alt="Elevated Infrastructure — architectural render"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5 text-[11px] uppercase tracking-[0.3em] text-[#D4AF61]"
        >
          {t("hero.eyebrow")}
        </motion.p>

        <motion.h1
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-3xl text-5xl leading-[1.05] text-white md:text-7xl"
        >
          {words.map((w, i) => (
            <motion.span key={i} variants={word} className="mr-4 inline-block will-change-transform">
              {w}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-6 max-w-md text-sm text-white/85 md:text-base"
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <button
            type="button"
            onClick={scrollToProjects}
            className="mt-10 rounded-full bg-[#B8934A] px-8 py-3 text-xs uppercase tracking-widest text-white transition-transform duration-300 hover:scale-105 will-change-transform"
          >
            {t("hero.cta")}
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/70">
        <ChevronDown className="animate-bounce-slow" size={22} />
      </div>
    </section>
  );
}
