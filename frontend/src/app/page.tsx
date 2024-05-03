import Image from "next/image";
import Gallery from "@/components/Gallery";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <SearchBar />
      <Gallery />
    </main>
  );
}
