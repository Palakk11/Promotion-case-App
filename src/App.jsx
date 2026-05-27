import Sidebar from "./components/Sidebar";
import ScrollProgress from "./components/ScrollProgress";
import FloatingStats from "./components/FloatingStats";
import Hero from "./components/Hero";
import MetricsDashboard from "./components/MetricsDashboard";
import CompetencyRadar from "./components/CompetencyRadar";
import ACVTracker from "./components/ACVTracker";
import Certifications from "./components/Certifications";
import DealExcellence from "./components/DealExcellence";
import LeadershipPrograms from "./components/LeadershipPrograms";
import Collaborative from "./components/Collaborative";
import Mentorship from "./components/Mentorship";
import TechnicalExpertise from "./components/TechnicalExpertise";
import Timeline from "./components/Timeline";
import LookingAhead from "./components/LookingAhead";
import promotionData from "./data/promotionData";
import "./App.css";

function App() {
  return (
    <div className="app-layout">
      <ScrollProgress />
      <Sidebar />
      <main className="main-content">
        <Hero data={promotionData} />
        <MetricsDashboard
          highlights={promotionData.highlights}
          blackbelts={promotionData.blackbelts}
          products={promotionData.products}
        />
        <CompetencyRadar />
        <ACVTracker acvByYear={promotionData.acvByYear} />
        <Certifications certifications={promotionData.certifications} />
        <DealExcellence dealData={promotionData.dealExcellence} />
        <LeadershipPrograms leadershipData={promotionData.leadershipPrograms} />
        <Collaborative collabData={promotionData.collaborative} />
        <Mentorship items={promotionData.mentorship} />
        <TechnicalExpertise deals={promotionData.technicalExpertise} />
        <Timeline careerJourney={promotionData.careerJourney} />
        <LookingAhead />
        <footer className="app-footer">
          <p>Palakk Shrivastava — Lead SE Promotion Case — Draft 1 — May 2026</p>
        </footer>
      </main>
      <FloatingStats highlights={promotionData.highlights} />
    </div>
  );
}

export default App;
