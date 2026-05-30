import heroImg from "../../assets/properties/las-quintas/hero.webp";

export default function Hero() {
  return (
    <section className="h-screen flex items-center relative bg-black text-white">

      {/* IMAGE */}
      <img
        src={heroImg}
        alt="Luxury Property Panama"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/50" />

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-8">

        <p className="uppercase tracking-[4px] text-sm text-white/70">
          Swiss Panama Realty
        </p>

        <h1 className="text-5xl md:text-7xl font-light mt-6 leading-tight max-w-4xl">
          Luxury Real Estate in Panama
        </h1>

        <p className="mt-6 text-white/70 max-w-2xl leading-7 text-lg">
          Exclusive properties in Coronado and premium coastal areas.
        </p>

      </div>

    </section>
  );
}