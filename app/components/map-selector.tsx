import { Link } from "@remix-run/react";
import { useState } from "react";
import { ClientOnly } from "./client-only";
import { type RegionId, regionColors } from "~/constants/colors";
import { RegionMap } from "./region-map";

interface Region {
  id: RegionId;
  name: string;
  bounds: [[number, number], [number, number]];
}

const regions: Region[] = [
  {
    id: "asia",
    name: "アジア",
    bounds: [[0, 60], [60, 150]],
  },
  {
    id: "europe",
    name: "ヨーロッパ",
    bounds: [[35, -10], [70, 40]],
  },
  {
    id: "americas",
    name: "南北アメリカ",
    bounds: [[-55, -130], [70, -30]],
  },
  {
    id: "oceania",
    name: "オセアニア",
    bounds: [[-45, 110], [0, 180]],
  },
  {
    id: "africa",
    name: "アフリカ",
    bounds: [[-35, -20], [35, 50]],
  },
  {
    id: "middle-east",
    name: "中東",
    bounds: [[12, 35], [42, 65]],
  },
];

export function MapSelector() {
  const [activeRegion, setActiveRegion] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      <div className="relative mx-auto aspect-[2/1] w-full max-w-3xl overflow-hidden rounded-2xl bg-blue-50 shadow-lg">
        <ClientOnly>
          <RegionMap
            regions={regions}
            activeRegion={activeRegion}
            setActiveRegion={setActiveRegion}
          />
        </ClientOnly>
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
          </Link>
        ))}
      </div>
    </div>
  );
}
