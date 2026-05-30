function PropertyNearby() {
  return (
    <section className="py-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto">

        <h3 className="text-5xl font-light mb-10">
          Qué hay cerca
        </h3>

        <div className="grid md:grid-cols-3 gap-10 text-neutral-600">

          <div>
            <h4 className="text-xl font-light mb-2">
              Playas
            </h4>
            <p>Acceso rápido a las playas de Coronado.</p>
          </div>

          <div>
            <h4 className="text-xl font-light mb-2">
              Servicios
            </h4>
            <p>Supermercados, clínicas y bancos cercanos.</p>
          </div>

          <div>
            <h4 className="text-xl font-light mb-2">
              Lifestyle
            </h4>
            <p>Restaurantes, golf y vida residencial premium.</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default PropertyNearby;