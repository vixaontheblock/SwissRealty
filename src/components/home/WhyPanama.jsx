export default function WhyPanama() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-8">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-light tracking-tight">
            Why Panama
          </h2>

          <p className="mt-6 text-neutral-500 leading-7">
            Panama combines dollar stability, strategic location, and
            strong real estate appreciation for international investors.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-10 mt-20">

          {/* CARD 1 */}
          <div className="
            p-8 rounded-3xl border border-neutral-200
            bg-white hover:shadow-xl
            transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
            hover:-translate-y-1
          ">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
              Economy
            </p>

            <h3 className="text-2xl font-light mt-4">
              Dollar Stability
            </h3>

            <p className="text-neutral-500 mt-3 leading-6">
              Panama uses the US dollar, eliminating currency risk and
              offering predictable financial stability for investors.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="
            p-8 rounded-3xl border border-neutral-200
            bg-white hover:shadow-xl
            transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
            hover:-translate-y-1
          ">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
              Investment
            </p>

            <h3 className="text-2xl font-light mt-4">
              Strong ROI Growth
            </h3>

            <p className="text-neutral-500 mt-3 leading-6">
              Real estate in coastal areas continues to grow with high demand
              from international buyers and expats.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="
            p-8 rounded-3xl border border-neutral-200
            bg-white hover:shadow-xl
            transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
            hover:-translate-y-1
          ">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
              Lifestyle
            </p>

            <h3 className="text-2xl font-light mt-4">
              Coastal Living
            </h3>

            <p className="text-neutral-500 mt-3 leading-6">
              Tropical climate, beaches, golf resorts and luxury communities
              define Panama’s lifestyle appeal.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}