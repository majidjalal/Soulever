import { motion } from "framer-motion";
import { Building2, MapPin, TrendingUp, Crown } from "lucide-react";

const stats = [
  { icon: MapPin, title: "Distinctive Waterfront Locations", description: "Prime beachfront and marina-side positions with easy access to key urban hubs" },
  { icon: Building2, title: "Design-Led Luxury", description: "Contemporary architecture and high-end finishes curated for timeless appeal" },
  { icon: TrendingUp, title: "Smart Investment Potential", description: "Strong demand drivers, flexible payment options, and long-term value creation" },
  { icon: Crown, title: "Lifestyle-First Living", description: "Resort-style amenities, panoramic views, and thoughtfully activated community spaces" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.p variants={fadeInUp} custom={0} className="text-gold text-sm font-semibold tracking-[0.15em] uppercase mb-4">
              About SOULEVER
            </motion.p>
            <motion.p variants={fadeInUp} custom={1} className="text-body mb-4">
              SOULever by Beyond is a visionary waterfront residential brand from OMNIYAT's BEYOND portfolio, defining a new standard of modern luxury living in Dubai's most coveted coastal and marina districts. Rooted in bold design, impeccable quality, and thoughtful spatial planning, Soulever residences offer a lifestyle experience that balances serenity, sophistication, and cosmopolitan energy.
            </motion.p>
            <motion.p variants={fadeInUp} custom={2} className="text-body mb-8">
              Driven by an ethos of architectural distinction and lifestyle enrichment, every Soulever address is conceived as a place to live beautifully and invest confidently. From meticulously crafted interiors to elevated amenity environments and premium waterfront settings, the brand brings enduring value, aesthetic refinement, and exceptional living experiences to homeowners and investors alike.
            </motion.p>
            <motion.a
              variants={fadeInUp}
              custom={3}
              href="#contact"
              className="btn-primary"
            >
              Download Investment Guide
            </motion.a>
          </motion.div>

          {/* Right: Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeInUp}
                custom={i}
                className="stat-card"
              >
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                  <stat.icon size={20} className="text-gold" />
                </div>
                <h3 className="font-display text-xl font-semibold">{stat.title}</h3>
                <p className="text-body-sm">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
