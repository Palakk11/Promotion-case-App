// Official Global SE Competency Framework — Lead Core/Industry SE targets.
// `up: true` marks "Up from previous grade" (Senior is one level below Lead there;
// for the rest, the Senior and Lead targets are the same).
const LEVELS = ["Limited", "Standard", "Intermediate", "Advanced"];

export const competencyAreas = [
  {
    area: "Customer Communication",
    competencies: [
      { name: "Contextual Communication", lead: "Intermediate",
        evidence: "Tailored the NinjaOne AI Day to 13 RevOps and Data & AI leaders. Storable: aligned the executive conversation with Riley Rhodes ahead of the early renewal." },
      { name: "Value Articulation", lead: "Intermediate",
        evidence: "BVS Peer Certified (first cohort). PerfectVision: built the value case from discovery metrics. Storable: framed the early renewal against Intercom Fin's replacement pitch." },
      { name: "Objection Handling", lead: "Advanced", up: true,
        evidence: "LightEdge: handled live C-level pushback; customer asked \"Why didn't ServiceNow do this for us?\" PerfectVision: reframed a $631K attrition risk as expansion. Storable: renewed early while Intercom Fin pitched to replace 261 Service Cloud seats." },
      { name: "Facilitation", lead: "Intermediate",
        evidence: "World Tour NYC SMB keynote to 200+ live (270 VOD views). Hands-on-keyboard Agentic Contact Center workshop for 40+ customers. NinjaOne 4.5-hour AI Day. LightEdge 2-day onsite workshop." },
    ],
  },
  {
    area: "Research & Discovery",
    competencies: [
      { name: "Differentiation", lead: "Intermediate", up: true,
        evidence: "LightEdge sent Salesforce's workshop format to ServiceNow to replicate. First Momentum win at LightEdge. Missionforce content positioning Agentforce against competitive alternatives for 100+ SEs." },
      { name: "Industry Foundations", lead: "Intermediate", up: true,
        evidence: "TMT depth across telecom (PerfectVision post-AT&T), datacenter (LightEdge multi-vendor architecture) and software (NinjaOne, Trintech, Storable). Built the D360 Gem as an industry asset for AEs." },
      { name: "Business Foundations", lead: "Intermediate", up: true,
        evidence: "PerfectVision: identified the dealer marketing gap from the post-AT&T business model shift. C3 Ventures: grew a single-product renewal into multi-cloud expansion ($74K ACV)." },
      { name: "Product Capabilities & Technical Architecture", lead: "Intermediate", up: true,
        evidence: "Citizen Architect and Revenue Cloud Blackbelt (FY26). Multi-cloud SME across Agentforce, Service Cloud and Data360 at the Contact Center workshop. AI-native demo engineering with Claude and Cursor." },
    ],
  },
  {
    area: "Team Selling",
    competencies: [
      { name: "Orchestration", lead: "Intermediate",
        evidence: "Storable: brought in the right resource at each stage, from Riley Rhodes for executive alignment to strategic SEs and architects. NinjaOne: ran discovery across lines of business with the AE, exec sponsor and specialists." },
      { name: "Project Monitoring", lead: "Intermediate",
        evidence: "Data360 Tiger Team: managed deliverables across 5 SEs and 8+ sessions. Storable: ran the weekly Solutions Sync. LightEdge: ran the pre-workshop alignment series in the first week on the account." },
      { name: "Consultative Selling", lead: "Intermediate", up: true,
        evidence: "Storable: $195.8K ACV early renewal with stage-by-stage resourcing. LightEdge: coordinated architects, BVS, specialists and executive sponsors end to end. Revenue Cloud: $55K+ ACV contributed outside own book." },
    ],
  },
  {
    area: "Action Orientation",
    competencies: [
      { name: "Analytical Capabilities", lead: "Standard",
        evidence: "PerfectVision: collected and analyzed discovery metrics to size the value case. Trintech: tracked Prospecting Agent activation to 151 prospects in production for 7 pilot reps." },
      { name: "Change Management", lead: "Intermediate",
        evidence: "Palakk's Potluck: peer-to-peer release enablement with 10 SE co-presenters. Prospecting Agent setup enablement rolled out across TMT Commercial." },
      { name: "Solution Orientation", lead: "Advanced", up: true,
        evidence: "Prospecting Agent setup: idea to recorded enablement in 3 business days, becoming TMT's first Golden Use Case. Self-nominated to fill the cross-cloud gap at the Agentic Contact Center workshop." },
    ],
  },
  {
    area: "Solutioning",
    competencies: [
      { name: "Solution Discovery", lead: "Intermediate",
        evidence: "LightEdge: led discovery up to the executive level. NinjaOne: deep discovery across multiple lines of business before the AI Day." },
      { name: "Solution Design", lead: "Intermediate",
        evidence: "LightEdge: designed custom multi-cloud user journeys (Agentforce + Data360). World Tour NYC: built 2 keynote demos from scratch, reused at Dreamforce." },
      { name: "Solution Delivery", lead: "Intermediate",
        evidence: "Trintech: Prospecting Agent in production for the pilot reps. NinjaOne: curated micro-demos across Agentforce and Headless 360. Prospecting Agent enablement reused in Edmentum, LightEdge and Trintech." },
    ],
  },
  {
    area: "Value Selling",
    competencies: [
      { name: "Leveraging Customer Feedback", lead: "Intermediate", up: true,
        evidence: "PerfectVision: proposed the CDP/Data Cloud play before the customer named the need. LightEdge: led the post-workshop readback to keep momentum." },
      { name: "Point of View (POV) Development", lead: "Intermediate",
        evidence: "LightEdge: custom POV balancing short-term wins with long-term platform vision. Data360 Tiger Team: created the D360 Gem POV asset for the wider SE community." },
      { name: "Value Realization", lead: "Intermediate", up: true,
        evidence: "LightEdge: walked through implementation across architecture, BVS and use-case sessions. PerfectVision: planned a post-renewal on-site for expansion." },
    ],
  },
];

export const seniorLevel = (c) => (c.up ? LEVELS[LEVELS.indexOf(c.lead) - 1] : c.lead);

export const stepUpCompetencies = new Set(
  competencyAreas.flatMap((a) => a.competencies.filter((c) => c.up).map((c) => c.name))
);
