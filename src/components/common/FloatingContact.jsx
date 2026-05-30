import { useState } from "react";
import siteConfig from "../../data/siteConfig";

function FloatingContact() {
  const [open, setOpen] = useState(false);
  const { whatsapp, email } = siteConfig.contact;

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* POPUP */}
      <div className={`
        absolute bottom-14 right-0 flex flex-col gap-2 items-end
        transition-all duration-300
        ${open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-2 pointer-events-none"}
      `}>
        <a
          href={`https://wa.me/${whatsapp.replace(/\D/g, "")}`}
          target="_blank" rel="noreferrer"
          className="px-4 py-2.5 rounded-full bg-white/90 backdrop-blur-md border border-neutral-200
            text-xs uppercase tracking-[0.2em] text-neutral-700
            hover:bg-black hover:text-white transition shadow-md whitespace-nowrap"
        >
          💬 WhatsApp
        </a>
        <a
          href={`mailto:${email}`}
          className="px-4 py-2.5 rounded-full bg-white/90 backdrop-blur-md border border-neutral-200
            text-xs uppercase tracking-[0.2em] text-neutral-700
            hover:bg-black hover:text-white transition shadow-md whitespace-nowrap"
        >
          ✉ Email
        </a>
      </div>

      {/* TOGGLE BUTTON */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-12 h-12 rounded-full bg-black/85 text-white backdrop-blur-md
          flex items-center justify-center text-lg shadow-xl
          hover:bg-black hover:scale-105 transition"
        aria-label="Contact"
      >
        {open ? "✕" : "✉"}
      </button>
    </div>
  );
}

export default FloatingContact;
