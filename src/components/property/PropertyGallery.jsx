import pool from "../../assets/properties/las-quintas/pool.webp";
import kitchen from "../../assets/properties/las-quintas/kitchen.webp";
import living from "../../assets/properties/las-quintas/living.webp";
import terrace from "../../assets/properties/las-quintas/terrace.webp";
import bedroom from "../../assets/properties/las-quintas/bedroom.webp";

function PropertyGallery() {
  return (
    <section className="py-28 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <p className="uppercase tracking-[4px] text-sm text-neutral-500 mb-4">
          Visual Exploration
        </p>

        <h2 className="text-5xl font-light mb-14">
          Experience The Property
        </h2>

        <div className="grid md:grid-cols-12 gap-5">
          <img
            src={pool}
            alt=""
            className="md:col-span-7 h-[620px] w-full rounded-[32px] object-cover"
          />

          <div className="md:col-span-5 grid gap-5">
            <img
              src={living}
              alt=""
              className="h-[300px] rounded-[32px] object-cover w-full"
            />

            <img
              src={terrace}
              alt=""
              className="h-[300px] rounded-[32px] object-cover w-full"
            />
          </div>

          <img
            src={kitchen}
            alt=""
            className="md:col-span-6 h-[380px] rounded-[32px] object-cover w-full"
          />

          <img
            src={bedroom}
            alt=""
            className="md:col-span-6 h-[380px] rounded-[32px] object-cover w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default PropertyGallery;