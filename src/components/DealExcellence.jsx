import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, CheckCircle2, Zap, ChevronDown, ExternalLink } from "lucide-react";

function DealCard({ deal, i }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      className={`deal-card ${expanded ? "expanded" : ""}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.15, duration: 0.5 }}
    >
      <div className="deal-header clickable" onClick={() => setExpanded(!expanded)}>
        <div>
          <h3>{deal.customer}</h3>
          <span className="deal-subtitle">{deal.subtitle}</span>
        </div>
        <div className="deal-header-right">
          <span className="deal-type-badge">{deal.type}</span>
          <ChevronDown size={20} className={`expand-icon ${expanded ? "rotated" : ""}`} />
        </div>
      </div>

      <div className="deal-impacts">
        <h4><Zap size={16} /> Impact</h4>
        {deal.impacts.map((imp, j) => (
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
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="deal-story">
              <p>{deal.story}</p>
            </div>

            {deal.actions && (
              <div className="deal-actions">
                <h4>What I Owned</h4>
                <ul>
                  {deal.actions.map((a, j) => (
                    <li key={j}>{a}</li>
                  ))}
                </ul>
              </div>
            )}

            {deal.testimonial && (
              <div className="deal-testimonial">
                <Quote size={20} className="quote-icon" />
                <blockquote>"{deal.testimonial.quote}"</blockquote>
                <cite>— {deal.testimonial.author}</cite>
              </div>
            )}

            {deal.customerQuote && (
              <div className="customer-quote-highlight">
                <span>"{deal.customerQuote}"</span>
                <em>— {deal.customer} Customer</em>
              </div>
            )}

            <div className="deal-outcome">
              <strong>Outcome:</strong> {deal.outcome}
            </div>

            {deal.image && (
              <div className="program-image">
                <img src={deal.image} alt={deal.customer} />
                {deal.imageCaption && <span className="program-image-caption">{deal.imageCaption}</span>}
              </div>
            )}

            {deal.images && (
              <div className="program-images">
                {deal.images.map((img, j) => (
                  <div key={j} className="program-image">
                    <img src={img.src} alt={img.caption || deal.customer} />
                    {img.caption && <span className="program-image-caption">{img.caption}</span>}
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {!expanded && (
        <div className="deal-peek-row">
          <span className="deal-peek">Click to expand full details</span>
          {deal.link && (
            <a href={deal.link.url} target="_blank" rel="noopener noreferrer" className="program-link" onClick={(e) => e.stopPropagation()}>
              <ExternalLink size={14} />
              {deal.link.label}
            </a>
          )}
        </div>
      )}
    </motion.div>
  );
}

export default function DealExcellence({ dealData }) {
  return (
    <section id="deals" className="section">
      <div className="section-header">
        <h2>Deal Excellence</h2>
        <div className="core-value-badge">Core Value: {dealData.coreValue}</div>
        <p className="section-subtitle">{dealData.summary}</p>
      </div>

      <div className="deals-list">
        {dealData.deals.map((deal, i) => (
          <DealCard key={i} deal={deal} i={i} />
        ))}
      </div>

      {dealData.shoutouts && (
        <div className="shoutouts-gallery">
          <h4>Shoutouts & Recognition</h4>
          <div className="shoutouts-grid">
            {dealData.shoutouts.map((img, i) => (
              <motion.div
                key={i}
                className="program-image"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <img src={img.src} alt={img.caption} />
                {img.caption && <span className="program-image-caption">{img.caption}</span>}
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
