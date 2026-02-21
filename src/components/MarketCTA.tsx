import { motion } from "framer-motion";

const MarketCTA = () => {
  return (
    <section className="relative py-20 md:py-28 bg-dark-surface overflow-hidden">
      {/* Subtle gold gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-3xl" />
      
      <div className="section-container relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="heading-display text-dark-surface-foreground max-w-3xl mx-auto mb-6"
        >
          Secure Your Place at Soulever by Beyond
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-dark-surface-foreground/60 text-base md:text-lg max-w-xl mx-auto mb-10"
        >
          An iconic waterfront opportunity designed for legacy living and strategic investment.
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          href="#contact"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-8 py-4 text-sm font-semibold text-accent-foreground transition-all duration-300 hover:bg-gold-light"
        >
          Register Your Interest
        </motion.a>
      </div>
    </section>
  );
};

export default MarketCTA;
