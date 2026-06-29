// src/components/layout/Navbar.jsx
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const LANGS = [
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
  { code: "de", label: "DE" },
];

function Navbar() {
  const location = useLocation();
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation();

  const links = [
    { to: "/",           label: t("nav.home") },
    { to: "/properties", label: t("nav.properties") },
    { to: "/about",      label: t("nav.about") },
    { to: "/contact",    label: t("nav.contact") },
  ];

  const isActive = (path) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const changeLang = (code) => {
    i18n.changeLanguage(code);
    setOpen(false);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        backdrop-blur-xl border-b border-neutral-200
        ${scrolled ? "bg-white/95 shadow-sm" : "bg-white/80"}`}
      >
        {/* ── MOBILE BAR ── */}
        <div className="flex md:hidden items-center justify-between px-5 py-3">
          <Link to="/" aria-label="Swiss Panama Realty">
            <img src="/logo.svg" alt="Swiss Panama Realty" className="h-9 w-auto" />
          </Link>
          <button
            onClick={() => setOpen(true)}
            className="w-9 h-9 flex flex-col justify-center items-end gap-[5px]"
            aria-label="Open menu"
          >
            <span className="w-6 h-[1px] bg-neutral-900 block" />
            <span className="w-6 h-[1px] bg-neutral-900 block" />
            <span className="w-4 h-[1px] bg-neutral-900 block" />
          </button>
        </div>

        {/* ── DESKTOP BAR ── */}
        <div className="hidden md:grid grid-cols-3 max-w-7xl mx-auto px-8 py-4 items-center">

          {/* LEFT — lang switcher */}
          <div className="flex items-center gap-1">
            {LANGS.map((l) => (
              <button
                key={l.code}
                onClick={() => changeLang(l.code)}
                className={`text-xs uppercase tracking-[0.15em] px-3 py-1.5 rounded-[10px] transition-all duration-200
                  ${i18n.language === l.code
                    ? "bg-neutral-900 text-white"
                    : "text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100"}`}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* CENTER — logo + nav */}
          <div className="flex flex-col items-center text-center">
            <Link to="/" aria-label="Swiss Panama Realty">
              <img src="/logo.svg" alt="Swiss Panama Realty" className="h-10 w-auto" />
            </Link>
            <div className="h-3" />
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

          {/* RIGHT — empty for balance */}
          <div />
        </div>
      </header>

      {/* Backdrop */}
      <div onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 transition-all duration-500
          ${open ? "opacity-100 backdrop-blur-md bg-black/40" : "opacity-0 pointer-events-none"}`}
      />

      {/* Mobile panel */}
      <aside className={`fixed top-0 right-0 h-full w-[85%] max-w-sm z-50
        bg-white/98 backdrop-blur-2xl border-l border-neutral-200 shadow-2xl
        flex flex-col justify-between px-10 py-12
        transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close */}
        <button onClick={() => setOpen(false)}
          className="absolute top-6 right-6 text-xs uppercase tracking-[0.25em] text-neutral-400 hover:text-neutral-900 transition">
          ✕
        </button>

        {/* Logo en panel mobile */}
        <div className="mb-2">
          <img src="/logo.svg" alt="Swiss Panama Realty" className="h-10 w-auto" />
        </div>

        {/* Nav links */}
        <nav className="flex flex-col gap-8 mt-6">
          {links.map((link, i) => (
            <Link key={link.to} to={link.to} onClick={() => setOpen(false)}
              className={`text-2xl uppercase tracking-[0.2em]
                transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                ${open ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}
                ${isActive(link.to) ? "text-black" : "text-neutral-400 hover:text-black"}`}
              style={{ transitionDelay: open ? `${i * 70}ms` : "0ms" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Language switcher */}
        <div className={`transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: open ? "320ms" : "0ms" }}
        >
          <p className="text-[10px] uppercase tracking-[0.35em] text-neutral-400 mb-4">
            Language
          </p>
          <div className="flex gap-2">
            {LANGS.map((l) => (
              <button
                key={l.code}
                onClick={() => changeLang(l.code)}
                className={`text-xs uppercase tracking-[0.15em] px-4 py-2 rounded-full border transition-all
                  ${i18n.language === l.code
                    ? "bg-neutral-900 text-white border-neutral-900"
                    : "text-neutral-400 border-neutral-200 hover:text-neutral-900 hover:border-neutral-400"}`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}

export default Navbar;
