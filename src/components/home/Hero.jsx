import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import heroImg from "../../assets/properties/las-quintas/mainphoto.jpg";
import poolImg  from "../../assets/properties/las-quintas/pool2.jpg";
import yardImg  from "../../assets/properties/las-quintas/backyard2.jpg";

const SLIDES = [
  { src: heroImg,  pos: "center" },
  { src: poolImg,  pos: "center bottom" },
  { src: yardImg,  pos: "center center" },
];

export default function Hero() {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCurrent((c) => (c + 1) % SLIDES.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative h-screen flex items-end overflow-hidden">

      {/* SLIDES */}
      {SLIDES.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-[1800ms] ease-in-out"
          style={{ opacity: current === i ? 1 : 0 }}
        >
          <img
            src={slide.src}
            alt=""
            className="w-full h-full object-cover"
            style={{ objectPosition: slide.pos,
              transform: current === i ? "scale(1.04)" : "scale(1)",
              transition: "transform 7s ease-out",
            }}
          />
        </div>
      ))}

      {/* GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
      {/* Left vignette */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

      {/* SLIDE DOTS */}
      <div className="absolute bottom-8 right-8 flex gap-2 z-10">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 rounded-full
              ${current === i ? "w-6 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/40 hover:bg-white/70"}`}
          />
        ))}
      </div>

      {/* STAT BADGES — lado derecho */}
      <div className="absolute top-1/2 right-8 -translate-y-1/2 z-10 hidden xl:flex flex-col gap-4">
        {[
          { n: "295K", label: "USD" },
          { n: "1,536", label: "m² Lote" },
          { n: "220", label: "m² Const." },
        ].map(({ n, label }) => (
          <div key={label} className="text-right">
            <div className="text-white text-xl font-light tracking-tight">{n}</div>
            <div className="text-white/50 text-[10px] uppercase tracking-[0.2em]">{label}</div>
          </div>
        ))}
      </div>

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-8 pb-16 md:pb-24">
        <h1 style={{ color: "#ffffff", letterSpacing: "-0.02em" }}
          className="text-4xl sm:text-5xl md:text-7xl font-light leading-[1.05] mb-6 max-w-4xl">
          {t("hero.title")}
        </h1>

        <p style={{ color: "rgba(255,255,255,0.70)" }}
          className="text-base md:text-lg leading-7 max-w-xl mb-10">
          {t("hero.subtitle")}
        </p>

        {/* SPECS row */}
        <div className="flex flex-wrap gap-x-8 gap-y-3 mb-10">
          {[
            ["3", "Hab."],
            ["3", "Baños"],
            ["220 m²", "Const."],
            ["1,536 m²", "Lote"],
          ].map(([val, lbl]) => (
            <div key={lbl} className="flex items-baseline gap-1.5">
              <span style={{ color: "#ffffff" }} className="font-light text-lg">{val}</span>
              <span style={{ color: "rgba(255,255,255,0.45)" }} className="text-xs uppercase tracking-[0.2em]">{lbl}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link to="/properties"
            className="btn btn-primary bg-white text-black hover:bg-transparent hover:text-white border border-white/30 text-center">
            {t("hero.cta_primary")}
          </Link>
          <Link to="/contact"
            className="btn btn-secondary border-white/30 text-white hover:bg-white hover:text-black text-center">
            {t("hero.cta_secondary")}
          </Link>
        </div>

      </div>

      {/* SCROLL indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-60">
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/60 to-white/0 animate-pulse" />
      </div>

    </section>
  );
}
