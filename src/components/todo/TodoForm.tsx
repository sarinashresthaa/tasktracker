import { useState } from "react";
import { useCreateTodo } from "../../hooks/useTodos";
import { Spinner } from "../ui/spinner";
import { formatDate } from "@/utils/formatDate";

const TodoForm = () => {
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
    });

    setInputValue("");
    setDueDate("");
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex flex-col lg:flex-row gap-4 m-6 lg:m-8 lg:items-center xl:gap-6"
    >
      <input
        type="text"
        placeholder="Add a new task..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className=" border-3 focus:border-emerald-500 p-2 w-full rounded"
        required
      />
      <div className="flex flex-col w-full lg:flex-row lg:items-center ">
        <h1 className="font-medium text-gray-800 text-sm lg:text-base mb-1 lg:w-1/3 xl:w-1/6 w-full">
          Due Date:
        </h1>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="border-3 p-2 rounded w-full focus:border-emerald-500 "
          required
          min={formatDate( new Date())}
        />
      </div>
      <button
        type="submit"
        className="border bg-emerald-600 p-2 rounded text-white flex items-center justify-center gap-2 w-full lg:w-1/4 xl:w-1/5 font-semibold hover:bg-emerald-700 cursor-pointer"
      >
        {isPending ? (
          <>
            <Spinner className="w-6 h-6 text-white" />
          </>
        ) : (
          "Add Task"
        )}
      </button>
    </form>
  );
};

export default TodoForm;
