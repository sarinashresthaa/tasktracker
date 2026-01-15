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
    <div className="m-4 md:m-6 border p-4 rounded-lg">
      
      <div className="flex justify-between gap-3">
        <button
          className="flex gap-2 cursor-pointer text-emerald-600 items-center"
          onClick={() => setShowFilters(!showFilters)}
        >
          <FilterIcon size={20} />
          {showFilters ? "Hide Filters" : "Show Filters"}
        </button>

        <button
          className="text-red-500 text-sm md:text-base"
          onClick={resetFilters}
        >
          Reset
        </button>
      </div>

     
      {showFilters && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
         
          <div className="flex flex-col gap-1">
            <label className="text-sm md:text-base font-medium">Created At</label>
            <input
              type="date"
              className="border p-2 rounded-md w-full"
              value={filters.createdAt}
              onChange={(e) =>
                setFilters({ ...filters, createdAt: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm md:text-base font-medium">Due Date</label>
            <input
              type="date"
              className="border p-2 rounded-md w-full"
              value={filters.dueDate}
              onChange={(e) =>
                setFilters({ ...filters, dueDate: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm md:text-base font-medium">Status</label>
            <select
              className="border p-2 rounded-md w-full"
              value={filters.status}
              onChange={(e) =>
                setFilters({ ...filters, status: e.target.value })
              }
            >
              <option value="">All</option>
              <option value="pending">Pending</option>
              <option value="in progress">In Progress</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
