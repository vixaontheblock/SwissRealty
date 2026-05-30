function Footer() {
  return (
    <footer className="bg-neutral-950 py-20">
      <div className="max-w-7xl mx-auto px-8 text-center text-white">

        {/* BRAND */}
        <h2 className="text-3xl font-light text-white tracking-tight">
          Swiss Panama Realty
        </h2>

        {/* SUBTITLE */}
        <p className="mt-4 max-w-xl mx-auto leading-7 text-white/70">
          Premium properties in Panama for European buyers seeking luxury living and investment opportunities.
        </p>

        {/* DIVIDER */}
        <div className="w-16 h-px bg-white/20 mx-auto my-10" />

        {/* COPYRIGHT */}
        <p className="text-sm tracking-wide text-white/50">
          © 2026 Swiss Panama Realty. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;