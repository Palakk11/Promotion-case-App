import Sidebar from "./components/Sidebar";
import ScrollProgress from "./components/ScrollProgress";
import Hero from "./components/Hero";
import Preamble from "./components/Preamble";
import MetricsDashboard from "./components/MetricsDashboard";
import CompetencyRadar from "./components/CompetencyRadar";
import ACVTracker from "./components/ACVTracker";
import DealExcellence from "./components/DealExcellence";
import LeadershipPrograms from "./components/LeadershipPrograms";
import Collaborative from "./components/Collaborative";
import Mentorship from "./components/Mentorship";
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
        <Preamble />
        <CompetencyRadar />
        <MetricsDashboard
          highlights={promotionData.highlights}
          blackbelts={promotionData.blackbelts}
          products={promotionData.products}
          certifications={promotionData.certifications}
        />
        <ACVTracker acvByYear={promotionData.acvByYear} />
        <DealExcellence dealData={promotionData.dealExcellence} />
        <LeadershipPrograms leadershipData={promotionData.leadershipPrograms} />
        <Collaborative collabData={promotionData.collaborative} />
        <Mentorship items={promotionData.mentorship} />
        <Timeline careerJourney={promotionData.careerJourney} />
        <LookingAhead />
        <footer className="app-footer">
          <p>Palakk Shrivastava — Lead SE Promotion Case — Confidential — October 2026</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
