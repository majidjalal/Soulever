import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { projects } from "@/data/content";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const firedRef = useRef(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    message: "",
    consent: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.consent) return;

    // Fire "Lead" conversion event only once
    if (!firedRef.current) {
      firedRef.current = true;
      // GA4 placeholder
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "generate_lead", {
          event_category: "form",
          event_label: form.project || "general",
        });
      }
      // Meta Pixel placeholder
      if (typeof window !== "undefined" && (window as any).fbq) {
        (window as any).fbq("track", "Lead");
      }
    }

    setSubmitted(true);
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
            Register your interest today and be the first to receive exclusive pricing, floor plans, and investment insights.
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
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1.5">Name *</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                maxLength={100}
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1.5">Email *</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                maxLength={255}
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1.5">Phone *</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                maxLength={20}
                value={form.phone}
                onChange={handleChange}
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition"
                placeholder="+971 50 000 0000"
              />
            </div>
            <div>
              <label htmlFor="project" className="block text-sm font-medium mb-1.5">Interested Project</label>
              <select
                id="project"
                name="project"
                value={form.project}
                onChange={handleChange}
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition"
              >
                <option value="">Select a project</option>
                {projects.map((p) => (
                  <option key={p.slug} value={p.slug}>{p.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium mb-1.5">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              maxLength={1000}
              value={form.message}
              onChange={handleChange}
              className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition resize-none"
              placeholder="Tell us about your investment goals..."
            />
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
              <a href="#" className="text-gold underline">Privacy Policy</a>.
            </span>
          </label>

          <button
            type="submit"
            disabled={!form.consent}
            className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Register Interest
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
