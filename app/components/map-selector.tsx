import { Link } from "@remix-run/react";

const regions = [
  { id: "asia", name: "アジア", color: "from-blue-500 to-blue-600" },
  { id: "europe", name: "ヨーロッパ", color: "from-green-500 to-green-600" },
  { id: "americas", name: "南北アメリカ", color: "from-red-500 to-red-600" },
  { id: "oceania", name: "オセアニア", color: "from-purple-500 to-purple-600" },
  { id: "africa", name: "アフリカ", color: "from-yellow-500 to-yellow-600" },
  { id: "middle-east", name: "中東", color: "from-orange-500 to-orange-600" },
];

export function MapSelector() {
  return (
    <div className="relative">
      {/* 世界地図の背景 */}
      <div className="absolute inset-0 opacity-10">
        {/* SVGの世界地図をここに配置 */}
      </div>
      
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {regions.map((region) => (
          <Link
            key={region.id}
            to={`/map/${region.id}`}
            className={`group relative overflow-hidden rounded-xl bg-gradient-to-r ${region.color} p-6 transition-all hover:shadow-lg`}
          >
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white">{region.name}</h3>
              <p className="mt-2 text-sm text-white/80">
                クリックして{region.name}の国を選択
              </p>
            </div>
            
            <div className="absolute inset-0 bg-black opacity-0 transition-opacity group-hover:opacity-10" />
          </Link>
        ))}
      </div>
    </div>
  );
} 