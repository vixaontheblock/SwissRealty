function VirtualTour({ property }) {
  const { tour360Url, droneVideoUrl } = property;
  const hasAny = tour360Url || droneVideoUrl;

  return (
    <section className="bg-neutral-100 py-20 md:py-32 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <p className="uppercase tracking-[4px] text-xs text-neutral-500 mb-4">
          Virtual Experience
        </p>
        <h2 className="text-3xl md:text-5xl font-light mb-10 md:mb-14">
          360° Property Tour
        </h2>

        {/* 360 Tour */}
        <div className="bg-white rounded-[28px] md:rounded-[36px] overflow-hidden mb-6 shadow-sm">
          {tour360Url ? (
            <iframe
              src={tour360Url}
              title="360° Virtual Tour"
              className="w-full h-[300px] md:h-[500px] border-none"
              allowFullScreen
              allow="xr-spatial-tracking"
            />
          ) : (
            <div className="w-full h-[280px] md:h-[500px] flex flex-col items-center justify-center gap-4 text-center px-8">
              <div className="text-5xl opacity-20">⟳</div>
              <p className="text-neutral-400 font-light text-lg md:text-xl">
                360° Tour — Coming Soon
              </p>
              <p className="text-xs text-neutral-400 tracking-[0.1em]">
                Paste Matterport or Kuula URL in <code className="text-neutral-600">properties.js → tour360Url</code>
              </p>
            </div>
          )}
        </div>

        {/* Drone video */}
        <div className="bg-white rounded-[28px] md:rounded-[36px] overflow-hidden shadow-sm">
          {droneVideoUrl ? (
            <iframe
              src={droneVideoUrl}
              title="Drone Video"
              className="w-full h-[220px] md:h-[400px] border-none"
              allowFullScreen
              allow="accelerometer; autoplay; encrypted-media; gyroscope"
            />
          ) : (
            <div className="w-full h-[220px] md:h-[360px] flex flex-col items-center justify-center gap-4 text-center px-8">
              <div className="text-4xl opacity-20">🚁</div>
              <p className="text-neutral-400 font-light text-lg md:text-xl">
                Aerial Drone Video — Coming Soon
              </p>
              <p className="text-xs text-neutral-400 tracking-[0.1em]">
                Paste YouTube embed URL in <code className="text-neutral-600">properties.js → droneVideoUrl</code>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default VirtualTour;
