import { useTranslation } from "react-i18next";

export default function WhyPanama() {
  const { t } = useTranslation();

  const cards = [
    { label: t("why.card1_label"), title: t("why.card1_title"), text: t("why.card1_text") },
    { label: t("why.card2_label"), title: t("why.card2_title"), text: t("why.card2_text") },
    { label: t("why.card3_label"), title: t("why.card3_title"), text: t("why.card3_text") },
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-5 md:px-8">

        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight">
            {t("why.title")}
          </h2>
          <p className="mt-5 text-neutral-500 leading-7">
            {t("why.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-8">
          {cards.map((card, i) => (
            <div key={i} className="p-7 md:p-8 rounded-[20px] border border-neutral-200
              bg-white hover:shadow-xl hover:-translate-y-1
              transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
                {card.label}
              </p>
              <h3 className="text-xl md:text-2xl font-light mt-4">
                {card.title}
              </h3>
              <p className="text-neutral-500 mt-3 leading-6 text-sm md:text-base">
                {card.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}