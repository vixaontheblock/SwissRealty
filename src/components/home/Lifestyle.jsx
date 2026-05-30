export default function Lifestyle() {
  return (
    <section className="py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">

        {/* IMAGE */}
        <div className="relative overflow-hidden rounded-[32px]">
          <img
            src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1600&q=80"
            alt="Beach lifestyle in Panama"
            className="
              h-[560px] w-full object-cover
              scale-105 hover:scale-110
              transition duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
            "
            loading="lazy"
          />

          {/* subtle overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </div>

        {/* TEXT */}
        <div>

          {/* label */}
          <p className="uppercase tracking-[0.4em] text-xs text-neutral-400">
            Lifestyle
          </p>

          {/* title */}
          <h2 className="text-4xl md:text-5xl font-light mt-6 leading-tight">
            Coastal Living,
            <br />
            Redefined in Panama
          </h2>

          {/* description */}
          <p className="mt-8 text-neutral-500 leading-7 text-lg">
            Experience beachfront living on Panama’s Pacific coast, where tropical nature,
            privacy, and modern architecture blend into a refined coastal lifestyle.
          </p>

          <p className="mt-4 text-neutral-500 leading-7">
            Designed for international buyers seeking both investment value and a slower,
            higher-quality way of life.
          </p>

          {/* DIVIDER */}
          <div className="mt-10 h-px w-full bg-neutral-200" />

          {/* HIGHLIGHTS */}
          <div className="mt-10 grid gap-8">

            <div>
              <h4 className="text-xl font-light">Ocean Access</h4>
              <p className="text-neutral-500 text-sm mt-2 leading-6">
                Direct access to pristine beaches and coastal nature reserves.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-light">Private Communities</h4>
              <p className="text-neutral-500 text-sm mt-2 leading-6">
                Secure gated environments with luxury infrastructure.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-light">Long-Term Value</h4>
              <p className="text-neutral-500 text-sm mt-2 leading-6">
                Strong appreciation driven by international demand.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}