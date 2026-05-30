function PropertyOverview() {
  return (
    <section className="py-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <h1 className="text-5xl md:text-6xl font-light tracking-tight leading-tight">
          House in Coronado, Las Quintas
        </h1>

        {/* LOCATION */}
        <p className="text-neutral-500 mt-4 text-lg">
          Las Quintas Residential Community · Coronado, Panama
        </p>

        {/* PRICE */}
        <div className="mt-10 flex items-baseline gap-4">
          <span className="text-4xl font-light tracking-tight">
            $295,000
          </span>

          <span className="text-sm uppercase tracking-[0.3em] text-neutral-400">
            For Sale
          </span>
        </div>

      </div>
    </section>
  );
}

export default PropertyOverview;