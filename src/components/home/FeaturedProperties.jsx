import { Link } from "react-router-dom";
import heroImg from "../../assets/properties/las-quintas/hero.webp";

export default function FeaturedProperties() {
  return (
    <section className="py-28 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-8">

        {/* HEADER */}
        <div className="mb-14">
          <h2 className="text-4xl font-light tracking-tight">
            Featured Properties
          </h2>

          <p className="text-neutral-500 mt-3 max-w-xl">
            Handpicked luxury homes in Panama’s most exclusive areas.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* CARD */}
          <Link
            to="/properties/las-quintas"
            className="
              group relative overflow-hidden rounded-3xl
              bg-white border border-neutral-200
              transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
              hover:-translate-y-2 hover:shadow-2xl
            "
          >

            {/* IMAGE WRAPPER */}
            <div className="h-80 overflow-hidden">
              <img
                src={heroImg}
                alt="Las Quintas"
                className="
                  w-full h-full object-cover
                  scale-105 group-hover:scale-110
                  transition duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                "
              />

              {/* OVERLAY */}
              <div className="
                absolute inset-0
                bg-gradient-to-t from-black/40 via-black/0 to-transparent
                opacity-0 group-hover:opacity-100
                transition duration-500
              " />
            </div>

            {/* CONTENT */}
            <div className="p-6">

              <h3 className="text-xl font-light text-neutral-900">
                Las Quintas Residence
              </h3>

              <p className="text-neutral-500 text-sm mt-1">
                Coronado, Panama
              </p>

              <div className="mt-5 flex items-center justify-between">

                <p className="text-sm text-neutral-500">
                  3 Beds · 2 Baths
                </p>

                <p className="text-lg font-light text-neutral-900">
                  $295,000
                </p>

              </div>

            </div>

          </Link>

        </div>

      </div>
    </section>
  );
}