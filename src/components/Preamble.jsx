import { motion } from "framer-motion";
import { Target, Users, Rocket, Sparkles } from "lucide-react";

export default function Preamble() {
  return (
    <section id="preamble" className="section">
      <motion.div
        className="preamble-block"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="preamble-block-header">
          <h2>Why a Lead SE in Texas Is a Business Imperative</h2>
        </div>
        <p className="preamble-lead">
          TMT CMRCL AMER is at an inflection point. Agentforce, Data360, and the
          NNAOV model have shifted SE engagements from product demos to strategic,
          multi-cloud architecture conversations. The Southwest territory —
          spanning Austin, Dallas, and Houston — is one of the fastest-growing
          tech markets in the country, with accounts like LightEdge Solutions,
          PerfectVision, and C3 Ventures already demanding Lead SE-level
          orchestration. The territory requires a Lead SE who can:
        </p>
        <div className="preamble-need-cards">
          <div className="preamble-need-card">
            <Target size={20} />
            <div>
              <h4>Anchor Strategic Accounts & Drive Complex Deals</h4>
              <p>
                Serve as SE authority across 2 RVPs, anchoring $1M+
                pipeline-generating engagements across high-complexity,
                multi-stakeholder deal cycles — while displacing entrenched
                competitors like ServiceNow through architectural credibility and
                cross-functional deal strategy.
              </p>
            </div>
          </div>
          <div className="preamble-need-card">
            <Rocket size={20} />
            <div>
              <h4>Expand the Platform & Navigate the AI Landscape</h4>
              <p>
                Connect new acquisitions like Momentum and Qualified to existing
                TMT account relationships as a trusted advisor — and guide Build
                vs. Buy conversations as AI evolves to headless, requiring
                dynamic technical dialogue well beyond product positioning.
              </p>
            </div>
          </div>
          <div className="preamble-need-card">
            <Users size={20} />
            <div>
              <h4>Represent Salesforce Beyond Individual Deals</h4>
              <p>
                Drive executive engagement at VP-sponsored roadshows and customer
                workshops, operating as the face of Salesforce's technical vision
                in the Southwest — above and beyond individual deal delivery.
              </p>
            </div>
          </div>
        </div>
        <div className="preamble-callout">
          As a core SE on these accounts, Palakk has already been performing in
          this capacity — driving from the front as a Lead SE. The Lead SE title
          formalizes the business function already operating in the territory.
        </div>
      </motion.div>

      <motion.div
        className="preamble-block"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        style={{ marginTop: 24 }}
      >
        <div className="preamble-block-header">
          <h2>Scope & Complexity — Why Palakk?</h2>
        </div>
        <p className="preamble-lead">
          Palakk has been performing as a Senior Solution Engineer since FY25 and
          was a doer even before earning the title — going above and beyond has
          been a consistent philosophy throughout her journey. Over the course of
          FY25–FY26, she has operated at scale with leadership impact across the
          organization's SMB and now CMRCL TMT, bringing expertise across
          customers of different industries, scale, and technical depth — truly
          reflecting the essence of a Lead SE.
        </p>
        <p className="preamble-lead">
          She has expanded on her role and has been delivering on <strong>3 key
          areas</strong> as she looks towards taking on the role of a Lead:
        </p>
        <div className="preamble-pillars">
          <span className="preamble-pillar">1. Running Scale Programs</span>
          <span className="preamble-pillar">2. Technical & Strategic Account Expansion</span>
          <span className="preamble-pillar">3. Value Selling in the Agentic Landscape</span>
        </div>
        <p className="preamble-lead">
          Palakk has consistently
          delivered exceptional business results, closing <strong>$6.05M in
          ACV</strong> through FY27 Q1 while pioneering several first-of-their-kind
          wins. Her strong consulting background, business acumen, and multi-cloud
          expertise across Agentforce, Data360, and the broader product suite —
          combined with a collaborative leadership style and commitment to
          mentoring others — position her exceptionally well for the Lead SE role.
        </p>
        <div className="first-of-kind">
          <h4><Sparkles size={16} /> First-of-Their-Kind Wins</h4>
          <div className="firsts-list">
            <span className="first-badge">First Agentforce for Service deal in SMB</span>
            <span className="first-badge">First Einstein 1 Field Service deal company-wide</span>
            <span className="first-badge">First Marketing Cloud Growth deal company-wide</span>
            <span className="first-badge">First Momentum win at LightEdge</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
