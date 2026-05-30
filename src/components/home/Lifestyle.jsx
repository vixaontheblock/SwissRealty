export default function Lifestyle() {
  return (
    <section className="py-28 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">

        {/* IMAGE (REMOTE / SAFE) */}
        <img
          src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1600&q=80"
          alt="Beach lifestyle in Panama"
          className="rounded-3xl h-[500px] w-full object-cover"
          loading="lazy"
        />

        {/* TEXT */}
        <div>

          <h2 className="text-4xl font-light">
            Coastal Luxury Lifestyle
          </h2>

          <p className="mt-6 text-neutral-500 leading-7">
            Experience beachfront living on Panama’s Pacific coast, where tropical nature, privacy, and modern comfort blend into a unique lifestyle.
          </p>

          <p className="mt-4 text-neutral-500 leading-7">
            Perfect for international buyers seeking investment opportunities and a high-quality coastal life.
          </p>

          {/* HIGHLIGHTS */}
          <div className="mt-10 grid gap-6">

            <div>
              <h4 className="text-lg font-light">Ocean Access</h4>
              <p className="text-neutral-500 text-sm mt-1">
                Minutes away from pristine beaches.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-light">Private Communities</h4>
              <p className="text-neutral-500 text-sm mt-1">
                Secure gated residential areas.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-light">Investment Value</h4>
              <p className="text-neutral-500 text-sm mt-1">
                High demand coastal real estate.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}