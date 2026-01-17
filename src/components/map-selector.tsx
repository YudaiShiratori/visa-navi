"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

import { type RegionId, regionColors } from "../constants/colors";
import { getAllCountries } from "../data/regions";
import { sendGAEvent } from "../utils/analytics";

// 国データを取得
const countries = getAllCountries();
interface Region {
  id: RegionId;
  name: string;
  bounds: [[number, number], [number, number]];
  description: string;
  icon: string;
  countryCount?: number;
}
// 地域ごとの国の数を計算
const getRegionWithCountryCounts = (): Region[] => {
  const countryCounts: Record<string, number> = {};
  for (const country of countries) {
    const region = country.region;
    countryCounts[region] = (countryCounts[region] || 0) + 1;
  }
  return regions.map((region) => ({
    ...region,
    countryCount: countryCounts[region.id] || 0,
  }));
};
const regions: Region[] = [
  {
    id: "asia",
    name: "アジア",
    bounds: [
      [0, 35],
      [55, 150],
    ],
    description: "タイ、ベトナム、インドネシアなど多様な文化と歴史の地域",
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
    id: "north_america",
    name: "北米",
    bounds: [
      [15, -130],
      [70, -30],
    ],
    description: "アメリカ、カナダなど広大な自然と都市が魅力の地域",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  },
  {
    id: "south_america",
    name: "南米",
    bounds: [
      [-55, -80],
      [15, -30],
    ],
    description: "ブラジル、ペルー、アルゼンチンなど多様な文化と自然の地域",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  },
  {
    id: "middle_east",
    name: "中東",
    bounds: [
      [10, 30],
      [40, 65],
    ],
    description: "アラブ首長国連邦、サウジアラビアなど歴史と現代が融合する地域",
    icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
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
    id: "oceania",
    name: "オセアニア",
    bounds: [
      [-45, 110],
      [0, 180],
    ],
    description: "オーストラリア、ニュージーランドなど美しい自然が広がる地域",
    icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
  },
];
export function MapSelector() {
  const [activeRegion, setActiveRegion] = useState<string | null>(null);
  const regionsWithCounts = getRegionWithCountryCounts();
  const handleRegionSelect = (regionId: string, regionName: string) => {
    // 地域選択イベントを送信
    sendGAEvent("select_region", {
      region_id: regionId,
      region_name: regionName,
    });
  };
  return (
    <div className="space-y-8 md:space-y-12">
      {/* 地域カード */}
      <div className="grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 sm:gap-6 md:px-0 lg:grid-cols-3">
        {regionsWithCounts.map((region) => (
          <motion.div
            key={region.id}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              className="group relative flex h-full flex-col overflow-hidden rounded-xl p-4 transition-all duration-300 md:p-6"
              href={`/region/${region.id}`}
              onClick={() => handleRegionSelect(region.id, region.name)}
              onMouseEnter={() => setActiveRegion(region.id)}
              onMouseLeave={() => setActiveRegion(null)}
              style={{
                backgroundColor: `${regionColors[region.id].light}30`,
                borderColor: regionColors[region.id].main,
                borderWidth: activeRegion === region.id ? "2px" : "1px",
                boxShadow:
                  activeRegion === region.id
                    ? `0 10px 25px -5px ${regionColors[region.id].main}30`
                    : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="absolute top-0 right-0 h-16 w-16 rounded-bl-full bg-gradient-to-bl from-white/10 to-transparent md:h-24 md:w-24" />
              <div className="relative z-10 flex flex-grow flex-col">
                <h3
                  className="mb-1 font-bold text-xl md:mb-2 md:text-2xl"
                  style={{ color: regionColors[region.id].main }}
                >
                  {region.name}
                </h3>
                <p className="mb-3 text-gray-600 text-xs md:mb-4 md:text-sm">
                  {region.description}
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <div
                    className="flex items-center font-medium text-xs md:text-sm"
                    style={{ color: regionColors[region.id].main }}
                  >
                    選択する
                    <svg
                      aria-hidden="true"
                      className="ml-1 h-3 w-3 transform transition-transform group-hover:translate-x-1 md:h-4 md:w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9 5l7 7-7 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
