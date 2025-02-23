import { useNavigate } from "@remix-run/react";
import { memo, useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";

import { visaStatusColors } from "~/constants/colors";

import type { Country } from "~/data/countries";

const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

interface InteractiveMapProps {
  countries: Country[];
  region: string;
}

interface MousePosition {
  x: number;
  y: number;
}

export const InteractiveMap = memo(({ countries, region }: InteractiveMapProps) => {
  const navigate = useNavigate();
  const [tooltipContent, setTooltipContent] = useState("");
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

  const regionConfig = {
    asia: { center: [100, 25], zoom: 3 },
    europe: { center: [15, 50], zoom: 4 },
    americas: { center: [-80, 0], zoom: 2 },
    africa: { center: [20, 0], zoom: 2.5 },
    oceania: { center: [140, -25], zoom: 3.5 },
  }[region] || { center: [0, 0], zoom: 1 };

  // マウス位置の更新
  const handleMouseMove = (e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative mx-auto h-[500px] w-full max-w-3xl rounded-xl bg-white shadow-lg">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 800,
        }}
      >
        <ZoomableGroup center={regionConfig.center as [number, number]} zoom={regionConfig.zoom}>
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
                          ? visaStatusColors[country.visaRequirement.type].main
                          : "#e2e8f0",
                        stroke: "#94a3b8",
                        strokeWidth: 0.5,
                        outline: "none",
                      },
                      hover: {
                        fill: country
                          ? visaStatusColors[country.visaRequirement.type].hover
                          : "#cbd5e1",
                        stroke: "#94a3b8",
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

      {tooltipContent ? (
        <div
          className="pointer-events-none absolute rounded bg-black/75 px-2 py-1 text-sm text-white"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
            transform: "translate(-50%, -100%)",
          }}
        >
          {tooltipContent}
        </div>
      ) : null}

      <div className="absolute bottom-4 right-4 rounded-lg bg-white p-4 shadow-lg">
        <div className="mb-2 text-sm font-semibold text-gray-700">ビザステータス</div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: visaStatusColors.visa_free.main }}
            />
            <span className="text-xs text-gray-600">ビザ免除</span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: visaStatusColors.evisa.main }}
            />
            <span className="text-xs text-gray-600">電子ビザ</span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: visaStatusColors.visa_required.main }}
            />
            <span className="text-xs text-gray-600">ビザ必須</span>
          </div>
        </div>
      </div>
    </div>
  );
});

InteractiveMap.displayName = "InteractiveMap";
