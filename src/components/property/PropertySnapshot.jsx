function PropertySnapshot() {
  return (
    <section className="bg-white py-24 px-8 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

        <div>
          <p className="text-sm uppercase tracking-[3px] text-neutral-400">
            Bedrooms
          </p>
          <h3 className="text-5xl font-light mt-3">3</h3>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[3px] text-neutral-400">
            Bathrooms
          </p>
          <h3 className="text-5xl font-light mt-3">2</h3>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[3px] text-neutral-400">
            Land
          </p>
          <h3 className="text-3xl font-light mt-3">1536 m²</h3>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[3px] text-neutral-400">
            Construction
          </p>
          <h3 className="text-3xl font-light mt-3">220 m²</h3>
        </div>

      </div>
    </section>
  );
}

export default PropertySnapshot;