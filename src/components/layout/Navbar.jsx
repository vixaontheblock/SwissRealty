import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

function Navbar() {
  const location = useLocation();
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { path: "/", label: t("nav.home") },
    { path: "/properties", label: t("nav.properties") },
    { path: "/about", label: t("nav.about") },
    { path: "/contact", label: t("nav.contact") },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 md:py-5 flex items-center justify-between">

        {/* BRAND */}
        <Link
          to="/"
          className="text-lg md:text-xl tracking-[0.2em] font-light uppercase"
        >
          Swiss Panama Realty
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[3px]">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative transition ${
                isActive(item.path)
                  ? "text-neutral-900"
                  : "text-neutral-500"
              }`}
            >
              {item.label}

              <span
                className={`absolute left-0 -bottom-2 h-[1px] bg-black transition-all ${
                  isActive(item.path) ? "w-full" : "w-0"
                }`}
              />
            </Link>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">

          {/* LANGUAGE (desktop + mobile) */}
          <LanguageSwitcher />

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden flex flex-col gap-1"
            onClick={() => setOpen(!open)}
          >
            <span className="w-5 h-[1px] bg-black"></span>
            <span className="w-5 h-[1px] bg-black"></span>
            <span className="w-5 h-[1px] bg-black"></span>
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t border-neutral-200 px-6 py-6 space-y-6">

          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={`block text-sm uppercase tracking-[2px] ${
                isActive(item.path)
                  ? "text-black"
                  : "text-neutral-500"
              }`}
            >
              {item.label}
            </Link>
          ))}

        </div>
      )}
    </nav>
  );
}

export default Navbar;