import { Hexagon } from "lucide-react";

const DashboardHeader = () => (
  <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
    <div className="max-w-[1600px] mx-auto px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Hexagon className="h-7 w-7 text-primary" />
        <div>
          <h1 className="text-lg font-bold tracking-tight text-foreground">ATLAS SANCTUM</h1>
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Verification & Pricing Terminal</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-verified animate-pulse-glow" />
          <span className="text-xs font-mono text-muted-foreground">LIVE</span>
        </div>
        <span className="text-xs font-mono text-muted-foreground">
          {new Date().toISOString().slice(0, 16).replace("T", " ")} UTC
        </span>
      </div>
    </div>
  </header>
);

export default DashboardHeader;
