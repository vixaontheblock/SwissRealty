import { Link } from "react-router-dom";
import properties from "../../data/properties";
import PropertyCard from "../property/PropertyCard";

export default function FeaturedProperties() {
  const featured = properties.find((p) => p.featured);
  const rest = properties.filter((p) => !p.featured).slice(0, 2);

  return (
    <section className="py-20 md:py-28">

      {/* HEADER */}
      <div className="mb-10 md:mb-14">
        <h2 className="text-3xl md:text-4xl font-light tracking-tight">
          Featured Properties
        </h2>
        <p className="text-neutral-500 mt-3 max-w-xl text-base">
          Handpicked luxury homes in Panama's most exclusive areas.
        </p>
      </div>

      {/* FEATURED HERO CARD */}
      {featured && (
        <Link
          to={`/properties/${featured.slug}`}
          className="group relative overflow-hidden rounded-[28px] md:rounded-3xl block mb-8"
        >
          <img
            src={featured.image}
            alt={featured.title}
            className="w-full h-[320px] md:h-[480px] object-cover group-hover:scale-[1.02] transition duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent
            flex items-end p-6 md:p-12">
            <div className="text-white">
              <p className="text-xs uppercase tracking-[0.4em] text-white/60 mb-3">
                Featured Residence
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
                  {featured.specs.bedrooms} Beds · {featured.specs.bathrooms} Baths
                </span>
              </div>
            </div>
          </div>
        </Link>
      )}

      {/* MORE CARDS GRID */}
      {rest.length > 0 && (
        <div className="grid sm:grid-cols-2 gap-6 md:gap-8 mt-6">
          {rest.map((p) => <PropertyCard key={p.id} property={p} />)}
        </div>
      )}

      {/* VIEW ALL */}
      <div className="mt-10 md:mt-14 text-center">
        <Link to="/properties" className="btn btn-secondary">
          View All Properties
        </Link>
      </div>

    </section>
  );
}
