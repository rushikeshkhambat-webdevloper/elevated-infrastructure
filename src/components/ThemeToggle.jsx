import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext.jsx";

export default function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={`relative flex h-9 w-9 items-center justify-center rounded-full border border-[#E0D9CC] text-[#1A1A1A] transition-colors duration-300 hover:border-[#B8934A] dark:border-[#2A2A2A] dark:text-[#F5F2EC] dark:hover:border-[#D4AF61] ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ opacity: 0, rotate: -45 }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={{ opacity: 0, rotate: 45 }}
          transition={{ duration: 0.25 }}
          className="will-change-transform flex items-center justify-center"
        >
          {theme === "light" ? <Sun size={16} /> : <Moon size={16} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
