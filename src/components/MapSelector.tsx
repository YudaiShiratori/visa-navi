"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

import { ClientOnly } from "./ClientOnly";
import { RegionMap } from "./RegionMap";
import { type RegionId, regionColors } from "../constants/colors";
import { countries } from "../data/countries";
import { sendGAEvent } from "../utils/analytics";

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

  countries.forEach((country) => {
    const region = country.region;
    countryCounts[region] = (countryCounts[region] || 0) + 1;
  });

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
    id: "middle-east",
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
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [tooltipContent, setTooltipContent] = useState("");
  const mapRef = useRef<HTMLDivElement>(null);
  const regionsWithCounts = getRegionWithCountryCounts();

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

  const handleMapMouseMove = (e: React.MouseEvent) => {
    if (!mapRef.current || !hoveredRegion) return;

    const rect = mapRef.current.getBoundingClientRect();
    setTooltipPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top - 40,
    });
  };

  const handleRegionHover = (regionId: string | null) => {
    setHoveredRegion(regionId);

    if (regionId) {
      const region = regionsWithCounts.find((r) => r.id === regionId);
      if (region) {
        setTooltipContent(`${region.name} (${region.countryCount}カ国)`);
        setShowTooltip(true);
      }
    } else {
      setShowTooltip(false);
    }
  };

  return (
    <div className="space-y-8 md:space-y-12">
      <div
        ref={mapRef}
        className="relative z-10 mx-auto aspect-[2/1] w-full max-w-4xl overflow-hidden rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-lg transition-all duration-300 hover:shadow-xl md:rounded-3xl md:shadow-xl"
        onMouseMove={handleMapMouseMove}
      >
        {/* ツールチップ */}
        <AnimatePresence>
          {showTooltip && !isMobile && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="pointer-events-none absolute z-30 rounded-lg bg-black bg-opacity-75 px-3 py-1 text-sm text-white shadow-lg"
              style={{
                left: `${tooltipPosition.x}px`,
                top: `${tooltipPosition.y}px`,
                transform: "translate(-50%, -100%)",
              }}
            >
              {tooltipContent}
            </motion.div>
          )}
        </AnimatePresence>

        <div
          className={`pointer-events-none absolute inset-0 z-20 flex items-center justify-center bg-white/50 backdrop-blur-sm transition-opacity duration-300 ${
            hoveredRegion ? "opacity-0" : "opacity-100"
          }`}
        >
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
            onRegionHover={handleRegionHover}
          />
        </ClientOnly>
      </div>

      <div className="grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 sm:gap-6 md:px-0 lg:grid-cols-3">
        {regionsWithCounts.map((region) => (
          <motion.div
            key={region.id}
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link
              href={`/region/${region.id}`}
              className="group relative flex h-full flex-col overflow-hidden rounded-xl p-4 transition-all duration-300 md:p-6"
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

              <div className="relative z-10 flex flex-grow flex-col">
                <div
                  className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl md:mb-4 md:h-16 md:w-16"
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
                <p className="mb-3 text-xs text-gray-600 md:mb-4 md:text-sm">
                  {region.description}
                </p>

                <div className="mt-auto flex items-center justify-between">
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

                  <span className="rounded-full bg-white bg-opacity-50 px-2 py-1 text-xs font-medium text-gray-700">
                    {region.countryCount}カ国
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
