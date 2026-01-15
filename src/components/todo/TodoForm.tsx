import { useState } from "react";
import { useCreateTodo } from "../../hooks/useTodos";
import { Spinner } from "../ui/spinner";
import { formatDate } from "@/utils/formatDate";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";

interface TodoFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const TodoForm = ({ isOpen, onClose }: TodoFormProps) => {
  const [inputValue, setInputValue] = useState("");
  const [dueDate, setDueDate] = useState("");
  const { mutate, isPending } = useCreateTodo();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if input is empty FIRST
    if (!inputValue.trim()) return;

    mutate({
      title: inputValue,
      status: "pending",
      dueDate: dueDate,
    }, {
        onSuccess: () => {
          onClose(); // close modal
          setInputValue("");
          setDueDate("");
        },
      });
  };

  return (
    
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogOverlay className="bg-white/5 backdrop-blur-sm" />
        <DialogContent className="sm:max-w-100 ">
          <DialogHeader>
            <DialogTitle className="text-emerald-700">Add Todo</DialogTitle>
          </DialogHeader>
          <form
            onSubmit={handleFormSubmit}
            className="flex flex-col gap-4 "
          >
            <input
              type="text"
              placeholder="Add a new task..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className=" border-3 focus:border-emerald-500 p-2 w-full rounded"
              required
            />
            <div className="flex flex-col w-full">
              <h1 className="font-medium text-gray-800 text-sm lg:text-base mb-1 w-full">
                Due Date:
              </h1>
              <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="border-3 p-2 rounded w-full focus:border-emerald-500 "
                required
                min={formatDate(new Date())}
              />
            </div>
            <DialogFooter className="flex md:gap-4">
              <DialogClose asChild>
                <Button
                  variant="outline"
                  className="border-emerald-500 hover:bg-emerald-50 text-emerald-700"
                >
                  Cancel
                </Button>
              </DialogClose>
              <Button
                type="submit"
                className=" bg-emerald-600  hover:bg-emerald-700 cursor-pointer"
              >
                {isPending ? (
                  <>
                    <Spinner className="w-6 h-6 text-white" />
                  </>
                ) : (
                  "Add"
                )}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
  );
};

export default TodoForm;
