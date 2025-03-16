"use client";

import { useEffect, useState } from "react";

import { regionColors } from "../constants/colors";

import type { RegionId } from "../constants/colors";

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
  onRegionHover?: (regionId: string | null) => void;
}

export function RegionMap({
  regions,
  activeRegion,
  setActiveRegion,
  onRegionHover,
}: RegionMapProps) {
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
          <div className="h-4 w-4 animate-pulse rounded-full bg-blue-500"></div>
          <div
            className="h-4 w-4 animate-pulse rounded-full bg-purple-500"
            style={{ animationDelay: "0.2s" }}
          ></div>
          <div
            className="h-4 w-4 animate-pulse rounded-full bg-pink-500"
            style={{ animationDelay: "0.4s" }}
          ></div>
          <span className="text-gray-600">地図を読み込み中...</span>
        </div>
      </div>
    );
  }

  const { MapContainer, TileLayer } = Map;

  // カスタムタイルレイヤーのスタイル
  const mapStyle = {
    height: "100%",
    width: "100%",
    opacity: 0.5,
  };

  return (
    <MapContainer
      center={[20, 0]}
      zoom={2}
      style={mapStyle}
      zoomControl={false}
      attributionControl={false}
      scrollWheelZoom={false}
      dragging={false}
      doubleClickZoom={false}
      touchZoom={false}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
      />
      <RegionHighlighter
        regions={regions}
        activeRegion={activeRegion}
        setActiveRegion={setActiveRegion}
        onRegionHover={onRegionHover}
        useMap={Map.useMap}
      />
    </MapContainer>
  );
}

// 地域ハイライト用のコンポーネント
function RegionHighlighter({
  regions,
  activeRegion,
  setActiveRegion,
  onRegionHover,
  useMap,
}: {
  regions: Region[];
  activeRegion: string | null;
  setActiveRegion: (region: string | null) => void;
  onRegionHover?: (regionId: string | null) => void;
  useMap: any;
}) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    // アクティブな地域があれば、その地域にズーム
    if (activeRegion) {
      const region = regions.find((r) => r.id === activeRegion);
      if (region) {
        try {
          map.fitBounds(region.bounds);
        } catch (error) {
          console.error("Error fitting bounds:", error);
        }
      }
    } else {
      // アクティブな地域がなければ、世界全体を表示
      try {
        map.setView([20, 0], 2);
      } catch (error) {
        console.error("Error setting view:", error);
      }
    }
  }, [activeRegion, map, regions]);

  // マウスイベントハンドラー
  const handleMouseEnter = (regionId: string) => {
    setActiveRegion(regionId);
    if (onRegionHover) onRegionHover(regionId);
  };

  const handleMouseLeave = () => {
    setActiveRegion(null);
    if (onRegionHover) onRegionHover(null);
  };

  // 地域ごとに矩形を描画
  return (
    <>
      {regions.map((region) => {
        const color = regionColors[region.id].main;
        const isActive = activeRegion === region.id;

        return (
          <div
            key={region.id}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
              zIndex: isActive ? 1000 : 500,
            }}
          >
            {/* 地域の矩形 */}
            <div
              style={{
                position: "absolute",
                border: `2px solid ${color}`,
                backgroundColor: isActive ? `${color}30` : "transparent",
                borderRadius: "4px",
                transition: "all 0.3s ease",
                pointerEvents: "auto",
                cursor: "pointer",
              }}
              onMouseEnter={() => handleMouseEnter(region.id)}
              onMouseLeave={handleMouseLeave}
            />
          </div>
        );
      })}
    </>
  );
}
