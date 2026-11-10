import { stepUpCompetencies } from "../data/competencyFramework";

export default function CompetencyTags({ items }) {
  if (!items?.length) return null;
  return (
    <div className="competency-tags">
      <span className="competency-tags-label">Competencies</span>
      {items.map((c) => (
        <span key={c} className={`competency-tag ${stepUpCompetencies.has(c) ? "step-up" : ""}`}>{c}</span>
      ))}
    </div>
  );
}
