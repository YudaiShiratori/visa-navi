import { Header } from "~/components/header";
import { MapSelector } from "~/components/map-selector";
import { SearchCountries } from "~/components/search-countries";

export default function MapIndex() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pb-20">
      <Header />
      
      <div className="pt-28 pb-12">
        <div className="container mx-auto max-w-6xl px-4">
          <h1 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            ビザ情報を調べる
          </h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
            地域から選ぶか、国名で検索して、日本人旅行者向けのビザ情報を確認できます。
          </p>

          <div className="space-y-20">
            <section className="bg-white rounded-2xl shadow-xl p-8 animate-fade-in">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <svg className="w-6 h-6 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                国名で検索
              </h2>
              <div className="max-w-xl mx-auto">
                <SearchCountries />
              </div>
            </section>

            <section className="animate-slide-up">
              <h2 className="text-2xl font-bold mb-8 flex items-center justify-center">
                <svg className="w-6 h-6 mr-2 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                地域から選ぶ
              </h2>
              <MapSelector />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
