import { useLanguage } from "../context/LanguageContext.jsx";

const LOGO_URL =
  "https://i.ibb.co/Xkt2Rdsr/Whats-App-Image-2026-09-26-at-22-42-05-2.jpg";

const socials = [
  {
    name: "Instagram",
    href: "https://instagram.com",
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2.5" y="2.5" width="19" height="19" rx="5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M14.5 8.5h2V5.3c-.35-.05-1.55-.15-2.95-.15-2.9 0-4.9 1.77-4.9 5.02V13H6v3.5h3.6V22H13v-5.5h3.4L17 13h-4v-2.4c0-1 .27-1.7 1.5-1.7z"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2.5" y="2.5" width="19" height="19" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="7.3" cy="7.7" r="1.3" fill="currentColor" />
        <path d="M7.3 10.8v6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path
          d="M11.2 17.3v-4c0-1.4 1-2.5 2.4-2.5s2.1 1 2.1 2.5v4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M11.2 10.8v6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Footer() {
  const { t } = useLanguage();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const quickLinks = [
    { id: "hero", label: t("nav.home") },
    { id: "projects", label: t("nav.projects") },
    { id: "about", label: t("nav.about") },
    { id: "services", label: t("nav.services") },
    { id: "contact", label: t("nav.contact") },
  ];

  const services = t("services.items");

  return (
    <footer className="w-full bg-[#1A1A1A] dark:bg-[#050505] pt-20 pb-8 text-[#F5F2EC]">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <img
              src={LOGO_URL}
              alt="Elevated Infrastructure logo"
              className="h-20 w-auto object-contain md:h-24"
            />
            <p className="mt-5 text-lg">ELEVATED INFRASTRUCTURE</p>
            <p className="mt-1 text-xs uppercase tracking-widest text-[#A0A0A0]">{t("footer.tagline")}</p>
            <p className="mt-1 text-xs text-[#A0A0A0]">{t("footer.subTagline")}</p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#A0A0A0]">{t("footer.quickLinks")}</h4>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.id)}
                    className="text-sm text-[#F5F2EC] hover:text-[#D4AF61] transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#A0A0A0]">{t("footer.servicesTitle")}</h4>
            <ul className="mt-5 space-y-3">
              {services.map((s, i) => (
                <li key={i} className="text-sm text-[#F5F2EC]">
                  {s.title}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#A0A0A0]">{t("footer.follow")}</h4>
            <div className="mt-5 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.name}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#2A2A2A] text-[#F5F2EC] hover:border-[#D4AF61] hover:text-[#D4AF61] transition-colors duration-300"
                >
                  {s.svg}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-[#2A2A2A] pt-6 text-center text-xs text-[#A0A0A0]">
          {t("footer.copyright")}
        </div>
      </div>
    </footer>
  );
}