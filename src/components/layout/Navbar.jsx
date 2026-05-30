import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50">
        <div className="bg-white/60 backdrop-blur-xl border-b border-neutral-200">
          <div className="max-w-7xl mx-auto px-6 md:px-8 py-5 flex items-center justify-between">

            <Link
              to="/"
              className="tracking-[0.35em] uppercase text-sm font-light"
            >
              Swiss Panama Realty
            </Link>

            {/* DESKTOP */}
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

            {/* HAMBURGER */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden flex flex-col gap-[5px]"
            >
              <span className="w-6 h-[1px] bg-black"></span>
              <span className="w-6 h-[1px] bg-black"></span>
              <span className="w-6 h-[1px] bg-black"></span>
            </button>

          </div>
        </div>
      </header>

      {/* BACKDROP (GLASS + ANIMATION REAL) */}
      <div
        onClick={() => setOpen(false)}
        className={`
          fixed inset-0 z-40
          transition-all duration-500 ease-out

          ${
            open
              ? "opacity-100 backdrop-blur-sm bg-black/30"
              : "opacity-0 pointer-events-none backdrop-blur-0 bg-black/0"
          }
        `}
      />

      {/* GLASS MENU */}
      <div
        className={`
          fixed top-0 right-0 h-full w-[82%] max-w-sm z-50

          flex flex-col gap-8 p-10

          border-l border-white/20
          shadow-2xl

          transition-all duration-500 ease-out

          ${
            open
              ? "translate-x-0 bg-white/70 backdrop-blur-2xl"
              : "translate-x-full bg-white/0 backdrop-blur-0"
          }
        `}
      >

        {/* CLOSE */}
        <button
          onClick={() => setOpen(false)}
          className="self-end text-xs uppercase tracking-[0.25em] text-neutral-500 hover:text-black transition"
        >
          Close
        </button>

        {/* LINKS */}
        <div className="flex flex-col gap-6 mt-6">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`text-sm uppercase tracking-[0.2em] transition ${
                isActive(link.to)
                  ? "text-black"
                  : "text-neutral-400 hover:text-black"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

      </div>
    </>
  );
}

export default Navbar;