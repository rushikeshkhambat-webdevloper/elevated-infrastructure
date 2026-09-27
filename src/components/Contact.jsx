import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useLanguage } from "../context/LanguageContext.jsx";

const WHATSAPP_NUMBER = "919096516199";

export default function Contact() {
  const { t } = useLanguage();
  const form = t("contact.form");
  const options = form.projectTypeOptions;

  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "residential",
    message: "",
  });

  const handleChange = (field) => (e) => {
    setValues((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const typeLabel = options[values.projectType] || values.projectType;
    const lines = [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Phone: ${values.phone}`,
      `Project Type: ${typeLabel}`,
      `Message: ${values.message}`,
    ];
    const text = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="w-full bg-[#F5F2EC] dark:bg-[#0F0F0F] py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-5 md:px-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="will-change-transform"
        >
          <p className="text-xs uppercase tracking-widest text-[#B8934A] dark:text-[#D4AF61]">
            {t("contact.eyebrow")}
          </p>
          <h2 className="mt-4 text-4xl md:text-5xl text-[#1A1A1A] dark:text-[#F5F2EC]">
            {t("contact.title")}
          </h2>
          <p className="mt-4 max-w-sm text-sm text-[#6B6B6B] dark:text-[#A0A0A0]">
            {t("contact.subtitle")}
          </p>

          <div className="mt-10 space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="mt-0.5 shrink-0 text-[#B8934A] dark:text-[#D4AF61]" size={18} />
              <p className="text-sm text-[#1A1A1A] dark:text-[#F5F2EC]">{t("contact.address")}</p>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="shrink-0 text-[#B8934A] dark:text-[#D4AF61]" size={18} />
              <p className="text-sm text-[#1A1A1A] dark:text-[#F5F2EC]">{t("contact.phone")}</p>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="shrink-0 text-[#B8934A] dark:text-[#D4AF61]" size={18} />
              <p className="text-sm text-[#1A1A1A] dark:text-[#F5F2EC]">{t("contact.email")}</p>
            </div>
            <div className="flex items-center gap-4">
              <Clock className="shrink-0 text-[#B8934A] dark:text-[#D4AF61]" size={18} />
              <p className="text-sm text-[#1A1A1A] dark:text-[#F5F2EC]">{t("contact.hours")}</p>
            </div>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="will-change-transform space-y-5"
        >
          <div>
            <label className="mb-2 block text-xs uppercase tracking-widest text-[#6B6B6B] dark:text-[#A0A0A0]">
              {form.name}
            </label>
            <input
              type="text"
              required
              value={values.name}
              onChange={handleChange("name")}
              className="w-full border border-[#E0D9CC] dark:border-[#2A2A2A] bg-transparent px-4 py-3 text-sm text-[#1A1A1A] dark:text-[#F5F2EC] outline-none focus:border-[#B8934A] dark:focus:border-[#D4AF61]"
            />
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-xs uppercase tracking-widest text-[#6B6B6B] dark:text-[#A0A0A0]">
                {form.email}
              </label>
              <input
                type="email"
                required
                value={values.email}
                onChange={handleChange("email")}
                className="w-full border border-[#E0D9CC] dark:border-[#2A2A2A] bg-transparent px-4 py-3 text-sm text-[#1A1A1A] dark:text-[#F5F2EC] outline-none focus:border-[#B8934A] dark:focus:border-[#D4AF61]"
              />
            </div>
            <div>
              <label className="mb-2 block text-xs uppercase tracking-widest text-[#6B6B6B] dark:text-[#A0A0A0]">
                {form.phone}
              </label>
              <input
                type="tel"
                required
                value={values.phone}
                onChange={handleChange("phone")}
                className="w-full border border-[#E0D9CC] dark:border-[#2A2A2A] bg-transparent px-4 py-3 text-sm text-[#1A1A1A] dark:text-[#F5F2EC] outline-none focus:border-[#B8934A] dark:focus:border-[#D4AF61]"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-xs uppercase tracking-widest text-[#6B6B6B] dark:text-[#A0A0A0]">
              {form.projectType}
            </label>
            <select
              value={values.projectType}
              onChange={handleChange("projectType")}
              className="w-full border border-[#E0D9CC] dark:border-[#2A2A2A] bg-[#F5F2EC] dark:bg-[#0F0F0F] px-4 py-3 text-sm text-[#1A1A1A] dark:text-[#F5F2EC] outline-none focus:border-[#B8934A] dark:focus:border-[#D4AF61]"
            >
              <option value="residential">{options.residential}</option>
              <option value="commercial">{options.commercial}</option>
              <option value="interior">{options.interior}</option>
              <option value="other">{options.other}</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-xs uppercase tracking-widest text-[#6B6B6B] dark:text-[#A0A0A0]">
              {form.message}
            </label>
            <textarea
              required
              rows={4}
              value={values.message}
              onChange={handleChange("message")}
              className="w-full border border-[#E0D9CC] dark:border-[#2A2A2A] bg-transparent px-4 py-3 text-sm text-[#1A1A1A] dark:text-[#F5F2EC] outline-none focus:border-[#B8934A] dark:focus:border-[#D4AF61]"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-[#B8934A] dark:bg-[#D4AF61] py-3 text-xs uppercase tracking-widest text-white dark:text-[#0F0F0F] transition-transform duration-300 hover:scale-[1.02] will-change-transform"
          >
            {form.submit}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
