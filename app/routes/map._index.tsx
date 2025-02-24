import { Header } from "~/components/header";
import { MapSelector } from "~/components/map-selector";
import { SearchCountries } from "~/components/search-countries";

export default function MapIndex() {
  return (
    <div>
      <Header />
      <div className="py-8">
        <h1 className="mb-8 text-center text-3xl font-bold">ビザ情報を調べる</h1>

        <div className="space-y-16">
          <section>
            <h2 className="mb-4 text-center text-2xl font-bold">文字検索から探す</h2>
            <div className="mx-auto max-w-lg px-4">
              <SearchCountries />
            </div>
          </section>

          <section>
            <h2 className="mb-8 text-center text-2xl font-bold">地域を選んで探す</h2>
            <MapSelector />
          </section>
        </div>
      </div>
    </div>
  );
}
