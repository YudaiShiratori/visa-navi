import { memo, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import { useNavigate } from "@remix-run/react";
import type { Country } from "~/data/countries";

const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

type InteractiveMapProps = {
  countries: Country[];
  region: string;
};

export const InteractiveMap = memo(({ countries, region }: InteractiveMapProps) => {
  const navigate = useNavigate();
  const [tooltipContent, setTooltipContent] = useState("");

  // 地域ごとの中心座標とズームレベル
  const regionConfig = {
    asia: { center: [100, 25], zoom: 3 },
    europe: { center: [15, 50], zoom: 4 },
    americas: { center: [-80, 0], zoom: 2 },
    africa: { center: [20, 0], zoom: 2.5 },
    oceania: { center: [140, -25], zoom: 3.5 },
  }[region] || { center: [0, 0], zoom: 1 };

  return (
    <div className="relative h-[600px] w-full rounded-xl bg-white shadow-lg dark:bg-gray-800">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 800,
        }}
      >
        <ZoomableGroup
          center={regionConfig.center}
          zoom={regionConfig.zoom}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const country = countries.find(
                  (c) => c.id.toLowerCase() === geo.properties.name.toLowerCase()
                );

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => {
                      setTooltipContent(country?.name || geo.properties.name);
                    }}
                    onMouseLeave={() => {
                      setTooltipContent("");
                    }}
                    onClick={() => {
                      if (country) {
                        navigate(`/map/${region}/${country.id}`);
                      }
                    }}
                    style={{
                      default: {
                        fill: country
                          ? country.visaRequirement.type === "visa_free"
                            ? "#22c55e"
                            : country.visaRequirement.type === "evisa"
                            ? "#eab308"
                            : "#ef4444"
                          : "#cbd5e1",
                        stroke: "#1f2937",
                        strokeWidth: 0.5,
                        outline: "none",
                      },
                      hover: {
                        fill: country ? "#3b82f6" : "#94a3b8",
                        stroke: "#1f2937",
                        strokeWidth: 0.5,
                        outline: "none",
                        cursor: country ? "pointer" : "default",
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>

      {tooltipContent && (
        <div
          className="pointer-events-none absolute rounded bg-black/75 px-2 py-1 text-sm text-white"
          style={{
            left: `${window.event?.clientX}px`,
            top: `${window.event?.clientY}px`,
            transform: "translate(-50%, -100%)",
          }}
        >
          {tooltipContent}
        </div>
      )}

      <div className="absolute bottom-4 right-4 rounded-lg bg-white/90 p-4 shadow-lg dark:bg-gray-800/90">
        <div className="mb-2 text-sm font-semibold">ビザステータス</div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-green-500" />
            <span className="text-xs">ビザ免除</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <span className="text-xs">電子ビザ</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <span className="text-xs">ビザ必須</span>
          </div>
        </div>
      </div>
    </div>
  );
});

InteractiveMap.displayName = "InteractiveMap"; 