import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Hero from "../components/home/Hero";
import FeaturedProperties from "../components/home/FeaturedProperties";
import WhyPanama from "../components/home/WhyPanama";
import Lifestyle from "../components/home/Lifestyle";
import CTASection from "../components/home/CTASection";

function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-white text-[#0b0a0f]">

        {/* HERO */}
        <section className="min-h-screen">
          <Hero />
        </section>

        {/* FLOW CONTAINER */}
        <div className="flex flex-col">

          {/* FEATURED */}
          <section className="py-24">
            <div className="max-w-7xl mx-auto px-8">
              <FeaturedProperties />
            </div>
          </section>

          {/* WHY PANAMA */}
          <section className="py-24 bg-neutral-50">
            <div className="max-w-6xl mx-auto px-8">
              <WhyPanama />
            </div>
          </section>

          {/* LIFESTYLE */}
          <section className="py-24">
            <div className="max-w-7xl mx-auto px-8">
              <Lifestyle />
            </div>
          </section>

        </div>

        {/* CTA */}
        <section className="py-28 bg-black text-white">
          <div className="max-w-4xl mx-auto px-8">
            <CTASection />
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default Home;