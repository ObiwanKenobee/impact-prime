import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import DashboardHeader from "@/components/DashboardHeader";
import MarketTicker from "@/components/MarketTicker";
import MarketOverview from "@/components/MarketOverview";
import AssetFeed from "@/components/AssetFeed";
import RegionHeatmap from "@/components/RegionHeatmap";
import ImpactMap from "@/components/ImpactMap";
import PricingEnginePanel from "@/components/PricingEnginePanel";
import CategoryBreakdown from "@/components/CategoryBreakdown";
import SubmitProjectForm from "@/components/SubmitProjectForm";

const Index = () => {
  const [showSubmit, setShowSubmit] = useState(false);

  return (
    <div className="min-h-screen bg-background terminal-grid">
      <DashboardHeader />
      <MarketTicker />
      <main className="max-w-[1600px] mx-auto px-6 py-6 space-y-6">
        {/* Action bar */}
        <div className="flex items-center justify-end">
          <Button onClick={() => setShowSubmit(true)} className="bg-primary text-primary-foreground hover:bg-primary/90 font-mono text-xs">
            <Plus className="h-3.5 w-3.5 mr-1.5" />
            Submit Impact Project
          </Button>
        </div>

        <MarketOverview />

        {/* Map */}
        <ImpactMap />

        {/* Main grid: Feed + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <AssetFeed />
          </div>
          <div className="space-y-6">
            <RegionHeatmap />
            <CategoryBreakdown />
          </div>
        </div>

        {/* Pricing Engine */}
        <PricingEnginePanel />
      </main>

      <SubmitProjectForm open={showSubmit} onClose={() => setShowSubmit(false)} />
    </div>
  );
};

export default Index;
