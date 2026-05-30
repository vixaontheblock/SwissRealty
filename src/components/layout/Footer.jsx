import { Link } from "react-router-dom";
import siteConfig from "../../data/siteConfig";

function Footer() {
  const { contact } = siteConfig;

  return (
    <footer className="border-t border-neutral-200 bg-white/60 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 md:py-16">

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12">

          {/* BRAND */}
          <div>
            <h2 className="text-sm uppercase tracking-[0.3em] font-light">
              {siteConfig.name}
            </h2>
            <p className="text-sm text-neutral-500 mt-4 leading-6 max-w-sm">
              {siteConfig.description}
            </p>
          </div>

          {/* NAV */}
          <div className="flex flex-col gap-3 text-sm">
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-400 mb-1">
              Navigation
            </span>
            {["/","/ properties","/about","/contact"].map((path, i) => {
              const labels = ["Home","Properties","About","Contact"];
              const to = path.trim();
              return (
                <Link key={to} to={to}
                  className="hover:text-black text-neutral-500 transition">
                  {labels[i]}
                </Link>
              );
            })}
          </div>

          {/* CONTACT */}
          <div className="flex flex-col gap-3 text-sm">
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-400 mb-1">
              Contact
            </span>
            <p className="text-neutral-500">{contact.location}</p>
            <a href={`tel:${contact.whatsapp}`} className="text-neutral-500 hover:text-black transition">
              {contact.phone}
            </a>
            <a href={`mailto:${contact.email}`} className="text-neutral-500 hover:text-black transition">
              {contact.email}
            </a>
            <a
              href={`https://wa.me/${contact.whatsapp.replace(/\D/g,"")}`}
              target="_blank" rel="noreferrer"
              className="inline-block mt-2 text-xs uppercase tracking-[0.2em] border border-neutral-200
                px-4 py-2.5 rounded-full hover:bg-black hover:text-white hover:border-black transition"
            >
              💬 WhatsApp Us
            </a>
          </div>

        </div>

        <div className="mt-12 pt-6 border-t border-neutral-200 flex flex-col sm:flex-row justify-between gap-4 text-xs text-neutral-400">
          <p>© {new Date().getFullYear()} {siteConfig.name}</p>
          <p className="tracking-[0.2em] uppercase">Luxury Real Estate Experience</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
