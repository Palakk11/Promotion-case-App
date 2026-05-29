import { motion } from "framer-motion";
import { TrendingUp, Calendar, Building2, Sparkles } from "lucide-react";

export default function Hero({ data }) {
  const { candidate, executiveSummary, roleDescription, roleResponsibilities, firstOfKindWins } = data;

  return (
    <section id="hero" className="hero-section">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="hero-name">{candidate.name}</h1>
        <div className="hero-transition">
          <span className="current-role">{candidate.currentTitle}</span>
          <TrendingUp className="arrow-icon" size={24} />
          <span className="target-role">{candidate.targetTitle}</span>
        </div>

        <div className="hero-meta">
          <div className="meta-item">
            <Building2 size={16} />
            <span>{candidate.team}</span>
          </div>
          <div className="meta-item">
            <Calendar size={16} />
            <span>Tenure: {candidate.tenure}</span>
          </div>
        </div>

        <div className="hero-tagline">
          <em>"{candidate.tagline}"</em>
        </div>

        <div className="executive-summary">
          <h3>Executive Summary</h3>
          <div className="core-values-list">
            {["Customer Focus", "Trust", "Curiosity", "Collaboration"].map((v) => (
              <span key={v} className="core-value-pill">{v}</span>
            ))}
          </div>
          <p>{executiveSummary}</p>
        </div>

        <ul className="values-detail-list">
          <li><strong>Customer Focus</strong> — every engagement moves the needle for the customer's business and ours.</li>
          <li><strong>Trust</strong> — consistency, candor, and empathy in every relationship.</li>
          <li><strong>Curiosity</strong> — the best SE is a perpetual learner; she ramps first, then enables others.</li>
          <li><strong>Collaboration</strong> — multiplying impact beyond her own deals, fostering shared success that outlasts any single quarter.</li>
        </ul>

        <div className="first-of-kind">
          <h4><Sparkles size={16} /> First-of-Their-Kind Wins</h4>
          <div className="firsts-list">
            {firstOfKindWins.map((w, i) => (
              <span key={i} className="first-badge">{w}</span>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="hero-gradient-orb orb-1" />
      <div className="hero-gradient-orb orb-2" />
    </section>
  );
}
