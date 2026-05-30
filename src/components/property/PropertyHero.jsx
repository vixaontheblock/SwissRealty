function PropertyHero({ property }) {
  const scrollToContact = () =>
    document.getElementById("property-contact")?.scrollIntoView({ behavior: "smooth" });

  const scrollToGallery = () =>
    document.getElementById("property-gallery")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative h-[90vh] min-h-[560px] overflow-hidden">
      <img
        src={property.image}
        alt={property.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />

      <div className="relative z-10 h-full flex items-end">
        <div className="w-full max-w-7xl mx-auto px-5 md:px-8 pb-16 md:pb-24 text-white">

          <p className="uppercase tracking-[0.4em] text-xs text-white/60 mb-4">
            Coronado · Las Quintas
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl max-w-4xl font-light leading-tight mb-4">
            {property.title}
          </h1>

          <p className="text-base md:text-lg max-w-xl text-white/70 leading-7 mb-8">
            {property.subtitle} · A private tropical residence currently undergoing
            transformation to elevate luxury living in Coronado.
          </p>

          <div className="flex flex-wrap gap-3 md:gap-5">
            <button
              onClick={scrollToGallery}
              className="btn btn-primary bg-white text-black border border-white
                hover:bg-transparent hover:text-white"
            >
              Explore Property
            </button>
            <button
              onClick={scrollToContact}
              className="btn btn-secondary border-white/40 text-white
                hover:bg-white hover:text-black"
            >
              Request Consultation
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default PropertyHero;
