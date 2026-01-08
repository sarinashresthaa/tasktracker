import { BsThreeDotsVertical } from "react-icons/bs";
import type { ITask } from "../../types/todo.types";
import { formatDate } from "../../utils/formatDate";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { FaEye, FaRegEdit } from "react-icons/fa";
import { useDeleteTodo } from "@/hooks/useTodos";
import { Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface TodoItemProps {
  todo: ITask;
  onEdit?: (todo: ITask) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onEdit }) => {
  const { mutateAsync: deleteTodo } = useDeleteTodo();

  const navigate= useNavigate();

  // const handleEdit = () => {
  //   if (onEdit) {
  //     onEdit(todo);
  //   }
  // };
  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete "${todo.title}"?`)) {
      deleteTodo(todo.id);
    }
  };

 
  return (
    <tr className="border-b hover:bg-gray-100 hover:text-emerald-600 cursor-pointer">
      <td className="p-3 text-sm ">{todo.id}</td>
      <td className="p-3 text-sm capitalize">{todo.title}</td>
      <td className="p-3 text-sm ">
        {todo.createdAt && formatDate(todo.createdAt)}
      </td>
      <td className="p-3 text-sm ">
        {todo.dueDate && formatDate(todo.dueDate)}
      </td>
      <td className="p-3 text-sm ">{todo.status}</td>
      <td className="p-3 text-sm ">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <BsThreeDotsVertical />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-36" align="end">
            <DropdownMenuGroup>
              <DropdownMenuItem
                onClick={()=>navigate(`/viewdetails/${todo.id}`)}
              >
                View Details
                <DropdownMenuShortcut>
                  <FaEye className="text-green-500" />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem >
                Update
                <DropdownMenuShortcut>
                  <FaRegEdit className="text-blue-500" />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleDelete} variant="destructive">
                Delete
                <DropdownMenuShortcut>
                  <Trash2 className="text-red-500" />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </td>
    </tr>
  );
};

export default TodoItem;
