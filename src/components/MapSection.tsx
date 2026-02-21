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
          <h2 className="heading-section mb-4">An Iconic Waterfront Setting at Dubai Maritime City</h2>
          <p className="text-body max-w-xl mx-auto">
            Soulever by Beyond is strategically positioned within Dubai Maritime City — a prestigious coastal destination offering seamless connectivity to Downtown Dubai, DIFC, Port Rashid, and Jumeirah, while preserving the tranquility of true waterfront living.
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
              title="Soulever by Beyond - Madinat Dubai Al Melaheyah"
              src="https://www.google.com/maps?q=77G6%2BRMR+Madinat+Dubai+Al+Melaheyah+Dubai&output=embed"
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
