// ─── FOTOS REALES ─────────────────────────────────────────────────────────────
// Archivos existentes en src/assets/properties/las-quintas/

import lasQuintasMain      from "../assets/properties/las-quintas/mainphoto.jpg";
import lasQuintasPool      from "../assets/properties/las-quintas/pool.jpg";
import lasQuintasPool2     from "../assets/properties/las-quintas/pool2.jpg";
import lasQuintasLounge    from "../assets/properties/las-quintas/lounge.jpg";
import lasQuintasLounge2   from "../assets/properties/las-quintas/lounge2.jpg";
import lasQuintasKitchen   from "../assets/properties/las-quintas/kitchen.jpg";
import lasQuintasDining    from "../assets/properties/las-quintas/diningroom.jpg";
import lasQuintasDining2   from "../assets/properties/las-quintas/diningroom2.jpg";
import lasQuintasDining3   from "../assets/properties/las-quintas/diningroom3.jpg";
import lasQuintasMainRoom  from "../assets/properties/las-quintas/main-room.jpg";
import lasQuintasRoom2     from "../assets/properties/las-quintas/room-2.jpg";
import lasQuintasRoom3     from "../assets/properties/las-quintas/room-3.jpg";
import lasQuintasBackyard  from "../assets/properties/las-quintas/backyard.jpg";
import lasQuintasBackyard2 from "../assets/properties/las-quintas/backyard2.jpg";
import lasQuintasBackyard3 from "../assets/properties/las-quintas/backyard3.jpg";
import lasQuintasEntrance  from "../assets/properties/las-quintas/view-tw-the-entrance.jpg";

// ─── PROPERTIES ARRAY ─────────────────────────────────────────────────────────
const properties = [
  {
    id:       "las-quintas",
    slug:     "las-quintas",
    featured: true,
    status:   "renovation",   // "sale" | "renovation" | "sold"

    title:    "Casa en Las Quintas",
    subtitle: "Coronado, Panamá Oeste",
    location: "Residencial Las Quintas · Coronado, Panamá",

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

    // Hero image (tarjetas + PropertyHero)
    image: lasQuintasMain,

    // Galería actual (fotos del estado presente)
    gallery: [
      lasQuintasPool,
      lasQuintasPool2,
      lasQuintasLounge,
      lasQuintasLounge2,
      lasQuintasKitchen,
      lasQuintasDining,
      lasQuintasDining2,
      lasQuintasDining3,
      lasQuintasMainRoom,
      lasQuintasRoom2,
      lasQuintasRoom3,
      lasQuintasBackyard,
      lasQuintasBackyard2,
      lasQuintasBackyard3,
      lasQuintasEntrance,
    ],

    // Sección Before/After — agrega tus fotos "antes" y "después" aquí
    // Cuando tengas fotos de remodelación, llena este array:
    beforeAfter: [
      // Ejemplo de estructura:
      // { label: "Sala de Estar", before: lasQuintasLounge, after: null },
      // { label: "Cocina",        before: lasQuintasKitchen, after: null },
      // Por ahora usamos las fotos actuales como "before":
      { label: "Sala Principal",  before: lasQuintasLounge,   after: null },
      { label: "Cocina",          before: lasQuintasKitchen,  after: null },
      { label: "Comedor",         before: lasQuintasDining,   after: null },
      { label: "Habitación Principal", before: lasQuintasMainRoom, after: null },
      { label: "Piscina",         before: lasQuintasPool,     after: null },
      { label: "Jardín",          before: lasQuintasBackyard, after: null },
    ],

    description: `Acogedora casa en venta en Coronado, Las Quintas. La propiedad cuenta con 3 habitaciones, 3 baños, sala de estar, comedor, cocina de concepto abierto, lavandería interior, terraza techada, piscina con bohío, y está totalmente enrejada para privacidad y seguridad. Actualmente en proceso de remodelación completa para entregarse en condición premium.`,

    features: [
      "Amoblada",
      "Baño de Servicio",
      "Bohío",
      "Propiedad Enrejada",
      "Área de Comedor",
      "Cuarto de Servicio",
      "Área de Desayuno",
      "Lavandería",
      "Electrodomésticos Incluidos",
      "Piscina",
      "Sala de Estar",
      "Terraza Techada",
    ],

    nearby: [
      { label: "Playa de Coronado",  detail: "Costa Pacífica, 5 min en auto" },
      { label: "Club de Golf",       detail: "Campo de 18 hoyos, 3 km" },
      { label: "Supermercado",       detail: "Supermercado Rey, 5 km" },
      { label: "Centro Médico",      detail: "Pacífica Salud, 12 km" },
      { label: "Ciudad de Panamá",   detail: "80 km · ~1 hr en auto" },
      { label: "Aeropuerto Tocumen", detail: "Internacional, 95 km" },
    ],

    lat: 8.52854,
    lng: -79.89407,

    googleMapsUrl: "https://maps.app.goo.gl/qas7JuuX64CQikCM6",
    appleMapsUrl:  "https://maps.apple.com/?q=8.52854,-79.89407",

    tour360Url:    "",
    droneVideoUrl: "",

    tableDetails: [
      { label: "ID Propiedad",    value: "SPR-0001" },
      { label: "Tipo",            value: "Casa · En Venta" },
      { label: "Estado",          value: "En Remodelación" },
      { label: "Habitaciones",    value: "3" },
      { label: "Baños",           value: "3" },
      { label: "Construcción",    value: "220 m²" },
      { label: "Área del Lote",   value: "1,536 m²" },
      { label: "Garaje",          value: "1 espacio" },
      { label: "Piscina",         value: "Sí · con Bohío" },
      { label: "Comunidad",       value: "Las Quintas, Coronado" },
      { label: "Provincia",       value: "Panamá Oeste" },
    ],
  },
];

export default properties;
