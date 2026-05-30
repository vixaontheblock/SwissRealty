import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PropertyCard from "../components/property/PropertyCard";
import properties from "../data/properties";

const STATUS_LABEL = {
  sale:       "For Sale",
  renovation: "Under Renovation",
  sold:       "Sold",
};

function Properties() {
  const featured = properties.find((p) => p.featured);
  const others   = properties.filter((p) => !p.featured);

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-neutral-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-5 md:px-8">

          {/* HEADER */}
          <div className="mb-14">
            <p className="text-xs uppercase tracking-[0.4em] text-neutral-400 mb-4">
              Exclusive Listings
            </p>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight">
              Properties
            </h1>
            <p className="text-neutral-500 mt-5 max-w-2xl leading-7 text-lg">
              Explore exclusive real estate opportunities in Panama's most
              desirable coastal and residential areas.
            </p>
          </div>

          {/* FEATURED HERO CARD */}
          {featured && (
            <Link
              to={`/properties/${featured.slug}`}
              className="block mb-16 relative rounded-[32px] overflow-hidden group"
            >
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-[420px] md:h-[520px] object-cover group-hover:scale-[1.02] transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-8 md:p-14">
                <div className="text-white w-full">
                  <p className="text-xs uppercase tracking-[0.4em] text-white/60 mb-3">
                    Featured Residence
                  </p>
                  <h2 className="text-3xl md:text-5xl font-light leading-tight mb-2">
                    {featured.title}
                  </h2>
                  <p className="text-white/70 mb-5 text-base md:text-lg">
                    {featured.subtitle}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 md:gap-6">
                    <p className="text-xl md:text-2xl font-light">
                      ${featured.price.toLocaleString("en-US")}
                    </p>
                    <span className="text-xs uppercase tracking-[0.3em] text-white/50 border border-white/20 px-3 py-1 rounded-full">
                      {STATUS_LABEL[featured.status] || featured.status}
                    </span>
                    <span className="text-xs uppercase tracking-[0.3em] text-white/50">
                      {featured.specs.bedrooms} Beds · {featured.specs.bathrooms} Baths · {featured.specs.areaSqm} m²
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* GRID — other properties */}
          {others.length > 0 && (
            <>
              <div className="mb-8 flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.35em] text-neutral-400">
                  Available Properties
                </p>
                <p className="text-sm text-neutral-400">{others.length} listings</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {others.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            </>
          )}

          {/* Empty state */}
          {properties.length === 0 && (
            <div className="text-center py-24 text-neutral-400">
              <p className="text-xl font-light">No listings available at this time.</p>
              <p className="mt-3 text-sm">Check back soon for new properties.</p>
            </div>
          )}

        </div>
      </main>
      <Footer />
    </>
  );
}

export default Properties;
