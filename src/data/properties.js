// ─── FOTOS ────────────────────────────────────────────────────────────────────
// Importa tus imágenes locales aquí. Estructura de carpetas:
//   src/assets/properties/las-quintas/hero.webp
//   src/assets/properties/las-quintas/pool.webp  ... etc.
//
// Para agregar una propiedad nueva:
//   1. Crea src/assets/properties/SLUG/  y sube tus fotos
//   2. Importa las fotos abajo
//   3. Copia el objeto y rellena los datos

import lasQuintasHero    from "../assets/properties/las-quintas/hero.webp";
import lasQuintasPool    from "../assets/properties/las-quintas/pool.webp";
import lasQuintasKitchen from "../assets/properties/las-quintas/kitchen.webp";
import lasQuintasLiving  from "../assets/properties/las-quintas/living.webp";
import lasQuintasTerrace from "../assets/properties/las-quintas/terrace.webp";
import lasQuintasBedroom from "../assets/properties/las-quintas/bedroom.webp";
import lasQuintasBath    from "../assets/properties/las-quintas/bathroom.webp";
import lasQuintasGarden  from "../assets/properties/las-quintas/garden.webp";

// ─── PROPERTIES ARRAY ─────────────────────────────────────────────────────────
const properties = [
  {
    id:       "las-quintas",
    slug:     "las-quintas",
    featured: true,
    status:   "renovation",   // "sale" | "renovation" | "sold"

    title:    "Casa en Las Quintas",
    subtitle: "Coronado, Panama",
    location: "Las Quintas Residential Community · Coronado, Panama",

    price:    295000,
    currency: "USD",

    specs: {
      bedrooms:  3,
      bathrooms: 3,
      areaSqm:   220,
      lotSqm:    1536,
      garage:    1,
      pool:      true,
    },

    // Hero image (shown in cards + PropertyHero)
    image: lasQuintasHero,

    // Gallery images (shown in PropertyGallery)
    // First image is the "hero" large image
    gallery: [
      lasQuintasPool,
      lasQuintasLiving,
      lasQuintasTerrace,
      lasQuintasKitchen,
      lasQuintasBedroom,
      lasQuintasBath,
      lasQuintasGarden,
    ],

    description: `Cozy home for sale in Coronado, Las Quintas. The property features 3 bedrooms,
3 bathrooms, a living room, dining area, open-concept kitchen, indoor laundry,
covered terrace, swimming pool with a bohío, and is fully fenced for privacy and security.
Currently undergoing full renovation to deliver in premium condition.`,

    features: [
      "Furnished",
      "Service Bathroom",
      "Bohío",
      "Gated Property",
      "Dining Area",
      "Maid's Room",
      "Breakfast Area",
      "Laundry Room",
      "White Goods Included",
      "Swimming Pool",
      "Living Room",
      "Covered Terrace",
    ],

    nearby: [
      { label: "Coronado Beach",    detail: "Pacific coastline, 5 min drive" },
      { label: "Golf Club",         detail: "18-hole course, 3 km away" },
      { label: "Supermarket",       detail: "Supermarket Rey, 5 km" },
      { label: "Medical Center",    detail: "Pacífica Salud, 12 km" },
      { label: "Panama City",       detail: "80 km · ~1 hr drive" },
      { label: "Tocumen Airport",   detail: "International, 95 km" },
    ],

    // Exact coordinates (Las Quintas, Coronado)
    lat: 8.52854,
    lng: -79.89407,

    // Google Maps link
    googleMapsUrl:  "https://maps.app.goo.gl/qas7JuuX64CQikCM6",
    appleMapsUrl:   "https://maps.apple.com/?q=8.52854,-79.89407",

    // 360 / drone — paste embed URLs when ready
    tour360Url:   "",  // e.g. "https://my.matterport.com/show/?m=XXXXX"
    droneVideoUrl:"",  // e.g. "https://www.youtube.com/embed/XXXXX"

    tableDetails: [
      { label: "Property ID",   value: "SPR-0001" },
      { label: "Type",          value: "House · For Sale" },
      { label: "Status",        value: "Under Renovation" },
      { label: "Bedrooms",      value: "3" },
      { label: "Bathrooms",     value: "3" },
      { label: "Construction",  value: "220 m²" },
      { label: "Land Area",     value: "1,536 m²" },
      { label: "Garage",        value: "1 space" },
      { label: "Pool",          value: "Yes · with Bohío" },
      { label: "Community",     value: "Las Quintas, Coronado" },
      { label: "Province",      value: "Panamá Oeste" },
    ],
  },

  // ── TEMPLATE — copy this for the next property ─────────────────────────────
  // {
  //   id:       "property-slug",
  //   slug:     "property-slug",
  //   featured: false,
  //   status:   "sale",
  //   title:    "Property Name",
  //   subtitle: "Location, Panama",
  //   location: "Full address",
  //   price:    000000,
  //   currency: "USD",
  //   specs: { bedrooms: 0, bathrooms: 0, areaSqm: 0, lotSqm: 0, garage: 0, pool: false },
  //   image:   importedHeroImage,
  //   gallery: [],
  //   description: "",
  //   features: [],
  //   nearby: [],
  //   lat: 0, lng: 0,
  //   googleMapsUrl: "", appleMapsUrl: "",
  //   tour360Url: "", droneVideoUrl: "",
  //   tableDetails: [],
  // },
];

export default properties;
