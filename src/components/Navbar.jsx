import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle.jsx";
import LanguageToggle from "./LanguageToggle.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";

const LOGO_URL =
  "https://i.ibb.co/Xkt2Rdsr/Whats-App-Image-2026-09-26-at-22-42-05-2.jpg";

const LINKS = [
  { id: "hero", key: "nav.home" },
  { id: "projects", key: "nav.projects" },
  { id: "about", key: "nav.about" },
  { id: "services", key: "nav.services" },
  { id: "contact", key: "nav.contact" },
];

export default function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    setDrawerOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
          scrolled
            ? "bg-[#F5F2EC] dark:bg-[#0F0F0F] border-b border-[#E0D9CC] dark:border-[#2A2A2A]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10 md:py-5">
          <button
            type="button"
            onClick={() => scrollTo("hero")}
            className="flex items-center gap-3"
          >
            <img
              src={LOGO_URL}
              alt="Elevated Infrastructure logo"
              className="h-12 w-auto object-contain md:h-14"
            />
            <span
              className={`hidden md:inline text-lg tracking-widest transition-colors duration-300 ${
                scrolled || drawerOpen
                  ? "text-[#1A1A1A] dark:text-[#F5F2EC]"
                  : "text-white"
              }`}
            >
              ELEVATED INFRASTRUCTURE
            </span>
          </button>

          <nav className="hidden lg:flex items-center gap-8">
            {LINKS.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollTo(link.id)}
                className={`text-xs uppercase tracking-widest transition-colors duration-300 hover:text-[#B8934A] dark:hover:text-[#D4AF61] ${
                  scrolled ? "text-[#1A1A1A] dark:text-[#F5F2EC]" : "text-white"
                }`}
              >
                {t(link.key)}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <LanguageToggle />
            <button
              type="button"
              onClick={() => scrollTo("contact")}
              className="rounded-full bg-[#B8934A] dark:bg-[#D4AF61] px-5 py-2 text-xs uppercase tracking-widest text-white dark:text-[#0F0F0F] transition-transform duration-300 hover:scale-105 will-change-transform"
            >
              {t("nav.enquire")}
            </button>
          </div>

          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            className={`lg:hidden flex h-9 w-9 items-center justify-center rounded-full border transition-colors duration-300 ${
              scrolled
                ? "border-[#E0D9CC] text-[#1A1A1A] dark:border-[#2A2A2A] dark:text-[#F5F2EC]"
                : "border-white/40 text-white"
            }`}
            aria-label="Open menu"
          >
            <Menu size={18} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex flex-col bg-[#F5F2EC] dark:bg-[#0F0F0F] will-change-transform"
          >
            <div className="flex items-center justify-between px-5 py-4">
              <img
                src={LOGO_URL}
                alt="Elevated Infrastructure logo"
                className="h-11 w-auto object-contain"
              />
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E0D9CC] text-[#1A1A1A] dark:border-[#2A2A2A] dark:text-[#F5F2EC]"
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex flex-1 flex-col items-start justify-center gap-6 px-8">
              {LINKS.map((link, i) => (
                <motion.button
                  key={link.id}
                  type="button"
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  onClick={() => scrollTo(link.id)}
                  className="text-4xl text-[#1A1A1A] dark:text-[#F5F2EC] will-change-transform"
                >
                  {t(link.key)}
                </motion.button>
              ))}
            </div>

            <div className="flex items-center justify-between px-8 py-8 border-t border-[#E0D9CC] dark:border-[#2A2A2A]">
              <div className="flex items-center gap-3">
                <ThemeToggle />
                <LanguageToggle />
              </div>
              <button
                type="button"
                onClick={() => scrollTo("contact")}
                className="rounded-full bg-[#B8934A] dark:bg-[#D4AF61] px-5 py-2 text-xs uppercase tracking-widest text-white dark:text-[#0F0F0F]"
              >
                {t("nav.enquire")}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}