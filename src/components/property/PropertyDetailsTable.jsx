function PropertyDetailsTable({ property }) {
  if (!property.tableDetails?.length) return null;

  return (
    <section className="py-12 md:py-20 px-5 md:px-8 bg-neutral-100">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-xs uppercase tracking-[0.35em] text-neutral-400 mb-8">
          Property Details
        </h3>
        <div className="space-y-0">
          {property.tableDetails.map(({ label, value }, i) => (
            <div
              key={i}
              className="flex justify-between items-center border-b border-neutral-200 py-3.5 text-sm"
            >
              <span className="text-neutral-500">{label}</span>
              <span className="text-neutral-900 font-light">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PropertyDetailsTable;
