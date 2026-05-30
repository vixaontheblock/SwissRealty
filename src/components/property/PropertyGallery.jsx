import { useState } from "react";

// ─── MAIN GALLERY ─────────────────────────────────────────────────────────────
function GalleryGrid({ imgs, onOpen }) {
  const [hero, ...rest] = imgs;
  const side   = rest.slice(0, 2);
  const bottom = rest.slice(2, 4);

  return (
    <div className="grid md:grid-cols-12 gap-4 md:gap-5">
      {/* Hero */}
      <button
        onClick={() => onOpen(0)}
        className="md:col-span-7 h-[300px] md:h-[620px] overflow-hidden rounded-[24px] md:rounded-[32px]"
      >
        <img src={hero} alt="" className="w-full h-full object-cover hover:scale-105 transition duration-700" />
      </button>
      {/* Side 2 */}
      <div className="md:col-span-5 grid gap-4 md:gap-5">
        {side.map((src, i) => (
          <button key={i} onClick={() => onOpen(i + 1)}
            className="h-[200px] md:h-[300px] overflow-hidden rounded-[24px] md:rounded-[32px]">
            <img src={src} alt="" className="w-full h-full object-cover hover:scale-105 transition duration-700" />
          </button>
        ))}
      </div>
      {/* Bottom */}
      {bottom.map((src, i) => (
        <button key={i} onClick={() => onOpen(i + 3)}
          className="md:col-span-6 h-[220px] md:h-[360px] overflow-hidden rounded-[24px] md:rounded-[32px]">
          <img src={src} alt="" className="w-full h-full object-cover hover:scale-105 transition duration-700" />
        </button>
      ))}
    </div>
  );
}

// ─── BEFORE / AFTER SLIDER ────────────────────────────────────────────────────
function BeforeAfterCard({ item, index }) {
  const [pos, setPos] = useState(50);
  const isDragging    = { current: false };

  const move = (clientX, el) => {
    const rect = el.getBoundingClientRect();
    const pct  = Math.max(2, Math.min(98, ((clientX - rect.left) / rect.width) * 100));
    setPos(pct);
  };

  const onMouseDown = (e) => {
    isDragging.current = true;
    const el = e.currentTarget.parentElement;
    const mm = (ev) => isDragging.current && move(ev.clientX, el);
    const mu = () => { isDragging.current = false; window.removeEventListener("mousemove", mm); window.removeEventListener("mouseup", mu); };
    window.addEventListener("mousemove", mm);
    window.addEventListener("mouseup", mu);
  };

  const onTouchMove = (e) => {
    const el = e.currentTarget.parentElement;
    move(e.touches[0].clientX, el);
  };

  // Si no hay foto "after", mostrar solo la "before" con badge
  if (!item.after) {
    return (
      <div className="overflow-hidden rounded-[20px] md:rounded-[24px]">
        <div className="relative h-[240px] md:h-[320px]">
          <img src={item.before} alt={item.label}
            className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute bottom-4 left-4 flex items-center gap-2">
            <span style={{ color: "#ffffff" }} className="bg-black/60 backdrop-blur text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 rounded-full">
              Antes
            </span>
          </div>
          <div className="absolute top-4 right-4 bg-amber-400/90 backdrop-blur text-black text-[10px] uppercase tracking-[0.15em] px-3 py-1.5 rounded-full font-medium">
            Después · Próximamente
          </div>
        </div>
        <div className="bg-neutral-100 px-5 py-3">
          <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">{item.label}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-[20px] md:rounded-[24px]">
      <div className="relative h-[240px] md:h-[320px] select-none overflow-hidden cursor-col-resize"
        onMouseMove={(e) => isDragging.current && move(e.clientX, e.currentTarget)}
      >
        {/* BEFORE full */}
        <img src={item.before} alt="Antes"
          className="absolute inset-0 w-full h-full object-cover" />

        {/* AFTER clipped */}
        <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <img src={item.after} alt="Después"
            className="absolute inset-0 w-full h-full object-cover" />
        </div>

        {/* Divider line */}
        <div className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg pointer-events-none"
          style={{ left: `${pos}%` }} />

        {/* Handle */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-10
            w-10 h-10 rounded-full bg-white shadow-xl
            flex items-center justify-center cursor-col-resize"
          style={{ left: `${pos}%` }}
          onMouseDown={onMouseDown}
          onTouchMove={onTouchMove}
          onTouchStart={() => {}}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M4 7H1M10 7h3M4 4l-3 3 3 3M10 4l3 3-3 3" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Labels */}
        <div className="absolute bottom-4 left-4 pointer-events-none">
          <span style={{ color: "#ffffff" }} className="bg-black/60 backdrop-blur text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 rounded-full">Antes</span>
        </div>
        <div className="absolute bottom-4 right-4 pointer-events-none">
          <span className="bg-white/90 backdrop-blur text-black text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 rounded-full">Después</span>
        </div>
      </div>
      <div className="bg-neutral-100 px-5 py-3">
        <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">{item.label}</p>
      </div>
    </div>
  );
}

// ─── LIGHTBOX ─────────────────────────────────────────────────────────────────
function Lightbox({ imgs, index, onClose, onPrev, onNext }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/96 flex items-center justify-center"
      onClick={onClose}>
      <button onClick={onClose}
        className="absolute top-6 right-6 text-white/60 hover:text-white text-xs uppercase tracking-[0.2em] transition">
        Cerrar ✕
      </button>
      <button onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 text-white/60 hover:text-white text-4xl px-4">‹</button>
      <img src={imgs[index]} alt=""
        className="max-w-[90vw] max-h-[85vh] object-contain"
        onClick={(e) => e.stopPropagation()} />
      <button onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 text-white/60 hover:text-white text-4xl px-4">›</button>
      <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-[0.2em]">
        {index + 1} / {imgs.length}
      </p>
    </div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
function PropertyGallery({ property }) {
  const [lightbox, setLightbox] = useState(null);
  const [tab, setTab] = useState("gallery"); // "gallery" | "before-after"

  const imgs         = property.gallery     || [];
  const beforeAfter  = property.beforeAfter || [];
  const hasBA        = beforeAfter.length > 0;

  if (!imgs.length) return null;

  return (
    <section id="property-gallery" className="py-16 md:py-28 px-5 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
          <div>
            <p className="uppercase tracking-[4px] text-xs text-neutral-500 mb-4">
              Exploración Visual
            </p>
            <h2 className="text-3xl md:text-5xl font-light">
              Conoce la Propiedad
            </h2>
          </div>

          {/* Tab switcher */}
          {hasBA && (
            <div className="flex gap-1 p-1 bg-neutral-100 rounded-full w-fit">
              <button
                onClick={() => setTab("gallery")}
                className={`text-xs uppercase tracking-[0.2em] px-5 py-2.5 rounded-full transition-all
                  ${tab === "gallery" ? "bg-white shadow text-neutral-900" : "text-neutral-400 hover:text-neutral-700"}`}
              >
                Galería
              </button>
              <button
                onClick={() => setTab("before-after")}
                className={`text-xs uppercase tracking-[0.2em] px-5 py-2.5 rounded-full transition-all
                  ${tab === "before-after" ? "bg-white shadow text-neutral-900" : "text-neutral-400 hover:text-neutral-700"}`}
              >
                Antes / Después
              </button>
            </div>
          )}
        </div>

        {/* GALLERY TAB */}
        {tab === "gallery" && (
          <>
            <GalleryGrid imgs={imgs} onOpen={setLightbox} />
            {imgs.length > 5 && (
              <p className="text-xs text-neutral-400 tracking-[0.2em] uppercase mt-6 text-center">
                {imgs.length} fotos disponibles
              </p>
            )}
          </>
        )}

        {/* BEFORE / AFTER TAB */}
        {tab === "before-after" && hasBA && (
          <div>
            <div className="mb-8 max-w-2xl">
              <p className="text-neutral-500 text-sm leading-7">
                Esta propiedad está siendo completamente remodelada para elevar el estándar de vida en Coronado.
                Arrastra el divisor para comparar el estado actual con el diseño final proyectado.
                Las fotos "Después" se irán actualizando conforme avance la obra.
              </p>
            </div>
            {/* Remodelation progress bar */}
            <div className="mb-10 p-6 rounded-[20px] bg-neutral-50 border border-neutral-200">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase tracking-[0.25em] text-neutral-500">Avance de Remodelación</span>
                <span className="text-sm font-light text-neutral-900">En Proceso</span>
              </div>
              <div className="h-1.5 bg-neutral-200 rounded-full overflow-hidden">
                <div className="h-full bg-amber-400 rounded-full transition-all duration-1000"
                  style={{ width: "35%" }} />
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-[10px] text-neutral-400 uppercase tracking-[0.15em]">Inicio</span>
                <span className="text-[10px] text-amber-500 uppercase tracking-[0.15em]">35% completado</span>
                <span className="text-[10px] text-neutral-400 uppercase tracking-[0.15em]">Entrega</span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {beforeAfter.map((item, i) => (
                <BeforeAfterCard key={i} item={item} index={i} />
              ))}
            </div>
          </div>
        )}

      </div>

      {/* LIGHTBOX */}
      {lightbox !== null && (
        <Lightbox
          imgs={imgs}
          index={lightbox}
          onClose={() => setLightbox(null)}
          onPrev={() => setLightbox((l) => (l - 1 + imgs.length) % imgs.length)}
          onNext={() => setLightbox((l) => (l + 1) % imgs.length)}
        />
      )}
    </section>
  );
}

export default PropertyGallery;
