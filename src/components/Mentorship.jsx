import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Mentorship({ items }) {
  return (
    <section id="mentorship" className="section">
      <div className="section-header">
        <h2>Mentorship & Community</h2>
        <p className="section-subtitle">Actively accelerating others — visible not in titles, but in outcomes</p>
      </div>

      <div className="mentorship-grid">
        {items.map((item, i) => (
          <motion.div
            key={i}
            className="mentorship-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <Heart size={20} className="mentorship-icon" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
