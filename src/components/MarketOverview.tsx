import { marketStats } from "@/data/mockData";
import { TrendingUp, Activity, DollarSign, Shield } from "lucide-react";

const stats = [
  { label: "Verified Volume (Month)", value: marketStats.totalVerifiedVolume.month, sub: `Today: ${marketStats.totalVerifiedVolume.today}`, icon: TrendingUp, accent: "text-verified" },
  { label: "Active Projects", value: marketStats.activeProjects.toString(), sub: "Under verification", icon: Activity, accent: "text-review" },
  { label: "Total Capital Flowed", value: marketStats.totalCapitalFlowed, sub: "All time", icon: DollarSign, accent: "text-foreground" },
  { label: "Avg Confidence Score", value: `${marketStats.avgConfidence}%`, sub: "Across all projects", icon: Shield, accent: "text-verified" },
];

const MarketOverview = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    {stats.map((s) => (
      <div key={s.label} className="bg-card border border-border rounded-lg p-5 glow-primary hover:border-primary/30 transition-colors">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs text-muted-foreground uppercase tracking-wider">{s.label}</span>
          <s.icon className={`h-4 w-4 ${s.accent}`} />
        </div>
        <div className={`font-mono text-2xl font-bold ${s.accent}`}>{s.value}</div>
        <div className="text-xs text-muted-foreground mt-1">{s.sub}</div>
      </div>
    ))}
  </div>
);

export default MarketOverview;
