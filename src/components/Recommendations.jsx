import { motion } from "framer-motion";
import { Quote, Briefcase, Users } from "lucide-react";

function RecommendationCard({ rec, i }) {
  return (
    <motion.figure
      className="recommendation-card"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.08, duration: 0.4 }}
    >
      <Quote size={18} className="recommendation-quote-icon" />
      <blockquote>{rec.quote}</blockquote>
      <figcaption>
        <span className="recommendation-author">{rec.author}</span>
        {rec.role && <span className="recommendation-role">{rec.role}</span>}
        {rec.context && <span className="recommendation-context">{rec.context}</span>}
      </figcaption>
      {rec.image && (
        <div className="recommendation-image">
          <img src={rec.image} alt={`${rec.author} — ${rec.context || "shoutout"}`} />
        </div>
      )}
    </motion.figure>
  );
}

function Group({ title, icon: Icon, items }) {
  if (!items?.length) return null;
  return (
    <div className="recommendation-group">
      <h3 className="recommendation-group-title"><Icon size={18} /> {title}</h3>
      <div className="recommendation-grid">
        {items.map((rec, i) => (
          <RecommendationCard key={`${rec.author}-${i}`} rec={rec} i={i} />
        ))}
      </div>
    </div>
  );
}

export default function Recommendations({ data }) {
  if (!data) return null;
  return (
    <section id="recommendations" className="section">
      <div className="section-header">
        <h2>Recommendations</h2>
        <p className="section-subtitle">In their words: shoutouts from the sales teams and peers Palakk works with.</p>
      </div>
      <Group title="From Sales Teams" icon={Briefcase} items={data.salesTeam} />
      <Group title="From Peers & Leaders" icon={Users} items={data.peers} />
    </section>
  );
}
