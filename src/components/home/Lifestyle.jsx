import { useTranslation } from "react-i18next";
import poolImg    from "../../assets/properties/las-quintas/pool2.jpg";
import gardenImg  from "../../assets/properties/las-quintas/backyard3.jpg";

export default function Lifestyle() {
  const { t } = useTranslation();

  return (
    <section className="py-24 md:py-36 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center">

          {/* IMAGES collage */}
          <div className="relative">
            <div className="overflow-hidden rounded-[24px] h-[380px] md:h-[520px]">
              <img src={poolImg} alt="Piscina Las Quintas"
                className="w-full h-full object-cover hover:scale-105 transition duration-700" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-4 md:-right-10
              bg-white rounded-[20px] shadow-xl border border-neutral-100
              px-6 py-5 w-48 md:w-56">
              <div className="text-xs uppercase tracking-[0.25em] text-neutral-400 mb-1">Estado</div>
              <div className="text-sm font-light text-neutral-900">En Remodelación</div>
              <div className="mt-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-xs text-neutral-500">Entrega estimada ----
                </span>
              </div>
            </div>
            {/* Small accent image */}
            <div className="absolute -top-5 -right-4 md:-right-8 w-28 md:w-36 h-28 md:h-36
              overflow-hidden rounded-[18px] border-4 border-neutral-50 shadow-lg">
              <img src={gardenImg} alt="Jardín"
                className="w-full h-full object-cover" />
            </div>
          </div>

          {/* TEXT */}
          <div>
            <p className="uppercase tracking-[0.4em] text-xs text-neutral-400 mb-5">
              {t("lifestyle.label")}
            </p>
            <h2 className="text-3xl md:text-5xl font-light leading-[1.1] mb-8 whitespace-pre-line"
              style={{ letterSpacing: "-0.02em" }}>
              {t("lifestyle.title")}
            </h2>
            <p className="text-neutral-500 leading-7 text-base mb-4">
              {t("lifestyle.text1")}
            </p>
            <p className="text-neutral-400 leading-7 text-sm mb-10">
              {t("lifestyle.text2")}
            </p>

            <div className="h-px w-full bg-neutral-200 mb-10" />

            <div className="grid gap-7">
              {[
                { h: t("lifestyle.h1"), p: t("lifestyle.h1_text") },
                { h: t("lifestyle.h2"), p: t("lifestyle.h2_text") },
                { h: t("lifestyle.h3"), p: t("lifestyle.h3_text") },
              ].map(({ h, p }, i) => (
                <div key={i} className="flex gap-5">
                  <div className="w-6 h-6 rounded-full border border-neutral-300 flex items-center justify-center
                    text-[10px] text-neutral-400 flex-shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-light text-neutral-900 mb-1">{h}</h4>
                    <p className="text-neutral-500 text-sm leading-6">{p}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
