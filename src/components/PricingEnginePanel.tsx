import { mockAssets } from "@/data/mockData";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Cell } from "recharts";

const categoryPrices = mockAssets.reduce<Record<string, { total: number; count: number; avgConf: number }>>((acc, a) => {
  const cat = a.category.split(" / ")[0];
  if (!acc[cat]) acc[cat] = { total: 0, count: 0, avgConf: 0 };
  acc[cat].total += a.pricePerUnit;
  acc[cat].count += 1;
  acc[cat].avgConf += a.confidenceScore;
  return acc;
}, {});

const chartData = Object.entries(categoryPrices).map(([cat, d]) => ({
  category: cat,
  avgPrice: +(d.total / d.count).toFixed(2),
  avgConf: +(d.avgConf / d.count).toFixed(0),
})).sort((a, b) => b.avgPrice - a.avgPrice);

const barColors = ["#00FF88", "#00CC6E", "#00AA5A", "#009950", "#008844"];

const PricingEnginePanel = () => (
  <div className="bg-card border border-border rounded-lg p-5">
    <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Pricing Engine — Avg Unit Price by Category</h3>
    <p className="text-[10px] text-muted-foreground mb-4">Price = Base Value × Confidence × Regional Multiplier × Demand</p>
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={chartData} layout="vertical" margin={{ left: 10 }}>
        <XAxis type="number" tick={{ fontSize: 10, fill: "hsl(215 15% 50%)" }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v}`} />
        <YAxis type="category" dataKey="category" tick={{ fontSize: 10, fill: "hsl(215 15% 50%)" }} axisLine={false} tickLine={false} width={80} />
        <Tooltip
          contentStyle={{ background: "hsl(220 18% 7%)", border: "1px solid hsl(220 15% 14%)", borderRadius: "6px", fontSize: "11px" }}
          formatter={(value: number) => [`$${value.toFixed(2)}`, "Avg Price"]}
        />
        <Bar dataKey="avgPrice" radius={[0, 4, 4, 0]}>
          {chartData.map((_, i) => (
            <Cell key={i} fill={barColors[i % barColors.length]} fillOpacity={0.7} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
    <div className="mt-4 grid grid-cols-2 gap-2">
      {chartData.map((d) => (
        <div key={d.category} className="flex items-center justify-between p-2 bg-secondary/30 rounded text-xs">
          <span className="text-muted-foreground">{d.category}</span>
          <div className="flex items-center gap-2">
            <span className="font-mono text-foreground">${d.avgPrice}</span>
            <span className="font-mono text-verified text-[10px]">conf:{d.avgConf}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default PricingEnginePanel;
