const regions = [
  { name: "Nairobi", projects: 42, capital: "$28.1M", intensity: 95 },
  { name: "Coast (Mombasa/Lamu)", projects: 31, capital: "$19.4M", intensity: 72 },
  { name: "Western (Kisumu)", projects: 28, capital: "$15.2M", intensity: 65 },
  { name: "Rift Valley", projects: 24, capital: "$12.8M", intensity: 55 },
  { name: "Northern (Turkana)", projects: 15, capital: "$8.1M", intensity: 35 },
  { name: "Central", projects: 19, capital: "$10.6M", intensity: 48 },
];

const RegionHeatmap = () => (
  <div className="bg-card border border-border rounded-lg p-5">
    <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-4">Kenya Regional Activity</h3>
    <div className="space-y-3">
      {regions.map((r) => (
        <div key={r.name} className="flex items-center gap-3">
          <div className="w-32 text-xs text-muted-foreground truncate">{r.name}</div>
          <div className="flex-1 h-6 bg-secondary rounded-sm overflow-hidden relative">
            <div
              className="h-full rounded-sm transition-all"
              style={{
                width: `${r.intensity}%`,
                background: `linear-gradient(90deg, hsl(155 100% 50% / 0.2), hsl(155 100% 50% / ${r.intensity / 100 * 0.6}))`,
              }}
            />
          </div>
          <div className="text-right w-20">
            <div className="font-mono text-xs text-foreground">{r.capital}</div>
            <div className="text-[10px] text-muted-foreground">{r.projects} projects</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default RegionHeatmap;
