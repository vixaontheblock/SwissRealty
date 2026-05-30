import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import heroImg from "../../assets/properties/las-quintas/hero.webp";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <img src={heroImg} alt="Luxury Property Panama"
        className="absolute inset-0 w-full h-full object-cover scale-105 animate-[heroZoom_20s_ease-in-out_infinite_alternate]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 w-full">
        <div className="max-w-3xl">
          <p style={{ color: "rgba(255,255,255,0.6)" }}
            className="uppercase tracking-[0.4em] text-xs mb-4">
            {t("hero.label")}
          </p>
          <h1 style={{ color: "#ffffffff" }}
            className="text-4xl sm:text-5xl md:text-7xl font-light mt-2 leading-[1.05] whitespace-pre-line">
            {t("hero.title")}
          </h1>
          <p style={{ color: "rgba(255, 255, 255, 0.7)" }}
            className="mt-6 text-base md:text-lg leading-7 max-w-xl">
            {t("hero.subtitle")}
          </p>
          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 md:gap-4">
            <Link to="/properties"
              className="btn btn-primary bg-white text-black hover:bg-transparent hover:text-white border border-white/30 text-center">
              {t("hero.cta_primary")}
            </Link>
            <Link to="/contact"
              className="btn btn-secondary border-white/30 hover:bg-white hover:text-black text-center"
              style={{ color: "#000000ff" }}>
              {t("hero.cta_secondary")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}