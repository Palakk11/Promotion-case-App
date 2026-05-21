import { motion } from "framer-motion";
import { CheckCircle2, Zap } from "lucide-react";

export default function Collaborative({ collabData }) {
  return (
    <section id="collaborative" className="section">
      <div className="section-header">
        <h2>Collaborative Impact</h2>
        <div className="core-value-badge">Core Value: {collabData.coreValue}</div>
        <p className="section-subtitle">{collabData.summary}</p>
      </div>

      <div className="collab-list">
        {collabData.items.map((item, i) => (
          <motion.div
            key={i}
            className="collab-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
          >
            <div className="collab-header">
              <h3>{item.title}</h3>
              <span className="collab-subtitle">{item.subtitle}</span>
            </div>

            <div className="collab-impacts">
              <h4><Zap size={16} /> Impact</h4>
              {item.impacts.map((imp, j) => (
                <div key={j} className="impact-item">
                  <CheckCircle2 size={16} />
                  <span>{imp}</span>
                </div>
              ))}
            </div>

            <ul className="collab-details">
              {item.details.map((d, j) => (
                <li key={j}>{d}</li>
              ))}
            </ul>

            {item.whyItMattered && (
              <div className="why-it-mattered">
                <strong>Why it mattered:</strong> {item.whyItMattered}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
