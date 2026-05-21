import { motion } from "framer-motion";

export default function Certifications({ certifications }) {
  return (
    <section id="certifications" className="section">
      <div className="section-header">
        <h2>Blackbelts & Certifications in Action</h2>
        <p className="section-subtitle">Not just earned — validated in the field with real customer impact</p>
      </div>

      <div className="cert-grid">
        {certifications.map((cert, i) => (
          <motion.div
            key={i}
            className="cert-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <div className="cert-badge-circle">{cert.badge}</div>
            <div className="cert-content">
              <h3>{cert.title}</h3>
              <p>{cert.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
