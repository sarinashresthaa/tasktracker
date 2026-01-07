import { BsThreeDotsVertical } from "react-icons/bs";
import type { ITask } from "../../types/todo.types";
import { formatDate } from "../../utils/formatDate";

interface TodoItemProps {
  todo: ITask;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return (
    <tr className="border-b hover:bg-gray-100 hover:text-emerald-600 cursor-pointer">
      <td className="p-3 text-sm ">{todo.id}</td>
      <td className="p-3 text-sm capitalize">{todo.title}</td>
      <td className="p-3 text-sm not-[]:">{todo.createdAt && formatDate(todo.createdAt)}</td>
      <td className="p-3 text-sm ">{todo.dueDate && formatDate(todo.dueDate)}</td>
      <td className="p-3 text-sm ">{todo.status}</td>
      <td className="p-3 text-sm "><BsThreeDotsVertical /> </td>
    </tr>
  );
};

export default TodoItem;
