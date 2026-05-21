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

        <div className="role-description">
          <h3></h3>
          <p>
            As a Senior Account SE for TMT CMRCL AMER, I partner with AEs, solutions leadership, and the extended SE ecosystem to turn ambiguity into certainty — delivering customer engagements that build trust and drive meaningful revenue.
          </p>
          <p>
            I own a high-volume book of business aligned to TMT CMRCL South-West AEs across 2 RVPs, showing up every quarter with strong ACV, deep product knowledge, and a genuine commitment to elevating everyone around me. My approach is grounded in four core values:
          </p>
          <ul className="values-detail-list">
            <li><strong>Customer Focus</strong> — I meet customers where they are, from discovery workshops to executive demos, ensuring every engagement moves the needle for their business and ours.</li>
            <li><strong>Trust</strong> — Build lasting relationships with AEs, customers, and teammates by showing up with consistency, candor, and empathy.</li>
            <li><strong>Curiosity</strong> — I truly believe the best SE is a perpetual learner. I stay ahead of the technology landscape, explore adjacent solutions, and bring fresh thinking to every customer conversation, because in a world that never stops evolving, neither should we.</li>
            <li><strong>Collaboration</strong> — My goal is to multiply impact beyond my own deals through programs like Palakk's Potluck, the Data360 Tiger Team, and cross-SE deal support fostering a culture of shared success that outlasts any single deal cycle.</li>
          </ul>
        </div>

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
