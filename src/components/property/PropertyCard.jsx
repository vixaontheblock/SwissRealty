import { Link } from "react-router-dom";

const STATUS_BADGE = {
  sale:       { label: "For Sale",          cls: "bg-black text-white" },
  renovation: { label: "Under Renovation",  cls: "bg-amber-100 text-amber-800" },
  sold:       { label: "Sold",              cls: "bg-neutral-200 text-neutral-500" },
};

function PropertyCard({ property }) {
  const badge = STATUS_BADGE[property.status] || STATUS_BADGE.sale;

  return (
    <Link
      to={`/properties/${property.slug}`}
      className="group relative overflow-hidden rounded-3xl bg-white border border-neutral-200
        transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
        hover:-translate-y-2 hover:shadow-2xl block"
    >
      {/* IMAGE */}
      <div className="h-64 overflow-hidden relative">
        <img
          src={property.image}
          alt={property.title}
          loading="lazy"
          className="w-full h-full object-cover scale-105 group-hover:scale-110
            transition duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        />
        {/* Status badge */}
        <span className={`absolute top-4 left-4 text-xs uppercase tracking-[0.2em] px-3 py-1.5 rounded-full ${badge.cls}`}>
          {badge.label}
        </span>
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <h3 className="text-xl font-light text-neutral-900">{property.title}</h3>
        <p className="text-neutral-500 text-sm mt-1">{property.subtitle}</p>

        <div className="mt-5 flex items-center justify-between flex-wrap gap-2">
          <p className="text-sm text-neutral-400">
            {property.specs.bedrooms} Beds · {property.specs.bathrooms} Baths · {property.specs.areaSqm} m²
          </p>
          <p className="text-lg font-light text-neutral-900">
            ${property.price.toLocaleString("en-US")}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default PropertyCard;
