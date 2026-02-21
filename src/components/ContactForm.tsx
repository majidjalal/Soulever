import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyP_rv3l6ehKx_jB7TGzZJxzy0TW9NihK4_GBAfLQzeuCQkKmR9YXs6_caoW7kpM1mzBg/exec";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const firedRef = useRef(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    cityCountry: "",
    consent: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.consent) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const payload = {
        name: form.name,
        email: form.email,
        whatsapp: form.phone,
        cityCountry: form.cityCountry,
        pageUrl: typeof window !== "undefined" ? window.location.href : "",
      };

      try {
        const response = await fetch(GOOGLE_SCRIPT_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!response.ok) throw new Error("Submission failed");
        const result = await response.json();
        if (result.ok === false) throw new Error(result.error || "Submission failed");
      } catch {
        // Fallback: no-cors POST (works when script blocks CORS; we can't verify success)
        await fetch(GOOGLE_SCRIPT_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }

      setSubmitted(true);

      if (!firedRef.current) {
        firedRef.current = true;
        if (typeof window !== "undefined" && (window as any).gtag) {
          (window as any).gtag("event", "generate_lead", {
            event_category: "form",
            event_label: form.cityCountry || "general",
          });
        }
        if (typeof window !== "undefined" && (window as any).fbq) {
          (window as any).fbq("track", "Lead");
        }
      }
    } catch (err) {
      setSubmitError("Something went wrong. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section id="contact" className="section-padding bg-secondary">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-lg mx-auto text-center py-16"
          >
            <CheckCircle size={48} className="text-gold mx-auto mb-6" />
            <h2 className="heading-section mb-4">Thank You!</h2>
            <p className="text-body">
              Your interest has been registered. Our team will reach out to you within 24 hours with exclusive details.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section-padding bg-secondary">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-gold text-sm font-semibold tracking-[0.15em] uppercase mb-4">Get In Touch</p>
          <h2 className="heading-section mb-4">Get Early Access</h2>
          <p className="text-body max-w-xl mx-auto">
            Register your interest today and receive exclusive pricing, floor plans, and investment insights.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-card rounded-2xl border border-border p-6 md:p-10 shadow-sm"
        >
          <div className="grid md:grid-cols-2 gap-5 mb-5">
            <div>
              <label htmlFor="name" className="block text-base font-medium mb-2">Name *</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                maxLength={100}
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-lg border border-input bg-background px-5 py-4 text-base outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-base font-medium mb-2">Email *</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                maxLength={255}
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-input bg-background px-5 py-4 text-base outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mb-6">
            <div>
              <label htmlFor="phone" className="block text-base font-medium mb-2">WhatsApp Number *</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                maxLength={20}
                value={form.phone}
                onChange={handleChange}
                className="w-full rounded-lg border border-input bg-background px-5 py-4 text-base outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition"
                placeholder="+971 50 000 0000"
              />
            </div>
            <div>
              <label htmlFor="cityCountry" className="block text-base font-medium mb-2">City/Country</label>
              <input
                id="cityCountry"
                name="cityCountry"
                type="text"
                maxLength={100}
                value={form.cityCountry}
                onChange={handleChange}
                className="w-full rounded-lg border border-input bg-background px-5 py-4 text-base outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition"
                placeholder="e.g. Dubai, UAE"
              />
            </div>
          </div>

          <label className="flex items-start gap-3 mb-6 cursor-pointer">
            <input
              type="checkbox"
              checked={form.consent}
              onChange={(e) => setForm((p) => ({ ...p, consent: e.target.checked }))}
              className="mt-0.5 w-4 h-4 rounded border-input text-gold accent-gold"
            />
            <span className="text-xs text-muted-foreground leading-relaxed">
              I consent to SOULEVER by Beyond collecting my data to respond to my inquiry. View our{" "}
              <Link to="/privacy-policy" className="text-gold underline hover:no-underline">Privacy Policy</Link>.
            </span>
          </label>

          {submitError && (
            <p className="text-sm text-destructive mb-4">{submitError}</p>
          )}

          <button
            type="submit"
            disabled={!form.consent || isSubmitting}
            className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : "Register Interest"}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
