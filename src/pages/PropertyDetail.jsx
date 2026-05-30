import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import PropertyHero from "../components/property/PropertyHero";
import PropertySnapshot from "../components/property/PropertySnapshot";
import PropertyOverview from "../components/property/PropertyOverview";
import PropertyDescription from "../components/property/PropertyDescription";
import PropertyGallery from "../components/property/PropertyGallery";
import PropertyFeatures from "../components/property/PropertyFeatures";
import PropertyNearby from "../components/property/PropertyNearby";
import PropertyMap from "../components/property/PropertyMap";
import PropertyDetailsTable from "../components/property/PropertyDetailsTable";

import FloatingContact from "../components/common/FloatingContact";
import PropertyContactForm from "../components/property/PropertyContactForm";

function PropertyDetail() {
  return (
    <>
      <Navbar />

      <main>
        {/* HERO (emocional) */}
        <PropertyHero />

        {/* SNAPSHOT (datos rápidos) */}
        <PropertySnapshot />

        {/* OVERVIEW (precio + contexto) */}
        <PropertyOverview />

        {/* DESCRIPCIÓN (storytelling) */}
        <PropertyDescription />

        {/* GALLERY (visual selling) */}
        <PropertyGallery />

        {/* FEATURES (valor agregado) */}
        <PropertyFeatures />

        {/* NEARBY (lifestyle selling) */}
        <PropertyNearby />

        {/* MAP (ubicación premium) */}
        <PropertyMap />

        {/* DETAILS (data técnica) */}
        <PropertyDetailsTable />

        {/* CTA (conversión final) */}
        <PropertyContactForm />
      </main>

      {/* FLOATING CONTACT (always visible conversion) */}
      <FloatingContact />

      <Footer />
    </>
  );
}

export default PropertyDetail;