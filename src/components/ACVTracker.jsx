import { motion } from "framer-motion";

export default function ACVTracker({ acvByYear }) {
  const maxACV = 2200000;

  const parseACV = (str) => {
    const match = str.replace(/[^0-9.]/g, "");
    const num = parseFloat(match);
    if (str.includes("M")) return num * 1000000;
    if (str.includes("K")) return num * 1000;
    return num;
  };

  return (
    <section id="acv" className="section">
      <div className="section-header">
        <h2>ACV Contributions Over the Years</h2>
        <p className="section-subtitle">Consistent revenue generation with quarter-over-quarter performance</p>
      </div>

      <div className="acv-chart">
        {acvByYear.map((year, i) => {
          const acvNum = parseACV(year.total);
          const pct = Math.min((acvNum / maxACV) * 100, 100);
          return (
            <motion.div
              key={i}
              className="acv-row"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <div className="acv-year">{year.year}</div>
              <div className="acv-bar-container">
                <motion.div
                  className="acv-bar"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${pct}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.3, duration: 0.8 }}
                />
                <span className="acv-amount">{year.total}</span>
              </div>
              <div className="acv-quarters">
                {year.quarters.map((q, j) => (
                  <span key={j} className="acv-quarter">
                    <strong>{q.q}:</strong> {q.amount}
                    {q.note && <em> — {q.note}</em>}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
