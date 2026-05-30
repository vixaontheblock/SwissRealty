import { Link } from "react-router-dom";
import heroImg from "../../assets/properties/las-quintas/hero.webp";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <img
        src={heroImg}
        alt="Luxury Property Panama"
        className="absolute inset-0 w-full h-full object-cover scale-105 animate-[heroZoom_20s_ease-in-out_infinite_alternate]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 w-full">
        <div className="max-w-3xl">
          <p className="uppercase tracking-[0.4em] text-xs text-white/60 mb-4">
            Swiss Panama Realty
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-light mt-2 leading-[1.05] text-white">
            Luxury Real Estate<br />in Panama
          </h1>
          <p className="mt-6 text-white/70 text-base md:text-lg leading-7 max-w-xl">
            Exclusive coastal properties in Coronado and premium lifestyle communities.
          </p>
          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 md:gap-4">
            <Link to="/properties"
              className="btn btn-primary bg-white text-black hover:bg-transparent hover:text-white border border-white/30 text-center">
              Explore Properties
            </Link>
            <Link to="/contact"
              className="btn btn-secondary border-white/30 text-white hover:bg-white hover:text-black text-center">
              Contact Agent
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
