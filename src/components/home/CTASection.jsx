export default function CTASection() {
  return (
    <section className="py-28 bg-black text-white text-center">
      <div className="max-w-3xl mx-auto px-8">

        <h2 className="text-4xl font-light">
          Ready to Invest in Panama?
        </h2>

        <p className="mt-6 text-white/70 leading-7">
          Contact us for private viewings and investment opportunities.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a href="/contact" className="btn btn-primary">
            Contact Us
          </a>

          <a href="/properties" className="btn btn-secondary">
            View Properties
          </a>
        </div>

      </div>
    </section>
  );
}