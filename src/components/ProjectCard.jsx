import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext.jsx";

export default function ProjectCard({ project, onSelect, index = 0 }) {
  const { lang, t } = useLanguage();
  const title = lang === "mr" ? project.titleMr : project.title;
  const location = lang === "mr" ? project.locationMr : project.location;
  const category = lang === "mr" ? project.categoryMr : project.category;

  return (
    <motion.button
      type="button"
      onClick={() => onSelect(project)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.06 }}
      className="group block w-full text-left will-change-transform"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={project.coverImage}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 will-change-transform"
        />
        <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20" />
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-2xl text-[#1A1A1A] dark:text-[#F5F2EC]">{title}</h3>
          <p className="mt-1 text-xs text-[#6B6B6B] dark:text-[#A0A0A0]">
            {location} — {project.year}
          </p>
        </div>
        <span className="mt-1 shrink-0 text-[10px] uppercase tracking-widest text-[#B8934A] dark:text-[#D4AF61]">
          {category}
        </span>
      </div>
    </motion.button>
  );
}
