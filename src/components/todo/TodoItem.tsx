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
import { useDeleteTodo, useUpdateTodo } from "@/hooks/useTodos";
import { Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useState } from "react";

interface TodoItemProps {
  todo: ITask;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const { mutateAsync: updateTodo } = useUpdateTodo();
  const { mutateAsync: deleteTodo } = useDeleteTodo();

  const navigate = useNavigate();

  //for update
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [dueDate, setDueDate] = useState(todo.dueDate);
  const [status, setStatus] = useState(todo.status);

  const handleUpdate = () => {
    updateTodo({ id: todo.id, data: { title, dueDate, status } });
    setOpen(false);
  };

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete "${todo.title}"?`)) {
      deleteTodo(todo.id);
    }
  };

  return (
    <>
      <tr className="border-b hover:bg-gray-100 hover:text-emerald-600 cursor-pointer">
        <td className="p-3 text-sm lg:text-base ">{todo.id}</td>
        <td className="p-3 text-sm lg:text-base capitalize">{todo.title}</td>
        <td className="p-3 text-sm lg:text-base ">
          {todo.createdAt && formatDate(todo.createdAt)}
        </td>
        <td className="p-3 text-sm lg:text-base ">
          {todo.dueDate && formatDate(todo.dueDate)}
        </td>
        <td className="p-3 text-sm lg:text-base">
          <span
            className={`px-3 py-1 rounded-full font-medium capitalize whitespace-nowrap
      ${
        todo.status === "pending"
          ? "text-yellow-700 bg-yellow-100"
          : todo.status === "in progress"
          ? "text-blue-700 bg-blue-100"
          : todo.status === "completed"
          ? "text-green-700 bg-green-100"
          : "text-gray-700 bg-gray-100"
      }`}
          >
            {todo.status}
          </span>
        </td>

        <td className="p-3 text-sm lg:text-base ">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <BsThreeDotsVertical />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-36" align="end">
              <DropdownMenuGroup>
                <DropdownMenuItem
                  onClick={() => navigate(`/viewdetails/${todo.id}`)}
                >
                  View Details
                  <DropdownMenuShortcut>
                    <FaEye className="text-green-500" />
                  </DropdownMenuShortcut>
                </DropdownMenuItem>

                {/* edit */}
                <DropdownMenuItem onClick={() => setOpen(true)}>
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

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-100">
          <DialogHeader>
            <DialogTitle className="text-emerald-700">Update Todo</DialogTitle>
          </DialogHeader>

          <div className="grid gap-4">
            <div>
              <Label>Title</Label>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="selection:bg-emerald-500"
              />
            </div>

            <div>
              <Label>Due date</Label>
              <Input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
            </div>

            <div>
              <Label>Status</Label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="pending">pending</option>
                <option value="in progress">in progress</option>
                <option value="completed">completed</option>
              </select>
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button
                variant="outline"
                className="border-emerald-500 hover:bg-emerald-50 text-emerald-700"
              >
                Cancel
              </Button>
            </DialogClose>
            <Button
              type="button"
              onClick={handleUpdate}
              className="bg-emerald-700 hover:bg-emerald-800"
            >
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default TodoItem;
