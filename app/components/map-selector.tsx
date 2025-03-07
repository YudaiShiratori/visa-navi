import { Link } from "@remix-run/react";
import { useState } from "react";

import { type RegionId, regionColors } from "~/constants/colors";

import { ClientOnly } from "./client-only";
import { RegionMap } from "./region-map";

interface Region {
  id: RegionId;
  name: string;
  bounds: [[number, number], [number, number]];
  description: string;
  icon: string;
}

const regions: Region[] = [
  {
    id: "asia",
    name: "アジア",
    bounds: [
      [0, 35],
      [55, 150],
    ],
    description: "タイ、ベトナム、インドネシア、中東諸国など多様な文化と歴史の地域",
    icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
  },
  {
    id: "europe",
    name: "ヨーロッパ",
    bounds: [
      [35, -10],
      [70, 40],
    ],
    description: "フランス、イタリア、スペインなど歴史的な観光地が豊富な地域",
    icon: "M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
  },
  {
    id: "americas",
    name: "南北アメリカ",
    bounds: [
      [-55, -130],
      [70, -30],
    ],
    description: "アメリカ、カナダ、ブラジルなど広大な自然と都市が魅力の地域",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  },
  {
    id: "oceania",
    name: "オセアニア",
    bounds: [
      [-45, 110],
      [0, 180],
    ],
    description: "オーストラリア、ニュージーランドなど美しい自然が広がる地域",
    icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
  },
  {
    id: "africa",
    name: "アフリカ",
    bounds: [
      [-35, -20],
      [35, 50],
    ],
    description: "エジプト、モロッコ、南アフリカなど多様な文化と自然の地域",
    icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
  },
];

export function MapSelector() {
  const [activeRegion, setActiveRegion] = useState<string | null>(null);

  return (
    <div className="space-y-12">
      <div className="relative mx-auto aspect-[2/1] w-full max-w-4xl overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50 shadow-xl border border-blue-100">
        <div className="absolute inset-0 bg-white/50 backdrop-blur-sm z-10 flex items-center justify-center pointer-events-none">
          <div className="text-center p-8 bg-white/80 rounded-xl shadow-lg max-w-md">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {activeRegion 
                ? regions.find(r => r.id === activeRegion)?.name + "を選択" 
                : "地域を選択してください"}
            </h3>
            <p className="text-gray-600 text-sm">
              {activeRegion 
                ? regions.find(r => r.id === activeRegion)?.description
                : "地図上の地域にカーソルを合わせるか、下のカードから選択してください"}
            </p>
          </div>
        </div>
        <ClientOnly>
          <RegionMap
            regions={regions}
            activeRegion={activeRegion}
            setActiveRegion={setActiveRegion}
          />
        </ClientOnly>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {regions.map((region) => (
          <Link
            key={region.id}
            to={`/map/${region.id}`}
            className="group relative overflow-hidden rounded-xl p-6 transition-all duration-300 transform hover:-translate-y-2"
            style={{
              backgroundColor: `${regionColors[region.id].light}30`,
              borderColor: regionColors[region.id].main,
              borderWidth: activeRegion === region.id ? "2px" : "1px",
              boxShadow: activeRegion === region.id 
                ? `0 10px 25px -5px ${regionColors[region.id].main}30`
                : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            }}
            onMouseEnter={() => setActiveRegion(region.id)}
            onMouseLeave={() => setActiveRegion(null)}
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/10 to-transparent rounded-bl-full"></div>
            
            <div className="relative z-10">
              <div className="w-14 h-14 mb-4 rounded-xl flex items-center justify-center" 
                style={{ backgroundColor: `${regionColors[region.id].main}20` }}>
                <svg 
                  className="w-8 h-8" 
                  style={{ color: regionColors[region.id].main }}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={region.icon} />
                </svg>
              </div>
              
              <h3
                className="text-2xl font-bold mb-2"
                style={{ color: regionColors[region.id].main }}
              >
                {region.name}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {region.description}
              </p>
              
              <div className="flex items-center text-sm font-medium" 
                style={{ color: regionColors[region.id].main }}>
                選択する
                <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" 
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
