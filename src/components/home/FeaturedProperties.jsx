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
      <div className="mb-10 md:mb-14">
        <p className="text-xs uppercase tracking-[0.4em] text-neutral-400 mb-3">
          {t("featured.label")}
        </p>
        <h2 className="text-3xl md:text-4xl font-light tracking-tight">
          {t("featured.title")}
        </h2>
        <p className="text-neutral-500 mt-3 max-w-xl text-base">
          {t("featured.subtitle")}
        </p>
      </div>

      {featured && (
        <Link to={`/properties/${featured.slug}`}
          className="group relative overflow-hidden rounded-[20px] block mb-8">
          <img src={featured.image} alt={featured.title}
            className="w-full h-[320px] md:h-[480px] object-cover group-hover:scale-[1.02] transition duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent flex items-end p-6 md:p-12">
            <div className="text-white">
              <p className="text-xs uppercase tracking-[0.4em] text-white/60 mb-3">
                {t("featured.featured_label")}
              </p>
              <h3 className="text-2xl md:text-4xl font-light leading-tight mb-2">
                {featured.title}
              </h3>
              <p className="text-white/70 mb-4 text-sm md:text-base">{featured.subtitle}</p>
              <div className="flex flex-wrap items-center gap-4">
                <p className="text-xl md:text-2xl font-light">
                  ${featured.price.toLocaleString("en-US")}
                </p>
                <span className="text-xs uppercase tracking-[0.2em] text-white/50">
                  {featured.specs.bedrooms} {t("property.beds")} · {featured.specs.bathrooms} {t("property.baths")}
                </span>
              </div>
            </div>
          </div>
        </Link>
      )}

      {rest.length > 0 && (
        <div className="grid sm:grid-cols-2 gap-5 md:gap-8 mt-6">
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