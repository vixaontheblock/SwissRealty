import heroImg from "../../assets/properties/las-quintas/hero.webp";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">

      {/* IMAGE (ZOOM SOFT FEEL) */}
      <img
        src={heroImg}
        alt="Luxury Property Panama"
        className="absolute inset-0 w-full h-full object-cover scale-105 animate-[heroZoom_20s_ease-in-out_infinite_alternate]"
      />

      {/* LAYER 1: DARK GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* LAYER 2: SUBTLE GLOW */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-8">

        <div className="max-w-3xl">

          <p className="uppercase tracking-[0.4em] text-xs text-white/60">
            Swiss Panama Realty
          </p>

          <h1 className="text-5xl md:text-7xl font-light mt-6 leading-[1.05]">
            Luxury Real Estate
            <br />
            in Panama
          </h1>

          <p className="mt-6 text-white/70 text-lg leading-7 max-w-xl">
            Exclusive coastal properties in Coronado and premium lifestyle communities.
          </p>

          {/* CTA */}
          <div className="mt-10 flex gap-4">
            <button className="btn btn-primary bg-white text-black hover:bg-transparent hover:text-white border border-white/30">
              Explore Properties
            </button>

            <button className="btn btn-secondary border-white/30 text-white hover:bg-white hover:text-black">
              Contact Agent
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}