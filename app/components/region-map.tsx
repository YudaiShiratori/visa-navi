import { useEffect, useState } from "react";

import { regionColors } from "~/constants/colors";

import type { RegionId } from "~/constants/colors";

interface Region {
  id: RegionId;
  name: string;
  bounds: [[number, number], [number, number]];
  description?: string;
  icon?: string;
}

interface RegionMapProps {
  regions: Region[];
  activeRegion: string | null;
  setActiveRegion: (region: string | null) => void;
}

export function RegionMap({ regions, activeRegion, setActiveRegion }: RegionMapProps) {
  const [Map, setMap] = useState<{
    MapContainer: any;
    TileLayer: any;
    GeoJSON: any;
    useMap: any;
  } | null>(null);

  useEffect(() => {
    import("react-leaflet").then(({ MapContainer, TileLayer, GeoJSON, useMap }) => {
      setMap({ MapContainer, TileLayer, GeoJSON, useMap });
    });
  }, []);

  if (!Map) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
          <div className="w-4 h-4 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
          <div className="w-4 h-4 bg-pink-500 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
          <span className="text-gray-600">地図を読み込み中...</span>
        </div>
      </div>
    );
  }

  const { MapContainer, TileLayer } = Map;

  // カスタムタイルレイヤーのスタイル
  const mapStyle = "https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png";

  return (
    <div className="relative h-full w-full">
      <div
        className="absolute inset-0 z-10 transition-colors duration-300"
        style={{
          backgroundColor: activeRegion
            ? regionColors[activeRegion as RegionId].light
            : "transparent",
          opacity: 0.3,
          pointerEvents: "none",
        }}
      />
      <MapContainer
        center={[20, 0]}
        zoom={2}
        className="h-full w-full"
        scrollWheelZoom={false}
        zoomControl={false}
        attributionControl={false}
        onMouseOver={(e: { latlng: { lat: any; lng: any } }) => {
          const lat = e.latlng.lat;
          const lng = e.latlng.lng;

          const region = regions.find((r) => {
            const [[south, west], [north, east]] = r.bounds;
            return lat >= south && lat <= north && lng >= west && lng <= east;
          });

          if (region) {
            setActiveRegion(region.id);
          }
        }}
        onMouseOut={() => setActiveRegion(null)}
      >
        <TileLayer
          url={mapStyle}
          attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
          subdomains="abcd"
        />
      </MapContainer>
    </div>
  );
}
