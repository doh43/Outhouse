import Image from "next/image";
import Gallery from "@/components/Gallery";
import SearchBar from "@/components/SearchBar";
import Map from "@/components/Map";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Map />
      <Gallery />
    </main>
  );
}
