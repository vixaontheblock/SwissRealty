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
      {/* TOP BAR */}
      <header className="fixed top-0 left-0 w-full z-50">
        <div className="backdrop-blur-xl bg-white/70 border-b border-neutral-200">

          <div className="max-w-7xl mx-auto px-6 md:px-8 py-5 flex items-center justify-between">

            {/* BRAND */}
            <Link
              to="/"
              className="text-sm md:text-base tracking-[0.35em] uppercase font-light"
            >
              Swiss Panama Realty
            </Link>

            {/* DESKTOP LINKS */}
            <div className="hidden md:flex gap-12 text-xs tracking-[0.25em] uppercase">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative transition ${
                    isActive(link.to)
                      ? "text-black"
                      : "text-neutral-400 hover:text-black"
                  }`}
                >
                  {link.label}

                  <span
                    className={`absolute left-0 -bottom-2 h-[1px] bg-black transition-all ${
                      isActive(link.to) ? "w-full" : "w-0"
                    }`}
                  />
                </Link>
              ))}
            </div>

            {/* MOBILE BUTTON */}
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

      {/* MOBILE PANEL */}
      {open && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col justify-center items-center gap-10">

          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`text-lg tracking-[0.25em] uppercase ${
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