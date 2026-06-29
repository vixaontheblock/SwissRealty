import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import siteConfig from "../../data/siteConfig";

function Footer() {
  const contact = siteConfig.contact;
  const t = useTranslation().t;

  return (
    <footer className="border-t border-neutral-200 bg-white/60 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12">
          <div>
            <Link to="/">
              <img src="/logo.svg" alt="Swiss Panama Realty" className="h-10 w-auto mb-4" />
            </Link>
            <p className="text-sm text-neutral-500 mt-2 leading-6 max-w-sm">{siteConfig.description}</p>
          </div>
          <div className="flex flex-col gap-3 text-sm">
            <span className="text-xs uppercase tracking-widest text-neutral-400 mb-1">Navigation</span>
            <Link to="/" className="text-neutral-500 hover:text-black transition">{t("nav.home")}</Link>
            <Link to="/properties" className="text-neutral-500 hover:text-black transition">{t("nav.properties")}</Link>
            <Link to="/about" className="text-neutral-500 hover:text-black transition">{t("nav.about")}</Link>
            <Link to="/contact" className="text-neutral-500 hover:text-black transition">{t("nav.contact")}</Link>
          </div>
          <div className="flex flex-col gap-3 text-sm">
            <span className="text-xs uppercase tracking-widest text-neutral-400 mb-1">Contact</span>
            <p className="text-neutral-500">{contact.location}</p>
            <a href={"tel:" + contact.phone} className="text-neutral-500 hover:text-black transition">{contact.phone}</a>
            <a href={"mailto:" + contact.email} className="text-neutral-500 hover:text-black transition">{contact.email}</a>
            <a href={"https://wa.me/" + contact.whatsapp.replace(/\D/g, "")} target="_blank" rel="noreferrer" className="inline-block mt-2 text-xs uppercase tracking-widest border border-neutral-200 px-4 py-2.5 rounded-full hover:bg-black hover:text-white hover:border-black transition">WhatsApp</a>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-neutral-200 flex flex-col sm:flex-row justify-between gap-4 text-xs text-neutral-400">
          <p>{"© " + new Date().getFullYear() + " " + siteConfig.name}</p>
          <p className="uppercase tracking-widest">Luxury Real Estate · Panama</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
