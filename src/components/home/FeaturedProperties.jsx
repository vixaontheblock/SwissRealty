import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import properties from "../../data/properties";
import PropertyCard from "../property/PropertyCard";

export default function FeaturedProperties() {
  const { t } = useTranslation();
  const featured = properties.find((p) => p.featured);
  const rest = properties.filter((p) => !p.featured).slice(0, 2);

  return (
    <section className="py-20 md:py-28">

      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-14">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-neutral-400 mb-3">
            {t("featured.label")}
          </p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight">
            {t("featured.title")}
          </h2>
        </div>
        <p className="text-neutral-500 text-sm md:text-base max-w-sm leading-6">
          {t("featured.subtitle")}
        </p>
      </div>

      {featured && (
        <Link to={`/properties/${featured.slug}`}
          className="group relative overflow-hidden rounded-[24px] md:rounded-[32px] block mb-6">
          <img src={featured.image} alt={featured.title}
            className="w-full h-[320px] md:h-[520px] object-cover group-hover:scale-[1.02] transition duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

          {/* Status badge */}
          <div className="absolute top-5 left-5 flex gap-2">
            <span className="bg-amber-400 text-black text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 rounded-full font-medium">
              En Remodelación
            </span>
          </div>

          <div className="absolute inset-0 flex items-end p-6 md:p-12">
            <div className="text-white w-full">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-white/55 mb-3">
                    {t("featured.featured_label")}
                  </p>
                  <h3 className="text-2xl md:text-4xl font-light leading-tight mb-2">
                    {featured.title}
                  </h3>
                  <p className="text-white/65 text-sm md:text-base">{featured.subtitle}</p>
                </div>
                <div className="flex-shrink-0 text-right">
                  <p className="text-2xl md:text-3xl font-light">
                    ${featured.price.toLocaleString("en-US")}
                  </p>
                  <p className="text-white/45 text-xs uppercase tracking-[0.2em] mt-1">
                    {featured.specs.bedrooms} {t("property.beds")} · {featured.specs.bathrooms} {t("property.baths")} · {featured.specs.areaSqm} m²
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Hover arrow */}
          <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 backdrop-blur
            border border-white/20 flex items-center justify-center
            group-hover:bg-white/20 transition-all duration-300">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 12L12 2M12 2H5M12 2v7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </Link>
      )}

      {rest.length > 0 && (
        <div className="grid sm:grid-cols-2 gap-5 md:gap-6 mt-4">
          {rest.map((p) => <PropertyCard key={p.id} property={p} />)}
        </div>
      )}

      <div className="mt-10 md:mt-14 text-center">
        <Link to="/properties" className="btn btn-secondary">
          {t("featured.view_all")}
        </Link>
      </div>

    </section>
  );
}
