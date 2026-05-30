function PropertyDescription({ property }) {
  return (
    <section className="py-12 md:py-20 px-5 md:px-8 bg-white border-t border-neutral-100">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-xs uppercase tracking-[4px] text-neutral-400 mb-6">
          Description
        </h3>
        <p className="text-base md:text-lg leading-8 text-neutral-700 whitespace-pre-line">
          {property.description}
        </p>
      </div>
    </section>
  );
}

export default PropertyDescription;
