import { useTranslation } from "react-i18next";

export default function Lifestyle() {
  const { t } = useTranslation();

  return (
    <section className="py-20 md:py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10 md:gap-16 items-center">

        {/* IMAGE */}
        <div className="relative overflow-hidden rounded-[20px]">
          <img
            src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1600&q=80"
            alt="Beach lifestyle in Panama"
            className="h-[320px] md:h-[560px] w-full object-cover hover:scale-105
              transition duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-[20px]" />
        </div>

        {/* TEXT */}
        <div>
          <p className="uppercase tracking-[0.4em] text-xs text-neutral-400">
            {t("lifestyle.label")}
          </p>
          <h2 className="text-3xl md:text-5xl font-light mt-5 leading-tight whitespace-pre-line">
            {t("lifestyle.title")}
          </h2>
          <p className="mt-7 text-neutral-500 leading-7 text-base md:text-lg">
            {t("lifestyle.text1")}
          </p>
          <p className="mt-4 text-neutral-500 leading-7 text-sm md:text-base">
            {t("lifestyle.text2")}
          </p>

          <div className="mt-8 h-px w-full bg-neutral-200" />

          <div className="mt-8 grid gap-6 md:gap-8">
            {[
              { h: t("lifestyle.h1"), p: t("lifestyle.h1_text") },
              { h: t("lifestyle.h2"), p: t("lifestyle.h2_text") },
              { h: t("lifestyle.h3"), p: t("lifestyle.h3_text") },
            ].map(({ h, p }, i) => (
              <div key={i}>
                <h4 className="text-lg md:text-xl font-light">{h}</h4>
                <p className="text-neutral-500 text-sm mt-2 leading-6">{p}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}