import { motion } from "framer-motion";
import { TrendingUp, Users, Zap, Target } from "lucide-react";

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
          <div className="preamble-icon preamble-icon-blue">
            <TrendingUp size={22} />
          </div>
          <h2>Strategic Business Need</h2>
        </div>
        <p className="preamble-lead">
          TMT CMRCL AMER is at an inflection point. The launch of Agentforce,
          Data360, and the NNAOV model has fundamentally shifted what customers
          expect from SE engagements — from product demos to strategic,
          multi-cloud architecture conversations. The org needs Lead SEs who can:
        </p>
        <div className="preamble-need-cards">
          <div className="preamble-need-card">
            <Users size={20} />
            <div>
              <h4>Scale Enablement Beyond Their Own Book</h4>
              <p>
                With 250+ new AEs onboarding annually on Data360 alone,
                individual SE excellence doesn't compound without multipliers
                who can build repeatable programs.
              </p>
            </div>
          </div>
          <div className="preamble-need-card">
            <Zap size={20} />
            <div>
              <h4>Drive First-of-Kind Deals</h4>
              <p>
                New product motions (Agentforce, Data360, Marketing Cloud
                Growth) require SEs who can pioneer win patterns that the rest
                of the org can follow.
              </p>
            </div>
          </div>
          <div className="preamble-need-card">
            <Target size={20} />
            <div>
              <h4>Bridge IC Execution and Org-Wide Influence</h4>
              <p>
                The team needs SEs who own cross-functional workshops, lead
                competitive strategy, and operate across multiple RVPs — not
                just deliver demos to their aligned AEs.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
