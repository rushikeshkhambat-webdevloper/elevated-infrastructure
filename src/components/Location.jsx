import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import { useLanguage } from "../context/LanguageContext.jsx";

const ADDRESS =
  "RM 106, Opp. Hotel Vrundavan, Chandra Complex, Bajajnagar, MIDC Waluj, Chh. Sambhajinagar";
const PHONE = "+91 9096516199";
const EMAIL = "info@elevatedinfra.in";
const MAP_EMBED =
  "https://www.google.com/maps?q=Waluj+MIDC+Chhatrapati+Sambhajinagar&output=embed";
const MAP_LINK =
  "https://www.google.com/maps/search/?api=1&query=Waluj+MIDC+Chhatrapati+Sambhajinagar";

export default function Location() {
  const { t } = useLanguage();

  return (
    <section
      id="location"
      className="w-full bg-[#F5F2EC] dark:bg-[#0F0F0F] py-20 md:py-28 transition-colors duration-300"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="will-change-transform"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-[#B8934A] dark:text-[#D4AF61]">
              {t("location.eyebrow") || "Visit Our Office"}
            </p>
            <h2 className="mt-4 text-4xl md:text-5xl text-[#1A1A1A] dark:text-[#F5F2EC]">
              {t("location.title") || "Find Us Here"}
            </h2>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4">
                <MapPin
                  size={20}
                  className="text-[#B8934A] dark:text-[#D4AF61] mt-1 shrink-0"
                />
                <p className="text-sm text-[#6B6B6B] dark:text-[#A0A0A0] leading-relaxed">
                  {ADDRESS}
                </p>
              </div>

              <div className="flex items-start gap-4">
                <Phone
                  size={20}
                  className="text-[#B8934A] dark:text-[#D4AF61] mt-1 shrink-0"
                />
                <a
                  href={`tel:${PHONE.replace(/\s/g, "")}`}
                  className="text-sm text-[#6B6B6B] dark:text-[#A0A0A0] hover:text-[#B8934A] dark:hover:text-[#D4AF61] transition-colors"
                >
                  {PHONE}
                </a>
              </div>

              <div className="flex items-start gap-4">
                <Mail
                  size={20}
                  className="text-[#B8934A] dark:text-[#D4AF61] mt-1 shrink-0"
                />
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-sm text-[#6B6B6B] dark:text-[#A0A0A0] hover:text-[#B8934A] dark:hover:text-[#D4AF61] transition-colors"
                >
                  {EMAIL}
                </a>
              </div>

              <div className="flex items-start gap-4">
                <Clock
                  size={20}
                  className="text-[#B8934A] dark:text-[#D4AF61] mt-1 shrink-0"
                />
                <div className="text-sm text-[#6B6B6B] dark:text-[#A0A0A0]">
                  <p>Mon – Sat: 10:00 AM – 7:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            <a
              href={MAP_LINK}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#B8934A] dark:bg-[#D4AF61] px-6 py-3 text-xs uppercase tracking-widest text-white dark:text-[#0F0F0F] transition-transform duration-300 hover:scale-105 will-change-transform"
            >
              <Navigation size={14} />
              Get Directions
            </a>
          </motion.div>

          {/* Right — Map */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="w-full h-[400px] lg:h-[500px] overflow-hidden rounded-2xl border border-[#E0D9CC] dark:border-[#2A2A2A] will-change-transform"
          >
            <iframe
              title="Elevated Infrastructure location"
              src={MAP_EMBED}
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}