function FloatingContact() {
  const phone = "50760000000";

  return (
    <a
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noreferrer"
      className="
        fixed bottom-6 right-6 z-50
        bg-white/95 backdrop-blur-xl
        border border-neutral-200
        rounded-[28px]
        shadow-xl
        p-5 w-[280px]
        hover:scale-[1.02] transition
      "
    >
      <p className="text-xs uppercase tracking-[3px] text-neutral-400">
        Private Advisor
      </p>

      <h3 className="text-lg font-light mt-2">
        WhatsApp Consultation
      </h3>

      <p className="text-sm text-neutral-500 mt-2">
        Get details or schedule a visit.
      </p>

      <div className="mt-4 text-sm uppercase tracking-[2px]">
        Contact →
      </div>
    </a>
  );
}

export default FloatingContact;