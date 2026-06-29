// src/components/property/PropertyHero.jsx
function PropertyHero({ property }) {
  const scrollToContact = () =>
    document.getElementById("property-contact")?.scrollIntoView({ behavior: "smooth" });
  const scrollToGallery = () =>
    document.getElementById("property-gallery")?.scrollIntoView({ behavior: "smooth" });

  const statusLabel = {
    renovation: "En Remodelación",
    sale:       "En Venta",
    sold:       "Vendida",
  };

  return (
    <section className="relative h-[90vh] min-h-[560px] overflow-hidden">
      <img
        src={property.image}
        alt={property.title}
        className="absolute inset-0 w-full h-full object-cover scale-105"
        style={{ transition: "transform 8s ease-out", transform: "scale(1)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />

      <div className="absolute top-28 left-5 md:left-8 z-10">
        <span className="inline-flex items-center gap-2 bg-amber-400/90 backdrop-blur text-black text-[10px] uppercase tracking-[0.2em] px-4 py-2 rounded-full font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-black/40 animate-pulse" />
          {statusLabel[property.status] || property.status} · {property.subtitle}
        </span>
      </div>

      <div className="relative z-10 h-full flex items-end">
        <div className="w-full max-w-7xl mx-auto px-5 md:px-8 pb-16 md:pb-24">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <h1 style={{ color: "#ffffff", letterSpacing: "-0.02em" }}
                className="text-4xl sm:text-5xl md:text-7xl max-w-3xl font-light leading-tight mb-4">
                {property.title}
              </h1>
              <p style={{ color: "rgba(255,255,255,0.65)" }}
                className="text-base md:text-lg max-w-xl leading-7 mb-8">
                {property.location}
              </p>
              <div className="flex flex-wrap gap-3 md:gap-4">
                <button onClick={scrollToGallery}
                  className="btn btn-primary bg-white text-black border border-white hover:bg-transparent hover:text-white">
                  Explorar Propiedad
                </button>
                <button onClick={scrollToContact}
                  className="btn btn-secondary border-white/30 text-white hover:bg-white hover:text-black">
                  Solicitar Consulta
                </button>
              </div>
            </div>

            {/* Specs card — dinámico */}
            <div className="flex-shrink-0 bg-white/10 backdrop-blur-lg border border-white/20 rounded-[20px] p-6 hidden md:block">
              <div className="grid grid-cols-2 gap-x-10 gap-y-4">
                {[
                  ["$" + property.price.toLocaleString("en-US"), "Precio"],
                  [property.specs.areaSqm + " m²",              "Construcción"],
                  [property.specs.lotSqm.toLocaleString("en-US") + " m²", "Lote"],
                  [property.specs.bedrooms + " / " + property.specs.bathrooms, "Hab. / Baños"],
                ].map(([v, l]) => (
                  <div key={l}>
                    <div className="text-white text-lg font-light">{v}</div>
                    <div className="text-white/45 text-[10px] uppercase tracking-[0.2em]">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PropertyHero;
