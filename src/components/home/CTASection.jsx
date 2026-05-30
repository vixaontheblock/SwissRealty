import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="relative py-36 bg-black text-white overflow-hidden">

      {/* soft glow background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-black to-black" />

      {/* content */}
      <div className="relative max-w-4xl mx-auto px-8 text-center">

        {/* label */}
        <p className="uppercase tracking-[0.4em] text-xs text-white/50">
          Investment Opportunity
        </p>

        {/* title */}
        <h2 className="text-4xl md:text-5xl font-light mt-6 leading-tight">
          Ready to Invest in
          <br />
          Panama Real Estate?
        </h2>

        {/* description */}
        <p className="mt-8 text-white/60 leading-7 text-lg max-w-2xl mx-auto">
          Contact our team for private viewings, exclusive listings, and
          personalized investment opportunities in Panama’s most
          desirable coastal communities.
        </p>

        {/* buttons */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">

          <Link
            to="/contact"
            className="
              btn btn-primary
              bg-white text-black border border-white
              hover:bg-transparent hover:text-white
              transition
            "
          >
            Contact Private Agent
          </Link>

          <Link
            to="/properties"
            className="
              btn btn-secondary
              border-white/30 text-white
              hover:bg-white hover:text-black
              transition
            "
          >
            Explore Properties
          </Link>

        </div>

        {/* subtle bottom hint */}
        <p className="mt-14 text-xs text-white/30 tracking-[0.3em] uppercase">
          Swiss Panama Realty • Luxury Real Estate Experience
        </p>

      </div>
    </section>
  );
}