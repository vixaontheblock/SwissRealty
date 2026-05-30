import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import entranceImg from "../../assets/properties/las-quintas/view-tw-the-entrance.jpg";

export default function CTASection() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-neutral-900 text-white">
      {/* Background image with strong overlay */}
      <img src={entranceImg} alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/90 via-neutral-900/80 to-neutral-900/95" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 py-24 md:py-40">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* LEFT */}
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/40 mb-6">
              {t("cta.label")}
            </p>
            <h2 className="text-3xl md:text-5xl font-light leading-[1.1] whitespace-pre-line mb-8"
              style={{ letterSpacing: "-0.02em" }}>
              {t("cta.title")}
            </h2>
            <p className="text-white/55 leading-7 text-base max-w-md">
              {t("cta.subtitle")}
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-4">
            <Link to="/contact"
              className="btn btn-primary bg-white text-black border border-white hover:bg-transparent hover:text-white transition w-full justify-center">
              {t("cta.primary")}
            </Link>
            <Link to="/properties"
              className="btn btn-secondary border-white/20 text-white hover:bg-white hover:text-black transition w-full justify-center">
              {t("cta.secondary")}
            </Link>

            {/* Credibility row */}
            <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap gap-8">
              {[
                { n: "SPR-0001", l: "Primera Propiedad" },
                { n: "100%", l: "Privacidad Garantizada" },
                { n: "< 24h", l: "Tiempo de Respuesta" },
              ].map(({ n, l }) => (
                <div key={l}>
                  <div className="text-white font-light text-lg">{n}</div>
                  <div className="text-white/35 text-[10px] uppercase tracking-[0.2em]">{l}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
