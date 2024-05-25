import SearchCard from "@/components/searchCard/SearchCard";
import { MapView } from "@/components/home/MapView";

const SearchPage = ({ params }: { params: { searchid: string } }) => {
  return (
    <div className="flex h-5/6 w-5/6 border-2 border-solid-black">
      <div className="w-1/2 border border-solid-black">
        <SearchCard params={params} />
      </div>
      <div className="w-1/2 border border-solid-black">
        <MapView />
      </div>
    </div>
  );
};

export default SearchPage;
