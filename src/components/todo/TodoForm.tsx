import { useState } from "react";
import { useCreateTodo } from "../../hooks/useTodos";
import { Spinner } from "../ui/spinner";

const TodoForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [dueDate, setDueDate] = useState("");
  const { mutate, isPending } = useCreateTodo();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue) return;

    // Check if input is empty FIRST
    if (!inputValue.trim()) return;

    mutate({
      title: inputValue,
      status: "pending",
      dueDate: dueDate,
    });

    setInputValue("");
    setDueDate("");
  };
  

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex gap-4 m-8 items-center w-full "
    >
      <input
        type="text"
        placeholder="Add a new task..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className=" border-3 focus:border-emerald-500 p-2 w-1/3 rounded"
      />
      <h1 className="font-medium text-gray-800 ">Due Date:</h1>
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="border-3 p-2 rounded w-1/4 focus:border-emerald-500 "
        required
      />
      {isPending && <Spinner className="w-10 h-10 text-emerald-500" />}
      <button
        type="submit"
        className="border bg-emerald-600 p-2 rounded text-white "
      >
        Add task
      </button>
    </form>
  );
};

export default TodoForm;
