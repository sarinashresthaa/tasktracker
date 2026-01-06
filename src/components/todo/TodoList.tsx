import { useGetAllTodoApi } from "../../hooks/useTodos";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { data } = useGetAllTodoApi();
  return (
    <div className="border border-gray-300 m-6 shadow-md rounded">
      <table className="w-full">
        <thead className="bg-red-300">
          <tr>
            <th className="p-3 text-left text-sm font-semibold text-gray-700 border-b ">
              ID
            </th>
            <th className="p-3 text-left text-sm font-semibold text-gray-700 border-b ">
              Title
            </th>
            <th className="p-3 text-left text-sm font-semibold text-gray-700 border-b ">
              Created At
            </th>
            <th className="p-3 text-left text-sm font-semibold text-gray-700 border-b ">
              Due Date
            </th>
            <th className="p-3 text-left text-sm font-semibold text-gray-700 border-b ">
              Status
            </th>
            <th className="p-3 text-left text-sm font-semibold text-gray-700 border-b ">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-blue-100">
          {data?.data.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}{" "}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
