import { Link } from "@remix-run/react";
import { useState } from "react";

import { type RegionId, regionColors } from "~/constants/colors";

interface Region {
  id: RegionId;
  name: string;
  coords: string;
}

const regions: Region[] = [
  {
    id: "asia",
    name: "アジア",
    coords: "430,100,650,300",
  },
  {
    id: "europe",
    name: "ヨーロッパ",
    coords: "280,80,420,200",
  },
  {
    id: "americas",
    name: "南北アメリカ",
    coords: "50,50,220,420",
  },
  {
    id: "oceania",
    name: "オセアニア",
    coords: "530,300,680,420",
  },
  {
    id: "africa",
    name: "アフリカ",
    coords: "270,200,400,420",
  },
  {
    id: "middle-east",
    name: "中東",
    coords: "400,180,500,280",
  },
];

export function MapSelector() {
  const [activeRegion, setActiveRegion] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      <div className="relative mx-auto h-[500px] w-full max-w-3xl overflow-hidden rounded-2xl bg-blue-50 shadow-lg">
        <div className="relative h-full w-full">
          <img
            src="/images/world-map.png"
            alt="世界地図"
            className="h-full w-full object-cover transition-opacity duration-300"
            useMap="#worldmap"
          />
          <map name="worldmap">
            {regions.map((region) => (
              <area
                key={region.id}
                shape="rect"
                coords={region.coords}
                href={`/map/${region.id}`}
                alt={region.name}
                onMouseEnter={() => setActiveRegion(region.id)}
                onMouseLeave={() => setActiveRegion(null)}
              />
            ))}
          </map>
          {activeRegion ? (
            <div
              className="animate-fade-in pointer-events-none absolute"
              style={{
                top: regions.find((r) => r.id === activeRegion)?.coords.split(",")[1] + "px",
                left: regions.find((r) => r.id === activeRegion)?.coords.split(",")[0] + "px",
                width: `${
                  parseInt(
                    regions.find((r) => r.id === activeRegion)?.coords.split(",")[2] || "0"
                  ) -
                  parseInt(regions.find((r) => r.id === activeRegion)?.coords.split(",")[0] || "0")
                }px`,
                height: `${
                  parseInt(
                    regions.find((r) => r.id === activeRegion)?.coords.split(",")[3] || "0"
                  ) -
                  parseInt(regions.find((r) => r.id === activeRegion)?.coords.split(",")[1] || "0")
                }px`,
                backgroundColor: regionColors[activeRegion as keyof typeof regionColors].light,
                border: `2px solid ${regionColors[activeRegion as keyof typeof regionColors].main}`,
                borderRadius: "12px",
                boxShadow: `0 0 20px ${regionColors[activeRegion as keyof typeof regionColors].hover}30`,
                transition: "all 0.3s ease-in-out",
              }}
            />
          ) : null}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {regions.map((region) => (
          <Link
            key={region.id}
            to={`/map/${region.id}`}
            className="group relative overflow-hidden rounded-xl p-6 shadow transition-all hover:shadow-lg"
            style={{
              backgroundColor: regionColors[region.id].light,
              borderColor: regionColors[region.id].main,
              borderWidth: activeRegion === region.id ? "2px" : "1px",
            }}
            onMouseEnter={() => setActiveRegion(region.id)}
            onMouseLeave={() => setActiveRegion(null)}
          >
            <div className="relative z-10">
              <h3
                className="font-poppins text-2xl font-bold"
                style={{ color: regionColors[region.id].main }}
              >
                {region.name}
              </h3>
              <p className="font-inter mt-2 text-sm text-gray-600">
                クリックして{region.name}の国を選択
              </p>
            </div>
            <div
              className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-5"
              style={{ backgroundColor: regionColors[region.id].hover }}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
