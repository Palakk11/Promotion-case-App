import { useState, useEffect } from "react";
import {
  User,
  BarChart3,
  Award,
  Users,
  Briefcase,
  MessageSquareQuote,
  Clock,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Zap,
  Target,
  ShieldCheck,
  Handshake,
  Heart,
  Wrench,
} from "lucide-react";

const sections = [
  { id: "hero", label: "Overview", icon: User },
  { id: "metrics", label: "Key Metrics", icon: BarChart3 },
  { id: "acv", label: "ACV Track Record", icon: Target },
  { id: "certifications", label: "Certifications", icon: ShieldCheck },
  { id: "deals", label: "Deal Excellence", icon: Briefcase },
  { id: "leadership", label: "Leadership & Programs", icon: Award },
  { id: "collaborative", label: "Collaborative", icon: Handshake },
  { id: "mentorship", label: "Mentorship", icon: Heart },
  { id: "technical", label: "Technical Expertise", icon: Wrench },
  { id: "testimonials", label: "Testimonials", icon: MessageSquareQuote },
  { id: "timeline", label: "Journey", icon: Clock },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { threshold: 0.15, rootMargin: "-80px 0px -40% 0px" }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        {!collapsed && (
          <div className="sidebar-brand">
            <Zap size={20} />
            <span>Promo Case</span>
          </div>
        )}
        <button className="collapse-btn" onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>
      <ul className="sidebar-nav">
        {sections.map(({ id, label, icon: Icon }) => (
          <li key={id}>
            <button
              className={`sidebar-link ${activeSection === id ? "active" : ""}`}
              onClick={() => scrollTo(id)}
              title={label}
            >
              <Icon size={18} />
              {!collapsed && <span>{label}</span>}
            </button>
          </li>
        ))}
      </ul>
      {!collapsed && (
        <div className="sidebar-footer">
          <button className="print-btn" onClick={() => window.print()}>
            Export / Print
          </button>
        </div>
      )}
    </nav>
  );
}
