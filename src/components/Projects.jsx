import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext.jsx";
import { projects } from "../data/projects.js";
import ProjectCard from "./ProjectCard.jsx";

const FILTERS = [
  { key: "all", value: "All" },
  { key: "residential", value: "Residential" },
  { key: "commercial", value: "Commercial" },
  { key: "interior", value: "Interior" },
];

export default function Projects({ onSelectProject }) {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("all");
  const filters = t("projects.filters");

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category.toLowerCase() === activeFilter);

  return (
    <section id="projects" className="w-full bg-[#F5F2EC] dark:bg-[#0F0F0F] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end will-change-transform"
        >
          <div>
            <h2 className="text-4xl md:text-5xl text-[#1A1A1A] dark:text-[#F5F2EC]">
              {t("projects.title")}
            </h2>
            <p className="mt-4 text-sm text-[#6B6B6B] dark:text-[#A0A0A0]">
              {t("projects.subtitle")}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                type="button"
                onClick={() => setActiveFilter(f.key)}
                className={`rounded-full border px-4 py-1.5 text-xs uppercase tracking-widest transition-colors duration-300 ${
                  activeFilter === f.key
                    ? "bg-[#B8934A] dark:bg-[#D4AF61] border-[#B8934A] dark:border-[#D4AF61] text-white dark:text-[#0F0F0F]"
                    : "border-[#E0D9CC] dark:border-[#2A2A2A] text-[#1A1A1A] dark:text-[#F5F2EC] hover:border-[#B8934A] dark:hover:border-[#D4AF61]"
                }`}
              >
                {filters[f.key]}
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="mt-14 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} onSelect={onSelectProject} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
