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
          <div className="mb-14">
            <h1 className="text-5xl font-light tracking-tight">
              Properties
            </h1>

            <p className="text-neutral-500 mt-4 max-w-2xl leading-7">
              Explore exclusive real estate opportunities in Panama.
            </p>
          </div>

          {/* FEATURED PROPERTY HERO (LAS QUINTAS) */}
          {featured && (
            <div className="mb-16 relative rounded-[32px] overflow-hidden">

              <img
                src={featured.heroImage || featured.image}
                alt={featured.title}
                className="w-full h-[420px] object-cover"
              />

              {/* OVERLAY */}
              <div className="
                absolute inset-0
                bg-black/40
                flex items-end
                p-10
              ">

                <div className="text-white max-w-xl">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/70 mb-3">
                    Featured Property
                  </p>

                  <h2 className="text-4xl font-light mb-2">
                    {featured.title}
                  </h2>

                  <p className="text-white/80 mb-4">
                    {featured.location}
                  </p>

                  <p className="text-xl font-light">
                    ${featured.price}
                  </p>
                </div>

              </div>

            </div>
          )}

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