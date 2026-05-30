function PropertyNearby({ property }) {
  if (!property.nearby?.length) return null;

  return (
    <section className="py-16 md:py-28 px-5 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl md:text-5xl font-light mb-6 tracking-tight">
          What's Nearby
        </h3>
        <p className="text-neutral-500 max-w-2xl mb-10 md:mb-14 leading-7">
          The property is ideally located in Coronado, surrounded by essential
          services, leisure options, and natural coastal attractions.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {property.nearby.map(({ label, detail }, i) => (
            <div
              key={i}
              className="p-5 md:p-6 rounded-2xl border border-neutral-200 bg-neutral-50
                hover:bg-white hover:shadow-sm transition-all duration-300"
            >
              <h4 className="text-base md:text-lg font-light mb-1">{label}</h4>
              <p className="text-neutral-500 text-sm leading-6">{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PropertyNearby;
