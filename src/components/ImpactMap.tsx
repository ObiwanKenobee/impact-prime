import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { mockAssets } from "@/data/mockData";

const projectCoords: Record<string, [number, number]> = {
  "viu-001": [-1.2921, 36.8219],   // Nairobi
  "viu-002": [-4.0435, 39.6682],   // Mombasa
  "viu-003": [-0.0917, 34.7680],   // Kisumu
  "viu-004": [3.1166, 35.5966],    // Turkana
  "viu-005": [-0.3031, 36.0800],   // Nakuru
  "viu-006": [-2.2717, 40.9020],   // Lamu
};

const statusColor: Record<string, string> = {
  Verified: "#00FF88",
  "In Review": "#F5A623",
  Flagged: "#E04545",
};

const ImpactMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    const map = L.map(mapRef.current, {
      center: [0.5, 37.5],
      zoom: 6,
      zoomControl: false,
      attributionControl: false,
    });

    L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
      maxZoom: 19,
    }).addTo(map);

    L.control.zoom({ position: "bottomright" }).addTo(map);

    mockAssets.forEach((asset) => {
      const coords = projectCoords[asset.id];
      if (!coords) return;
      const color = statusColor[asset.status] || "#888";

      const marker = L.circleMarker(coords, {
        radius: Math.max(6, asset.confidenceScore / 8),
        fillColor: color,
        color: color,
        weight: 2,
        opacity: 0.8,
        fillOpacity: 0.35,
      }).addTo(map);

      marker.bindPopup(`
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #e0e0e0; background: #0d1117; padding: 8px; border-radius: 6px; min-width: 180px;">
          <div style="font-weight: 700; font-size: 12px; margin-bottom: 4px;">${asset.projectName}</div>
          <div style="color: #8b949e; margin-bottom: 6px;">${asset.category}</div>
          <div style="display: flex; justify-content: space-between;">
            <span>Confidence:</span>
            <span style="color: ${color}; font-weight: 600;">${asset.confidenceScore}</span>
          </div>
          <div style="display: flex; justify-content: space-between;">
            <span>Price:</span>
            <span>$${asset.pricePerUnit.toFixed(2)}</span>
          </div>
          <div style="display: flex; justify-content: space-between;">
            <span>Status:</span>
            <span style="color: ${color};">${asset.status}</span>
          </div>
        </div>
      `, { className: "dark-popup", closeButton: false });
    });

    mapInstance.current = map;

    return () => {
      map.remove();
      mapInstance.current = null;
    };
  }, []);

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      <div className="px-5 py-3 border-b border-border flex items-center justify-between">
        <h3 className="text-xs uppercase tracking-wider text-muted-foreground">Live Impact Map — Kenya</h3>
        <div className="flex items-center gap-4">
          {Object.entries(statusColor).map(([status, color]) => (
            <div key={status} className="flex items-center gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: color }} />
              <span className="text-[10px] text-muted-foreground">{status}</span>
            </div>
          ))}
        </div>
      </div>
      <div ref={mapRef} style={{ height: 380 }} />
    </div>
  );
};

export default ImpactMap;
