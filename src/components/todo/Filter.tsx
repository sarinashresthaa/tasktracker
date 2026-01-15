import { FilterIcon } from "lucide-react";

interface FilterProps {
  showFilters: boolean;
  setShowFilters: (value: boolean) => void;
  filters: {
    createdAt: string;
    dueDate: string;
    status: string;
  };
  setFilters: React.Dispatch<React.SetStateAction<any>>;
  resetFilters: () => void;
}
const Filter = ({
  showFilters,
  setShowFilters,
  filters,
  setFilters,
  resetFilters,
}: FilterProps) => {
  return (
    <div className="m-6 border p-4 rounded">
      <div className="flex justify-between">
        <button
          className="flex gap-2 cursor-pointer text-emerald-600 justify-center items-center"
          onClick={() => setShowFilters(!showFilters)}
        >
          <FilterIcon size={20} />
          {showFilters ? "Hide Filters" : "Show Filters"}
        </button>
        <button className="text-red-500" onClick={resetFilters}>
          Reset
        </button>      
      </div>

      {showFilters && (
        <div className="flex p-4 gap-6">
          <div>
            <label>Created At:</label>
            <input
              type="date"
              className="border p-1 rounded-md"
              value={filters.createdAt}
              onChange={(e) =>
                setFilters({ ...filters, createdAt: e.target.value })
              }
            />
          </div>
          <div>
            <label>Due Date:</label>
            <input
              type="date"
              className="border p-1 rounded-md"
              value={filters.dueDate}
              onChange={(e) =>
                setFilters({ ...filters, dueDate: e.target.value })
              }
            />
          </div>
          <div>
            <label>Status</label>
            <select
              className="border p-1 rounded-md"
              value={filters.status}
              onChange={(e) =>
                setFilters({ ...filters, status: e.target.value })
              }
            >
              <option value="">All</option>
              <option value="pending">pending</option>
              <option value="in progress">in progress</option>
              <option value="completed">completed</option>
              <option value="cancelled">cancelled</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
