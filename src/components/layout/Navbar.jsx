import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const links = [
    { to: "/", label: "Home" },
    { to: "/properties", label: "Properties" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50">
        <div className="bg-white/70 backdrop-blur-xl border-b border-neutral-200">
          <div className="max-w-7xl mx-auto px-6 md:px-8 py-5 flex items-center justify-between">

            {/* BRAND */}
            <Link
              to="/"
              className="tracking-[0.35em] uppercase text-sm font-light"
            >
              Swiss Panama Realty
            </Link>

            {/* DESKTOP NAV */}
            <div className="hidden md:flex items-center gap-10">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-xs uppercase tracking-[0.25em] transition ${
                    isActive(link.to)
                      ? "text-black"
                      : "text-neutral-400 hover:text-black"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* RIGHT */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden flex flex-col gap-[5px]"
            >
              <span className="w-6 h-[1px] bg-black"></span>
              <span className="w-6 h-[1px] bg-black"></span>
              <span className="w-6 h-[1px] bg-black"></span>
            </button>

          </div>
        </div>
      </header>

      {/* MOBILE */}
      {open && (
        <div className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-50 p-10 flex flex-col gap-8 shadow-2xl">

          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`text-sm uppercase tracking-[0.2em] ${
                isActive(link.to)
                  ? "text-black"
                  : "text-neutral-400"
              }`}
            >
              {link.label}
            </Link>
          ))}

        </div>
      )}
    </>
  );
}

export default Navbar;