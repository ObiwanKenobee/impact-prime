export interface ImpactAsset {
  id: string;
  projectName: string;
  category: string;
  region: string;
  claimedOutcome: string;
  verifiedOutcome: string;
  confidenceScore: number;
  impactGrade: string;
  status: "Verified" | "In Review" | "Flagged";
  lastVerified: string;
  pricePerUnit: number;
  priceUnit: string;
  priceChange24h: number;
  verificationBreakdown: {
    dataConsistency: number;
    externalSignalMatch: number;
    historicalPatternMatch: number;
    fraudRiskScore: number;
    sourceReliability: number;
  };
  dataSources: {
    name: string;
    type: string;
    reliability: number;
    lastUpdated: string;
    conflicts: boolean;
  }[];
  priceHistory: { date: string; price: number }[];
  riskFlags: string[];
}

export const mockAssets: ImpactAsset[] = [
  {
    id: "viu-001",
    projectName: "Nairobi Clean Water Initiative",
    category: "Water / Health",
    region: "Kenya, East Africa",
    claimedOutcome: "50,000 households served",
    verifiedOutcome: "38,200 households confirmed",
    confidenceScore: 84,
    impactGrade: "B+",
    status: "Verified",
    lastVerified: "2026-04-15T14:30:00Z",
    pricePerUnit: 12.40,
    priceUnit: "per household",
    priceChange24h: 2.3,
    verificationBreakdown: { dataConsistency: 88, externalSignalMatch: 79, historicalPatternMatch: 91, fraudRiskScore: 8, sourceReliability: 85 },
    dataSources: [
      { name: "UNICEF Field Reports", type: "NGO Report", reliability: 92, lastUpdated: "2026-04-14", conflicts: false },
      { name: "Sentinel-2 Satellite", type: "Satellite Imagery", reliability: 88, lastUpdated: "2026-04-15", conflicts: false },
      { name: "Local IoT Sensors", type: "IoT Network", reliability: 76, lastUpdated: "2026-04-15", conflicts: true },
    ],
    priceHistory: [
      { date: "Mar 17", price: 10.2 }, { date: "Mar 24", price: 10.8 }, { date: "Mar 31", price: 11.1 },
      { date: "Apr 07", price: 11.9 }, { date: "Apr 14", price: 12.1 }, { date: "Apr 16", price: 12.4 },
    ],
    riskFlags: ["IoT sensor data shows 12% variance from NGO reports"],
  },
  {
    id: "viu-002",
    projectName: "Mombasa Mangrove Carbon Sink",
    category: "Carbon / Restoration",
    region: "Kenya, Coast",
    claimedOutcome: "12,000 tons CO₂ sequestered",
    verifiedOutcome: "10,840 tons confirmed",
    confidenceScore: 91,
    impactGrade: "A-",
    status: "Verified",
    lastVerified: "2026-04-16T08:00:00Z",
    pricePerUnit: 18.90,
    priceUnit: "per ton CO₂",
    priceChange24h: -1.2,
    verificationBreakdown: { dataConsistency: 94, externalSignalMatch: 89, historicalPatternMatch: 88, fraudRiskScore: 4, sourceReliability: 93 },
    dataSources: [
      { name: "Verra Registry", type: "Carbon Registry", reliability: 95, lastUpdated: "2026-04-16", conflicts: false },
      { name: "Planet Labs Imagery", type: "Satellite Imagery", reliability: 91, lastUpdated: "2026-04-15", conflicts: false },
    ],
    priceHistory: [
      { date: "Mar 17", price: 17.5 }, { date: "Mar 24", price: 18.1 }, { date: "Mar 31", price: 19.4 },
      { date: "Apr 07", price: 19.8 }, { date: "Apr 14", price: 19.1 }, { date: "Apr 16", price: 18.9 },
    ],
    riskFlags: [],
  },
  {
    id: "viu-003",
    projectName: "Kisumu Girls Education Program",
    category: "Education",
    region: "Kenya, Western",
    claimedOutcome: "2,500 students completed",
    verifiedOutcome: "1,870 students confirmed",
    confidenceScore: 72,
    impactGrade: "B-",
    status: "In Review",
    lastVerified: "2026-04-13T10:15:00Z",
    pricePerUnit: 45.00,
    priceUnit: "per student",
    priceChange24h: 0.8,
    verificationBreakdown: { dataConsistency: 68, externalSignalMatch: 71, historicalPatternMatch: 80, fraudRiskScore: 15, sourceReliability: 74 },
    dataSources: [
      { name: "Ministry of Education", type: "Gov Report", reliability: 78, lastUpdated: "2026-04-10", conflicts: false },
      { name: "Local NGO Surveys", type: "NGO Report", reliability: 70, lastUpdated: "2026-04-12", conflicts: true },
    ],
    priceHistory: [
      { date: "Mar 17", price: 42.0 }, { date: "Mar 24", price: 43.2 }, { date: "Mar 31", price: 44.1 },
      { date: "Apr 07", price: 44.5 }, { date: "Apr 14", price: 44.8 }, { date: "Apr 16", price: 45.0 },
    ],
    riskFlags: ["NGO survey methodology flagged for review", "25% gap between claimed and verified outcomes"],
  },
  {
    id: "viu-004",
    projectName: "Turkana Solar Microgrid",
    category: "Energy / Infrastructure",
    region: "Kenya, Northern",
    claimedOutcome: "8,000 homes powered",
    verifiedOutcome: "3,200 homes confirmed",
    confidenceScore: 48,
    impactGrade: "D+",
    status: "Flagged",
    lastVerified: "2026-04-11T16:45:00Z",
    pricePerUnit: 8.20,
    priceUnit: "per home",
    priceChange24h: -5.1,
    verificationBreakdown: { dataConsistency: 42, externalSignalMatch: 38, historicalPatternMatch: 55, fraudRiskScore: 62, sourceReliability: 45 },
    dataSources: [
      { name: "Project Self-Report", type: "Self Report", reliability: 35, lastUpdated: "2026-04-08", conflicts: true },
      { name: "Grid Sensor Data", type: "IoT Network", reliability: 60, lastUpdated: "2026-04-11", conflicts: true },
    ],
    priceHistory: [
      { date: "Mar 17", price: 11.0 }, { date: "Mar 24", price: 10.2 }, { date: "Mar 31", price: 9.8 },
      { date: "Apr 07", price: 9.1 }, { date: "Apr 14", price: 8.6 }, { date: "Apr 16", price: 8.2 },
    ],
    riskFlags: ["60% gap between claimed and verified", "High fraud risk score", "Sole reliance on self-reported data", "Grid sensor data conflicts with claims"],
  },
  {
    id: "viu-005",
    projectName: "Nakuru Agroforestry Carbon",
    category: "Carbon / Agriculture",
    region: "Kenya, Rift Valley",
    claimedOutcome: "5,200 tons CO₂ offset",
    verifiedOutcome: "4,980 tons confirmed",
    confidenceScore: 95,
    impactGrade: "A",
    status: "Verified",
    lastVerified: "2026-04-16T06:00:00Z",
    pricePerUnit: 22.10,
    priceUnit: "per ton CO₂",
    priceChange24h: 3.8,
    verificationBreakdown: { dataConsistency: 96, externalSignalMatch: 94, historicalPatternMatch: 93, fraudRiskScore: 2, sourceReliability: 97 },
    dataSources: [
      { name: "Gold Standard", type: "Carbon Registry", reliability: 97, lastUpdated: "2026-04-16", conflicts: false },
      { name: "Copernicus Satellite", type: "Satellite Imagery", reliability: 93, lastUpdated: "2026-04-15", conflicts: false },
      { name: "University of Nairobi", type: "Academic Study", reliability: 90, lastUpdated: "2026-04-01", conflicts: false },
    ],
    priceHistory: [
      { date: "Mar 17", price: 19.5 }, { date: "Mar 24", price: 20.1 }, { date: "Mar 31", price: 20.8 },
      { date: "Apr 07", price: 21.2 }, { date: "Apr 14", price: 21.3 }, { date: "Apr 16", price: 22.1 },
    ],
    riskFlags: [],
  },
  {
    id: "viu-006",
    projectName: "Lamu Sanitation Network",
    category: "Health / Infrastructure",
    region: "Kenya, Coast",
    claimedOutcome: "15,000 people served",
    verifiedOutcome: "12,100 people confirmed",
    confidenceScore: 78,
    impactGrade: "B",
    status: "In Review",
    lastVerified: "2026-04-14T12:00:00Z",
    pricePerUnit: 6.80,
    priceUnit: "per person",
    priceChange24h: 1.1,
    verificationBreakdown: { dataConsistency: 80, externalSignalMatch: 74, historicalPatternMatch: 82, fraudRiskScore: 12, sourceReliability: 78 },
    dataSources: [
      { name: "WHO Field Office", type: "NGO Report", reliability: 85, lastUpdated: "2026-04-13", conflicts: false },
      { name: "County Health Dept", type: "Gov Report", reliability: 72, lastUpdated: "2026-04-10", conflicts: true },
    ],
    priceHistory: [
      { date: "Mar 17", price: 5.9 }, { date: "Mar 24", price: 6.1 }, { date: "Mar 31", price: 6.3 },
      { date: "Apr 07", price: 6.5 }, { date: "Apr 14", price: 6.7 }, { date: "Apr 16", price: 6.8 },
    ],
    riskFlags: ["Minor data conflict between WHO and county reports"],
  },
];

export const marketStats = {
  totalVerifiedVolume: { today: "$2.4M", week: "$14.8M", month: "$58.2M" },
  activeProjects: 247,
  totalCapitalFlowed: "$186.4M",
  avgConfidence: 78.3,
  tickerItems: [
    { symbol: "WATER-KE", price: 12.40, change: 2.3 },
    { symbol: "CARB-MAN", price: 18.90, change: -1.2 },
    { symbol: "EDU-KIS", price: 45.00, change: 0.8 },
    { symbol: "SOLAR-TK", price: 8.20, change: -5.1 },
    { symbol: "CARB-NAK", price: 22.10, change: 3.8 },
    { symbol: "HLTH-LAM", price: 6.80, change: 1.1 },
    { symbol: "WATER-MR", price: 9.60, change: 0.4 },
    { symbol: "EDU-NAI", price: 38.50, change: -0.7 },
  ],
};
