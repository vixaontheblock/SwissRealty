import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function Contact() {
  return (
    <>
      <Navbar />

      <main className="pt-24">

        {/* HERO */}
        <section className="py-28 bg-white">
          <div className="max-w-5xl mx-auto px-8 text-center">

            <p className="uppercase tracking-[4px] text-sm text-neutral-500">
              Contact Us
            </p>

            <h1 className="text-5xl font-light mt-6">
              Let’s Talk About Your Next Property
            </h1>

            <p className="mt-6 text-neutral-500 leading-7">
              Whether you’re looking to invest or find your dream home in Panama, our team is ready to guide you through every step.
            </p>

          </div>
        </section>

        {/* CONTENT */}
        <section className="py-28 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16">

            {/* INFO SIDE */}
            <div>

              <h2 className="text-3xl font-light">
                Get in Touch
              </h2>

              <p className="mt-6 text-neutral-500 leading-7">
                We respond within 24 hours and provide personalized assistance for international buyers and investors.
              </p>

              <div className="mt-10 space-y-6">

                <div>
                  <h3 className="text-lg font-light">Email</h3>
                  <p className="text-neutral-500">info@swisspanamarealty.com</p>
                </div>

                <div>
                  <h3 className="text-lg font-light">Phone</h3>
                  <p className="text-neutral-500">+507 XXX XXXX</p>
                </div>

                <div>
                  <h3 className="text-lg font-light">Location</h3>
                  <p className="text-neutral-500">Panama City, Panama</p>
                </div>

              </div>

              {/* TRUST NOTE */}
              <div className="mt-10 p-6 bg-white rounded-2xl border border-neutral-200">
                <p className="text-sm text-neutral-500 leading-6">
                  We specialize in luxury properties and investment opportunities across Panama’s coastal regions including Coronado, Playa Blanca, and Costa Esmeralda.
                </p>
              </div>

            </div>

            {/* FORM SIDE */}
            <div className="bg-white p-10 rounded-3xl border border-neutral-200">

              <h3 className="text-2xl font-light mb-6">
                Send a Message
              </h3>

              <form className="space-y-5">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-5 py-4 rounded-xl border border-neutral-200 focus:outline-none focus:border-black transition"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-5 py-4 rounded-xl border border-neutral-200 focus:outline-none focus:border-black transition"
                />

                <input
                  type="text"
                  placeholder="Phone (optional)"
                  className="w-full px-5 py-4 rounded-xl border border-neutral-200 focus:outline-none focus:border-black transition"
                />

                <textarea
                  placeholder="Tell us what you're looking for..."
                  rows="5"
                  className="w-full px-5 py-4 rounded-xl border border-neutral-200 focus:outline-none focus:border-black transition"
                />

                <button
                  type="submit"
                  className="btn btn-primary w-full"
                >
                  Send Inquiry
                </button>

              </form>

            </div>

          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-28 bg-black text-white text-center">
          <div className="max-w-3xl mx-auto px-8">

            <h2 className="text-4xl font-light">
              Your Dream Property in Panama Awaits
            </h2>

            <p className="mt-6 text-white/70 leading-7">
              Connect with our team and discover exclusive listings not available on public platforms.
            </p>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default Contact;