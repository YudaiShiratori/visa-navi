import { Link } from "@remix-run/react";

import { visaStatusColors } from "~/constants/colors";

import { InteractiveMap } from "./interactive-map";

import type { Country } from "~/data/countries";

interface CountrySelectorProps {
  region: string;
  countries: Country[];
}

export function CountrySelector({ region, countries }: CountrySelectorProps) {
  return (
    <div className="space-y-8">
      <InteractiveMap region={region} countries={countries} />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {countries.map((country) => (
          <Link
            key={country.id}
            to={`/map/${region}/${country.id}`}
            className="group relative overflow-hidden rounded-xl p-6 shadow transition-all hover:shadow-lg"
            style={{
              backgroundColor: visaStatusColors[country.visaRequirement.type].light,
              borderColor: visaStatusColors[country.visaRequirement.type].main,
              borderWidth: "1px",
            }}
          >
            <div className="flex items-center space-x-3">
              <div className="flex-1">
                <h3
                  className="text-lg font-semibold"
                  style={{ color: visaStatusColors[country.visaRequirement.type].main }}
                >
                  {country.name}
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  <span
                    className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium"
                    style={{
                      backgroundColor: visaStatusColors[country.visaRequirement.type].light,
                      color: visaStatusColors[country.visaRequirement.type].main,
                    }}
                  >
                    {country.visaRequirement.type === "visa_free"
                      ? `ビザ免除 ${country.visaRequirement.duration}日`
                      : null}
                    {country.visaRequirement.type === "evisa" ? "電子ビザ" : null}
                    {country.visaRequirement.type === "visa_required" ? "要ビザ" : null}
                  </span>
                </p>
              </div>
              <svg
                className="h-5 w-5 text-gray-400 transition-colors group-hover:text-gray-900"
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
