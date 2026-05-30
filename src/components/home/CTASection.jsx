import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function CTASection() {
  const { t } = useTranslation();

  return (
    <section className="relative py-24 md:py-36 bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-black to-black" />

      <div className="relative max-w-4xl mx-auto px-5 md:px-8 text-center">
        <p className="uppercase tracking-[0.4em] text-xs text-white/50">
          {t("cta.label")}
        </p>
        <h2 style={{ color: "#ffffff" }}
          className="text-3xl md:text-5xl font-light mt-6 leading-tight whitespace-pre-line">
          {t("cta.title")}
        </h2>
        <p className="mt-7 text-white/60 leading-7 text-base md:text-lg max-w-2xl mx-auto">
          {t("cta.subtitle")}
        </p>

        <div className="mt-10 md:mt-12 flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
          <Link to="/contact"
            className="btn btn-primary bg-white text-black border border-white hover:bg-transparent hover:text-white transition">
            {t("cta.primary")}
          </Link>
          <Link to="/properties"
            className="btn btn-secondary border-white/30 text-white hover:bg-white hover:text-black transition">
            {t("cta.secondary")}
          </Link>
        </div>

        <p className="mt-12 text-xs text-white/30 tracking-[0.3em] uppercase">
          Swiss Panama Realty • Luxury Real Estate Experience
        </p>
      </div>
    </section>
  );
}