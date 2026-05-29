import { motion } from "framer-motion";
import { CheckCircle2, Zap, ExternalLink } from "lucide-react";

export default function Collaborative({ collabData }) {
  return (
    <section id="collaborative" className="section">
      <div className="section-header">
        <h2>Action Oriented</h2>
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

            {item.link && (
              <a href={item.link.url} target="_blank" rel="noopener noreferrer" className="program-link">
                <ExternalLink size={14} />
                {item.link.label}
              </a>
            )}

            {item.image && (
              <div className="program-image">
                <img src={item.image} alt={item.title} />
                {item.imageCaption && <span className="program-image-caption">{item.imageCaption}</span>}
              </div>
            )}

            {item.images && (
              <div className="program-images">
                {item.images.map((img, j) => (
                  <div key={j} className="program-image">
                    <img src={img.src} alt={img.caption || item.title} />
                    {img.caption && <span className="program-image-caption">{img.caption}</span>}
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
