import { Search } from "lucide-react";

interface SearchingProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

const Searching = ({ searchValue, setSearchValue }: SearchingProps) => {
  return (
    <div className="m-6 border p-4 rounded bg-gray-100">
      <div className="flex gap-2 items-center">
        <Search size={20} className="text-gray-500" />
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search by title, or status..."
          className="focus:outline-none w-full"
        />
      </div>
    </div>
  );
};

export default Searching;