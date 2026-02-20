import { motion } from "framer-motion";
import { Building2, MapPin, TrendingUp, Crown } from "lucide-react";

const stats = [
  { icon: Building2, title: "8M+ Sq Ft", description: "Total development area across premium locations" },
  { icon: MapPin, title: "Prime Waterfront", description: "Exclusive beachfront and marina-side locations" },
  { icon: TrendingUp, title: "Investor Friendly", description: "Flexible payment plans and high ROI potential" },
  { icon: Crown, title: "Luxury Living", description: "World-class amenities and bespoke finishes" },
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
            <motion.h2 variants={fadeInUp} custom={1} className="heading-section mb-6">
              Building Legacies, Crafting Lifestyles
            </motion.h2>
            <motion.p variants={fadeInUp} custom={2} className="text-body mb-4">
              SOULEVER by Beyond is a premier collection of design-led residences by OMNIYAT's BEYOND. With a portfolio spanning over 8 million square feet, we bring visionary architecture to life across the most sought-after waterfront addresses.
            </motion.p>
            <motion.p variants={fadeInUp} custom={3} className="text-body mb-8">
              Our commitment to excellence goes beyond design. Every SOULEVER residence is an investment in a lifestyle — where world-class amenities, breathtaking views, and meticulous craftsmanship converge.
            </motion.p>
            <motion.a
              variants={fadeInUp}
              custom={4}
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
