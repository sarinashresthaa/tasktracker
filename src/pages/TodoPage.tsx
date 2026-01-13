import Filter from "@/components/todo/Filter";
import TodoForm from "../components/todo/TodoForm";
import TodoTable from "../components/todo/TodoTable";

const TodoPage = () => {
  return (
    <div>
      <TodoForm />
      <Filter/>
      <TodoTable/>
    </div>
  );
};

export default TodoPage;
