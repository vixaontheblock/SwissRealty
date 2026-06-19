import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import properties from "../data/properties";

import Navbar              from "../components/layout/Navbar";
import Footer              from "../components/layout/Footer";
import PropertyHero        from "../components/property/PropertyHero";
import PropertySnapshot    from "../components/property/PropertySnapshot";
import PropertyOverview    from "../components/property/PropertyOverview";
import TransformationVision from "../components/property/TransformationVision";
import RenderShowcase      from "../components/property/RenderShowcase";
import PropertyDescription from "../components/property/PropertyDescription";
import PropertyGallery     from "../components/property/PropertyGallery";
import PropertyFeatures    from "../components/property/PropertyFeatures";
import PropertyNearby      from "../components/property/PropertyNearby";
import PropertyMap         from "../components/property/PropertyMap";
import PropertyDetailsTable from "../components/property/PropertyDetailsTable";
import VirtualTour         from "../components/property/VirtualTour";
import PropertyContactForm from "../components/property/PropertyContactForm";
import FloatingContact     from "../components/common/FloatingContact";

export default function PropertyDetail() {
  const { id } = useParams();
  const property = properties.find((p) => p.slug === id || p.id === id);

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!property) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen flex flex-col items-center justify-center gap-6 text-center px-8 pt-32">
          <p className="text-xs uppercase tracking-[0.4em] text-neutral-400">404</p>
          <h1 className="text-4xl font-light">Property not found</h1>
          <p className="text-neutral-500">This listing may have been removed or the URL is incorrect.</p>
          <Link to="/properties" className="btn btn-primary mt-4">Browse Properties</Link>
        </main>
        <Footer />
      </>
    );
  }

  // Solo mostrar renders si la propiedad los tiene (las-quintas por ahora)
  const showRenders = property.slug === "las-quintas" || property.id === "las-quintas";

  return (
    <>
      <Navbar />
      <main>
        {/* 1. Identidad */}
        <PropertyHero        property={property} />
        <PropertySnapshot    property={property} />
        <PropertyOverview    property={property} />

        {/* 2. Visión a futuro (renders) */}
        {showRenders && (
          <>
            <TransformationVision />
            <RenderShowcase />
          </>
        )}

        {/* 3. Estado actual y detalles */}
        <PropertyDescription property={property} />
        <PropertyGallery     property={property} />
        <PropertyFeatures    property={property} />
        <VirtualTour         property={property} />

        {/* 4. Contexto y conversión */}
        <PropertyNearby      property={property} />
        <PropertyMap         property={property} />
        <PropertyDetailsTable property={property} />
        <PropertyContactForm property={property} />
      </main>
      <FloatingContact />
      <Footer />
    </>
  );
}
