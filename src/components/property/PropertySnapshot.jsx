function PropertySnapshot({ property }) {
  const { specs } = property;
  const items = [
    { label: "Bedrooms",     value: specs.bedrooms },
    { label: "Bathrooms",    value: specs.bathrooms },
    { label: "Construction", value: `${specs.areaSqm} m²` },
    { label: "Land Area",    value: `${specs.lotSqm.toLocaleString()} m²` },
  ];

  return (
    <section className="bg-white py-12 md:py-20 px-5 md:px-8 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 text-center">
        {items.map(({ label, value }) => (
          <div key={label}>
            <p className="text-xs uppercase tracking-[3px] text-neutral-400">{label}</p>
            <h3 className="text-3xl md:text-5xl font-light mt-3">{value}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PropertySnapshot;
