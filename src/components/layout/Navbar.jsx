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
      {/* TOP BAR */}
      <header className="fixed top-0 left-0 w-full z-50">
        <div className="bg-white/60 backdrop-blur-2xl border-b border-white/20">
          <div className="max-w-7xl mx-auto px-6 md:px-8 py-5 flex items-center justify-between">

            {/* BRAND */}
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

            {/* HAMBURGER (iOS STYLE MORPH) */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-[5px]"
            >
              <span className={`w-6 h-[1px] bg-black transition ${open ? "rotate-45 translate-y-[6px]" : ""}`} />
              <span className={`w-6 h-[1px] bg-black transition ${open ? "opacity-0" : ""}`} />
              <span className={`w-6 h-[1px] bg-black transition ${open ? "-rotate-45 -translate-y-[6px]" : ""}`} />
            </button>

          </div>
        </div>
      </header>

      {/* BACKDROP (iOS BLUR LAYER) */}
      <div
        onClick={() => setOpen(false)}
        className={`
          fixed inset-0 z-40
          transition-all duration-500 ease-out

          ${
            open
              ? "opacity-100 backdrop-blur-md bg-black/30"
              : "opacity-0 pointer-events-none backdrop-blur-0 bg-black/0"
          }
        `}
      />

      {/* iOS GLASS PANEL */}
      <aside
        className={`
          fixed top-0 right-0 h-full w-[85%] max-w-sm z-50

          flex flex-col justify-center gap-8 px-10

          border-l border-white/20
          shadow-2xl

          transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]

          ${
            open
              ? "translate-x-0 bg-white/70 backdrop-blur-3xl"
              : "translate-x-full bg-white/0 backdrop-blur-0"
          }
        `}
      >

        {/* CLOSE BUTTON */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-6 right-6 text-xs uppercase tracking-[0.25em] text-neutral-400 hover:text-black transition"
        >
          Close
        </button>

        {/* LINKS (STAGGER ANIMATION) */}
        <nav className="flex flex-col gap-7">
          {links.map((link, i) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`
                text-xl uppercase tracking-[0.25em]
                transition-all duration-500 ease-out

                ${open ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}

                hover:text-black
                ${isActive(link.to) ? "text-black" : "text-neutral-400"}
              `}
              style={{
                transitionDelay: open ? `${i * 70}ms` : "0ms",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

      </aside>
    </>
  );
}

export default Navbar;