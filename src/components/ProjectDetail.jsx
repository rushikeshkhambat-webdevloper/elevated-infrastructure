import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext.jsx";
import { projects } from "../data/projects.js";

export default function ProjectDetail({ project, onBack, onSelectProject }) {
  const { lang, t } = useLanguage();
  const meta = t("projects.meta");

  const title = lang === "mr" ? project.titleMr : project.title;
  const location = lang === "mr" ? project.locationMr : project.location;
  const category = lang === "mr" ? project.categoryMr : project.category;
  const client = lang === "mr" ? project.clientMr : project.client;
  const description = lang === "mr" ? project.descriptionMr : project.description;

  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen w-full bg-[#F5F2EC] dark:bg-[#0F0F0F]"
    >
      <div className="relative h-[60vh] w-full">
        <img src={project.coverImage} alt={title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/30" />
        <button
          type="button"
          onClick={onBack}
          className="absolute left-5 top-6 flex items-center gap-2 rounded-full bg-black/40 px-4 py-2 text-xs uppercase tracking-widest text-white backdrop-blur-0 md:left-10"
        >
          <ArrowLeft size={14} />
          {t("projects.backToProjects")}
        </button>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
          <div className="lg:col-span-2">
            <span className="text-xs uppercase tracking-widest text-[#B8934A] dark:text-[#D4AF61]">
              {category}
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl text-[#1A1A1A] dark:text-[#F5F2EC]">
              {title}
            </h1>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-[#6B6B6B] dark:text-[#A0A0A0]">
              {description}
            </p>
          </div>

          <div className="border-t border-[#E0D9CC] dark:border-[#2A2A2A] pt-6 lg:border-t-0 lg:border-l lg:pl-10 lg:pt-0">
            <dl className="space-y-4 text-sm">
              {[
                [meta.location, location],
                [meta.year, project.year],
                [meta.area, project.area],
                [meta.client, client],
                [meta.category, category],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between gap-4 border-b border-[#E0D9CC] dark:border-[#2A2A2A] pb-3">
                  <dt className="text-[#6B6B6B] dark:text-[#A0A0A0]">{label}</dt>
                  <dd className="text-right text-[#1A1A1A] dark:text-[#F5F2EC]">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl text-[#1A1A1A] dark:text-[#F5F2EC]">{t("projects.gallery")}</h2>
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
            {project.gallery.map((img, i) => (
              <div key={i} className="aspect-[4/3] overflow-hidden">
                <img
                  src={img}
                  alt={`${title} gallery ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-[#E0D9CC] dark:border-[#2A2A2A] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            onClick={() => onSelectProject(prevProject)}
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#1A1A1A] dark:text-[#F5F2EC] hover:text-[#B8934A] dark:hover:text-[#D4AF61]"
          >
            <ArrowLeft size={14} />
            {t("projects.previous")}
          </button>
          <button
            type="button"
            onClick={() => onSelectProject(nextProject)}
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#1A1A1A] dark:text-[#F5F2EC] hover:text-[#B8934A] dark:hover:text-[#D4AF61]"
          >
            {t("projects.next")}
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
