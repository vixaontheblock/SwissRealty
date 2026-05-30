import { Link } from "react-router-dom";

function PropertyCard({ property }) {
  return (
    <Link
      to={`/properties/${property.id}`}
      className="group bg-white rounded-3xl overflow-hidden border border-neutral-200 hover:shadow-xl transition-all duration-300"
    >

      {/* IMAGE */}
      <div className="h-72 overflow-hidden bg-neutral-200">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      {/* CONTENT */}
      <div className="p-6">

        <h3 className="text-xl font-light">
          {property.title}
        </h3>

        <p className="text-neutral-500 text-sm mt-1">
          {property.location}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <p className="text-sm text-neutral-500">
            {property.beds} Beds · {property.baths} Baths
          </p>

          <p className="text-lg font-light">
            ${property.price}
          </p>
        </div>

      </div>

    </Link>
  );
}

export default PropertyCard;