import { motion } from "framer-motion";

export default function Timeline({ careerJourney }) {
  return (
    <section id="timeline" className="section">
      <div className="section-header">
        <h2>Salesforce Career Journey</h2>
        <p className="section-subtitle">A trajectory of increasing scope, impact, and ownership</p>
      </div>

      <div className="career-timeline">
        {careerJourney.map((step, i) => (
          <motion.div
            key={i}
            className="career-step"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
          >
            <div className="career-dot" />
            <div className="career-content">
              <h3>{step.role}</h3>
              <span className="career-period">{step.period}</span>
              <span className="career-duration">{step.duration}</span>
            </div>
          </motion.div>
        ))}
        <div className="career-line" />
      </div>
    </section>
  );
}
