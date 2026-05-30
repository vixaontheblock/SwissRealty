function PropertyNearby() {
  return (
    <section className="py-28 px-8 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <h3 className="text-5xl font-light mb-12 tracking-tight">
          What’s Nearby
        </h3>

        <p className="text-neutral-500 max-w-2xl mb-16 leading-7">
          The property is ideally located in Coronado, surrounded by essential services,
          leisure options, and natural coastal attractions.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* BEACH */}
          <div className="p-6 rounded-2xl border border-neutral-200 bg-neutral-50 hover:bg-white transition">
            <h4 className="text-lg font-light mb-2">
              Beaches
            </h4>
            <p className="text-neutral-600 leading-7">
              Quick access to Coronado’s Pacific coastline and surrounding beach clubs.
            </p>
          </div>

          {/* SERVICES */}
          <div className="p-6 rounded-2xl border border-neutral-200 bg-neutral-50 hover:bg-white transition">
            <h4 className="text-lg font-light mb-2">
              Essentials
            </h4>
            <p className="text-neutral-600 leading-7">
              Supermarkets, clinics, pharmacies, and banking services within minutes.
            </p>
          </div>

          {/* LIFESTYLE */}
          <div className="p-6 rounded-2xl border border-neutral-200 bg-neutral-50 hover:bg-white transition">
            <h4 className="text-lg font-light mb-2">
              Lifestyle
            </h4>
            <p className="text-neutral-600 leading-7">
              Golf courses, fine dining, and a relaxed coastal residential atmosphere.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default PropertyNearby;