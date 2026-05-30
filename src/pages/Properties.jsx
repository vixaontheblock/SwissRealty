import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PropertyCard from "../components/property/PropertyCard";
import properties from "../data/properties";

function Properties() {
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

          {/* GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
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