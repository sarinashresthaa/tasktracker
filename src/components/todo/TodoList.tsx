import { useGetAllTodoApi } from "../../hooks/useTodos";
import { Spinner } from "../ui/spinner";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { data, isLoading } = useGetAllTodoApi();
  if (isLoading)
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Spinner className="size-8 text-green-500" />
      </div>
    );
  return (
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
            {data?.data.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoList;
