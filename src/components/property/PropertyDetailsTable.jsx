function PropertyDetailsTable() {
  return (
    <section className="py-20 px-8 bg-neutral-100">
      <div className="max-w-4xl mx-auto space-y-4 text-sm">

        <div className="flex justify-between border-b pb-3">
          <span>Property ID</span>
          <span>0001</span>
        </div>

        <div className="flex justify-between border-b pb-3">
          <span>Type</span>
          <span>House / Sale</span>
        </div>

        <div className="flex justify-between border-b pb-3">
          <span>Bedrooms</span>
          <span>3</span>
        </div>

        <div className="flex justify-between border-b pb-3">
          <span>Bathrooms</span>
          <span>2</span>
        </div>

        <div className="flex justify-between border-b pb-3">
          <span>Land Area</span>
          <span>1536 m²</span>
        </div>

        <div className="flex justify-between border-b pb-3">
          <span>Built Area</span>
          <span>220 m²</span>
        </div>

      </div>
    </section>
  );
}

export default PropertyDetailsTable;