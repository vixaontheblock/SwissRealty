function PropertyMap({ property }) {
  const { lat, lng, googleMapsUrl, appleMapsUrl } = property;

  return (
    <section className="bg-neutral-100 py-16 md:py-32 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 md:mb-14">
          <p className="uppercase tracking-[4px] text-xs text-neutral-500 mb-4">
            Prime Location
          </p>
          <h2 className="text-3xl md:text-5xl font-light leading-tight">
            Las Quintas · Coronado
          </h2>
          <p className="mt-4 text-neutral-600 text-base md:text-lg max-w-3xl leading-8">
            Perfectly positioned in Coronado, one of Panama's most desirable
            residential destinations for international buyers.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 md:gap-8 items-stretch">
          {/* MAP */}
          <div className="lg:col-span-8 rounded-[28px] md:rounded-[36px] overflow-hidden h-[320px] md:h-[600px] shadow-sm border border-neutral-200">
            <iframe
              title="Property Location"
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              src={`https://maps.google.com/maps?q=${lat},${lng}&z=18&t=h&output=embed`}
            />
          </div>

          {/* SIDEBAR */}
          <div className="lg:col-span-4 bg-white rounded-[28px] md:rounded-[36px] p-8 md:p-10 shadow-sm flex flex-col justify-between gap-8">
            <div>
              <div className="inline-flex items-center gap-3 bg-neutral-100 rounded-full px-4 py-3 mb-8">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                <span className="text-xs uppercase tracking-[3px] text-neutral-600">
                  Exact Location
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-light mb-8">Nearby Lifestyle</h3>

              <div className="space-y-6 md:space-y-8">
                <div>
                  <h4 className="text-lg md:text-xl font-light">Beach Access</h4>
                  <p className="text-neutral-500 mt-2 leading-7 text-sm">
                    Minutes away from Coronado's Pacific coastline.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-light">Golf &amp; Recreation</h4>
                  <p className="text-neutral-500 mt-2 leading-7 text-sm">
                    Premium golf and recreational experiences nearby.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-light">Essentials</h4>
                  <p className="text-neutral-500 mt-2 leading-7 text-sm">
                    Restaurants, supermarkets, clinics and banking just minutes away.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <a href={googleMapsUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
                Open Google Maps
              </a>
              <a href={appleMapsUrl} target="_blank" rel="noreferrer" className="btn btn-secondary">
                Open Apple Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PropertyMap;
