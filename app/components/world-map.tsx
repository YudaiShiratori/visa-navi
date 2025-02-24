import { useEffect, useState } from "react";
import type { RegionId } from "~/constants/colors";
import { regionColors } from "~/constants/colors";
import type { Country } from "~/data/countries";

interface WorldMapProps {
  region: string;
  countries: Country[];
  onCountryClick?: (countryId: string) => void;
}

const regionBounds: Record<RegionId, [[number, number], [number, number]]> = {
  asia: [[15, 70], [50, 150]],
  europe: [[35, -10], [70, 40]],
  americas: [[-55, -130], [70, -30]],
  oceania: [[-45, 110], [0, 180]],
  africa: [[-35, -20], [35, 50]],
  "middle-east": [[12, 35], [42, 65]],
};

export function WorldMap({ region }: WorldMapProps) {
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
  const bounds = regionBounds[region as RegionId];
  const color = regionColors[region as RegionId];

  return (
    <div className="relative h-full w-full">
      <div
        className="absolute inset-0 z-10"
        style={{
          backgroundColor: color.light,
          opacity: 0.3,
          pointerEvents: "none",
        }}
      />
      <MapContainer
        bounds={bounds}
        className="h-full w-full"
        scrollWheelZoom={false}
        zoomControl={false}
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