import { useState } from "react";
import { useGetAllTodoApi } from "../../hooks/useTodos";
import { Spinner } from "../ui/spinner";
import TodoItem from "./TodoItem";
import Searching from "./Search";
import Filter from "./Filter";
import { ChevronDown, ChevronUp } from "lucide-react";
import TodoForm from "./TodoForm";

const TodoTable = () => {
  const [showForm, setShowForm] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  //for filter
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    createdAt: "",
    dueDate: "",
    status: "",
  });
  const resetFilters = () => {
    setSearchValue("");
    setFilters({
      createdAt: "",
      dueDate: "",
      status: "",
    });
  };

  const { data, isLoading } = useGetAllTodoApi();
  
  const filteredTodos = data?.data.filter((todo) => {
    const matchSearch =
      todo.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      todo.status.toLowerCase().includes(searchValue.toLowerCase());

    const matchCreated =
      !filters.createdAt || todo.createdAt.startsWith(filters.createdAt);

    const matchDue =
      !filters.dueDate || todo.dueDate.startsWith(filters.dueDate);

    const matchStatus = !filters.status || todo.status === filters.status;

    return matchSearch && matchCreated && matchDue && matchStatus;
  });

  //for sorting createdAt
  const [sort, setSort] = useState(true);

  const sortedTodos = filteredTodos?.slice()?.sort((a, b) => {
    const acc = new Date(a.createdAt).getTime();
    const dec = new Date(b.createdAt).getTime();

    return sort ? dec - acc : acc - dec;
  });
  
  if (isLoading)
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Spinner className="size-8 text-green-500" />
      </div>
    );


  return (
    <>
      <div className="w-full flex flex-col lg:flex-row">
        <Searching searchValue={searchValue} setSearchValue={setSearchValue} />
        <div className=" mx-6 my-4 lg:w-1/3">
          <button
            className="border bg-emerald-600 p-2 rounded text-white 
          w-full sm:w-1/2 md:w-1/3 lg:w-1/5 xl:w-1/5 font-semibold hover:bg-emerald-700 cursor-pointer"
            onClick={() => setShowForm(!showForm)}
          >
            Add Todo
          </button>
        </div>
      </div>
      <TodoForm isOpen={showForm} onClose={() => setShowForm(false)} />
      <Filter
        showFilters={showFilters}
        setShowFilters={setShowFilters}
        filters={filters}
        setFilters={setFilters}
        resetFilters={resetFilters}
      />
      <div className="border border-gray-300 m-6 shadow-md rounded-md overflow-hidden ">
        <div className="overflow-x-auto">
          <table className="w-full min-w-175">
            <thead className="bg-emerald-600">
              <tr>
                <th className="p-3 text-left text-sm lg:text-base font-semibold text-white border-b ">
                  ID
                </th>
                <th className="p-3 text-left text-sm lg:text-base font-semibold text-white border-b ">
                  Title
                </th>
                <th className="p-3 text-left text-sm lg:text-base font-semibold text-white border-b ">
                  <div className="flex items-center gap-1">
                    <span>Created At</span>
                    <button onClick={() => setSort(!sort)}>
                      {sort ? <ChevronUp /> : <ChevronDown />}
                    </button>
                  </div>
                </th>
                <th className="p-3 text-left text-sm lg:text-base font-semibold text-white border-b ">
                  Due Date
                </th>
                <th className="p-3 text-left text-sm lg:text-base font-semibold text-white border-b ">
                  Status
                </th>
                <th className="p-3 text-left text-sm lg:text-base font-semibold text-white border-b ">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {sortedTodos?.map((todo, i) => (
                <TodoItem key={todo.id} index={i + 1} todo={todo} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TodoTable;
