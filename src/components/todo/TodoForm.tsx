import { useState } from "react";
import { useCreateTodo } from "../../hooks/useTodos";

const TodoForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [dueDate, setDueDate] = useState("");
  const createTodo = useCreateTodo();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    createTodo.mutate({
      title: inputValue,
      status: "pending",
      dueDate: new Date().toISOString(),
    });

    if (!inputValue) return;
    setInputValue("");
    setDueDate("");
  };

  return (
    <form onSubmit={handleFormSubmit} className="flex gap-4 m-8 justify-center items-center">
      <input
        type="text"
        placeholder="Add a new task..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className=" border p-2 rounded "
      />
      <h1 className="font-medium">Due Date:</h1>
      <input type="date" value={dueDate} onChange={(e)=>setDueDate(e.target.value)} className="border p-2 rounded" />

      <button
        type="submit"
        className="border bg-green-500 p-2 rounded text-white"
      >
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
