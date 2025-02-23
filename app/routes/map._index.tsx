import { MapSelector } from "~/components/map-selector";
import { Header } from "~/components/header";

export default function MapIndex() {
  return (
    <div>
      <Header />
      <div className="py-8">
        <h1 className="mb-8 text-center text-3xl font-bold">地域を選択してください</h1>
        <MapSelector />
      </div>
    </div>
  );
}
