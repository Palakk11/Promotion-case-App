import { motion } from "framer-motion";

export default function ACVTracker({ acvByYear }) {
  const sorted = [...acvByYear].sort((a, b) => {
    const ya = parseInt(a.year.replace(/\D/g, ""));
    const yb = parseInt(b.year.replace(/\D/g, ""));
    return ya - yb;
  });

  return (
    <section id="acv" className="section">
      <div className="section-header">
        <h2>ACV Contributions Over the Years</h2>
        <p className="section-subtitle">Consistent revenue generation with quarter-over-quarter performance</p>
      </div>

      <motion.div
        className="acv-table-wrapper"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <table className="acv-table">
          <thead>
            <tr>
              <th>Fiscal Year</th>
              <th>Closed ACV</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((year, i) => {
              const note = year.subtitle || (year.openPipeLabel ? year.openPipeLabel : "");
              return (
                <tr key={i}>
                  <td className="acv-table-year">{year.year}</td>
                  <td className="acv-table-total">
                    {year.total}
                    {note && <span className="acv-table-note"> — {note}</span>}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </motion.div>
    </section>
  );
}
