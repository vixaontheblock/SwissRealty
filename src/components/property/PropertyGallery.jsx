import { useState } from "react";

function PropertyGallery({ property }) {
  const [lightbox, setLightbox] = useState(null);
  const imgs = property.gallery || [];

  if (!imgs.length) return null;

  const [hero, ...rest] = imgs;
  const side = rest.slice(0, 2);
  const bottom = rest.slice(2, 4);

  return (
    <section id="property-gallery" className="py-16 md:py-28 px-5 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <p className="uppercase tracking-[4px] text-xs text-neutral-500 mb-4">
          Visual Exploration
        </p>
        <h2 className="text-3xl md:text-5xl font-light mb-10 md:mb-14">
          Experience The Property
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-12 gap-4 md:gap-5">
          {/* Hero large */}
          <button
            onClick={() => setLightbox(0)}
            className="md:col-span-7 h-[300px] md:h-[620px] overflow-hidden rounded-[24px] md:rounded-[32px]"
          >
            <img src={hero} alt="" className="w-full h-full object-cover hover:scale-105 transition duration-700" />
          </button>

          {/* Side 2 stacked */}
          <div className="md:col-span-5 grid gap-4 md:gap-5">
            {side.map((src, i) => (
              <button
                key={i}
                onClick={() => setLightbox(i + 1)}
                className="h-[200px] md:h-[300px] overflow-hidden rounded-[24px] md:rounded-[32px]"
              >
                <img src={src} alt="" className="w-full h-full object-cover hover:scale-105 transition duration-700" />
              </button>
            ))}
          </div>

          {/* Bottom 2 wide */}
          {bottom.map((src, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i + 3)}
              className="md:col-span-6 h-[220px] md:h-[360px] overflow-hidden rounded-[24px] md:rounded-[32px]"
            >
              <img src={src} alt="" className="w-full h-full object-cover hover:scale-105 transition duration-700" />
            </button>
          ))}
        </div>

        {/* View all hint */}
        {imgs.length > 5 && (
          <p className="text-xs text-neutral-400 tracking-[0.2em] uppercase mt-6 text-center">
            {imgs.length} photos available
          </p>
        )}
      </div>

      {/* LIGHTBOX */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/60 hover:text-white text-xs uppercase tracking-[0.2em]"
            onClick={() => setLightbox(null)}
          >
            Close
          </button>
          <button
            className="absolute left-4 text-white/60 hover:text-white text-4xl px-4"
            onClick={(e) => { e.stopPropagation(); setLightbox((l) => (l - 1 + imgs.length) % imgs.length); }}
          >
            ‹
          </button>
          <img
            src={imgs[lightbox]}
            alt=""
            className="max-w-[90vw] max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-4 text-white/60 hover:text-white text-4xl px-4"
            onClick={(e) => { e.stopPropagation(); setLightbox((l) => (l + 1) % imgs.length); }}
          >
            ›
          </button>
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-[0.2em]">
            {lightbox + 1} / {imgs.length}
          </p>
        </div>
      )}
    </section>
  );
}

export default PropertyGallery;
