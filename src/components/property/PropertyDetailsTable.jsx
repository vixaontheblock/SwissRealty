function PropertyDetailsTable() {
  return (
    <section className="py-20 px-8 bg-neutral-100">
      <div className="max-w-4xl mx-auto space-y-4 text-sm">

        <div className="flex justify-between border-b pb-3">
          <span>ID de propiedad</span>
          <span>0001</span>
        </div>

        <div className="flex justify-between border-b pb-3">
          <span>Tipo</span>
          <span>Casa / Venta</span>
        </div>

        <div className="flex justify-between border-b pb-3">
          <span>Recámaras</span>
          <span>3</span>
        </div>

        <div className="flex justify-between border-b pb-3">
          <span>Baños</span>
          <span>2</span>
        </div>

        <div className="flex justify-between border-b pb-3">
          <span>Área terreno</span>
          <span>1536 m²</span>
        </div>

        <div className="flex justify-between border-b pb-3">
          <span>Construcción</span>
          <span>220 m²</span>
        </div>

      </div>
    </section>
  );
}

export default PropertyDetailsTable;