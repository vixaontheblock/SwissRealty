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

      {/* MAIN CONTENT (semantic core of page) */}
      <main id="main-content">

        {/* HERO SECTION */}
        <section aria-label="Hero section">
          <Hero />
        </section>

        {/* FEATURED PROPERTIES SECTION */}
        <section aria-label="Featured properties section">
          <FeaturedProperties />
        </section>

        {/* WHY PANAMA SECTION */}
        <section aria-label="Why invest in Panama section">
          <WhyPanama />
        </section>

        {/* LIFESTYLE SECTION */}
        <section aria-label="Lifestyle section">
          <Lifestyle />
        </section>

        {/* CALL TO ACTION SECTION */}
        <section aria-label="Call to action section">
          <CTASection />
        </section>

      </main>

      <Footer />
    </>
  );
}

export default Home;