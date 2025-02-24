import { useEffect, useState } from "react";

import { regionColors } from "~/constants/colors";

import type { RegionId } from "~/constants/colors";

interface Region {
  id: RegionId;
  name: string;
  bounds: [[number, number], [number, number]];
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
  } | null>(null);

  useEffect(() => {
    import("react-leaflet").then(({ MapContainer, TileLayer }) => {
      setMap({ MapContainer, TileLayer });
    });
  }, []);

  if (!Map) {
    return (
      <div className="flex h-full items-center justify-center">
        <p>Loading map...</p>
      </div>
    );
  }

  const { MapContainer, TileLayer } = Map;

  return (
    <div className="relative h-full w-full">
      <div
        className="absolute inset-0 z-10"
        style={{
          backgroundColor: activeRegion
            ? regionColors[activeRegion as RegionId].light
            : "transparent",
          opacity: 0.3,
          pointerEvents: "none",
          transition: "background-color 0.3s ease",
        }}
      />
      <MapContainer
        center={[20, 0]}
        zoom={2}
        className="h-full w-full"
        scrollWheelZoom={false}
        zoomControl={false}
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
          url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager_labels_under/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
          subdomains="abcd"
        />
      </MapContainer>
    </div>
  );
}
