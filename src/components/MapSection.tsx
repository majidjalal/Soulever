import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const MapSection = () => {
  return (
    <section id="map" className="section-padding">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-gold text-sm font-semibold tracking-[0.15em] uppercase mb-4">Location</p>
          <h2 className="heading-section mb-4">Prime Waterfront Addresses</h2>
          <p className="text-body max-w-xl mx-auto">
            Our developments are strategically positioned in the most coveted waterfront districts, offering unmatched connectivity and lifestyle.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="rounded-2xl overflow-hidden border border-border shadow-sm"
        >
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-secondary flex items-center justify-center">
            <iframe
              title="Development Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115459.92834584776!2d55.12795565!3d25.0762677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1700000000000"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Fallback if map doesn't load */}
            <div className="flex flex-col items-center gap-3 text-muted-foreground">
              <MapPin size={32} className="text-gold" />
              <span className="text-sm">Map Loading...</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MapSection;
