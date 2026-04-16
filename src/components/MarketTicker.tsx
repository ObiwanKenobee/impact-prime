import { marketStats } from "@/data/mockData";

const MarketTicker = () => {
  const items = marketStats.tickerItems;
  const doubled = [...items, ...items];

  return (
    <div className="w-full overflow-hidden bg-secondary/50 border-b border-border">
      <div className="flex animate-ticker-scroll whitespace-nowrap py-2">
        {doubled.map((item, i) => (
          <div key={i} className="inline-flex items-center gap-2 px-6 font-mono text-xs">
            <span className="text-muted-foreground font-semibold">{item.symbol}</span>
            <span className="text-foreground">${item.price.toFixed(2)}</span>
            <span className={item.change >= 0 ? "text-verified" : "text-flagged"}>
              {item.change >= 0 ? "▲" : "▼"} {Math.abs(item.change).toFixed(1)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketTicker;
