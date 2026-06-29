// src/pages/About.jsx
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import siteConfig from "../data/siteConfig";
import poolImg    from "../assets/properties/las-quintas/pool2.jpg";
import entranceImg from "../assets/properties/las-quintas/view-tw-the-entrance.jpg";

function About() {
  return (
    <>
      <Navbar />
      <main className="pt-24">

        {/* HERO */}
        <section className="py-28 bg-white">
          <div className="max-w-5xl mx-auto px-8 text-center">
            <p className="uppercase tracking-[0.4em] text-xs text-neutral-400 mb-5">
              About {siteConfig.name}
            </p>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight leading-[1.1]" style={{ letterSpacing: "-0.02em" }}>
              Real Estate Experts<br />in Panama
            </h1>
            <p className="mt-8 text-neutral-500 leading-7 max-w-2xl mx-auto text-lg">
              We specialize in luxury properties, investment opportunities, and coastal real estate across Panama's most exclusive areas.
            </p>
          </div>
        </section>

        {/* STORY */}
        <section className="py-28 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
            <img
              src={poolImg}
              alt="Las Quintas · Coronado"
              className="rounded-[32px] h-[500px] w-full object-cover"
              loading="lazy"
            />
            <div>
              <p className="uppercase tracking-[0.4em] text-xs text-neutral-400 mb-5">Our Vision</p>
              <h2 className="text-3xl md:text-5xl font-light leading-[1.1] mb-8" style={{ letterSpacing: "-0.02em" }}>
                Panama is one of the most strategic markets in Latin America
              </h2>
              <p className="text-neutral-500 leading-7 mb-4">
                Stability, growth, and unmatched coastal lifestyle. We connect international buyers with high-value properties that combine lifestyle and investment potential.
              </p>
              <p className="text-neutral-400 leading-7 text-sm">
                Based in {siteConfig.contact.location}, our team brings deep local knowledge and a global perspective to every transaction.
              </p>
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="py-28 bg-white">
          <div className="max-w-7xl mx-auto px-8">
            <p className="uppercase tracking-[0.4em] text-xs text-neutral-400 mb-5 text-center">Why Choose Us</p>
            <h2 className="text-3xl md:text-5xl font-light text-center mb-16" style={{ letterSpacing: "-0.02em" }}>
              What Sets Us Apart
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Expertise", text: "Deep knowledge of Panama's luxury real estate market and coastal communities." },
                { title: "Trust",     text: "Transparent, reliable investment guidance with no hidden fees or pressure." },
                { title: "Access",    text: "Exclusive listings not available on public platforms or traditional agencies." },
              ].map(({ title, text }) => (
                <div key={title} className="p-8 rounded-[24px] border border-neutral-200 hover:border-neutral-900 hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                  <h3 className="text-xl font-light mb-3">{title}</h3>
                  <p className="text-neutral-500 leading-6 text-sm">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT CTA */}
        <section className="relative overflow-hidden bg-neutral-900 text-white py-28">
          <img src={entranceImg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-neutral-900/80" />
          <div className="relative max-w-3xl mx-auto px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-light mb-6" style={{ letterSpacing: "-0.02em" }}>
              Let's Find Your Property in Panama
            </h2>
            <p className="text-white/60 leading-7 mb-10">
              Contact us to discover exclusive listings and investment opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn btn-primary bg-white text-black border border-white hover:bg-transparent hover:text-white">
                Contact Us
              </Link>
              <Link to="/properties" className="btn btn-secondary border-white/30 text-white hover:bg-white hover:text-black">
                View Properties
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

export default About;
