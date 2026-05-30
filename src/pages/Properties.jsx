import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PropertyCard from "../components/property/PropertyCard";
import properties from "../data/properties";

function Properties() {
  const featured = properties.find(p => p.id === "CPR-0057");
  const others = properties.filter(p => p.id !== "CPR-0057");

  return (
    <>
      <Navbar />

      <main className="pt-28 pb-24 bg-neutral-50">

        <div className="max-w-7xl mx-auto px-8">

          {/* HEADER */}
          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-light tracking-tight">
              Properties
            </h1>

            <p className="text-neutral-500 mt-5 max-w-2xl leading-7 text-lg">
              Explore exclusive real estate opportunities in Panama’s most desirable coastal and residential areas.
            </p>
          </div>

          {/* FEATURED HERO */}
          {featured && (
            <div className="mb-20 relative rounded-[36px] overflow-hidden group">

              <img
                src={featured.heroImage || featured.image}
                alt={featured.title}
                className="w-full h-[480px] object-cover group-hover:scale-[1.02] transition duration-700"
              />

              {/* GRADIENT OVERLAY (MUCHO MÁS LUXURY) */}
              <div className="
                absolute inset-0
                bg-gradient-to-t from-black/70 via-black/30 to-transparent
                flex items-end
                p-10 md:p-14
              ">

                <div className="text-white max-w-2xl">

                  <p className="text-xs uppercase tracking-[0.4em] text-white/70 mb-4">
                    Featured Residence
                  </p>

                  <h2 className="text-4xl md:text-5xl font-light leading-tight mb-3">
                    {featured.title}
                  </h2>

                  <p className="text-white/80 mb-6 text-lg">
                    {featured.location}
                  </p>

                  <div className="flex items-center gap-6">
                    <p className="text-2xl font-light">
                      ${featured.price}
                    </p>

                    <span className="text-xs uppercase tracking-[0.3em] text-white/60">
                      For Sale
                    </span>
                  </div>

                </div>

              </div>

            </div>
          )}

          {/* GRID HEADER (SUBTLE LUXURY DIVIDER) */}
          <div className="mb-10 flex items-center justify-between">
            <p className="text-xs uppercase tracking-[0.35em] text-neutral-400">
              Available Properties
            </p>

            <p className="text-sm text-neutral-500">
              {others.length} listings
            </p>
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {others.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}

export default Properties;