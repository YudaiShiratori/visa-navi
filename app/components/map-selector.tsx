import { memo, useState } from "react";
import { Link } from "@remix-run/react";

const regions = [
  { id: "asia", name: "アジア", color: "#3b82f6", coords: "400,100,600,250" },
  { id: "europe", name: "ヨーロッパ", color: "#22c55e", coords: "300,80,450,180" },
  { id: "americas", name: "南北アメリカ", color: "#ef4444", coords: "100,50,300,400" },
  { id: "oceania", name: "オセアニア", color: "#8b5cf6", coords: "500,250,650,400" },
  { id: "africa", name: "アフリカ", color: "#f59e0b", coords: "250,150,400,350" },
  { id: "middle-east", name: "中東", color: "#ec4899", coords: "350,120,450,220" },
];

export function MapSelector() {
  const [activeRegion, setActiveRegion] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      <div className="relative aspect-[2/1] min-h-[500px] w-full overflow-hidden rounded-xl bg-white shadow-lg dark:bg-gray-800/50">
        <div className="relative h-full w-full">
          <img
            src="/images/world-map.png"
            alt="世界地図"
            className="h-full w-full object-contain"
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
          {activeRegion && (
            <div
              className="absolute pointer-events-none transition-all duration-200"
              style={{
                top: regions.find(r => r.id === activeRegion)?.coords.split(',')[1] + 'px',
                left: regions.find(r => r.id === activeRegion)?.coords.split(',')[0] + 'px',
                width: `${parseInt(regions.find(r => r.id === activeRegion)?.coords.split(',')[2] || '0') - 
                        parseInt(regions.find(r => r.id === activeRegion)?.coords.split(',')[0] || '0')}px`,
                height: `${parseInt(regions.find(r => r.id === activeRegion)?.coords.split(',')[3] || '0') - 
                         parseInt(regions.find(r => r.id === activeRegion)?.coords.split(',')[1] || '0')}px`,
                backgroundColor: `${regions.find(r => r.id === activeRegion)?.color}33`,
                border: `2px solid ${regions.find(r => r.id === activeRegion)?.color}`,
                borderRadius: '8px',
              }}
            />
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {regions.map((region) => (
          <Link
            key={region.id}
            to={`/map/${region.id}`}
            className={`group relative overflow-hidden rounded-xl p-6 transition-all hover:shadow-lg
              ${
                activeRegion === region.id 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-white text-gray-900 hover:bg-gray-50 dark:bg-gray-800/50 dark:text-white dark:hover:bg-gray-800'
              }`}
            onMouseEnter={() => setActiveRegion(region.id)}
            onMouseLeave={() => setActiveRegion(null)}
          >
            <div className="relative z-10">
              <h3 className="text-2xl font-bold">{region.name}</h3>
              <p className="mt-2 text-sm opacity-80">
                クリックして{region.name}の国を選択
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 