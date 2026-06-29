// src/pages/Contact.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import siteConfig from "../data/siteConfig";

function Contact() {
  const { contact } = siteConfig;
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handle = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("Inquiry from SwissPanamaRealty.com");
    const body = encodeURIComponent(
      "Name: " + form.name + "\nEmail: " + form.email + "\nPhone: " + form.phone + "\n\n" + form.message
    );
    window.open("mailto:" + contact.email + "?subject=" + subject + "&body=" + body, "_blank");
    setSent(true);
  };

  const handleWhatsApp = () => {
    const msg = encodeURIComponent("Hello, I found your site and I'm interested in learning more about your properties in Panama.");
    window.open("https://wa.me/" + contact.whatsapp.replace(/\D/g, "") + "?text=" + msg, "_blank");
  };

  return (
    <>
      <Navbar />
      <main className="pt-24">

        {/* HERO */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-5xl mx-auto px-8 text-center">
            <p className="uppercase tracking-[0.4em] text-xs text-neutral-400 mb-5">Contact</p>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight leading-[1.1]" style={{ letterSpacing: "-0.02em" }}>
              Let's Talk About<br />Your Next Property
            </h1>
            <p className="mt-8 text-neutral-500 leading-7 max-w-xl mx-auto">
              Whether you're looking to invest or find your dream home in Panama, our team is ready to guide you through every step.
            </p>
          </div>
        </section>

        {/* CONTENT */}
        <section className="py-16 md:py-24 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16">

            {/* INFO */}
            <div>
              <h2 className="text-3xl font-light mb-8">Get in Touch</h2>
              <p className="text-neutral-500 leading-7 mb-10">
                We respond within 24 hours and provide personalized assistance for international buyers and investors.
              </p>
              <div className="space-y-6 mb-10">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-neutral-400 mb-1">Email</p>
                  <a href={"mailto:" + contact.email} className="text-neutral-700 hover:text-black transition">{contact.email}</a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-neutral-400 mb-1">Phone / WhatsApp</p>
                  <a href={"tel:" + contact.whatsapp} className="text-neutral-700 hover:text-black transition">{contact.phone}</a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-neutral-400 mb-1">Location</p>
                  <p className="text-neutral-700">{contact.location}</p>
                </div>
              </div>
              <button onClick={handleWhatsApp}
                className="btn btn-primary">
                💬 Chat on WhatsApp
              </button>
              <div className="mt-10 p-6 bg-white rounded-2xl border border-neutral-200">
                <p className="text-sm text-neutral-500 leading-6">
                  We specialize in luxury properties and investment opportunities across Panama's coastal regions including Coronado, Playa Blanca, and Costa Esmeralda.
                </p>
              </div>
            </div>

            {/* FORM */}
            <div className="bg-white p-8 md:p-10 rounded-[32px] border border-neutral-200">
              <h3 className="text-2xl font-light mb-8">Send a Message</h3>
              {sent ? (
                <div className="text-center py-12 flex flex-col items-center gap-5">
                  <div className="text-4xl">✓</div>
                  <p className="text-neutral-500 leading-7">Your email client opened with the message ready.</p>
                  <button onClick={handleWhatsApp} className="btn btn-primary mt-2">Open WhatsApp</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input name="name" value={form.name} onChange={handle} placeholder="Full Name" required
                    className="w-full px-5 py-4 rounded-xl border border-neutral-200 focus:outline-none focus:border-black transition" />
                  <input name="email" value={form.email} onChange={handle} placeholder="Email Address" type="email" required
                    className="w-full px-5 py-4 rounded-xl border border-neutral-200 focus:outline-none focus:border-black transition" />
                  <input name="phone" value={form.phone} onChange={handle} placeholder="Phone / WhatsApp (optional)"
                    className="w-full px-5 py-4 rounded-xl border border-neutral-200 focus:outline-none focus:border-black transition" />
                  <textarea name="message" value={form.message} onChange={handle} rows={5}
                    placeholder="Tell us what you're looking for..."
                    className="w-full px-5 py-4 rounded-xl border border-neutral-200 focus:outline-none focus:border-black transition resize-none" />
                  <button type="submit" className="btn btn-primary w-full">Send Inquiry</button>
                </form>
              )}
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

export default Contact;
