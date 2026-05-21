import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

export default function TechnicalExpertise({ deals }) {
  return (
    <section id="technical" className="section">
      <div className="section-header">
        <h2>Technical Expertise / ACV Multiplier</h2>
        <p className="section-subtitle">Consistently impacting deals with multi-cloud, multi-product expertise</p>
      </div>

      <div className="tech-deals-grid">
        {deals.map((deal, i) => (
          <motion.div
            key={i}
            className="tech-deal-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <div className="tech-deal-header">
              <h3>{deal.customer}</h3>
              <div className="tech-deal-acv">
                <TrendingUp size={16} />
                <span>{deal.acv} ACV</span>
              </div>
            </div>
            <div className="tech-deal-meta">
              <span className="tech-deal-products">{deal.products}</span>
              <span className="tech-deal-period">{deal.period}</span>
            </div>
            <p>{deal.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
