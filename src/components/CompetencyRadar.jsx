import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// The 9 competencies that step up from Senior to Lead in the official Global SE
// Competency Framework (By Job Grade > Lead Core/Industry SE). Senior is one level below.
const competencyGaps = [
  {
    competency: "Objection Handling",
    seniorLevel: "Intermediate",
    leadLevel: "Advanced",
    evidence:
      "LightEdge: handled live C-level pushback and pivoted the narrative; customer asked \"Why didn't ServiceNow do this for us?\" PerfectVision: navigated a $631K attrition objection by reframing the renewal as expansion. Storable: renewed early while Intercom Fin pitched to replace 261 Service Cloud seats.",
  },
  {
    competency: "Solution Orientation",
    seniorLevel: "Intermediate",
    leadLevel: "Advanced",
    evidence:
      "Prospecting Agent setup: co-built and recorded in 3 business days, becoming TMT's first Golden Use Case and reused in Edmentum, LightEdge and Trintech. Self-nominated to fill the cross-cloud gap at the Agentic Contact Center workshop.",
  },
  {
    competency: "Differentiation",
    seniorLevel: "Standard",
    leadLevel: "Intermediate",
    evidence:
      "LightEdge sent Salesforce's workshop format to ServiceNow to replicate. First Momentum win at LightEdge. Created Missionforce content positioning Agentforce against competitive alternatives for 100+ SEs.",
  },
  {
    competency: "Industry Foundations",
    seniorLevel: "Standard",
    leadLevel: "Intermediate",
    evidence:
      "TMT depth across telecom (PerfectVision post-AT&T), datacenter (LightEdge multi-vendor architecture) and software (NinjaOne, Trintech, Storable). Built the D360 Gem as an industry asset for AEs.",
  },
  {
    competency: "Business Foundations",
    seniorLevel: "Standard",
    leadLevel: "Intermediate",
    evidence:
      "PerfectVision: identified the dealer marketing gap from the post-AT&T business model shift. C3 Ventures: grew a single-product renewal into multi-cloud expansion ($74K ACV).",
  },
  {
    competency: "Product Capabilities & Technical Architecture",
    seniorLevel: "Standard",
    leadLevel: "Intermediate",
    evidence:
      "Citizen Architect and Revenue Cloud Blackbelt (FY26), with $55K+ ACV contributed outside own book. AI-native demo engineering with Claude and Cursor. Multi-cloud architecture across Data360, Agentforce and Service Cloud.",
  },
  {
    competency: "Consultative Selling",
    seniorLevel: "Standard",
    leadLevel: "Intermediate",
    evidence:
      "Storable: brought in the right resource at each stage, from Riley Rhodes for executive alignment to strategic SEs and architects ($195.8K ACV). LightEdge: coordinated architects, BVS, specialists and executive sponsors end to end.",
  },
  {
    competency: "Leveraging Customer Feedback",
    seniorLevel: "Standard",
    leadLevel: "Intermediate",
    evidence:
      "PerfectVision: proposed the CDP/Data Cloud play before the customer named the need. LightEdge: led the post-workshop readback to keep momentum. NinjaOne AI Day: shaped the session from discovery across lines of business.",
  },
  {
    competency: "Value Realization",
    seniorLevel: "Standard",
    leadLevel: "Intermediate",
    evidence:
      "LightEdge: walked through implementation structure across architecture, BVS and use-case sessions. PerfectVision: planned a post-renewal customer on-site for expansion.",
  },
];

const competencies = [
  { label: "Technical Depth", score: 95, description: "Multi-cloud expertise across 9+ products, AI-native demo engineering with Claude + Cursor" },
  { label: "Customer Engagement", score: 92, description: "Deep discovery-driven approach — LightEdge workshop became customer benchmark vs. ServiceNow" },
  { label: "Deal Strategy", score: 93, description: "$2.1M ACV in FY27 through Q3, PerfectVision $631K attrition save, NNAOV navigation" },
  { label: "Enablement & Scale", score: 95, description: "250+ AEs enabled via Tiger Team, Palakk's Potluck, D360 Gem deployed org-wide" },
  { label: "Cross-Cloud Expertise", score: 90, description: "Data360, Agentforce, Revenue Cloud, Marketing Cloud, Field Service, Slack, MuleSoft" },
  { label: "Mentorship", score: 87, description: "Trailguide, Peer Cert panelist, Revenue Cloud deal support outside book of business" },
  { label: "Leadership Influence", score: 91, description: "World Tour NYC keynote demo driver, Tiger Team pillar lead, Missionforce content creator" },
  { label: "Communication", score: 93, description: "BVS certified, executive briefings, 200+ live demo audience, 270 VOD views" },
];

function CompetencyTable() {
  return (
    <div className="competency-table-wrapper" style={{ marginTop: 40 }}>
      <table className="competency-table">
        <thead>
          <tr>
            <th>Competency</th>
            <th>Senior</th>
            <th>Lead Target</th>
            <th>Justifying Examples</th>
          </tr>
        </thead>
        <tbody>
          {competencyGaps.map((row, i) => (
            <motion.tr
              key={row.competency}
              className="comp-row"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
            >
              <td className="comp-name">{row.competency}</td>
              <td>
                <span className="level-badge level-senior">{row.seniorLevel}</span>
              </td>
              <td>
                <span className={`level-badge ${row.leadLevel === "Advanced" ? "level-lead-advanced" : "level-lead"}`}>
                  {row.leadLevel}
                </span>
              </td>
              <td className="comp-evidence">{row.evidence}</td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function CompetencyRadar() {
  const canvasRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    const size = 380;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    ctx.scale(dpr, dpr);

    const cx = size / 2;
    const cy = size / 2;
    const maxR = 140;
    const n = competencies.length;
    const angleStep = (2 * Math.PI) / n;
    const startAngle = -Math.PI / 2;

    ctx.clearRect(0, 0, size, size);

    for (let ring = 1; ring <= 4; ring++) {
      const r = (maxR * ring) / 4;
      ctx.beginPath();
      for (let i = 0; i <= n; i++) {
        const angle = startAngle + i * angleStep;
        const x = cx + r * Math.cos(angle);
        const y = cy + r * Math.sin(angle);
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.strokeStyle = "rgba(42, 53, 80, 0.6)";
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    for (let i = 0; i < n; i++) {
      const angle = startAngle + i * angleStep;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + maxR * Math.cos(angle), cy + maxR * Math.sin(angle));
      ctx.strokeStyle = "rgba(42, 53, 80, 0.4)";
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    const animPct = isVisible ? 1 : 0;

    ctx.beginPath();
    for (let i = 0; i <= n; i++) {
      const idx = i % n;
      const angle = startAngle + idx * angleStep;
      const r = (competencies[idx].score / 100) * maxR * animPct;
      const x = cx + r * Math.cos(angle);
      const y = cy + r * Math.sin(angle);
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.closePath();
    const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, maxR);
    gradient.addColorStop(0, "rgba(59, 130, 246, 0.25)");
    gradient.addColorStop(1, "rgba(139, 92, 246, 0.15)");
    ctx.fillStyle = gradient;
    ctx.fill();
    ctx.strokeStyle = "rgba(96, 165, 250, 0.8)";
    ctx.lineWidth = 2;
    ctx.stroke();

    for (let i = 0; i < n; i++) {
      const angle = startAngle + i * angleStep;
      const r = (competencies[i].score / 100) * maxR * animPct;
      const x = cx + r * Math.cos(angle);
      const y = cy + r * Math.sin(angle);

      ctx.beginPath();
      ctx.arc(x, y, hoveredIndex === i ? 6 : 4, 0, 2 * Math.PI);
      ctx.fillStyle = hoveredIndex === i ? "#fbbf24" : "#60a5fa";
      ctx.fill();
      ctx.strokeStyle = "#0a0e1a";
      ctx.lineWidth = 2;
      ctx.stroke();
    }
  }, [isVisible, hoveredIndex]);

  const size = 380;
  const cx = size / 2;
  const cy = size / 2;
  const maxR = 140;
  const labelR = maxR + 30;
  const n = competencies.length;
  const angleStep = (2 * Math.PI) / n;
  const startAngle = -Math.PI / 2;

  return (
    <section id="competencies" className="section" ref={containerRef}>
      <div className="section-header">
        <h2>Core Competencies & Scope of the Role</h2>
        <p className="section-subtitle">The Global SE Competency Framework identifies 9 competencies that step up from Senior to Lead SE. Palakk is already performing at or above the Lead-level expectation in each.</p>
      </div>

      <div className="competency-layout">
        <div className="competency-list-left">
          {competencies.slice(0, 4).map((c, i) => (
            <motion.div
              key={i}
              className={`competency-card ${hoveredIndex === i ? "active" : ""}`}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <div className="competency-card-header">
                <span className="competency-card-label">{c.label}</span>
                <span className="competency-card-score">{c.score}</span>
              </div>
              <div className="competency-card-bar">
                <motion.div
                  className="competency-card-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${c.score}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3, duration: 0.8 }}
                />
              </div>
              <p className="competency-card-desc">{c.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="radar-container">
          <canvas ref={canvasRef} className="radar-canvas" />
          <div className="radar-labels">
            {competencies.map((c, i) => {
              const angle = startAngle + i * angleStep;
              const x = cx + labelR * Math.cos(angle);
              const y = cy + labelR * Math.sin(angle);
              return (
                <div
                  key={i}
                  className={`radar-label ${hoveredIndex === i ? "hovered" : ""}`}
                  style={{
                    left: `${x}px`,
                    top: `${y}px`,
                    transform: "translate(-50%, -50%)",
                  }}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <span className="radar-label-text">{c.label}</span>
                  <span className="radar-label-score">{c.score}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="competency-list-right">
          {competencies.slice(4).map((c, i) => (
            <motion.div
              key={i + 4}
              className={`competency-card ${hoveredIndex === i + 4 ? "active" : ""}`}
              onMouseEnter={() => setHoveredIndex(i + 4)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <div className="competency-card-header">
                <span className="competency-card-label">{c.label}</span>
                <span className="competency-card-score">{c.score}</span>
              </div>
              <div className="competency-card-bar">
                <motion.div
                  className="competency-card-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${c.score}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3, duration: 0.8 }}
                />
              </div>
              <p className="competency-card-desc">{c.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <CompetencyTable />
    </section>
  );
}
