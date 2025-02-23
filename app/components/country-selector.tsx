import { Link } from "@remix-run/react";
import type { Country } from "~/data/countries";
import { InteractiveMap } from "./interactive-map";

type CountrySelectorProps = {
  region: string;
  countries: Country[];
};

export function CountrySelector({ region, countries }: CountrySelectorProps) {
  return (
    <div className="space-y-8">
      <InteractiveMap region={region} countries={countries} />
      
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {countries.map((country) => (
          <Link
            key={country.id}
            to={`/map/${region}/${country.id}`}
            className="group relative rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
          >
            <div className="flex items-center space-x-3">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {country.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  {country.visaFree ? (
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-200">
                      ビザ免除 {country.duration}日
                    </span>
                  ) : (
                    <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-200">
                      要ビザ
                    </span>
                  )}
                </p>
              </div>
              <svg
                className="h-5 w-5 text-gray-400 transition-colors group-hover:text-gray-900 dark:text-gray-500 dark:group-hover:text-gray-300"
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
          </Link>
        ))}
      </div>
    </div>
  );
}

function getRegionName(region: string): string {
  const regionNames: Record<string, string> = {
    asia: "アジア",
    europe: "ヨーロッパ",
    americas: "南北アメリカ",
    oceania: "オセアニア",
    africa: "アフリカ",
    "middle-east": "中東",
  };
  return regionNames[region] || region;
} 