import { motion } from "framer-motion";

export default function TransformationVision() {
  return (
    <section className="bg-neutral-950 text-white py-28 md:py-36 px-5 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10 md:gap-16 items-end">

        <div className="md:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="uppercase tracking-[0.4em] text-[11px] text-white/40 mb-6"
          >
            Transformation Vision
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-light leading-[1.02] tracking-tight"
          >
            Reimaginando<br/>
            <span className="italic text-white/60">el lujo tropical</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
          className="md:col-span-5"
        >
          <p className="text-lg leading-9 text-white/70 mb-8">
            Esta residencia está siendo cuidadosamente renovada para elevar el
            confort, el diseño y los estándares de vida tropical moderna para
            compradores internacionales.
          </p>

          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
            {[
              ["6", "Espacios renovados"],
              ["100%", "Materiales premium"],
              ["Q1", "Entrega 2026"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="text-2xl md:text-3xl font-light">{n}</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 mt-2 leading-tight">{l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
