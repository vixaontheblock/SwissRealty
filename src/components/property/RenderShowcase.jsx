import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Renders — los archivos deben existir en src/assets/properties/las-quintas/renders/
import renderFrontal from "../../assets/properties/las-quintas/renders/render-frontal.png";
import renderTrasero from "../../assets/properties/las-quintas/renders/render-trasero.png";
import renderCocinaFrontal from "../../assets/properties/las-quintas/renders/render-cocina-frontal.png";
import renderCocinaMuebles from "../../assets/properties/las-quintas/renders/render-cocina-muebles.png";
import renderCocinaExterior from "../../assets/properties/las-quintas/renders/render-cocina-exterior.png";
import renderBano from "../../assets/properties/las-quintas/renders/render-bano.png";

const renders = [
  { src: renderFrontal,         title: "Fachada frontal",      caption: "Vista principal de acceso",   span: "col-span-12 md:col-span-7 aspect-[4/3]" },
  { src: renderTrasero,         title: "Fachada trasera",      caption: "Jardín y área de piscina",     span: "col-span-12 md:col-span-5 aspect-[4/3]" },
  { src: renderCocinaFrontal,   title: "Cocina · Vista frontal", caption: "Isla central y acabados",    span: "col-span-6 md:col-span-4 aspect-square" },
  { src: renderCocinaMuebles,   title: "Cocina · Mobiliario",  caption: "Almacenamiento integrado",     span: "col-span-6 md:col-span-4 aspect-square" },
  { src: renderCocinaExterior,  title: "Cocina hacia exterior", caption: "Conexión con el jardín",      span: "col-span-12 md:col-span-4 aspect-square" },
  { src: renderBano,            title: "Baño principal",       caption: "Spa privado en suite",         span: "col-span-12 aspect-[16/9]" },
];

export default function RenderShowcase() {
  const [lightbox, setLightbox] = useState(null);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={ref} className="relative bg-white py-28 md:py-36 overflow-hidden">

      {/* Parallax background accent */}
      <motion.div
        style={{ y: yBg }}
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[60%] bg-gradient-to-b from-neutral-100 to-transparent"
      />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">

        {/* Header */}
        <div className="grid md:grid-cols-12 gap-8 mb-16 md:mb-24">
          <div className="md:col-span-5">
            <p className="uppercase tracking-[0.4em] text-[11px] text-neutral-500 mb-5">
              Vision · Renders
            </p>
            <h2 className="text-4xl md:text-6xl font-light leading-[1.05] tracking-tight text-neutral-900">
              Cómo se verá<br/>
              <span className="italic text-neutral-500">una vez completada</span>
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 flex items-end">
            <p className="text-base md:text-lg leading-8 text-neutral-600">
              Estos renders fotorrealistas muestran la transformación arquitectónica
              y de interiorismo en curso. Cada espacio fue reimaginado para
              maximizar luz natural, ventilación cruzada y la conexión con el
              entorno tropical.
            </p>
          </div>
        </div>

        {/* Grid editorial */}
        <div className="grid grid-cols-12 gap-3 md:gap-5">
          {renders.map((r, i) => (
            <RenderCard
              key={r.title}
              render={r}
              index={i}
              onOpen={() => setLightbox(r)}
            />
          ))}
        </div>

        {/* Disclaimer */}
        <p className="mt-10 text-xs text-neutral-400 tracking-wide max-w-2xl">
          Las imágenes son renders conceptuales con fines ilustrativos. Acabados,
          mobiliario y vegetación pueden variar respecto al resultado final.
        </p>
      </div>

      {/* LIGHTBOX */}
      {lightbox && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6 cursor-zoom-out"
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white text-sm uppercase tracking-[0.3em]"
          >
            Cerrar ✕
          </button>
          <motion.img
            initial={{ scale: 0.95 }} animate={{ scale: 1 }}
            src={lightbox.src}
            alt={lightbox.title}
            className="max-h-[88vh] max-w-[92vw] object-contain"
          />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-1">{lightbox.caption}</p>
            <p className="text-xl font-light">{lightbox.title}</p>
          </div>
        </motion.div>
      )}
    </section>
  );
}

function RenderCard({ render, index, onOpen }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);

  return (
    <motion.button
      ref={ref}
      onClick={onOpen}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden bg-neutral-200 ${render.span} cursor-zoom-in`}
    >
      <motion.img
        src={render.src}
        alt={render.title}
        style={{ y }}
        className="absolute inset-0 w-full h-[115%] object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7 text-left">
        <p className="text-[10px] uppercase tracking-[0.3em] text-white/60 mb-1.5">
          {String(index + 1).padStart(2, "0")} · {render.caption}
        </p>
        <p className="text-white text-lg md:text-xl font-light">{render.title}</p>
      </div>
    </motion.button>
  );
}
