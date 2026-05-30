function PropertyContactForm() {
  return (
    <section className="py-28 px-8 bg-neutral-950 text-white">
      <div className="max-w-3xl mx-auto">

        {/* HEADER */}
        <h3 className="text-5xl font-light mb-6 tracking-tight">
          Solicitar información
        </h3>

        <p className="text-white/70 mb-10 leading-7">
          Agenda una visita privada o recibe más detalles sobre esta propiedad en Coronado.
        </p>

        {/* FORM */}
        <div className="space-y-4">

          <input
            placeholder="Nombre"
            className="
              w-full
              px-5 py-4
              rounded-2xl

              bg-white
              text-black

              border border-transparent

              focus:outline-none
              focus:border-neutral-400
              focus:ring-2
              focus:ring-white/10

              transition
            "
          />

          <input
            placeholder="Email"
            className="
              w-full
              px-5 py-4
              rounded-2xl

              bg-white
              text-black

              border border-transparent

              focus:outline-none
              focus:border-neutral-400
              focus:ring-2
              focus:ring-white/10

              transition
            "
          />

          <textarea
            placeholder="Mensaje"
            className="
              w-full
              px-5 py-4
              rounded-2xl

              bg-white
              text-black
              h-36

              border border-transparent

              focus:outline-none
              focus:border-neutral-400
              focus:ring-2
              focus:ring-white/10

              transition
            "
          />

          {/* BUTTON (SYSTEM CONSISTENT) */}
          <button className="btn btn-primary w-full mt-4">
            Enviar solicitud
          </button>

        </div>

      </div>
    </section>
  );
}

export default PropertyContactForm;