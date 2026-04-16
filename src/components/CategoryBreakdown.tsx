import { mockAssets } from "@/data/mockData";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const statusCounts = mockAssets.reduce<Record<string, number>>((acc, a) => {
  acc[a.status] = (acc[a.status] || 0) + 1;
  return acc;
}, {});

const pieData = Object.entries(statusCounts).map(([name, value]) => ({ name, value }));
const pieColors: Record<string, string> = { Verified: "#00FF88", "In Review": "#F5A623", Flagged: "#E04545" };

const volumeData = [
  { label: "Water", volume: "$18.4M", pct: 31 },
  { label: "Carbon", volume: "$24.1M", pct: 41 },
  { label: "Education", volume: "$8.2M", pct: 14 },
  { label: "Energy", volume: "$4.9M", pct: 9 },
  { label: "Health", volume: "$2.6M", pct: 5 },
];

const CategoryBreakdown = () => (
  <div className="bg-card border border-border rounded-lg p-5">
    <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-4">Verification Status Distribution</h3>
    <div className="flex items-center gap-6">
      <ResponsiveContainer width={120} height={120}>
        <PieChart>
          <Pie data={pieData} dataKey="value" cx="50%" cy="50%" innerRadius={35} outerRadius={55} strokeWidth={0}>
            {pieData.map((entry) => (
              <Cell key={entry.name} fill={pieColors[entry.name] || "#555"} fillOpacity={0.8} />
            ))}
          </Pie>
          <Tooltip contentStyle={{ background: "hsl(220 18% 7%)", border: "1px solid hsl(220 15% 14%)", borderRadius: "6px", fontSize: "11px" }} />
        </PieChart>
      </ResponsiveContainer>
      <div className="flex-1 space-y-2">
        {pieData.map((d) => (
          <div key={d.name} className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: pieColors[d.name] }} />
              <span className="text-muted-foreground">{d.name}</span>
            </div>
            <span className="font-mono text-foreground">{d.value}</span>
          </div>
        ))}
      </div>
    </div>

    <div className="mt-5 pt-4 border-t border-border">
      <h4 className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Volume by Category</h4>
      <div className="space-y-2">
        {volumeData.map((v) => (
          <div key={v.label} className="flex items-center gap-3">
            <span className="w-16 text-xs text-muted-foreground">{v.label}</span>
            <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
              <div className="h-full bg-primary/40 rounded-full" style={{ width: `${v.pct}%` }} />
            </div>
            <span className="font-mono text-xs text-foreground w-16 text-right">{v.volume}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default CategoryBreakdown;
