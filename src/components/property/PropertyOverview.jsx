function PropertyOverview({ property }) {
  const STATUS = { sale: "For Sale", renovation: "Under Renovation", sold: "Sold" };

  return (
    <section className="py-16 md:py-24 px-5 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight leading-tight">
          {property.title}
        </h1>
        <p className="text-neutral-500 mt-4 text-base md:text-lg">
          {property.location}
        </p>
        <div className="mt-8 flex flex-wrap items-baseline gap-4">
          <span className="text-3xl md:text-4xl font-light tracking-tight">
            ${property.price.toLocaleString("en-US")}
          </span>
          <span className="text-sm uppercase tracking-[0.3em] text-neutral-400">
            {STATUS[property.status] || property.status}
          </span>
        </div>
      </div>
    </section>
  );
}

export default PropertyOverview;
