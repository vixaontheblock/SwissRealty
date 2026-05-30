import { Link } from "react-router-dom";
import heroImg from "../../assets/properties/las-quintas/hero.webp";

export default function FeaturedProperties() {
  return (
    <section className="py-28 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-light mb-12">
          Featured Properties
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <Link to="/properties/las-quintas" className="card">
            <img
              src={heroImg}
              className="rounded-2xl h-72 w-full object-cover"
              alt="Las Quintas"
            />

            <h3 className="mt-4 text-xl font-light">
              Las Quintas Residence
            </h3>

            <p className="text-neutral-500">
              Coronado, Panama
            </p>

            <p className="mt-2 font-light">
              $295,000
            </p>
          </Link>

        </div>

      </div>
    </section>
  );
}