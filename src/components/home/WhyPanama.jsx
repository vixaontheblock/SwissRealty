import { useTranslation } from "react-i18next";

const ICONS = [
  // Dollar sign
  <svg key="0" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
  // TrendingUp
  <svg key="1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
  // Sun
  <svg key="2" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>,
];

export default function WhyPanama() {
  const { t } = useTranslation();

  const cards = [
    { label: t("why.card1_label"), title: t("why.card1_title"), text: t("why.card1_text"), icon: ICONS[0] },
    { label: t("why.card2_label"), title: t("why.card2_title"), text: t("why.card2_text"), icon: ICONS[1] },
    { label: t("why.card3_label"), title: t("why.card3_title"), text: t("why.card3_text"), icon: ICONS[2] },
  ];

  return (
    <section className="py-24 md:py-36">
      <div className="max-w-6xl mx-auto px-5 md:px-8">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-neutral-400 mb-4">
              {t("why.label") || "Inversión Segura"}
            </p>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight leading-[1.1]">
              {t("why.title")}
            </h2>
          </div>
          <p className="text-neutral-500 leading-7 max-w-sm text-sm md:text-base">
            {t("why.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {cards.map((card, i) => (
            <div key={i}
              className="group p-7 md:p-9 rounded-[24px] border border-neutral-200 bg-white
                hover:border-neutral-900 hover:shadow-2xl hover:-translate-y-1
                transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-default">
              <div className="w-10 h-10 rounded-[12px] bg-neutral-100 group-hover:bg-neutral-900
                flex items-center justify-center text-neutral-600 group-hover:text-white
                transition-all duration-300 mb-6">
                {card.icon}
              </div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-neutral-400 mb-3">
                {card.label}
              </p>
              <h3 className="text-xl md:text-2xl font-light mb-3">
                {card.title}
              </h3>
              <p className="text-neutral-500 leading-6 text-sm">
                {card.text}
              </p>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-14 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 pt-14 border-t border-neutral-200">
          {[
            { n: "$295K", l: "Precio de venta" },
            { n: "1,536 m²", l: "Área del lote" },
            { n: "5 min", l: "A la playa" },
            { n: "~1h", l: "De Ciudad de Panamá" },
          ].map(({ n, l }) => (
            <div key={l}>
              <div className="text-2xl md:text-3xl font-light text-neutral-900 mb-1">{n}</div>
              <div className="text-xs uppercase tracking-[0.2em] text-neutral-400">{l}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
