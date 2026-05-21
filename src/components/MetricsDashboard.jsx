import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function AnimatedValue({ value, isVisible }) {
  const numericMatch = value.match(/[\d.]+/);
  const [display, setDisplay] = useState(numericMatch ? "0" : value);

  useEffect(() => {
    if (!isVisible || !numericMatch) {
      setDisplay(value);
      return;
    }
    const target = parseFloat(numericMatch[0]);
    const hasDecimal = numericMatch[0].includes(".");
    const prefix = value.slice(0, value.indexOf(numericMatch[0]));
    const suffix = value.slice(value.indexOf(numericMatch[0]) + numericMatch[0].length);
    const duration = 1200;
    const steps = 40;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const current = Math.min((target * step) / steps, target);
      const formatted = hasDecimal ? current.toFixed(1) : Math.round(current).toString();
      setDisplay(`${prefix}${formatted}${suffix}`);
      if (step >= steps) {
        setDisplay(value);
        clearInterval(timer);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isVisible, value]);

  return <span className="metric-value">{display}</span>;
}

export default function MetricsDashboard({ highlights, blackbelts, products }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="metrics" className="section">
      <div className="section-header">
        <h2>Impact at a Glance</h2>
        <p className="section-subtitle">Key performance indicators demonstrating consistent above-level performance</p>
      </div>

      <div className="metrics-grid" ref={ref}>
        {highlights.map((m, i) => (
          <motion.div
            key={i}
            className="metric-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <AnimatedValue value={m.value} isVisible={isVisible} />
            <span className="metric-label">{m.label}</span>
            <span className="metric-delta">{m.subtitle}</span>
          </motion.div>
        ))}
      </div>

      <div className="badges-section">
        <div className="badges-group">
          <h4>Blackbelts</h4>
          <div className="badge-list">
            {blackbelts.map((b, i) => (
              <span key={i} className="badge blackbelt">{b}</span>
            ))}
          </div>
        </div>
        <div className="badges-group">
          <h4>Product Expertise</h4>
          <div className="badge-list">
            {products.map((p, i) => (
              <span key={i} className="badge product">{p}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
