import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const competencies = [
  { label: "Technical Depth", score: 95 },
  { label: "Customer Engagement", score: 92 },
  { label: "Deal Strategy", score: 88 },
  { label: "Enablement & Scale", score: 95 },
  { label: "Cross-Cloud Expertise", score: 90 },
  { label: "Mentorship", score: 87 },
  { label: "Leadership Influence", score: 91 },
  { label: "Communication", score: 93 },
];

export default function CompetencyRadar() {
  const canvasRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.3 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    const size = 340;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    ctx.scale(dpr, dpr);

    const cx = size / 2;
    const cy = size / 2;
    const maxR = 130;
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

  const size = 340;
  const cx = size / 2;
  const cy = size / 2;
  const maxR = 130;
  const labelR = maxR + 28;
  const n = competencies.length;
  const angleStep = (2 * Math.PI) / n;
  const startAngle = -Math.PI / 2;

  return (
    <div className="competency-section" ref={containerRef}>
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
    </div>
  );
}
