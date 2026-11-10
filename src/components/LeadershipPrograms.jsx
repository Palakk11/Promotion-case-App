import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Zap, ExternalLink, ChevronDown } from "lucide-react";
import CompetencyTags from "./CompetencyTags";
import useCardToggle from "./useCardToggle";

function ProgramCard({ prog, i }) {
  const { expanded, printing, onCardClick } = useCardToggle();

  return (
    <motion.div
      className={`program-card card-toggle ${expanded ? "expanded" : ""}`}
      onClick={onCardClick}
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
        <div className="deal-header-right">
          <span className="program-skill-badge">{prog.coreSkill}</span>
          <ChevronDown size={20} className={`expand-icon ${expanded ? "rotated" : ""}`} />
        </div>
      </div>

      <CompetencyTags items={prog.competencies} />

      <div className="program-impacts">
        <h4><Zap size={16} /> Impact</h4>
        {prog.impacts.map((imp, j) => (
          <div key={j} className="impact-item">
            <CheckCircle2 size={16} />
            <span>{imp}</span>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            className="deal-expandable"
            initial={printing ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="program-details">
              {prog.details.map((d, j) => (
                <li key={j}>{d}</li>
              ))}
            </ul>

            <div className="program-outcome">
              <strong>Outcome:</strong> {prog.outcome}
            </div>

            {prog.image && (
              <div className="program-image">
                <img src={prog.image} alt={prog.title} />
                {prog.imageCaption && <span className="program-image-caption">{prog.imageCaption}</span>}
              </div>
            )}

            {prog.images && (
              <div className="program-images">
                {prog.images.map((img, j) => (
                  <div key={j} className="program-image">
                    <img src={img.src} alt={img.caption || prog.title} />
                    {img.caption && <span className="program-image-caption">{img.caption}</span>}
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="deal-peek-row">
        <span className="deal-peek">
          {expanded ? "Click anywhere on the card to collapse" : "Click anywhere on the card to expand full details"}
        </span>
        {prog.link && (
          <a href={prog.link.url} target="_blank" rel="noopener noreferrer" className="program-link">
            <ExternalLink size={14} />
            {prog.link.label}
          </a>
        )}
      </div>
    </motion.div>
  );
}

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
          <ProgramCard key={prog.title} prog={prog} i={i} />
        ))}
      </div>
    </section>
  );
}
