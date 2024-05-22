import Gallery from "@/components/home/Gallery";
import { MapView } from "@/components/home/MapView";

const HomePage = () => {
  return (
    <main className="overflow-hidden">
      <MapView />

      <Gallery />
    </main>
  );
};

export default HomePage;
