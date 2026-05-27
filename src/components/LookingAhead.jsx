import { motion } from "framer-motion";
import { Rocket, Users, Layers, HeartHandshake } from "lucide-react";

const goals = [
  {
    icon: Users,
    title: "Be a Stronger Multiplier",
    description:
      "Spend more time helping peers navigate complex deals, not just closing my own.",
  },
  {
    icon: Layers,
    title: "Build Programs That Last",
    description:
      "Turn the enablement work I've started into something the org can rely on long after any single quarter.",
  },
  {
    icon: HeartHandshake,
    title: "Grow as a Strategic Partner",
    description:
      "Earn deeper trust with AE leadership and customers by showing up with even more consistency, curiosity, and care.",
  },
];

export default function LookingAhead() {
  return (
    <section id="looking-ahead" className="section">
      <div className="section-header">
        <h2>Looking Ahead</h2>
        <p className="section-subtitle">
          The promotion to Lead SE isn't a destination — it's an expanded
          platform to do more of what I already believe in: making every customer
          engagement more impactful, every deal cycle more strategic, and keep
          building.
        </p>
      </div>

      <p className="looking-ahead-intro">
        As a Lead SE, I want to expand on things beyond what I can already do
        today.
      </p>

      <div className="looking-ahead-grid">
        {goals.map((goal, i) => {
          const Icon = goal.icon;
          return (
            <motion.div
              key={i}
              className="looking-ahead-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <div className="looking-ahead-icon">
                <Icon size={24} />
              </div>
              <h3>{goal.title}</h3>
              <p>{goal.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
