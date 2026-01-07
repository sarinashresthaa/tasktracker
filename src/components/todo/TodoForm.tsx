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
      className="flex gap-4 m-8 justify-center items-center"
    >
      <input
        type="text"
        placeholder="Add a new task..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className=" border py-2 rounded px-12"
      />
      <h1 className="font-medium">Due Date:</h1>
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="border p-2 rounded"
      />
      {isPending && <Spinner className="w-10 h-10 text-emerald-500" />}
      <button
        type="submit"
        className="border bg-emerald-600 p-2 rounded text-white"
      >
        Add task
      </button>
    </form>
  );
};

export default TodoForm;
