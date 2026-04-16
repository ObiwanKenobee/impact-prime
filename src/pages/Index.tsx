import DashboardHeader from "@/components/DashboardHeader";
import MarketTicker from "@/components/MarketTicker";
import MarketOverview from "@/components/MarketOverview";
import AssetFeed from "@/components/AssetFeed";
import RegionHeatmap from "@/components/RegionHeatmap";

const Index = () => (
  <div className="min-h-screen bg-background terminal-grid">
    <DashboardHeader />
    <MarketTicker />
    <main className="max-w-[1600px] mx-auto px-6 py-6 space-y-6">
      <MarketOverview />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <AssetFeed />
        </div>
        <div>
          <RegionHeatmap />
        </div>
      </div>
    </main>
  </div>
);

export default Index;
