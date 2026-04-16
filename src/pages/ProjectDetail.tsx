import { useParams, useNavigate } from "react-router-dom";
import { mockAssets } from "@/data/mockData";
import DashboardHeader from "@/components/DashboardHeader";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, AlertTriangle, Shield, Database, DollarSign } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

const statusStyles: Record<string, string> = {
  Verified: "bg-verified\/10 text-verified border-verified/20",
  "In Review": "bg-review\/10 text-review border-review/20",
  Flagged: "bg-flagged\/10 text-flagged border-flagged/20",
};

const ScoreBar = ({ label, value, max = 100 }: { label: string; value: number; max?: number }) => {
  const pct = (value / max) * 100;
  const color = value >= 80 ? "bg-verified" : value >= 60 ? "bg-review" : "bg-flagged";
  return (
    <div className="flex items-center gap-3">
      <span className="w-44 text-xs text-muted-foreground">{label}</span>
      <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${pct}%` }} />
      </div>
      <span className="font-mono text-xs w-10 text-right text-foreground">{value}</span>
    </div>
  );
};

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const asset = mockAssets.find((a) => a.id === id);

  if (!asset) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Asset not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background terminal-grid">
      <DashboardHeader />
      <main className="max-w-[1600px] mx-auto px-6 py-6 space-y-6">
        {/* Back + Title */}
        <div className="flex items-center gap-4">
          <button onClick={() => navigate("/")} className="text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-5 w-5" />
          </button>
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <h1 className="text-xl font-bold text-foreground">{asset.projectName}</h1>
              <Badge variant="outline" className={`text-xs font-mono ${statusStyles[asset.status]}`}>{asset.status}</Badge>
            </div>
            <p className="text-sm text-muted-foreground">{asset.category} · {asset.region} · {asset.id.toUpperCase()}</p>
          </div>
          <div className="text-right">
            <div className="font-mono text-2xl font-bold text-foreground">${asset.pricePerUnit.toFixed(2)}</div>
            <div className={`font-mono text-sm ${asset.priceChange24h >= 0 ? "text-verified" : "text-flagged"}`}>
              {asset.priceChange24h >= 0 ? "+" : ""}{asset.priceChange24h.toFixed(1)}% (24h)
            </div>
          </div>
        </div>

        {/* Top row: Outcome + Score + Price Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Outcome Summary */}
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-4 w-4 text-primary" />
              <h2 className="text-xs uppercase tracking-wider text-muted-foreground">Outcome Summary</h2>
            </div>
            <div className="space-y-4">
              <div>
                <div className="text-xs text-muted-foreground">Claimed Outcome</div>
                <div className="font-mono text-sm text-foreground mt-1">{asset.claimedOutcome}</div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Verified Outcome</div>
                <div className="font-mono text-sm text-verified mt-1">{asset.verifiedOutcome}</div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Confidence / Grade</div>
                <div className="flex items-center gap-3 mt-1">
                  <span className={`font-mono text-2xl font-bold ${asset.confidenceScore >= 80 ? "text-verified" : asset.confidenceScore >= 60 ? "text-review" : "text-flagged"}`}>
                    {asset.confidenceScore}
                  </span>
                  <span className="font-mono text-lg text-foreground">{asset.impactGrade}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Verification Breakdown */}
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-2 mb-4">
              <Database className="h-4 w-4 text-primary" />
              <h2 className="text-xs uppercase tracking-wider text-muted-foreground">Verification Breakdown</h2>
            </div>
            <div className="space-y-3">
              <ScoreBar label="Data Consistency" value={asset.verificationBreakdown.dataConsistency} />
              <ScoreBar label="External Signal Match" value={asset.verificationBreakdown.externalSignalMatch} />
              <ScoreBar label="Historical Pattern Match" value={asset.verificationBreakdown.historicalPatternMatch} />
              <ScoreBar label="Source Reliability" value={asset.verificationBreakdown.sourceReliability} />
              <ScoreBar label="Fraud Risk (inverted)" value={100 - asset.verificationBreakdown.fraudRiskScore} />
            </div>
          </div>

          {/* Price Chart */}
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-2 mb-4">
              <DollarSign className="h-4 w-4 text-primary" />
              <h2 className="text-xs uppercase tracking-wider text-muted-foreground">Price History (30d)</h2>
            </div>
            <ResponsiveContainer width="100%" height={180}>
              <LineChart data={asset.priceHistory}>
                <XAxis dataKey="date" tick={{ fontSize: 10, fill: "hsl(215 15% 50%)" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 10, fill: "hsl(215 15% 50%)" }} axisLine={false} tickLine={false} domain={["auto", "auto"]} />
                <Tooltip
                  contentStyle={{ background: "hsl(220 18% 7%)", border: "1px solid hsl(220 15% 14%)", borderRadius: "6px", fontSize: "12px" }}
                  labelStyle={{ color: "hsl(215 15% 50%)" }}
                  itemStyle={{ color: "hsl(155 100% 50%)" }}
                />
                <Line type="monotone" dataKey="price" stroke="hsl(155 100% 50%)" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bottom row: Data Sources + Risk Flags */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Data Sources */}
          <div className="bg-card border border-border rounded-lg p-5">
            <h2 className="text-xs uppercase tracking-wider text-muted-foreground mb-4">Data Source Transparency</h2>
            <div className="space-y-3">
              {asset.dataSources.map((ds, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-secondary/30 rounded-md">
                  <div>
                    <div className="text-sm text-foreground font-medium">{ds.name}</div>
                    <div className="text-xs text-muted-foreground">{ds.type} · Updated {ds.lastUpdated}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    {ds.conflicts && (
                      <Badge variant="outline" className="text-[10px] bg-flagged\/10 text-flagged border-flagged/20">CONFLICT</Badge>
                    )}
                    <span className={`font-mono text-sm font-semibold ${ds.reliability >= 80 ? "text-verified" : ds.reliability >= 60 ? "text-review" : "text-flagged"}`}>
                      {ds.reliability}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Risk Flags */}
          <div className="bg-card border border-border rounded-lg p-5">
            <h2 className="text-xs uppercase tracking-wider text-muted-foreground mb-4">Risk Flags</h2>
            {asset.riskFlags.length === 0 ? (
              <div className="flex items-center gap-2 p-4 bg-verified/5 rounded-md border border-verified/10">
                <Shield className="h-4 w-4 text-verified" />
                <span className="text-sm text-verified">No risk flags detected</span>
              </div>
            ) : (
              <div className="space-y-2">
                {asset.riskFlags.map((flag, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-flagged/5 rounded-md border border-flagged/10">
                    <AlertTriangle className="h-4 w-4 text-flagged mt-0.5 shrink-0" />
                    <span className="text-sm text-foreground">{flag}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;
