import { motion } from "framer-motion";
import { CheckCircle2, Zap } from "lucide-react";

export default function LeadershipPrograms({ leadershipData }) {
  return (
    <section id="leadership" className="section">
      <div className="section-header">
        <h2>Leadership & Programs</h2>
        <div className="core-value-badge">Core Value: {leadershipData.coreValue}</div>
        <p className="section-subtitle">{leadershipData.summary}</p>
      </div>

      <div className="programs-list">
        {leadershipData.programs.map((prog, i) => (
          <motion.div
            key={i}
            className="program-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
          >
            <div className="program-header">
              <div>
                <h3>{prog.title}</h3>
                <span className="program-period">{prog.period}</span>
              </div>
              <span className="program-skill-badge">{prog.coreSkill}</span>
            </div>

            <div className="program-impacts">
              <h4><Zap size={16} /> Impact</h4>
              {prog.impacts.map((imp, j) => (
                <div key={j} className="impact-item">
                  <CheckCircle2 size={16} />
                  <span>{imp}</span>
                </div>
              ))}
            </div>

            <ul className="program-details">
              {prog.details.map((d, j) => (
                <li key={j}>{d}</li>
              ))}
            </ul>

            <div className="program-outcome">
              <strong>Outcome:</strong> {prog.outcome}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
