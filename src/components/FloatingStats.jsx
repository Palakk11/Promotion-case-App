import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function FloatingStats({ highlights }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="floating-stats"
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 60, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="floating-stats-inner">
            {highlights.slice(0, 3).map((h, i) => (
              <div key={i} className="floating-stat">
                <span className="floating-stat-value">{h.value}</span>
                <span className="floating-stat-label">{h.label}</span>
              </div>
            ))}
            <button className="scroll-top-btn" onClick={scrollToTop} title="Back to top">
              <ArrowUp size={18} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
