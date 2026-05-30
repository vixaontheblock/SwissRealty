import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const location = useLocation();
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { to: "/",           label: "Home" },
    { to: "/properties", label: "Properties" },
    { to: "/about",      label: "About" },
    { to: "/contact",    label: "Contact" },
  ];

  const isActive = (path) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled ? "bg-white/95 shadow-sm" : "bg-white/80"}
        backdrop-blur-xl border-b border-neutral-200`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-4 flex items-center justify-between">

          {/* Spacer left */}
          <div className="w-10 md:w-40" />

          {/* CENTER — brand + nav (desktop) */}
          <div className="hidden md:flex flex-col items-center text-center">
            <Link to="/" className="tracking-[0.35em] uppercase text-sm font-light text-neutral-900">
              Swiss Panama Realty
            </Link>
            <div className="h-5" />
            <nav className="flex items-center gap-10">
              {links.map((link) => (
                <Link key={link.to} to={link.to}
                  className={`text-xs uppercase tracking-[0.3em] transition-all duration-300
                    ${isActive(link.to) ? "text-neutral-900" : "text-neutral-400 hover:text-neutral-900"}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Mobile brand */}
          <Link to="/" className="md:hidden tracking-[0.3em] uppercase text-sm font-light">
            Swiss Panama Realty
          </Link>

          {/* Hamburger */}
          <button onClick={() => setOpen(true)}
            className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-[5px]"
            aria-label="Open menu"
          >
            <span className="w-6 h-[1px] bg-neutral-900" />
            <span className="w-6 h-[1px] bg-neutral-900" />
            <span className="w-6 h-[1px] bg-neutral-900" />
          </button>

          {/* Right spacer */}
          <div className="w-10 md:w-40" />
        </div>
      </header>

      {/* Backdrop */}
      <div onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 transition-all duration-500
          ${open ? "opacity-100 backdrop-blur-md bg-black/40" : "opacity-0 pointer-events-none"}`}
      />

      {/* Mobile panel */}
      <aside className={`fixed top-0 right-0 h-full w-[85%] max-w-sm z-50
        bg-white/95 backdrop-blur-2xl border-l border-neutral-200 shadow-2xl
        flex flex-col justify-center gap-8 px-10
        transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <button onClick={() => setOpen(false)}
          className="absolute top-6 right-6 text-xs uppercase tracking-[0.25em] text-neutral-400">
          Close
        </button>
        <nav className="flex flex-col gap-8">
          {links.map((link, i) => (
            <Link key={link.to} to={link.to} onClick={() => setOpen(false)}
              className={`text-2xl uppercase tracking-[0.2em]
                transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                ${open ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}
                ${isActive(link.to) ? "text-black" : "text-neutral-400"}`}
              style={{ transitionDelay: open ? `${i * 70}ms` : "0ms" }}
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
