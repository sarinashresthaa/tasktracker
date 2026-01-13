import { useState } from "react";
import { useGetAllTodoApi } from "../../hooks/useTodos";
import { Spinner } from "../ui/spinner";
import TodoItem from "./TodoItem";
import Searching from "./Search";

const TodoTable = () => {
  const [searchValue, setSearchValue] = useState("");
  console.log(searchValue);

  const { data, isLoading } = useGetAllTodoApi();
  if (isLoading)
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Spinner className="size-8 text-green-500" />
      </div>
    );

    const filteredTodos = data?.data.filter(todo =>
      todo.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      todo.status.toLowerCase().includes(searchValue.toLowerCase()) 
    )
  return (
    <>
      <Searching searchValue={searchValue} setSearchValue={setSearchValue} />
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
                  Created At
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
              {/* {data?.data
                 .filter((todo) => {
                   return searchValue.toLowerCase() === ""
                    ? todo
                    : todo.title
                        .toLowerCase()
                       .includes(searchValue.toLowerCase());
                 }) */}
                {filteredTodos?.map((todo, i) => (
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
