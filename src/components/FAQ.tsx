import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqItems } from "@/data/content";

const FAQItem = ({ question, answer, isOpen, toggle }: { question: string; answer: string; isOpen: boolean; toggle: () => void }) => (
  <div className="border-b border-border last:border-b-0">
    <button
      onClick={toggle}
      className="w-full flex items-center justify-between py-5 text-left group"
      aria-expanded={isOpen}
    >
      <span className="font-medium text-sm md:text-base pr-4 group-hover:text-gold transition-colors">{question}</span>
      <ChevronDown
        size={18}
        className={`text-muted-foreground flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-gold" : ""}`}
      />
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p className="text-body-sm pb-5">{answer}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-gold text-sm font-semibold tracking-[0.15em] uppercase mb-4">FAQ</p>
          <h2 className="heading-section">Frequently Asked Questions</h2>
        </motion.div>

        <div className="max-w-2xl mx-auto bg-card rounded-2xl border border-border p-6 md:p-8 shadow-sm">
          {faqItems.map((item, i) => (
            <FAQItem
              key={i}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === i}
              toggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a href="#contact" className="btn-primary">
            Book a Free Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
