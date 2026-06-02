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
            className={`mentorship-card${!item.title ? ' mentorship-card--image-only' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            {item.title && <Heart size={20} className="mentorship-icon" />}
            {item.title && <h3>{item.title}</h3>}
            {item.description && <p>{item.description}</p>}
            {item.image && (
              <div className="mentorship-image">
                <img src={item.image.src} alt={item.title || "Recognition"} />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
