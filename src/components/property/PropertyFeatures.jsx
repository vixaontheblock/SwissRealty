const features = [
  "Amoblado",
  "Baños de Servicio",
  "Bohío",
  "Cercada",
  "Comedor",
  "Cuarto de Empleada",
  "Desayunador",
  "Lavandería",
  "Línea Blanca",
  "Piscina",
  "Sala de Estar",
  "Terraza",
];

function PropertyFeatures() {
  return (
    <section className="py-20 px-8 bg-neutral-50">
      <div className="max-w-7xl mx-auto">

        <h3 className="text-sm uppercase tracking-[4px] text-neutral-400 mb-10">
          Características
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white border border-neutral-200 rounded-2xl px-5 py-4 text-sm"
            >
              {f}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default PropertyFeatures;