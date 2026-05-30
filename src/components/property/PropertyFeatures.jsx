function PropertyFeatures({ property }) {
  if (!property.features?.length) return null;

  return (
    <section className="py-16 md:py-24 px-5 md:px-8 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-xs uppercase tracking-[0.35em] text-neutral-400 mb-10 md:mb-12">
          Amenities &amp; Features
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
          {property.features.map((feature, i) => (
            <div
              key={i}
              className="bg-white border border-neutral-200 rounded-2xl px-4 py-3.5
                text-sm text-neutral-700 hover:border-neutral-300 hover:shadow-sm
                hover:-translate-y-[2px] transition-all duration-300"
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
