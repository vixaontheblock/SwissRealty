const features = [
  "Furnished",
  "Service Bathroom",
  "Bohío",
  "Gated Property",
  "Dining Area",
  "Maid’s Room",
  "Breakfast Area",
  "Laundry Room",
  "White Goods Included",
  "Swimming Pool",
  "Living Room",
  "Terrace",
];

function PropertyFeatures() {
  return (
    <section className="py-24 px-8 bg-neutral-50">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <h3 className="text-xs uppercase tracking-[0.35em] text-neutral-400 mb-12">
          Amenities & Features
        </h3>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

          {features.map((feature, i) => (
            <div
              key={i}
              className="
                group
                bg-white
                border border-neutral-200
                rounded-2xl
                px-5 py-4
                text-sm text-neutral-700

                hover:border-neutral-300
                hover:shadow-sm
                hover:-translate-y-[2px]

                transition-all duration-300
              "
            >
              {feature}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default PropertyFeatures;