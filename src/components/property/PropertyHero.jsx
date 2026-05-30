import hero from "../../assets/properties/las-quintas/hero.webp";

function PropertyHero() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background image */}
      <img
        src={hero}
        alt="Las Quintas Coronado"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-end">
        <div className="max-w-7xl mx-auto px-8 pb-24 text-white w-full">

          {/* Tag */}
          <p className="uppercase tracking-[6px] text-sm text-neutral-300 mb-6">
            Coronado · Las Quintas
          </p>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl max-w-4xl font-light leading-tight">
            Tropical Luxury Living In Panama
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg max-w-2xl text-neutral-200 leading-8">
            A private tropical residence currently
            undergoing transformation to elevate
            luxury living in Coronado.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-5 mt-10">
            <button className="bg-white text-black px-8 py-4 rounded-full uppercase tracking-[2px] text-sm hover:opacity-90 transition">
              Explore Property
            </button>

            <button className="border border-white text-white px-8 py-4 rounded-full uppercase tracking-[2px] text-sm hover:bg-white hover:text-black transition">
              Request Consultation
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default PropertyHero;