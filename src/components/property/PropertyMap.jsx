function PropertyMap() {
  const latitude = 8.52854;
  const longitude = -79.89407;

  return (
    <section className="bg-neutral-100 py-32 px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <p className="uppercase tracking-[4px] text-sm text-neutral-500 mb-4">
            Prime Location
          </p>

          <h2 className="text-5xl font-light leading-tight">
            Las Quintas · Coronado
          </h2>

          <p className="mt-5 text-neutral-600 text-lg max-w-3xl leading-8">
            Perfectly positioned in Coronado,
            one of Panama’s most desirable
            residential destinations for
            international buyers.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">

          {/* MAP */}
          <div className="lg:col-span-8 rounded-[36px] overflow-hidden h-[600px] shadow-sm border border-neutral-200 bg-black">
            <iframe
              title="Property Location"
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              src={`https://maps.google.com/maps?q=${latitude},${longitude}&z=20&t=h&output=embed`}
            />
          </div>

          {/* RIGHT PANEL */}
          <div className="lg:col-span-4 bg-white rounded-[36px] p-10 shadow-sm flex flex-col justify-between">

            {/* TOP */}
            <div>

              {/* BADGE */}
              <div className="inline-flex items-center gap-3 bg-neutral-100 rounded-full px-4 py-3 mb-8">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                <span className="text-xs uppercase tracking-[3px] text-neutral-600">
                  Exact Property Location
                </span>
              </div>

              {/* TITLE */}
              <h3 className="text-3xl font-light mb-8">
                Nearby Lifestyle
              </h3>

              {/* ITEMS */}
              <div className="space-y-8">

                <div>
                  <h4 className="text-xl font-light">Beach Access</h4>
                  <p className="text-neutral-500 mt-2 leading-7">
                    Minutes away from Coronado’s Pacific coastline.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-light">Golf & Recreation</h4>
                  <p className="text-neutral-500 mt-2 leading-7">
                    Premium golf and recreational experiences nearby.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-light">Essentials</h4>
                  <p className="text-neutral-500 mt-2 leading-7">
                    Restaurants, supermarkets, clinics and banking just minutes away.
                  </p>
                </div>

              </div>
            </div>

            {/* BUTTONS (FIXED USING GLOBAL SYSTEM) */}
            <div className="mt-12 flex flex-col gap-3">

              <a
                href="https://maps.app.goo.gl/qas7JuuX64CQikCM6?g_st=ic"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Open Google Maps
              </a>

              <a
                href="https://maps.apple/p/d~cd0LoA0Pum6G"
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
              >
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