import type { ITask } from "../../types/todo.types";
import { formatDate } from "../../utils/formatDate";

interface TodoItemProps {
  todo: ITask;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return (
    <div>
      <h1>{todo.id}</h1>
      <h1>{todo.title}</h1>
      <h1>{formatDate(todo.createdAt)}</h1>
      <h1>{formatDate(todo.dueDate)}</h1>
      <h1>{todo.status}</h1>
    </div>
  );
};

export default TodoItem;
