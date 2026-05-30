import { useState } from "react";
import siteConfig from "../../data/siteConfig";

function PropertyContactForm({ property }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handle = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      `Hello, I'm interested in ${property.title} (${property.subtitle}). My name is ${form.name || "[name]"}.`
    );
    window.open(`https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, "")}?text=${msg}`, "_blank");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry: ${property.title}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`
    );
    window.open(`mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`, "_blank");
    setSent(true);
  };

  return (
    <section id="property-contact" className="py-20 md:py-28 px-5 md:px-8 bg-neutral-950 text-white">
      <div className="max-w-3xl mx-auto">
        <h3 className="text-3xl md:text-5xl font-light mb-4 tracking-tight">
          Request Information
        </h3>
        <p className="text-white/60 mb-10 leading-7">
          Schedule a private viewing or receive more details about this property in Coronado.
          Our team responds within 24 hours.
        </p>

        {sent ? (
          <div className="text-center py-12 flex flex-col items-center gap-5">
            <div className="text-4xl">✓</div>
            <p className="text-white/70 leading-7">
              Your email client opened with the message ready.<br />
              You can also reach us directly on WhatsApp.
            </p>
            <button onClick={handleWhatsApp} className="btn btn-primary bg-white text-black hover:bg-transparent hover:text-white border border-white mt-2">
              Open WhatsApp
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input name="name"  value={form.name}  onChange={handle} placeholder="Full Name"  required
                className="w-full px-5 py-4 rounded-2xl bg-white text-black border border-transparent focus:outline-none focus:border-neutral-400 transition" />
              <input name="email" value={form.email} onChange={handle} placeholder="Email" type="email" required
                className="w-full px-5 py-4 rounded-2xl bg-white text-black border border-transparent focus:outline-none focus:border-neutral-400 transition" />
            </div>
            <input name="phone" value={form.phone} onChange={handle} placeholder="Phone / WhatsApp (optional)"
              className="w-full px-5 py-4 rounded-2xl bg-white text-black border border-transparent focus:outline-none focus:border-neutral-400 transition" />
            <textarea name="message" value={form.message} onChange={handle} rows={4}
              placeholder={`I'm interested in ${property.title}. I would like to know more about...`}
              className="w-full px-5 py-4 rounded-2xl bg-white text-black border border-transparent focus:outline-none focus:border-neutral-400 transition resize-none" />

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button type="submit" className="btn btn-primary bg-white text-black border border-white hover:bg-transparent hover:text-white flex-1">
                Send Request
              </button>
              <button type="button" onClick={handleWhatsApp}
                className="btn btn-secondary border-white/30 text-white hover:bg-white hover:text-black flex-1">
                💬 WhatsApp
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

export default PropertyContactForm;
