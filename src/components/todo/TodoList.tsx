
import { useGetAllTodoApi } from "../../hooks/useTodos"
import TodoItem from "./TodoItem";

const TodoList = () => {
    const{data} = useGetAllTodoApi();
  return (
    <div>
      <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Created At</th>
                <th>Due Date</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>{data?.data.map((todo)=>(
            <TodoItem key={todo.id} todo={todo}/>
        ))} </tbody>
      </table>
    </div>
  )
}

export default TodoList
