"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

import { ClientOnly } from "./ClientOnly";
import { RegionMap } from "./RegionMap";
import { type RegionId, regionColors } from "../constants/colors";
import { sendGAEvent } from "../utils/analytics";

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
    id: "north-america",
    name: "北米",
    bounds: [
      [15, -130],
      [70, -30],
    ],
    description: "アメリカ、カナダなど広大な自然と都市が魅力の地域",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  },
  {
    id: "south-america",
    name: "南米",
    bounds: [
      [-55, -80],
      [15, -30],
    ],
    description: "ブラジル、ペルー、アルゼンチンなど多様な文化と自然の地域",
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
  {
    id: "middle-east",
    name: "中東",
    bounds: [
      [10, 30],
      [40, 65],
    ],
    description: "アラブ首長国連邦、サウジアラビアなど歴史と現代が融合する地域",
    icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
  },
];

export function MapSelector() {
  const [activeRegion, setActiveRegion] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // 画面サイズの変更を検知
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // 初期チェック
    checkIfMobile();

    // リサイズイベントのリスナー
    window.addEventListener("resize", checkIfMobile);

    // クリーンアップ
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const handleRegionSelect = (regionId: string, regionName: string) => {
    // 地域選択イベントを送信
    sendGAEvent("select_region", {
      region_id: regionId,
      region_name: regionName,
    });
  };

  return (
    <div className="space-y-8 md:space-y-12">
      <div className="relative z-10 mx-auto aspect-[2/1] w-full max-w-4xl overflow-hidden rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-lg md:rounded-3xl md:shadow-xl">
        <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center bg-white/50 backdrop-blur-sm">
          <div className="mx-4 w-full max-w-md rounded-xl bg-white/80 p-4 text-center shadow-lg md:p-8">
            <h3 className="mb-2 text-lg font-bold text-gray-800 md:text-xl">
              {activeRegion
                ? regions.find((r) => r.id === activeRegion)?.name + "を選択"
                : "地域を選択してください"}
            </h3>
            <p className="text-xs text-gray-600 md:text-sm">
              {activeRegion
                ? regions.find((r) => r.id === activeRegion)?.description
                : isMobile
                  ? "下のカードから地域を選択してください"
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

      <div className="grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 sm:gap-6 md:px-0 lg:grid-cols-3">
        {regions.map((region) => (
          <Link
            key={region.id}
            href={`/region/${region.id}`}
            className="group relative transform overflow-hidden rounded-xl p-4 transition-all duration-300 hover:-translate-y-1 md:p-6 md:hover:-translate-y-2"
            style={{
              backgroundColor: `${regionColors[region.id].light}30`,
              borderColor: regionColors[region.id].main,
              borderWidth: activeRegion === region.id ? "2px" : "1px",
              boxShadow:
                activeRegion === region.id
                  ? `0 10px 25px -5px ${regionColors[region.id].main}30`
                  : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            }}
            onMouseEnter={() => setActiveRegion(region.id)}
            onMouseLeave={() => setActiveRegion(null)}
            onClick={() => handleRegionSelect(region.id, region.name)}
          >
            <div className="absolute right-0 top-0 h-16 w-16 rounded-bl-full bg-gradient-to-bl from-white/10 to-transparent md:h-24 md:w-24"></div>

            <div className="relative z-10">
              <div
                className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl md:mb-4 md:h-14 md:w-14"
                style={{ backgroundColor: `${regionColors[region.id].main}20` }}
              >
                <svg
                  className="h-6 w-6 md:h-8 md:w-8"
                  style={{ color: regionColors[region.id].main }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d={region.icon}
                  />
                </svg>
              </div>

              <h3
                className="mb-1 text-xl font-bold md:mb-2 md:text-2xl"
                style={{ color: regionColors[region.id].main }}
              >
                {region.name}
              </h3>
              <p className="mb-3 text-xs text-gray-600 md:mb-4 md:text-sm">{region.description}</p>

              <div
                className="flex items-center text-xs font-medium md:text-sm"
                style={{ color: regionColors[region.id].main }}
              >
                選択する
                <svg
                  className="ml-1 h-3 w-3 transform transition-transform group-hover:translate-x-1 md:h-4 md:w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
