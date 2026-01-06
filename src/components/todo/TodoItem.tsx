import type { ITask } from "../../types/todo.types";
import { formatDate } from "../../utils/formatDate";

interface TodoItemProps {
  todo: ITask;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return (
    <tr className="border-b hover:bg-blue-50 cursor-pointer">
      <td className="p-3 text-sm text-gray-700">{todo.id}</td>
      <td className="p-3 text-sm text-gray-700">{todo.title}</td>
      <td className="p-3 text-sm text-gray-700">{todo.createdAt && formatDate(todo.createdAt)}</td>
      <td className="p-3 text-sm text-gray-700">{todo.dueDate && formatDate(todo.dueDate)}</td>
      <td className="p-3 text-sm text-gray-700">{todo.status}</td>
      <td className="p-3 text-sm text-gray-700"> </td>
    </tr>
  );
};

export default TodoItem;
