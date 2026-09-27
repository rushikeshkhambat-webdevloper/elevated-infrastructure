import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "../context/LanguageContext.jsx";

function Counter({ value, suffix, duration = 1.4 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = null;
    let raf;

    const step = (timestamp) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const { t } = useLanguage();
  const items = t("stats.items");

  return (
    <section className="w-full bg-[#1A1A1A] dark:bg-[#050505] py-16 md:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 md:grid-cols-4 md:px-10 md:gap-6">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex flex-col items-center text-center will-change-transform"
          >
            <span className="text-4xl md:text-5xl text-[#D4AF61]">
              <Counter value={item.value} suffix={item.suffix} />
            </span>
            <span className="mt-2 text-[11px] md:text-xs uppercase tracking-widest text-[#A0A0A0]">
              {item.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
