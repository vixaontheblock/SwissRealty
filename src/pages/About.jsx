import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function About() {
  return (
    <>
      <Navbar />

      <main className="pt-24">

        {/* HERO */}
        <section className="py-28 bg-white">
          <div className="max-w-5xl mx-auto px-8 text-center">

            <p className="uppercase tracking-[4px] text-sm text-neutral-500">
              About Swiss Panama Realty
            </p>

            <h1 className="text-5xl font-light mt-6">
              Real Estate Experts in Panama
            </h1>

            <p className="mt-6 text-neutral-500 leading-7">
              We specialize in luxury properties, investment opportunities, and coastal real estate across Panama’s most exclusive areas.
            </p>

          </div>
        </section>

        {/* STORY SECTION */}
        <section className="py-28 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">

            {/* IMAGE */}
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
              alt="Real estate Panama"
              className="rounded-3xl h-[500px] w-full object-cover"
              loading="lazy"
            />

            {/* TEXT */}
            <div>

              <h2 className="text-4xl font-light">
                Our Vision
              </h2>

              <p className="mt-6 text-neutral-500 leading-7">
                We believe Panama is one of the most strategic real estate markets in Latin America, offering stability, growth, and unmatched coastal lifestyle opportunities.
              </p>

              <p className="mt-4 text-neutral-500 leading-7">
                Our mission is to connect international buyers with high-value properties that combine lifestyle and investment potential.
              </p>

            </div>

          </div>
        </section>

        {/* VALUES */}
        <section className="py-28 bg-white">
          <div className="max-w-7xl mx-auto px-8 text-center">

            <h2 className="text-4xl font-light">
              Why Choose Us
            </h2>

            <div className="grid md:grid-cols-3 gap-10 mt-14">

              <div>
                <h3 className="text-xl font-light">Expertise</h3>
                <p className="text-neutral-500 mt-3">
                  Deep knowledge of Panama’s luxury real estate market.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-light">Trust</h3>
                <p className="text-neutral-500 mt-3">
                  Transparent and reliable investment guidance.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-light">Access</h3>
                <p className="text-neutral-500 mt-3">
                  Exclusive listings not available on public platforms.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="py-28 bg-black text-white text-center">
          <div className="max-w-3xl mx-auto px-8">

            <h2 className="text-4xl font-light">
              Let’s Find Your Property in Panama
            </h2>

            <p className="mt-6 text-white/70 leading-7">
              Contact us to discover exclusive listings and investment opportunities.
            </p>

            <div className="mt-10">
              <a href="/contact" className="btn btn-primary">
                Contact Us
              </a>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default About;