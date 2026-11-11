import { motion } from "framer-motion";
import { TrendingUp, Calendar, Building2 } from "lucide-react";

export default function Hero({ data }) {
  const { candidate, executiveSummary } = data;

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
            <span>Senior SE Tenure: {candidate.tenure}</span>
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
          {[].concat(executiveSummary).map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <ul className="values-detail-list">
          <li><strong>Customer Focus</strong> — builds for the customer in the room, not a generic demo.</li>
          <li><strong>Trust</strong> — flags risks early and follows through, so reps look for her on their deals.</li>
          <li><strong>Curiosity</strong> — first to build with what's new, then teaches it to the team.</li>
          <li><strong>Collaboration</strong> — brings the right people in at each stage of a deal.</li>
        </ul>

        <div className="exec-summary-images">
          <figure className="program-image">
            <img src={`${import.meta.env.BASE_URL}images/shoutouts/Top-field-reps-AHC-FY27.jpg`} alt="Top Field Representatives globally" />
            <figcaption className="program-image-caption">Named among the top Field Representatives globally — Adam Alfano's FY27 All Hands Kickoff Call</figcaption>
          </figure>
          <figure className="program-image">
            <img src={`${import.meta.env.BASE_URL}images/shoutouts/SE-of-the-quarter.png`} alt="SE of the Quarter" />
            <figcaption className="program-image-caption">SE of the Quarter — FY27 Q2</figcaption>
          </figure>
        </div>

      </motion.div>

      <div className="hero-gradient-orb orb-1" />
      <div className="hero-gradient-orb orb-2" />
    </section>
  );
}
