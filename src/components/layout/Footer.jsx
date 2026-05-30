import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white/60 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-8 py-16">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-3 gap-12">

          {/* BRAND */}
          <div>
            <h2 className="text-sm uppercase tracking-[0.3em] font-light">
              Swiss Panama Realty
            </h2>

            <p className="text-sm text-neutral-500 mt-4 leading-6 max-w-sm">
              Luxury real estate focused on premium properties in Panama.
              Designed for international investors and lifestyle buyers.
            </p>
          </div>

          {/* NAV */}
          <div className="flex flex-col gap-3 text-sm">
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-400 mb-2">
              Navigation
            </span>

            <Link to="/" className="hover:text-black text-neutral-500 transition">
              Home
            </Link>
            <Link to="/properties" className="hover:text-black text-neutral-500 transition">
              Properties
            </Link>
            <Link to="/about" className="hover:text-black text-neutral-500 transition">
              About
            </Link>
            <Link to="/contact" className="hover:text-black text-neutral-500 transition">
              Contact
            </Link>
          </div>

          {/* CONTACT */}
          <div className="flex flex-col gap-3 text-sm">
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-400 mb-2">
              Contact
            </span>

            <p className="text-neutral-500">Panama City, Panama</p>
            <p className="text-neutral-500">+507 000 0000</p>
            <p className="text-neutral-500">info@swisspanama.com</p>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="mt-14 pt-6 border-t border-neutral-200 flex flex-col md:flex-row justify-between gap-4 text-xs text-neutral-400">

          <p>© {new Date().getFullYear()} Swiss Panama Realty</p>

          <p className="tracking-[0.2em] uppercase">
            Luxury Real Estate Experience
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;