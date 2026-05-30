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

      <main className="flex flex-col">

        <section className="pt-28">
          <Hero />
        </section>

        <section className="py-24 bg-white">
          <FeaturedProperties />
        </section>

        <section className="py-28 bg-neutral-50">
          <WhyPanama />
        </section>

        <section className="py-28 bg-white">
          <Lifestyle />
        </section>

        <section className="py-32 bg-neutral-950 text-white">
          <CTASection />
        </section>

      </main>

      <Footer />
    </>
  );
}

export default Home;