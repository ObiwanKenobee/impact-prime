import { mockAssets } from "@/data/mockData";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const statusStyles: Record<string, string> = {
  Verified: "bg-verified\/10 text-verified border-verified/20",
  "In Review": "bg-review\/10 text-review border-review/20",
  Flagged: "bg-flagged\/10 text-flagged border-flagged/20",
};

const AssetFeed = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      <div className="px-5 py-4 border-b border-border flex items-center justify-between">
        <h2 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
          Impact Asset Feed — Verified Impact Units (VIU)
        </h2>
        <span className="font-mono text-xs text-muted-foreground">{mockAssets.length} assets</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border text-xs text-muted-foreground uppercase tracking-wider">
              <th className="text-left px-5 py-3 font-medium">Project</th>
              <th className="text-left px-4 py-3 font-medium">Category</th>
              <th className="text-right px-4 py-3 font-medium">Confidence</th>
              <th className="text-center px-4 py-3 font-medium">Grade</th>
              <th className="text-right px-4 py-3 font-medium">Price</th>
              <th className="text-right px-4 py-3 font-medium">24h</th>
              <th className="text-center px-4 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {mockAssets.map((asset) => (
              <tr
                key={asset.id}
                onClick={() => navigate(`/project/${asset.id}`)}
                className="border-b border-border/50 hover:bg-secondary/30 cursor-pointer transition-colors"
              >
                <td className="px-5 py-4">
                  <div className="font-medium text-foreground">{asset.projectName}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{asset.region}</div>
                </td>
                <td className="px-4 py-4 text-muted-foreground text-xs">{asset.category}</td>
                <td className="px-4 py-4 text-right font-mono font-semibold">
                  <span className={asset.confidenceScore >= 80 ? "text-verified" : asset.confidenceScore >= 60 ? "text-review" : "text-flagged"}>
                    {asset.confidenceScore}
                  </span>
                </td>
                <td className="px-4 py-4 text-center font-mono font-bold text-foreground">{asset.impactGrade}</td>
                <td className="px-4 py-4 text-right font-mono">
                  <div className="text-foreground">${asset.pricePerUnit.toFixed(2)}</div>
                  <div className="text-xs text-muted-foreground">{asset.priceUnit}</div>
                </td>
                <td className={`px-4 py-4 text-right font-mono text-sm ${asset.priceChange24h >= 0 ? "text-verified" : "text-flagged"}`}>
                  {asset.priceChange24h >= 0 ? "+" : ""}{asset.priceChange24h.toFixed(1)}%
                </td>
                <td className="px-4 py-4 text-center">
                  <Badge variant="outline" className={`text-xs font-mono ${statusStyles[asset.status]}`}>
                    {asset.status}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssetFeed;
