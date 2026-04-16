import { useState, useMemo } from "react";
import { mockAssets, type ImpactAsset } from "@/data/mockData";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { ChevronUp, ChevronDown, Filter } from "lucide-react";

const statusStyles: Record<string, string> = {
  Verified: "bg-verified\/10 text-verified border-verified/20",
  "In Review": "bg-review\/10 text-review border-review/20",
  Flagged: "bg-flagged\/10 text-flagged border-flagged/20",
};

const categories = ["All", ...new Set(mockAssets.map((a) => a.category))];
const statuses = ["All", "Verified", "In Review", "Flagged"];

type SortKey = "confidenceScore" | "pricePerUnit" | "priceChange24h" | "projectName";
type SortDir = "asc" | "desc";

const AssetFeed = () => {
  const navigate = useNavigate();
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortKey, setSortKey] = useState<SortKey>("confidenceScore");
  const [sortDir, setSortDir] = useState<SortDir>("desc");

  const toggleSort = (key: SortKey) => {
    if (sortKey === key) setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    else { setSortKey(key); setSortDir("desc"); }
  };

  const filtered = useMemo(() => {
    let list = [...mockAssets];
    if (categoryFilter !== "All") list = list.filter((a) => a.category === categoryFilter);
    if (statusFilter !== "All") list = list.filter((a) => a.status === statusFilter);
    list.sort((a, b) => {
      const av = a[sortKey], bv = b[sortKey];
      if (typeof av === "number" && typeof bv === "number") return sortDir === "asc" ? av - bv : bv - av;
      return sortDir === "asc" ? String(av).localeCompare(String(bv)) : String(bv).localeCompare(String(av));
    });
    return list;
  }, [categoryFilter, statusFilter, sortKey, sortDir]);

  const SortIcon = ({ col }: { col: SortKey }) => {
    if (sortKey !== col) return <ChevronDown className="h-3 w-3 opacity-30" />;
    return sortDir === "asc" ? <ChevronUp className="h-3 w-3 text-primary" /> : <ChevronDown className="h-3 w-3 text-primary" />;
  };

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      {/* Header + Filters */}
      <div className="px-5 py-4 border-b border-border space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
            Impact Asset Feed — Verified Impact Units (VIU)
          </h2>
          <span className="font-mono text-xs text-muted-foreground">{filtered.length} assets</span>
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          <Filter className="h-3.5 w-3.5 text-muted-foreground" />
          <div className="flex gap-1.5">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategoryFilter(c)}
                className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                  categoryFilter === c ? "bg-primary/20 text-primary border border-primary/30" : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="h-4 w-px bg-border" />
          <div className="flex gap-1.5">
            {statuses.map((s) => (
              <button
                key={s}
                onClick={() => setStatusFilter(s)}
                className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                  statusFilter === s ? "bg-primary/20 text-primary border border-primary/30" : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border text-xs text-muted-foreground uppercase tracking-wider">
              <th className="text-left px-5 py-3 font-medium cursor-pointer select-none" onClick={() => toggleSort("projectName")}>
                <span className="inline-flex items-center gap-1">Project <SortIcon col="projectName" /></span>
              </th>
              <th className="text-left px-4 py-3 font-medium">Category</th>
              <th className="text-right px-4 py-3 font-medium cursor-pointer select-none" onClick={() => toggleSort("confidenceScore")}>
                <span className="inline-flex items-center gap-1 justify-end">Confidence <SortIcon col="confidenceScore" /></span>
              </th>
              <th className="text-center px-4 py-3 font-medium">Grade</th>
              <th className="text-right px-4 py-3 font-medium cursor-pointer select-none" onClick={() => toggleSort("pricePerUnit")}>
                <span className="inline-flex items-center gap-1 justify-end">Price <SortIcon col="pricePerUnit" /></span>
              </th>
              <th className="text-right px-4 py-3 font-medium cursor-pointer select-none" onClick={() => toggleSort("priceChange24h")}>
                <span className="inline-flex items-center gap-1 justify-end">24h <SortIcon col="priceChange24h" /></span>
              </th>
              <th className="text-center px-4 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr><td colSpan={7} className="text-center py-8 text-muted-foreground text-sm">No assets match filters</td></tr>
            ) : (
              filtered.map((asset) => (
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
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssetFeed;
