import { FilterIcon } from "lucide-react";
import { useState } from "react";

const Filter = () => {
  const [showFilters, setShowFilters] = useState(false);
  return (
    <div className="m-6 border  p-4 rounded">
      <button
        className="flex gap-2 cursor-pointer text-emerald-600 justify-center items-center"
        onClick={() => setShowFilters(!showFilters)}
      >
        <FilterIcon size={20} />
        {showFilters ? "Hide Filters" : "Show Filters"}
      </button>

      {showFilters && (
        <div className="flex p-4 gap-6">
          <div>
            <label>Created At:</label>
            <input type="date" className="border p-1 rounded-md" />
          </div>
          <div>
            <label>Due Date:</label>
            <input type="date" className="border p-1 rounded-md" />
          </div>
          <div>
            <label>Status</label>
            <select className="border p-1 rounded-md">
              <option value="pending">pending</option>
              <option value="in progress">in progress</option>
              <option value="completed">completed</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
