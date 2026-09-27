import { useLanguage } from "../context/LanguageContext.jsx";

export default function LanguageToggle({ className = "" }) {
  const { lang, setLang } = useLanguage();

  const base =
    "px-2.5 py-1 text-[11px] uppercase tracking-widest rounded-full transition-colors duration-300 border";
  const active = "bg-[#B8934A] text-white border-[#B8934A] dark:bg-[#D4AF61] dark:border-[#D4AF61] dark:text-[#0F0F0F]";
  const inactive =
    "bg-transparent text-[#1A1A1A] border-[#E0D9CC] hover:border-[#B8934A] dark:text-[#F5F2EC] dark:border-[#2A2A2A] dark:hover:border-[#D4AF61]";

  return (
    <div className={`flex items-center gap-1 rounded-full ${className}`}>
      <button
        type="button"
        onClick={() => setLang("en")}
        className={`${base} ${lang === "en" ? active : inactive}`}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang("mr")}
        className={`${base} ${lang === "mr" ? active : inactive}`}
        aria-pressed={lang === "mr"}
      >
        मर
      </button>
    </div>
  );
}
