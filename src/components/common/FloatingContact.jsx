import { useState } from "react";

function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">

      {/* MAIN BUTTON (SMALL + DISCREET) */}
      <button
        onClick={() => setOpen(!open)}
        className="
          w-11 h-11
          rounded-full
          bg-black/80 text-white
          backdrop-blur-md

          flex items-center justify-center
          text-sm

          hover:bg-black
          hover:scale-105
          transition
        "
      >
        ✉
      </button>

      {/* OPTIONS (MINIMAL POPUP) */}
      {open && (
        <div className="
          absolute bottom-14 right-0
          flex flex-col gap-2
          items-end
        ">

          <a
            href="mailto:info@swisspanamarealty.com"
            className="
              px-3 py-2
              rounded-full
              bg-white/90 backdrop-blur-md
              border border-neutral-200

              text-xs uppercase tracking-[0.2em]
              text-neutral-700

              hover:bg-black hover:text-white
              transition
            "
          >
            Email
          </a>

          <a
            href="https://wa.me/50760000000"
            target="_blank"
            rel="noreferrer"
            className="
              px-3 py-2
              rounded-full
              bg-white/90 backdrop-blur-md
              border border-neutral-200

              text-xs uppercase tracking-[0.2em]
              text-neutral-700

              hover:bg-black hover:text-white
              transition
            "
          >
            WhatsApp
          </a>

        </div>
      )}

    </div>
  );
}

export default FloatingContact;